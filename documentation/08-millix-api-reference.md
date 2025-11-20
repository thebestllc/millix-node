# Chapter 8: Millix API Reference

> *"Good documentation is like a map: it doesn't prevent you from getting lost, but it helps you find your way back."*

## Introduction

This chapter is your comprehensive reference for the Millix Node API. Unlike typical API documentation that just lists endpoints, we'll organize this by **what you want to accomplish**, with practical examples for each use case.

Think of this as your API cookbook—recipes you can adapt and use immediately.

## API Basics

### URL Structure

Every API call follows this pattern:

```
https://<host>:<port>/api/<node_id>/<node_signature>/<api_endpoint_id>?p0=<value>&p1=<value>...
```

**Example**:
```
https://localhost:5500/api/1KeCkTz9V5YnVzXFgbhjXfQpdbugmcJ8aR/2bXBoj.../XPzc85T3reYmGro1?p0={"transaction_output_list":[...]}
```

### Authentication

Most endpoints require your node credentials from `node.json`:

```json
{
  "node_id": "1KeCkTz9V5YnVzXFgbhjXfQpdbugmcJ8aR",
  "node_signature": "2bXBoj19oL3tYEXuv6PYiaoJmzqzT1ZAMxFjCAecua94iR..."
}
```

**Public endpoints** (rare) use `anonymous` instead of your signature.

### Response Format

All APIs return JSON with this structure:

```json
{
  "api_status": "success" | "fail",
  "api_message": "Optional error message",
  ...data...
}
```

**Always check `api_status` first!**

---

## Quick Reference Table

| Task | API ID | Method | Key Parameters |
|------|--------|--------|----------------|
| **Get wallet info** | `OBexeX0f0MsnL1S3` | GET | - |
| **Check balance** | `zLsiAkocn90e3K6R` | GET | `p0`: address |
| **Send transaction** | `XPzc85T3reYmGro1` | POST | `p0`: payload JSON |
| **List unspents** | `FDLyQ5uo5t7jltiQ` | GET | `p0`: is_stable, `p1`: is_spent |
| **Sign transaction** | `RVBqKlGdk9aEhi5J` | GET | `p0`: payload, `p1`: keys, `p2`: addresses |
| **Submit signed tx** | `VnJIBrrM0KY3uQ9X` | GET | `p0`: signed tx |
| **Get transaction** | `wDyC195wgjPjM2Ut` | GET | `p0`: tx_id, `p1`: shard_id |
| **List transactions** | `l4kaEhMnhjB5yseq` | GET | `p0`: type, `p1`: limit |
| **Create NFT** | `XQmpDjEVF691r2gX` | POST | `p0`: payload, `p1`: file |
| **List NFTs** | `Mu7VpxzfYyQimf3V` | GET | `p9`: version, `p10`: address |
| **Get NFT data** | `Mh9QifTIESw5t1fa` | GET | `p0`: tx_id, `p3`: file_hash, `p4`: key |
| **List addresses** | `quIoaHsl8h6IwyEI` | GET | - |
| **Get address details** | `ywTmt3C0nwk5k4c7` | GET | `p0`: address |
| **Get private key** | `PKUv2JfV87KpEZwE` | GET | `p0`: address |

---

## Category 1: Wallet & Session Management

### Get Wallet Session

**What it does**: Returns your active wallet information including address and public key.

**API ID**: `OBexeX0f0MsnL1S3`  
**Method**: GET  
**Auth**: Required  
**Private**: Yes

**Request**:
```bash
curl -k "https://localhost:5500/api/{node_id}/{node_signature}/OBexeX0f0MsnL1S3"
```

**Response**:
```json
{
  "api_status": "success",
  "wallet": {
    "id": "icqxJCN/GP3vii1wWRf42sNKgT8EJdr8f1/baAildys=",
    "address": "1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP0a01EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP",
    "address_key_identifier": "1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP",
    "address_public_key": "tGdraw6gizLTepQDqBfWqdskcVqwPUSBuGMeDpQcQ5XC"
  }
}
```

**Use case**: Start of every application—get your wallet address for receiving funds or signing transactions.

---

### List All Wallet Addresses

**What it does**: Returns all addresses in your wallet (hierarchical deterministic wallet can have multiple).

**API ID**: `quIoaHsl8h6IwyEI`  
**Method**: GET  
**Auth**: Required  
**Private**: Yes

**Request**:
```bash
curl -k "https://localhost:5500/api/{node_id}/{node_signature}/quIoaHsl8h6IwyEI"
```

**Response**:
```json
{
  "api_status": "success",
  "keychain": [
    {
      "address_key_identifier": "1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP",
      "address": "1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP0a01EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP",
      "address_attribute": {
        "key_public": "tGdraw6gizLTepQDqBfWqdskcVqwPUSBuGMeDpQcQ5XC"
      },
      "is_main_address": 1
    }
  ]
}
```

**Use case**: Managing multiple addresses, checking which is your main address, or finding specific addresses for transaction construction.

---

### Get Address Details

**What it does**: Returns detailed information about a specific address including public key.

**API ID**: `ywTmt3C0nwk5k4c7`  
**Method**: GET  
**Auth**: Required  
**Parameters**: `p0` = address_key_identifier

**Request**:
```bash
curl -k "https://localhost:5500/api/{node_id}/{node_signature}/ywTmt3C0nwk5k4c7?p0=1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP"
```

**Response**:
```json
{
  "api_status": "success",
  "address_key_identifier": "1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP",
  "address_attribute": {
    "key_public": "tGdraw6gizLTepQDqBfWqdskcVqwPUSBuGMeDpQcQ5XC"
  }
}
```

**Use case**: Getting the public key for transaction signing.

---

### Get Private Key

**What it does**: Returns the private key (hex format) for a specific address.

**API ID**: `PKUv2JfV87KpEZwE`  
**Method**: GET  
**Auth**: Required  
**Private**: Yes  
**Parameters**: `p0` = address_key_identifier

**Request**:
```bash
curl -k "https://localhost:5500/api/{node_id}/{node_signature}/PKUv2JfV87KpEZwE?p0=1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP"
```

**Response**:
```json
{
  "api_status": "success",
  "private_key_hex": "a1b2c3d4e5f6..."
}
```

**⚠️ SECURITY WARNING**: This exposes your private key! Only use this in secure, trusted environments. Never log or transmit private keys over insecure channels.

**Use case**: Manual transaction signing (low-level transaction construction).

---

## Category 2: Balance & UTXOs

### Check Address Balance

**What it does**: Returns stable and unstable balance for an address.

**API ID**: `zLsiAkocn90e3K6R`  
**Method**: GET  
**Auth**: Required  
**Parameters**: `p0` = full address

**Request**:
```bash
curl -k "https://localhost:5500/api/{node_id}/{node_signature}/zLsiAkocn90e3K6R?p0=1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP0a01EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP"
```

**Response**:
```json
{
  "stable": 1298919,
  "unstable": 0
}
```

**Key fields**:
- `stable`: Confirmed balance (spendable immediately)
- `unstable`: Pending balance (recently received, not yet stable)

**Use case**: Verify funds before sending transactions.

---

### List Unspent Outputs (UTXOs)

**What it does**: Returns unspent transaction outputs available for spending.

**API ID**: `FDLyQ5uo5t7jltiQ`  
**Method**: GET  
**Auth**: Required  
**Parameters**:
- `p0`: is_stable (0 or 1)
- `p1`: is_spent (0 or 1)
- `p2`: address_key_identifier (optional)

**Request (stable unspents)**:
```bash
curl -k "https://localhost:5500/api/{node_id}/{node_signature}/FDLyQ5uo5t7jltiQ?p0=1&p1=0&p2=1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP"
```

**Response**:
```json
{
  "api_status": "success",
  "transaction_output_list": [
    {
      "transaction_id": "2VxdQnKcKjmn5sSpVaFFvApFo35SHFBC157dqWYorfxyrygbmw",
      "shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
      "output_position": 0,
      "address": "1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP0a01EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP",
      "address_key_identifier": "1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP",
      "address_version": "0a0",
      "amount": 399000,
      "is_stable": 1,
      "is_spent": 0,
      "transaction_date": 1731925483
    }
  ]
}
```

**Use case**: Building manual transactions—select which UTXOs to spend.

---

## Category 3: Sending Transactions

### Send Transaction (High-Level)

**What it does**: Sends a transaction using wallet-managed UTXOs and signing.

**API ID**: `XPzc85T3reYmGro1`  
**Method**: POST  
**Auth**: Required  
**Private**: Yes

**Request**:
```bash
curl -k -X POST "https://localhost:5500/api/{node_id}/{node_signature}/XPzc85T3reYmGro1" \
  -H "Content-Type: application/json" \
  -d '{
    "transaction_output_list": [{
      "address_base": "1FXx25vVgHCmvLiwTLNGPvWavdDmCevnTp",
      "address_version": "0a0",
      "address_key_identifier": "1FmrUhZ9CdaJwcLq22AVdrYd6AFDGAurTm",
      "amount": 10000
    }],
    "transaction_output_fee": {
      "amount": 1000
    }
  }'
```

**Response**:
```json
{
  "api_status": "success",
  "transaction": {
    "transaction_id": "2qHnhmBDDt6diYqcTG4FnM9bNkQvbUeGU2gXey5QSNpMN3Rk2T",
    "shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
    "transaction_date": 1692620135,
    "version": "0a0",
    "status": "accepted"
  }
}
```

**Use case**: Standard payments—simplest way to send millix.

---

### Sign Transaction (Low-Level)

**What it does**: Signs a manually constructed transaction payload.

**API ID**: `RVBqKlGdk9aEhi5J`  
**Method**: GET  
**Auth**: Required  
**Private**: Yes  
**Parameters**:
- `p0`: Transaction payload (JSON string)
- `p1`: Private key map (JSON string)
- `p2`: Address/public key map (JSON string)

**Request**:
```bash
curl -k "https://localhost:5500/api/{node_id}/{node_signature}/RVBqKlGdk9aEhi5J?p0={transaction_payload}&p1={private_key_map}&p2={address_map}"
```

**Transaction payload example**:
```json
{
  "transaction_input_list": [{
    "output_transaction_id": "2VxdQnKcKjmn...",
    "output_transaction_date": 1731925483,
    "output_shard_id": "qGuUgMMVmaCv...",
    "output_position": 0,
    "address_base": "1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP",
    "address_version": "0a0",
    "address_key_identifier": "1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP"
  }],
  "transaction_output_list": [{
    "address_base": "1FXx25vVgHCmvLiwTLNGPvWavdDmCevnTp",
    "address_version": "0a0",
    "address_key_identifier": "1FmrUhZ9CdaJwcLq22AVdrYd6AFDGAurTm",
    "amount": 10000
  }],
  "transaction_output_fee": {
    "fee_type": "transaction_fee_default",
    "amount": 1000
  }
}
```

**Private key map example**:
```json
{
  "1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP": "a1b2c3d4e5f6..."
}
```

**Address map example**:
```json
{
  "1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP": "tGdraw6gizLTepQDqBfWqdskcVqwPUSBuGMeDpQcQ5XC"
}
```

**Response**:
```json
{
  "api_status": "success",
  "transaction": {
    // Signed transaction with signature fields added
  }
}
```

**Use case**: Manual transaction construction with full control over inputs/outputs.

---

### Submit Signed Transaction

**What it does**: Broadcasts a signed transaction to the network.

**API ID**: `VnJIBrrM0KY3uQ9X`  
**Method**: GET  
**Auth**: Required  
**Parameters**: `p0` = signed transaction (JSON string)

**Request**:
```bash
curl -k "https://localhost:5500/api/{node_id}/{node_signature}/VnJIBrrM0KY3uQ9X?p0={signed_transaction}"
```

**Response**:
```json
{
  "api_status": "success",
  "transaction_id": "3XmDqA2pRvW8NjKLq7YzB..."
}
```

**Use case**: Final step in low-level transaction sending (after signing).

---

## Category 4: Transaction Queries

### Get Single Transaction

**What it does**: Returns details of a specific transaction.

**API ID**: `wDyC195wgjPjM2Ut`  
**Method**: GET  
**Auth**: Required  
**Parameters**:
- `p0`: transaction_id
- `p1`: shard_id

**Request**:
```bash
curl -k "https://localhost:5500/api/{node_id}/{node_signature}/wDyC195wgjPjM2Ut?p0=2qHnhmBDDt6diYqcTG4FnM9bNkQvbUeGU2gXey5QSNpMN3Rk2T&p1=qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR"
```

**Response**:
```json
{
  "api_status": "success",
  "transaction": {
    "transaction_id": "2qHnhmBDDt6diYqcTG4FnM9bNkQvbUeGU2gXey5QSNpMN3Rk2T",
    "shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
    "transaction_date": 1692620135,
    "version": "0a0",
    "is_stable": 1,
    "transaction_input_list": [...],
    "transaction_output_list": [...]
  }
}
```

**Use case**: Verify transaction details, check confirmation status.

---

### List Transactions

**What it does**: Returns a list of transactions (incoming/outgoing/all).

**API ID**: `l4kaEhMnhjB5yseq`  
**Method**: GET  
**Auth**: Required  
**Parameters**:
- `p0`: type (`incoming`, `outgoing`, or `all`)
- `p1`: limit (number of transactions)

**Request**:
```bash
curl -k "https://localhost:5500/api/{node_id}/{node_signature}/l4kaEhMnhjB5yseq?p0=incoming&p1=10"
```

**Response**:
```json
{
  "api_status": "success",
  "transaction_list": [
    {
      "transaction_id": "...",
      "amount": 50000,
      "type": "received",
      "transaction_date": 1692620135
    }
  ]
}
```

**Use case**: Transaction history, accounting, monitoring payments.

---

## Category 5: NFT Operations

### Create NFT

**What it does**: Creates an NFT with metadata and file storage.

**API ID**: `XQmpDjEVF691r2gX`  
**Method**: POST (multipart/form-data)  
**Auth**: Required  
**Private**: Yes  
**Parameters**:
- `p0`: JSON payload
- `p1`: File (binary)

**JSON Payload**:
```json
{
  "transaction_data_meta": {
    "name": "My NFT",
    "description": "NFT description"
  },
  "transaction_output_attribute": {},
  "transaction_data_type": "tangled_nft",
  "transaction_output_list": [{
    "address_base": "1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP",
    "address_version": "0c0",
    "address_key_identifier": "1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP",
    "amount": 1000
  }],
  "transaction_output_fee": {
    "fee_type": "transaction_fee_default",
    "amount": 10000
  }
}
```

**Request** (using curl):
```bash
curl -k -X POST \
  -F "p0=<payload.json;type=application/json" \
  -F "p1=@image.jpg;type=application/octet-stream" \
  "https://localhost:5500/api/{node_id}/{node_signature}/XQmpDjEVF691r2gX"
```

**Use case**: Minting NFTs (see Chapter 7 for complete examples).

---

### List NFTs

**What it does**: Returns NFTs owned by an address.

**API ID**: `Mu7VpxzfYyQimf3V`  
**Method**: GET  
**Auth**: Required  
**Parameters**:
- `p9`: version (`0a30` for NFTs)
- `p10`: address_key_identifier
- `p11`: attribute_type_id (`Adl87cz8kC190Nqc`)
- `p12`: data_type (`tangled_nft`)
- `p13`: order_by (`create_date desc`)
- `p14`: record_limit

**Request**:
```bash
curl -k "https://localhost:5500/api/{node_id}/{node_signature}/Mu7VpxzfYyQimf3V?p9=0a30&p10=1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP&p11=Adl87cz8kC190Nqc&p12=tangled_nft&p13=create_date%20desc&p14=100"
```

**Use case**: Viewing your NFT collection.

---

### Get NFT Data

**What it does**: Downloads NFT file data.

**API ID**: `Mh9QifTIESw5t1fa`  
**Method**: GET  
**Auth**: Required  
**Parameters**:
- `p0`: transaction_id
- `p1`: address_key_identifier
- `p2`: attribute_type_id
- `p3`: file_hash
- `p4`: file_key (decryption key)

**Request**:
```bash
curl -k "https://localhost:5500/api/{node_id}/{node_signature}/Mh9QifTIESw5t1fa?p0={tx_id}&p1={address}&p2=Adl87cz8kC190Nqc&p3={file_hash}&p4={file_key}" > nft_data.jpg
```

**Use case**: Retrieving NFT content.

---

## Category 6: Node & Network Information

### Get Node ID (Public)

**What it does**: Returns the node ID (no authentication required).

**API ID**: `ZFAYRM8LRtmfYp4Y`  
**Method**: GET  
**Auth**: None (use `anonymous`)

**Request**:
```bash
curl -k "https://localhost:5500/api/1KeCkTz9V5YnVzXFgbhjXfQpdbugmcJ8aR/anonymous/ZFAYRM8LRtmfYp4Y"
```

**Response**:
```json
{
  "node_id": "1KeCkTz9V5YnVzXFgbhjXfQpdbugmcJ8aR"
}
```

**Use case**: Initial node discovery, health checks.

---

### List Peer Nodes

**What it does**: Returns known peer nodes.

**API ID**: `0eoUqXNE715mBVqV`  
**Method**: GET  
**Auth**: Required

**Request**:
```bash
curl -k "https://localhost:5500/api/{node_id}/{node_signature}/0eoUqXNE715mBVqV"
```

**Response**:
```json
[
  {
    "node_id": "1B2kGVazsBXXWnEFw2P3eskL5rDFNVicbU",
    "node_address": "110.38.242.162",
    "node_port": 10000,
    "node_port_api": 5500,
    "status": 2
  }
]
```

**Use case**: Network monitoring, peer discovery.

---

## Category 7: Utility Functions

### Generate Random Mnemonic (Public)

**What it does**: Generates a random 24-word recovery phrase.

**API ID**: `Gox4NzTLDnpEr10v`  
**Method**: GET  
**Auth**: None (use `anonymous`)

**Request**:
```bash
curl -k "https://localhost:5500/api/{node_id}/anonymous/Gox4NzTLDnpEr10v"
```

**Response**:
```json
{
  "mnemonic": "police labor clarify excuse suspect narrow heavy away nasty churn panel shoulder solve tooth allow bread poem company naive coin scrub culture poem grace"
}
```

**Use case**: Wallet creation, testing.

---

## Common API Patterns

### Pattern 1: Payment Flow

```javascript
// 1. Get wallet session
const session = await api('OBexeX0f0MsnL1S3');

// 2. Check balance
const balance = await api('zLsiAkocn90e3K6R', { p0: session.wallet.address });

// 3. Send transaction
const tx = await api('XPzc85T3reYmGro1', {
  method: 'POST',
  body: { transaction_output_list: [...], transaction_output_fee: {...} }
});

// 4. Verify confirmation
const confirmedTx = await api('wDyC195wgjPjM2Ut', {
  p0: tx.transaction_id,
  p1: tx.shard_id
});
```

### Pattern 2: NFT Creation Flow

```javascript
// 1. Get wallet session
const session = await api('OBexeX0f0MsnL1S3');

// 2. Prepare NFT payload
const nftPayload = {
  transaction_data_meta: { name: "...", description: "..." },
  transaction_output_attribute: {},
  transaction_data_type: "tangled_nft",
  transaction_output_list: [{ address_version: "0c0", ... }],
  transaction_output_fee: { amount: 10000 }
};

// 3. Upload with file (multipart)
const nft = await api('XQmpDjEVF691r2gX', {
  method: 'POST',
  multipart: { p0: nftPayload, p1: fileBuffer }
});
```

### Pattern 3: Manual Transaction Flow

```javascript
// 1. Get unspents
const unspents = await api('FDLyQ5uo5t7jltiQ', { p0: 1, p1: 0 });

// 2. Build payload
const payload = {
  transaction_input_list: [/* selected unspents */],
  transaction_output_list: [/* recipients */],
  transaction_output_fee: { amount: 1000 }
};

// 3. Get keys
const privateKey = await api('PKUv2JfV87KpEZwE', { p0: address });
const addressDetails = await api('ywTmt3C0nwk5k4c7', { p0: address });

// 4. Sign transaction
const signed = await api('RVBqKlGdk9aEhi5J', {
  p0: payload,
  p1: { [address]: privateKey },
  p2: { [address]: addressDetails.address_attribute.key_public }
});

// 5. Submit
const result = await api('VnJIBrrM0KY3uQ9X', { p0: signed });
```

---

## Error Handling

### Common Errors

| Error Message | Cause | Solution |
|---------------|-------|----------|
| `api_status: "fail"` | Generic failure | Check `api_message` |
| `Insufficient balance` | Not enough stable millix | Wait for confirmations or add funds |
| `No unspent outputs` | All outputs spent/unstable | Wait or receive new funds |
| `Invalid address` | Malformed address string | Verify address format |
| `Authentication failed` | Wrong node_id/signature | Check `node.json` credentials |
| `Transaction rejected` | Invalid transaction | Check inputs/outputs/signatures |

### Best Practices

```javascript
async function safeApiCall(apiId, params = {}) {
  try {
    const response = await api(apiId, params);
    
    if (response.api_status === 'fail') {
      throw new Error(response.api_message || 'API call failed');
    }
    
    return response;
  } catch (error) {
    console.error(`API ${apiId} failed:`, error.message);
    throw error;
  }
}
```

---

## Rate Limiting & Performance

**Recommendations**:
- Limit to 10-20 requests per second
- Cache session/address data (valid for session lifetime)
- Batch operations when possible
- Use appropriate timeouts (5-30 seconds depending on operation)

**Heavy operations** (may take longer):
- NFT creation with large files
- Transaction signing with many inputs
- Listing operations with large result sets

---

## Key Takeaways

✅ **API structure is consistent**: Same URL pattern, same response format

✅ **Two levels of control**: High-level (wallet APIs) and low-level (manual construction)

✅ **Always check api_status**: Never assume success

✅ **Private APIs need authentication**: Use node_id and node_signature

✅ **NFTs use special endpoints**: But follow same patterns

✅ **Error messages are helpful**: Read api_message for debugging

---

## Looking Ahead

You now have a complete API reference at your fingertips. You know how to authenticate, send transactions, create NFTs, query data, and handle errors.

In the next chapter, we'll put all this knowledge together to build real decentralized applications: payment processors, NFT marketplaces, and more.

---

**Next**: [Chapter 9: Building dApps on Millix](09-building-dapps-on-millix.md)


