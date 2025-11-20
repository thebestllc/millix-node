# Chapter 7: NFTs on Millix

> *"Owning digital art without a blockchain is like owning a photo of the Mona Lisa. With NFTs, you own the painting itself—verifiably and permanently."*

## The NFT Revolution

Non-Fungible Tokens (NFTs) took the world by storm in 2021. Digital art selling for millions. Profile pictures worth six figures. Virtual real estate in metaverses.

But most NFT implementations have problems:

- **Ethereum**: Expensive minting ($50-500 in gas fees), slow, unpredictable costs
- **Solana**: Fast but network stability issues
- **Most platforms**: Metadata stored off-chain (IPFS, AWS), creating centralization risks

**Millix does NFTs differently**: Native protocol support, predictable fees, encrypted on-DAG storage, simple API.

No smart contracts needed. No third-party storage. Just straightforward, reliable NFTs.

Let's explore how.

---

## What Makes Millix NFTs Special?

### 1. **Protocol-Native**

NFTs aren't bolted on via smart contracts—they're built into the Millix protocol itself. Use the same simple API as regular transactions.

### 2. **On-DAG Storage**

Your NFT data is encrypted and stored directly on the DAG. No IPFS gateways. No centralized servers. No links that might break in 5 years.

### 3. **Predictable Costs**

Creating an NFT costs:
- **10,000 millix** transaction fee (always)
- **1,000+ millix** minimum for the NFT output

That's it. No gas auction surprises.

### 4. **Encrypted by Default**

NFT data is encrypted on the DAG. Only those with the decryption keys (owner, specified recipients) can access the content.

### 5. **Simple Transfers**

Transferring an NFT is just another transaction. Same API, same simplicity, same predictable fee.

---

## NFT Address Versions

Millix uses different address versions to distinguish NFTs from regular transactions:

| Version | Network | Type |
|---------|---------|------|
| `0a0` | Mainnet | Standard address |
| `0c0` | Mainnet | **NFT address** |
| `lal` | Testnet | Standard address |
| `lcl` | Testnet | **NFT address** |

When creating an NFT, you'll send to an address with `0c0` (mainnet) or `lcl` (testnet).

**Example NFT address**:
```
1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP0c01EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP
                                   ^^^^ NFT version
```

---

## Prerequisites

Before creating NFTs, ensure you have:

- ✓ Running Millix node
- ✓ At least **11,000 millix** stable balance
- ✓ `node_id` and `node_signature` (from `node.json`)
- ✓ Digital file to tokenize (image, video, document, etc.)

Quick balance check:

```bash
curl -k "https://localhost:5500/api/{node_id}/{node_signature}/zLsiAkocn90e3K6R?p0={your_address}"
```

---

## Creating Your First NFT

Let's mint an NFT! We'll create a complete working script.

### Prepare Your NFT File

For this example, create a simple text file:

```bash
echo "Hello, NFT World!" > my-first-nft.txt
```

Or use any image, video, or document.

### `create-nft.js` [TESTED NOV 2025]

```javascript
#!/usr/bin/env node

const https = require('https');
const fs = require('fs');
const FormData = require('form-data'); // npm install form-data

/**
 * Millix NFT Creator
 * 
 * Creates NFTs with metadata and file storage on the DAG
 */

class MillixNFTCreator {
  constructor(nodeJsonPath = './node.json') {
    const nodeConfig = JSON.parse(fs.readFileSync(nodeJsonPath, 'utf8'));
    this.nodeId = nodeConfig.node_id;
    this.nodeSignature = nodeConfig.node_signature;
    this.host = 'localhost';
    this.port = 5500;
    
    this.httpsAgent = new https.Agent({ rejectUnauthorized: false });
  }

  buildApiUrl(apiId) {
    return `https://${this.host}:${this.port}/api/${this.nodeId}/${this.nodeSignature}/${apiId}`;
  }

  async request(url, method = 'GET', body = null) {
    return new Promise((resolve, reject) => {
      const urlObj = new URL(url);
      const options = {
        hostname: urlObj.hostname,
        port: urlObj.port,
        path: urlObj.pathname,
        method,
        agent: this.httpsAgent,
        headers: {}
      };

      if (body && typeof body === 'string') {
        options.headers['Content-Type'] = 'application/json';
        options.headers['Content-Length'] = Buffer.byteLength(body);
      }

      const req = https.request(options, (res) => {
        let data = '';
        res.on('data', chunk => { data += chunk; });
        res.on('end', () => {
          try {
            resolve({ statusCode: res.statusCode, data: JSON.parse(data) });
          } catch (e) {
            resolve({ statusCode: res.statusCode, data });
          }
        });
      });

      req.on('error', reject);
      if (body) req.write(body);
      req.end();
    });
  }

  async getSession() {
    const url = this.buildApiUrl('OBexeX0f0MsnL1S3');
    const response = await this.request(url);
    
    if (response.data.api_status === 'fail') {
      throw new Error('Failed to get session');
    }
    
    return response.data.wallet;
  }

  /**
   * Create NFT with file and metadata
   */
  async createNFT({ filePath, name, description, dns = null }) {
    console.log('\n=== Creating Millix NFT ===\n');
    
    // Step 1: Get wallet session
    console.log('Step 1: Getting wallet session...');
    const session = await this.getSession();
    console.log(`  ✓ Address: ${session.address_key_identifier}`);
    
    // Step 2: Read NFT file
    console.log('\nStep 2: Reading NFT file...');
    if (!fs.existsSync(filePath)) {
      throw new Error(`File not found: ${filePath}`);
    }
    const fileBuffer = fs.readFileSync(filePath);
    console.log(`  ✓ File loaded: ${filePath} (${fileBuffer.length} bytes)`);
    
    // Step 3: Build transaction payload
    console.log('\nStep 3: Building transaction payload...');
    
    const payload = {
      transaction_data_meta: {
        name: name,
        description: description
      },
      transaction_data_type: 'tangled_nft',
      transaction_output_list: [{
        address_base: session.address_key_identifier,
        address_version: '0c0', // NFT version
        address_key_identifier: session.address_key_identifier,
        amount: 1000 // Minimum NFT amount
      }],
      transaction_output_fee: {
        fee_type: 'transaction_fee_default',
        amount: 10000 // Standard NFT creation fee
      }
    };
    
    // Always include transaction_output_attribute (required by API)
    payload.transaction_output_attribute = {};
    if (dns) {
      payload.transaction_output_attribute.dns = dns;
    }
    
    console.log(`  ✓ Name: "${name}"`);
    console.log(`  ✓ Description: "${description}"`);
    if (dns) {
      console.log(`  ✓ DNS verification: ${dns}`);
    }
    
    // Step 4: Create multipart form data
    console.log('\nStep 4: Creating NFT transaction...');
    
    const form = new FormData();
    form.append('p0', JSON.stringify(payload));
    form.append('p1', fileBuffer, {
      filename: require('path').basename(filePath),
      contentType: 'application/octet-stream'
    });
    
    // Make request with form data
    const url = this.buildApiUrl('XQmpDjEVF691r2gX');
    const urlObj = new URL(url);
    
    const result = await new Promise((resolve, reject) => {
      const requestOptions = {
        hostname: urlObj.hostname,
        port: urlObj.port || 5500,
        path: urlObj.pathname,
        method: 'POST',
        headers: form.getHeaders(),
        agent: this.httpsAgent
      };

      const req = https.request(requestOptions, (res) => {
        let data = '';
        res.on('data', (chunk) => { data += chunk; });
        res.on('end', () => {
          try {
            resolve({
              statusCode: res.statusCode,
              data: JSON.parse(data)
            });
          } catch (e) {
            resolve({ statusCode: res.statusCode, data });
          }
        });
      });

      req.on('error', reject);
      form.pipe(req);
    });
    
    if (result.statusCode === 200 && result.data.api_status === 'success') {
      const transactions = result.data.transaction;
      
      // Find the NFT transaction (version 0a30)
      const nftTransaction = transactions.find(t => t.version === '0a30') || transactions[transactions.length - 1];
      
      console.log(`  ✓ NFT created successfully!`);
      console.log(`  Transaction ID: ${nftTransaction.transaction_id}`);
      
      // Find the NFT output
      const nftOutput = nftTransaction.transaction_output_list.find(o => o.address_version === '0c0');
      if (nftOutput) {
        console.log(`  NFT Address: ${nftOutput.address}`);
      }
      
      console.log('\n=== NFT Creation Complete ===\n');
      
      return {
        transactionId: nftTransaction.transaction_id,
        shardId: nftTransaction.shard_id,
        nftAddress: nftOutput ? nftOutput.address : null,
        transaction: nftTransaction
      };
    } else {
      throw new Error(`Failed to create NFT: ${JSON.stringify(result.data)}`);
    }
  }
}

// CLI Interface
if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args.length < 3) {
    console.log('Usage: node create-nft.js <file_path> <name> <description> [dns]');
    console.log('');
    console.log('Example:');
    console.log('  node create-nft.js ./my-art.jpg "Cool Art" "My first NFT on Millix"');
    console.log('  node create-nft.js ./avatar.png "Profile Pic" "My avatar" example.com');
    process.exit(1);
  }
  
  const [filePath, name, description, dns] = args;
  
  const creator = new MillixNFTCreator();
  
  creator.createNFT({ filePath, name, description, dns })
    .then((result) => {
      console.log(`NFT Transaction: ${result.transactionId}`);
      console.log('Save this transaction ID to view/transfer your NFT later!');
      process.exit(0);
    })
    .catch((error) => {
      console.error(`\nError: ${error.message}`);
      process.exit(1);
    });
}

module.exports = MillixNFTCreator;
```

### Install Dependencies

```bash
npm install form-data
```

### Run It!

```bash
# Create NFT from a file
node create-nft.js ./my-artwork.jpg "My Masterpiece" "A beautiful digital artwork"

# Output:
# === Creating Millix NFT ===
# 
# Step 1: Getting wallet session...
#   ✓ Address: 1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP
# 
# Step 2: Reading NFT file...
#   ✓ File loaded: ./my-artwork.jpg (45231 bytes)
# 
# Step 3: Building transaction payload...
#   ✓ Name: "My Masterpiece"
#   ✓ Description: "A beautiful digital artwork"
# 
# Step 4: Creating NFT transaction...
#   ✓ NFT created successfully!
#   Transaction ID: 3XmDqA2pRvW8NjKLq7Yz...
#   NFT Address: 1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP0c0...
# 
# === NFT Creation Complete ===
```

**Congratulations!** You've just minted your first Millix NFT. 🎉

---

## Listing Your NFTs

Want to see all the NFTs you own?

### `list-nfts.js` [PSEUDOCODE]

```javascript
#!/usr/bin/env node

const https = require('https');
const fs = require('fs');

class MillixNFTLister {
  constructor(nodeJsonPath = './node.json') {
    const nodeConfig = JSON.parse(fs.readFileSync(nodeJsonPath, 'utf8'));
    this.nodeId = nodeConfig.node_id;
    this.nodeSignature = nodeConfig.node_signature;
    this.host = 'localhost';
    this.port = 5500;
    this.httpsAgent = new https.Agent({ rejectUnauthorized: false });
  }

  buildApiUrl(apiId, params = {}) {
    const base = `https://${this.host}:${this.port}/api/${this.nodeId}/${this.nodeSignature}/${apiId}`;
    const qs = Object.entries(params)
      .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
      .join('&');
    return qs ? `${base}?${qs}` : base;
  }

  async request(url) {
    return new Promise((resolve, reject) => {
      https.get(url, { agent: this.httpsAgent }, (res) => {
        let data = '';
        res.on('data', chunk => { data += chunk; });
        res.on('end', () => {
          try {
            resolve(JSON.parse(data));
          } catch (e) {
            reject(new Error('Invalid JSON response'));
          }
        });
      }).on('error', reject);
    });
  }

  async getSession() {
    const url = this.buildApiUrl('OBexeX0f0MsnL1S3');
    const response = await this.request(url);
    if (response.api_status === 'fail') throw new Error('Failed to get session');
    return response.wallet;
  }

  async listNFTs() {
    console.log('\n=== Your Millix NFTs ===\n');
    
    // Get wallet session
    const session = await this.getSession();
    console.log(`Wallet: ${session.address_key_identifier}\n`);
    
    // List NFT outputs
    const url = this.buildApiUrl('Mu7VpxzfYyQimf3V', {
      p9: '0a30', // NFT version
      p10: session.address_key_identifier,
      p11: 'Adl87cz8kC190Nqc', // Standard attribute ID
      p12: 'tangled_nft',
      p13: 'create_date desc',
      p14: '100'
    });
    
    const response = await this.request(url);
    
    if (!response || !Array.isArray(response)) {
      console.log('No NFTs found.');
      return [];
    }
    
    console.log(`Found ${response.length} NFT(s):\n`);
    
    response.forEach((nft, index) => {
      console.log(`${index + 1}. ${nft.file_data?.name || 'Unnamed NFT'}`);
      console.log(`   Description: ${nft.file_data?.description || 'No description'}`);
      console.log(`   Transaction ID: ${nft.transaction_id}`);
      console.log(`   Amount: ${nft.amount} millix`);
      console.log(`   Created: ${new Date(nft.create_date * 1000).toLocaleString()}`);
      console.log('');
    });
    
    return response;
  }
}

// CLI Interface
if (require.main === module) {
  const lister = new MillixNFTLister();
  
  lister.listNFTs()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    });
}

module.exports = MillixNFTLister;
```

### Usage

```bash
node list-nfts.js

# Output:
# === Your Millix NFTs ===
# 
# Wallet: 1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP
# 
# Found 3 NFT(s):
# 
# 1. My Masterpiece
#    Description: A beautiful digital artwork
#    Transaction ID: 3XmDqA2pRvW8NjKLq7Yz...
#    Amount: 1000 millix
#    Created: 11/18/2025, 3:45:23 PM
# 
# 2. Profile Avatar
#    Description: My digital identity
#    Transaction ID: 4YpXqM9jRvT2KnLq8Az...
#    Amount: 1000 millix
#    Created: 11/17/2025, 10:22:15 AM
# 
# 3. Collectible Card
#    Description: Rare trading card #42
#    Transaction ID: 5ZqYrN0kSwU3LoMr9Ba...
#    Amount: 1000 millix
#    Created: 11/16/2025, 2:18:07 PM
```

---

## Viewing NFT Data

Want to download the actual NFT file?

### Key Information Needed

From your NFT listing, you'll need:
- `transaction_id`: The NFT creation transaction
- `file_hash`: Hash of the NFT data file
- `file_key`: Decryption key for the file
- `attribute_type_id`: Usually `Adl87cz8kC190Nqc`

### Download NFT File

```bash
# Get extended transaction info
curl -k "https://localhost:5500/api/{node_id}/{node_signature}/IBHgAmydZbmTUAe8?p0={nft_transaction_id}&p1={address_key_identifier}"

# This returns file_list with hashes and keys

# Download NFT data
curl -k "https://localhost:5500/api/{node_id}/{node_signature}/Mh9QifTIESw5t1fa?p0={transaction_id}&p1={address_key_identifier}&p2=Adl87cz8kC190Nqc&p3={file_hash}&p4={file_key}" > nft_image.jpg
```

---

## Transferring NFTs

Transfer ownership to another address.

### Key Points

- Recipient address must use `0c0` version (NFT address)
- Include `parent_transaction_id` in payload
- Include `transaction_data` with original file_hash
- Fee: 10,000 millix

### Transfer Example [PSEUDOCODE]

```javascript
const payload = {
  transaction_data_meta: {
    name: "My Masterpiece",
    description: "A beautiful digital artwork"
  },
  transaction_output_attribute: {
    parent_transaction_id: "{original_nft_transaction_id}"
  },
  transaction_data: {
    file_hash: "{nft_data_file_hash}",
    attribute_type_id: "Adl87cz8kC190Nqc"
  },
  transaction_data_type: "tangled_nft",
  transaction_output_list: [{
    address_base: "{recipient_address_base}",
    address_version: "0c0", // NFT version
    address_key_identifier: "{recipient_address_key_identifier}",
    amount: 1000
  }],
  transaction_output_fee: {
    fee_type: "transaction_fee_default",
    amount: 10000
  }
};

// Send via XQmpDjEVF691r2gX API (same as creation)
```

---

## Burning (Deleting) NFTs

"Burn" an NFT to permanently remove it and reclaim the funds.

### Burning Process

1. Set `transaction_data_type` to `"transaction"` (not `"tangled_nft"`)
2. Set `transaction_data_type_parent` to `"tangled_nft"`
3. Send output to standard address (`0a0` version)
4. Include `parent_transaction_id` and `file_hash`

### Burn Example [PSEUDOCODE]

```javascript
const burnPayload = {
  transaction_output_attribute: {
    parent_transaction_id: "{nft_transaction_id}"
  },
  transaction_data: {
    file_hash: "{nft_data_file_hash}",
    attribute_type_id: "Adl87cz8kC190Nqc"
  },
  transaction_data_type: "transaction", // Standard tx
  transaction_data_type_parent: "tangled_nft", // But from NFT
  transaction_output_list: [{
    address_base: "{your_address_base}",
    address_version: "0a0", // Back to standard address
    address_key_identifier: "{your_address_key_identifier}",
    amount: 1000 // NFT amount returned
  }],
  transaction_output_fee: {
    fee_type: "transaction_fee_default",
    amount: 1000
  }
};

// Send via XQmpDjEVF691r2gX API
// NFT is destroyed, funds (minus fee) returned
```

---

## NFT Use Cases

### Digital Art & Collectibles

```javascript
await creator.createNFT({
  filePath: './rare-artwork.png',
  name: 'Genesis Collection #1',
  description: 'First piece in my NFT art series',
  dns: 'myartgallery.com'
});
```

### Certificates & Credentials

```javascript
await creator.createNFT({
  filePath: './diploma.pdf',
  name: 'Computer Science Degree',
  description: 'BS in CS from Example University, 2025'
});
```

### In-Game Items

```javascript
await creator.createNFT({
  filePath: './legendary-sword.json',
  name: 'Excalibur +10',
  description: 'Legendary weapon with +50 damage'
});
```

### Domain Names / Digital Identity

```javascript
await creator.createNFT({
  filePath: './identity-metadata.json',
  name: 'alice.millix',
  description: 'Decentralized identity for Alice'
});
```

---

## Best Practices

### ✅ Do This

1. **Store transaction IDs**: Keep a record of your NFT transaction IDs
2. **Backup file hashes and keys**: Store these securely
3. **Use descriptive metadata**: Good names and descriptions add value
4. **Test on testnet first**: Use `lcl` addresses for testing
5. **Verify file integrity**: Check files before minting

### ❌ Avoid This

1. **Don't lose transaction IDs**: No ID = no way to prove ownership
2. **Don't mint sensitive data unencrypted**: Data is encrypted on-DAG but verify
3. **Don't forget minimum balance**: Need 11,000 millix (fee + NFT amount)
4. **Don't use standard addresses for NFTs**: Must use `0c0` or `lcl`
5. **Don't assume instant confirmation**: Wait ~10 seconds for stability

---

## Common Issues

### Error: "Insufficient balance"

**Solution**: You need at least 11,000 millix stable. Check:

```bash
curl -k "https://localhost:5500/api/{node_id}/{node_signature}/zLsiAkocn90e3K6R?p0={address}"
```

### Error: "Cannot read properties of undefined (reading 'parent_transaction_id')"

**Solution**: Always include `transaction_output_attribute` in your payload, even if empty:

```javascript
payload.transaction_output_attribute = {};
```

### NFT not showing in list

**Solutions**:
1. Wait for confirmation (~10 seconds)
2. Check you're querying the correct address
3. Verify transaction was successful

### Can't download NFT data

**Solutions**:
1. Ensure you have the correct `file_hash` and `file_key`
2. Verify `attribute_type_id` is `Adl87cz8kC190Nqc`
3. Check transaction is stable

---

## Key Takeaways

✅ **Millix NFTs are protocol-native**: No smart contracts needed

✅ **Use `0c0` address version**: Distinguishes NFTs from regular transactions

✅ **Predictable costs**: 10,000 millix fee + 1,000 minimum NFT amount

✅ **On-DAG storage**: Encrypted and permanent

✅ **Simple API**: Same patterns as regular transactions

✅ **Complete toolkit**: Create, list, view, transfer, burn

---

## Looking Ahead

You now understand Millix NFTs: how to create them, manage them, and integrate them into applications. You've seen working code and practical examples.

In the next chapter, we'll explore the complete Millix API reference—every endpoint, every parameter, every response format. A comprehensive resource for building production applications.

---

**Next**: [Chapter 8: Millix API Reference](08-millix-api-reference.md)



