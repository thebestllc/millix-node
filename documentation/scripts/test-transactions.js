#!/usr/bin/env node

/**
 * ============================================================================
 * Millix Low-Level Transaction Testing Script
 * ============================================================================
 * 
 * This script demonstrates low-level transaction sending in the Millix network.
 * It uses outputs from a specific transaction ID to create a new transaction.
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
 * 2. more_parameters.txt - Contains test address and transaction ID
 * 
 * USAGE:
 * ------
 *   node test-transactions.js [options]
 * 
 * OPTIONS:
 * --------
 *   --host <host>              API host (default: localhost)
 *   --port <port>              API port (default: 5500)
 *   --skip-ssl-check           Skip SSL certificate verification
 *   --amount <amount>          Amount to send in millix (default: 400000)
 *   --delay <seconds>          Delay between transactions in seconds (default: 120)
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
const DEFAULT_AMOUNT = 300000;
const DEFAULT_FEE = 1000;
const SCRIPT_DIR = __dirname;

// Recipient address
const RECIPIENT_ADDRESS = '1FXx25vVgHCmvLiwTLNGPvWavdDmCevnTp0a01FmrUhZ9CdaJwcLq22AVdrYd6AFDGAurTm';

// Parse command line arguments
const args = process.argv.slice(2);
const config = {
    host: DEFAULT_HOST,
    port: DEFAULT_PORT,
    skipSslCheck: false,
    amount: DEFAULT_AMOUNT,
    fee: DEFAULT_FEE
};

for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
        case '--host':
            config.host = args[++i];
            break;
        case '--port':
            config.port = parseInt(args[++i]);
            break;
        case '--skip-ssl-check':
            config.skipSslCheck = true;
            break;
        case '--amount':
            config.amount = parseInt(args[++i]);
            break;
    }
}

// Load credentials
let nodeConfig, moreParams;
try {
    const nodeConfigPath = path.join(SCRIPT_DIR, 'node.json');
    const moreParamsPath = path.join(SCRIPT_DIR, 'more_parameters.txt');
    
    nodeConfig = JSON.parse(fs.readFileSync(nodeConfigPath, 'utf8'));
    const moreParamsContent = fs.readFileSync(moreParamsPath, 'utf8');
    
    // Parse more_parameters.txt
    moreParams = {};
    const lines = moreParamsContent.split('\n');
    for (const line of lines) {
        if (line.includes('address')) {
            const match = line.match(/([A-Za-z0-9]+0a0[A-Za-z0-9]+)/);
            if (match) {
                const fullAddress = match[1];
                moreParams.testAddress = fullAddress;
                // Extract components
                const baseMatch = fullAddress.match(/^([A-Za-z0-9]+)0a0/);
                const keyMatch = fullAddress.match(/0a0([A-Za-z0-9]+)$/);
                if (baseMatch && keyMatch) {
                    moreParams.addressBase = baseMatch[1];
                    moreParams.addressKeyIdentifier = keyMatch[1];
                }
            }
        }
        if (line.includes('transaction_id')) {
            const match = line.match(/([A-Za-z0-9]+)/);
            if (match && match[1].length > 20) {
                moreParams.testTransactionId = match[1];
            }
        }
    }
    
    console.log('✓ Loaded configuration');
    console.log(`  Node ID: ${nodeConfig.node_id}`);
    if (moreParams.testAddress) {
        console.log(`  Test Address: ${moreParams.testAddress}`);
    }
    if (moreParams.testTransactionId) {
        console.log(`  Test Transaction ID: ${moreParams.testTransactionId}`);
    }
} catch (error) {
    console.error('✗ Error loading configuration files:', error.message);
    process.exit(1);
}

// Results storage
const results = {
    timestamp: new Date().toISOString(),
    config: {
        host: config.host,
        port: config.port,
        amount: config.amount,
        fee: config.fee,
        recipientAddress: RECIPIENT_ADDRESS
    },
    lowLevel: null,
    errors: []
};

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
        
        req.setTimeout(60000, () => {
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
function buildApiUrl(apiId, params = {}) {
    const baseUrl = `https://${config.host}:${config.port}/api`;
    const nodeId = nodeConfig.node_id;
    const nodeSignature = nodeConfig.node_signature;
    
    let url = `${baseUrl}/${nodeId}/${nodeSignature}/${apiId}`;
    
    const queryString = Object.entries(params)
        .filter(([_, value]) => value !== undefined && value !== null && value !== '')
        .map(([key, value]) => `${key}=${encodeURIComponent(typeof value === 'object' ? JSON.stringify(value) : value)}`)
        .join('&');
    
    if (queryString) {
        url += `?${queryString}`;
    }
    
    return url;
}

// Get session to find source address
async function getSession() {
    try {
        const url = buildApiUrl('OBexeX0f0MsnL1S3');
        const response = await makeRequest(url);
        if (response.statusCode === 200 && response.data.wallet) {
            return response.data.wallet;
        }
    } catch (e) {
        console.log('⚠ Could not get wallet session');
    }
    return null;
}

// Get transaction to find shard_id
async function getTransaction(transactionId) {
    // Try common shard_id first (from previous transaction results)
    const commonShardId = 'qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR';
    
    try {
        // Try with common shard_id
        const url = buildApiUrl('wDyC195wgjPjM2Ut', {
            p0: transactionId,
            p1: commonShardId
        });
        const response = await makeRequest(url);
        if (response.statusCode === 200 && response.data && response.data.transaction_id) {
            return response.data;
        }
    } catch (e) {
        console.log(`  Trying common shard failed: ${e.message}`);
    }
    
    // If that fails, try to search using list_transaction
    try {
        console.log(`  Searching for transaction across shards...`);
        const url = buildApiUrl('l4kaEhMnhjB5yseq', {
            p10: 100  // limit
        });
        const response = await makeRequest(url);
        if (response.statusCode === 200 && Array.isArray(response.data)) {
            const tx = response.data.find(t => t.transaction_id === transactionId);
            if (tx) {
                return tx;
            }
        }
    } catch (e) {
        console.log(`  Search failed: ${e.message}`);
    }
    
    return null;
}

// List outputs from a specific transaction
async function listTransactionOutputs(transactionId, shardId) {
    try {
        const url = buildApiUrl('FDLyQ5uo5t7jltiQ', {
            p0: transactionId,
            p4: 0,  // is_double_spend = 0
            p7: 1,  // is_stable = 1
            p10: 0, // is_spent = 0
            p13: 'amount desc',
            p14: 100,
            p15: shardId
        });
        const response = await makeRequest(url);
        if (response.statusCode === 200 && Array.isArray(response.data)) {
            return response.data;
        }
    } catch (e) {
        console.error('Error listing transaction outputs:', e.message);
    }
    return [];
}

// Get private key for an address
async function getPrivateKey(address) {
    try {
        const url = buildApiUrl('PKUv2JfV87KpEZwE', { p0: address });
        const response = await makeRequest(url);
        if (response.statusCode === 200 && response.data.private_key_hex) {
            return response.data.private_key_hex;
        }
    } catch (e) {
        console.error('Error getting private key:', e.message);
    }
    return null;
}

// Get public key for an address using get_keychain_address API
async function getPublicKey(address) {
    try {
        // Method 1: Try get_keychain_address API first
        const url = buildApiUrl('ywTmt3C0nwk5k4c7', { p0: address });
        const response = await makeRequest(url);
        if (response.statusCode === 200 && response.data) {
            // Check if address_attribute exists and has key_public
            if (response.data.address_attribute && response.data.address_attribute.key_public) {
                return response.data.address_attribute.key_public;
            }
            // Sometimes the structure is different, check for key_public directly
            if (response.data.key_public) {
                return response.data.key_public;
            }
        }
    } catch (e) {
        console.log(`    Warning: get_keychain_address failed for ${address}: ${e.message}`);
    }
    
    // Method 2: Try list_keychain_address and find the address
    try {
        const url2 = buildApiUrl('quIoaHsl8h6IwyEI');
        const response2 = await makeRequest(url2);
        if (response2.statusCode === 200 && Array.isArray(response2.data)) {
            const addr = response2.data.find(a => a.address === address);
            if (addr) {
                if (addr.address_attribute && addr.address_attribute.key_public) {
                    return addr.address_attribute.key_public;
                }
                if (addr.key_public) {
                    return addr.key_public;
                }
            }
        }
    } catch (e2) {
        console.log(`    Warning: list_keychain_address failed: ${e2.message}`);
    }
    
    return null;
}

// List unspents for an address
async function listUnspents(addressKeyIdentifier) {
    try {
        const url = buildApiUrl('FDLyQ5uo5t7jltiQ', {
            p3: addressKeyIdentifier,
            p4: 0,  // is_double_spend = 0
            p7: 1,  // is_stable = 1
            p10: 0, // is_spent = 0
            p13: 'amount desc',
            p14: 100
        });
        const response = await makeRequest(url);
        if (response.statusCode === 200 && Array.isArray(response.data)) {
            return response.data;
        }
    } catch (e) {
        console.error('Error listing unspents:', e.message);
    }
    return [];
}

// Low-level transaction: find unspents, build payload, sign, send
async function sendLowLevelTransaction(amount, fee, recipientAddress) {
    console.log('\n' + '='.repeat(70));
    console.log('LOW-LEVEL TRANSACTION');
    console.log('='.repeat(70));
    
    const startTime = Date.now();
    const result = {
        method: 'low-level',
        timestamp: new Date().toISOString(),
        amount: amount,
        fee: fee,
        steps: {}
    };
    
    try {
        // Step 1: Get wallet session to find source address
        console.log('\nStep 1: Getting wallet session...');
        const session = await getSession();
        if (!session || !session.address_key_identifier) {
            throw new Error('No active wallet session found');
        }
        const sourceAddressKeyId = session.address_key_identifier;
        const sourceAddress = session.address || `${session.address_base}${session.address_version}${session.address_key_identifier}`;
        console.log(`  Source address: ${sourceAddressKeyId}`);
        result.steps.session = { success: true, address: sourceAddressKeyId };
        
        // Step 2: List unspents from wallet address
        console.log('\nStep 2: Finding unspent outputs...');
        let unspents = await listUnspents(sourceAddressKeyId);
        
        // If no stable unspents found, try checking unstable ones (for testing)
        if (unspents.length === 0) {
            console.log(`  No stable unspents found, checking unstable outputs...`);
            try {
                const unstableUrl = buildApiUrl('FDLyQ5uo5t7jltiQ', {
                    p3: sourceAddressKeyId,
                    p4: 0,  // is_double_spend = 0
                    p7: 0,  // is_stable = 0 (check unstable)
                    p10: 0, // is_spent = 0
                    p13: 'amount desc',
                    p14: 100
                });
                const unstableResponse = await makeRequest(unstableUrl);
                if (unstableResponse.statusCode === 200 && Array.isArray(unstableResponse.data) && unstableResponse.data.length > 0) {
                    console.log(`  Found ${unstableResponse.data.length} unstable output(s) - these will become available once the transaction stabilizes`);
                    // For testing, we can't use unstable outputs, but let's show what's available
                    unstableResponse.data.forEach((out, idx) => {
                        console.log(`    Unstable output ${idx + 1}: ${out.amount} millix from ${out.transaction_id.substring(0, 20)}...`);
                    });
                }
            } catch (e) {
                // Ignore
            }
            
            // Try to get all keychain addresses and check each
            console.log(`  Checking all wallet addresses...`);
            try {
                const keychainUrl = buildApiUrl('quIoaHsl8h6IwyEI');
                const keychainResponse = await makeRequest(keychainUrl);
                if (keychainResponse.statusCode === 200 && Array.isArray(keychainResponse.data)) {
                    for (const addr of keychainResponse.data) {
                        const addrUnspents = await listUnspents(addr.address_key_identifier);
                        if (addrUnspents.length > 0) {
                            console.log(`  Found ${addrUnspents.length} unspent(s) in address ${addr.address_key_identifier}`);
                            unspents = addrUnspents;
                            sourceAddressKeyId = addr.address_key_identifier;
                            sourceAddress = addr.address;
                            break;
                        }
                    }
                }
            } catch (e) {
                console.log(`  Could not check other addresses: ${e.message}`);
            }
        }
        
        // If still no unspents, wait a moment and check again (transaction might be stabilizing)
        if (unspents.length === 0) {
            console.log(`  No stable unspents found. Waiting 5 seconds for transactions to stabilize...`);
            await new Promise(resolve => setTimeout(resolve, 5000));
            unspents = await listUnspents(sourceAddressKeyId);
            if (unspents.length > 0) {
                console.log(`  ✓ Found ${unspents.length} stable unspent(s) after waiting`);
            }
        }
        
        // If still no unspents, try using unstable ones (for testing only - may fail)
        if (unspents.length === 0) {
            console.log(`  ⚠ WARNING: No stable unspents found. Attempting to use unstable outputs...`);
            console.log(`  ⚠ NOTE: This will likely fail as unstable outputs cannot be spent until they stabilize.`);
            try {
                const unstableUrl = buildApiUrl('FDLyQ5uo5t7jltiQ', {
                    p3: sourceAddressKeyId,
                    p4: 0,  // is_double_spend = 0
                    p7: 0,  // is_stable = 0 (allow unstable)
                    p10: 0, // is_spent = 0
                    p13: 'amount desc',
                    p14: 100
                });
                const unstableResponse = await makeRequest(unstableUrl);
                if (unstableResponse.statusCode === 200 && Array.isArray(unstableResponse.data) && unstableResponse.data.length > 0) {
                    unspents = unstableResponse.data;
                    console.log(`  ⚠ Using ${unspents.length} unstable output(s) - transaction may fail`);
                }
            } catch (e) {
                // Ignore
            }
        }
        
        if (unspents.length === 0) {
            throw new Error('No unspent outputs available (stable or unstable). Please ensure you have funds available.');
        }
        console.log(`  Found ${unspents.length} unspent output(s)`);
        
        // Show unspent details
        unspents.forEach((unspent, idx) => {
            console.log(`    Unspent ${idx + 1}: ${unspent.amount} millix from transaction ${unspent.transaction_id.substring(0, 20)}...`);
        });
        
        // Select unspents that cover amount + fee
        let totalAmount = 0;
        const selectedUnspents = [];
        for (const unspent of unspents) {
            selectedUnspents.push(unspent);
            totalAmount += unspent.amount;
            if (totalAmount >= amount + fee) {
                break;
            }
        }
        
        if (totalAmount < amount + fee) {
            throw new Error(`Insufficient balance: have ${totalAmount}, need ${amount + fee}`);
        }
        
        console.log(`  Selected ${selectedUnspents.length} unspent(s), total: ${totalAmount}`);
        result.steps.unspents = { success: true, count: selectedUnspents.length, total: totalAmount };
        
        // Step 3: Get private keys and public keys
        console.log('\nStep 3: Getting private keys and public keys...');
        const privateKeyMap = {};
        const addressMap = {};
        
        for (const unspent of selectedUnspents) {
            const fullAddress = unspent.address;
            
            // Get private key
            console.log(`  Getting keys for address: ${fullAddress.substring(0, 40)}...`);
            const privateKey = await getPrivateKey(fullAddress);
            if (!privateKey) {
                throw new Error(`Could not get private key for address ${fullAddress}`);
            }
            privateKeyMap[fullAddress] = privateKey;
            console.log(`    ✓ Private key retrieved`);
            
            // Get public key using get_keychain_address API
            const publicKey = await getPublicKey(fullAddress);
            if (publicKey) {
                addressMap[fullAddress] = publicKey;
                console.log(`    ✓ Public key retrieved: ${publicKey}`);
            } else {
                throw new Error(`Could not get public key for address ${fullAddress}. The address may not have been used in a transaction yet, or the public key is not stored in address attributes.`);
            }
        }
        
        console.log(`  ✓ Retrieved keys for ${Object.keys(privateKeyMap).length} address(es)`);
        console.log(`  ✓ Private keys: ${Object.keys(privateKeyMap).length}`);
        console.log(`  ✓ Public keys: ${Object.keys(addressMap).length}`);
        result.steps.keys = { 
            success: true, 
            count: Object.keys(privateKeyMap).length,
            privateKeys: Object.keys(privateKeyMap).length,
            publicKeys: Object.keys(addressMap).length
        };
        
        // Step 4: Get wallet session for change address (already have session from Step 1)
        console.log('\nStep 4: Using wallet session for change address...');
        if (!session || !session.address_key_identifier) {
            throw new Error('No active wallet session found (needed for change output)');
        }
        console.log(`  Change address: ${session.address_key_identifier}`);
        result.steps.session = { success: true, address: session.address_key_identifier };
        
        // Step 5: Build transaction payload
        console.log('\nStep 5: Building transaction payload...');
        const transactionInputList = selectedUnspents.map(u => {
            // Parse address components from full address if not provided
            let addressBase = u.address_base;
            let addressVersion = u.address_version || '0a0';
            let addressKeyId = u.address_key_identifier;
            
            if (!addressBase && u.address) {
                // Parse address format: {base}0a0{key_identifier}
                const addressMatch = u.address.match(/^([A-Za-z0-9]+)(0a0)([A-Za-z0-9]+)$/);
                if (addressMatch) {
                    addressBase = addressMatch[1];
                    addressVersion = addressMatch[2];
                    addressKeyId = addressMatch[3];
                } else {
                    // Fallback: use address_key_identifier for base if parsing fails
                    addressBase = u.address_key_identifier;
                    addressVersion = '0a0';
                    addressKeyId = u.address_key_identifier;
                }
            }
            
            return {
                output_transaction_id: u.transaction_id,
                output_transaction_date: u.transaction_date,
                output_shard_id: u.shard_id,
                output_position: u.output_position,
                address_base: addressBase,
                address_version: addressVersion,
                address_key_identifier: addressKeyId
            };
        });
        
        // Parse recipient address
        const recipientFullAddress = recipientAddress;
        const recipientBaseMatch = recipientFullAddress.match(/^([A-Za-z0-9]+)0a0/);
        const recipientKeyMatch = recipientFullAddress.match(/0a0([A-Za-z0-9]+)$/);
        if (!recipientBaseMatch || !recipientKeyMatch) {
            throw new Error(`Invalid recipient address format: ${recipientFullAddress}`);
        }
        const recipientBase = recipientBaseMatch[1];
        const recipientKeyId = recipientKeyMatch[1];
        
        // Calculate change
        const change = totalAmount - amount - fee;
        const transactionOutputList = [
            {
                address_base: recipientBase,
                address_version: '0a0',
                address_key_identifier: recipientKeyId,
                amount: amount
            }
        ];
        
        // Add change output if needed
        if (change > 0) {
            transactionOutputList.push({
                address_base: session.address_base,
                address_version: session.address_version || '0a0',
                address_key_identifier: session.address_key_identifier,
                amount: change
            });
        }
        
        const transactionPayload = {
            transaction_input_list: transactionInputList,
            transaction_output_list: transactionOutputList,
            transaction_output_fee: {
                fee_type: 'transaction_fee_default',
                amount: fee
            }
        };
        
        console.log(`  Inputs: ${transactionInputList.length}, Outputs: ${transactionOutputList.length}`);
        result.steps.payload = { success: true, inputs: transactionInputList.length, outputs: transactionOutputList.length };
        
        // Step 6: Sign transaction
        console.log('\nStep 6: Signing transaction...');
        if (Object.keys(addressMap).length === 0) {
            throw new Error('Cannot sign transaction: missing public keys. Low-level transaction requires public keys for all input addresses.');
        }
        
        if (Object.keys(addressMap).length !== Object.keys(privateKeyMap).length) {
            throw new Error(`Mismatch: have ${Object.keys(privateKeyMap).length} private keys but only ${Object.keys(addressMap).length} public keys`);
        }
        
        console.log(`  Private key map: ${Object.keys(privateKeyMap).length} address(es)`);
        console.log(`  Public key map: ${Object.keys(addressMap).length} address(es)`);
        console.log(`  Sending to sign_transaction API...`);
        
        // Debug: Log transaction input details
        console.log(`  Transaction input: ${JSON.stringify(transactionInputList[0], null, 2)}`);
        
        const signUrl = buildApiUrl('RVBqKlGdk9aEhi5J', {
            p0: JSON.stringify(transactionPayload),
            p1: JSON.stringify(privateKeyMap),
            p2: JSON.stringify(addressMap)
        });
        
        const signResponse = await makeRequest(signUrl);
        
        // Log full response for debugging
        if (signResponse.statusCode !== 200 || signResponse.data.api_status === 'fail') {
            console.log(`  Full API response: ${JSON.stringify(signResponse.data, null, 2)}`);
        }
        
        if (signResponse.statusCode !== 200) {
            let errorMsg = 'Unknown error';
            if (signResponse.data) {
                if (typeof signResponse.data === 'string') {
                    errorMsg = signResponse.data;
                } else if (signResponse.data.api_message) {
                    errorMsg = typeof signResponse.data.api_message === 'string' 
                        ? signResponse.data.api_message 
                        : JSON.stringify(signResponse.data.api_message);
                } else {
                    errorMsg = JSON.stringify(signResponse.data);
                }
            }
            throw new Error(`Signing failed with status ${signResponse.statusCode}: ${errorMsg}`);
        }
        
        if (signResponse.data.api_status === 'fail') {
            let errorMsg = 'Unknown error';
            if (signResponse.data.api_message) {
                errorMsg = typeof signResponse.data.api_message === 'string' 
                    ? signResponse.data.api_message 
                    : JSON.stringify(signResponse.data.api_message);
            } else {
                errorMsg = JSON.stringify(signResponse.data);
            }
            throw new Error(`Signing failed: ${errorMsg}`);
        }
        
        if (!Array.isArray(signResponse.data)) {
            throw new Error(`Signing failed: Expected array of transactions, got: ${JSON.stringify(signResponse.data)}`);
        }
        
        const signedTransactions = signResponse.data;
        console.log(`  ✓ Signed ${signedTransactions.length} transaction(s)`);
        result.steps.signing = { success: true, transactionCount: signedTransactions.length };
        
        // Step 7: Send transaction
        console.log('\nStep 7: Sending transaction...');
        const sendUrl = buildApiUrl('VnJIBrrM0KY3uQ9X', {
            p0: JSON.stringify(signedTransactions)
        });
        
        const sendResponse = await makeRequest(sendUrl);
        if (sendResponse.statusCode !== 200 || sendResponse.data.api_status !== 'success') {
            throw new Error(`Sending failed: ${JSON.stringify(sendResponse.data)}`);
        }
        
        const transactionIds = signedTransactions.map(t => t.transaction_id);
        console.log(`  ✓ Transaction sent successfully!`);
        console.log(`  Transaction ID(s): ${transactionIds.join(', ')}`);
        
        result.success = true;
        result.transactionIds = transactionIds;
        result.duration = Date.now() - startTime;
        result.steps.sending = { success: true, transactionIds: transactionIds };
        
    } catch (error) {
        console.error(`  ✗ Error: ${error.message}`);
        result.success = false;
        result.error = error.message;
        result.duration = Date.now() - startTime;
        results.errors.push({ method: 'low-level', error: error.message, timestamp: new Date().toISOString() });
    }
    
    return result;
}

// High-level transaction function removed - only using low-level transactions

// Main execution
async function main() {
    console.log('='.repeat(70));
    console.log('Millix Transaction Testing Script');
    console.log('='.repeat(70));
    console.log(`\nConfiguration:`);
    console.log(`  Host: ${config.host}`);
    console.log(`  Port: ${config.port}`);
    console.log(`  Amount: ${config.amount} millix`);
    console.log(`  Fee: ${config.fee} millix`);
    console.log(`  Recipient: ${RECIPIENT_ADDRESS}`);
    
    // Send low-level transaction
    results.lowLevel = await sendLowLevelTransaction(config.amount, config.fee, RECIPIENT_ADDRESS);
    
    // Save results
    const resultsPath = path.join(SCRIPT_DIR, 'transaction_results.txt');
    const resultsText = JSON.stringify(results, null, 2);
    fs.writeFileSync(resultsPath, resultsText, 'utf8');
    
    // Print summary
    console.log('\n' + '='.repeat(70));
    console.log('SUMMARY');
    console.log('='.repeat(70));
    console.log(`\nLow-Level Transaction: ${results.lowLevel.success ? '✓ SUCCESS' : '✗ FAILED'}`);
    if (results.lowLevel.success) {
        console.log(`  Transaction ID(s): ${results.lowLevel.transactionIds?.join(', ') || 'N/A'}`);
        console.log(`  Duration: ${results.lowLevel.duration}ms`);
        console.log(`  Amount Sent: ${config.amount} millix`);
        console.log(`  Recipient: ${RECIPIENT_ADDRESS}`);
    } else {
        console.log(`  Error: ${results.lowLevel.error}`);
    }
    
    console.log(`\nResults saved to: ${resultsPath}`);
    console.log('\nDone!');
}

// Run the script
main().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
});

