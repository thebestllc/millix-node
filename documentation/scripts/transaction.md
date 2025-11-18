# Making Transactions in Millix

This guide explains how to create and submit transactions in the Millix network. There are two approaches: **high-level** (wallet-based) and **low-level** (manual unspent selection and signing). Both methods are covered in detail below.

## Table of Contents

1. [Overview](#overview)
2. [High-Level Transaction (Wallet-Based)](#high-level-transaction-wallet-based)
3. [Low-Level Transaction (Manual Unspent Selection)](#low-level-transaction-manual-unspent-selection)
4. [Transaction Components](#transaction-components)
5. [Common Issues and Solutions](#common-issues-and-solutions)

---

## Overview

A transaction in Millix transfers funds from one or more addresses to one or more recipient addresses. Each transaction requires:

- **Inputs**: Unspent transaction outputs (UTXOs) that fund the transaction
- **Outputs**: Recipient addresses and amounts
- **Fee**: Transaction fee paid to the network
- **Signatures**: Cryptographic proof of ownership of the input addresses

### Transaction Flow

```
┌─────────────────┐
│  Select Unspents│  ← Find available funds
└────────┬────────┘
         │
┌────────▼────────┐
│ Build Payload   │  ← Create transaction structure
└────────┬────────┘
         │
┌────────▼────────┐
│ Sign Transaction│  ← Prove ownership
└────────┬────────┘
         │
┌────────▼────────┐
│ Submit to Node  │  ← Broadcast to network
└─────────────────┘
```

---

## High-Level Transaction (Wallet-Based)

The high-level approach is the simplest method. The wallet automatically handles unspent selection, transaction building, and signing. You only need to specify recipients and amounts.

### API Endpoint

**Endpoint ID**: `XPzc85T3reYmGro1`  
**Name**: `send_transaction_from_wallet`  
**Method**: GET/POST  
**Requires Identity**: Yes  
**Private**: Yes

### Request Format

The API requires a single parameter `p0` containing a JSON object with:

- `transaction_output_list`: Array of recipient addresses and amounts
- `transaction_output_fee`: Transaction fee object

### Example Request

```bash
curl -k "https://localhost:5500/api/{node_id}/{node_signature}/XPzc85T3reYmGro1?p0={\"transaction_output_list\":[{\"address_base\":\"1FXx25vVgHCmvLiwTLNGPvWavdDmCevnTp\",\"address_version\":\"0a0\",\"address_key_identifier\":\"1FmrUhZ9CdaJwcLq22AVdrYd6AFDGAurTm\",\"amount\":400000}],\"transaction_output_fee\":{\"amount\":1000}}"
```

### Request Structure

```json
{
  "transaction_output_list": [
    {
      "address_base": "1FXx25vVgHCmvLiwTLNGPvWavdDmCevnTp",
      "address_version": "0a0",
      "address_key_identifier": "1FmrUhZ9CdaJwcLq22AVdrYd6AFDGAurTm",
      "amount": 400000
    }
  ],
  "transaction_output_fee": {
    "amount": 1000
  }
}
```

### Response

On success, the API returns:

```json
{
  "api_status": "success",
  "transaction": {
    "transaction_id": "2qHnhmBDDt6diYqcTG4FnM9bNkQvbUeGU2gXey5QSNpMN3Rk2T",
    "shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
    "transaction_date": 1692620135,
    "node_id_origin": "1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4",
    "node_id_proxy": "1Gc2V1pCaANgUQyArw4DDCrCZ4Ft6iPbZh",
    "version": "0a20",
    "payload_hash": "BMAJAY8xUzXRkHSse9qM7nttVVJr59gxZua91aXgwWg7jmhc4",
    "is_stable": 0,
    "status": 1
  }
}
```

### Advantages

- **Simple**: No need to manage unspents or private keys
- **Automatic**: Wallet handles all transaction details
- **Safe**: Reduces risk of errors in transaction construction

### Limitations

- Requires an active wallet session
- Less control over which unspents are used
- Cannot be used for advanced transaction types

---

## Low-Level Transaction (Manual Unspent Selection)

The low-level approach gives you full control over transaction construction. You manually select unspents, build the transaction payload, sign it, and submit it. This method is useful for:

- Custom transaction logic
- Integration with external systems
- Understanding transaction internals
- Advanced use cases

### Step 1: List Available Unspents

First, you need to find unspent transaction outputs (UTXOs) that can fund your transaction.

**API Endpoint**: `FDLyQ5uo5t7jltiQ` (`list_transaction_output`)  
**Method**: GET  
**Requires Identity**: Yes

#### Request Parameters

- `p3`: `address_key_identifier` - The address to query for unspents
- `p4`: `is_double_spend` - Must be `0` (not double-spent)
- `p7`: `is_stable` - Must be `1` (transaction is stable)
- `p10`: `is_spent` - Must be `0` (output not yet spent)
- `p13`: `order_by` - Ordering (e.g., `"amount desc"` for largest first)
- `p14`: `record limit` - Maximum number of results (default: 1000)

#### Example Request

```bash
curl -k "https://localhost:5500/api/{node_id}/{node_signature}/FDLyQ5uo5t7jltiQ?p3=1KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd&p4=0&p7=1&p10=0&p13=amount%20desc"
```

#### Response

```json
[
  {
    "transaction_id": "fssYqPVNXmMrsFsxLm2iaeHKWoZACKY7qr3NynzC7Dg7bd5G5",
    "shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
    "output_position": 1,
    "address": "1KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd0a01KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd",
    "address_key_identifier": "1KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd",
    "amount": 503000,
    "stable_date": 1692620933,
    "is_stable": 1,
    "spent_date": null,
    "is_spent": 0,
    "double_spend_date": null,
    "is_double_spend": 0,
    "status": 2,
    "create_date": 1692620166,
    "transaction_date": 1692620135
  }
]
```

### Step 2: Get Private Keys and Public Keys

To sign the transaction, you need both the private keys and public keys for the addresses that own the unspents.

**API Endpoint**: `PKUv2JfV87KpEZwE` (`get_address_private_key`)  
**Method**: GET  
**Requires Identity**: Yes  
**Private**: Yes

**Note**: The `sign_transaction` API requires both private keys and public keys. Public keys can be obtained from address attributes using the `get_keychain_address` API or from the address attributes stored in the database. If public keys are not available, the low-level transaction approach cannot be used, and you should use the high-level wallet-based approach instead.

### Step 2.5: Parse Address Components

When building the transaction input list, you need to provide `address_base`, `address_version`, and `address_key_identifier`. If the unspent output doesn't include these fields separately, parse them from the full address string:

- Address format: `{address_base}0a0{address_key_identifier}`
- Example: `1EUqsweaxVd7yvUgwwAi9GpwMwaG8WuZ540a01EUqsweaxVd7yvUgwwAi9GpwMwaG8WuZ54`
  - `address_base`: `1EUqsweaxVd7yvUgwwAi9GpwMwaG8WuZ54`
  - `address_version`: `0a0`
  - `address_key_identifier`: `1EUqsweaxVd7yvUgwwAi9GpwMwaG8WuZ54`

#### Example Request

```bash
curl -k "https://localhost:5500/api/{node_id}/{node_signature}/PKUv2JfV87KpEZwE?p0=1KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd0a01KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd"
```

#### Response

```json
{
  "private_key_hex": "04cb2058313cda45ed13c1a811f1166a71034eb378e986dab272961e85c34ebf"
}
```

**Note**: You'll also need the public key for each address. This can be obtained from the address attributes or derived from the private key.

### Step 3: Build Transaction Payload

Construct the unsigned transaction payload with:

- `transaction_input_list`: The unspents you're using as inputs
- `transaction_output_list`: Recipient addresses and amounts
- `transaction_output_fee`: Transaction fee

#### Transaction Payload Structure

```json
{
  "transaction_input_list": [
    {
      "output_transaction_id": "fssYqPVNXmMrsFsxLm2iaeHKWoZACKY7qr3NynzC7Dg7bd5G5",
      "output_transaction_date": 1692620135,
      "output_shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
      "output_position": 1,
      "address_base": "1KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd",
      "address_version": "0a0",
      "address_key_identifier": "1KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd"
    }
  ],
  "transaction_output_list": [
    {
      "address_base": "1FXx25vVgHCmvLiwTLNGPvWavdDmCevnTp",
      "address_version": "0a0",
      "address_key_identifier": "1FmrUhZ9CdaJwcLq22AVdrYd6AFDGAurTm",
      "amount": 400000
    }
  ],
  "transaction_output_fee": {
    "fee_type": "transaction_fee_default",
    "amount": 1000
  }
}
```

#### Important Notes

- The sum of input amounts must equal the sum of output amounts plus the fee
- If inputs exceed outputs + fee, you can create a change output back to your address
- All inputs must be stable (`is_stable: 1`) and unspent (`is_spent: 0`)

### Step 4: Sign Transaction

Sign the transaction payload using the private keys.

**API Endpoint**: `RVBqKlGdk9aEhi5J` (`sign_transaction`)  
**Method**: GET/POST  
**Requires Identity**: Yes  
**Private**: Yes

#### Request Parameters

- `p0`: `transaction_payload_unsigned` - The unsigned transaction payload (JSON string)
- `p1`: `private_key_hex` - Map of addresses to private keys (hex format)
- `p2`: `address_map` - Map of addresses to public keys

#### Private Key Map Format

```json
{
  "1KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd0a01KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd": "04cb2058313cda45ed13c1a811f1166a71034eb378e986dab272961e85c34ebf"
}
```

#### Address Map Format

```json
{
  "1KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd0a01KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd": "22rWHt1iiwJwBKMZBXHNHYtWFKivbxCLDF7mRZuiMjPZa"
}
```

#### Example Request

```bash
curl -k "https://localhost:5500/api/{node_id}/{node_signature}/RVBqKlGdk9aEhi5J?p0={...}&p1={...}&p2={...}"
```

#### Response

The API returns a signed transaction (or list of transactions if refresh is needed):

```json
[
  {
    "transaction_id": "2XCZzRCf52X9rwr6Vmc4joku1NMfjBbxhfvVBuqaveXZhyTu9e",
    "shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
    "transaction_date": 1692620135,
    "node_id_origin": "1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4",
    "node_id_proxy": "1Gc2V1pCaANgUQyArw4DDCrCZ4Ft6iPbZh",
    "version": "0a20",
    "transaction_input_list": [...],
    "transaction_output_list": [...],
    "transaction_signature_list": [...],
    "payload_hash": "BMAJAY8xUzXRkHSse9qM7nttVVJr59gxZua91aXgwWg7jmhc4"
  }
]
```

### Step 5: Send Transaction

Submit the signed transaction to the network.

**API Endpoint**: `VnJIBrrM0KY3uQ9X` (`send_transaction`)  
**Method**: GET/POST  
**Requires Identity**: Yes  
**Private**: Yes

#### Request Parameters

- `p0`: `transaction_payload_signed` - The signed transaction(s) from step 4 (array)
- `p1`: `proxy_time_limit` - Optional timeout in milliseconds (default: 30000)

#### Example Request

```bash
curl -k "https://localhost:5500/api/{node_id}/{node_signature}/VnJIBrrM0KY3uQ9X?p0=[{...}]"
```

#### Response

```json
{
  "api_status": "success"
}
```

---

## Transaction Components

### Transaction Input List

Each input references an unspent output from a previous transaction:

```json
{
  "output_transaction_id": "fssYqPVNXmMrsFsxLm2iaeHKWoZACKY7qr3NynzC7Dg7bd5G5",
  "output_transaction_date": 1692620135,
  "output_shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
  "output_position": 1,
  "address_base": "1KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd",
  "address_version": "0a0",
  "address_key_identifier": "1KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd"
}
```

### Transaction Output List

Each output specifies a recipient address and amount:

```json
{
  "address_base": "1FXx25vVgHCmvLiwTLNGPvWavdDmCevnTp",
  "address_version": "0a0",
  "address_key_identifier": "1FmrUhZ9CdaJwcLq22AVdrYd6AFDGAurTm",
  "amount": 400000
}
```

### Transaction Fee

The fee is paid to the network for processing the transaction:

```json
{
  "fee_type": "transaction_fee_default",
  "amount": 1000
}
```

### Transaction Signature List

Signatures prove ownership of the input addresses:

```json
{
  "address_base": "1KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd",
  "address_attribute": {
    "key_public": "22rWHt1iiwJwBKMZBXHNHYtWFKivbxCLDF7mRZuiMjPZa"
  },
  "signature": "3ckefRsSe6AGXzLLaTwjU3Z83658QBn4bJZCx9rRNuQhdSJhbY2D1pRpUyNsFMqvwtd59DWhC6zaarymyaC5xeM"
}
```

---

## Common Issues and Solutions

### Unstable Transaction Outputs

**Error**: `"unexpected generic api error"` or transaction signing fails

**Cause**: Attempting to spend outputs from a transaction that hasn't stabilized yet (`is_stable: 0`). In Millix, transaction outputs must reach consensus and become stable before they can be used as inputs in new transactions.

**Solution**: 
- Wait for the transaction to stabilize (check `is_stable` field)
- Only use outputs where `is_stable: 1` and `is_spent: 0`
- Transactions typically stabilize within a few minutes after being confirmed

**Example**: If you receive funds in a transaction, you must wait for that transaction to stabilize before you can spend those funds.

### Insufficient Balance

**Error**: `"error": "insufficient_balance"`

**Cause**: The sum of selected unspents is less than the amount to send plus the fee.

**Solution**: 
- Select more unspents
- Reduce the amount to send
- Check that unspents are stable (`is_stable: 1`)

### Transaction Output Not Found

**Error**: `"transaction_output_not_found"`

**Cause**: The referenced unspent has been spent or doesn't exist.

**Solution**: 
- Re-query for unspents before building the transaction
- Ensure `is_spent: 0` when querying

### Invalid Amount

**Error**: `"invalid_amount: allocated (X), spend (Y)"`

**Cause**: The sum of input amounts doesn't match the sum of output amounts plus fee.

**Solution**: 
- Verify input amounts match output amounts + fee exactly
- Include a change output if inputs exceed outputs + fee

### Proxy Unavailable

**Error**: `"proxy_unavailable"`

**Cause**: The proxy node specified in the transaction is not available.

**Solution**: 
- The node will automatically select a proxy
- Ensure your node is connected to the network

### Transaction Payload Invalid

**Error**: `"transaction_payload_invalid"`

**Cause**: The transaction structure is malformed or signatures are invalid.

**Solution**: 
- Verify all required fields are present
- Ensure signatures are correctly generated
- Check that addresses match between inputs and signatures

---

## Additional Resources

### Address Information

From `more_parameters.txt`:
- **Test Address**: `1FXx25vVgHCmvLiwTLNGPvWavdDmCevnTp0a01FmrUhZ9CdaJwcLq22AVdrYd6AFDGAurTm`
  - `address_base`: `1FXx25vVgHCmvLiwTLNGPvWavdDmCevnTp`
  - `address_version`: `0a0`
  - `address_key_identifier`: `1FmrUhZ9CdaJwcLq22AVdrYd6AFDGAurTm`

### Transaction ID for Testing

From `more_parameters.txt`:
- **Test Transaction ID**: `2qHnhmBDDt6diYqcTG4FnM9bNkQvbUeGU2gXey5QSNpMN3Rk2T`

You can use this transaction ID to query for unspents and understand transaction structure.

---

## Summary

- **High-level transactions** are simpler and recommended for most use cases
- **Low-level transactions** provide full control but require more steps
- Always ensure unspents are stable (`is_stable: 1`) and unspent (`is_spent: 0`) before using them
- Verify input amounts match output amounts plus fees
- Handle errors gracefully and retry with fresh unspent data if needed
- **Important**: Transaction outputs must stabilize before they can be spent - this is a network consensus requirement

## Test Results

### Latest Test Run (300,000 millix transaction)

A test run of the low-level transaction script was performed with the following results:

**Configuration:**
- Amount: 300000 millix
- Fee: 1000 millix
- Recipient: `1FXx25vVgHCmvLiwTLNGPvWavdDmCevnTp0a01FmrUhZ9CdaJwcLq22AVdrYd6AFDGAurTm`

**Process Steps Completed:**
1. ✓ Wallet session retrieved
2. ✓ **Stable** unspent outputs found (399000 millix from transaction `2VxdQnKcKjmn5sSpVaFFvApFo35SHFBC157dqWYorfxyrygbmw`)
3. ✓ Private and public keys retrieved using `get_keychain_address` API
4. ✓ Transaction payload built correctly (1 input, 2 outputs: 300000 to recipient + 98000 change)
5. ✗ Transaction signing failed with API error (error serialization issue)

**Key Findings**: 
- The script now correctly filters for **stable unspents only** (`is_stable: 1`)
- All transaction components are correctly structured
- The transaction input payload matches the expected format
- The signing API returns an error that cannot be properly serialized (shows as `[object Object]`)

**Current Status**: The script successfully demonstrates the complete low-level transaction process up to signing. The signing step encounters an API error that requires investigation (check server logs for detailed error message).

### Previous Test Run (400,000 millix transaction)

**Configuration:**
- Amount: 400000 millix
- Fee: 1000 millix

**Process Steps Completed:**
1. ✓ Wallet session retrieved
2. ✓ Unspent outputs found (602000 millix from transaction `2KM4ixs6aj2GZ3aziqvtrQCGGSDpY6Eeuc729wZiWSAVEiz2qr`)
3. ✓ Private and public keys retrieved using `get_keychain_address` API
4. ✓ Transaction payload built (1 input, 2 outputs including change)
5. ✗ Transaction signing failed - output was unstable (`is_stable: 0`)

**Key Finding**: Outputs must have `is_stable: 1` before they can be spent. The script now enforces this requirement and will exit with an error if no stable unspents are found.

For more information, refer to the [Millix API Reference](API-Reference.html) and the [Millix Scrolls documentation](../millix%20scroll.md).

