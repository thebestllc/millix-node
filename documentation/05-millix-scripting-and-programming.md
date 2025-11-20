# Chapter 5: Millix Scripting and Programming

> *"Simplicity is the ultimate sophistication."* – Leonardo da Vinci

## A Different Philosophy

If you're coming from Bitcoin or Ethereum, you might expect this chapter to cover opcodes, stack-based scripts, and smart contract languages. 

**Surprise**: Millix doesn't have Bitcoin Script or Solidity.

And that's intentional.

Millix made a deliberate design choice: **instead of complex on-chain scripting, provide a clean, powerful API for off-chain logic**.

### Why No On-Chain Scripts?

Consider Bitcoin Script:

```
OP_DUP OP_HASH160 <pubKeyHash> OP_EQUALVERIFY OP_CHECKSIG
```

Or Ethereum's Solidity:

```solidity
function transfer(address recipient, uint256 amount) public returns (bool) {
    require(balance[msg.sender] >= amount, "Insufficient balance");
    balance[msg.sender] -= amount;
    balance[recipient] += amount;
    emit Transfer(msg.sender, recipient, amount);
    return true;
}
```

Both powerful, but both add:
- ✗ Complexity (more attack surface)
- ✗ Gas costs (execution fees unpredictable)
- ✗ Upgrade challenges (immutable buggy code)
- ✗ Learning curve (new languages to master)

### The Millix Approach

Millix says: **Keep transactions simple. Put logic in applications.**

```javascript
// Your application logic (Node.js)
if (user.balance >= amount && recipient.isValid()) {
  await millix.sendTransaction({
    to: recipient.address,
    amount: amount,
    fee: 1000
  });
}
```

**Benefits**:
- ✓ Use any programming language
- ✓ Predictable costs (1000 millix per transaction, always)
- ✓ Easy to test and debug (standard development tools)
- ✓ Easy to upgrade (no immutable broken contracts)
- ✓ Simple transaction format (JSON, not bytecode)

This chapter focuses on **programming with Millix** through its API, not "scripting" in the traditional cryptocurrency sense.

---

## The Millix Programming Model

Millix exposes its functionality through a REST API. Your applications interact with your local node, which handles the complex cryptography and network communication.

### Architecture Overview

```
┌─────────────────────────────────────────┐
│        Your Application                 │
│    (Node.js, Python, Rust, etc.)        │
└───────────────┬─────────────────────────┘
                │ HTTPS/JSON
┌───────────────▼─────────────────────────┐
│         Local Millix Node               │
│      (REST API: localhost:5500)         │
│  - Wallet management                    │
│  - Transaction signing                  │
│  - Network communication                │
└───────────────┬─────────────────────────┘
                │ P2P Protocol
┌───────────────▼─────────────────────────┐
│         Millix Network                  │
│  (Distributed DAG, 14,000+ nodes)       │
└─────────────────────────────────────────┘
```

### API Access Pattern

All API calls follow this pattern:

```
https://localhost:5500/api/{node_id}/{node_signature}/{api_endpoint_id}?{parameters}
```

**Components**:
- `node_id`: Your node's identity (from `node.json`)
- `node_signature`: Authentication signature (from `node.json`)
- `api_endpoint_id`: Specific API function (e.g., `XPzc85T3reYmGro1` for send transaction)
- `parameters`: Optional query params or POST body

**Example**:

```bash
curl -k "https://localhost:5500/api/1D7n5SR.../3aPwVLm.../XPzc85T3reYmGro1" \
  -H "Content-Type: application/json" \
  -d '{"transaction_output_list":[...],"transaction_output_fee":{...}}'
```

---

## Core Programming Concepts

### 1. Authentication & Identity

Every API call requires your node credentials:

```javascript
// Read from node.json
const fs = require('fs');
const path = require('path');

const nodeJsonPath = path.join(
  process.env.HOME || process.env.USERPROFILE,
  '.millix-wallet',
  'node.json'
);

const nodeConfig = JSON.parse(fs.readFileSync(nodeJsonPath, 'utf8'));

const NODE_ID = nodeConfig.node_id;
const NODE_SIGNATURE = nodeConfig.node_signature;
```

### 2. API Endpoint IDs

Millix uses cryptic endpoint IDs instead of readable names. This is for security through obscurity and namespace management.

**Common Endpoints**:

| Endpoint ID | Function | Usage |
|-------------|----------|-------|
| `OBexeX0f0MsnL1S3` | Get session | Retrieve wallet info |
| `XPzc85T3reYmGro1` | Send from wallet | Simple transactions |
| `FDLyQ5uo5t7jltiQ` | List outputs | Find unspents |
| `RVBqKlGdk9aEhi5J` | Sign transaction | Low-level signing |
| `VnJIBrrM0KY3uQ9X` | Send transaction | Submit signed tx |
| `zLsiAkocn90e3K6R` | Get balance | Check funds |
| `XQmpDjEVF691r2gX` | Create NFT | Mint NFTs |

You'll memorize these as you use them, but keeping a reference handy helps.

### 3. Handling Responses

All responses follow a consistent format:

```javascript
{
  "api_status": "success" | "fail",
  "api_message": "Optional error message",
  ...data...
}
```

**Always check `api_status` first**:

```javascript
const response = await callApi(endpoint, params);

if (response.api_status === 'fail') {
  throw new Error(response.api_message || 'API call failed');
}

// Process successful response
const data = response.wallet || response.transaction || response;
```

### 4. Self-Signed Certificates

Your local node uses a self-signed SSL certificate. In production code, you'll need to handle this:

```javascript
const https = require('https');

const httpsAgent = new https.Agent({
  rejectUnauthorized: false  // Accept self-signed cert
});

// Use with fetch or axios
const response = await fetch(url, { agent: httpsAgent });
```

For curl:

```bash
curl -k "https://localhost:5500/..."  # -k skips certificate verification
```

---

## Building a Millix SDK

Let's create a simple SDK to interact with Millix:

### `millix-sdk.js` [TESTED NOV 2025]

```javascript
const https = require('https');
const fs = require('fs');
const path = require('path');

class MillixSDK {
  constructor(options = {}) {
    // Load node credentials
    const nodeJsonPath = options.nodeJsonPath || path.join(
      process.env.HOME || process.env.USERPROFILE,
      '.millix-wallet',
      'node.json'
    );
    
    const nodeConfig = JSON.parse(fs.readFileSync(nodeJsonPath, 'utf8'));
    
    this.nodeId = nodeConfig.node_id;
    this.nodeSignature = nodeConfig.node_signature;
    this.host = options.host || 'localhost';
    this.port = options.port || 5500;
    
    // HTTPS agent that accepts self-signed certificates
    this.httpsAgent = new https.Agent({
      rejectUnauthorized: false
    });
  }

  /**
   * Build API URL with credentials
   */
  buildApiUrl(apiId, params = {}) {
    const baseUrl = `https://${this.host}:${this.port}/api/${this.nodeId}/${this.nodeSignature}/${apiId}`;
    
    const queryString = Object.entries(params)
      .map(([key, value]) => `${key}=${encodeURIComponent(
        typeof value === 'object' ? JSON.stringify(value) : value
      )}`)
      .join('&');
    
    return queryString ? `${baseUrl}?${queryString}` : baseUrl;
  }

  /**
   * Make HTTP request (GET or POST)
   */
  async request(url, method = 'GET', body = null) {
    return new Promise((resolve, reject) => {
      const urlObj = new URL(url);
      const options = {
        hostname: urlObj.hostname,
        port: urlObj.port,
        path: urlObj.pathname + urlObj.search,
        method: method,
        agent: this.httpsAgent,
        headers: {}
      };

      if (body) {
        options.headers['Content-Type'] = 'application/json';
        options.headers['Content-Length'] = Buffer.byteLength(body);
      }

      const req = https.request(options, (res) => {
        let data = '';
        res.on('data', (chunk) => { data += chunk; });
        res.on('end', () => {
          try {
            resolve({
              statusCode: res.statusCode,
              data: JSON.parse(data)
            });
          } catch (e) {
            resolve({ statusCode: res.statusCode, data: data });
          }
        });
      });

      req.on('error', reject);
      if (body) req.write(body);
      req.end();
    });
  }

  /**
   * Get wallet session info
   */
  async getSession() {
    const url = this.buildApiUrl('OBexeX0f0MsnL1S3');
    const response = await this.request(url);
    
    if (response.data.api_status === 'fail') {
      throw new Error(response.data.api_message || 'Failed to get session');
    }
    
    return response.data.wallet;
  }

  /**
   * Get address balance
   */
  async getBalance(address) {
    const url = this.buildApiUrl('zLsiAkocn90e3K6R', { p0: address });
    const response = await this.request(url);
    
    if (response.data.api_status === 'fail') {
      throw new Error(response.data.api_message || 'Failed to get balance');
    }
    
    return response.data;
  }

  /**
   * Send transaction from wallet (high-level)
   */
  async sendTransaction({ to, amount, fee = 1000 }) {
    // Parse address if it's a full address
    const [addressBase, addressKeyIdentifier] = to.includes('0a0')
      ? to.split('0a0')
      : [to, to];

    const payload = {
      transaction_output_list: [{
        address_base: addressBase,
        address_version: '0a0',
        address_key_identifier: addressKeyIdentifier,
        amount: amount
      }],
      transaction_output_fee: {
        amount: fee
      }
    };

    const url = this.buildApiUrl('XPzc85T3reYmGro1');
    const response = await this.request(url, 'POST', JSON.stringify(payload));
    
    if (response.data.api_status === 'fail') {
      throw new Error(response.data.api_message || 'Failed to send transaction');
    }
    
    return response.data.transaction;
  }

  /**
   * List unspent outputs
   */
  async listUnspents(addressKeyIdentifier = null, isStable = 1, isSpent = 0) {
    const params = {
      p0: isStable,
      p1: isSpent
    };
    
    if (addressKeyIdentifier) {
      params.p2 = addressKeyIdentifier;
    }

    const url = this.buildApiUrl('FDLyQ5uo5t7jltiQ', params);
    const response = await this.request(url);
    
    if (response.data.api_status === 'fail') {
      throw new Error(response.data.api_message || 'Failed to list unspents');
    }
    
    return response.data.transaction_output_list || [];
  }
}

module.exports = MillixSDK;
```

### Usage Example [TESTED NOV 2025]

```javascript
const MillixSDK = require('./millix-sdk');

async function main() {
  const millix = new MillixSDK();

  // Get wallet info
  const session = await millix.getSession();
  console.log('My address:', session.address);

  // Check balance
  const balance = await millix.getBalance(session.address);
  console.log('Balance:', balance.stable, 'millix');

  // Send transaction
  if (balance.stable >= 11000) {
    const tx = await millix.sendTransaction({
      to: '1FXx25vVgHCmvLiwTLNGPvWavdDmCevnTp0a01FmrUhZ9CdaJwcLq22AVdrYd6AFDGAurTm',
      amount: 10000,
      fee: 1000
    });
    console.log('Transaction sent:', tx.transaction_id);
  } else {
    console.log('Insufficient balance');
  }
}

main().catch(console.error);
```

---

## Low-Level Transaction Construction

For advanced use cases, you might want to manually construct and sign transactions. This gives you complete control.

### The Process

1. **Select UTXOs** (unspent transaction outputs)
2. **Build transaction payload**
3. **Sign with private keys**
4. **Submit to network**

### Example: Manual Transaction [PSEUDOCODE]

```javascript
const MillixSDK = require('./millix-sdk');

async function manualTransaction(recipientAddress, amount) {
  const millix = new MillixSDK();

  // Step 1: Get session
  const session = await millix.getSession();
  console.log('Sending from:', session.address_key_identifier);

  // Step 2: Find unspents
  const unspents = await millix.listUnspents(
    session.address_key_identifier,
    1,  // is_stable
    0   // is_spent
  );

  if (unspents.length === 0) {
    throw new Error('No unspent outputs available');
  }

  // Step 3: Select enough UTXOs
  let totalInput = 0;
  const selectedUnspents = [];
  const neededAmount = amount + 1000; // amount + fee

  for (const unspent of unspents) {
    selectedUnspents.push(unspent);
    totalInput += unspent.amount;
    if (totalInput >= neededAmount) break;
  }

  if (totalInput < neededAmount) {
    throw new Error(`Insufficient funds: have ${totalInput}, need ${neededAmount}`);
  }

  // Step 4: Build transaction payload
  const transactionInputList = selectedUnspents.map(u => ({
    output_transaction_id: u.transaction_id,
    output_transaction_date: u.transaction_date,
    output_shard_id: u.shard_id,
    output_position: u.output_position,
    address_base: u.address_base || session.address_key_identifier,
    address_version: u.address_version || '0a0',
    address_key_identifier: u.address_key_identifier || session.address_key_identifier
  }));

  const [toBase, toKeyId] = recipientAddress.split('0a0');
  
  const transactionOutputList = [
    {
      address_base: toBase,
      address_version: '0a0',
      address_key_identifier: toKeyId || toBase,
      amount: amount
    }
  ];

  // Add change output if necessary
  const changeAmount = totalInput - amount - 1000;
  if (changeAmount > 0) {
    transactionOutputList.push({
      address_base: session.address_key_identifier,
      address_version: '0a0',
      address_key_identifier: session.address_key_identifier,
      amount: changeAmount
    });
  }

  const transactionPayload = {
    transaction_input_list: transactionInputList,
    transaction_output_list: transactionOutputList,
    transaction_output_fee: {
      fee_type: 'transaction_fee_default',
      amount: 1000
    }
  };

  // Step 5: Get private keys
  // [Note: This requires additional API calls to retrieve keys]
  // For brevity, assuming we have privateKeyMap and addressMap

  // Step 6: Sign transaction
  const signUrl = millix.buildApiUrl('RVBqKlGdk9aEhi5J', {
    p0: JSON.stringify(transactionPayload),
    p1: JSON.stringify(privateKeyMap),
    p2: JSON.stringify(addressMap)
  });

  const signResponse = await millix.request(signUrl);

  if (signResponse.data.api_status === 'fail') {
    throw new Error('Signing failed: ' + signResponse.data.api_message);
  }

  const signedTransaction = signResponse.data.transaction;

  // Step 7: Submit to network
  const sendUrl = millix.buildApiUrl('VnJIBrrM0KY3uQ9X', {
    p0: JSON.stringify(signedTransaction)
  });

  const sendResponse = await millix.request(sendUrl);

  if (sendResponse.data.api_status === 'fail') {
    throw new Error('Send failed: ' + sendResponse.data.api_message);
  }

  return sendResponse.data.transaction_id;
}
```

**Full working example**: See `documentation/scripts/test-transactions.js`

---

## Programming Best Practices

### 1. Always Check Stable Balance

```javascript
// ❌ Wrong: Using total balance
const balance = await millix.getBalance(address);
if (balance.stable + balance.unstable >= amount) {
  // This can fail if unstable funds aren't confirmed yet
}

// ✓ Correct: Only use stable balance
const balance = await millix.getBalance(address);
if (balance.stable >= amount + fee) {
  // Safe to send
}
```

### 2. Handle API Errors Gracefully

```javascript
async function sendWithRetry(to, amount, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const tx = await millix.sendTransaction({ to, amount });
      return tx;
    } catch (error) {
      console.log(`Attempt ${i + 1} failed: ${error.message}`);
      if (i === maxRetries - 1) throw error;
      await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2s
    }
  }
}
```

### 3. Validate Addresses

```javascript
function isValidMillixAddress(address) {
  // Mainnet standard: Contains '0a0'
  // Testnet standard: Contains 'lal'
  // NFT mainnet: Contains '0c0'
  // NFT testnet: Contains 'lcl'
  
  return /0a0|lal|0c0|lcl/.test(address);
}

// Use before sending
if (!isValidMillixAddress(recipientAddress)) {
  throw new Error('Invalid Millix address format');
}
```

### 4. Secure Your node.json

```javascript
// ❌ Don't hardcode credentials
const NODE_ID = '1D7n5SRALg7tQoL5cFR3D2YkQvbJuMFLbB';

// ✓ Read from secure location
const nodeConfig = JSON.parse(
  fs.readFileSync(path.join(os.homedir(), '.millix-wallet', 'node.json'), 'utf8')
);
```

### 5. Use Environment Variables for Configuration

```javascript
// .env file
MILLIX_HOST=localhost
MILLIX_PORT=5500
MILLIX_NODE_JSON_PATH=/path/to/node.json

// In code
require('dotenv').config();

const millix = new MillixSDK({
  host: process.env.MILLIX_HOST,
  port: process.env.MILLIX_PORT,
  nodeJsonPath: process.env.MILLIX_NODE_JSON_PATH
});
```

---

## Monitoring and Logging

### Transaction Status Checking

```javascript
async function waitForConfirmation(txId, shardId, timeoutMs = 30000) {
  const startTime = Date.now();
  const millix = new MillixSDK();

  while (Date.now() - startTime < timeoutMs) {
    const url = millix.buildApiUrl('wDyC195wgjPjM2Ut', {
      p0: txId,
      p1: shardId
    });

    const response = await millix.request(url);

    if (response.data.api_status === 'success') {
      const tx = response.data.transaction;
      
      if (tx.is_stable === 1) {
        console.log('Transaction confirmed!');
        return tx;
      }
    }

    // Wait before checking again
    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  throw new Error('Transaction confirmation timeout');
}
```

### Event-Driven Architecture

For real-time updates, consider polling or WebSocket connections (if supported by your node version):

```javascript
class MillixWatcher extends EventEmitter {
  constructor(address) {
    super();
    this.address = address;
    this.lastBalance = null;
    this.millix = new MillixSDK();
  }

  async start(intervalMs = 5000) {
    setInterval(async () => {
      try {
        const balance = await this.millix.getBalance(this.address);
        
        if (this.lastBalance !== null && balance.stable !== this.lastBalance.stable) {
          this.emit('balanceChanged', {
            old: this.lastBalance.stable,
            new: balance.stable,
            delta: balance.stable - this.lastBalance.stable
          });
        }
        
        this.lastBalance = balance;
      } catch (error) {
        this.emit('error', error);
      }
    }, intervalMs);
  }
}

// Usage
const watcher = new MillixWatcher('1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP...');
watcher.on('balanceChanged', (change) => {
  console.log(`Balance changed by ${change.delta} millix`);
});
watcher.start();
```

---

## Multi-Language Support

The Millix API is language-agnostic. Here's how to call it from other languages:

### Python

```python
import requests
import json

class MillixSDK:
    def __init__(self, node_id, node_signature, host='localhost', port=5500):
        self.node_id = node_id
        self.node_signature = node_signature
        self.base_url = f'https://{host}:{port}/api/{node_id}/{node_signature}'
    
    def get_session(self):
        url = f'{self.base_url}/OBexeX0f0MsnL1S3'
        response = requests.get(url, verify=False)  # Skip SSL verification
        return response.json()['wallet']
    
    def send_transaction(self, to_address, amount, fee=1000):
        to_base, to_key_id = to_address.split('0a0')
        
        payload = {
            'transaction_output_list': [{
                'address_base': to_base,
                'address_version': '0a0',
                'address_key_identifier': to_key_id,
                'amount': amount
            }],
            'transaction_output_fee': {'amount': fee}
        }
        
        url = f'{self.base_url}/XPzc85T3reYmGro1'
        response = requests.post(url, json=payload, verify=False)
        return response.json()['transaction']

# Usage
millix = MillixSDK('1D7n5SR...', '3aPwVLm...')
session = millix.get_session()
print(f"Address: {session['address']}")
```

### Rust

```rust
use reqwest;
use serde_json::json;

struct MillixSDK {
    node_id: String,
    node_signature: String,
    base_url: String,
}

impl MillixSDK {
    fn new(node_id: &str, node_signature: &str) -> Self {
        MillixSDK {
            node_id: node_id.to_string(),
            node_signature: node_signature.to_string(),
            base_url: format!("https://localhost:5500/api/{}/{}", node_id, node_signature),
        }
    }

    async fn get_session(&self) -> Result<serde_json::Value, Box<dyn std::error::Error>> {
        let url = format!("{}/OBexeX0f0MsnL1S3", self.base_url);
        let client = reqwest::Client::builder()
            .danger_accept_invalid_certs(true)
            .build()?;
        let resp = client.get(&url).send().await?;
        Ok(resp.json().await?)
    }
}

// Usage
let millix = MillixSDK::new("1D7n5SR...", "3aPwVLm...");
let session = millix.get_session().await?;
println!("Address: {}", session["wallet"]["address"]);
```

---

## Key Takeaways

✅ **Millix uses APIs, not on-chain scripts** – Logic lives in your application

✅ **RESTful architecture** – Standard HTTPS/JSON, works with any language

✅ **Predictable costs** – 1000 millix per transaction, no gas optimization needed

✅ **Self-signed certificates** – Use `-k` (curl) or `rejectUnauthorized: false` (Node.js)

✅ **Always check `api_status`** – Handle errors gracefully

✅ **High-level vs. low-level** – Use wallet APIs for simplicity, manual signing for control

✅ **Secure your credentials** – `node.json` contains sensitive keys

---

## Looking Ahead

You now understand how to program with Millix. You can build SDKs, construct transactions, and integrate Millix into applications using any programming language.

In the next chapter, we'll put this knowledge into practice with complete, working code examples: building transactions from scratch, handling edge cases, and creating production-ready payment systems.

---

**Next**: [Chapter 6: Building Transactions with Code](06-building-transactions-with-code.md)



