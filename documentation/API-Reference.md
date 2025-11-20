# Millix Node API Reference

**Complete API Documentation for Millix Node**

This comprehensive reference covers all available APIs for interacting with a Millix node. All examples use real data from a live node for accuracy and clarity.

---

## Table of Contents

1. [Public](#public)
2. [Node](#node)
3. [Statistics](#statistics)
4. [Configuration](#configuration)
5. [Shard](#shard)
6. [Address](#address)
7. [Transaction](#transaction)
8. [Wallet](#wallet)
9. [Logging](#logging)
10. [Backlog](#backlog)
11. [Utility](#utility)

---

## Introduction

The Millix Node API provides a RESTful interface for interacting with your Millix node. All APIs use HTTPS and return JSON responses. Most endpoints require authentication using your node ID and node signature.

### API URL Structure

The base URL structure for all API calls is:

```
https://<host>:<port>/api/<node_id>/<node_signature>/<api_id>?p0=<value>&p1=<value>...
```

**Components:**

- **host**: Your node's hostname or IP address (default: localhost)
- **port**: API port (default: 5500)
- **node_id**: Your node's unique identifier
- **node_signature**: Authentication signature (use "anonymous" for public endpoints)
- **api_id**: Unique identifier for the specific API endpoint
- **p0, p1, ...**: Optional parameters (p0, p1, p2, etc.)

### Authentication

Most endpoints require authentication using your node signature. You can find your node_id and node_signature in the `node.json` file in your Millix data directory.

**Example node.json:**

```json
{
  "key": "xprv9s21ZrQH143K332NUcLJ9v3MH1V5NYiJdNrAJMegxzmeV8D8DnwUQJMEE8icrdxQ8WZ3bBj3iFfsYRAartknwfJYzWywXtocyPyyk64dPf6",
  "node_id": "1KeCkTz9V5YnVzXFgbhjXfQpdbugmcJ8aR",
  "node_signature": "2bXBoj19oL3tYEXuv6PYiaoJmzqzT1ZAMxFjCAecua94iRakXrf2dwavvncdNgGjj7q5pZuiU5gMx3Z9HfgDgfxS"
}
```

**Note:** The actual values shown above are from a real node used for testing. In production, keep your `node.json` file secure and never share your node_signature publicly.

### SSL Certificates

Millix nodes use self-signed SSL certificates. When making API calls, you may need to disable SSL verification (use `-k` flag with curl) or accept the certificate in your client.

---

## 1. Public

2 endpoint(s) in this category.

### 1.1 get_node_id

**Endpoint ID:** `ZFAYRM8LRtmfYp4Y`

**Method:** GET

**Description:** Identifies the node_id responding to the request at the provided IP address and api port

**Response Time:** 4ms

**Priority:** high

**Example Request:**

```bash
curl -k "https://localhost:5500/api/1KeCkTz9V5YnVzXFgbhjXfQpdbugmcJ8aR/anonymous/ZFAYRM8LRtmfYp4Y"
```

**Response:**

```json
{
  "node_id": "1KeCkTz9V5YnVzXFgbhjXfQpdbugmcJ8aR"
}
```

**Documentation Notes:**

- This is a public endpoint that doesn't require authentication.
- Useful for initial node discovery and health checks.

---

### 1.2 get_random_mnemonic

**Endpoint ID:** `Gox4NzTLDnpEr10v`

**Method:** GET

**Description:** Returns a random mnemonic phrase (24 words, BIP39)

**Response Time:** 5ms

**Priority:** high

**Example Request:**

```bash
curl -k "https://localhost:5500/api/1KeCkTz9V5YnVzXFgbhjXfQpdbugmcJ8aR/anonymous/Gox4NzTLDnpEr10v"
```

**Response:**

```json
{
  "mnemonic": "police labor clarify excuse suspect narrow heavy away nasty churn panel shoulder solve tooth allow bread poem company naive coin scrub culture poem grace"
}
```

**Documentation Notes:**

- This is a public endpoint that doesn't require authentication.
- Useful for initial node discovery and health checks.

---

## 2. Node

6 endpoint(s) in this category.

### 2.1 list_node

**Endpoint ID:** `0eoUqXNE715mBVqV`

**Method:** GET

**Description:** Returns a list of peer nodes known by the host

**Response Time:** 7ms

**Priority:** high

**Example Request:**

```bash
curl -k "https://localhost:5500/api/1KeCkTz9V5YnVzXFgbhjXfQpdbugmcJ8aR/2bXBoj19oL3tYEXuv6PYiaoJmzqzT1ZAMxFjCAecua94iRakXrf2dwavvncdNgGjj7q5pZuiU5gMx3Z9HfgDgfxS/0eoUqXNE715mBVqV"
```

**Response:**

```json
[
  {
    "node_id": "1B2kGVazsBXXWnEFw2P3eskL5rDFNVicbU",
    "node_prefix": "wss://",
    "node_address": "110.38.242.162",
    "node_port": 10000,
    "node_port_api": 5500,
    "status": 2,
    "update_date": 1763392178,
    "create_date": 1763392178
  },
  {
    "node_id": "16qaCYn8Zqij4MqhhL2fDBb8ara69MM3VR",
    "node_prefix": "wss://",
    "node_address": "209.214.225.230",
    "node_port": 10009,
    "node_port_api": 5509,
    "status": 2,
    "update_date": 1763392045,
    "create_date": 1763392045
  },
  {
    "node_id": "17zR8SDnM4V16VZvQeCuFnGgmkreP7yxAp",
    "node_prefix": "wss://",
    "node_address": "node-00038.millix.com",
    "node_port": 10000,
    "node_port_api": 5500,
    "status": 1,
    "update_date": 1763391912,
    "create_date": 1763391848
  },
  {
    "node_id": "1LuuT7zkj9HLjrMat4yDgaTGBPzCvoiuR7",
    "node_prefix": "wss://",
    "node_address": "196.75.53.228",
    "node_port": 10000,
    "node_port_api": 5500,
    "status": 2,
    "update_date": 1763391528,
    "create_date": 1763391528
  },
  {
    "node_id": "1McbXjSZioU3K3Uvnz6usH2hCTgFQkunsr",
    "node_prefix": "wss://",
    "node_address": "99.68.140.90",
    "node_port": 10000,
    "node_port_api": 5500,
    "status": 1,
    "update_date": 1763391741,
    "create_date": 1763391514
  },
  {
    "node_id": "1HKRUpJTVu2akXXHJnPJGSwkRAa5VhwbqF",
    "node_prefix": "wss://",
    "node_address": "178.165.189.19",
    "node_port": 10000,
    "node_port_api": 5500,
    "status": 2,
    "update_date": 1763391441,
    "create_date": 1763391441
  },
  {
    "node_id": "1AQ9C3GM9QNS2SZKrq1FadzfyR4BwqpSrA",
    "node_prefix": "wss://",
    "node_address": "12.79.200.10",
    "node_port": 20002,
    "node_port_api": 5500,
    "status": 2,
    "update_date": 1763391310,
    "create_date": 1763391310
  },
  {
    "node_id": "1KtjKA9cXkjMAryZEvUzzr1hkYZZa368no",
    "node_prefix": "wss://",
    "node_address": "12.18.136.8",
    "node_port": 10004,
    "node_port_api": 5504,
    "status": 2,
    "update_date": 1763391155,
    "create_date": 1763391155
  },
  {
    "node_id": "15NKGXgdX2YT4L5KwAJazwDcvZi1gsWngM",
    "node_prefix": "wss://",
    "node_address": "122.2.22.18",
    "node_port": 10000,
    "node_port_api": 5500,
    "status": 2,
    "update_date": 1763391137,
    "create_date": 1763391137
  },
  {
    "node_id": "1Cw4afMUvXw5NR8Q1xdzfDdVvvhGGLySXb",
    "node_prefix": "wss://",
    "node_address": "192.73.246.253",
    "node_port": 10000,
    "node_port_api": 5500,
    "status": 2,
    "update_date": 1763391128,
    "create_date": 1763391128
  }
]
```

**Documentation Notes:**

- Provides information about the node and network topology.
- Essential for monitoring and understanding network connectivity.
- The `status` field indicates node health: 1=active, 2=connected, -1=inactive.
- `node_port` is the protocol port, `node_port_api` is the API port.

---

### 2.2 get_os_info

**Endpoint ID:** `RLOk0Wji0lQVjynT`

**Method:** GET

**Description:** Get the node OS info including CPU, memory, and system details

**Response Time:** 17ms

**Priority:** high

**Example Request:**

```bash
curl -k "https://localhost:5500/api/1KeCkTz9V5YnVzXFgbhjXfQpdbugmcJ8aR/2bXBoj19oL3tYEXuv6PYiaoJmzqzT1ZAMxFjCAecua94iRakXrf2dwavvncdNgGjj7q5pZuiU5gMx3Z9HfgDgfxS/RLOk0Wji0lQVjynT"
```

**Response:**

```json
{
  "type": "Linux",
  "platform": "linux",
  "release": "6.8.0-85-generic",
  "arch": "x64",
  "cpu": {
    "model": "4 × Intel(R) Core(TM) i5-7500T CPU @ 2.70GHz",
    "speed": "4 × 1299, 3 × 1300 MHz",
    "loadavg": [
      "5.68",
      "5.62",
      "5.51"
    ]
  },
  "memory": {
    "total": "31.24GB",
    "free": "8.06GB",
    "freePercent": "26%"
  },
  "node_millix_version": "1.25.4",
  "node_millix_build_date": 1761918274
}
```

**Documentation Notes:**

- Provides information about the node and network topology.
- Essential for monitoring and understanding network connectivity.

---

### 2.3 list_node_memory_extended

**Endpoint ID:** `vM27tlHkqbRej6tP`

**Method:** GET

**Description:** Returns a list of all peer nodes (node table and memory list)

**Response Time:** 46ms

**Priority:** medium

**Example Request:**

```bash
curl -k "https://localhost:5500/api/1KeCkTz9V5YnVzXFgbhjXfQpdbugmcJ8aR/2bXBoj19oL3tYEXuv6PYiaoJmzqzT1ZAMxFjCAecua94iRakXrf2dwavvncdNgGjj7q5pZuiU5gMx3Z9HfgDgfxS/vM27tlHkqbRej6tP"
```

**Response:**

```json
[
  {
    "node_id": "1B2kGVazsBXXWnEFw2P3eskL5rDFNVicbU",
    "node_prefix": "wss://",
    "node_address": "110.38.242.162",
    "node_port": 10000,
    "node_port_api": 5500,
    "status": 2,
    "update_date": 1763392178,
    "create_date": 1763392178,
    "node_attribute_list": [
      {
        "attribute_type_id": "360NCKsWffvH48QDlh4a",
        "value": {
          "transaction_fee_default": 1000,
          "transaction_fee_network": 0,
          "transaction_fee_proxy": 1000
        },
        "status": 1,
        "create_date": 1763392178,
        "attribute_type": "transaction_fee"
      },
      {
        "attribute_type_id": "8FPirjQYaFIEIF2y7OEA",
        "value": {
          "peer_connection_count_day": 104,
          "peer_connection_count_hour": 100,
          "peer_connection_count_minute": 5
        },
        "status": 1,
        "create_date": 1763392178,
        "attribute_type": "peer_connection"
      },
      {
        "attribute_type_id": "KkwWuh5VaHBYlk8lsduD",
        "value": "kcPpXn9HYg12vtotd1JHTHMo3Rga9e5n9BZrdnk3Wvi5",
        "status": 1,
        "create_date": 1763392177,
        "attribute_type": "node_public_key"
      },
      {
        "attribute_type_id": "OfhGqiGJID8WTOZHzl2b",
        "value": 87,
        "status": 1,
        "create_date": 1763392178,
        "attribute_type": "peer_count"
      },
      {
        "attribute_type_id": "T4CefCfUyoc4CWv7cZ5V",
        "value": "1G5NCwiTXwDpP9UEMyEwFuQvkjXp87q7GJ0a01G5NCwiTXwDpP9UEMyEwFuQvkjXp87q7GJ",
        "status": 1,
        "create_date": 1763392178,
        "attribute_type": "address_default"
      },
      {
        "attribute_type_id": "X7wJOltYg1mqtC0NP4j5",
        "value": {
          "public": false
        },
        "status": 1,
        "create_date": 1763390959,
        "attribute_type": "node_connection"
      },
      {
        "attribute_type_id": "fTGdH5Xy017VS2dkIn7a",
        "value": [
          {
            "job_name": "peer_rotation",
            "status": 1
          },
          {
            "job_name": "node_list",
            "status": 1
          },
          {
            "job_name": "transaction_validation",
            "status": 1
          },
          {
            "job_name": "consensus_watchdog_validation",
            "status": 1
          },
          {
            "job_name": "wallet_inspect",
            "status": 1
          },
          {
            "job_name": "wallet_retry_validation_update",
            "status": 1
          },
          {
            "job_name": "shard_zero_pruning",
            "status": 1
          },
          {
            "job_name": "dag_progress",
            "status": 0
          },
          {
            "job_name": "transaction_output_expiration",
            "status": 1
          },
          {
            "job_name": "node_attribute_update",
            "status": 1
          }
        ],
        "status": 1,
        "create_date": 1763392178,
        "attribute_type": "job_list"
      },
      {
        "attribute_type_id": "ijDj2VlTyJBl5R4iTCmG",
        "value": {
          "node_version": "1.25.4.3-tangled",
          "node_create_date": 1759945204,
          "node_update_date": 1759502270
        },
        "status": 1,
        "create_date": 1763392178,
        "attribute_type": "node_about"
      },
      {
        "attribute_type_id": "kbkMAkuyqOlSNKv7udFz",
        "value": [
          {
            "shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
            "transaction_count": 280023,
            "update_date": 1763392162,
            "is_required": true,
            "fee_ask_request_byte": 20
          }
        ],
        "status": 1,
        "create_date": 1763392178,
        "attribute_type": "shard_protocol"
      },
      {
        "attribute_type_id": "qhTfPzLhZENklxNbTQYW",
        "value": 280023,
        "status": 1,
        "create_date": 1763392178,
        "attribute_type": "transaction_count"
      }
    ]
  },
  {
    "node_id": "1E4Q8SxNRzPHuQGqZDSiZ6CXijR7PRTmwH",
    "node_prefix": "wss://",
    "node_address": "173.25.74.218",
    "node_port": 10000,
    "node_port_api": 5500,
    "status": -1,
    "update_date": 1763392153,
    "create_date": 1763392153,
    "node_attribute_list": []
  },
  {
    "node_id": "16qaCYn8Zqij4MqhhL2fDBb8ara69MM3VR",
    "node_prefix": "wss://",
    "node_address": "209.214.225.230",
    "node_port": 10009,
    "node_port_api": 5509,
    "status": 2,
    "update_date": 1763392045,
    "create_date": 1763392045,
    "node_attribute_list": [
      {
        "attribute_type_id": "360NCKsWffvH48QDlh4a",
        "value": {
          "transaction_fee_default": 1000,
          "transaction_fee_network": 0,
          "transaction_fee_proxy": 1000
        },
        "status": 1,
        "create_date": 1763392046,
        "attribute_type": "transaction_fee"
      },
      {
        "attribute_type_id": "8FPirjQYaFIEIF2y7OEA",
        "value": {
          "peer_connection_count_day": 43,
          "peer_connection_count_hour": 38,
          "peer_connection_count_minute": 3
        },
        "status": 1,
        "create_date": 1763392046,
        "attribute_type": "peer_connection"
      },
      {
        "attribute_type_id": "KkwWuh5VaHBYlk8lsduD",
        "value": "gp2voz3eFoecQp6B85CfqCSQEVhJniQ1GzmkeXrixi67",
        "status": 1,
        "create_date": 1763392045,
        "attribute_type": "node_public_key"
      },
      {
        "attribute_type_id": "OfhGqiGJID8WTOZHzl2b",
        "value": 93,
        "status": 1,
        "create_date": 1763392046,
        "attribute_type": "peer_count"
      },
      {
        "attribute_type_id": "T4CefCfUyoc4CWv7cZ5V",
        "value": "1PWw3VyEEchDWDsFNECkiqis7nTWSj9J6H0a01PWw3VyEEchDWDsFNECkiqis7nTWSj9J6H",
        "status": 1,
        "create_date": 1763392046,
        "attribute_type": "address_default"
      },
      {
        "attribute_type_id": "X7wJOltYg1mqtC0NP4j5",
        "value": {
          "public": false
        },
        "status": 1,
        "create_date": 1763392061,
        "attribute_type": "node_connection"
      },
      {
        "attribute_type_id": "fTGdH5Xy017VS2dkIn7a",
        "value": [
          {
            "job_name": "peer_rotation",
            "status": 1
          },
          {
            "job_name": "node_list",
            "status": 1
          },
          {
            "job_name": "transaction_validation",
            "status": 1
          },
          {
            "job_name": "consensus_watchdog_validation",
            "status": 1
          },
          {
            "job_name": "wallet_inspect",
            "status": 1
          },
          {
            "job_name": "wallet_retry_validation_update",
            "status": 1
          },
          {
            "job_name": "shard_zero_pruning",
            "status": 1
          },
          {
            "job_name": "dag_progress",
            "status": 0
          },
          {
            "job_name": "transaction_output_expiration",
            "status": 1
          },
          {
            "job_name": "node_attribute_update",
            "status": 1
          }
        ],
        "status": 1,
        "create_date": 1763392046,
        "attribute_type": "job_list"
      },
      {
        "attribute_type_id": "ijDj2VlTyJBl5R4iTCmG",
        "value": {
          "node_version": "1.25.4",
          "node_create_date": 1640750967,
          "node_update_date": 1761918274
        },
        "status": 1,
        "create_date": 1763392046,
        "attribute_type": "node_about"
      },
      {
        "attribute_type_id": "kbkMAkuyqOlSNKv7udFz",
        "value": [
          {
            "shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
            "transaction_count": 10734752,
            "update_date": 1763392018,
            "is_required": true,
            "fee_ask_request_byte": 20
          }
        ],
        "status": 1,
        "create_date": 1763392046,
        "attribute_type": "shard_protocol"
      },
      {
        "attribute_type_id": "qhTfPzLhZENklxNbTQYW",
        "value": 10734752,
        "status": 1,
        "create_date": 1763392046,
        "attribute_type": "transaction_count"
      }
    ]
  },
  {
    "node_id": "19Ux2b7iNt7XUbNQtuGR4QdcHDZbySLxji",
    "node_prefix": "wss://",
    "node_address": "197.231.179.43",
    "node_port": 10000,
    "node_port_api": 5500,
    "status": -1,
    "update_date": 1763392035,
    "create_date": 1763392035,
    "node_attribute_list": []
  },
  {
    "node_id": "1GXUv6JLLDoccT5FzXe58odgELf3wPWWMv",
    "node_prefix": "wss://",
    "node_address": "node-00100.millix.com",
    "node_port": 10000,
    "node_port_api": 5500,
    "status": -1,
    "update_date": 1763391958,
    "create_date": 1763391958,
    "node_attribute_list": []
  }
]
```

**Documentation Notes:**

- Provides information about the node and network topology.
- Essential for monitoring and understanding network connectivity.

---

### 2.4 list_node_attribute

**Endpoint ID:** `AgsSNTSA0RHmWUkp`

**Method:** GET

**Description:** Returns records from table node_attributes

**Response Time:** 3ms

**Priority:** medium

**Example Request:**

```bash
curl -k "https://localhost:5500/api/1KeCkTz9V5YnVzXFgbhjXfQpdbugmcJ8aR/2bXBoj19oL3tYEXuv6PYiaoJmzqzT1ZAMxFjCAecua94iRakXrf2dwavvncdNgGjj7q5pZuiU5gMx3Z9HfgDgfxS/AgsSNTSA0RHmWUkp"
```

**Response:**

```json
[
  {
    "attribute_type": "node_connection",
    "node_id": "1JqwA8GyZfBLTUFuCp4wTVVm7CMTeZv1H1",
    "attribute_type_id": "X7wJOltYg1mqtC0NP4j5",
    "value": {
      "public": false
    },
    "status": 1,
    "create_date": 1763392187
  },
  {
    "attribute_type": "peer_connection",
    "node_id": "19TGr3gLBfXhSUMGG4ZBvW9kggvVSCSTNB",
    "attribute_type_id": "8FPirjQYaFIEIF2y7OEA",
    "value": {
      "peer_connection_count_day": 105,
      "peer_connection_count_hour": 69,
      "peer_connection_count_minute": 10
    },
    "status": 1,
    "create_date": 1763392182
  },
  {
    "attribute_type": "transaction_fee",
    "node_id": "19TGr3gLBfXhSUMGG4ZBvW9kggvVSCSTNB",
    "attribute_type_id": "360NCKsWffvH48QDlh4a",
    "value": {
      "transaction_fee_default": 1000,
      "transaction_fee_network": 0,
      "transaction_fee_proxy": 1000
    },
    "status": 1,
    "create_date": 1763392182
  },
  {
    "attribute_type": "job_list",
    "node_id": "19TGr3gLBfXhSUMGG4ZBvW9kggvVSCSTNB",
    "attribute_type_id": "fTGdH5Xy017VS2dkIn7a",
    "value": [
      {
        "job_name": "peer_rotation",
        "status": 1
      },
      {
        "job_name": "node_list",
        "status": 1
      },
      {
        "job_name": "transaction_validation",
        "status": 1
      },
      {
        "job_name": "consensus_watchdog_validation",
        "status": 1
      },
      {
        "job_name": "wallet_inspect",
        "status": 1
      },
      {
        "job_name": "wallet_retry_validation_update",
        "status": 1
      },
      {
        "job_name": "shard_zero_pruning",
        "status": 1
      },
      {
        "job_name": "dag_progress",
        "status": 0
      },
      {
        "job_name": "transaction_output_expiration",
        "status": 1
      },
      {
        "job_name": "node_attribute_update",
        "status": 1
      }
    ],
    "status": 1,
    "create_date": 1763392182
  },
  {
    "attribute_type": "node_about",
    "node_id": "19TGr3gLBfXhSUMGG4ZBvW9kggvVSCSTNB",
    "attribute_type_id": "ijDj2VlTyJBl5R4iTCmG",
    "value": {
      "node_version": "1.25.4.3-tangled",
      "node_create_date": 1714251532,
      "node_update_date": 1683808753
    },
    "status": 1,
    "create_date": 1763392182
  },
  {
    "attribute_type": "transaction_count",
    "node_id": "19TGr3gLBfXhSUMGG4ZBvW9kggvVSCSTNB",
    "attribute_type_id": "qhTfPzLhZENklxNbTQYW",
    "value": 1298837,
    "status": 1,
    "create_date": 1763392182
  },
  {
    "attribute_type": "address_default",
    "node_id": "19TGr3gLBfXhSUMGG4ZBvW9kggvVSCSTNB",
    "attribute_type_id": "T4CefCfUyoc4CWv7cZ5V",
    "value": "1NfQZaoprFVGPs31CJqqBQ7wLSnVdjRPAz0a01NfQZaoprFVGPs31CJqqBQ7wLSnVdjRPAz",
    "status": 1,
    "create_date": 1763392182
  },
  {
    "attribute_type": "shard_protocol",
    "node_id": "19TGr3gLBfXhSUMGG4ZBvW9kggvVSCSTNB",
    "attribute_type_id": "kbkMAkuyqOlSNKv7udFz",
    "value": [
      {
        "shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
        "transaction_count": 1298837,
        "update_date": 1763392164,
        "is_required": true,
        "fee_ask_request_byte": 20
      }
    ],
    "status": 1,
    "create_date": 1763392182
  },
  {
    "attribute_type": "peer_count",
    "node_id": "19TGr3gLBfXhSUMGG4ZBvW9kggvVSCSTNB",
    "attribute_type_id": "OfhGqiGJID8WTOZHzl2b",
    "value": 74,
    "status": 1,
    "create_date": 1763392182
  },
  {
    "attribute_type": "node_public_key",
    "node_id": "19TGr3gLBfXhSUMGG4ZBvW9kggvVSCSTNB",
    "attribute_type_id": "KkwWuh5VaHBYlk8lsduD",
    "value": "hVLbhpNCF6gqX5Log1Q1UL5hnb57EJLYk2eXUE3FWhXV",
    "status": 1,
    "create_date": 1763392182
  }
]
```

**Documentation Notes:**

- Provides information about the node and network topology.
- Essential for monitoring and understanding network connectivity.

---

### 2.5 get_node_public_ip

**Endpoint ID:** `qRHogKQ1Bb7OT4N9`

**Method:** GET

**Description:** Get node public IP address

**Response Time:** 4ms

**Priority:** medium

**Example Request:**

```bash
curl -k "https://localhost:5500/api/1KeCkTz9V5YnVzXFgbhjXfQpdbugmcJ8aR/2bXBoj19oL3tYEXuv6PYiaoJmzqzT1ZAMxFjCAecua94iRakXrf2dwavvncdNgGjj7q5pZuiU5gMx3Z9HfgDgfxS/qRHogKQ1Bb7OT4N9"
```

**Response:**

```json
{
  "node_public_ip": "37.6.19.83"
}
```

**Documentation Notes:**

- Provides information about the node and network topology.
- Essential for monitoring and understanding network connectivity.

---

### 2.6 get_available_version

**Endpoint ID:** `WGem8x5aycBqFXWQ`

**Method:** GET

**Description:** Returns available client/browser version

**Response Time:** 1137ms

**Priority:** medium

**Example Request:**

```bash
curl -k "https://localhost:5500/api/1KeCkTz9V5YnVzXFgbhjXfQpdbugmcJ8aR/2bXBoj19oL3tYEXuv6PYiaoJmzqzT1ZAMxFjCAecua94iRakXrf2dwavvncdNgGjj7q5pZuiU5gMx3Z9HfgDgfxS/WGem8x5aycBqFXWQ"
```

**Response:**

```json
{
  "api_status": "success",
  "version_available": "1.21.0",
  "application": "client",
  "node_millix_version": "1.25.4",
  "os_platform": "linux",
  "os_arch": "x64"
}
```

**Documentation Notes:**

- Provides information about the node and network topology.
- Essential for monitoring and understanding network connectivity.

---

## 3. Statistics

5 endpoint(s) in this category.

### 3.1 get_stat_summary

**Endpoint ID:** `rKclyiLtHx0dx55M`

**Method:** GET

**Description:** Get comprehensive node stat summary including balance, network, and transaction info

**Response Time:** 13ms

**Priority:** high

**Example Request:**

```bash
curl -k "https://localhost:5500/api/1KeCkTz9V5YnVzXFgbhjXfQpdbugmcJ8aR/2bXBoj19oL3tYEXuv6PYiaoJmzqzT1ZAMxFjCAecua94iRakXrf2dwavvncdNgGjj7q5pZuiU5gMx3Z9HfgDgfxS/rKclyiLtHx0dx55M"
```

**Response:**

```json
{
  "balance": {
    "stable": 0,
    "unstable": 0
  },
  "network": {
    "online": true,
    "peer_count": 117,
    "node_id": "1KeCkTz9V5YnVzXFgbhjXfQpdbugmcJ8aR",
    "node_port": 10000,
    "node_bind_ip": "0.0.0.0",
    "node_is_public": true,
    "node_public_ip": "37.6.19.83",
    "node_network_addresses": [
      "192.168.1.65",
      "192.168.122.1"
    ]
  },
  "log": {
    "log_count": 76842,
    "backlog_count": 0
  },
  "transaction": {
    "transaction_count": 131,
    "transaction_unstable_count": 7,
    "transaction_wallet_count": 0,
    "transaction_wallet_unstable_count": 0,
    "transaction_validation_count": 101
  }
}
```

**Documentation Notes:**

- Provides quantitative information about node state and network activity.
- Useful for monitoring, analytics, and understanding network health.
- The `stable` balance represents confirmed funds, while `unstable` represents pending.
- `peer_count` indicates network connectivity health.
- `transaction_wallet_count` shows transactions involving this node's wallet.

---

### 3.2 get_node_transaction_stat_summary

**Endpoint ID:** `C9rEOewwhQDijCnN`

**Method:** GET

**Description:** Returns a summary of transaction statistics from the host

**Response Time:** 9ms

**Priority:** high

**Example Request:**

```bash
curl -k "https://localhost:5500/api/1KeCkTz9V5YnVzXFgbhjXfQpdbugmcJ8aR/2bXBoj19oL3tYEXuv6PYiaoJmzqzT1ZAMxFjCAecua94iRakXrf2dwavvncdNgGjj7q5pZuiU5gMx3Z9HfgDgfxS/C9rEOewwhQDijCnN"
```

**Response:**

```json
{
  "transaction_free_count": 2,
  "transaction_included_count": 129,
  "transaction_input_count": 552,
  "transaction_output_count": 754,
  "transaction_stable_count": 124,
  "transaction_pending_count": 7
}
```

**Documentation Notes:**

- Provides quantitative information about node state and network activity.
- Useful for monitoring, analytics, and understanding network health.

---

### 3.3 get_node_address_stat_summary

**Endpoint ID:** `Bz73Dm7u3dKlXDS8`

**Method:** GET

**Description:** Returns a summary of address statistics from the host

**Response Time:** 2ms

**Priority:** high

**Example Request:**

```bash
curl -k "https://localhost:5500/api/1KeCkTz9V5YnVzXFgbhjXfQpdbugmcJ8aR/2bXBoj19oL3tYEXuv6PYiaoJmzqzT1ZAMxFjCAecua94iRakXrf2dwavvncdNgGjj7q5pZuiU5gMx3Z9HfgDgfxS/Bz73Dm7u3dKlXDS8"
```

**Response:**

```json
{
  "address_count": 69,
  "key_identifier_count": 68
}
```

**Documentation Notes:**

- Provides quantitative information about node state and network activity.
- Useful for monitoring, analytics, and understanding network health.

---

### 3.4 get_unspent_output_summary

**Endpoint ID:** `FC8ylC617zzn1Gaa`

**Method:** GET

**Description:** Returns the unspent output stat summary

**Response Time:** 13ms

**Priority:** medium

**Example Request:**

```bash
curl -k "https://localhost:5500/api/1KeCkTz9V5YnVzXFgbhjXfQpdbugmcJ8aR/2bXBoj19oL3tYEXuv6PYiaoJmzqzT1ZAMxFjCAecua94iRakXrf2dwavvncdNgGjj7q5pZuiU5gMx3Z9HfgDgfxS/FC8ylC617zzn1Gaa"
```

**Response:**

```json
{
  "transaction_output_count": 0,
  "transaction_max_amount": 0
}
```

**Documentation Notes:**

- Provides quantitative information about node state and network activity.
- Useful for monitoring, analytics, and understanding network health.

---

### 3.5 get_transaction_output_stats

**Endpoint ID:** `wWo8DCcoXVlpczoP`

**Method:** GET

**Description:** Get transaction output statistics

**Response Time:** 24ms

**Priority:** medium

**Example Request:**

```bash
curl -k "https://localhost:5500/api/1KeCkTz9V5YnVzXFgbhjXfQpdbugmcJ8aR/2bXBoj19oL3tYEXuv6PYiaoJmzqzT1ZAMxFjCAecua94iRakXrf2dwavvncdNgGjj7q5pZuiU5gMx3Z9HfgDgfxS/wWo8DCcoXVlpczoP"
```

**Response:**

```json
{
  "count": 7
}
```

**Documentation Notes:**

- Provides quantitative information about node state and network activity.
- Useful for monitoring, analytics, and understanding network health.

---

## 4. Configuration

3 endpoint(s) in this category.

### 4.1 list_config_public

**Endpoint ID:** `hXwPQrVhLEALFsIJ`

**Method:** GET

**Description:** Returns public config values

**Response Time:** 5ms

**Priority:** high

**Example Request:**

```bash
curl -k "https://localhost:5500/api/1KeCkTz9V5YnVzXFgbhjXfQpdbugmcJ8aR/2bXBoj19oL3tYEXuv6PYiaoJmzqzT1ZAMxFjCAecua94iRakXrf2dwavvncdNgGjj7q5pZuiU5gMx3Z9HfgDgfxS/hXwPQrVhLEALFsIJ"
```

**Response:**

```json
[
  {
    "config_id": "p5YfpXfIsSXdZND7I7UB",
    "config_name": "PEER_ROTATION_CONFIG",
    "value": "{\"PROACTIVE\":{\"frequency\":0.7,\"DATA_QUANTITY\":{\"frequency\":0.25,\"random_set_length\":\"PEER_ROTATION_MORE_THAN_AVERAGE\"},\"POPULARITY\":{\"frequency\":0.25,\"random_set_length\":\"PEER_ROTATION_MORE_THAN_AVERAGE\"},\"RANDOM\":{\"frequency\":0.5}},\"REACTIVE\":{\"frequency\":0.3}}",
    "type": "object",
    "status": 1,
    "create_date": 1763389867
  }
]
```

**Documentation Notes:**

- Response structure provides detailed information about the requested resource.
- Check the response fields for specific data points relevant to your use case.

---

### 4.2 list_config_private

**Endpoint ID:** `CZOTAF5LfusB1Ht5`

**Method:** GET

**Description:** Returns private config values that are only available to the node operator

**Response Time:** 8ms

**Priority:** medium

**Example Request:**

```bash
curl -k "https://localhost:5500/api/1KeCkTz9V5YnVzXFgbhjXfQpdbugmcJ8aR/2bXBoj19oL3tYEXuv6PYiaoJmzqzT1ZAMxFjCAecua94iRakXrf2dwavvncdNgGjj7q5pZuiU5gMx3Z9HfgDgfxS/CZOTAF5LfusB1Ht5"
```

**Response:**

```json
[
  {
    "config_id": "wXIQ2FbhczIiiatN4gAI",
    "config_name": "MAX_STORAGE_RESERVED",
    "value": "1073741824",
    "type": "number",
    "status": 1,
    "create_date": 1763389867
  },
  {
    "config_id": "6ZySKdBR28SwzJBP4GrU",
    "config_name": "CHUNK_SIZE",
    "value": "50331648",
    "type": "number",
    "status": 1,
    "create_date": 1763389867
  },
  {
    "config_id": "QT1w70tajRDcdyyf6peX",
    "config_name": "JOB_CONFIG_PATH",
    "value": "/home/millixdev/millix/job.json",
    "type": "string",
    "status": 1,
    "create_date": 1763389867
  },
  {
    "config_id": "p5YfpXfIsSXdZND7I7UB",
    "config_name": "PEER_ROTATION_CONFIG",
    "value": "{\"PROACTIVE\":{\"frequency\":0.7,\"DATA_QUANTITY\":{\"frequency\":0.25,\"random_set_length\":\"PEER_ROTATION_MORE_THAN_AVERAGE\"},\"POPULARITY\":{\"frequency\":0.25,\"random_set_length\":\"PEER_ROTATION_MORE_THAN_AVERAGE\"},\"RANDOM\":{\"frequency\":0.5}},\"REACTIVE\":{\"frequency\":0.3}}",
    "type": "object",
    "status": 1,
    "create_date": 1763389867
  },
  {
    "config_id": "YcDB6kLdskR5cSmbc7oU",
    "config_name": "PEER_ROTATION_MORE_THAN_ALL",
    "value": "0.01",
    "type": "number",
    "status": 1,
    "create_date": 1763389867
  },
  {
    "config_id": "y5Jwm4xZjwodDVCG18Nv",
    "config_name": "PEER_ROTATION_MORE_THAN_MOST",
    "value": "0.2",
    "type": "number",
    "status": 1,
    "create_date": 1763389867
  },
  {
    "config_id": "obFLVO9lZ6EdhtgP06iG",
    "config_name": "PEER_ROTATION_MORE_THAN_AVERAGE",
    "value": "0.5",
    "type": "number",
    "status": 1,
    "create_date": 1763389867
  },
  {
    "config_id": "sewGQPSXePGKEDpJf36F",
    "config_name": "WALLET_LOG_SIZE_MAX",
    "value": "1000",
    "type": "number",
    "status": 1,
    "create_date": 1763389867
  },
  {
    "config_id": "Hrq79YxYtTuXmRJ0xenk",
    "config_name": "WALLET_STARTUP_ADDRESS_BALANCE_SCAN_COUNT",
    "value": "100",
    "type": "number",
    "status": 1,
    "create_date": 1763389867
  },
  {
    "config_id": "Ldao1glfobKDdTJsPyMt",
    "config_name": "WALLET_TRANSACTION_QUEUE_SIZE_NORMAL",
    "value": "250",
    "type": "number",
    "status": 1,
    "create_date": 1763389867
  }
]
```

**Documentation Notes:**

- Response structure provides detailed information about the requested resource.
- Check the response fields for specific data points relevant to your use case.

---

### 4.3 get_storage_config

**Endpoint ID:** `kIoe20LWh2aw3CAu`

**Method:** GET

**Description:** Returns storage related config

**Response Time:** 4ms

**Priority:** medium

**Example Request:**

```bash
curl -k "https://localhost:5500/api/1KeCkTz9V5YnVzXFgbhjXfQpdbugmcJ8aR/2bXBoj19oL3tYEXuv6PYiaoJmzqzT1ZAMxFjCAecua94iRakXrf2dwavvncdNgGjj7q5pZuiU5gMx3Z9HfgDgfxS/kIoe20LWh2aw3CAu"
```

**Response:**

```json
{
  "api_status": "success",
  "file_dir": "/home/millixdev/millix/storage/",
  "database_dir": "/home/millixdev/millix/"
}
```

**Documentation Notes:**

- Response structure provides detailed information about the requested resource.
- Check the response fields for specific data points relevant to your use case.

---

## 5. Shard

1 endpoint(s) in this category.

### 5.1 list_shard

**Endpoint ID:** `OMAlxmPq4rZs71K8`

**Method:** GET

**Description:** Returns records from table shard

**Response Time:** 7ms

**Priority:** high

**Example Request:**

```bash
curl -k "https://localhost:5500/api/1KeCkTz9V5YnVzXFgbhjXfQpdbugmcJ8aR/2bXBoj19oL3tYEXuv6PYiaoJmzqzT1ZAMxFjCAecua94iRakXrf2dwavvncdNgGjj7q5pZuiU5gMx3Z9HfgDgfxS/OMAlxmPq4rZs71K8"
```

**Response:**

```json
[
  {
    "shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
    "shard_name": "genesis",
    "shard_type": "protocol",
    "schema_name": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR.sqlite",
    "schema_path": "${private_field}",
    "is_required": 1,
    "record_count": 0,
    "disk_size": 0,
    "node_id_origin": "mzPPDwP9BJvHXyvdoBSJJsCQViRTtPbcqA",
    "shard_date": 1579648257,
    "node_signature": "66n8CxBweCDRZWdvrg9caX7ckCh3Bgz5eDsJQtKYDbgVSAnRZMHCp41dnD4P1gvc6fjocFRhxDDWwtNh8JtpDpbE",
    "update_date": 1763389866,
    "status": 1,
    "create_date": 1763389866
  }
]
```

**Documentation Notes:**

- Response structure provides detailed information about the requested resource.
- Check the response fields for specific data points relevant to your use case.

---

## 6. Address

5 endpoint(s) in this category.

### 6.1 list_address

**Endpoint ID:** `72dlrjquBORj0rhx`

**Method:** GET

**Description:** Returns records from table address

**Response Time:** 11ms

**Priority:** high

**Example Request:**

```bash
curl -k "https://localhost:5500/api/1KeCkTz9V5YnVzXFgbhjXfQpdbugmcJ8aR/2bXBoj19oL3tYEXuv6PYiaoJmzqzT1ZAMxFjCAecua94iRakXrf2dwavvncdNgGjj7q5pZuiU5gMx3Z9HfgDgfxS/72dlrjquBORj0rhx"
```

**Response:**

```json
[
  {
    "address": "1KSppkMnijnrgYbfXYdVKRnbUVsNDzsB5V0a01KSppkMnijnrgYbfXYdVKRnbUVsNDzsB5V",
    "address_base": "1KSppkMnijnrgYbfXYdVKRnbUVsNDzsB5V",
    "address_version": "0a0",
    "address_key_identifier": "1KSppkMnijnrgYbfXYdVKRnbUVsNDzsB5V",
    "status": 1,
    "create_date": 1763392159
  },
  {
    "address": "19MGxGgnVeJoNnvABueJ3YLh8oHsemPmBv0a019MGxGgnVeJoNnvABueJ3YLh8oHsemPmBv",
    "address_base": "19MGxGgnVeJoNnvABueJ3YLh8oHsemPmBv",
    "address_version": "0a0",
    "address_key_identifier": "19MGxGgnVeJoNnvABueJ3YLh8oHsemPmBv",
    "status": 1,
    "create_date": 1763391837
  },
  {
    "address": "15vsfq7FrVoEtwQAkyzH74J8wMsE5A5LWf0a015vsfq7FrVoEtwQAkyzH74J8wMsE5A5LWf",
    "address_base": "15vsfq7FrVoEtwQAkyzH74J8wMsE5A5LWf",
    "address_version": "0a0",
    "address_key_identifier": "15vsfq7FrVoEtwQAkyzH74J8wMsE5A5LWf",
    "status": 1,
    "create_date": 1763391829
  },
  {
    "address": "1GJFd1CMKhiDG5Cz6JAuY2AEasHuTrbuui0a01GJFd1CMKhiDG5Cz6JAuY2AEasHuTrbuui",
    "address_base": "1GJFd1CMKhiDG5Cz6JAuY2AEasHuTrbuui",
    "address_version": "0a0",
    "address_key_identifier": "1GJFd1CMKhiDG5Cz6JAuY2AEasHuTrbuui",
    "status": 1,
    "create_date": 1763391818
  },
  {
    "address": "145HkhnJA1Lxfta98XMXRVd3yGNuCS5YMy0a0145HkhnJA1Lxfta98XMXRVd3yGNuCS5YMy",
    "address_base": "145HkhnJA1Lxfta98XMXRVd3yGNuCS5YMy",
    "address_version": "0a0",
    "address_key_identifier": "145HkhnJA1Lxfta98XMXRVd3yGNuCS5YMy",
    "status": 1,
    "create_date": 1763391768
  },
  {
    "address": "1NfQZaoprFVGPs31CJqqBQ7wLSnVdjRPAz0a01NfQZaoprFVGPs31CJqqBQ7wLSnVdjRPAz",
    "address_base": "1NfQZaoprFVGPs31CJqqBQ7wLSnVdjRPAz",
    "address_version": "0a0",
    "address_key_identifier": "1NfQZaoprFVGPs31CJqqBQ7wLSnVdjRPAz",
    "status": 1,
    "create_date": 1763391709,
    "address_attribute": {
      "key_public": "24DzUkR3Lv1eLDVXZvEW93uZbx824GAi6rDb45U3qfkGp"
    }
  },
  {
    "address": "1FbGRGeKHYbVbxRHrFiJaqeSuoat18WKon0a01FbGRGeKHYbVbxRHrFiJaqeSuoat18WKon",
    "address_base": "1FbGRGeKHYbVbxRHrFiJaqeSuoat18WKon",
    "address_version": "0a0",
    "address_key_identifier": "1FbGRGeKHYbVbxRHrFiJaqeSuoat18WKon",
    "status": 1,
    "create_date": 1763391701
  },
  {
    "address": "1NtWz3vrEJEi7XAMzQUX72U16VbDbAsU7M0a01NtWz3vrEJEi7XAMzQUX72U16VbDbAsU7M",
    "address_base": "1NtWz3vrEJEi7XAMzQUX72U16VbDbAsU7M",
    "address_version": "0a0",
    "address_key_identifier": "1NtWz3vrEJEi7XAMzQUX72U16VbDbAsU7M",
    "status": 1,
    "create_date": 1763391688
  },
  {
    "address": "1EbPs3xwd17CQxmHLhhfu5T7ZVR78xjfLY0a01EbPs3xwd17CQxmHLhhfu5T7ZVR78xjfLY",
    "address_base": "1EbPs3xwd17CQxmHLhhfu5T7ZVR78xjfLY",
    "address_version": "0a0",
    "address_key_identifier": "1EbPs3xwd17CQxmHLhhfu5T7ZVR78xjfLY",
    "status": 1,
    "create_date": 1763391516
  },
  {
    "address": "15ytRcEKuC7YLHdB5PQ1FLDktbdyi3DQb30a015ytRcEKuC7YLHdB5PQ1FLDktbdyi3DQb3",
    "address_base": "15ytRcEKuC7YLHdB5PQ1FLDktbdyi3DQb3",
    "address_version": "0a0",
    "address_key_identifier": "15ytRcEKuC7YLHdB5PQ1FLDktbdyi3DQb3",
    "status": 1,
    "create_date": 1763391452
  }
]
```

**Documentation Notes:**

- Manages and queries address information.
- Addresses are the primary identifiers for wallets and transactions.

---

### 6.2 list_address_version

**Endpoint ID:** `3XqkzNFzaTk1JPRf`

**Method:** GET

**Description:** Return records from table address_version

**Response Time:** 7ms

**Priority:** high

**Example Request:**

```bash
curl -k "https://localhost:5500/api/1KeCkTz9V5YnVzXFgbhjXfQpdbugmcJ8aR/2bXBoj19oL3tYEXuv6PYiaoJmzqzT1ZAMxFjCAecua94iRakXrf2dwavvncdNgGjj7q5pZuiU5gMx3Z9HfgDgfxS/3XqkzNFzaTk1JPRf"
```

**Response:**

```json
[
  {
    "version": "0a0",
    "is_main_network": 1,
    "regex_pattern": "(?<address>.*)(?<version>0a0)(?<identifier>.*)",
    "is_default": 1,
    "status": 1,
    "create_date": 1763389866
  },
  {
    "version": "0b0",
    "is_main_network": 1,
    "regex_pattern": "(?<address>.*)(?<version>0b0)(?<identifier>.*)",
    "is_default": 0,
    "status": 1,
    "create_date": 1763389866
  },
  {
    "version": "0c0",
    "is_main_network": 1,
    "regex_pattern": "(?<address>.*)(?<version>0c0)(?<identifier>.*)",
    "is_default": 0,
    "status": 1,
    "create_date": 1763389866
  },
  {
    "version": "lal",
    "is_main_network": 0,
    "regex_pattern": "(?<address>.*)(?<version>lal)(?<identifier>.*)",
    "is_default": 1,
    "status": 1,
    "create_date": 1763389866
  },
  {
    "version": "la0l",
    "is_main_network": 0,
    "regex_pattern": "(?<address>.*)(?<version>la0l)(?<identifier>.*)",
    "is_default": 1,
    "status": 1,
    "create_date": 1763389866
  },
  {
    "version": "lb0l",
    "is_main_network": 0,
    "regex_pattern": "(?<address>.*)(?<version>lb0l)(?<identifier>.*)",
    "is_default": 0,
    "status": 1,
    "create_date": 1763389866
  },
  {
    "version": "lcl",
    "is_main_network": 0,
    "regex_pattern": "(?<address>.*)(?<version>lcl)(?<identifier>.*)",
    "is_default": 0,
    "status": 1,
    "create_date": 1763389866
  },
  {
    "version": "0d0",
    "is_main_network": 1,
    "regex_pattern": "(?<address>.*)(?<version>0d0)(?<identifier>.*)",
    "is_default": 0,
    "status": 1,
    "create_date": 1763389866
  },
  {
    "version": "ldl",
    "is_main_network": 0,
    "regex_pattern": "(?<address>.*)(?<version>ldl)(?<identifier>.*)",
    "is_default": 0,
    "status": 1,
    "create_date": 1763389866
  }
]
```

**Documentation Notes:**

- Manages and queries address information.
- Addresses are the primary identifiers for wallets and transactions.

---

### 6.3 get_address_balance

**Endpoint ID:** `zLsiAkocn90e3K6R`

**Method:** GET

**Description:** Returns the available (stable) balance and pending (unstable) balance of an address

**Response Time:** 8ms

**Priority:** high

**Example Request:**

```bash
curl -k "https://localhost:5500/api/1KeCkTz9V5YnVzXFgbhjXfQpdbugmcJ8aR/2bXBoj19oL3tYEXuv6PYiaoJmzqzT1ZAMxFjCAecua94iRakXrf2dwavvncdNgGjj7q5pZuiU5gMx3Z9HfgDgfxS/zLsiAkocn90e3K6R"
```

**Response:**

```json
{
  "stable": 0,
  "unstable": 0
}
```

**Documentation Notes:**

- Manages and queries address information.
- Addresses are the primary identifiers for wallets and transactions.

---

### 6.4 verify_address

**Endpoint ID:** `Xim7SaikcsHICvfQ`

**Method:** GET

**Description:** Verifies if an address is valid

**Response Time:** 4ms

**Priority:** medium

**Example Request:**

```bash
curl -k "https://localhost:5500/api/1KeCkTz9V5YnVzXFgbhjXfQpdbugmcJ8aR/2bXBoj19oL3tYEXuv6PYiaoJmzqzT1ZAMxFjCAecua94iRakXrf2dwavvncdNgGjj7q5pZuiU5gMx3Z9HfgDgfxS/Xim7SaikcsHICvfQ"
```

**Response:**

```json
{
  "api_status": "fail",
  "api_message": "unexpected generic api error: (Error: address version not supported [object Object])"
}
```

**Documentation Notes:**

- Manages and queries address information.
- Addresses are the primary identifiers for wallets and transactions.

---

### 6.5 get_known_address_balance

**Endpoint ID:** `xGaf7vbfY15TGsSd`

**Method:** GET

**Description:** Returns the balance of all known addresses

**Response Time:** 11ms

**Priority:** medium

**Example Request:**

```bash
curl -k "https://localhost:5500/api/1KeCkTz9V5YnVzXFgbhjXfQpdbugmcJ8aR/2bXBoj19oL3tYEXuv6PYiaoJmzqzT1ZAMxFjCAecua94iRakXrf2dwavvncdNgGjj7q5pZuiU5gMx3Z9HfgDgfxS/xGaf7vbfY15TGsSd"
```

**Response:**

```json
[
  {
    "address": "12PbyWn24GHQ8fdoEAvKNU6Y37WvgajatF0a012PbyWn24GHQ8fdoEAvKNU6Y37WvgajatF",
    "balance_stable": 1000,
    "balance_pending": 0
  },
  {
    "address": "12qmDo4KSUikaA453pyMjNvNWGq9pur4pX0a012qmDo4KSUikaA453pyMjNvNWGq9pur4pX",
    "balance_stable": 1000,
    "balance_pending": 72259
  },
  {
    "address": "12zHHJfYMqaTCgiCohm8HYW9tJ6tatLHft0a012zHHJfYMqaTCgiCohm8HYW9tJ6tatLHft",
    "balance_stable": 1265000,
    "balance_pending": 1000
  },
  {
    "address": "145HkhnJA1Lxfta98XMXRVd3yGNuCS5YMy0a0145HkhnJA1Lxfta98XMXRVd3yGNuCS5YMy",
    "balance_stable": 4000,
    "balance_pending": 0
  },
  {
    "address": "14mBrDhtncUxP9NNVGCcjA36bCL3vYuUUr0a014mBrDhtncUxP9NNVGCcjA36bCL3vYuUUr",
    "balance_stable": 321853,
    "balance_pending": 327853
  },
  {
    "address": "15kJKe7e56unhZfyVJhTHhczzrNLjxjYbn0a015kJKe7e56unhZfyVJhTHhczzrNLjxjYbn",
    "balance_stable": 93431000,
    "balance_pending": 196013650
  },
  {
    "address": "15vsfq7FrVoEtwQAkyzH74J8wMsE5A5LWf0a015vsfq7FrVoEtwQAkyzH74J8wMsE5A5LWf",
    "balance_stable": 1000,
    "balance_pending": 0
  },
  {
    "address": "15ytRcEKuC7YLHdB5PQ1FLDktbdyi3DQb30a015ytRcEKuC7YLHdB5PQ1FLDktbdyi3DQb3",
    "balance_stable": 1000,
    "balance_pending": 0
  },
  {
    "address": "165BNB24Hckhsos1bufYyD2FkTYgA7BURx0a0165BNB24Hckhsos1bufYyD2FkTYgA7BURx",
    "balance_stable": 1000,
    "balance_pending": 0
  },
  {
    "address": "16CF5nEez3onJv1UpDYr5iS4eFNZunYvkJ0a016CF5nEez3onJv1UpDYr5iS4eFNZunYvkJ",
    "balance_stable": 14000,
    "balance_pending": 0
  },
  {
    "address": "16KhyjcHv35DmryrGm3gmRb4TyaiXx3tCW0a016KhyjcHv35DmryrGm3gmRb4TyaiXx3tCW",
    "balance_stable": 15000,
    "balance_pending": 1000
  },
  {
    "address": "16UH2JKrGt7tcqpgbnyyJcVCXMmbuSMXuF0a016UH2JKrGt7tcqpgbnyyJcVCXMmbuSMXuF",
    "balance_stable": 16000,
    "balance_pending": 1000
  },
  {
    "address": "16VPKs4eqFv8WbG2QTWamc2aHdkFvsbUvc0a016VPKs4eqFv8WbG2QTWamc2aHdkFvsbUvc",
    "balance_stable": 1499000,
    "balance_pending": 0
  },
  {
    "address": "16bNpZWRav5SamehkcoEMNxsiX8b5ZBdkb0a016bNpZWRav5SamehkcoEMNxsiX8b5ZBdkb",
    "balance_stable": 136765,
    "balance_pending": 0
  },
  {
    "address": "171sWWWfPAWVUUPbziNhvFUcuDfSMoGHev0a0171sWWWfPAWVUUPbziNhvFUcuDfSMoGHev",
    "balance_stable": 15000,
    "balance_pending": 1000
  },
  {
    "address": "18G6oLKZaMF8mEvZMNLgwi1xfPBeWFZujn0a018G6oLKZaMF8mEvZMNLgwi1xfPBeWFZujn",
    "balance_stable": 206000,
    "balance_pending": 1000
  },
  {
    "address": "18asacpbVrehoFVzxpJQwqvbDDMnxTvQKP0a018asacpbVrehoFVzxpJQwqvbDDMnxTvQKP",
    "balance_stable": 15000,
    "balance_pending": 2000
  },
  {
    "address": "18evg2h4DNznwxo5pbgqv1Lb8HWdkr2zXW0a018evg2h4DNznwxo5pbgqv1Lb8HWdkr2zXW",
    "balance_stable": 15000,
    "balance_pending": 1000
  },
  {
    "address": "195rDDqTXtX7V2VgpMwNHLf5yVWt2t6wbQ0a0195rDDqTXtX7V2VgpMwNHLf5yVWt2t6wbQ",
    "balance_stable": 17306347,
    "balance_pending": 0
  },
  {
    "address": "19LHR4ovEVLezHnUFZW2P9ncUop3zrE2sn0a019LHR4ovEVLezHnUFZW2P9ncUop3zrE2sn",
    "balance_stable": 16000,
    "balance_pending": 1000
  },
  {
    "address": "19MGxGgnVeJoNnvABueJ3YLh8oHsemPmBv0a019MGxGgnVeJoNnvABueJ3YLh8oHsemPmBv",
    "balance_stable": 1000,
    "balance_pending": 0
  },
  {
    "address": "19tjBHoZXppYqmGkKKL2JWwwtWDnmdU2PP0a019tjBHoZXppYqmGkKKL2JWwwtWDnmdU2PP",
    "balance_stable": 233111,
    "balance_pending": 2000
  },
  {
    "address": "1A2C8dyAt33gmpqqKcznb7CmNYSo5iUxFd0a01A2C8dyAt33gmpqqKcznb7CmNYSo5iUxFd",
    "balance_stable": 16000,
    "balance_pending": 1000
  },
  {
    "address": "1AQz9vrLV83VnD9dhHaqpFpK6MVK7DV5ix0a01AQz9vrLV83VnD9dhHaqpFpK6MVK7DV5ix",
    "balance_stable": 1000,
    "balance_pending": 0
  },
  {
    "address": "1Aznn1eNCpwTwLFQAWNYHSuWxBGyEWmixC0a01Aznn1eNCpwTwLFQAWNYHSuWxBGyEWmixC",
    "balance_stable": 7000,
    "balance_pending": 1000
  },
  {
    "address": "1BXCJWQEcjJEdExQkToCCNL2wTjVq8yUya0a01BXCJWQEcjJEdExQkToCCNL2wTjVq8yUya",
    "balance_stable": 1000,
    "balance_pending": 0
  },
  {
    "address": "1CJ93qyZ13W9xZt87eQxJZAd5su5APXp1T0a01CJ93qyZ13W9xZt87eQxJZAd5su5APXp1T",
    "balance_stable": 92210203,
    "balance_pending": 1000
  },
  {
    "address": "1CU6bFwVqtjoex3JTk3MxmtymeVSVJJ5Rr0a01CU6bFwVqtjoex3JTk3MxmtymeVSVJJ5Rr",
    "balance_stable": 17000,
    "balance_pending": 1000
  },
  {
    "address": "1CVyVeJFv5befsJAodkHGZgLCgYRBq7htz0a01CVyVeJFv5befsJAodkHGZgLCgYRBq7htz",
    "balance_stable": 142078097,
    "balance_pending": 0
  },
  {
    "address": "1CbPu4NE55SkLH2ZnfUbyrjkDEZPco9c420a01CbPu4NE55SkLH2ZnfUbyrjkDEZPco9c42",
    "balance_stable": 68211,
    "balance_pending": 0
  },
  {
    "address": "1CsjENLrBcfbq445rK9q8vPX3M9sFtE6Fg0a01CsjENLrBcfbq445rK9q8vPX3M9sFtE6Fg",
    "balance_stable": 77900,
    "balance_pending": 1000
  },
  {
    "address": "1Cv7Dc8E1AWGnv8YJRoPBYrq1BySgnMMCL0a01Cv7Dc8E1AWGnv8YJRoPBYrq1BySgnMMCL",
    "balance_stable": 15000,
    "balance_pending": 1000
  },
  {
    "address": "1D4wJZR7xfXEh8hxFX8zgGiBVbN2tj7xL30a01D4wJZR7xfXEh8hxFX8zgGiBVbN2tj7xL3",
    "balance_stable": 89000,
    "balance_pending": 1000
  },
  {
    "address": "1DG9Y3uC17CVJiVxbT9gqmmQ92C9PUVQxi0a015WcdWwYqGyRGdp3BmWc7rEyADG1h8UQot",
    "balance_stable": 3600,
    "balance_pending": 0
  },
  {
    "address": "1Db8hoefCudeWYGcUCGz61UhYYULm8dvD50a01Db8hoefCudeWYGcUCGz61UhYYULm8dvD5",
    "balance_stable": 52209,
    "balance_pending": 0
  },
  {
    "address": "1DtXYXiSN2Vt23sZhki11w7uNnumWyBtmj0a01DtXYXiSN2Vt23sZhki11w7uNnumWyBtmj",
    "balance_stable": 234922776,
    "balance_pending": 0
  },
  {
    "address": "1E2KkjE9tV8RaTdTYLeBaw2cRg3Laads2N0a01E2KkjE9tV8RaTdTYLeBaw2cRg3Laads2N",
    "balance_stable": 1781401,
    "balance_pending": 0
  },
  {
    "address": "1E5JbCgRoavmaaz42BwZpyrsWqZy9uBo6R0a01E5JbCgRoavmaaz42BwZpyrsWqZy9uBo6R",
    "balance_stable": 16000,
    "balance_pending": 1033735
  },
  {
    "address": "1EB7RYuuWKhDn5x5xGbESvT91jcnL57hAz0a01EB7RYuuWKhDn5x5xGbESvT91jcnL57hAz",
    "balance_stable": 266000,
    "balance_pending": 1000
  },
  {
    "address": "1EBdX2X8RWtBNtg5xewBSPZQNqwR3t3uMN0a01EBdX2X8RWtBNtg5xewBSPZQNqwR3t3uMN",
    "balance_stable": 245144,
    "balance_pending": 1000
  },
  {
    "address": "1EZ5ppshMF76x8eBBdjFoccVgbti8oaZys0a01EZ5ppshMF76x8eBBdjFoccVgbti8oaZys",
    "balance_stable": 18000,
    "balance_pending": 1000
  },
  {
    "address": "1EbPs3xwd17CQxmHLhhfu5T7ZVR78xjfLY0a01EbPs3xwd17CQxmHLhhfu5T7ZVR78xjfLY",
    "balance_stable": 1000,
    "balance_pending": 0
  },
  {
    "address": "1EoCSMssA3MfuoJABJC47rWKH6snnHoqpi0a01EoCSMssA3MfuoJABJC47rWKH6snnHoqpi",
    "balance_stable": 16000,
    "balance_pending": 1000
  },
  {
    "address": "1Ev7YPuKmDAExq1CaRrEd1CCzTYwfb6R7M0a01Ev7YPuKmDAExq1CaRrEd1CCzTYwfb6R7M",
    "balance_stable": 830133,
    "balance_pending": 1000
  },
  {
    "address": "1F82dLb58YJtHExEuLsXHdSZLpavNH5d3x0a01F82dLb58YJtHExEuLsXHdSZLpavNH5d3x",
    "balance_stable": 2000,
    "balance_pending": 0
  },
  {
    "address": "1FbGRGeKHYbVbxRHrFiJaqeSuoat18WKon0a01FbGRGeKHYbVbxRHrFiJaqeSuoat18WKon",
    "balance_stable": 1000,
    "balance_pending": 0
  },
  {
    "address": "1FmrUhZ9CdaJwcLq22AVdrYd6AFDGAurTm0a01FmrUhZ9CdaJwcLq22AVdrYd6AFDGAurTm",
    "balance_stable": 2000,
    "balance_pending": 0
  },
  {
    "address": "1G5NCwiTXwDpP9UEMyEwFuQvkjXp87q7GJ0a01G5NCwiTXwDpP9UEMyEwFuQvkjXp87q7GJ",
    "balance_stable": 1000,
    "balance_pending": 0
  },
  {
    "address": "1G9zCSA8mGjeYZjCkcikGfSsS7gFZYHt9n0a01G9zCSA8mGjeYZjCkcikGfSsS7gFZYHt9n",
    "balance_stable": 17000,
    "balance_pending": 1000
  },
  {
    "address": "1GJFd1CMKhiDG5Cz6JAuY2AEasHuTrbuui0a01GJFd1CMKhiDG5Cz6JAuY2AEasHuTrbuui",
    "balance_stable": 1000,
    "balance_pending": 0
  },
  {
    "address": "1GNhcioX2E2d2pSxu1Du6iJj4F55Bbo9iy0a01GNhcioX2E2d2pSxu1Du6iJj4F55Bbo9iy",
    "balance_stable": 15000,
    "balance_pending": 1000
  },
  {
    "address": "1JBG9Nhu2ZBSWA2A4aUyjfDiM1LBsVNEb0a01JBG9Nhu2ZBSWA2A4aUyjfDiM1LBsVNEb",
    "balance_stable": 3000,
    "balance_pending": 0
  },
  {
    "address": "1JC7eqVB7rqtYos5ZDaX8jrMDtouMGTNka0a01JC7eqVB7rqtYos5ZDaX8jrMDtouMGTNka",
    "balance_stable": 25524020,
    "balance_pending": 1000
  },
  {
    "address": "1JDDYNuPyGMnRqbmqnScVvMnFptFXfRQJC0a01JDDYNuPyGMnRqbmqnScVvMnFptFXfRQJC",
    "balance_stable": 26917,
    "balance_pending": 1000
  },
  {
    "address": "1JfmwAznvqUeQ2XDnp2Wxr9W71GLwbaTHj0a01JfmwAznvqUeQ2XDnp2Wxr9W71GLwbaTHj",
    "balance_stable": 1000,
    "balance_pending": 0
  },
  {
    "address": "1JgzFou3scBZARxKadrKfntfE8vUokrju70a01JgzFou3scBZARxKadrKfntfE8vUokrju7",
    "balance_stable": 3798660,
    "balance_pending": 0
  },
  {
    "address": "1JpL8jdtyFywJ2hijzFHZRYko9cUY3U3KV0a01JpL8jdtyFywJ2hijzFHZRYko9cUY3U3KV",
    "balance_stable": 1459000,
    "balance_pending": 1000
  },
  {
    "address": "1K7HYz1nQZaRvWADRp47Nm29Mhhhsyr9mV0a01K7HYz1nQZaRvWADRp47Nm29Mhhhsyr9mV",
    "balance_stable": 15000,
    "balance_pending": 1000
  },
  {
    "address": "1MYb2NGUDkfS3fTCw61bGq3VLLkoQbkJrw0a01MYb2NGUDkfS3fTCw61bGq3VLLkoQbkJrw",
    "balance_stable": 5000,
    "balance_pending": 0
  },
  {
    "address": "1Msk7Gxf37jXm8bDK7edz4HDeeXaFE4XEf0a01Msk7Gxf37jXm8bDK7edz4HDeeXaFE4XEf",
    "balance_stable": 1000,
    "balance_pending": 0
  },
  {
    "address": "1NfQZaoprFVGPs31CJqqBQ7wLSnVdjRPAz0a01NfQZaoprFVGPs31CJqqBQ7wLSnVdjRPAz",
    "balance_stable": 46000,
    "balance_pending": 0
  },
  {
    "address": "1Nm2a7UthKPh8iqrmghJWzqJTGUvfrAPyV0a01Nm2a7UthKPh8iqrmghJWzqJTGUvfrAPyV",
    "balance_stable": 517870277,
    "balance_pending": 0
  },
  {
    "address": "1NtWz3vrEJEi7XAMzQUX72U16VbDbAsU7M0a01NtWz3vrEJEi7XAMzQUX72U16VbDbAsU7M",
    "balance_stable": 2000,
    "balance_pending": 1000
  },
  {
    "address": "1PChCv2JM7e3dyLgBbb2w3kLJu2nk1X5TU0a01PChCv2JM7e3dyLgBbb2w3kLJu2nk1X5TU",
    "balance_stable": 18000,
    "balance_pending": 1000
  },
  {
    "address": "1PDid5XN4zfRpJ6mMPBrSv2phJkefRsAqj0a01PDid5XN4zfRpJ6mMPBrSv2phJkefRsAqj",
    "balance_stable": 1922,
    "balance_pending": 0
  },
  {
    "address": "1buLCmmS4tSxxSYqdLNogc7vobK2TTZFh0a01buLCmmS4tSxxSYqdLNogc7vobK2TTZFh",
    "balance_stable": 235000,
    "balance_pending": 1000
  },
  {
    "address": "19wUsqMwwevF9sRw48g2aFEJDvA17PZeBZ0a015WcdWwYqGyRGdp3BmWc7rEyADG1h8UQot",
    "balance_stable": 0,
    "balance_pending": 159000
  },
  {
    "address": "1DgpQoTeJ2SoUn2Sfsk9LEou5VPghYzSoG0a01DgpQoTeJ2SoUn2Sfsk9LEou5VPghYzSoG",
    "balance_stable": 0,
    "balance_pending": 34293000
  },
  {
    "address": "1KSppkMnijnrgYbfXYdVKRnbUVsNDzsB5V0a01KSppkMnijnrgYbfXYdVKRnbUVsNDzsB5V",
    "balance_stable": 0,
    "balance_pending": 1000
  }
]
```

**Documentation Notes:**

- Manages and queries address information.
- Addresses are the primary identifiers for wallets and transactions.

---

## 7. Transaction

6 endpoint(s) in this category.

### 7.1 list_transaction

**Endpoint ID:** `l4kaEhMnhjB5yseq`

**Method:** GET

**Description:** Returns a list of transaction records from table transaction

**Response Time:** 5ms

**Priority:** high

**Example Request:**

```bash
curl -k "https://localhost:5500/api/1KeCkTz9V5YnVzXFgbhjXfQpdbugmcJ8aR/2bXBoj19oL3tYEXuv6PYiaoJmzqzT1ZAMxFjCAecua94iRakXrf2dwavvncdNgGjj7q5pZuiU5gMx3Z9HfgDgfxS/l4kaEhMnhjB5yseq"
```

**Response:**

```json
[
  {
    "transaction_id": "fNfSucakJArTvfXBBTk4GB4wLdUnAqyvGT2y24kWqWaZjX4Mg",
    "shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
    "transaction_date": 1763392175,
    "node_id_origin": "1MuPNGVsSoY499btZScTZSF2xYQAN3gsmJ",
    "node_id_proxy": "1Em3Mu6Hp3CLuV6dyucEfUyqdRJwyoyAKu",
    "version": "0b20",
    "payload_hash": "2T7iRtgzoA4KQf5JGJhmgfF7hf9HHSy4JaQjYJqKYMsPm244t7",
    "stable_date": null,
    "is_stable": 0,
    "parent_date": null,
    "is_parent": 0,
    "timeout_date": null,
    "is_timeout": 0,
    "status": 1,
    "create_date": 1763392177
  },
  {
    "transaction_id": "jgMbHhGzE95SLYnwJVEpXcjobQkaK92cB797AVj6YudeekvC4",
    "shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
    "transaction_date": 1763392175,
    "node_id_origin": "1MuPNGVsSoY499btZScTZSF2xYQAN3gsmJ",
    "node_id_proxy": "1Em3Mu6Hp3CLuV6dyucEfUyqdRJwyoyAKu",
    "version": "0a20",
    "payload_hash": "eWBcWWsa9aB7xpSNAoKhERSE8dw2jTbgpfvY1bEdcE1AFLyjy",
    "stable_date": null,
    "is_stable": 0,
    "parent_date": null,
    "is_parent": 0,
    "timeout_date": null,
    "is_timeout": 0,
    "status": 1,
    "create_date": 1763392176
  },
  {
    "transaction_id": "2ZEmvAqbn6A9HZBW8ndCKcqYeJeKf5K5KYm1nXwUo6m1w1GQYs",
    "shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
    "transaction_date": 1763392166,
    "node_id_origin": "1CRJ4hDTXo8V47nwPnCY9EXWXyjEkJEGdD",
    "node_id_proxy": "1J66635ttXm3NsyVjptXCTXWmx8b4hTjJ5",
    "version": "0a20",
    "payload_hash": "TRmFPndFPGN4LbAeVz6KVusQFSrLke8zZSu4g8KLLtsqp7oNn",
    "stable_date": null,
    "is_stable": 0,
    "parent_date": 1763392175,
    "is_parent": 1,
    "timeout_date": null,
    "is_timeout": 0,
    "status": 1,
    "create_date": 1763392167
  },
  {
    "transaction_id": "2UqCbbSogm8Cau36JEbDTA1AaKNbBpHjeq23zQB8dcEFoES13b",
    "shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
    "transaction_date": 1763392163,
    "node_id_origin": "1JVpz9EiR7d5WpHPCDGwXA8R4Rmuqy9RBU",
    "node_id_proxy": "1eETJK6dExShJpNd2f1L7qvYJpzpu619T",
    "version": "0a20",
    "payload_hash": "nYKHY4HNVQVjjMjRaovyspKnXjB5pkKMna2QeHdhj5EGwcwQh",
    "stable_date": null,
    "is_stable": 0,
    "parent_date": 1763392166,
    "is_parent": 1,
    "timeout_date": null,
    "is_timeout": 0,
    "status": 1,
    "create_date": 1763392165
  },
  {
    "transaction_id": "QWquwBKe39URNLXu7Z4bpESuco5M1jycvbnkMpo2jcjMKuWNB",
    "shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
    "transaction_date": 1763392158,
    "node_id_origin": "1AQ9C3GM9QNS2SZKrq1FadzfyR4BwqpSrA",
    "node_id_proxy": "14e4Wd8whLQP1ivUrESS2nhcA25iuFvryU",
    "version": "0a20",
    "payload_hash": "hnoGKiKqMJCSZtpK5Tmc1aqYQ8vxUtHVB1ANWGFh9wHvRz1tm",
    "stable_date": null,
    "is_stable": 0,
    "parent_date": 1763392163,
    "is_parent": 1,
    "timeout_date": null,
    "is_timeout": 0,
    "status": 1,
    "create_date": 1763392158
  },
  {
    "transaction_id": "kp3EUjcXcXWVtTFkJoYFE9zG68uktBtqf65sEvwE5BsSMneST",
    "shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
    "transaction_date": 1763392127,
    "node_id_origin": "1NhSkZPwQEqFA2AkPjG69iWCgoiJmyBs6z",
    "node_id_proxy": "1LKasazNiLuTV724K9ojbcdQEugBVe6XXf",
    "version": "0a20",
    "payload_hash": "sLLzcpNexapJqKGcYHH5mbpmzXLev74Z9yHN87H8Y2gjCtPoT",
    "stable_date": 1763392180,
    "is_stable": 1,
    "parent_date": 1763392158,
    "is_parent": 1,
    "timeout_date": null,
    "is_timeout": 0,
    "status": 1,
    "create_date": 1763392128
  },
  {
    "transaction_id": "2J2GkMe8vFC2oZ88cm1yzGKQ3pHYXLMyjGp1P8sCS8WMdwMC9R",
    "shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
    "transaction_date": 1763392117,
    "node_id_origin": "14e4Wd8whLQP1ivUrESS2nhcA25iuFvryU",
    "node_id_proxy": "1F4TrnUMfTdgFvMrGzKJurpxZm8rHxD24A",
    "version": "0a20",
    "payload_hash": "2Jzp9NRYaDZjyoQUcWKyoeJdaot853LN6qUeQzT7qrmRdMdvcQ",
    "stable_date": 1763392162,
    "is_stable": 1,
    "parent_date": 1763392127,
    "is_parent": 1,
    "timeout_date": null,
    "is_timeout": 0,
    "status": 1,
    "create_date": 1763392116
  },
  {
    "transaction_id": "pEYJGMoE1kSsuKrPWzVKjSpywHvjJHhUw4DySJHWzmNjohNbw",
    "shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
    "transaction_date": 1763392117,
    "node_id_origin": "14e4Wd8whLQP1ivUrESS2nhcA25iuFvryU",
    "node_id_proxy": "1F4TrnUMfTdgFvMrGzKJurpxZm8rHxD24A",
    "version": "0b20",
    "payload_hash": "wWSJCQp8VhrY4YLBRWydvKeFQZiSHGzowL3ZAh4MYyeYrvSm3",
    "stable_date": 1763392173,
    "is_stable": 1,
    "parent_date": 1763392127,
    "is_parent": 1,
    "timeout_date": null,
    "is_timeout": 0,
    "status": 1,
    "create_date": 1763392116
  },
  {
    "transaction_id": "urUWqsaTD2hzzWW8AfBFkVoJtFGUujPk8sTDtDWacsARXENfR",
    "shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
    "transaction_date": 1763392108,
    "node_id_origin": "1AQ9C3GM9QNS2SZKrq1FadzfyR4BwqpSrA",
    "node_id_proxy": "16dKKejGGR3n11CheAj1JbQttoqzhNVxYB",
    "version": "0a20",
    "payload_hash": "29AwT8VV7cQBcSKxzNKxtyXBksvWSrHhh4EwkWKRar1wFX7jaz",
    "stable_date": 1763392158,
    "is_stable": 1,
    "parent_date": 1763392117,
    "is_parent": 1,
    "timeout_date": null,
    "is_timeout": 0,
    "status": 1,
    "create_date": 1763392108
  },
  {
    "transaction_id": "2cx9FFxEKeHdjSxS3JmFJjKteacSkoNnpKqmA37omoQai8s9sC",
    "shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
    "transaction_date": 1763392094,
    "node_id_origin": "1JVpz9EiR7d5WpHPCDGwXA8R4Rmuqy9RBU",
    "node_id_proxy": "1651Q93U8rkWC86htKb1hitcKdRy5r2CDy",
    "version": "0a20",
    "payload_hash": "2UvfQnKnRJHwG8gWHQw5M2chJEQrbrLViin8KsqNH47Px7N7eS",
    "stable_date": 1763392173,
    "is_stable": 1,
    "parent_date": 1763392108,
    "is_parent": 1,
    "timeout_date": null,
    "is_timeout": 0,
    "status": 1,
    "create_date": 1763392094
  }
]
```

**Documentation Notes:**

- Transaction endpoints provide access to the DAG transaction history.
- Essential for building wallets, explorers, and transaction tracking.
- `is_stable` indicates if transaction has reached consensus.
- `is_parent` indicates if transaction has child transactions.
- `shard_id` identifies which shard the transaction belongs to.

---

### 7.2 list_transaction_output

**Endpoint ID:** `FDLyQ5uo5t7jltiQ`

**Method:** GET

**Description:** Returns records from table transaction_output

**Response Time:** 10ms

**Priority:** high

**Example Request:**

```bash
curl -k "https://localhost:5500/api/1KeCkTz9V5YnVzXFgbhjXfQpdbugmcJ8aR/2bXBoj19oL3tYEXuv6PYiaoJmzqzT1ZAMxFjCAecua94iRakXrf2dwavvncdNgGjj7q5pZuiU5gMx3Z9HfgDgfxS/FDLyQ5uo5t7jltiQ"
```

**Response:**

```json
[
  {
    "transaction_id": "fNfSucakJArTvfXBBTk4GB4wLdUnAqyvGT2y24kWqWaZjX4Mg",
    "shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
    "output_position": 0,
    "address": "12qmDo4KSUikaA453pyMjNvNWGq9pur4pX0a012qmDo4KSUikaA453pyMjNvNWGq9pur4pX",
    "address_key_identifier": "12qmDo4KSUikaA453pyMjNvNWGq9pur4pX",
    "amount": 73259,
    "stable_date": null,
    "is_stable": 0,
    "spent_date": 1763392175,
    "is_spent": 1,
    "double_spend_date": null,
    "is_double_spend": 0,
    "status": 1,
    "create_date": 1763392178,
    "transaction_date": 1763392175,
    "transaction_create_date": 1763392177,
    "transaction_status": 1
  },
  {
    "transaction_id": "jgMbHhGzE95SLYnwJVEpXcjobQkaK92cB797AVj6YudeekvC4",
    "shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
    "output_position": 0,
    "address": "12qmDo4KSUikaA453pyMjNvNWGq9pur4pX0a012qmDo4KSUikaA453pyMjNvNWGq9pur4pX",
    "address_key_identifier": "12qmDo4KSUikaA453pyMjNvNWGq9pur4pX",
    "amount": 72259,
    "stable_date": null,
    "is_stable": 0,
    "spent_date": null,
    "is_spent": 0,
    "double_spend_date": null,
    "is_double_spend": 0,
    "status": 1,
    "create_date": 1763392176,
    "transaction_date": 1763392175,
    "transaction_create_date": 1763392176,
    "transaction_status": 1
  },
  {
    "transaction_id": "jgMbHhGzE95SLYnwJVEpXcjobQkaK92cB797AVj6YudeekvC4",
    "shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
    "output_position": -1,
    "address": "1Aznn1eNCpwTwLFQAWNYHSuWxBGyEWmixC0a01Aznn1eNCpwTwLFQAWNYHSuWxBGyEWmixC",
    "address_key_identifier": "1Aznn1eNCpwTwLFQAWNYHSuWxBGyEWmixC",
    "amount": 1000,
    "stable_date": null,
    "is_stable": 0,
    "spent_date": null,
    "is_spent": 0,
    "double_spend_date": null,
    "is_double_spend": 0,
    "status": 1,
    "create_date": 1763392176,
    "transaction_date": 1763392175,
    "transaction_create_date": 1763392176,
    "transaction_status": 1
  },
  {
    "transaction_id": "2ZEmvAqbn6A9HZBW8ndCKcqYeJeKf5K5KYm1nXwUo6m1w1GQYs",
    "shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
    "output_position": 0,
    "address": "14mBrDhtncUxP9NNVGCcjA36bCL3vYuUUr0a014mBrDhtncUxP9NNVGCcjA36bCL3vYuUUr",
    "address_key_identifier": "14mBrDhtncUxP9NNVGCcjA36bCL3vYuUUr",
    "amount": 326853,
    "stable_date": null,
    "is_stable": 0,
    "spent_date": null,
    "is_spent": 0,
    "double_spend_date": null,
    "is_double_spend": 0,
    "status": 1,
    "create_date": 1763392168,
    "transaction_date": 1763392166,
    "transaction_create_date": 1763392167,
    "transaction_status": 1
  },
  {
    "transaction_id": "2ZEmvAqbn6A9HZBW8ndCKcqYeJeKf5K5KYm1nXwUo6m1w1GQYs",
    "shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
    "output_position": -1,
    "address": "1NtWz3vrEJEi7XAMzQUX72U16VbDbAsU7M0a01NtWz3vrEJEi7XAMzQUX72U16VbDbAsU7M",
    "address_key_identifier": "1NtWz3vrEJEi7XAMzQUX72U16VbDbAsU7M",
    "amount": 1000,
    "stable_date": null,
    "is_stable": 0,
    "spent_date": null,
    "is_spent": 0,
    "double_spend_date": null,
    "is_double_spend": 0,
    "status": 1,
    "create_date": 1763392168,
    "transaction_date": 1763392166,
    "transaction_create_date": 1763392167,
    "transaction_status": 1
  },
  {
    "transaction_id": "2UqCbbSogm8Cau36JEbDTA1AaKNbBpHjeq23zQB8dcEFoES13b",
    "shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
    "output_position": 27,
    "address": "1DgpQoTeJ2SoUn2Sfsk9LEou5VPghYzSoG0a01DgpQoTeJ2SoUn2Sfsk9LEou5VPghYzSoG",
    "address_key_identifier": "1DgpQoTeJ2SoUn2Sfsk9LEou5VPghYzSoG",
    "amount": 34293000,
    "stable_date": null,
    "is_stable": 0,
    "spent_date": null,
    "is_spent": 0,
    "double_spend_date": null,
    "is_double_spend": 0,
    "status": 1,
    "create_date": 1763392166,
    "transaction_date": 1763392163,
    "transaction_create_date": 1763392165,
    "transaction_status": 1
  },
  {
    "transaction_id": "2UqCbbSogm8Cau36JEbDTA1AaKNbBpHjeq23zQB8dcEFoES13b",
    "shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
    "output_position": 26,
    "address": "1EZ5ppshMF76x8eBBdjFoccVgbti8oaZys0a01EZ5ppshMF76x8eBBdjFoccVgbti8oaZys",
    "address_key_identifier": "1EZ5ppshMF76x8eBBdjFoccVgbti8oaZys",
    "amount": 1000,
    "stable_date": null,
    "is_stable": 0,
    "spent_date": null,
    "is_spent": 0,
    "double_spend_date": null,
    "is_double_spend": 0,
    "status": 1,
    "create_date": 1763392166,
    "transaction_date": 1763392163,
    "transaction_create_date": 1763392165,
    "transaction_status": 1
  },
  {
    "transaction_id": "2UqCbbSogm8Cau36JEbDTA1AaKNbBpHjeq23zQB8dcEFoES13b",
    "shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
    "output_position": 25,
    "address": "1EBdX2X8RWtBNtg5xewBSPZQNqwR3t3uMN0a01EBdX2X8RWtBNtg5xewBSPZQNqwR3t3uMN",
    "address_key_identifier": "1EBdX2X8RWtBNtg5xewBSPZQNqwR3t3uMN",
    "amount": 1000,
    "stable_date": null,
    "is_stable": 0,
    "spent_date": null,
    "is_spent": 0,
    "double_spend_date": null,
    "is_double_spend": 0,
    "status": 1,
    "create_date": 1763392166,
    "transaction_date": 1763392163,
    "transaction_create_date": 1763392165,
    "transaction_status": 1
  },
  {
    "transaction_id": "2UqCbbSogm8Cau36JEbDTA1AaKNbBpHjeq23zQB8dcEFoES13b",
    "shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
    "output_position": 24,
    "address": "1PChCv2JM7e3dyLgBbb2w3kLJu2nk1X5TU0a01PChCv2JM7e3dyLgBbb2w3kLJu2nk1X5TU",
    "address_key_identifier": "1PChCv2JM7e3dyLgBbb2w3kLJu2nk1X5TU",
    "amount": 1000,
    "stable_date": null,
    "is_stable": 0,
    "spent_date": null,
    "is_spent": 0,
    "double_spend_date": null,
    "is_double_spend": 0,
    "status": 1,
    "create_date": 1763392166,
    "transaction_date": 1763392163,
    "transaction_create_date": 1763392165,
    "transaction_status": 1
  },
  {
    "transaction_id": "2UqCbbSogm8Cau36JEbDTA1AaKNbBpHjeq23zQB8dcEFoES13b",
    "shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
    "output_position": 23,
    "address": "1CsjENLrBcfbq445rK9q8vPX3M9sFtE6Fg0a01CsjENLrBcfbq445rK9q8vPX3M9sFtE6Fg",
    "address_key_identifier": "1CsjENLrBcfbq445rK9q8vPX3M9sFtE6Fg",
    "amount": 1000,
    "stable_date": null,
    "is_stable": 0,
    "spent_date": null,
    "is_spent": 0,
    "double_spend_date": null,
    "is_double_spend": 0,
    "status": 1,
    "create_date": 1763392166,
    "transaction_date": 1763392163,
    "transaction_create_date": 1763392165,
    "transaction_status": 1
  }
]
```

**Documentation Notes:**

- Transaction endpoints provide access to the DAG transaction history.
- Essential for building wallets, explorers, and transaction tracking.

---

### 7.3 list_transaction_input

**Endpoint ID:** `I3EoELuQCmqwvp8C`

**Method:** GET

**Description:** Returns records from table transaction_input

**Response Time:** 9ms

**Priority:** medium

**Example Request:**

```bash
curl -k "https://localhost:5500/api/1KeCkTz9V5YnVzXFgbhjXfQpdbugmcJ8aR/2bXBoj19oL3tYEXuv6PYiaoJmzqzT1ZAMxFjCAecua94iRakXrf2dwavvncdNgGjj7q5pZuiU5gMx3Z9HfgDgfxS/I3EoELuQCmqwvp8C"
```

**Response:**

```json
[
  {
    "transaction_id": "fNfSucakJArTvfXBBTk4GB4wLdUnAqyvGT2y24kWqWaZjX4Mg",
    "shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
    "input_position": 11,
    "output_transaction_id": "kduuLt5kr3pd8Ayin9w1iQqd4tM8NfqRt2UpaLzTm4oAeB1yC",
    "output_position": 0,
    "output_shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
    "output_transaction_date": 1763391583,
    "double_spend_date": null,
    "is_double_spend": 0,
    "address": "12qmDo4KSUikaA453pyMjNvNWGq9pur4pX0a012qmDo4KSUikaA453pyMjNvNWGq9pur4pX",
    "address_key_identifier": "12qmDo4KSUikaA453pyMjNvNWGq9pur4pX",
    "status": 1,
    "create_date": 1763392178,
    "transaction_date": 1763392175,
    "transaction_create_date": 1763392177
  },
  {
    "transaction_id": "fNfSucakJArTvfXBBTk4GB4wLdUnAqyvGT2y24kWqWaZjX4Mg",
    "shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
    "input_position": 10,
    "output_transaction_id": "2hduGsPDzZatLmcwoHUcWe6Z7oF1Zf1WHW71dNZUZ5BuZvX8UU",
    "output_position": 1,
    "output_shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
    "output_transaction_date": 1763391496,
    "double_spend_date": null,
    "is_double_spend": 0,
    "address": "12qmDo4KSUikaA453pyMjNvNWGq9pur4pX0a012qmDo4KSUikaA453pyMjNvNWGq9pur4pX",
    "address_key_identifier": "12qmDo4KSUikaA453pyMjNvNWGq9pur4pX",
    "status": 1,
    "create_date": 1763392178,
    "transaction_date": 1763392175,
    "transaction_create_date": 1763392177
  },
  {
    "transaction_id": "fNfSucakJArTvfXBBTk4GB4wLdUnAqyvGT2y24kWqWaZjX4Mg",
    "shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
    "input_position": 9,
    "output_transaction_id": "24nXRA569eWgUSPGMXgaCSKYEHkfi8yTuHVqsPBscqV1chCP45",
    "output_position": 18,
    "output_shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
    "output_transaction_date": 1763391397,
    "double_spend_date": null,
    "is_double_spend": 0,
    "address": "12qmDo4KSUikaA453pyMjNvNWGq9pur4pX0a012qmDo4KSUikaA453pyMjNvNWGq9pur4pX",
    "address_key_identifier": "12qmDo4KSUikaA453pyMjNvNWGq9pur4pX",
    "status": 1,
    "create_date": 1763392178,
    "transaction_date": 1763392175,
    "transaction_create_date": 1763392177
  },
  {
    "transaction_id": "fNfSucakJArTvfXBBTk4GB4wLdUnAqyvGT2y24kWqWaZjX4Mg",
    "shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
    "input_position": 8,
    "output_transaction_id": "4s335V9EtfjjsJrjvAiyd8ig94aqzro6cyLdzkhMdExRGie22",
    "output_position": 17,
    "output_shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
    "output_transaction_date": 1763391307,
    "double_spend_date": null,
    "is_double_spend": 0,
    "address": "12qmDo4KSUikaA453pyMjNvNWGq9pur4pX0a012qmDo4KSUikaA453pyMjNvNWGq9pur4pX",
    "address_key_identifier": "12qmDo4KSUikaA453pyMjNvNWGq9pur4pX",
    "status": 1,
    "create_date": 1763392178,
    "transaction_date": 1763392175,
    "transaction_create_date": 1763392177
  },
  {
    "transaction_id": "fNfSucakJArTvfXBBTk4GB4wLdUnAqyvGT2y24kWqWaZjX4Mg",
    "shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
    "input_position": 7,
    "output_transaction_id": "2jMaXkDbE1ppwAAY3ER9XoqJXyyhE5TCBpsQ8XfyB78wDAHWSz",
    "output_position": 17,
    "output_shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
    "output_transaction_date": 1763391258,
    "double_spend_date": null,
    "is_double_spend": 0,
    "address": "12qmDo4KSUikaA453pyMjNvNWGq9pur4pX0a012qmDo4KSUikaA453pyMjNvNWGq9pur4pX",
    "address_key_identifier": "12qmDo4KSUikaA453pyMjNvNWGq9pur4pX",
    "status": 1,
    "create_date": 1763392178,
    "transaction_date": 1763392175,
    "transaction_create_date": 1763392177
  },
  {
    "transaction_id": "fNfSucakJArTvfXBBTk4GB4wLdUnAqyvGT2y24kWqWaZjX4Mg",
    "shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
    "input_position": 6,
    "output_transaction_id": "2wEHTP16SK72ob2zWyNh9bpP3LfFKkWiWe1hMkLUva45xCydso",
    "output_position": 17,
    "output_shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
    "output_transaction_date": 1763391167,
    "double_spend_date": null,
    "is_double_spend": 0,
    "address": "12qmDo4KSUikaA453pyMjNvNWGq9pur4pX0a012qmDo4KSUikaA453pyMjNvNWGq9pur4pX",
    "address_key_identifier": "12qmDo4KSUikaA453pyMjNvNWGq9pur4pX",
    "status": 1,
    "create_date": 1763392178,
    "transaction_date": 1763392175,
    "transaction_create_date": 1763392177
  },
  {
    "transaction_id": "fNfSucakJArTvfXBBTk4GB4wLdUnAqyvGT2y24kWqWaZjX4Mg",
    "shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
    "input_position": 5,
    "output_transaction_id": "hWHN6YFnHA8FbEbuwBR6uNKN1L4FyaaFmgpWyoaWNTnaCxbu3",
    "output_position": 6,
    "output_shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
    "output_transaction_date": 1763391108,
    "double_spend_date": null,
    "is_double_spend": 0,
    "address": "12qmDo4KSUikaA453pyMjNvNWGq9pur4pX0a012qmDo4KSUikaA453pyMjNvNWGq9pur4pX",
    "address_key_identifier": "12qmDo4KSUikaA453pyMjNvNWGq9pur4pX",
    "status": 1,
    "create_date": 1763392178,
    "transaction_date": 1763392175,
    "transaction_create_date": 1763392177
  },
  {
    "transaction_id": "fNfSucakJArTvfXBBTk4GB4wLdUnAqyvGT2y24kWqWaZjX4Mg",
    "shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
    "input_position": 4,
    "output_transaction_id": "2HMaUczTsJQ5NfjWP8FYa73GAvAxTUv6FCs3EoHDCoSi6SEVjj",
    "output_position": 19,
    "output_shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
    "output_transaction_date": 1763391031,
    "double_spend_date": null,
    "is_double_spend": 0,
    "address": "12qmDo4KSUikaA453pyMjNvNWGq9pur4pX0a012qmDo4KSUikaA453pyMjNvNWGq9pur4pX",
    "address_key_identifier": "12qmDo4KSUikaA453pyMjNvNWGq9pur4pX",
    "status": 1,
    "create_date": 1763392178,
    "transaction_date": 1763392175,
    "transaction_create_date": 1763392177
  },
  {
    "transaction_id": "fNfSucakJArTvfXBBTk4GB4wLdUnAqyvGT2y24kWqWaZjX4Mg",
    "shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
    "input_position": 3,
    "output_transaction_id": "vd55j5ifZgbunoPUbNqhRvf9uxrqjg4mjZkLfgrhdvTpw58Nn",
    "output_position": 15,
    "output_shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
    "output_transaction_date": 1763391933,
    "double_spend_date": null,
    "is_double_spend": 0,
    "address": "12qmDo4KSUikaA453pyMjNvNWGq9pur4pX0a012qmDo4KSUikaA453pyMjNvNWGq9pur4pX",
    "address_key_identifier": "12qmDo4KSUikaA453pyMjNvNWGq9pur4pX",
    "status": 1,
    "create_date": 1763392178,
    "transaction_date": 1763392175,
    "transaction_create_date": 1763392177
  },
  {
    "transaction_id": "fNfSucakJArTvfXBBTk4GB4wLdUnAqyvGT2y24kWqWaZjX4Mg",
    "shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
    "input_position": 2,
    "output_transaction_id": "2NXtUKAC6CRfceoJ8AnkvWVR1pswNDjaV5FPCet2Z1paVrRts6",
    "output_position": 4,
    "output_shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
    "output_transaction_date": 1763391855,
    "double_spend_date": null,
    "is_double_spend": 0,
    "address": "12qmDo4KSUikaA453pyMjNvNWGq9pur4pX0a012qmDo4KSUikaA453pyMjNvNWGq9pur4pX",
    "address_key_identifier": "12qmDo4KSUikaA453pyMjNvNWGq9pur4pX",
    "status": 1,
    "create_date": 1763392178,
    "transaction_date": 1763392175,
    "transaction_create_date": 1763392177
  }
]
```

**Documentation Notes:**

- Transaction endpoints provide access to the DAG transaction history.
- Essential for building wallets, explorers, and transaction tracking.

---

### 7.4 get_transaction

**Endpoint ID:** `wDyC195wgjPjM2Ut`

**Method:** GET

**Description:** Returns a single record from table transaction

**Response Time:** 6ms

**Priority:** medium

**Example Request:**

```bash
curl -k "https://localhost:5500/api/1KeCkTz9V5YnVzXFgbhjXfQpdbugmcJ8aR/2bXBoj19oL3tYEXuv6PYiaoJmzqzT1ZAMxFjCAecua94iRakXrf2dwavvncdNgGjj7q5pZuiU5gMx3Z9HfgDgfxS/wDyC195wgjPjM2Ut"
```

**Response:**

```json
{
  "transaction_id": "fNfSucakJArTvfXBBTk4GB4wLdUnAqyvGT2y24kWqWaZjX4Mg",
  "shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
  "transaction_date": 1763392175,
  "node_id_origin": "1MuPNGVsSoY499btZScTZSF2xYQAN3gsmJ",
  "node_id_proxy": "1Em3Mu6Hp3CLuV6dyucEfUyqdRJwyoyAKu",
  "version": "0b20",
  "payload_hash": "2T7iRtgzoA4KQf5JGJhmgfF7hf9HHSy4JaQjYJqKYMsPm244t7",
  "stable_date": null,
  "is_stable": 0,
  "parent_date": null,
  "is_parent": 0,
  "timeout_date": null,
  "is_timeout": 0,
  "status": 1,
  "create_date": 1763392177
}
```

**Documentation Notes:**

- Transaction endpoints provide access to the DAG transaction history.
- Essential for building wallets, explorers, and transaction tracking.

---

### 7.5 get_transaction_extended

**Endpoint ID:** `IBHgAmydZbmTUAe8`

**Method:** GET

**Description:** Returns a single record with all information about a transaction

**Response Time:** 15ms

**Priority:** medium

**Example Request:**

```bash
curl -k "https://localhost:5500/api/1KeCkTz9V5YnVzXFgbhjXfQpdbugmcJ8aR/2bXBoj19oL3tYEXuv6PYiaoJmzqzT1ZAMxFjCAecua94iRakXrf2dwavvncdNgGjj7q5pZuiU5gMx3Z9HfgDgfxS/IBHgAmydZbmTUAe8"
```

**Response:**

```json
{
  "transaction_id": "fNfSucakJArTvfXBBTk4GB4wLdUnAqyvGT2y24kWqWaZjX4Mg",
  "shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
  "transaction_date": 1763392175,
  "node_id_origin": "1MuPNGVsSoY499btZScTZSF2xYQAN3gsmJ",
  "node_id_proxy": "1Em3Mu6Hp3CLuV6dyucEfUyqdRJwyoyAKu",
  "version": "0b20",
  "payload_hash": "2T7iRtgzoA4KQf5JGJhmgfF7hf9HHSy4JaQjYJqKYMsPm244t7",
  "stable_date": null,
  "is_stable": 0,
  "parent_date": null,
  "is_parent": 0,
  "timeout_date": null,
  "is_timeout": 0,
  "status": 1,
  "create_date": 1763392177,
  "transaction_signature_list": [
    {
      "address_base": "12qmDo4KSUikaA453pyMjNvNWGq9pur4pX",
      "signature": "62WgwMiJLKSrVTpVBZ83iiHxYoP9dtqTGWgWKF81YYGWVW39HGd9hVRaeJAmBrUDyNfi2Yj6cJLJuntQcYYB7L1a",
      "status": 1,
      "create_date": 1763392178,
      "key_public": "25yRJPWyhvWYjjfCSZWX9Fo7wK4KycmnrZTEh3dsn7FSQ"
    }
  ],
  "transaction_input_list": [
    {
      "input_position": 0,
      "output_transaction_id": "3SVSLw5QbW6DVRKpuVpVbM5NEkXkqxYwzT5RNxyKCg9UU8Shh",
      "output_shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
      "output_position": 19,
      "output_transaction_date": 1763391576,
      "double_spend_date": null,
      "is_double_spend": 0,
      "address": "12qmDo4KSUikaA453pyMjNvNWGq9pur4pX0a012qmDo4KSUikaA453pyMjNvNWGq9pur4pX",
      "address_key_identifier": "12qmDo4KSUikaA453pyMjNvNWGq9pur4pX",
      "status": 1,
      "create_date": 1763392178
    },
    {
      "input_position": 1,
      "output_transaction_id": "2jMG6BYZwxZLFfzcXoi5biXjPoLDMKJVPhJbsANKqqkm3Q6QRj",
      "output_shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
      "output_position": 4,
      "output_transaction_date": 1763391783,
      "double_spend_date": null,
      "is_double_spend": 0,
      "address": "12qmDo4KSUikaA453pyMjNvNWGq9pur4pX0a012qmDo4KSUikaA453pyMjNvNWGq9pur4pX",
      "address_key_identifier": "12qmDo4KSUikaA453pyMjNvNWGq9pur4pX",
      "status": 1,
      "create_date": 1763392178
    },
    {
      "input_position": 2,
      "output_transaction_id": "2NXtUKAC6CRfceoJ8AnkvWVR1pswNDjaV5FPCet2Z1paVrRts6",
      "output_shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
      "output_position": 4,
      "output_transaction_date": 1763391855,
      "double_spend_date": null,
      "is_double_spend": 0,
      "address": "12qmDo4KSUikaA453pyMjNvNWGq9pur4pX0a012qmDo4KSUikaA453pyMjNvNWGq9pur4pX",
      "address_key_identifier": "12qmDo4KSUikaA453pyMjNvNWGq9pur4pX",
      "status": 1,
      "create_date": 1763392178
    },
    {
      "input_position": 3,
      "output_transaction_id": "vd55j5ifZgbunoPUbNqhRvf9uxrqjg4mjZkLfgrhdvTpw58Nn",
      "output_shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
      "output_position": 15,
      "output_transaction_date": 1763391933,
      "double_spend_date": null,
      "is_double_spend": 0,
      "address": "12qmDo4KSUikaA453pyMjNvNWGq9pur4pX0a012qmDo4KSUikaA453pyMjNvNWGq9pur4pX",
      "address_key_identifier": "12qmDo4KSUikaA453pyMjNvNWGq9pur4pX",
      "status": 1,
      "create_date": 1763392178
    },
    {
      "input_position": 4,
      "output_transaction_id": "2HMaUczTsJQ5NfjWP8FYa73GAvAxTUv6FCs3EoHDCoSi6SEVjj",
      "output_shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
      "output_position": 19,
      "output_transaction_date": 1763391031,
      "double_spend_date": null,
      "is_double_spend": 0,
      "address": "12qmDo4KSUikaA453pyMjNvNWGq9pur4pX0a012qmDo4KSUikaA453pyMjNvNWGq9pur4pX",
      "address_key_identifier": "12qmDo4KSUikaA453pyMjNvNWGq9pur4pX",
      "status": 1,
      "create_date": 1763392178
    },
    {
      "input_position": 5,
      "output_transaction_id": "hWHN6YFnHA8FbEbuwBR6uNKN1L4FyaaFmgpWyoaWNTnaCxbu3",
      "output_shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
      "output_position": 6,
      "output_transaction_date": 1763391108,
      "double_spend_date": null,
      "is_double_spend": 0,
      "address": "12qmDo4KSUikaA453pyMjNvNWGq9pur4pX0a012qmDo4KSUikaA453pyMjNvNWGq9pur4pX",
      "address_key_identifier": "12qmDo4KSUikaA453pyMjNvNWGq9pur4pX",
      "status": 1,
      "create_date": 1763392178
    },
    {
      "input_position": 6,
      "output_transaction_id": "2wEHTP16SK72ob2zWyNh9bpP3LfFKkWiWe1hMkLUva45xCydso",
      "output_shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
      "output_position": 17,
      "output_transaction_date": 1763391167,
      "double_spend_date": null,
      "is_double_spend": 0,
      "address": "12qmDo4KSUikaA453pyMjNvNWGq9pur4pX0a012qmDo4KSUikaA453pyMjNvNWGq9pur4pX",
      "address_key_identifier": "12qmDo4KSUikaA453pyMjNvNWGq9pur4pX",
      "status": 1,
      "create_date": 1763392178
    },
    {
      "input_position": 7,
      "output_transaction_id": "2jMaXkDbE1ppwAAY3ER9XoqJXyyhE5TCBpsQ8XfyB78wDAHWSz",
      "output_shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
      "output_position": 17,
      "output_transaction_date": 1763391258,
      "double_spend_date": null,
      "is_double_spend": 0,
      "address": "12qmDo4KSUikaA453pyMjNvNWGq9pur4pX0a012qmDo4KSUikaA453pyMjNvNWGq9pur4pX",
      "address_key_identifier": "12qmDo4KSUikaA453pyMjNvNWGq9pur4pX",
      "status": 1,
      "create_date": 1763392178
    },
    {
      "input_position": 8,
      "output_transaction_id": "4s335V9EtfjjsJrjvAiyd8ig94aqzro6cyLdzkhMdExRGie22",
      "output_shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
      "output_position": 17,
      "output_transaction_date": 1763391307,
      "double_spend_date": null,
      "is_double_spend": 0,
      "address": "12qmDo4KSUikaA453pyMjNvNWGq9pur4pX0a012qmDo4KSUikaA453pyMjNvNWGq9pur4pX",
      "address_key_identifier": "12qmDo4KSUikaA453pyMjNvNWGq9pur4pX",
      "status": 1,
      "create_date": 1763392178
    },
    {
      "input_position": 9,
      "output_transaction_id": "24nXRA569eWgUSPGMXgaCSKYEHkfi8yTuHVqsPBscqV1chCP45",
      "output_shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
      "output_position": 18,
      "output_transaction_date": 1763391397,
      "double_spend_date": null,
      "is_double_spend": 0,
      "address": "12qmDo4KSUikaA453pyMjNvNWGq9pur4pX0a012qmDo4KSUikaA453pyMjNvNWGq9pur4pX",
      "address_key_identifier": "12qmDo4KSUikaA453pyMjNvNWGq9pur4pX",
      "status": 1,
      "create_date": 1763392178
    },
    {
      "input_position": 10,
      "output_transaction_id": "2hduGsPDzZatLmcwoHUcWe6Z7oF1Zf1WHW71dNZUZ5BuZvX8UU",
      "output_shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
      "output_position": 1,
      "output_transaction_date": 1763391496,
      "double_spend_date": null,
      "is_double_spend": 0,
      "address": "12qmDo4KSUikaA453pyMjNvNWGq9pur4pX0a012qmDo4KSUikaA453pyMjNvNWGq9pur4pX",
      "address_key_identifier": "12qmDo4KSUikaA453pyMjNvNWGq9pur4pX",
      "status": 1,
      "create_date": 1763392178
    },
    {
      "input_position": 11,
      "output_transaction_id": "kduuLt5kr3pd8Ayin9w1iQqd4tM8NfqRt2UpaLzTm4oAeB1yC",
      "output_shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
      "output_position": 0,
      "output_transaction_date": 1763391583,
      "double_spend_date": null,
      "is_double_spend": 0,
      "address": "12qmDo4KSUikaA453pyMjNvNWGq9pur4pX0a012qmDo4KSUikaA453pyMjNvNWGq9pur4pX",
      "address_key_identifier": "12qmDo4KSUikaA453pyMjNvNWGq9pur4pX",
      "status": 1,
      "create_date": 1763392178
    }
  ],
  "transaction_output_list": [
    {
      "output_position": 0,
      "address": "12qmDo4KSUikaA453pyMjNvNWGq9pur4pX0a012qmDo4KSUikaA453pyMjNvNWGq9pur4pX",
      "address_key_identifier": "12qmDo4KSUikaA453pyMjNvNWGq9pur4pX",
      "amount": 73259,
      "stable_date": null,
      "is_stable": 0,
      "spent_date": 1763392175,
      "is_spent": 1,
      "double_spend_date": null,
      "is_double_spend": 0,
      "status": 1,
      "create_date": 1763392178
    }
  ],
  "transaction_parent_list": [
    {
      "transaction_id_parent": "2ZEmvAqbn6A9HZBW8ndCKcqYeJeKf5K5KYm1nXwUo6m1w1GQYs",
      "shard_id_parent": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
      "transaction_id_child": "fNfSucakJArTvfXBBTk4GB4wLdUnAqyvGT2y24kWqWaZjX4Mg",
      "shard_id_child": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
      "status": 1,
      "create_date": 1763392178
    }
  ]
}
```

**Documentation Notes:**

- Transaction endpoints provide access to the DAG transaction history.
- Essential for building wallets, explorers, and transaction tracking.

---

### 7.6 list_transaction_history

**Endpoint ID:** `w9UTTA7NXnEDUXhe`

**Method:** GET

**Description:** List transaction history for a given wallet

**Response Time:** 11ms

**Priority:** medium

**Example Request:**

```bash
curl -k "https://localhost:5500/api/1KeCkTz9V5YnVzXFgbhjXfQpdbugmcJ8aR/2bXBoj19oL3tYEXuv6PYiaoJmzqzT1ZAMxFjCAecua94iRakXrf2dwavvncdNgGjj7q5pZuiU5gMx3Z9HfgDgfxS/w9UTTA7NXnEDUXhe"
```

**Response:**

```json
[]
```

**Documentation Notes:**

- Transaction endpoints provide access to the DAG transaction history.
- Essential for building wallets, explorers, and transaction tracking.

---

## 8. Wallet

5 endpoint(s) in this category.

### 8.1 get_session

**Endpoint ID:** `OBexeX0f0MsnL1S3`

**Method:** GET

**Description:** Get the active wallet in the node

**Response Time:** 4ms

**Priority:** high

**Example Request:**

```bash
curl -k "https://localhost:5500/api/1KeCkTz9V5YnVzXFgbhjXfQpdbugmcJ8aR/2bXBoj19oL3tYEXuv6PYiaoJmzqzT1ZAMxFjCAecua94iRakXrf2dwavvncdNgGjj7q5pZuiU5gMx3Z9HfgDgfxS/OBexeX0f0MsnL1S3"
```

**Response:**

```json
{
  "api_status": "success",
  "wallet": {
    "id": "iU1kuHEXS3yV4rp8EubQi6gXviMqTulNXxEd670NaWo=",
    "address": "1EUqsweaxVd7yvUgwwAi9GpwMwaG8WuZ540a01EUqsweaxVd7yvUgwwAi9GpwMwaG8WuZ54",
    "address_key_identifier": "1EUqsweaxVd7yvUgwwAi9GpwMwaG8WuZ54",
    "address_public_key": "w6JUUNqWpUiyH1rCNypzpipuioHbJxLnYh6xMFGa4Sav"
  }
}
```

**Documentation Notes:**

- Wallet endpoints require an active wallet session.
- These are private endpoints that manage wallet operations.

---

### 8.2 list_keychain_address

**Endpoint ID:** `quIoaHsl8h6IwyEI`

**Method:** GET

**Description:** Returns records from table keychain_address

**Response Time:** 11ms

**Priority:** high

**Example Request:**

```bash
curl -k "https://localhost:5500/api/1KeCkTz9V5YnVzXFgbhjXfQpdbugmcJ8aR/2bXBoj19oL3tYEXuv6PYiaoJmzqzT1ZAMxFjCAecua94iRakXrf2dwavvncdNgGjj7q5pZuiU5gMx3Z9HfgDgfxS/quIoaHsl8h6IwyEI"
```

**Response:**

```json
[
  {
    "wallet_id": "iU1kuHEXS3yV4rp8EubQi6gXviMqTulNXxEd670NaWo=",
    "address": "1EUqsweaxVd7yvUgwwAi9GpwMwaG8WuZ540a01EUqsweaxVd7yvUgwwAi9GpwMwaG8WuZ54",
    "address_base": "1EUqsweaxVd7yvUgwwAi9GpwMwaG8WuZ54",
    "address_version": "0a0",
    "address_key_identifier": "1EUqsweaxVd7yvUgwwAi9GpwMwaG8WuZ54",
    "address_position": 0,
    "is_change": 0,
    "status": 1,
    "create_date": 1763389869,
    "address_attribute": {
      "key_public": "w6JUUNqWpUiyH1rCNypzpipuioHbJxLnYh6xMFGa4Sav"
    }
  }
]
```

**Documentation Notes:**

- Wallet endpoints require an active wallet session.
- These are private endpoints that manage wallet operations.

---

### 8.3 get_known_wallet_balance

**Endpoint ID:** `NPCpnfUyPHRH4j29`

**Method:** GET

**Description:** Returns the balance of all known wallets

**Response Time:** 17ms

**Priority:** high

**Example Request:**

```bash
curl -k "https://localhost:5500/api/1KeCkTz9V5YnVzXFgbhjXfQpdbugmcJ8aR/2bXBoj19oL3tYEXuv6PYiaoJmzqzT1ZAMxFjCAecua94iRakXrf2dwavvncdNgGjj7q5pZuiU5gMx3Z9HfgDgfxS/NPCpnfUyPHRH4j29"
```

**Response:**

```json
[
  {
    "address_key_identifier": "12PbyWn24GHQ8fdoEAvKNU6Y37WvgajatF",
    "balance_stable": 1000,
    "balance_pending": 0
  },
  {
    "address_key_identifier": "12qmDo4KSUikaA453pyMjNvNWGq9pur4pX",
    "balance_stable": 1000,
    "balance_pending": 72259
  },
  {
    "address_key_identifier": "12zHHJfYMqaTCgiCohm8HYW9tJ6tatLHft",
    "balance_stable": 1265000,
    "balance_pending": 1000
  },
  {
    "address_key_identifier": "145HkhnJA1Lxfta98XMXRVd3yGNuCS5YMy",
    "balance_stable": 4000,
    "balance_pending": 0
  },
  {
    "address_key_identifier": "14mBrDhtncUxP9NNVGCcjA36bCL3vYuUUr",
    "balance_stable": 321853,
    "balance_pending": 327853
  },
  {
    "address_key_identifier": "15WcdWwYqGyRGdp3BmWc7rEyADG1h8UQot",
    "balance_stable": 3600,
    "balance_pending": 159000
  },
  {
    "address_key_identifier": "15kJKe7e56unhZfyVJhTHhczzrNLjxjYbn",
    "balance_stable": 93431000,
    "balance_pending": 196013650
  },
  {
    "address_key_identifier": "15vsfq7FrVoEtwQAkyzH74J8wMsE5A5LWf",
    "balance_stable": 1000,
    "balance_pending": 0
  },
  {
    "address_key_identifier": "15ytRcEKuC7YLHdB5PQ1FLDktbdyi3DQb3",
    "balance_stable": 1000,
    "balance_pending": 0
  },
  {
    "address_key_identifier": "165BNB24Hckhsos1bufYyD2FkTYgA7BURx",
    "balance_stable": 1000,
    "balance_pending": 0
  },
  {
    "address_key_identifier": "16CF5nEez3onJv1UpDYr5iS4eFNZunYvkJ",
    "balance_stable": 14000,
    "balance_pending": 0
  },
  {
    "address_key_identifier": "16KhyjcHv35DmryrGm3gmRb4TyaiXx3tCW",
    "balance_stable": 15000,
    "balance_pending": 1000
  },
  {
    "address_key_identifier": "16UH2JKrGt7tcqpgbnyyJcVCXMmbuSMXuF",
    "balance_stable": 16000,
    "balance_pending": 1000
  },
  {
    "address_key_identifier": "16VPKs4eqFv8WbG2QTWamc2aHdkFvsbUvc",
    "balance_stable": 1499000,
    "balance_pending": 0
  },
  {
    "address_key_identifier": "16bNpZWRav5SamehkcoEMNxsiX8b5ZBdkb",
    "balance_stable": 136765,
    "balance_pending": 0
  },
  {
    "address_key_identifier": "171sWWWfPAWVUUPbziNhvFUcuDfSMoGHev",
    "balance_stable": 15000,
    "balance_pending": 1000
  },
  {
    "address_key_identifier": "18G6oLKZaMF8mEvZMNLgwi1xfPBeWFZujn",
    "balance_stable": 206000,
    "balance_pending": 1000
  },
  {
    "address_key_identifier": "18asacpbVrehoFVzxpJQwqvbDDMnxTvQKP",
    "balance_stable": 15000,
    "balance_pending": 2000
  },
  {
    "address_key_identifier": "18evg2h4DNznwxo5pbgqv1Lb8HWdkr2zXW",
    "balance_stable": 15000,
    "balance_pending": 1000
  },
  {
    "address_key_identifier": "195rDDqTXtX7V2VgpMwNHLf5yVWt2t6wbQ",
    "balance_stable": 17306347,
    "balance_pending": 0
  },
  {
    "address_key_identifier": "19LHR4ovEVLezHnUFZW2P9ncUop3zrE2sn",
    "balance_stable": 16000,
    "balance_pending": 1000
  },
  {
    "address_key_identifier": "19MGxGgnVeJoNnvABueJ3YLh8oHsemPmBv",
    "balance_stable": 1000,
    "balance_pending": 0
  },
  {
    "address_key_identifier": "19tjBHoZXppYqmGkKKL2JWwwtWDnmdU2PP",
    "balance_stable": 233111,
    "balance_pending": 2000
  },
  {
    "address_key_identifier": "1A2C8dyAt33gmpqqKcznb7CmNYSo5iUxFd",
    "balance_stable": 16000,
    "balance_pending": 1000
  },
  {
    "address_key_identifier": "1AQz9vrLV83VnD9dhHaqpFpK6MVK7DV5ix",
    "balance_stable": 1000,
    "balance_pending": 0
  },
  {
    "address_key_identifier": "1Aznn1eNCpwTwLFQAWNYHSuWxBGyEWmixC",
    "balance_stable": 7000,
    "balance_pending": 1000
  },
  {
    "address_key_identifier": "1BXCJWQEcjJEdExQkToCCNL2wTjVq8yUya",
    "balance_stable": 1000,
    "balance_pending": 0
  },
  {
    "address_key_identifier": "1CJ93qyZ13W9xZt87eQxJZAd5su5APXp1T",
    "balance_stable": 92210203,
    "balance_pending": 1000
  },
  {
    "address_key_identifier": "1CU6bFwVqtjoex3JTk3MxmtymeVSVJJ5Rr",
    "balance_stable": 17000,
    "balance_pending": 1000
  },
  {
    "address_key_identifier": "1CVyVeJFv5befsJAodkHGZgLCgYRBq7htz",
    "balance_stable": 142078097,
    "balance_pending": 0
  },
  {
    "address_key_identifier": "1CbPu4NE55SkLH2ZnfUbyrjkDEZPco9c42",
    "balance_stable": 68211,
    "balance_pending": 0
  },
  {
    "address_key_identifier": "1CsjENLrBcfbq445rK9q8vPX3M9sFtE6Fg",
    "balance_stable": 77900,
    "balance_pending": 1000
  },
  {
    "address_key_identifier": "1Cv7Dc8E1AWGnv8YJRoPBYrq1BySgnMMCL",
    "balance_stable": 15000,
    "balance_pending": 1000
  },
  {
    "address_key_identifier": "1D4wJZR7xfXEh8hxFX8zgGiBVbN2tj7xL3",
    "balance_stable": 89000,
    "balance_pending": 1000
  },
  {
    "address_key_identifier": "1Db8hoefCudeWYGcUCGz61UhYYULm8dvD5",
    "balance_stable": 52209,
    "balance_pending": 0
  },
  {
    "address_key_identifier": "1DtXYXiSN2Vt23sZhki11w7uNnumWyBtmj",
    "balance_stable": 234922776,
    "balance_pending": 0
  },
  {
    "address_key_identifier": "1E2KkjE9tV8RaTdTYLeBaw2cRg3Laads2N",
    "balance_stable": 1781401,
    "balance_pending": 0
  },
  {
    "address_key_identifier": "1E5JbCgRoavmaaz42BwZpyrsWqZy9uBo6R",
    "balance_stable": 16000,
    "balance_pending": 1033735
  },
  {
    "address_key_identifier": "1EB7RYuuWKhDn5x5xGbESvT91jcnL57hAz",
    "balance_stable": 266000,
    "balance_pending": 1000
  },
  {
    "address_key_identifier": "1EBdX2X8RWtBNtg5xewBSPZQNqwR3t3uMN",
    "balance_stable": 245144,
    "balance_pending": 1000
  },
  {
    "address_key_identifier": "1EZ5ppshMF76x8eBBdjFoccVgbti8oaZys",
    "balance_stable": 18000,
    "balance_pending": 1000
  },
  {
    "address_key_identifier": "1EbPs3xwd17CQxmHLhhfu5T7ZVR78xjfLY",
    "balance_stable": 1000,
    "balance_pending": 0
  },
  {
    "address_key_identifier": "1EoCSMssA3MfuoJABJC47rWKH6snnHoqpi",
    "balance_stable": 16000,
    "balance_pending": 1000
  },
  {
    "address_key_identifier": "1Ev7YPuKmDAExq1CaRrEd1CCzTYwfb6R7M",
    "balance_stable": 830133,
    "balance_pending": 1000
  },
  {
    "address_key_identifier": "1F82dLb58YJtHExEuLsXHdSZLpavNH5d3x",
    "balance_stable": 2000,
    "balance_pending": 0
  },
  {
    "address_key_identifier": "1FbGRGeKHYbVbxRHrFiJaqeSuoat18WKon",
    "balance_stable": 1000,
    "balance_pending": 0
  },
  {
    "address_key_identifier": "1FmrUhZ9CdaJwcLq22AVdrYd6AFDGAurTm",
    "balance_stable": 2000,
    "balance_pending": 0
  },
  {
    "address_key_identifier": "1G5NCwiTXwDpP9UEMyEwFuQvkjXp87q7GJ",
    "balance_stable": 1000,
    "balance_pending": 0
  },
  {
    "address_key_identifier": "1G9zCSA8mGjeYZjCkcikGfSsS7gFZYHt9n",
    "balance_stable": 17000,
    "balance_pending": 1000
  },
  {
    "address_key_identifier": "1GJFd1CMKhiDG5Cz6JAuY2AEasHuTrbuui",
    "balance_stable": 1000,
    "balance_pending": 0
  },
  {
    "address_key_identifier": "1GNhcioX2E2d2pSxu1Du6iJj4F55Bbo9iy",
    "balance_stable": 15000,
    "balance_pending": 1000
  },
  {
    "address_key_identifier": "1JBG9Nhu2ZBSWA2A4aUyjfDiM1LBsVNEb",
    "balance_stable": 3000,
    "balance_pending": 0
  },
  {
    "address_key_identifier": "1JC7eqVB7rqtYos5ZDaX8jrMDtouMGTNka",
    "balance_stable": 25524020,
    "balance_pending": 1000
  },
  {
    "address_key_identifier": "1JDDYNuPyGMnRqbmqnScVvMnFptFXfRQJC",
    "balance_stable": 26917,
    "balance_pending": 1000
  },
  {
    "address_key_identifier": "1JfmwAznvqUeQ2XDnp2Wxr9W71GLwbaTHj",
    "balance_stable": 1000,
    "balance_pending": 0
  },
  {
    "address_key_identifier": "1JgzFou3scBZARxKadrKfntfE8vUokrju7",
    "balance_stable": 3798660,
    "balance_pending": 0
  },
  {
    "address_key_identifier": "1JpL8jdtyFywJ2hijzFHZRYko9cUY3U3KV",
    "balance_stable": 1459000,
    "balance_pending": 1000
  },
  {
    "address_key_identifier": "1K7HYz1nQZaRvWADRp47Nm29Mhhhsyr9mV",
    "balance_stable": 15000,
    "balance_pending": 1000
  },
  {
    "address_key_identifier": "1MYb2NGUDkfS3fTCw61bGq3VLLkoQbkJrw",
    "balance_stable": 5000,
    "balance_pending": 0
  },
  {
    "address_key_identifier": "1Msk7Gxf37jXm8bDK7edz4HDeeXaFE4XEf",
    "balance_stable": 1000,
    "balance_pending": 0
  },
  {
    "address_key_identifier": "1NfQZaoprFVGPs31CJqqBQ7wLSnVdjRPAz",
    "balance_stable": 46000,
    "balance_pending": 0
  },
  {
    "address_key_identifier": "1Nm2a7UthKPh8iqrmghJWzqJTGUvfrAPyV",
    "balance_stable": 517870277,
    "balance_pending": 0
  },
  {
    "address_key_identifier": "1NtWz3vrEJEi7XAMzQUX72U16VbDbAsU7M",
    "balance_stable": 2000,
    "balance_pending": 1000
  },
  {
    "address_key_identifier": "1PChCv2JM7e3dyLgBbb2w3kLJu2nk1X5TU",
    "balance_stable": 18000,
    "balance_pending": 1000
  },
  {
    "address_key_identifier": "1PDid5XN4zfRpJ6mMPBrSv2phJkefRsAqj",
    "balance_stable": 1922,
    "balance_pending": 0
  },
  {
    "address_key_identifier": "1buLCmmS4tSxxSYqdLNogc7vobK2TTZFh",
    "balance_stable": 235000,
    "balance_pending": 1000
  },
  {
    "address_key_identifier": "1DgpQoTeJ2SoUn2Sfsk9LEou5VPghYzSoG",
    "balance_stable": 0,
    "balance_pending": 34293000
  },
  {
    "address_key_identifier": "1KSppkMnijnrgYbfXYdVKRnbUVsNDzsB5V",
    "balance_stable": 0,
    "balance_pending": 1000
  }
]
```

**Documentation Notes:**

- Wallet endpoints require an active wallet session.
- These are private endpoints that manage wallet operations.

---

### 8.4 get_keychain_address

**Endpoint ID:** `ywTmt3C0nwk5k4c7`

**Method:** GET

**Description:** Returns the record for the identified address from table keychain

**Response Time:** 6ms

**Priority:** medium

**Example Request:**

```bash
curl -k "https://localhost:5500/api/1KeCkTz9V5YnVzXFgbhjXfQpdbugmcJ8aR/2bXBoj19oL3tYEXuv6PYiaoJmzqzT1ZAMxFjCAecua94iRakXrf2dwavvncdNgGjj7q5pZuiU5gMx3Z9HfgDgfxS/ywTmt3C0nwk5k4c7"
```

**Response:**

```json
{
  "api_status": "fail",
  "api_message": "the keychain address [object Object] was not found"
}
```

**Documentation Notes:**

- Wallet endpoints require an active wallet session.
- These are private endpoints that manage wallet operations.

---

### 8.5 get_mnemonic_phrase

**Endpoint ID:** `BPZZ0l2nTfMSmmpl`

**Method:** GET

**Description:** Returns the 24 word mnemonic phrase for the active session

**Response Time:** 4ms

**Priority:** low

**Example Request:**

```bash
curl -k "https://localhost:5500/api/1KeCkTz9V5YnVzXFgbhjXfQpdbugmcJ8aR/2bXBoj19oL3tYEXuv6PYiaoJmzqzT1ZAMxFjCAecua94iRakXrf2dwavvncdNgGjj7q5pZuiU5gMx3Z9HfgDgfxS/BPZZ0l2nTfMSmmpl"
```

**Response:**

```json
{
  "mnemonic_phrase": "armed say silent tissue shine goose market warfare flat daring unfold upper devote undo swear moral divert trend circle reform unique mammal basic glimpse"
}
```

**Documentation Notes:**

- Wallet endpoints require an active wallet session.
- These are private endpoints that manage wallet operations.

---

## 9. Logging

2 endpoint(s) in this category.

### 9.1 event_log_list

**Endpoint ID:** `PZ7x3HVHVstLNYf0`

**Method:** GET

**Description:** Returns an event log list

**Response Time:** 5ms

**Priority:** medium

**Example Request:**

```bash
curl -k "https://localhost:5500/api/1KeCkTz9V5YnVzXFgbhjXfQpdbugmcJ8aR/2bXBoj19oL3tYEXuv6PYiaoJmzqzT1ZAMxFjCAecua94iRakXrf2dwavvncdNgGjj7q5pZuiU5gMx3Z9HfgDgfxS/PZ7x3HVHVstLNYf0"
```

**Response:**

```json
{
  "api_status": "success",
  "event_log_list": [
    {
      "type": "transaction_spend_response",
      "content": "{\n\t\"transaction_id_list\": []\n}",
      "idx": 75998,
      "timestamp": "2025-11-17 15:09:29"
    },
    {
      "type": "transaction_validation_start",
      "content": "{\n\t\"transaction_id\": \"pEYJGMoE1kSsuKrPWzVKjSpywHvjJHhUw4DySJHWzmNjohNbw\"\n}",
      "idx": 75999,
      "timestamp": "2025-11-17 15:09:29"
    },
    {
      "type": "transaction_validation_response",
      "content": "{\n\t\"transaction_id\": \"pEYJGMoE1kSsuKrPWzVKjSpywHvjJHhUw4DySJHWzmNjohNbw\",\n\t\"valid\": true,\n\t\"type\": \"validation_response\"\n}",
      "from": "wss://209.214.225.230:10009",
      "idx": 76000,
      "timestamp": "2025-11-17 15:09:29"
    },
    {
      "type": "transaction_spend_request",
      "content": "{\n\t\"transaction_id\": \"2ZEmvAqbn6A9HZBW8ndCKcqYeJeKf5K5KYm1nXwUo6m1w1GQYs\"\n}",
      "from": "wss://node-00059.millix.com:10000",
      "idx": 76001,
      "timestamp": "2025-11-17 15:09:29"
    },
    {
      "type": "transaction_spend_response",
      "content": "{\n\t\"transaction_id_list\": []\n}",
      "idx": 76002,
      "timestamp": "2025-11-17 15:09:29"
    },
    {
      "type": "transaction_validation_start",
      "content": "{\n\t\"transaction_id\": \"kp3EUjcXcXWVtTFkJoYFE9zG68uktBtqf65sEvwE5BsSMneST\"\n}",
      "idx": 76003,
      "timestamp": "2025-11-17 15:09:29"
    },
    {
      "type": "transaction_output_spend_request",
      "content": "{\n\t\"transaction_id\": \"2aGoQzCzv3CMLXZQFpr2W9jnBXNRGqESQqmV2T1b4QoqKadvwM\",\n\t\"output_position\": -1\n}",
      "from": "wss://node-00046.millix.com:10000",
      "idx": 76004,
      "timestamp": "2025-11-17 15:09:29"
    },
    {
      "type": "transaction_output_spend_response",
      "content": "{\n\t\"transaction_id\": \"2aGoQzCzv3CMLXZQFpr2W9jnBXNRGqESQqmV2T1b4QoqKadvwM\",\n\t\"output_position\": -1,\n\t\"transaction_list\": []\n}",
      "idx": 76005,
      "timestamp": "2025-11-17 15:09:29"
    },
    {
      "type": "transaction_output_spend_request",
      "content": "{\n\t\"transaction_id\": \"112oyPGQQzYVv86fde8NCnajEDDtDiQgeHUxdDHrF8vJ3AkbC\",\n\t\"output_position\": 0\n}",
      "from": "wss://5.192.175.230:10000",
      "idx": 76006,
      "timestamp": "2025-11-17 15:09:29"
    },
    {
      "type": "transaction_output_spend_response",
      "content": "{\n\t\"transaction_id\": \"112oyPGQQzYVv86fde8NCnajEDDtDiQgeHUxdDHrF8vJ3AkbC\",\n\t\"output_position\": 0,\n\t\"transaction_list\": []\n}",
      "idx": 76007,
      "timestamp": "2025-11-17 15:09:29"
    },
    {
      "type": "transaction_validation_start",
      "content": "{\n\t\"transaction_id\": \"pEYJGMoE1kSsuKrPWzVKjSpywHvjJHhUw4DySJHWzmNjohNbw\"\n}",
      "idx": 75965,
      "timestamp": "2025-11-17 15:09:28"
    },
    {
      "type": "node_attribute_request",
      "from": "wss://node-00054.millix.com:10000",
      "content": "{\n\t\"node_id\": \"1KeCkTz9V5YnVzXFgbhjXfQpdbugmcJ8aR\",\n\t\"attribute_type\": \"transaction_count\"\n}",
      "idx": 75966,
      "timestamp": "2025-11-17 15:09:28"
    },
    {
      "type": "node_attribute_request",
      "from": "wss://node-00054.millix.com:10000",
      "content": "{\n\t\"node_id\": \"1KeCkTz9V5YnVzXFgbhjXfQpdbugmcJ8aR\",\n\t\"attribute_type\": \"peer_count\"\n}",
      "idx": 75967,
      "timestamp": "2025-11-17 15:09:28"
    },
    {
      "type": "node_attribute_request",
      "from": "wss://node-00054.millix.com:10000",
      "content": "{\n\t\"node_id\": \"1KeCkTz9V5YnVzXFgbhjXfQpdbugmcJ8aR\",\n\t\"attribute_type\": \"job_list\"\n}",
      "idx": 75968,
      "timestamp": "2025-11-17 15:09:28"
    },
    {
      "type": "node_attribute_request",
      "from": "wss://node-00054.millix.com:10000",
      "content": "{\n\t\"node_id\": \"1KeCkTz9V5YnVzXFgbhjXfQpdbugmcJ8aR\",\n\t\"attribute_type\": \"address_default\"\n}",
      "idx": 75969,
      "timestamp": "2025-11-17 15:09:28"
    },
    {
      "type": "node_attribute_request",
      "from": "wss://node-00054.millix.com:10000",
      "content": "{\n\t\"node_id\": \"1KeCkTz9V5YnVzXFgbhjXfQpdbugmcJ8aR\",\n\t\"attribute_type\": \"node_about\"\n}",
      "idx": 75970,
      "timestamp": "2025-11-17 15:09:28"
    },
    {
      "type": "node_attribute_request",
      "from": "wss://node-00054.millix.com:10000",
      "content": "{\n\t\"node_id\": \"1KeCkTz9V5YnVzXFgbhjXfQpdbugmcJ8aR\",\n\t\"attribute_type\": \"peer_connection\"\n}",
      "idx": 75971,
      "timestamp": "2025-11-17 15:09:28"
    },
    {
      "type": "node_attribute_request",
      "from": "wss://node-00054.millix.com:10000",
      "content": "{\n\t\"node_id\": \"1KeCkTz9V5YnVzXFgbhjXfQpdbugmcJ8aR\",\n\t\"attribute_type\": \"transaction_fee\"\n}",
      "idx": 75972,
      "timestamp": "2025-11-17 15:09:28"
    },
    {
      "type": "node_list",
      "content": "[\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00100.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1GXUv6JLLDoccT5FzXe58odgELf3wPWWMv\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00061.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"122uYZzX32zUggfmKVFWFBzZStvYPH9CUZ\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"202.47.45.182\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1QK2nHhLPR9SBXNHY5V6xFn96QR2TKLMy2\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"102.213.176.10\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"14DLLp3AvpqGRUqKLzJEMUwUh7jpSMB8Rb\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"110.38.246.23\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1B2kGVazsBXXWnEFw2P3eskL5rDFNVicbU\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00039.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1Gc2V1pCaANgUQyArw4DDCrCZ4Ft6iPbZh\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00088.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"16F8i5VQkbfeJtdVb3ANbhxdkyFsT3ZEzJ\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"104.28.159.45\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"13sZ1cVASrYWFpynikRqiutRJ96jFTPLJf\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00082.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1DJk1s6QshjSM9vLjxRYusWTzw3C9aC18b\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"110.38.246.149\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"15jUMPK381X2qgDfbckivGLhJPPmyMERcK\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00063.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"14fseJ8qpZKeipMGysuu6e93GWe6QWJpv8\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00036.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"149eSePc4pqAQouVG1ZSwQ5tSQ9ZXchxV9\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00087.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1CXjjMJPSW46bMz63G3BEaoKatbWdeikHG\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"12.90.56.102\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1PjkmeerQRuxv14MAG8ZDHLqjD8WUDagyT\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"12.90.56.102\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1PjkmeerQRuxv14MAG8ZDHLqjD8WUDagyT\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00055.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1CFDGEwueVuYgiwp5SqE9ETzdZXcR5y7He\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00067.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1D5uaVdiehbMH8U37NXXvgx3WrAW2JLHuz\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00072.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"19d24MdvvxWfbNe4EZrZcejSWGD9oEtJNy\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"110.38.248.108\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1B2kGVazsBXXWnEFw2P3eskL5rDFNVicbU\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"196.191.223.222\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1LxFEXFRn6kcqjVD1qzkDNgq1vFbBjYYRZ\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00083.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1LrSusG315dhXmqDMaUpxv2TWEZ4TkJV9i\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00046.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"19TkyGXis8Ue9e3fPYpMZCwQAJnDqL1ktK\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"12.18.136.8\",\n\t\t\"node_port_api\": 5502,\n\t\t\"node_port\": 10002,\n\t\t\"node_id\": \"1N8dibaFkB5Lmax4gNNaM2gn31VbbLViSM\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"154.159.254.226\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"14DLLp3AvpqGRUqKLzJEMUwUh7jpSMB8Rb\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"110.38.248.121\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1AVvdL5ej1xRGu2MTCPmiB8NiLK3PtyaAR\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00049.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1Em3Mu6Hp3CLuV6dyucEfUyqdRJwyoyAKu\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00057.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"18EWBLHSmGKL8gYVrXgFh2ghxm4sJt9X2F\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"95.90.247.210\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1CH2CAPeXEAyBPMYCw31yXBrEFdQgTPW4F\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"45.159.90.252\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10003,\n\t\t\"node_id\": \"1LLRzfQv1gLPR5kCQ5ySFRukm85dRKeZJp\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00042.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1CGyZkPamNTnae1CU7barD4KJDNMPwfR6q\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00053.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1EPz18jQxPukDGXn2GUdFPTc9KoZuqz9YL\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00043.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1F4TrnUMfTdgFvMrGzKJurpxZm8rHxD24A\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00090.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1eETJK6dExShJpNd2f1L7qvYJpzpu619T\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"104.28.165.135\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1BmLuRUzyVAbK7Gh9bh4y8iodK5oQaGNw4\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"110.38.242.102\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1Kb8jYUGGwGHPYUxWrN8UnUMebB1qK22yf\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00092.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1KgQSNj7jmHZaBYNWYdYoDYWs4o58wCQ2v\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00084.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1QDgRh3QLtoLr38GinL7nfMNco2WmmHJaE\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00080.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"183nfoQAjYXrSJXRAaqpdUEt3tzZbp6iMP\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00074.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"16Ph2HsVjsDE1DS54tgGtgkyCmXz7hhUyP\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00059.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"17TwXPxnqVqG86Tqo2Z5WsyU4EWxu3JNbz\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00086.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1J1khXbPaJK2jcCVgD7JW3aVXvGgk6CKYC\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"203.81.238.199\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"13EnU63itfN9KMhLTJaFDhGTKE5MDAFRS6\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"103.74.22.188\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1NhSkZPwQEqFA2AkPjG69iWCgoiJmyBs6z\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00044.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1NJSrS68squCiCF82KQE9y84ireUMCaecJ\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00081.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1651Q93U8rkWC86htKb1hitcKdRy5r2CDy\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"172.59.51.146\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1G5uTNUippF8JTf8vcDGvJ7z3Sj5W3ZhyP\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00075.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1PWhgFdKU7roLzWi6CviL9Hh1a5yMiunNs\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00060.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1FpnZ4dfAPj7EBpSqLKGQwS5wbwdvm9Wdy\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00050.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"13hoQF5G9V2UfcFgGSNbt9pkRNcRr9Kjpn\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00096.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"19CJivoBbE8bGsW3bHcmkk2bPWxAgfaaSs\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00093.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"12vwFgNgjrUFrkw7aKHSn1gxyKcbpvxYaK\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00034.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1P7Bh3UPYxtkAsyUoP4okvvwuphkWF2VzW\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00077.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1MSbiK5X4edVXGh621oqKU2qKBoZYEJrCq\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00033.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"13Vkc3uDwCfw3q9bUn6odQPBJkT4CgBigt\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00099.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"17vub8VgqWbnxP5nGH8N7F9GWNtxYj9sUu\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00094.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"19XyxevcBESJ6EXb1KHBvtPi6bb9NjdcrF\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00065.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1CMUMfmfZsxRePUi3WtJRGRD2F2qprqnGn\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00032.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"17ndDuTrzQ9EZDSYBXXHzPmoDNsnvVXdR\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"45.146.8.151\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10002,\n\t\t\"node_id\": \"1P2u4vZymWDrYPAodeGuBZqymtDZQxTMXN\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"172.70.129.17\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"15ndGeDNnsbfGLFxiKTSvk9joHdS6bQ3Tc\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00095.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"16dKKejGGR3n11CheAj1JbQttoqzhNVxYB\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"158.62.42.130\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1Lo11p7iX6R5zneFAhT7Cq73Ds4xHpYJzH\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"209.214.225.230\",\n\t\t\"node_port_api\": 5511,\n\t\t\"node_port\": 10011,\n\t\t\"node_id\": \"1FLnAyH5CQUK7uDnFn91RtPdYjxo7hEQko\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00073.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"13JJS3BtTMxUeyxjsM8638Qcu5FSQbLEjn\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"209.214.225.230\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1KLQuA6pUJhimFUFyCyHyqQZeQYh5qkuNu\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00056.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1JFKmciAr3QwFXqPYBS8NgvXVud48RaK1d\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00035.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1KN5PKUctvdvweoUbVKoDNS8nEVn5GjNT5\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"102.88.53.254\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"16MpqbeAcM5731zVyDemLcPvAa28Ey7c3y\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00085.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1PnypN2jCxniyiPywrBkEH3cRe1JpmwRne\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"197.27.86.82\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1EFFS4Co5xfUi2HvjBMLR9ANXaASRh7ExN\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"102.88.111.204\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1EonNkYgFf5fCbKK9e2QrbpXr9qSRmqsy6\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"124.246.91.142\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"17SPt7wR89e9zshg4x3e6E5EbNihfifqeH\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"158.62.32.228\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"16Vpib2t2KTd7tb1tVTcA2i45o5KyHa56j\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00062.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1KHC4H1Zgm8CmDsuSx5TpuXHi3KezEuqJu\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00070.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1Cjjmdqq59AMjiPi5phe18pACPw23NBE1X\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00071.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1KgWtyW7GZGKA95BkDcAVW1HCXzQx2dA5G\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"59.103.125.159\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1EAHnfKaEvrer6XS2WDCyPkeKPNSWJwKMY\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"49.43.243.246\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1LVQAq44JGRtzhorrfpioL2e9V6Jm7Jpjk\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00052.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1CAZcj1fQHA3yQ68cJSjp4ws5hSrHm2Khf\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"122.2.22.18\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1CRJ4hDTXo8V47nwPnCY9EXWXyjEkJEGdD\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"12.79.200.10\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 20002,\n\t\t\"node_id\": \"1AQ9C3GM9QNS2SZKrq1FadzfyR4BwqpSrA\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"178.165.170.38\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1JAMc5oaoS7vRx2aN5MH2NYsw8Uy7cPzi4\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"12.18.136.8\",\n\t\t\"node_port_api\": 5501,\n\t\t\"node_port\": 10001,\n\t\t\"node_id\": \"12nNEoP965WLz6Qwpu4Xc55W52YvXvZcks\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"209.214.225.230\",\n\t\t\"node_port_api\": 5515,\n\t\t\"node_port\": 10015,\n\t\t\"node_id\": \"15ju57aWecLJZXnEWg9nsQQbgNmD3Cgt5A\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"209.214.225.230\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1KLQuA6pUJhimFUFyCyHyqQZeQYh5qkuNu\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"110.38.242.116\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1DCG4XkiD1wJFQ7ZL1AKXaj3jt2QX7X5Ua\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"209.214.225.230\",\n\t\t\"node_port_api\": 5506,\n\t\t\"node_port\": 10006,\n\t\t\"node_id\": \"14wWz4pitypiZVp539yenBv1iYt5ti9hMR\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"59.103.125.159\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1EAHnfKaEvrer6XS2WDCyPkeKPNSWJwKMY\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"99.68.140.90\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1MToSaJERV7kbdhdqhCUPFjky4MtQGTzhC\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"209.214.225.230\",\n\t\t\"node_port_api\": 5503,\n\t\t\"node_port\": 10003,\n\t\t\"node_id\": \"1JzJJmZUS6WvZJXzFPgmnDdRFpqQRxH1TP\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00048.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"19JPsBdqFEodJ7W6RpezUWob5fKGQTFnbi\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00041.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1APh3aKzCTNbTvHMJSUTU35EtVSG5Wqnw4\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"209.214.225.230\",\n\t\t\"node_port_api\": 5508,\n\t\t\"node_port\": 10008,\n\t\t\"node_id\": \"196Du2SMbgvANfmhHqmYXrXpgYQM2cEamU\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00066.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1MuugWLhEJCaBNx8bUyRHw1KftmUTVvpnv\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"209.214.225.230\",\n\t\t\"node_port_api\": 5513,\n\t\t\"node_port\": 10013,\n\t\t\"node_id\": \"12gZx4eZQRXcfFvk8spSquW78mk2dgwJ4t\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"209.214.225.230\",\n\t\t\"node_port_api\": 5505,\n\t\t\"node_port\": 10005,\n\t\t\"node_id\": \"1DVyHk5XG2PgceeWErkUJhFsAhKLTKLhQX\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"189.203.12.84\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1LMbkd7DxDhx9SCGKXhpqzwZ8M6Aj5HEgN\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"24.71.108.246\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"17ykPgBGTijzFWyLD9P5QykitwMZAnmear\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"12.79.200.10\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"15M37akV6Pn4AcD8qkyn9ihvXsKsAQbvQR\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"88.230.45.36\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1ApXfk4RmzNvspowqwNnSXKVdAKERdLHUk\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"208.115.247.242\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1JboXFw1yAF3SUExiaW1cAhZ216Z1Nrm3b\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"12.18.136.8\",\n\t\t\"node_port_api\": 5504,\n\t\t\"node_port\": 10004,\n\t\t\"node_id\": \"1KtjKA9cXkjMAryZEvUzzr1hkYZZa368no\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"69.110.194.29\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"18GNqVg5nfTJ2GRXownmmKGvCmJo9HyiiG\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"84.232.140.119\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1MGETANmTcjQBEgmsSgnhFaW6juMPbufnN\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"12.18.136.8\",\n\t\t\"node_port_api\": 5511,\n\t\t\"node_port\": 10011,\n\t\t\"node_id\": \"1AsKdM4G5huhNGYuEM4irePvbfTTGdvbQu\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"209.214.225.230\",\n\t\t\"node_port_api\": 5510,\n\t\t\"node_port\": 10010,\n\t\t\"node_id\": \"1JXB9ADhMyftJf18PPKb17eJWuAFK5iDFT\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"178.165.170.38\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1JAMc5oaoS7vRx2aN5MH2NYsw8Uy7cPzi4\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"49.151.113.119\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1NqvYgvYPtphMcA4ji1B9UCDXthZxVTkqS\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"69.110.194.29\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"18GNqVg5nfTJ2GRXownmmKGvCmJo9HyiiG\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"209.214.225.230\",\n\t\t\"node_port_api\": 5509,\n\t\t\"node_port\": 10009,\n\t\t\"node_id\": \"16qaCYn8Zqij4MqhhL2fDBb8ara69MM3VR\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00047.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1Hntjo7qFf3xbA7n2gKKZorZN7pcAWCxhV\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"12.79.200.10\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 20003,\n\t\t\"node_id\": \"1HHSzom1JwADwiwGDryqvAcm9ZvqNgwo6q\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"49.47.192.120\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1P2McTNWQjLbDBQZQR7bPoSC5PkxmVCs7C\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"181.93.176.20\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"17LmoMyhBToink7TPdGyBneD7rbiHP8u4h\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"175.176.85.115\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1NmyCsm5YFTTaPW5sS2Y4t2zAMphrx4ayH\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"209.214.225.230\",\n\t\t\"node_port_api\": 5514,\n\t\t\"node_port\": 10014,\n\t\t\"node_id\": \"1FNBvNR1pduc9PXuePyFR4myVRm8n2BsoP\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"12.79.200.10\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 20000,\n\t\t\"node_id\": \"14ggZvX1FsUBvL3j9zGg9LDmfK7CZcMybK\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"209.214.225.230\",\n\t\t\"node_port_api\": 5501,\n\t\t\"node_port\": 10001,\n\t\t\"node_id\": \"1P1TLBkXivwUHaWSxPQF62tooiw28cdrTg\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"69.110.194.29\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"18GNqVg5nfTJ2GRXownmmKGvCmJo9HyiiG\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00064.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"17NybqtYYDyF9j1MfJV5aQxygvZsjjsSUZ\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"12.18.136.8\",\n\t\t\"node_port_api\": 5505,\n\t\t\"node_port\": 10005,\n\t\t\"node_id\": \"16Hh3Nx5d1wgUrCutf4WCFpvDF7St4U1D3\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00078.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"15ApbRL1MjTvjKRCqX8idduKacCub7CvKa\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"151.57.35.50\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"15XAmePPw7pGgfbT8Cw1t8CemqiRgA6Lhm\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"12.18.136.8\",\n\t\t\"node_port_api\": 5508,\n\t\t\"node_port\": 10008,\n\t\t\"node_id\": \"15af3TXVmzwNW9AUzVqKs1z9LpQ6eYF69E\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"12.18.136.8\",\n\t\t\"node_port_api\": 5506,\n\t\t\"node_port\": 10006,\n\t\t\"node_id\": \"1KmWjY4VCaPoB9BfxLKxHmWYRzLt2Ra6uL\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"99.68.140.90\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1MToSaJERV7kbdhdqhCUPFjky4MtQGTzhC\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"209.214.225.230\",\n\t\t\"node_port_api\": 5504,\n\t\t\"node_port\": 10004,\n\t\t\"node_id\": \"16R3hj4bNyuBHTjxjZP2qyZBYK2rmsA7FY\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00098.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1Fy7m88YiwioLXQjZvHgfGh5mTaNvi3P5u\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00051.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"18wxbHwb9A6HKESi5aPpZutkVdZFVPjqTB\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"193.104.41.4\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"12AceXr3khekcwwEb8AacujSDEnk1mvYsX\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"209.214.225.230\",\n\t\t\"node_port_api\": 5507,\n\t\t\"node_port\": 10007,\n\t\t\"node_id\": \"1Ad5qicWbeS1mpXNyYKv9g4XxeztFERmsj\",\n\t\t\"node_online\": true\n\t},\n\t{\n\t\t\"node_prefix\": \"wss://\",\n\t\t\"node_address\": \"node-00054.millix.com\",\n\t\t\"node_port_api\": 5500,\n\t\t\"node_port\": 10000,\n\t\t\"node_id\": \"1EUbRsCRGPLKtYVx5eiedoeXVkcZbvS1KL\",\n\t\t\"node_online\": true\n\t}\n]",
      "from": "wss://node-00054.millix.com:10000",
      "idx": 75973,
      "timestamp": "2025-11-17 15:09:28"
    },
    {
      "type": "node_attribute_response",
      "from": "wss://node-00054.millix.com:10000",
      "content": "{\n\t\"node_id\": \"1EUbRsCRGPLKtYVx5eiedoeXVkcZbvS1KL\",\n\t\"attribute_type\": \"node_about\",\n\t\"value\": \"{\\\"node_version\\\":\\\"1.25.1\\\",\\\"node_create_date\\\":1640750967,\\\"node_update_date\\\":1759502270}\"\n}",
      "idx": 75974,
      "timestamp": "2025-11-17 15:09:28"
    }
  ]
}
```

**Documentation Notes:**

- Response structure provides detailed information about the requested resource.
- Check the response fields for specific data points relevant to your use case.

---

### 9.2 list_log

**Endpoint ID:** `GMDazQSouYWzLTCv`

**Method:** GET

**Description:** Returns a list of log items from the node

**Response Time:** 5ms

**Priority:** medium

**Example Request:**

```bash
curl -k "https://localhost:5500/api/1KeCkTz9V5YnVzXFgbhjXfQpdbugmcJ8aR/2bXBoj19oL3tYEXuv6PYiaoJmzqzT1ZAMxFjCAecua94iRakXrf2dwavvncdNgGjj7q5pZuiU5gMx3Z9HfgDgfxS/GMDazQSouYWzLTCv"
```

**Response:**

```json
{
  "log": [
    {
      "type": "transaction_spend_request",
      "content": {
        "transaction_id": "2UqCbbSogm8Cau36JEbDTA1AaKNbBpHjeq23zQB8dcEFoES13b"
      },
      "from": "wss://node-00032.millix.com:10000",
      "idx": 76984,
      "timestamp": "2025-11-17 15:09:49"
    },
    {
      "type": "transaction_spend_response",
      "content": {
        "transaction_id_list": []
      },
      "idx": 76985,
      "timestamp": "2025-11-17 15:09:49"
    },
    {
      "type": "transaction_output_spend_request",
      "content": {
        "transaction_id": "2YBa27a3kWhpQivuK6h6wfrMGEB5cYSrwwznZYikD2NFCSS3nt",
        "output_position": -1
      },
      "from": "wss://node-00032.millix.com:10000",
      "idx": 76986,
      "timestamp": "2025-11-17 15:09:49"
    },
    {
      "type": "transaction_output_spend_response",
      "content": {
        "transaction_id": "2YBa27a3kWhpQivuK6h6wfrMGEB5cYSrwwznZYikD2NFCSS3nt",
        "output_position": -1,
        "transaction_list": []
      },
      "idx": 76987,
      "timestamp": "2025-11-17 15:09:49"
    },
    {
      "type": "transaction_validation_response",
      "content": {
        "transaction_id": "2d8fMvVLDx8XqikY24Z7dAMTcfDPurWAyrCeXBMf7oHEpDASgF",
        "type": "validation_start"
      },
      "idx": 76988,
      "timestamp": "2025-11-17 15:09:49"
    },
    {
      "type": "transaction_validation_response",
      "content": {
        "transaction_id": "2d8fMvVLDx8XqikY24Z7dAMTcfDPurWAyrCeXBMf7oHEpDASgF",
        "valid": true,
        "type": "validation_response"
      },
      "idx": 76989,
      "timestamp": "2025-11-17 15:09:49"
    },
    {
      "type": "transaction_validation_start",
      "content": {
        "transaction_id": "QWquwBKe39URNLXu7Z4bpESuco5M1jycvbnkMpo2jcjMKuWNB"
      },
      "idx": 76990,
      "timestamp": "2025-11-17 15:09:49"
    },
    {
      "type": "transaction_validation_response",
      "content": {
        "transaction_id": "QWquwBKe39URNLXu7Z4bpESuco5M1jycvbnkMpo2jcjMKuWNB",
        "valid": true,
        "type": "validation_response"
      },
      "from": "wss://node-00071.millix.com:10000",
      "idx": 76991,
      "timestamp": "2025-11-17 15:09:49"
    },
    {
      "type": "transaction_output_spend_request",
      "content": {
        "transaction_id": "2kYJgxARahh5ZET7dBYPTQJzgDnhmDKacjTFCPauap1DjvKj3G",
        "output_position": -1
      },
      "from": "wss://209.214.225.230:10007",
      "idx": 76992,
      "timestamp": "2025-11-17 15:09:50"
    },
    {
      "type": "transaction_output_spend_response",
      "content": {
        "transaction_id": "2kYJgxARahh5ZET7dBYPTQJzgDnhmDKacjTFCPauap1DjvKj3G",
        "output_position": -1,
        "transaction_list": []
      },
      "idx": 76993,
      "timestamp": "2025-11-17 15:09:50"
    },
    {
      "type": "transaction_output_spend_request",
      "content": {
        "transaction_id": "24nP8VaLciwCEjvRxkck1toHKrDCYmpu59wro6C7bVLDeodWgY",
        "output_position": 38
      },
      "from": "wss://158.62.32.228:10000",
      "idx": 76994,
      "timestamp": "2025-11-17 15:09:50"
    },
    {
      "type": "transaction_output_spend_response",
      "content": {
        "transaction_id": "24nP8VaLciwCEjvRxkck1toHKrDCYmpu59wro6C7bVLDeodWgY",
        "output_position": 38,
        "transaction_list": []
      },
      "idx": 76995,
      "timestamp": "2025-11-17 15:09:50"
    },
    {
      "type": "transaction_file_response",
      "content": "JN4mn4Z9XZKSgqRCGK6hct5diFqgCGqsy43fya8jTsHEcGh7w",
      "idx": 76969,
      "timestamp": "2025-11-17 15:09:49"
    },
    {
      "type": "transaction_output_spend_request",
      "content": {
        "transaction_id": "2uHPCDfmKMDfCH2kbXpmHLHrXvMjw8gKP3BmS3hZS6AiyLa7Wn",
        "output_position": -1
      },
      "from": "wss://node-00092.millix.com:10000",
      "idx": 76970,
      "timestamp": "2025-11-17 15:09:49"
    },
    {
      "type": "transaction_output_spend_response",
      "content": {
        "transaction_id": "2uHPCDfmKMDfCH2kbXpmHLHrXvMjw8gKP3BmS3hZS6AiyLa7Wn",
        "output_position": -1,
        "transaction_list": []
      },
      "idx": 76971,
      "timestamp": "2025-11-17 15:09:49"
    },
    {
      "type": "transaction_spend_request",
      "content": {
        "transaction_id": "jgMbHhGzE95SLYnwJVEpXcjobQkaK92cB797AVj6YudeekvC4"
      },
      "from": "wss://node-00055.millix.com:10000",
      "idx": 76972,
      "timestamp": "2025-11-17 15:09:49"
    },
    {
      "type": "transaction_spend_response",
      "content": {
        "transaction_id_list": []
      },
      "idx": 76973,
      "timestamp": "2025-11-17 15:09:49"
    },
    {
      "type": "transaction_validation_start",
      "content": {
        "transaction_id": "QWquwBKe39URNLXu7Z4bpESuco5M1jycvbnkMpo2jcjMKuWNB"
      },
      "idx": 76974,
      "timestamp": "2025-11-17 15:09:49"
    },
    {
      "type": "transaction_validation_response",
      "content": {
        "transaction_id": "QWquwBKe39URNLXu7Z4bpESuco5M1jycvbnkMpo2jcjMKuWNB",
        "valid": true,
        "type": "validation_response"
      },
      "from": "wss://node-00051.millix.com:10000",
      "idx": 76975,
      "timestamp": "2025-11-17 15:09:49"
    },
    {
      "type": "transaction_spend_request",
      "content": {
        "transaction_id": "jgMbHhGzE95SLYnwJVEpXcjobQkaK92cB797AVj6YudeekvC4"
      },
      "from": "wss://209.214.225.230:10015",
      "idx": 76976,
      "timestamp": "2025-11-17 15:09:49"
    }
  ]
}
```

**Documentation Notes:**

- Response structure provides detailed information about the requested resource.
- Check the response fields for specific data points relevant to your use case.

---

## 10. Backlog

1 endpoint(s) in this category.

### 10.1 get_backlog_list

**Endpoint ID:** `0df01ae7dd51cec4`

**Method:** GET

**Description:** Return backlog list

**Response Time:** 4ms

**Priority:** low

**Example Request:**

```bash
curl -k "https://localhost:5500/api/1KeCkTz9V5YnVzXFgbhjXfQpdbugmcJ8aR/2bXBoj19oL3tYEXuv6PYiaoJmzqzT1ZAMxFjCAecua94iRakXrf2dwavvncdNgGjj7q5pZuiU5gMx3Z9HfgDgfxS/0df01ae7dd51cec4"
```

**Response:**

```json
{
  "api_status": "success",
  "backlog_list": []
}
```

**Documentation Notes:**

- Response structure provides detailed information about the requested resource.
- Check the response fields for specific data points relevant to your use case.

---

## 11. Utility

2 endpoint(s) in this category.

### 11.1 get_is_key_present

**Endpoint ID:** `LOLb7q23p8rYSLwv`

**Method:** GET

**Description:** Returns boolean value of presence of private_key.json

**Response Time:** 3ms

**Priority:** low

**Example Request:**

```bash
curl -k "https://localhost:5500/api/1KeCkTz9V5YnVzXFgbhjXfQpdbugmcJ8aR/2bXBoj19oL3tYEXuv6PYiaoJmzqzT1ZAMxFjCAecua94iRakXrf2dwavvncdNgGjj7q5pZuiU5gMx3Z9HfgDgfxS/LOLb7q23p8rYSLwv"
```

**Response:**

```json
{
  "private_key_exists": true
}
```

**Documentation Notes:**

- Response structure provides detailed information about the requested resource.
- Check the response fields for specific data points relevant to your use case.

---

### 11.2 cryptography

**Endpoint ID:** `ZXJ3DqyLslyQETkX`

**Method:** GET

**Description:** Encrypt or decrypt provided string

**Response Time:** 10ms

**Priority:** low

**Example Request:**

```bash
curl -k "https://localhost:5500/api/1KeCkTz9V5YnVzXFgbhjXfQpdbugmcJ8aR/2bXBoj19oL3tYEXuv6PYiaoJmzqzT1ZAMxFjCAecua94iRakXrf2dwavvncdNgGjj7q5pZuiU5gMx3Z9HfgDgfxS/ZXJ3DqyLslyQETkX"
```

**Response:**

```json
{
  "result": "0b97f0ee635bee7130820f79e308133b[019c878ae011951eccf31aa06dbdff9a]"
}
```

**Documentation Notes:**

- Response structure provides detailed information about the requested resource.
- Check the response fields for specific data points relevant to your use case.

---

## Quick Reference Table

| Endpoint Name | Endpoint ID | Method | Category |
|--------------|-------------|--------|----------|
| get_node_id | `ZFAYRM8LRtmfYp4Y` | GET | Public |
| get_random_mnemonic | `Gox4NzTLDnpEr10v` | GET | Public |
| list_node | `0eoUqXNE715mBVqV` | GET | Node |
| get_os_info | `RLOk0Wji0lQVjynT` | GET | Node |
| list_node_memory_extended | `vM27tlHkqbRej6tP` | GET | Node |
| list_node_attribute | `AgsSNTSA0RHmWUkp` | GET | Node |
| get_node_public_ip | `qRHogKQ1Bb7OT4N9` | GET | Node |
| get_available_version | `WGem8x5aycBqFXWQ` | GET | Node |
| get_stat_summary | `rKclyiLtHx0dx55M` | GET | Statistics |
| get_node_transaction_stat_summary | `C9rEOewwhQDijCnN` | GET | Statistics |
| get_node_address_stat_summary | `Bz73Dm7u3dKlXDS8` | GET | Statistics |
| get_unspent_output_summary | `FC8ylC617zzn1Gaa` | GET | Statistics |
| get_transaction_output_stats | `wWo8DCcoXVlpczoP` | GET | Statistics |
| list_config_public | `hXwPQrVhLEALFsIJ` | GET | Configuration |
| list_config_private | `CZOTAF5LfusB1Ht5` | GET | Configuration |
| get_storage_config | `kIoe20LWh2aw3CAu` | GET | Configuration |
| list_shard | `OMAlxmPq4rZs71K8` | GET | Shard |
| list_address | `72dlrjquBORj0rhx` | GET | Address |
| list_address_version | `3XqkzNFzaTk1JPRf` | GET | Address |
| get_address_balance | `zLsiAkocn90e3K6R` | GET | Address |
| verify_address | `Xim7SaikcsHICvfQ` | GET | Address |
| get_known_address_balance | `xGaf7vbfY15TGsSd` | GET | Address |
| list_transaction | `l4kaEhMnhjB5yseq` | GET | Transaction |
| list_transaction_output | `FDLyQ5uo5t7jltiQ` | GET | Transaction |
| list_transaction_input | `I3EoELuQCmqwvp8C` | GET | Transaction |
| get_transaction | `wDyC195wgjPjM2Ut` | GET | Transaction |
| get_transaction_extended | `IBHgAmydZbmTUAe8` | GET | Transaction |
| list_transaction_history | `w9UTTA7NXnEDUXhe` | GET | Transaction |
| get_session | `OBexeX0f0MsnL1S3` | GET | Wallet |
| list_keychain_address | `quIoaHsl8h6IwyEI` | GET | Wallet |
| get_known_wallet_balance | `NPCpnfUyPHRH4j29` | GET | Wallet |
| get_keychain_address | `ywTmt3C0nwk5k4c7` | GET | Wallet |
| get_mnemonic_phrase | `BPZZ0l2nTfMSmmpl` | GET | Wallet |
| event_log_list | `PZ7x3HVHVstLNYf0` | GET | Logging |
| list_log | `GMDazQSouYWzLTCv` | GET | Logging |
| get_backlog_list | `0df01ae7dd51cec4` | GET | Backlog |
| get_is_key_present | `LOLb7q23p8rYSLwv` | GET | Utility |
| cryptography | `ZXJ3DqyLslyQETkX` | GET | Utility |

---

*Generated from live API test results*
