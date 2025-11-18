# Complete Guide to NFTs in Millix

Welcome to the comprehensive guide for working with Non-Fungible Tokens (NFTs) on the Millix network! This guide will walk you through creating, transferring, and deleting NFTs using the Millix DAG-based cryptocurrency platform.

## Table of Contents

1. [Introduction to NFTs in Millix](#introduction-to-nfts-in-millix)
2. [Prerequisites](#prerequisites)
3. [Creating an NFT](#creating-an-nft)
4. [Listing Your NFTs](#listing-your-nfts)
5. [Viewing NFT Data](#viewing-nft-data)
6. [Transferring an NFT](#transferring-an-nft)
7. [Deleting (Burning) an NFT](#deleting-burning-an-nft)
8. [Common Issues and Solutions](#common-issues-and-solutions)
9. [Best Practices](#best-practices)

---

## Introduction to NFTs in Millix

NFTs in Millix are unique digital assets stored on the Directed Acyclic Graph (DAG). Each NFT consists of:

- **Digital Content**: The actual file (image, video, document, etc.) that represents the NFT
- **Metadata**: Information about the NFT including name and description
- **Ownership**: Tied to a specific address with version `0c0` (main network) or `lcl` (test network)
- **Transaction History**: Immutable record of all transfers and operations

NFTs in Millix are stored encrypted on the DAG, ensuring privacy and security. The content is only accessible to those who have the proper decryption keys.

### Key Concepts

- **NFT Address Version**: `0c0` (main network) or `lcl` (test network)
- **Transaction Data Type**: `tangled_nft` for creating NFTs
- **Minimum Balance**: 11,000 millix required to create an NFT (10,000 for fee + 1,000 for the NFT output)
- **File Encryption**: NFT files are encrypted and stored on the DAG
- **Metadata**: Stored separately as `tangled_nft_meta` type

---

## Prerequisites

Before working with NFTs, ensure you have:

1. **Active Millix Node**: A running Millix node with an active wallet session
2. **Sufficient Balance**: At least 11,000 millix in your wallet
3. **Node Credentials**: Your `node_id` and `node_signature` from `node.json`
4. **API Access**: Ability to make HTTPS requests to your node (typically `https://localhost:5500`)

### Getting Your Node Information

Your node credentials are stored in `node.json` in your Millix data directory:

```json
{
  "node_id": "1D7n5SRALg7tQoL5cFR3D2YkQvbJuMFLbB",
  "node_signature": "3aPwVLmbUxit7QuWtQv1NNmXHKZuuUZrGNuzq6uV7ZxhicF1ffrN5XfsY7FYDac3sKGtiEubEYzrGpEreQapt16o"
}
```

### Getting Your Wallet Session

First, get your active wallet session and address:

**API Endpoint**: `OBexeX0f0MsnL1S3` (`get_session`)  
**Method**: GET  
**Requires Identity**: Yes  
**Private**: Yes

```bash
curl -k "https://localhost:5500/api/{node_id}/{node_signature}/OBexeX0f0MsnL1S3"
```

**Response:**
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

### Checking Your Balance

Verify you have sufficient funds:

**API Endpoint**: `zLsiAkocn90e3K6R` (`get_balance`)  
**Method**: GET  
**Parameters**: `p0` = full address

```bash
curl -k "https://localhost:5500/api/{node_id}/{node_signature}/zLsiAkocn90e3K6R?p0={full_address}"
```

**Response:**
```json
{
  "stable": 1298919,
  "unstable": 0
}
```

You need at least **11,000 millix** (stable) to create an NFT.

---

## Creating an NFT

Creating an NFT involves uploading your digital content along with metadata to the Millix DAG.

### Required Information

To create an NFT, you'll need:

1. **NFT Name**: A name for your NFT (e.g., "My Awesome Artwork")
2. **NFT Description**: A description of your NFT
3. **Digital File**: The actual file (image, video, etc.) you want to tokenize
4. **Recipient Address**: The address where the NFT will be created (typically your own address)
5. **Transaction Fee**: 10,000 millix (standard fee)
6. **NFT Output Amount**: 1,000 millix (minimum amount sent to the NFT address)

### Optional: Domain Verification

You can optionally verify your NFT with a domain name by:

1. Adding a DNS TXT record: `@ TXT tangled={address_key_identifier}`
2. Including the domain in `transaction_output_attribute.dns`

### API Endpoint

**Endpoint ID**: `XQmpDjEVF691r2gX`  
**Name**: `send_transaction_with_data_from_wallet` (also used for creating NFTs)  
**Method**: POST (multipart/form-data)  
**Requires Identity**: Yes  
**Private**: Yes

### Request Format

The API accepts a multipart form with two parts:

- **p0**: JSON payload containing transaction details
- **p1**: The file to upload

### JSON Payload Structure

```json
{
  "transaction_data_meta": {
    "name": "My Awesome NFT",
    "description": "This is a description of my NFT"
  },
  "transaction_output_attribute": {
    "dns": "example.com"
  },
  "transaction_data_type": "tangled_nft",
  "transaction_output_list": [
    {
      "address_base": "1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP",
      "address_version": "0c0",
      "address_key_identifier": "1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP",
      "amount": 1000
    }
  ],
  "transaction_output_fee": {
    "fee_type": "transaction_fee_default",
    "amount": 10000
  }
}
```

### Field Descriptions

- **transaction_data_meta**: Metadata about your NFT
  - `name`: The name of your NFT
  - `description`: A description of your NFT
- **transaction_output_attribute**: Optional attributes
  - `dns`: Domain name for verification (optional)
- **transaction_data_type**: Must be `"tangled_nft"` for NFT creation
- **transaction_output_list**: Array of outputs
  - `address_base`: Base part of the address
  - `address_version`: Must be `"0c0"` for NFTs (main network) or `"lcl"` (test network)
  - `address_key_identifier`: The key identifier (usually same as address_base for your own address)
  - `amount`: Amount in millix (typically 1000)
- **transaction_output_fee**: Transaction fee
  - `fee_type`: `"transaction_fee_default"`
  - `amount`: Fee amount (typically 10000 millix)

### Example: Creating an NFT with cURL

```bash
curl -k -X POST \
  "https://localhost:5500/api/{node_id}/{node_signature}/XQmpDjEVF691r2gX" \
  -F "p0={\"transaction_data_meta\":{\"name\":\"My Awesome NFT\",\"description\":\"This is my first NFT\"},\"transaction_data_type\":\"tangled_nft\",\"transaction_output_list\":[{\"address_base\":\"1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP\",\"address_version\":\"0c0\",\"address_key_identifier\":\"1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP\",\"amount\":1000}],\"transaction_output_fee\":{\"fee_type\":\"transaction_fee_default\",\"amount\":10000}}" \
  -F "p1=@/path/to/your/image.jpg"
```

### Response

The API returns a transaction list (usually 2 transactions: a refresh transaction and the NFT creation transaction):

```json
{
  "api_status": "success",
  "transaction": [
    {
      "transaction_id": "Q95x7fQGcSFEWwHLARKfBBCmfBJSE3Hc1zwUFimTaJbyKVGQG",
      "version": "0b20",
      ...
    },
    {
      "transaction_id": "tnYFzGUyuGK3Nv7qAxGXJsLMkxVNVH5QwyayL8aUYxsb9RNHW",
      "version": "0a30",
      "transaction_output_list": [
        {
          "output_position": -1,
          "address": "...",
          "amount": 10000
        },
        {
          "output_position": 0,
          "address": "1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP0c01EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP",
          "address_version": "0c0",
          "amount": 1000
        },
        {
          "output_position": 1,
          "address": "...",
          "amount": 1287919
        }
      ],
      "transaction_output_attribute": {
        "transaction_output_metadata": {
          "file_list": [
            {
              "hash": "be223bad66aa15676db714cd90a50e5ba1f0e50e619d47af8e80ee649b8c5a93",
              "type": "tangled_nft",
              "size": 49475,
              "mime_type": "image/jpeg"
            },
            {
              "hash": "47f0bc23a18706b8fe7e4fe8c00b1492caad9bea8d20df75cc22faa06b3ec744",
              "type": "tangled_nft_meta",
              "size": 60
            }
          ]
        }
      }
    }
  ]
}
```

**Important**: Save the `transaction_id` from the second transaction (the one with `version: "0a30"`). This is your NFT's transaction ID and is needed for all future operations.

---

## Listing Your NFTs

To see all NFTs owned by an address, use the list transaction output attribute API.

### API Endpoint

**Endpoint ID**: `Mu7VpxzfYyQimf3V`  
**Name**: `list_transaction_output_attribute_received`  
**Method**: GET  
**Requires Identity**: Yes  
**Private**: No

### Request Parameters

- **p9**: `version` - Transaction version (`"0a30"`)
- **p10**: `address_key_identifier` - The address to query
- **p11**: `attribute_type_id` - Must be `"Adl87cz8kC190Nqc"` (transaction_output_metadata)
- **p12**: `data_type` - Must be `"tangled_nft"`

### Example Request

```bash
curl -k "https://localhost:5500/api/{node_id}/{node_signature}/Mu7VpxzfYyQimf3V?p9=0a30&p10=1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP&p11=Adl87cz8kC190Nqc&p12=tangled_nft"
```

### Response

Returns an array of NFT transactions:

```json
[
  {
    "transaction_id": "tnYFzGUyuGK3Nv7qAxGXJsLMkxVNVH5QwyayL8aUYxsb9RNHW",
    "transaction_date": 1683387651,
    "amount": 1000,
    "address_key_identifier_to": "1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP",
    "address_to": "1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP0c01EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP",
    "is_stable": 1,
    "is_spent": 0,
    "transaction_output_attribute": [
      {
        "transaction_id": "tnYFzGUyuGK3Nv7qAxGXJsLMkxVNVH5QwyayL8aUYxsb9RNHW",
        "value": {
          "file_list": [
            {
              "hash": "be223bad66aa15676db714cd90a50e5ba1f0e50e619d47af8e80ee649b8c5a93",
              "type": "tangled_nft",
              "size": 49475,
              "mime_type": "image/jpeg"
            },
            {
              "hash": "47f0bc23a18706b8fe7e4fe8c00b1492caad9bea8d20df75cc22faa06b3ec744",
              "type": "tangled_nft_meta",
              "size": 60
            }
          ]
        },
        "file_data": {
          "47f0bc23a18706b8fe7e4fe8c00b1492caad9bea8d20df75cc22faa06b3ec744": {
            "name": "My Awesome NFT",
            "description": "This is my first NFT"
          }
        },
        "attribute_file_key": {
          "be223bad66aa15676db714cd90a50e5ba1f0e50e619d47af8e80ee649b8c5a93": "36303961383131373930333937623832343564356237663161326531633734383735326234366361646134306435346465363436363939333733333939346661"
        }
      }
    ]
  }
]
```

### Understanding the Response

- **transaction_id**: The unique identifier for your NFT
- **is_stable**: `1` means the transaction is stable and confirmed
- **is_spent**: `0` means the NFT hasn't been transferred or burned
- **file_list**: Contains two files:
  - One with `type: "tangled_nft"` - the actual NFT content
  - One with `type: "tangled_nft_meta"` - the metadata
- **file_data**: Contains the decrypted metadata (name and description)
- **attribute_file_key**: Contains the decryption key for the NFT file

---

## Viewing NFT Data

To view the actual content of an NFT, you need to download and decrypt it using the transaction ID, file hash, and decryption key.

### Getting the File Key

First, get the decryption key for the NFT file:

**API Endpoint**: `3K2xvNRLMpiEqLo8` (`get_transaction_output_key`)  
**Method**: GET  
**Parameters**:
- **p0**: `transaction_id` - The NFT's transaction ID
- **p1**: `attribute_type_id` - `"Adl87cz8kC190Nqc"`
- **p2**: `file_hash` - The hash of the NFT file (from file_list, type: "tangled_nft")

```bash
curl -k "https://localhost:5500/api/{node_id}/{node_signature}/3K2xvNRLMpiEqLo8?p0={transaction_id}&p1=Adl87cz8kC190Nqc&p2={file_hash}"
```

**Response:**
```json
{
  "key": "36303961383131373930333937623832343564356237663161326531633734383735326234366361646134306435346465363436363939333733333939346661"
}
```

### Downloading NFT Content

**API Endpoint**: `Mh9QifTIESw5t1fa` (`get_transaction_output_data`)  
**Method**: GET  
**Parameters**:
- **p0**: `transaction_id` - The NFT's transaction ID
- **p1**: `address_key_identifier` - Your address key identifier
- **p2**: `attribute_type_id` - `"Adl87cz8kC190Nqc"`
- **p3**: `file_hash` - The hash of the file to download
- **p4**: `file_key` - The decryption key from the previous step

```bash
curl -k "https://localhost:5500/api/{node_id}/{node_signature}/Mh9QifTIESw5t1fa?p0={transaction_id}&p1={address_key_identifier}&p2=Adl87cz8kC190Nqc&p3={file_hash}&p4={file_key}" \
  --output nft-content.jpg
```

The response will be the binary content of your NFT file. Save it to a file with the appropriate extension based on the `mime_type`.

### Downloading NFT Metadata

To get just the metadata (name and description):

```bash
curl -k "https://localhost:5500/api/{node_id}/{node_signature}/Mh9QifTIESw5t1fa?p0={transaction_id}&p1={address_key_identifier}&p2=Adl87cz8kC190Nqc&p3={meta_file_hash}&p4={file_key}"
```

**Response:**
```json
{
  "name": "My Awesome NFT",
  "description": "This is my first NFT"
}
```

---

## Transferring an NFT

Transferring an NFT moves ownership from one address to another. The transfer process creates a new transaction that references the original NFT transaction.

### Prerequisites

Before transferring, you need:

1. The NFT's `transaction_id` (from when it was created)
2. The NFT's file hash (from listing NFTs)
3. The recipient's address components:
   - `address_base`
   - `address_key_identifier`
   - `address_version` (should be `"0c0"` for NFT addresses)

### Getting NFT Information

First, get the full details of the NFT you want to transfer:

**API Endpoint**: `IBHgAmydZbmTUAe8` (`get_transaction_extended`)  
**Method**: GET  
**Parameters**:
- **p0**: `transaction_id` - The NFT's transaction ID
- **p1**: `shard_id` - Usually `"qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR"`

```bash
curl -k "https://localhost:5500/api/{node_id}/{node_signature}/IBHgAmydZbmTUAe8?p0={transaction_id}&p1=qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR"
```

From the response, extract:
- The NFT file hash (from `transaction_output_attribute.transaction_output_metadata.file_list`, where `type: "tangled_nft"`)
- The metadata file hash (where `type: "tangled_nft_meta"`)

### Transfer API

**API Endpoint**: `XQmpDjEVF691r2gX` (`send_transaction_with_data_from_wallet`)  
**Method**: POST  
**Content-Type**: `application/json` (no file upload needed for transfers)

### Transfer Payload Structure

```json
{
  "transaction_data": {
    "file_hash": "{nft_file_hash}",
    "attribute_type_id": "Adl87cz8kC190Nqc"
  },
  "transaction_data_type": "tangled_nft",
  "transaction_data_type_parent": "tangled_nft",
  "transaction_output_attribute": {
    "parent_transaction_id": "{original_nft_transaction_id}"
  },
  "transaction_output_list": [
    {
      "address_base": "{recipient_address_base}",
      "address_version": "0c0",
      "address_key_identifier": "{recipient_address_key_identifier}",
      "amount": 1000
    }
  ],
  "transaction_output_fee": {
    "fee_type": "transaction_fee_default",
    "amount": 10000
  }
}
```

### Field Descriptions

- **transaction_data**: References the original NFT file
  - `file_hash`: The hash of the NFT file from the original transaction
  - `attribute_type_id`: `"Adl87cz8kC190Nqc"`
- **transaction_data_type**: `"tangled_nft"`
- **transaction_data_type_parent**: `"tangled_nft"` (indicates this is a transfer)
- **transaction_output_attribute**: Contains reference to parent
  - `parent_transaction_id`: The original NFT's transaction ID
- **transaction_output_list**: The recipient address
  - `address_version`: Must be `"0c0"` for NFT addresses
  - `amount`: Typically 1000 millix

### Example Transfer Request

```bash
curl -k -X POST \
  "https://localhost:5500/api/{node_id}/{node_signature}/XQmpDjEVF691r2gX" \
  -H "Content-Type: application/json" \
  -d '{
    "transaction_data": {
      "file_hash": "be223bad66aa15676db714cd90a50e5ba1f0e50e619d47af8e80ee649b8c5a93",
      "attribute_type_id": "Adl87cz8kC190Nqc"
    },
    "transaction_data_type": "tangled_nft",
    "transaction_data_type_parent": "tangled_nft",
    "transaction_output_attribute": {
      "parent_transaction_id": "tnYFzGUyuGK3Nv7qAxGXJsLMkxVNVH5QwyayL8aUYxsb9RNHW"
    },
    "transaction_output_list": [
      {
        "address_base": "1RecipientAddressBase",
        "address_version": "0c0",
        "address_key_identifier": "1RecipientKeyIdentifier",
        "amount": 1000
      }
    ],
    "transaction_output_fee": {
      "fee_type": "transaction_fee_default",
      "amount": 10000
    }
  }'
```

### Response

The API returns the transfer transaction:

```json
{
  "api_status": "success",
  "transaction": [
    {
      "transaction_id": "new_transfer_transaction_id",
      ...
    }
  ]
}
```

After the transfer, the original NFT output will be marked as `is_spent: 1`, and the new owner will see the NFT in their address when listing NFTs.

---

## Deleting (Burning) an NFT

Burning an NFT permanently removes it from circulation and returns the associated millix (minus fees) to your wallet. This is an irreversible operation.

### Prerequisites

Before burning an NFT, you need:

1. The NFT's `transaction_id`
2. The NFT's metadata (name and description)
3. The NFT's file hash
4. The metadata file hash

### Getting NFT Information for Burning

Use the same APIs as for transferring to get all necessary information:

1. **Get transaction extended** to see the full transaction details
2. **Get transaction output key** to get the file key
3. **Load NFT metadata** to get name and description

### Burn API

**API Endpoint**: `XQmpDjEVF691r2gX` (`send_transaction_with_data_from_wallet`)  
**Method**: POST  
**Content-Type**: `application/json`

### Burn Payload Structure

```json
{
  "transaction_output_attribute": {
    "name": "{nft_name}",
    "description": "{nft_description}",
    "parent_transaction_id": "{nft_transaction_id}"
  },
  "transaction_data": {
    "file_hash": "{metadata_file_hash}",
    "attribute_type_id": "Adl87cz8kC190Nqc"
  },
  "transaction_data_type": "transaction",
  "transaction_data_type_parent": "tangled_nft",
  "transaction_output_list": [
    {
      "address_base": "{your_address_base}",
      "address_version": "0a0",
      "address_key_identifier": "{your_address_key_identifier}",
      "amount": 0
    }
  ],
  "transaction_output_fee": {
    "fee_type": "transaction_fee_default",
    "amount": 1000
  }
}
```

### Field Descriptions

- **transaction_output_attribute**: Contains NFT metadata and parent reference
  - `name`: The NFT's name (from metadata)
  - `description`: The NFT's description (from metadata)
  - `parent_transaction_id`: The NFT's transaction ID
- **transaction_data**: References the metadata file
  - `file_hash`: The hash of the `tangled_nft_meta` file
  - `attribute_type_id`: `"Adl87cz8kC190Nqc"`
- **transaction_data_type**: `"transaction"` (indicates a burn operation)
- **transaction_data_type_parent**: `"tangled_nft"` (indicates burning an NFT)
- **transaction_output_list**: Your address to receive the returned funds
  - `address_version`: `"0a0"` (regular address, not NFT address)
  - `amount`: Can be 0 (the NFT's amount will be returned automatically)

### Example Burn Request

```bash
curl -k -X POST \
  "https://localhost:5500/api/{node_id}/{node_signature}/XQmpDjEVF691r2gX" \
  -H "Content-Type: application/json" \
  -d '{
    "transaction_output_attribute": {
      "name": "My Awesome NFT",
      "description": "This is my first NFT",
      "parent_transaction_id": "tnYFzGUyuGK3Nv7qAxGXJsLMkxVNVH5QwyayL8aUYxsb9RNHW"
    },
    "transaction_data": {
      "file_hash": "47f0bc23a18706b8fe7e4fe8c00b1492caad9bea8d20df75cc22faa06b3ec744",
      "attribute_type_id": "Adl87cz8kC190Nqc"
    },
    "transaction_data_type": "transaction",
    "transaction_data_type_parent": "tangled_nft",
    "transaction_output_list": [
      {
        "address_base": "1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP",
        "address_version": "0a0",
        "address_key_identifier": "1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP",
        "amount": 0
      }
    ],
    "transaction_output_fee": {
      "fee_type": "transaction_fee_default",
      "amount": 1000
    }
  }'
```

### Response

The API returns the burn transaction:

```json
{
  "api_status": "success",
  "transaction": [
    {
      "transaction_id": "burn_transaction_id",
      "transaction_output_list": [
        {
          "output_position": -1,
          "amount": 1000
        },
        {
          "output_position": 0,
          "amount": 10000
        },
        {
          "output_position": 1,
          "amount": 1407654
        }
      ]
    }
  ]
}
```

After burning, the NFT will be marked as `is_spent: 1` and the funds (1000 millix from the NFT output, minus the 1000 millix fee) will be returned to your wallet.

---

## Common Issues and Solutions

### Issue: "insufficient_balance" Error

**Problem**: You don't have enough millix to create an NFT.

**Solution**: 
- Ensure you have at least 11,000 millix (stable) in your wallet
- Check your balance using the `get_balance` API
- Wait for unstable transactions to stabilize

### Issue: NFT Not Appearing in List

**Problem**: After creating an NFT, it doesn't show up when listing.

**Solution**:
- Wait for the transaction to stabilize (`is_stable: 1`)
- Verify you're using the correct `address_key_identifier`
- Check that `is_spent: 0` (NFT hasn't been transferred or burned)
- Ensure you're querying with the correct parameters (`p9=0a30`, `p11=Adl87cz8kC190Nqc`, `p12=tangled_nft`)

### Issue: Cannot Download NFT File

**Problem**: Getting an error when trying to download NFT content.

**Solution**:
- Verify you have the correct `file_hash` (from the `tangled_nft` file, not the metadata file)
- Ensure you're using the correct `file_key` from `get_transaction_output_key`
- Check that the transaction is stable
- Verify you're using the correct `address_key_identifier` (must be the owner's address)

### Issue: Transfer Fails

**Problem**: NFT transfer transaction fails.

**Solution**:
- Verify the recipient address is correct and uses `address_version: "0c0"`
- Ensure you have sufficient balance for the transaction fee (10,000 millix)
- Check that the NFT hasn't already been spent (`is_spent: 0`)
- Verify the `parent_transaction_id` matches the original NFT transaction
- Ensure the `file_hash` in `transaction_data` matches the NFT file hash (not the metadata hash)

### Issue: Burn Transaction Fails

**Problem**: Cannot burn/delete an NFT.

**Solution**:
- Verify you're using the metadata file hash (type: `tangled_nft_meta`) in `transaction_data.file_hash`
- Ensure the name and description match exactly what's in the NFT metadata
- Check that `transaction_data_type` is `"transaction"` (not `"tangled_nft"`)
- Verify `transaction_data_type_parent` is `"tangled_nft"`
- Ensure the NFT hasn't already been spent

---

## Best Practices

### Creating NFTs

1. **Choose Meaningful Metadata**: Use descriptive names and detailed descriptions
2. **Verify Domain**: If you have a domain, verify it to add credibility
3. **File Size**: Keep files reasonably sized (the DAG can handle large files, but smaller files are faster to sync)
4. **File Formats**: Use standard formats (JPEG, PNG, MP4, etc.) for better compatibility
5. **Save Transaction IDs**: Always save the transaction ID immediately after creation

### Managing NFTs

1. **Keep Records**: Maintain a database or list of your NFT transaction IDs
2. **Backup Keys**: Ensure you have backups of your wallet keys
3. **Verify Ownership**: Regularly check that your NFTs are still in your address
4. **Monitor Stability**: Wait for transactions to stabilize before considering operations complete

### Transferring NFTs

1. **Verify Recipient**: Double-check the recipient address before transferring
2. **Test First**: Consider testing with a small-value NFT first
3. **Keep Records**: Document all transfers for your records
4. **Confirm Receipt**: Verify the recipient can see the NFT after transfer

### Security

1. **Private Keys**: Never share your private keys or node signature
2. **HTTPS Only**: Always use HTTPS when accessing your node API
3. **Network Security**: Ensure your node is properly secured
4. **Verify Transactions**: Always verify transaction IDs and hashes

---

## Summary

Working with NFTs in Millix involves:

1. **Creating**: Upload a file with metadata using `XQmpDjEVF691r2gX` with `transaction_data_type: "tangled_nft"`
2. **Listing**: Use `Mu7VpxzfYyQimf3V` to see all NFTs owned by an address
3. **Viewing**: Download and decrypt NFT files using `Mh9QifTIESw5t1fa` with the appropriate keys
4. **Transferring**: Create a new transaction referencing the parent NFT using `XQmpDjEVF691r2gX` with `transaction_data_type_parent: "tangled_nft"`
5. **Burning**: Delete an NFT using `XQmpDjEVF691r2gX` with `transaction_data_type: "transaction"` and `transaction_data_type_parent: "tangled_nft"`

All NFT operations require:
- Sufficient millix balance (minimum 11,000 for creation)
- Stable transactions (wait for `is_stable: 1`)
- Correct address versions (`0c0` for NFT addresses)
- Proper file hashes and keys for decryption

For more information, refer to the [Millix API Reference](scripts/API-Reference.html) and the [Millix Scrolls documentation](millix%20scroll.md).

---

*Last Updated: 2025-11-18*

