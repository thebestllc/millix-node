#!/usr/bin/env node

/**
 * Millix NFT Operations Test Script
 * 
 * This script demonstrates how to create, list, view, transfer, and delete NFTs
 * using the Millix API.
 * 
 * Usage:
 *   node test-nft-operations.js create <file_path> <name> <description> [dns]
 *   node test-nft-operations.js list
 *   node test-nft-operations.js view <transaction_id>
 *   node test-nft-operations.js transfer <transaction_id> <recipient_address>
 *   node test-nft-operations.js delete <transaction_id>
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

// Configuration
const SCRIPT_DIR = __dirname;
const DEFAULT_HOST = 'localhost';
const DEFAULT_PORT = 5500;
const NFT_FEE = 10000;
const NFT_AMOUNT = 1000;
const ATTRIBUTE_TYPE_ID = 'Adl87cz8kC190Nqc';
const DEFAULT_SHARD_ID = 'qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR';

// Load node configuration
let nodeConfig;
try {
    const configPath = path.join(SCRIPT_DIR, 'node.json');
    nodeConfig = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    console.log('✓ Loaded node configuration');
} catch (e) {
    console.error('Error loading node.json:', e.message);
    process.exit(1);
}

// SSL options (skip verification for self-signed certificates)
const httpsAgent = new https.Agent({
    rejectUnauthorized: false
});

// Build API URL
function buildApiUrl(apiId, params = {}) {
    const baseUrl = `https://${DEFAULT_HOST}:${DEFAULT_PORT}/api/${nodeConfig.node_id}/${nodeConfig.node_signature}/${apiId}`;
    const url = new URL(baseUrl);
    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
            url.searchParams.append(key, value);
        }
    });
    return url.toString();
}

// Make HTTP/HTTPS request
function makeRequest(url, options = {}) {
    return new Promise((resolve, reject) => {
        const urlObj = new URL(url);
        const isHttps = urlObj.protocol === 'https:';
        const client = isHttps ? https : http;
        const agent = isHttps ? httpsAgent : undefined;

        const requestOptions = {
            hostname: urlObj.hostname,
            port: urlObj.port || (isHttps ? 443 : 80),
            path: urlObj.pathname + urlObj.search,
            method: options.method || 'GET',
            headers: options.headers || {},
            agent: agent
        };

        const req = client.request(requestOptions, (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                try {
                    const contentType = res.headers['content-type'] || '';
                    if (contentType.includes('application/json')) {
                        resolve({
                            statusCode: res.statusCode,
                            data: JSON.parse(data)
                        });
                    } else {
                        resolve({
                            statusCode: res.statusCode,
                            data: data,
                            isBinary: true
                        });
                    }
                } catch (e) {
                    resolve({
                        statusCode: res.statusCode,
                        data: data
                    });
                }
            });
        });

        req.on('error', reject);

        if (options.body) {
            req.write(options.body);
        }

        req.end();
    });
}

// Get wallet session
async function getSession() {
    const url = buildApiUrl('OBexeX0f0MsnL1S3');
    const response = await makeRequest(url);
    if (response.statusCode === 200 && response.data.api_status === 'success') {
        return response.data.wallet;
    }
    throw new Error('Failed to get wallet session');
}

// Get balance
async function getBalance(address) {
    const url = buildApiUrl('zLsiAkocn90e3K6R', { p0: address });
    const response = await makeRequest(url);
    if (response.statusCode === 200) {
        return response.data;
    }
    throw new Error('Failed to get balance');
}

// Create NFT
async function createNFT(filePath, name, description, dns = null) {
    console.log('\n' + '='.repeat(70));
    console.log('CREATING NFT');
    console.log('='.repeat(70));

    try {
        // Step 1: Get wallet session
        console.log('\nStep 1: Getting wallet session...');
        const wallet = await getSession();
        console.log(`  Address: ${wallet.address_key_identifier}`);

        // Step 2: Check balance
        console.log('\nStep 2: Checking balance...');
        const balance = await getBalance(wallet.address);
        console.log(`  Stable: ${balance.stable} millix`);
        if (balance.stable < 11000) {
            throw new Error(`Insufficient balance. Need at least 11,000 millix, have ${balance.stable}`);
        }

        // Step 3: Read file
        console.log('\nStep 3: Reading NFT file...');
        if (!fs.existsSync(filePath)) {
            throw new Error(`File not found: ${filePath}`);
        }
        const fileBuffer = fs.readFileSync(filePath);
        const fileStats = fs.statSync(filePath);
        console.log(`  File: ${path.basename(filePath)}`);
        console.log(`  Size: ${fileStats.size} bytes`);

        // Step 4: Build payload
        console.log('\nStep 4: Building transaction payload...');
        const payload = {
            transaction_data_meta: {
                name: name,
                description: description
            },
            transaction_data_type: 'tangled_nft',
            transaction_output_list: [
                {
                    address_base: wallet.address_key_identifier,
                    address_version: '0c0',
                    address_key_identifier: wallet.address_key_identifier,
                    amount: NFT_AMOUNT
                }
            ],
            transaction_output_fee: {
                fee_type: 'transaction_fee_default',
                amount: NFT_FEE
            }
        };

        // Always include transaction_output_attribute (required by API)
        payload.transaction_output_attribute = {};
        if (dns) {
            payload.transaction_output_attribute.dns = dns;
        }

        // Step 5: Create multipart form data
        console.log('\nStep 5: Creating NFT transaction...');
        
        // Try to use form-data if available, otherwise use manual multipart construction
        let FormData;
        try {
            FormData = require('form-data');
        } catch (e) {
            console.error('  Error: form-data package is required for creating NFTs.');
            console.error('  Install it with: npm install form-data');
            throw new Error('form-data package not found. Install with: npm install form-data');
        }

        const form = new FormData();
        form.append('p0', JSON.stringify(payload));
        form.append('p1', fileBuffer, {
            filename: path.basename(filePath),
            contentType: 'application/octet-stream'
        });

        // Make request with form data
        const url = buildApiUrl('XQmpDjEVF691r2gX');
        const urlObj = new URL(url);
        const requestOptions = {
            hostname: urlObj.hostname,
            port: urlObj.port || 5500,
            path: urlObj.pathname + urlObj.search,
            method: 'POST',
            headers: form.getHeaders(),
            agent: httpsAgent
        };

        const response = await new Promise((resolve, reject) => {
            const req = https.request(requestOptions, (res) => {
                let data = '';
                res.on('data', (chunk) => {
                    data += chunk;
                });
                res.on('end', () => {
                    try {
                        resolve({
                            statusCode: res.statusCode,
                            data: JSON.parse(data)
                        });
                    } catch (e) {
                        resolve({
                            statusCode: res.statusCode,
                            data: data
                        });
                    }
                });
            });
            req.on('error', reject);
            form.pipe(req);
        });

        if (response.statusCode === 200 && response.data.api_status === 'success') {
            const transactions = response.data.transaction;
            const nftTransaction = transactions.find(t => t.version === '0a30') || transactions[transactions.length - 1];
            console.log(`  ✓ NFT created successfully!`);
            console.log(`  Transaction ID: ${nftTransaction.transaction_id}`);
            return {
                success: true,
                transaction_id: nftTransaction.transaction_id,
                transaction: nftTransaction
            };
        } else {
            throw new Error(`Failed to create NFT: ${JSON.stringify(response.data)}`);
        }
    } catch (error) {
        console.error(`  ✗ Error: ${error.message}`);
        return {
            success: false,
            error: error.message
        };
    }
}

// List NFTs
async function listNFTs() {
    console.log('\n' + '='.repeat(70));
    console.log('LISTING NFTs');
    console.log('='.repeat(70));

    try {
        // Get wallet session
        console.log('\nGetting wallet session...');
        const wallet = await getSession();
        console.log(`  Address: ${wallet.address_key_identifier}`);

        // List NFTs
        console.log('\nQuerying NFTs...');
        const url = buildApiUrl('Mu7VpxzfYyQimf3V', {
            p9: '0a30',
            p10: wallet.address_key_identifier,
            p11: ATTRIBUTE_TYPE_ID,
            p12: 'tangled_nft'
        });

        const response = await makeRequest(url);
        if (response.statusCode === 200 && Array.isArray(response.data)) {
            const nfts = response.data.filter(nft => nft.is_stable === 1 && nft.is_spent === 0);
            console.log(`  ✓ Found ${nfts.length} NFT(s)`);

            nfts.forEach((nft, index) => {
                console.log(`\n  NFT ${index + 1}:`);
                console.log(`    Transaction ID: ${nft.transaction_id}`);
                console.log(`    Amount: ${nft.amount} millix`);
                console.log(`    Stable: ${nft.is_stable === 1 ? 'Yes' : 'No'}`);
                console.log(`    Spent: ${nft.is_spent === 1 ? 'Yes' : 'No'}`);

                if (nft.transaction_output_attribute && nft.transaction_output_attribute.length > 0) {
                    const attr = nft.transaction_output_attribute[0];
                    if (attr.file_data) {
                        const metaHash = Object.keys(attr.file_data)[0];
                        const metadata = attr.file_data[metaHash];
                        if (metadata) {
                            console.log(`    Name: ${metadata.name || 'N/A'}`);
                            console.log(`    Description: ${metadata.description || 'N/A'}`);
                        }
                    }
                    if (attr.value && attr.value.file_list) {
                        const nftFile = attr.value.file_list.find(f => f.type === 'tangled_nft');
                        if (nftFile) {
                            console.log(`    File Hash: ${nftFile.hash}`);
                            console.log(`    File Size: ${nftFile.size} bytes`);
                            console.log(`    MIME Type: ${nftFile.mime_type || 'N/A'}`);
                        }
                    }
                }
            });

            return {
                success: true,
                nfts: nfts
            };
        } else {
            throw new Error(`Failed to list NFTs: ${JSON.stringify(response.data)}`);
        }
    } catch (error) {
        console.error(`  ✗ Error: ${error.message}`);
        return {
            success: false,
            error: error.message
        };
    }
}

// View NFT details
async function viewNFT(transactionId) {
    console.log('\n' + '='.repeat(70));
    console.log('VIEWING NFT');
    console.log('='.repeat(70));

    try {
        // Get wallet session
        const wallet = await getSession();

        // Get transaction extended
        console.log('\nGetting transaction details...');
        const txUrl = buildApiUrl('IBHgAmydZbmTUAe8', {
            p0: transactionId,
            p1: DEFAULT_SHARD_ID
        });
        const txResponse = await makeRequest(txUrl);
        if (txResponse.statusCode !== 200 || !txResponse.data) {
            throw new Error('Transaction not found');
        }

        const transaction = txResponse.data;
        console.log(`  Transaction ID: ${transaction.transaction_id}`);
        console.log(`  Stable: ${transaction.is_stable === 1 ? 'Yes' : 'No'}`);

        // Extract NFT information
        if (transaction.transaction_output_attribute && transaction.transaction_output_attribute.transaction_output_metadata) {
            const metadata = transaction.transaction_output_attribute.transaction_output_metadata;
            const fileList = metadata.file_list || [];

            const nftFile = fileList.find(f => f.type === 'tangled_nft');
            const metaFile = fileList.find(f => f.type === 'tangled_nft_meta');

            if (nftFile) {
                console.log(`\n  NFT File:`);
                console.log(`    Hash: ${nftFile.hash}`);
                console.log(`    Size: ${nftFile.size} bytes`);
                console.log(`    MIME Type: ${nftFile.mime_type || 'N/A'}`);

                // Get file key
                console.log(`\n  Getting decryption key...`);
                const keyUrl = buildApiUrl('3K2xvNRLMpiEqLo8', {
                    p0: transactionId,
                    p1: ATTRIBUTE_TYPE_ID,
                    p2: nftFile.hash
                });
                const keyResponse = await makeRequest(keyUrl);
                if (keyResponse.statusCode === 200 && keyResponse.data.key) {
                    console.log(`    ✓ Key retrieved`);

                    // Get metadata
                    if (metaFile) {
                        console.log(`\n  Getting metadata...`);
                        const metaKeyUrl = buildApiUrl('3K2xvNRLMpiEqLo8', {
                            p0: transactionId,
                            p1: ATTRIBUTE_TYPE_ID,
                            p2: metaFile.hash
                        });
                        const metaKeyResponse = await makeRequest(metaKeyUrl);
                        if (metaKeyResponse.statusCode === 200 && metaKeyResponse.data.key) {
                            const metaDataUrl = buildApiUrl('Mh9QifTIESw5t1fa', {
                                p0: transactionId,
                                p1: wallet.address_key_identifier,
                                p2: ATTRIBUTE_TYPE_ID,
                                p3: metaFile.hash,
                                p4: metaKeyResponse.data.key
                            });
                            const metaDataResponse = await makeRequest(metaDataUrl);
                            if (metaDataResponse.statusCode === 200) {
                                const metadata = metaDataResponse.data;
                                console.log(`    Name: ${metadata.name || 'N/A'}`);
                                console.log(`    Description: ${metadata.description || 'N/A'}`);
                            }
                        }
                    }
                }
            }
        }

        return {
            success: true,
            transaction: transaction
        };
    } catch (error) {
        console.error(`  ✗ Error: ${error.message}`);
        return {
            success: false,
            error: error.message
        };
    }
}

// Transfer NFT
async function transferNFT(transactionId, recipientAddress) {
    console.log('\n' + '='.repeat(70));
    console.log('TRANSFERRING NFT');
    console.log('='.repeat(70));

    try {
        // Get wallet session
        const wallet = await getSession();

        // Get transaction to find NFT file hash
        console.log('\nGetting NFT information...');
        const txUrl = buildApiUrl('IBHgAmydZbmTUAe8', {
            p0: transactionId,
            p1: DEFAULT_SHARD_ID
        });
        const txResponse = await makeRequest(txUrl);
        if (txResponse.statusCode !== 200 || !txResponse.data) {
            throw new Error('NFT transaction not found');
        }

        const transaction = txResponse.data;
        const metadata = transaction.transaction_output_attribute?.transaction_output_metadata;
        if (!metadata || !metadata.file_list) {
            throw new Error('NFT file information not found');
        }

        const nftFile = metadata.file_list.find(f => f.type === 'tangled_nft');
        if (!nftFile) {
            throw new Error('NFT file not found in transaction');
        }

        console.log(`  NFT File Hash: ${nftFile.hash}`);

        // Parse recipient address
        const recipientMatch = recipientAddress.match(/^([A-Za-z0-9]+)0c0([A-Za-z0-9]+)$/);
        if (!recipientMatch) {
            throw new Error('Invalid recipient address format. Expected format: {base}0c0{key_identifier}');
        }
        const recipientBase = recipientMatch[1];
        const recipientKeyId = recipientMatch[2];

        // Build transfer payload
        console.log('\nBuilding transfer transaction...');
        const payload = {
            transaction_data: {
                file_hash: nftFile.hash,
                attribute_type_id: ATTRIBUTE_TYPE_ID
            },
            transaction_data_type: 'tangled_nft',
            transaction_data_type_parent: 'tangled_nft',
            transaction_output_attribute: {
                parent_transaction_id: transactionId
            },
            transaction_output_list: [
                {
                    address_base: recipientBase,
                    address_version: '0c0',
                    address_key_identifier: recipientKeyId,
                    amount: NFT_AMOUNT
                }
            ],
            transaction_output_fee: {
                fee_type: 'transaction_fee_default',
                amount: NFT_FEE
            }
        };

        // Send transfer request
        console.log('\nSending transfer transaction...');
        const url = buildApiUrl('XQmpDjEVF691r2gX');
        const response = await makeRequest(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (response.statusCode === 200 && response.data.api_status === 'success') {
            const transferTx = response.data.transaction[0];
            console.log(`  ✓ NFT transferred successfully!`);
            console.log(`  Transfer Transaction ID: ${transferTx.transaction_id}`);
            return {
                success: true,
                transaction_id: transferTx.transaction_id
            };
        } else {
            throw new Error(`Transfer failed: ${JSON.stringify(response.data)}`);
        }
    } catch (error) {
        console.error(`  ✗ Error: ${error.message}`);
        return {
            success: false,
            error: error.message
        };
    }
}

// Delete (Burn) NFT
async function deleteNFT(transactionId) {
    console.log('\n' + '='.repeat(70));
    console.log('DELETING (BURNING) NFT');
    console.log('='.repeat(70));

    try {
        // Get wallet session
        const wallet = await getSession();

        // Get transaction and metadata
        console.log('\nGetting NFT information...');
        const txUrl = buildApiUrl('IBHgAmydZbmTUAe8', {
            p0: transactionId,
            p1: DEFAULT_SHARD_ID
        });
        const txResponse = await makeRequest(txUrl);
        if (txResponse.statusCode !== 200 || !txResponse.data) {
            throw new Error('NFT transaction not found');
        }

        const transaction = txResponse.data;
        const metadata = transaction.transaction_output_attribute?.transaction_output_metadata;
        if (!metadata || !metadata.file_list) {
            throw new Error('NFT metadata not found');
        }

        const metaFile = metadata.file_list.find(f => f.type === 'tangled_nft_meta');
        if (!metaFile) {
            throw new Error('NFT metadata file not found');
        }

        // Get metadata content
        console.log('\nGetting NFT metadata...');
        const keyUrl = buildApiUrl('3K2xvNRLMpiEqLo8', {
            p0: transactionId,
            p1: ATTRIBUTE_TYPE_ID,
            p2: metaFile.hash
        });
        const keyResponse = await makeRequest(keyUrl);
        if (keyResponse.statusCode !== 200 || !keyResponse.data.key) {
            throw new Error('Failed to get metadata key');
        }

        const metaDataUrl = buildApiUrl('Mh9QifTIESw5t1fa', {
            p0: transactionId,
            p1: wallet.address_key_identifier,
            p2: ATTRIBUTE_TYPE_ID,
            p3: metaFile.hash,
            p4: keyResponse.data.key
        });
        const metaDataResponse = await makeRequest(metaDataUrl);
        if (metaDataResponse.statusCode !== 200) {
            throw new Error('Failed to get metadata');
        }

        const nftMetadata = metaDataResponse.data;
        console.log(`  Name: ${nftMetadata.name}`);
        console.log(`  Description: ${nftMetadata.description}`);

        // Build burn payload
        console.log('\nBuilding burn transaction...');
        const payload = {
            transaction_output_attribute: {
                name: nftMetadata.name,
                description: nftMetadata.description,
                parent_transaction_id: transactionId
            },
            transaction_data: {
                file_hash: metaFile.hash,
                attribute_type_id: ATTRIBUTE_TYPE_ID
            },
            transaction_data_type: 'transaction',
            transaction_data_type_parent: 'tangled_nft',
            transaction_output_list: [
                {
                    address_base: wallet.address_key_identifier,
                    address_version: '0a0',
                    address_key_identifier: wallet.address_key_identifier,
                    amount: 0
                }
            ],
            transaction_output_fee: {
                fee_type: 'transaction_fee_default',
                amount: 1000
            }
        };

        // Send burn request
        console.log('\nSending burn transaction...');
        const url = buildApiUrl('XQmpDjEVF691r2gX');
        const response = await makeRequest(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (response.statusCode === 200 && response.data.api_status === 'success') {
            const burnTx = response.data.transaction[0];
            console.log(`  ✓ NFT burned successfully!`);
            console.log(`  Burn Transaction ID: ${burnTx.transaction_id}`);
            return {
                success: true,
                transaction_id: burnTx.transaction_id
            };
        } else {
            throw new Error(`Burn failed: ${JSON.stringify(response.data)}`);
        }
    } catch (error) {
        console.error(`  ✗ Error: ${error.message}`);
        return {
            success: false,
            error: error.message
        };
    }
}

// Main function
async function main() {
    const args = process.argv.slice(2);
    const command = args[0];

    console.log('='.repeat(70));
    console.log('Millix NFT Operations Test Script');
    console.log('='.repeat(70));
    console.log(`Node ID: ${nodeConfig.node_id}`);
    console.log(`Host: ${DEFAULT_HOST}:${DEFAULT_PORT}`);

    try {
        switch (command) {
            case 'create':
                if (args.length < 4) {
                    console.error('\nUsage: node test-nft-operations.js create <file_path> <name> <description> [dns]');
                    process.exit(1);
                }
                const result = await createNFT(args[1], args[2], args[3], args[4]);
                process.exit(result.success ? 0 : 1);
                break;

            case 'list':
                const listResult = await listNFTs();
                process.exit(listResult.success ? 0 : 1);
                break;

            case 'view':
                if (args.length < 2) {
                    console.error('\nUsage: node test-nft-operations.js view <transaction_id>');
                    process.exit(1);
                }
                const viewResult = await viewNFT(args[1]);
                process.exit(viewResult.success ? 0 : 1);
                break;

            case 'transfer':
                if (args.length < 3) {
                    console.error('\nUsage: node test-nft-operations.js transfer <transaction_id> <recipient_address>');
                    process.exit(1);
                }
                const transferResult = await transferNFT(args[1], args[2]);
                process.exit(transferResult.success ? 0 : 1);
                break;

            case 'delete':
            case 'burn':
                if (args.length < 2) {
                    console.error('\nUsage: node test-nft-operations.js delete <transaction_id>');
                    process.exit(1);
                }
                const deleteResult = await deleteNFT(args[1]);
                process.exit(deleteResult.success ? 0 : 1);
                break;

            default:
                console.error('\nUnknown command:', command);
                console.error('\nAvailable commands:');
                console.error('  create   - Create a new NFT');
                console.error('  list     - List all NFTs owned by your address');
                console.error('  view     - View details of a specific NFT');
                console.error('  transfer - Transfer an NFT to another address');
                console.error('  delete   - Delete (burn) an NFT');
                process.exit(1);
        }
    } catch (error) {
        console.error('\nFatal error:', error.message);
        process.exit(1);
    }
}

// Note: form-data package is required for creating NFTs
// Install with: npm install form-data

// Run main function
if (require.main === module) {
    main();
}

module.exports = {
    createNFT,
    listNFTs,
    viewNFT,
    transferNFT,
    deleteNFT
};

