# Millix API Testing Scripts

This directory contains scripts for testing Millix node APIs and generating documentation content.

## Files

- `test-apis-and-generate-book.js` - Main script for testing APIs and generating book content
- `node.json` - Node credentials (node_id, node_signature, key)
- `millix_private_key.json` - Wallet mnemonic phrase

## Prerequisites

- Node.js 16+ installed
- A running Millix node accessible at the configured host/port
- Valid `node.json` and `millix_private_key.json` files in this directory

## Usage

### Basic Usage

```bash
node test-apis-and-generate-book.js
```

This will:
- Test all configured API endpoints
- Generate markdown output in `api-test-results.md`
- Use default settings (localhost:5500)

### Advanced Usage

```bash
# Specify custom host and port
node test-apis-and-generate-book.js --host 192.168.1.100 --port 5500

# Generate JSON output instead of markdown
node test-apis-and-generate-book.js --format json

# Generate both markdown and JSON
node test-apis-and-generate-book.js --format both

# Skip SSL certificate verification (for self-signed certs)
node test-apis-and-generate-book.js --skip-ssl-check

# Custom output file
node test-apis-and-generate-book.js --output my-api-results.md
```

### Command Line Options

| Option | Description | Default |
|--------|-------------|---------|
| `--host <host>` | API host address | `localhost` |
| `--port <port>` | API port number | `5500` |
| `--output <file>` | Output filename | `api-test-results.md` |
| `--format <format>` | Output format: `markdown`, `json`, or `both` | `markdown` |
| `--skip-ssl-check` | Skip SSL certificate verification | `false` |

## Output Format

### Markdown Output

The markdown output includes:
- Test summary with success/failure counts
- Detailed results for each API endpoint
- Response data in JSON format
- Insights and documentation notes for each endpoint
- Usage examples suitable for book content
- Node statistics and configuration information

### JSON Output

The JSON output includes:
- Metadata about the test run
- Complete results for each endpoint including:
  - Request details
  - Response data
  - Timing information
  - Success/failure status

## Tested APIs

The script tests the following API endpoints:

1. **get_node_id** - Get node identifier (public, no auth required)
2. **list_node** - List peer nodes
3. **get_available_version** - Get available client version
4. **list_config_public** - List public configuration values
5. **get_node_transaction_stat_summary** - Get transaction statistics
6. **get_node_address_stat_summary** - Get address statistics
7. **list_shard** - List shards
8. **get_stat_summary** - Get comprehensive node statistics
9. **get_os_info** - Get operating system information
10. **list_address_version** - List address versions
11. **get_random_mnemonic** - Generate random mnemonic phrase
12. **list_transaction** - List transactions
13. **event_log_list** - List event logs

## Security Notes

⚠️ **Important Security Considerations:**

1. The `node.json` file contains sensitive credentials. Never commit this file to version control or share it publicly.

2. The `millix_private_key.json` file contains your wallet mnemonic phrase. This is extremely sensitive and should be kept secure.

3. The API uses self-signed SSL certificates by default. Use `--skip-ssl-check` only in development environments.

4. The API port (default 5500) should be firewalled from external access in production.

## Example Output

After running the script, you'll see output like:

```
Millix API Tester and Book Content Generator
============================================

Host: localhost
Port: 5500
Output: api-test-results.md
Format: markdown

Starting API tests...

Testing: get_node_id (ZFAYRM8LRtmfYp4Y)
  URL: https://localhost:5500/api/1KeCkTz9V5YnVzXFgbhjXfQpdbugmcJ8aR/***/ZFAYRM8LRtmfYp4Y
  ✓ Success (45ms)

Testing: list_node (0eoUqXNE715mBVqV)
  URL: https://localhost:5500/api/1KeCkTz9V5YnVzXFgbhjXfQpdbugmcJ8aR/***/0eoUqXNE715mBVqV?p2=5
  ✓ Success (123ms)

...

==================================================
Test Summary
==================================================
Total: 13
Successful: 12
Failed: 1

✓ Markdown output written to: api-test-results.md

Done!
```

## Troubleshooting

### Connection Errors

If you get connection errors:
- Verify the Millix node is running
- Check the host and port are correct
- Ensure the API port is accessible
- Try using `--skip-ssl-check` if using self-signed certificates

### Authentication Errors

If you get authentication errors:
- Verify `node.json` contains valid credentials
- Check that `node_id` and `node_signature` are correct
- Ensure the node is using the same credentials

### SSL Certificate Errors

If you get SSL certificate errors:
- Use the `--skip-ssl-check` flag for development
- Or properly configure SSL certificates for production

## Customization

To test additional APIs, edit the `API_ENDPOINTS` array in `test-apis-and-generate-book.js`:

```javascript
const API_ENDPOINTS = [
    // Add your endpoint here
    {
        name: 'your_endpoint_name',
        id: 'YOUR_ENDPOINT_ID',
        method: 'GET',
        requireIdentity: true,
        description: 'Description of what this endpoint does',
        params: { p0: 'value' } // Optional parameters
    }
];
```

## License

This script is part of the Millix documentation project and follows the same license as the main Millix codebase.

