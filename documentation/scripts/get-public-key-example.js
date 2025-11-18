#!/usr/bin/env node

/**
 * Example script showing how to get the public key for a wallet address
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const SCRIPT_DIR = __dirname;

// Load credentials
let nodeConfig;
try {
    const nodeConfigPath = path.join(SCRIPT_DIR, 'node.json');
    nodeConfig = JSON.parse(fs.readFileSync(nodeConfigPath, 'utf8'));
} catch (error) {
    console.error('Error loading node.json:', error.message);
    process.exit(1);
}

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
            rejectUnauthorized: false // Skip SSL check for localhost
        };

        const req = client.request(requestOptions, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
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
        req.setTimeout(30000, () => {
            req.destroy();
            reject(new Error('Request timeout'));
        });
        
        req.end();
    });
}

// Build API URL
function buildApiUrl(apiId, params = {}) {
    const baseUrl = `https://localhost:5500/api`;
    const nodeId = nodeConfig.node_id;
    const nodeSignature = nodeConfig.node_signature;
    
    let url = `${baseUrl}/${nodeId}/${nodeSignature}/${apiId}`;
    
    const queryString = Object.entries(params)
        .filter(([_, value]) => value !== undefined && value !== null && value !== '')
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join('&');
    
    if (queryString) {
        url += `?${queryString}`;
    }
    
    return url;
}

async function main() {
    console.log('='.repeat(70));
    console.log('Getting Public Key for Wallet Address');
    console.log('='.repeat(70));
    
    // Step 1: Get wallet session to find the active address
    console.log('\nStep 1: Getting wallet session...');
    try {
        const sessionUrl = buildApiUrl('OBexeX0f0MsnL1S3');
        const sessionResponse = await makeRequest(sessionUrl);
        
        if (sessionResponse.statusCode !== 200 || !sessionResponse.data.wallet) {
            console.error('  ✗ No active wallet session found');
            console.log('\nNote: You need to activate a wallet session first using new_session API');
            process.exit(1);
        }
        
        const wallet = sessionResponse.data.wallet;
        const address = wallet.address || `${wallet.address_base}${wallet.address_version}${wallet.address_key_identifier}`;
        console.log(`  ✓ Active wallet found`);
        console.log(`  Address: ${address}`);
        console.log(`  Address Key Identifier: ${wallet.address_key_identifier}`);
        
        // Step 2: Get keychain address information (includes public key in address_attribute)
        console.log('\nStep 2: Getting keychain address information...');
        const keychainUrl = buildApiUrl('ywTmt3C0nwk5k4c7', { p0: address });
        const keychainResponse = await makeRequest(keychainUrl);
        
        if (keychainResponse.statusCode !== 200) {
            console.error(`  ✗ Error: ${JSON.stringify(keychainResponse.data)}`);
            process.exit(1);
        }
        
        const keychainData = keychainResponse.data;
        console.log(`  ✓ Keychain data retrieved`);
        
        // Step 3: Extract public key from address attributes
        console.log('\nStep 3: Extracting public key...');
        
        if (keychainData.address_attribute && keychainData.address_attribute.key_public) {
            const publicKey = keychainData.address_attribute.key_public;
            console.log(`  ✓ Public key found!`);
            console.log(`\n  Public Key: ${publicKey}`);
            console.log(`\n  Full Address Info:`);
            console.log(`    Address: ${keychainData.address}`);
            console.log(`    Address Base: ${keychainData.address_base}`);
            console.log(`    Address Version: ${keychainData.address_version}`);
            console.log(`    Address Key Identifier: ${keychainData.address_key_identifier}`);
            console.log(`    Public Key: ${publicKey}`);
            
            // Also show how to get it via list_keychain_address
            console.log('\n' + '='.repeat(70));
            console.log('Alternative Method: Using list_keychain_address');
            console.log('='.repeat(70));
            
            const listUrl = buildApiUrl('quIoaHsl8h6IwyEI');
            const listResponse = await makeRequest(listUrl);
            
            if (listResponse.statusCode === 200 && Array.isArray(listResponse.data)) {
                console.log(`\n  Found ${listResponse.data.length} address(es) in keychain:`);
                listResponse.data.forEach((addr, index) => {
                    console.log(`\n  Address ${index + 1}:`);
                    console.log(`    Full Address: ${addr.address}`);
                    console.log(`    Address Key Identifier: ${addr.address_key_identifier}`);
                    if (addr.address_attribute && addr.address_attribute.key_public) {
                        console.log(`    Public Key: ${addr.address_attribute.key_public}`);
                    } else {
                        console.log(`    Public Key: Not available in attributes`);
                    }
                });
            }
            
        } else {
            console.log(`  ⚠ Public key not found in address attributes`);
            console.log(`\n  This can happen if:`);
            console.log(`    - The address hasn't been used in a transaction yet`);
            console.log(`    - The public key hasn't been stored in address attributes`);
            console.log(`\n  The public key can be derived from the private key, but it's not`);
            console.log(`  automatically stored until the address is used in a transaction.`);
            
            // Show how to get private key (which can be used to derive public key)
            console.log('\n  You can get the private key using:');
            console.log(`    API: PKUv2JfV87KpEZwE (get_address_private_key)`);
            console.log(`    URL: ${buildApiUrl('PKUv2JfV87KpEZwE', { p0: address })}`);
        }
        
        console.log('\n' + '='.repeat(70));
        console.log('API Endpoints for Getting Public Keys:');
        console.log('='.repeat(70));
        console.log('\n1. get_keychain_address (ywTmt3C0nwk5k4c7)');
        console.log(`   Returns address info including address_attribute.key_public`);
        console.log(`   URL: ${buildApiUrl('ywTmt3C0nwk5k4c7', { p0: address })}`);
        
        console.log('\n2. list_keychain_address (quIoaHsl8h6IwyEI)');
        console.log(`   Returns all addresses in keychain with their attributes`);
        console.log(`   URL: ${buildApiUrl('quIoaHsl8h6IwyEI')}`);
        
        console.log('\n3. get_address_private_key (PKUv2JfV87KpEZwE)');
        console.log(`   Returns private key (can be used to derive public key)`);
        console.log(`   URL: ${buildApiUrl('PKUv2JfV87KpEZwE', { p0: address })}`);
        
    } catch (error) {
        console.error('\n✗ Error:', error.message);
        process.exit(1);
    }
}

main();

