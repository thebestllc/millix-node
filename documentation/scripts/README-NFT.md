# NFT Operations Test Script

This script provides a command-line interface for testing NFT operations on the Millix network.

## Prerequisites

1. **Node.js**: Version 12 or higher
2. **form-data package**: Required for creating NFTs
   ```bash
   npm install form-data
   ```
3. **Active Millix Node**: A running node with an active wallet session
4. **node.json**: Configuration file with node credentials (in the same directory as the script)

## Installation

1. Ensure you have Node.js installed
2. Install the required dependency:
   ```bash
   cd documentation/scripts
   npm install form-data
   ```

## Usage

### Create an NFT

Create a new NFT by uploading a file:

```bash
node test-nft-operations.js create <file_path> <name> <description> [dns]
```

**Example:**
```bash
node test-nft-operations.js create ./my-image.jpg "My Awesome NFT" "This is my first NFT" example.com
```

**Parameters:**
- `file_path`: Path to the file you want to tokenize
- `name`: Name of the NFT
- `description`: Description of the NFT
- `dns`: (Optional) Domain name for verification

**Requirements:**
- At least 11,000 millix in your wallet
- Valid file path

### List NFTs

List all NFTs owned by your wallet address:

```bash
node test-nft-operations.js list
```

**Output:**
- Transaction ID for each NFT
- Name and description
- File hash and size
- MIME type
- Stability and spent status

### View NFT Details

View detailed information about a specific NFT:

```bash
node test-nft-operations.js view <transaction_id>
```

**Example:**
```bash
node test-nft-operations.js view tnYFzGUyuGK3Nv7qAxGXJsLMkxVNVH5QwyayL8aUYxsb9RNHW
```

**Output:**
- Transaction details
- File information
- Metadata (name and description)

### Transfer NFT

Transfer an NFT to another address:

```bash
node test-nft-operations.js transfer <transaction_id> <recipient_address>
```

**Example:**
```bash
node test-nft-operations.js transfer tnYFzGUyuGK3Nv7qAxGXJsLMkxVNVH5QwyayL8aUYxsb9RNHW 1RecipientBase0c01RecipientKeyId
```

**Parameters:**
- `transaction_id`: The NFT's transaction ID
- `recipient_address`: Full recipient address in format `{base}0c0{key_identifier}`

**Requirements:**
- NFT must be stable and unspent
- At least 10,000 millix for transaction fee
- Valid recipient address with `0c0` version

### Delete (Burn) NFT

Permanently delete an NFT and recover the associated millix:

```bash
node test-nft-operations.js delete <transaction_id>
```

**Example:**
```bash
node test-nft-operations.js delete tnYFzGUyuGK3Nv7qAxGXJsLMkxVNVH5QwyayL8aUYxsb9RNHW
```

**Note:** This operation is irreversible. The NFT will be permanently removed from circulation.

**Requirements:**
- NFT must be stable and unspent
- At least 1,000 millix for transaction fee

## Configuration

The script reads configuration from `node.json` in the same directory:

```json
{
  "node_id": "your_node_id",
  "node_signature": "your_node_signature"
}
```

## Error Handling

The script provides detailed error messages for common issues:

- **Insufficient balance**: Check your wallet balance
- **Transaction not found**: Verify the transaction ID
- **File not found**: Check the file path
- **Invalid address format**: Ensure addresses use correct format

## Examples

### Complete NFT Workflow

```bash
# 1. Create an NFT
node test-nft-operations.js create ./artwork.png "My Art" "A beautiful piece of art"

# 2. List your NFTs (note the transaction_id from step 1)
node test-nft-operations.js list

# 3. View NFT details
node test-nft-operations.js view <transaction_id>

# 4. Transfer NFT to another address
node test-nft-operations.js transfer <transaction_id> <recipient_address>

# 5. Delete NFT (if needed)
node test-nft-operations.js delete <transaction_id>
```

## Troubleshooting

### "form-data package not found"

Install the required package:
```bash
npm install form-data
```

### "Insufficient balance"

Ensure you have at least:
- 11,000 millix for creating NFTs
- 10,000 millix for transferring NFTs
- 1,000 millix for deleting NFTs

### "Transaction not found"

- Verify the transaction ID is correct
- Ensure the transaction has stabilized (`is_stable: 1`)
- Check that you're querying the correct shard

### "Failed to get wallet session"

- Ensure your Millix node is running
- Verify your node.json file is correct
- Check that you have an active wallet session

## API Reference

This script uses the following Millix APIs:

- `OBexeX0f0MsnL1S3` - Get wallet session
- `zLsiAkocn90e3K6R` - Get balance
- `XQmpDjEVF691r2gX` - Create/transfer/delete NFT
- `Mu7VpxzfYyQimf3V` - List NFTs
- `IBHgAmydZbmTUAe8` - Get transaction extended
- `3K2xvNRLMpiEqLo8` - Get transaction output key
- `Mh9QifTIESw5t1fa` - Get transaction output data

For detailed API documentation, see the [NFT Guide](../nft-guide.md) and [API Reference](API-Reference.html).

