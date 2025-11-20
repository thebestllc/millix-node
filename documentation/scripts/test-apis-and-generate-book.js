#!/usr/bin/env node

/**
 * ============================================================================
 * Millix API Comprehensive Tester and Book Content Generator
 * ============================================================================
 * 
 * This script comprehensively tests Millix node APIs and generates formatted
 * content suitable for documentation and books. It reads node credentials from
 * node.json and millix_private_key.json files.
 * 
 * REQUIRED FILES:
 * ---------------
 * 1. node.json - Must contain:
 *    {
 *      "key": "xprv...",              // Extended private key (BIP32)
 *      "node_id": "1ABC...",          // Node identifier
 *      "node_signature": "2XYZ..."    // Node signature for authentication
 *    }
 * 
 * 2. millix_private_key.json - Must contain:
 *    {
 *      "mnemonic_phrase": "word1 word2 ... word24"  // 24-word BIP39 mnemonic
 *    }
 * 
 * ADDITIONAL INFORMATION REQUIRED FOR SOME ENDPOINTS:
 * ---------------------------------------------------
 * Some endpoints require additional context that may not be available at test time.
 * The script will attempt to gather this information dynamically when possible:
 * 
 * - Address Information:
 *   * For address-related endpoints, the script will use addresses from:
 *     - get_session (if wallet session is active)
 *     - list_keychain_address (if wallet is loaded)
 *     - list_address (recent addresses)
 *   * If no addresses are found, those endpoints will be skipped with a note
 * 
 * - Transaction Information:
 *   * For transaction-specific endpoints, the script will use:
 *     - list_transaction (to get recent transaction IDs)
 *     - get_stat_summary (to understand transaction state)
 *   * If no transactions are found, those endpoints will be skipped
 * 
 * - Shard Information:
 *   * For shard-specific endpoints, the script will use:
 *     - list_shard (to get available shard IDs)
 *   * The genesis shard is always available
 * 
 * - Wallet Session:
 *   * Some endpoints require an active wallet session:
 *     - new_session (requires passphrase - will be skipped if not provided)
 *     - get_session (to check if session exists)
 *   * Wallet endpoints will be tested if session is available
 * 
 * - Passphrase:
 *   * For wallet operations, you may need to provide a passphrase via:
 *     - Environment variable: MILLIX_PASSPHRASE
 *     - Or create a passphrase.json file: { "passphrase": "your-passphrase" }
 *   * If not provided, wallet session endpoints will be skipped
 * 
 * USAGE:
 * ------
 *   node test-apis-and-generate-book.js [options]
 * 
 * OPTIONS:
 * --------
 *   --host <host>              API host (default: localhost)
 *   --port <port>              API port (default: 5500)
 *   --output <file>            Output file for book content (default: api-test-results.md)
 *   --format <format>          Output format: markdown, json, both (default: markdown)
 *   --skip-ssl-check           Skip SSL certificate verification (for self-signed certs)
 *   --passphrase <phrase>      Wallet passphrase for session-based endpoints
 *   --test-all                 Test all endpoints including those requiring additional data
 *   --skip-wallet              Skip wallet-related endpoints
 *   --skip-transaction         Skip transaction-specific endpoints
 *   --verbose                  Show detailed output for each test
 * 
 * EXAMPLE:
 * --------
 *   # Basic usage
 *   node test-apis-and-generate-book.js
 * 
 *   # With wallet passphrase
 *   node test-apis-and-generate-book.js --passphrase "my-secret-passphrase"
 * 
 *   # Test against remote node
 *   node test-apis-and-generate-book.js --host 192.168.1.100 --port 5500 --skip-ssl-check
 * 
 *   # Generate both markdown and JSON
 *   node test-apis-and-generate-book.js --format both
 * 
 * OUTPUT:
 * -------
 * The script generates comprehensive documentation including:
 * - Test summary with success/failure statistics
 * - Detailed results for each API endpoint
 * - Response data in JSON format
 * - Insights and documentation notes
 * - Usage examples suitable for book content
 * - Node statistics and configuration information
 * - API categorization and grouping
 * 
 * ============================================================================
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

// Configuration
const DEFAULT_HOST = 'localhost';
const DEFAULT_PORT = 5500;
const DEFAULT_OUTPUT = 'api-test-results.md';
const SCRIPT_DIR = __dirname;

// Parse command line arguments
const args = process.argv.slice(2);
const config = {
    host: DEFAULT_HOST,
    port: DEFAULT_PORT,
    output: DEFAULT_OUTPUT,
    format: 'markdown',
    skipSslCheck: false,
    passphrase: process.env.MILLIX_PASSPHRASE || null,
    testAll: false,
    skipWallet: false,
    skipTransaction: false,
    verbose: false
};

// Runtime context (populated during execution)
const context = {
    addresses: [],
    transactions: [],
    shards: [],
    walletSession: null,
    nodeInfo: null
};

for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
        case '--host':
            config.host = args[++i];
            break;
        case '--port':
            config.port = parseInt(args[++i]);
            break;
        case '--output':
            config.output = args[++i];
            break;
        case '--format':
            config.format = args[++i];
            break;
        case '--skip-ssl-check':
            config.skipSslCheck = true;
            break;
        case '--passphrase':
            config.passphrase = args[++i];
            break;
        case '--test-all':
            config.testAll = true;
            break;
        case '--skip-wallet':
            config.skipWallet = true;
            break;
        case '--skip-transaction':
            config.skipTransaction = true;
            break;
        case '--verbose':
            config.verbose = true;
            break;
    }
}

// Try to load passphrase from file
if (!config.passphrase) {
    try {
        const passphrasePath = path.join(SCRIPT_DIR, 'passphrase.json');
        if (fs.existsSync(passphrasePath)) {
            const passphraseData = JSON.parse(fs.readFileSync(passphrasePath, 'utf8'));
            config.passphrase = passphraseData.passphrase;
        }
    } catch (e) {
        // Ignore if file doesn't exist
    }
}

// Load credentials
let nodeConfig, walletConfig;
try {
    const nodeConfigPath = path.join(SCRIPT_DIR, 'node.json');
    const walletConfigPath = path.join(SCRIPT_DIR, 'millix_private_key.json');
    
    nodeConfig = JSON.parse(fs.readFileSync(nodeConfigPath, 'utf8'));
    walletConfig = JSON.parse(fs.readFileSync(walletConfigPath, 'utf8'));
    
    console.log('✓ Loaded node credentials');
    console.log(`  Node ID: ${nodeConfig.node_id}`);
} catch (error) {
    console.error('✗ Error loading configuration files:', error.message);
    process.exit(1);
}

// Comprehensive API endpoint definitions
// Organized by category for better documentation
const API_ENDPOINTS = [
    // ========================================================================
    // PUBLIC ENDPOINTS (No authentication required)
    // ========================================================================
    {
        name: 'get_node_id',
        id: 'ZFAYRM8LRtmfYp4Y',
        method: 'GET',
        requireIdentity: false,
        category: 'public',
        description: 'Identifies the node_id responding to the request at the provided IP address and api port',
        params: {},
        priority: 'high'
    },
    {
        name: 'get_random_mnemonic',
        id: 'Gox4NzTLDnpEr10v',
        method: 'GET',
        requireIdentity: false,
        category: 'public',
        description: 'Returns a random mnemonic phrase (24 words, BIP39)',
        params: {},
        priority: 'high'
    },
    
    // ========================================================================
    // NODE INFORMATION ENDPOINTS
    // ========================================================================
    {
        name: 'list_node',
        id: '0eoUqXNE715mBVqV',
        method: 'GET',
        requireIdentity: true,
        category: 'node',
        description: 'Returns a list of peer nodes known by the host',
        params: { p2: '10' },
        priority: 'high'
    },
    {
        name: 'list_node_memory_extended',
        id: 'vM27tlHkqbRej6tP',
        method: 'GET',
        requireIdentity: true,
        category: 'node',
        description: 'Returns a list of all peer nodes (node table and memory list)',
        params: { p2: '5' },
        priority: 'medium'
    },
    {
        name: 'list_node_attribute',
        id: 'AgsSNTSA0RHmWUkp',
        method: 'GET',
        requireIdentity: true,
        category: 'node',
        description: 'Returns records from table node_attributes',
        params: { p4: '10' },
        priority: 'medium'
    },
    {
        name: 'get_node_public_ip',
        id: 'qRHogKQ1Bb7OT4N9',
        method: 'GET',
        requireIdentity: true,
        category: 'node',
        description: 'Get node public IP address',
        params: {},
        priority: 'medium'
    },
    {
        name: 'get_available_version',
        id: 'WGem8x5aycBqFXWQ',
        method: 'GET',
        requireIdentity: true,
        category: 'node',
        description: 'Returns available client/browser version',
        params: {},
        priority: 'medium'
    },
    {
        name: 'get_os_info',
        id: 'RLOk0Wji0lQVjynT',
        method: 'GET',
        requireIdentity: true,
        category: 'node',
        description: 'Get the node OS info including CPU, memory, and system details',
        params: {},
        priority: 'high'
    },
    
    // ========================================================================
    // STATISTICS AND SUMMARY ENDPOINTS
    // ========================================================================
    {
        name: 'get_stat_summary',
        id: 'rKclyiLtHx0dx55M',
        method: 'GET',
        requireIdentity: true,
        category: 'statistics',
        description: 'Get comprehensive node stat summary including balance, network, and transaction info',
        params: {},
        priority: 'high'
    },
    {
        name: 'get_node_transaction_stat_summary',
        id: 'C9rEOewwhQDijCnN',
        method: 'GET',
        requireIdentity: true,
        category: 'statistics',
        description: 'Returns a summary of transaction statistics from the host',
        params: {},
        priority: 'high'
    },
    {
        name: 'get_node_address_stat_summary',
        id: 'Bz73Dm7u3dKlXDS8',
        method: 'GET',
        requireIdentity: true,
        category: 'statistics',
        description: 'Returns a summary of address statistics from the host',
        params: {},
        priority: 'high'
    },
    {
        name: 'get_unspent_output_summary',
        id: 'FC8ylC617zzn1Gaa',
        method: 'GET',
        requireIdentity: true,
        category: 'statistics',
        description: 'Returns the unspent output stat summary',
        params: {},
        priority: 'medium'
    },
    {
        name: 'get_transaction_output_stats',
        id: 'wWo8DCcoXVlpczoP',
        method: 'GET',
        requireIdentity: true,
        category: 'statistics',
        description: 'Get transaction output statistics',
        params: { p14: '10' },
        priority: 'medium'
    },
    
    // ========================================================================
    // CONFIGURATION ENDPOINTS
    // ========================================================================
    {
        name: 'list_config_public',
        id: 'hXwPQrVhLEALFsIJ',
        method: 'GET',
        requireIdentity: true,
        category: 'configuration',
        description: 'Returns public config values',
        params: { p3: '20' },
        priority: 'high'
    },
    {
        name: 'list_config_private',
        id: 'CZOTAF5LfusB1Ht5',
        method: 'GET',
        requireIdentity: true,
        category: 'configuration',
        description: 'Returns private config values that are only available to the node operator',
        params: { p3: '10' },
        priority: 'medium',
        private: true
    },
    {
        name: 'get_config_by_name',
        id: '2wYLWQfWBa6GLPYs',
        method: 'GET',
        requireIdentity: true,
        category: 'configuration',
        description: 'Get node config by name',
        params: {},
        priority: 'low',
        requiresParam: 'config_name'
    },
    {
        name: 'get_storage_config',
        id: 'kIoe20LWh2aw3CAu',
        method: 'GET',
        requireIdentity: true,
        category: 'configuration',
        description: 'Returns storage related config',
        params: {},
        priority: 'medium',
        private: true
    },
    
    // ========================================================================
    // SHARD ENDPOINTS
    // ========================================================================
    {
        name: 'list_shard',
        id: 'OMAlxmPq4rZs71K8',
        method: 'GET',
        requireIdentity: true,
        category: 'shard',
        description: 'Returns records from table shard',
        params: {},
        priority: 'high'
    },
    
    // ========================================================================
    // ADDRESS ENDPOINTS
    // ========================================================================
    {
        name: 'list_address',
        id: '72dlrjquBORj0rhx',
        method: 'GET',
        requireIdentity: true,
        category: 'address',
        description: 'Returns records from table address',
        params: { p6: '10' },
        priority: 'high'
    },
    {
        name: 'list_address_version',
        id: '3XqkzNFzaTk1JPRf',
        method: 'GET',
        requireIdentity: true,
        category: 'address',
        description: 'Return records from table address_version',
        params: {},
        priority: 'high'
    },
    {
        name: 'verify_address',
        id: 'Xim7SaikcsHICvfQ',
        method: 'GET',
        requireIdentity: true,
        category: 'address',
        description: 'Verifies if an address is valid',
        params: {},
        priority: 'medium',
        requiresParam: 'address',
        dynamicParam: () => context.addresses[0] || null
    },
    {
        name: 'get_address_balance',
        id: 'zLsiAkocn90e3K6R',
        method: 'GET',
        requireIdentity: true,
        category: 'address',
        description: 'Returns the available (stable) balance and pending (unstable) balance of an address',
        params: {},
        priority: 'high',
        requiresParam: 'address',
        dynamicParam: () => context.addresses[0] || null
    },
    {
        name: 'get_known_address_balance',
        id: 'xGaf7vbfY15TGsSd',
        method: 'GET',
        requireIdentity: true,
        category: 'address',
        description: 'Returns the balance of all known addresses',
        params: {},
        priority: 'medium',
        private: true
    },
    
    // ========================================================================
    // TRANSACTION ENDPOINTS
    // ========================================================================
    {
        name: 'list_transaction',
        id: 'l4kaEhMnhjB5yseq',
        method: 'GET',
        requireIdentity: true,
        category: 'transaction',
        description: 'Returns a list of transaction records from table transaction',
        params: { p10: '10' },
        priority: 'high',
        skipIf: () => config.skipTransaction
    },
    {
        name: 'list_transaction_output',
        id: 'FDLyQ5uo5t7jltiQ',
        method: 'GET',
        requireIdentity: true,
        category: 'transaction',
        description: 'Returns records from table transaction_output',
        params: { p14: '10' },
        priority: 'high',
        skipIf: () => config.skipTransaction
    },
    {
        name: 'list_transaction_input',
        id: 'I3EoELuQCmqwvp8C',
        method: 'GET',
        requireIdentity: true,
        category: 'transaction',
        description: 'Returns records from table transaction_input',
        params: { p10: '10' },
        priority: 'medium',
        skipIf: () => config.skipTransaction
    },
    {
        name: 'get_transaction',
        id: 'wDyC195wgjPjM2Ut',
        method: 'GET',
        requireIdentity: true,
        category: 'transaction',
        description: 'Returns a single record from table transaction',
        params: {},
        priority: 'medium',
        requiresParam: 'transaction_id',
        requiresParam2: 'shard_id',
        dynamicParam: () => context.transactions[0]?.transaction_id || null,
        dynamicParam2: () => context.transactions[0]?.shard_id || context.shards[0]?.shard_id || null,
        skipIf: () => config.skipTransaction || !context.transactions.length
    },
    {
        name: 'get_transaction_extended',
        id: 'IBHgAmydZbmTUAe8',
        method: 'GET',
        requireIdentity: true,
        category: 'transaction',
        description: 'Returns a single record with all information about a transaction',
        params: {},
        priority: 'medium',
        requiresParam: 'transaction_id',
        requiresParam2: 'shard_id',
        dynamicParam: () => context.transactions[0]?.transaction_id || null,
        dynamicParam2: () => context.transactions[0]?.shard_id || context.shards[0]?.shard_id || null,
        skipIf: () => config.skipTransaction || !context.transactions.length
    },
    {
        name: 'list_transaction_history',
        id: 'w9UTTA7NXnEDUXhe',
        method: 'GET',
        requireIdentity: true,
        category: 'transaction',
        description: 'List transaction history for a given wallet',
        params: {},
        priority: 'medium',
        requiresParam: 'address_key_identifier',
        dynamicParam: () => context.walletSession?.address_key_identifier || context.addresses[0]?.address_key_identifier || null,
        skipIf: () => config.skipTransaction || !context.walletSession && !context.addresses.length
    },
    
    // ========================================================================
    // WALLET ENDPOINTS
    // ========================================================================
    {
        name: 'get_session',
        id: 'OBexeX0f0MsnL1S3',
        method: 'GET',
        requireIdentity: true,
        category: 'wallet',
        description: 'Get the active wallet in the node',
        params: {},
        priority: 'high',
        private: true,
        skipIf: () => config.skipWallet
    },
    {
        name: 'list_keychain_address',
        id: 'quIoaHsl8h6IwyEI',
        method: 'GET',
        requireIdentity: true,
        category: 'wallet',
        description: 'Returns records from table keychain_address',
        params: {},
        priority: 'high',
        private: true,
        skipIf: () => config.skipWallet || !context.walletSession
    },
    {
        name: 'get_keychain_address',
        id: 'ywTmt3C0nwk5k4c7',
        method: 'GET',
        requireIdentity: true,
        category: 'wallet',
        description: 'Returns the record for the identified address from table keychain',
        params: {},
        priority: 'medium',
        requiresParam: 'address',
        dynamicParam: () => context.addresses[0] || null,
        private: true,
        skipIf: () => config.skipWallet || !context.walletSession || !context.addresses.length
    },
    {
        name: 'get_mnemonic_phrase',
        id: 'BPZZ0l2nTfMSmmpl',
        method: 'GET',
        requireIdentity: true,
        category: 'wallet',
        description: 'Returns the 24 word mnemonic phrase for the active session',
        params: {},
        priority: 'low',
        private: true,
        skipIf: () => config.skipWallet || !context.walletSession
    },
    {
        name: 'get_known_wallet_balance',
        id: 'NPCpnfUyPHRH4j29',
        method: 'GET',
        requireIdentity: true,
        category: 'wallet',
        description: 'Returns the balance of all known wallets',
        params: {},
        priority: 'high',
        private: true,
        skipIf: () => config.skipWallet
    },
    
    // ========================================================================
    // LOG AND EVENT ENDPOINTS
    // ========================================================================
    {
        name: 'event_log_list',
        id: 'PZ7x3HVHVstLNYf0',
        method: 'GET',
        requireIdentity: true,
        category: 'logging',
        description: 'Returns an event log list',
        params: { p0: '20' },
        priority: 'medium'
    },
    {
        name: 'list_log',
        id: 'GMDazQSouYWzLTCv',
        method: 'GET',
        requireIdentity: true,
        category: 'logging',
        description: 'Returns a list of log items from the node',
        params: { p5: '20' },
        priority: 'medium',
        private: true
    },
    
    // ========================================================================
    // BACKLOG ENDPOINTS
    // ========================================================================
    {
        name: 'get_backlog_list',
        id: '0df01ae7dd51cec4',
        method: 'GET',
        requireIdentity: true,
        category: 'backlog',
        description: 'Return backlog list',
        params: {},
        priority: 'low'
    },
    
    // ========================================================================
    // UTILITY ENDPOINTS
    // ========================================================================
    {
        name: 'get_is_key_present',
        id: 'LOLb7q23p8rYSLwv',
        method: 'GET',
        requireIdentity: true,
        category: 'utility',
        description: 'Returns boolean value of presence of private_key.json',
        params: {},
        priority: 'low'
    },
    {
        name: 'cryptography',
        id: 'ZXJ3DqyLslyQETkX',
        method: 'GET',
        requireIdentity: true,
        category: 'utility',
        description: 'Encrypt or decrypt provided string',
        params: {},
        priority: 'low',
        requiresParam: 'direction',
        requiresParam2: 'string',
        testParams: { p0: 'encrypt', p1: 'test-message' }
    }
];

// HTTP request helper
function makeRequest(url, options = {}) {
    return new Promise((resolve, reject) => {
        const urlObj = new URL(url);
        const isHttps = urlObj.protocol === 'https:';
        const client = isHttps ? https : http;
        
        const requestOptions = {
            hostname: urlObj.hostname,
            port: urlObj.port || (isHttps ? 443 : 80),
            path: urlObj.pathname + urlObj.search,
            method: options.method || 'GET',
            headers: options.headers || {},
            rejectUnauthorized: !config.skipSslCheck
        };

        const req = client.request(requestOptions, (res) => {
            let data = '';
            
            res.on('data', (chunk) => {
                data += chunk;
            });
            
            res.on('end', () => {
                try {
                    const jsonData = JSON.parse(data);
                    resolve({
                        statusCode: res.statusCode,
                        headers: res.headers,
                        data: jsonData
                    });
                } catch (e) {
                    resolve({
                        statusCode: res.statusCode,
                        headers: res.headers,
                        data: data
                    });
                }
            });
        });
        
        req.on('error', (error) => {
            reject(error);
        });
        
        req.setTimeout(30000, () => {
            req.destroy();
            reject(new Error('Request timeout'));
        });
        
        if (options.body) {
            req.write(options.body);
        }
        
        req.end();
    });
}

// Build API URL
function buildApiUrl(endpoint, params = {}) {
    const baseUrl = `https://${config.host}:${config.port}/api`;
    const nodeId = nodeConfig.node_id;
    const nodeSignature = endpoint.requireIdentity ? nodeConfig.node_signature : 'anonymous';
    const apiId = endpoint.id;
    
    let url = `${baseUrl}/${nodeId}/${nodeSignature}/${apiId}`;
    
    // Merge parameters: endpoint defaults, test params, dynamic params, explicit params
    const allParams = {
        ...endpoint.params,
        ...(endpoint.testParams || {}),
        ...params
    };
    
    // Handle dynamic parameters
    if (endpoint.dynamicParam && typeof endpoint.dynamicParam === 'function') {
        const dynamicValue = endpoint.dynamicParam();
        if (dynamicValue) {
            if (endpoint.requiresParam) {
                allParams[`p0`] = dynamicValue;
            }
        }
    }
    
    if (endpoint.dynamicParam2 && typeof endpoint.dynamicParam2 === 'function') {
        const dynamicValue = endpoint.dynamicParam2();
        if (dynamicValue) {
            if (endpoint.requiresParam2) {
                allParams[`p1`] = dynamicValue;
            }
        }
    }
    
    const queryString = Object.entries(allParams)
        .filter(([_, value]) => value !== undefined && value !== null && value !== '')
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join('&');
    
    if (queryString) {
        url += `?${queryString}`;
    }
    
    return url;
}

// Gather context information
async function gatherContext() {
    console.log('\nGathering context information...\n');
    
    // Get node info
    try {
        const nodeInfoUrl = buildApiUrl(API_ENDPOINTS.find(e => e.name === 'get_node_id'));
        const response = await makeRequest(nodeInfoUrl);
        if (response.statusCode === 200) {
            context.nodeInfo = response.data;
            console.log('✓ Node information gathered');
        }
    } catch (e) {
        console.log('⚠ Could not gather node information');
    }
    
    // Get shards
    try {
        const shardsEndpoint = API_ENDPOINTS.find(e => e.name === 'list_shard');
        const shardsUrl = buildApiUrl(shardsEndpoint);
        const response = await makeRequest(shardsUrl);
        if (response.statusCode === 200 && Array.isArray(response.data)) {
            context.shards = response.data;
            console.log(`✓ Found ${context.shards.length} shard(s)`);
        }
    } catch (e) {
        console.log('⚠ Could not gather shard information');
    }
    
    // Get addresses
    try {
        const addressesEndpoint = API_ENDPOINTS.find(e => e.name === 'list_address');
        const addressesUrl = buildApiUrl(addressesEndpoint);
        const response = await makeRequest(addressesUrl);
        if (response.statusCode === 200 && Array.isArray(response.data)) {
            context.addresses = response.data.slice(0, 5);
            console.log(`✓ Found ${context.addresses.length} address(es)`);
        }
    } catch (e) {
        console.log('⚠ Could not gather address information');
    }
    
    // Get transactions
    try {
        const transactionsEndpoint = API_ENDPOINTS.find(e => e.name === 'list_transaction');
        const transactionsUrl = buildApiUrl(transactionsEndpoint);
        const response = await makeRequest(transactionsUrl);
        if (response.statusCode === 200 && Array.isArray(response.data)) {
            context.transactions = response.data.slice(0, 3);
            console.log(`✓ Found ${context.transactions.length} transaction(s)`);
        }
    } catch (e) {
        console.log('⚠ Could not gather transaction information');
    }
    
    // Check wallet session
    try {
        const sessionEndpoint = API_ENDPOINTS.find(e => e.name === 'get_session');
        const sessionUrl = buildApiUrl(sessionEndpoint);
        const response = await makeRequest(sessionUrl);
        if (response.statusCode === 200 && response.data.wallet) {
            context.walletSession = response.data.wallet;
            console.log('✓ Active wallet session found');
        }
    } catch (e) {
        console.log('⚠ No active wallet session');
    }
}

// Test a single API endpoint
async function testEndpoint(endpoint) {
    // Check if endpoint should be skipped
    if (endpoint.skipIf && typeof endpoint.skipIf === 'function' && endpoint.skipIf()) {
        return {
            endpoint: endpoint.name,
            endpointId: endpoint.id,
            method: endpoint.method,
            description: endpoint.description,
            category: endpoint.category,
            skipped: true,
            skipReason: 'Conditional skip condition met',
            timestamp: new Date().toISOString()
        };
    }
    
    // Check if required parameters are available
    if (endpoint.requiresParam) {
        const paramValue = endpoint.dynamicParam ? endpoint.dynamicParam() : null;
        if (!paramValue && !endpoint.testParams) {
            return {
                endpoint: endpoint.name,
                endpointId: endpoint.id,
                method: endpoint.method,
                description: endpoint.description,
                category: endpoint.category,
                skipped: true,
                skipReason: `Required parameter '${endpoint.requiresParam}' not available`,
                timestamp: new Date().toISOString()
            };
        }
    }
    
    const url = buildApiUrl(endpoint);
    
    if (config.verbose) {
        console.log(`\nTesting: ${endpoint.name} (${endpoint.id})`);
        console.log(`  URL: ${url.replace(nodeConfig.node_signature, '***')}`);
    }
    
    try {
        const startTime = Date.now();
        const response = await makeRequest(url, {
            method: endpoint.method
        });
        const duration = Date.now() - startTime;
        
        const result = {
            endpoint: endpoint.name,
            endpointId: endpoint.id,
            method: endpoint.method,
            description: endpoint.description,
            category: endpoint.category,
            priority: endpoint.priority,
            url: url,
            statusCode: response.statusCode,
            duration: duration,
            success: response.statusCode >= 200 && response.statusCode < 300,
            response: response.data,
            timestamp: new Date().toISOString()
        };
        
        if (config.verbose) {
            if (result.success) {
                console.log(`  ✓ Success (${duration}ms)`);
            } else {
                console.log(`  ✗ Failed: HTTP ${response.statusCode}`);
            }
        }
        
        return result;
    } catch (error) {
        if (config.verbose) {
            console.log(`  ✗ Error: ${error.message}`);
        }
        return {
            endpoint: endpoint.name,
            endpointId: endpoint.id,
            method: endpoint.method,
            description: endpoint.description,
            category: endpoint.category,
            priority: endpoint.priority,
            url: url,
            success: false,
            error: error.message,
            timestamp: new Date().toISOString()
        };
    }
}

// Generate markdown content
function generateMarkdown(results) {
    const successful = results.filter(r => r.success && !r.skipped);
    const failed = results.filter(r => !r.success && !r.skipped);
    const skipped = results.filter(r => r.skipped);
    
    let markdown = `# Millix API Comprehensive Test Results\n\n`;
    markdown += `**Generated:** ${new Date().toISOString()}\n\n`;
    markdown += `**Node ID:** ${nodeConfig.node_id}\n\n`;
    markdown += `**Test Configuration:**\n`;
    markdown += `- Host: ${config.host}\n`;
    markdown += `- Port: ${config.port}\n`;
    markdown += `- Total APIs Tested: ${results.length}\n`;
    markdown += `- Successful: ${successful.length}\n`;
    markdown += `- Failed: ${failed.length}\n`;
    markdown += `- Skipped: ${skipped.length}\n\n`;
    
    // Context information
    markdown += `## Context Information\n\n`;
    markdown += `The following information was gathered to provide context for endpoint testing:\n\n`;
    markdown += `- **Shards Found:** ${context.shards.length}\n`;
    markdown += `- **Addresses Found:** ${context.addresses.length}\n`;
    markdown += `- **Transactions Found:** ${context.transactions.length}\n`;
    markdown += `- **Wallet Session:** ${context.walletSession ? 'Active' : 'Not Active'}\n\n`;
    
    markdown += `---\n\n`;
    
    // Group by category
    const categories = [...new Set(results.map(r => r.category).filter(Boolean))];
    
    categories.forEach(category => {
        const categoryResults = results.filter(r => r.category === category);
        const categorySuccessful = categoryResults.filter(r => r.success && !r.skipped);
        const categoryFailed = categoryResults.filter(r => !r.success && !r.skipped);
        const categorySkipped = categoryResults.filter(r => r.skipped);
        
        markdown += `## ${category.charAt(0).toUpperCase() + category.slice(1)} APIs\n\n`;
        markdown += `**Summary:** ${categorySuccessful.length} successful, ${categoryFailed.length} failed, ${categorySkipped.length} skipped\n\n`;
        
        // Successful endpoints
        if (categorySuccessful.length > 0) {
            categorySuccessful.forEach(result => {
                markdown += `### ${result.endpoint}\n\n`;
                markdown += `**Endpoint ID:** \`${result.endpointId}\`\n\n`;
                markdown += `**Method:** ${result.method}\n\n`;
                markdown += `**Description:** ${result.description}\n\n`;
                markdown += `**Response Time:** ${result.duration}ms\n\n`;
                markdown += `**Priority:** ${result.priority}\n\n`;
                markdown += `**Response:**\n\n`;
                markdown += `\`\`\`json\n`;
                markdown += JSON.stringify(result.response, null, 2);
                markdown += `\n\`\`\`\n\n`;
                
                markdown += `**Insights for Documentation:**\n\n`;
                markdown += generateInsights(result);
                markdown += `\n---\n\n`;
            });
        }
        
        // Failed endpoints
        if (categoryFailed.length > 0) {
            markdown += `#### Failed Endpoints\n\n`;
            categoryFailed.forEach(result => {
                markdown += `- **${result.endpoint}** (${result.endpointId}): ${result.error || `HTTP ${result.statusCode}`}\n`;
            });
            markdown += `\n`;
        }
        
        // Skipped endpoints
        if (categorySkipped.length > 0) {
            markdown += `#### Skipped Endpoints\n\n`;
            categorySkipped.forEach(result => {
                markdown += `- **${result.endpoint}** (${result.endpointId}): ${result.skipReason}\n`;
            });
            markdown += `\n`;
        }
    });
    
    // Add comprehensive usage examples
    markdown += `## API Usage Examples for Book\n\n`;
    markdown += generateUsageExamples(successful);
    
    return markdown;
}

// Generate insights for book content
function generateInsights(result) {
    let insights = '';
    
    // Category-specific insights
    switch (result.category) {
        case 'public':
            insights += `- This is a public endpoint that doesn't require authentication.\n`;
            insights += `- Useful for initial node discovery and health checks.\n`;
            break;
            
        case 'node':
            insights += `- Provides information about the node and network topology.\n`;
            insights += `- Essential for monitoring and understanding network connectivity.\n`;
            break;
            
        case 'statistics':
            insights += `- Provides quantitative information about node state and network activity.\n`;
            insights += `- Useful for monitoring, analytics, and understanding network health.\n`;
            break;
            
        case 'address':
            insights += `- Manages and queries address information.\n`;
            insights += `- Addresses are the primary identifiers for wallets and transactions.\n`;
            break;
            
        case 'transaction':
            insights += `- Transaction endpoints provide access to the DAG transaction history.\n`;
            insights += `- Essential for building wallets, explorers, and transaction tracking.\n`;
            break;
            
        case 'wallet':
            insights += `- Wallet endpoints require an active wallet session.\n`;
            insights += `- These are private endpoints that manage wallet operations.\n`;
            break;
    }
    
    // Endpoint-specific insights
    switch (result.endpoint) {
        case 'get_stat_summary':
            insights += `- The \`stable\` balance represents confirmed funds, while \`unstable\` represents pending.\n`;
            insights += `- \`peer_count\` indicates network connectivity health.\n`;
            insights += `- \`transaction_wallet_count\` shows transactions involving this node's wallet.\n`;
            break;
            
        case 'list_node':
            insights += `- The \`status\` field indicates node health: 1=active, 2=connected, -1=inactive.\n`;
            insights += `- \`node_port\` is the protocol port, \`node_port_api\` is the API port.\n`;
            break;
            
        case 'list_transaction':
            insights += `- \`is_stable\` indicates if transaction has reached consensus.\n`;
            insights += `- \`is_parent\` indicates if transaction has child transactions.\n`;
            insights += `- \`shard_id\` identifies which shard the transaction belongs to.\n`;
            break;
    }
    
    if (!insights) {
        insights += `- Response structure provides detailed information about the requested resource.\n`;
        insights += `- Check the response fields for specific data points relevant to your use case.\n`;
    }
    
    return insights;
}

// Generate usage examples
function generateUsageExamples(successful) {
    let examples = '';
    
    // Basic examples
    examples += `### Example 1: Getting Node Information\n\n`;
    examples += `To get the node ID (public endpoint, no authentication required):\n\n`;
    examples += `\`\`\`bash\n`;
    examples += `curl -k "https://localhost:5500/api/${nodeConfig.node_id}/anonymous/ZFAYRM8LRtmfYp4Y"\n`;
    examples += `\`\`\`\n\n`;
    
    const nodeInfo = successful.find(r => r.endpoint === 'get_node_id');
    if (nodeInfo) {
        examples += `**Response:**\n\n`;
        examples += `\`\`\`json\n`;
        examples += JSON.stringify(nodeInfo.response, null, 2);
        examples += `\n\`\`\`\n\n`;
    }
    
    examples += `### Example 2: Listing Peer Nodes\n\n`;
    examples += `To list peer nodes (requires authentication):\n\n`;
    examples += `\`\`\`bash\n`;
    examples += `curl -k "https://localhost:5500/api/${nodeConfig.node_id}/${nodeConfig.node_signature}/0eoUqXNE715mBVqV?p2=10"\n`;
    examples += `\`\`\`\n\n`;
    
    examples += `### Example 3: Getting Node Statistics\n\n`;
    examples += `To get comprehensive node statistics:\n\n`;
    examples += `\`\`\`bash\n`;
    examples += `curl -k "https://localhost:5500/api/${nodeConfig.node_id}/${nodeConfig.node_signature}/rKclyiLtHx0dx55M"\n`;
    examples += `\`\`\`\n\n`;
    
    const statsResult = successful.find(r => r.endpoint === 'get_stat_summary');
    if (statsResult) {
        examples += `**Response Structure:**\n\n`;
        examples += `\`\`\`json\n`;
        examples += JSON.stringify(statsResult.response, null, 2);
        examples += `\n\`\`\`\n\n`;
    }
    
    return examples;
}

// Generate JSON content
function generateJSON(results) {
    return JSON.stringify({
        metadata: {
            generated: new Date().toISOString(),
            nodeId: nodeConfig.node_id,
            host: config.host,
            port: config.port,
            totalTests: results.length,
            successful: results.filter(r => r.success && !r.skipped).length,
            failed: results.filter(r => !r.success && !r.skipped).length,
            skipped: results.filter(r => r.skipped).length,
            context: {
                shards: context.shards.length,
                addresses: context.addresses.length,
                transactions: context.transactions.length,
                walletSession: !!context.walletSession
            }
        },
        results: results
    }, null, 2);
}

// Main execution
async function main() {
    console.log('='.repeat(70));
    console.log('Millix API Comprehensive Tester and Book Content Generator');
    console.log('='.repeat(70));
    console.log(`\nHost: ${config.host}`);
    console.log(`Port: ${config.port}`);
    console.log(`Output: ${config.output}`);
    console.log(`Format: ${config.format}`);
    console.log(`Test All: ${config.testAll}`);
    console.log(`Skip Wallet: ${config.skipWallet}`);
    console.log(`Skip Transaction: ${config.skipTransaction}`);
    if (config.passphrase) {
        console.log(`Passphrase: ${'*'.repeat(config.passphrase.length)}`);
    }
    
    // Gather context
    await gatherContext();
    
    console.log('\n' + '='.repeat(70));
    console.log('Starting API tests...');
    console.log('='.repeat(70) + '\n');
    
    const results = [];
    
    // Sort endpoints by priority
    const sortedEndpoints = [...API_ENDPOINTS].sort((a, b) => {
        const priorityOrder = { 'high': 0, 'medium': 1, 'low': 2 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
    
    // Test each endpoint
    for (const endpoint of sortedEndpoints) {
        const result = await testEndpoint(endpoint);
        results.push(result);
        
        if (!config.verbose) {
            const status = result.skipped ? '⊘' : (result.success ? '✓' : '✗');
            process.stdout.write(`${status} ${endpoint.name.padEnd(40)} ${result.skipped ? result.skipReason : (result.success ? `${result.duration}ms` : result.error)}\n`);
        }
        
        // Small delay to avoid overwhelming the server
        await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    console.log('\n' + '='.repeat(70));
    console.log('Test Summary');
    console.log('='.repeat(70));
    const successful = results.filter(r => r.success && !r.skipped);
    const failed = results.filter(r => !r.success && !r.skipped);
    const skipped = results.filter(r => r.skipped);
    console.log(`Total: ${results.length}`);
    console.log(`Successful: ${successful.length}`);
    console.log(`Failed: ${failed.length}`);
    console.log(`Skipped: ${skipped.length}`);
    
    // Generate output
    const outputPath = path.join(SCRIPT_DIR, config.output);
    
    if (config.format === 'markdown' || config.format === 'both') {
        const markdown = generateMarkdown(results);
        fs.writeFileSync(outputPath, markdown, 'utf8');
        console.log(`\n✓ Markdown output written to: ${outputPath}`);
    }
    
    if (config.format === 'json' || config.format === 'both') {
        const jsonPath = outputPath.replace(/\.md$/, '.json');
        const json = generateJSON(results);
        fs.writeFileSync(jsonPath, json, 'utf8');
        console.log(`✓ JSON output written to: ${jsonPath}`);
    }
    
    console.log('\nDone!');
}

// Run the script
main().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
});
