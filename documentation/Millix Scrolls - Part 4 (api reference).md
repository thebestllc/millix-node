# Millix Scrolls Part 4

## API Reference

[**get\_node\_id	4**](#get_node_id)

[**list\_node	5**](#list_node)

[**get\_available\_version	8**](#get_available_version)

[**get\_storage\_config	11**](#get_storage_config)

[**event\_log\_list	12**](#event_log_list)

[**list\_node\_memory\_extended	15**](#list_node_memory_extended)

[**new\_node	18**](#new_node)

[**list\_keychain\_address	19**](#list_keychain_address)

[**get\_keychain\_address	21**](#get_keychain_address)

[**new\_keychain\_address	23**](#new_keychain_address)

[**get\_address\_balance	25**](#get_address_balance)

[**list\_address	26**](#list_address)

[**send\_transaction	29**](#send_transaction)

[**list\_transaction	30**](#list_transaction)

[**sign\_transaction	34**](#sign_transaction)

[**get\_node\_transaction\_stat\_summary	35**](#get_node_transaction_stat_summary)

[**get\_node\_address\_stat\_summary	36**](#get_node_address_stat_summary)

[**list\_address\_version	37**](#list_address_version)

[**get\_backlog\_list	41**](#get_backlog_list)

[**reset\_backlog	42**](#reset_backlog)

[**new\_address\_version\_released	43**](#new_address_version_released)

[**list\_config\_private	44**](#list_config_private)

[**list\_config\_public	47**](#list_config_public)

[**optimize\_database	53**](#optimize_database)

[**reset\_transaction\_verification\_timeout	54**](#reset_transaction_verification_timeout)

[**register\_node\_identity	55**](#register_node_identity)

[**list\_log	56**](#list_log)

[**toggle\_service\_network	59**](#toggle_service_network)

[**toggle\_service\_node	60**](#toggle_service_node)

[**reload\_configs\_from\_database	61**](#reload_configs_from_database)

[**get\_mnemonic\_phrase	62**](#get_mnemonic_phrase)

[**get\_address\_private\_key	63**](#get_address_private_key)

[**update\_config\_value	64**](#update_config_value)

[**list\_node\_attribute	65**](#list_node_attribute)

[**get\_transaction\_input	70**](#get_transaction_input)

[**get\_transaction	72**](#get_transaction)

[**get\_transaction\_extended	74**](#get_transaction_extended)

[**get\_transaction\_output	79**](#get_transaction_output)

[**list\_transaction\_output	81**](#list_transaction_output)

[**list\_transaction\_input	84**](#list_transaction_input)

[**list\_transaction\_output\_attribute\_sent	87**](#list_transaction_output_attribute_sent)

[**list\_transaction\_output\_attribute\_received	90**](#list_transaction_output_attribute_received)

[**list\_transaction\_output\_attribute\_received	93**](#list_transaction_output_attribute_received-1)

[**new\_session\_with\_phrase	94**](#new_session_with_phrase)

[**new\_session\_with\_file	95**](#new_session_with_file)

[**list\_shard	96**](#list_shard)

[**add\_shard	98**](#add_shard)

[**support\_shard	99**](#support_shard)

[**verify\_address	100**](#verify_address)

[**get\_random\_mnemonic	101**](#get_random_mnemonic)

[**new\_session	102**](#new_session)

[**get\_session	103**](#get_session)

[**get\_stat\_summary	104**](#get_stat_summary)

[**get\_unspent\_output\_summary	106**](#get_unspent_output_summary)

[**get\_os\_info	107**](#get_os_info)

[**send\_transaction\_from\_wallet	109**](#send_transaction_from_wallet)

[**get\_transaction\_output\_data	110**](#get_transaction_output_data)

[**get\_transaction\_output\_key	111**](#get_transaction_output_key)

[**sync\_transaction\_output\_data	112**](#sync_transaction_output_data)

[**send\_transaction\_with\_data\_from\_wallet	113**](#send_transaction_with_data_from_wallet)

[**send\_aggregation\_transaction\_from\_wallet	114**](#send_aggregation_transaction_from_wallet)

[**list\_transaction\_history	115**](#list_transaction_history)

[**end\_session	116**](#end_session)

[**wallet\_stop\_ongoing\_transaction	117**](#wallet_stop_ongoing_transaction)

[**reset\_transaction\_validation	118**](#reset_transaction_validation)

[**get\_config\_by\_name	119**](#get_config_by_name)

[**get\_known\_wallet\_balance	120**](#get_known_wallet_balance)

[**get\_node\_public\_ip	122**](#get_node_public_ip)

[**remove\_address\_version	123**](#remove_address_version)

[**get\_known\_address\_balance	124**](#get_known_address_balance)

[**get\_is\_key\_present	125**](#get_is_key_present)

[**reset\_validation\_transaction\_by\_guid	126**](#reset_validation_transaction_by_guid)

[**verify\_dns\_has\_address\_key\_identifier	127**](#verify_dns_has_address_key_identifier)

[**get\_transaction\_output\_stats	128**](#get_transaction_output_stats)

[**cryptography	129**](#cryptography)

### get\_node\_id {#get_node_id}

identifies the node\_id responding to the request at the provided IP address and api port

| ID: | ZFAYRM8LRtmfYp4Y |
| :---- | :---- |
| Method: | GET |
| Require Identity: | False |
| Private: | False |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/ZFAYRM8LRtmfYp4Y

**Results:**

| {    "node\_id":"1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4" } |
| :---- |

### list\_node {#list_node}

returns a list of peer nodes known by the host.  it returns the newest records by default

| ID: | 0eoUqXNE715mBVqV |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | False |

| p0 | status |
| :---- | :---- |
| p1 | order\_by="create\_date desc" |
| p2 | record\_limit=1000 |

**Example:**

[https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/0eoUqXNE715mBVqV?p2=5](https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/0eoUqXNE715mBVqV?p25)

Note: We are only getting a list of 5 nodes (p2=5)

**Results:**

| \[    {       "node\_id":"18NDYvqJw4zMMjnw34XidQBGhCe3a7M5Uo",       "node\_prefix":"wss://",       "node\_address":"82.38.39.118",       "node\_port":10003,       "node\_port\_api":5500,       "status":2,       "update\_date":1698650332,       "create\_date":1698650332    },    {       "node\_id":"1AcgqSVmZxSpqY14c5FfSsa1ar6FK7xcPj",       "node\_prefix":"wss://",       "node\_address":"12.90.56.102",       "node\_port":10022,       "node\_port\_api":5522,       "status":1,       "update\_date":1698650318,       "create\_date":1698650083    },    {       "node\_id":"1CzNStPVkREJo23CYuXKJxTeVzJjSFRofG",       "node\_prefix":"wss://",       "node\_address":"12.90.56.102",       "node\_port":10092,       "node\_port\_api":5592,       "status":1,       "update\_date":1698650265,       "create\_date":1698649995    },    {       "node\_id":"1Ke1BtaJayGFjK9PwN3U7hwLw1shqqpubJ",       "node\_prefix":"wss://",       "node\_address":"12.90.56.102",       "node\_port":10036,       "node\_port\_api":5536,       "status":1,       "update\_date":1698650057,       "create\_date":1698649946    },    {       "node\_id":"1BYuwd2fLMbqn8e1nFj8MptcqvQCf12zYQ",       "node\_prefix":"wss://",       "node\_address":"12.90.56.102",       "node\_port":10050,       "node\_port\_api":5550,       "status":1,       "update\_date":1698649943,       "create\_date":1698649859    } \] |
| :---- |

### get\_available\_version {#get_available_version}

returns a available client/browser version

| ID: | WGem8x5aycBqFXWQ |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | False |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/WGem8x5aycBqFXWQ

**Results:**

| \[    {       "node\_id":"18NDYvqJw4zMMjnw34XidQBGhCe3a7M5Uo",       "node\_prefix":"wss://",       "node\_address":"82.38.39.118",       "node\_port":10003,       "node\_port\_api":5500,       "status":2,       "update\_date":1698650332,       "create\_date":1698650332    },    {       "node\_id":"1AcgqSVmZxSpqY14c5FfSsa1ar6FK7xcPj",       "node\_prefix":"wss://",       "node\_address":"12.90.56.102",       "node\_port":10022,       "node\_port\_api":5522,       "status":1,       "update\_date":1698650318,       "create\_date":1698650083    },    {       "node\_id":"1CzNStPVkREJo23CYuXKJxTeVzJjSFRofG",       "node\_prefix":"wss://",       "node\_address":"12.90.56.102",       "node\_port":10092,       "node\_port\_api":5592,       "status":1,       "update\_date":1698650265,       "create\_date":1698649995    },    {       "node\_id":"1Ke1BtaJayGFjK9PwN3U7hwLw1shqqpubJ",       "node\_prefix":"wss://",       "node\_address":"12.90.56.102",       "node\_port":10036,       "node\_port\_api":5536,       "status":1,       "update\_date":1698650057,       "create\_date":1698649946    },    {       "node\_id":"1BYuwd2fLMbqn8e1nFj8MptcqvQCf12zYQ",       "node\_prefix":"wss://",       "node\_address":"12.90.56.102",       "node\_port":10050,       "node\_port\_api":5550,       "status":1,       "update\_date":1698649943,       "create\_date":1698649859    } \] |
| :---- |

### get\_storage\_config {#get_storage_config}

returns storage related config

| ID: | kIoe20LWh2aw3CAu |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | True |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/kIoe20LWh2aw3CAu

**Results:**

| {    "api\_status":"success",    "file\_dir":"/home/millixbook/millix/storage/",    "database\_dir":"/home/millixbook/millix/" } |
| :---- |

### event\_log\_list {#event_log_list}

returns a event log list

| ID: | PZ7x3HVHVstLNYf0 |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | False |

| p0 | log\_limit=1000 |
| :---- | :---- |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/PZ7x3HVHVstLNYf0?p0=5

Note: The output is limited to 5 entries (p0=5)

**Results:**

| {    "api\_status":"success",    "event\_log\_list":\[       {          "type":"transaction\_validation\_response",          "content":"{\\n\\t\\"cause\\": \\"transaction\_not\_found\\",\\n\\t\\"transaction\_id\_fail\\": \\"A91m7opaqK8Qu8cUK2w8PLeRYspSwcjGCdSzsRw9s4Mz5qKbt\\",\\n\\t\\"message\\": \\"no information found for A91m7opaqK8Qu8cUK2w8PLeRYspSwcjGCdSzsRw9s4Mz5qKbt\\",\\n\\t\\"transaction\_id\\": \\"A91m7opaqK8Qu8cUK2w8PLeRYspSwcjGCdSzsRw9s4Mz5qKbt\\",\\n\\t\\"valid\\": false,\\n\\t\\"type\\": \\"validation\_response\\"\\n}",          "from":"wss://12.90.56.102:10044",          "idx":66978,          "timestamp":"2023-10-30 07:34:04"       },       {          "type":"transaction\_validation\_start",          "content":"{\\n\\t\\"transaction\_id\\": \\"A91m7opaqK8Qu8cUK2w8PLeRYspSwcjGCdSzsRw9s4Mz5qKbt\\"\\n}",          "idx":66979,          "timestamp":"2023-10-30 07:34:04"       },       {          "type":"transaction\_output\_spend\_request",          "content":"{\\n\\t\\"transaction\_id\\": \\"21WBNf5ZQ3M6jZXwNdJ8NDidsughtDC3ncVDpMZWjyy7xNc43C\\",\\n\\t\\"output\_position\\": \-1\\n}",          "from":"wss://12.90.56.102:10000",          "idx":66980,          "timestamp":"2023-10-30 07:34:04"       },       {          "type":"transaction\_output\_spend\_response",          "content":"{\\n\\t\\"transaction\_id\\": \\"21WBNf5ZQ3M6jZXwNdJ8NDidsughtDC3ncVDpMZWjyy7xNc43C\\",\\n\\t\\"output\_position\\": \-1,\\n\\t\\"transaction\_list\\": \[\]\\n}",          "idx":66981,          "timestamp":"2023-10-30 07:34:04"       },       {          "type":"transaction\_validation\_start",          "content":"{\\n\\t\\"transaction\_id\\": \\"A91m7opaqK8Qu8cUK2w8PLeRYspSwcjGCdSzsRw9s4Mz5qKbt\\"\\n}",          "idx":66982,          "timestamp":"2023-10-30 07:34:04"       }    \] } |
| :---- |

### list\_node\_memory\_extended {#list_node_memory_extended}

returns a list of all peer nodes (node table and memory list) known by the host.  it returns the newest records by default

| ID: | vM27tlHkqbRej6tP |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | False |

| p0 | status |
| :---- | :---- |
| p1 | order\_by="create\_date desc" |
| p2 | record\_limit=1000 |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/vM27tlHkqbRej6tP?p2=5

Note: The output is limited to 3 entries (p2=3)

**Results:**

| \[    {       "node\_id":"1Hco2vcPqa9N2Du6w6LQKvN91iZ7iEEUqe",       "node\_prefix":"wss://",       "node\_address":"12.90.56.102",       "node\_port":10015,       "node\_port\_api":5515,       "status":1,       "update\_date":1698651580,       "create\_date":1698651574,       "node\_attribute\_list":\[          {             "attribute\_type\_id":"KkwWuh5VaHBYlk8lsduD",             "value":"xZe4UiVReWpsXUYzGM53SYKBn1vPXvCTnx7Jd9GydraQ",             "status":1,             "create\_date":1698651574,             "attribute\_type":"node\_public\_key"          }       \]    },    {       "node\_id":"16r672iwYV4tjndxnsgyacL3yP7esnFfMk",       "node\_prefix":"wss://",       "node\_address":"70.181.3.19",       "node\_port":10000,       "node\_port\_api":5500,       "status":-1,       "update\_date":1698651518,       "create\_date":1698651518,       "node\_attribute\_list":\[       \]    },    {       "node\_id":"1Jobrq6Af4JmFhxnqpVxEDBCtSSvvjJRzb",       "node\_prefix":"wss://",       "node\_address":"81.1.72.113",       "node\_port":10000,       "node\_port\_api":5500,       "status":-1,       "update\_date":1698651518,       "create\_date":1698651518,       "node\_attribute\_list":\[       \]    } \] |
| :---- |

### new\_node {#new_node}

inserts a new record to table node

| ID: | DuOnf1Wqi29oJUaA |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | True |

| p0 | node\_prefix\<required\> |
| :---- | :---- |
| p1 | node\_address\<required\> |
| p2 | node\_port\<required\> |
| p3 | node\_port\_api\<required\> |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/DuOnf1Wqi29oJUaA

**Results:**

### list\_keychain\_address {#list_keychain_address}

returns records from table keychain\_address. it returns the newest records by default

| ID: | quIoaHsl8h6IwyEI |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | True |

| p0 | address\_key\_identifier |
| :---- | :---- |
| p1 | wallet\_id |
| p2 | is\_change |
| p3 | order\_by="create\_date desc" |
| p4 | record\_limit:1000 |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/quIoaHsl8h6IwyEI

**Results:**

| \[    {       "wallet\_id":"UfWT4cXERIjRUFz+J3VKfKArJoSY2W+7PZlQiH03iqY=",       "address":"17S8Bwq2KZMWAXrzZ49LW3ArowUMyZ3k390a01KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd",       "address\_base":"17S8Bwq2KZMWAXrzZ49LW3ArowUMyZ3k39",       "address\_version":"0a0",       "address\_key\_identifier":"1KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd",       "address\_position":1,       "is\_change":0,       "status":1,       "create\_date":1690613120,       "address\_attribute":{          "key\_public":"u44Gep7CjKeitZorkRZCz5prywpb1t7jTo7Tifnc1PHu"       }    },    {       "wallet\_id":"UfWT4cXERIjRUFz+J3VKfKArJoSY2W+7PZlQiH03iqY=",       "address":"1KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd0a01KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd",       "address\_base":"1KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd",       "address\_version":"0a0",       "address\_key\_identifier":"1KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd",       "address\_position":0,       "is\_change":0,       "status":1,       "create\_date":1690613119,       "address\_attribute":{          "key\_public":"22rWHt1iiwJwBKMZBXHNHYtWFKivbxCLDF7mRZuiMjPZa"       }    } \] |
| :---- |

### get\_keychain\_address {#get_keychain_address}

returns the record for the identified address from table keychain and keychain\_address

| ID: | ywTmt3C0nwk5k4c7 |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | True |

| p0 | address\<required\> |
| :---- | :---- |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/ywTmt3C0nwk5k4c7?p0=17S8Bwq2KZMWAXrzZ49LW3ArowUMyZ3k390a01KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd

**Results:**

| {    "wallet\_id":"UfWT4cXERIjRUFz+J3VKfKArJoSY2W+7PZlQiH03iqY=",    "address":"17S8Bwq2KZMWAXrzZ49LW3ArowUMyZ3k390a01KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd",    "address\_base":"17S8Bwq2KZMWAXrzZ49LW3ArowUMyZ3k39",    "address\_version":"0a0",    "address\_key\_identifier":"1KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd",    "address\_position":1,    "is\_change":0,    "status":1,    "create\_date":1690613120,    "address\_attribute":{       "key\_public":"u44Gep7CjKeitZorkRZCz5prywpb1t7jTo7Tifnc1PHu"    } } |
| :---- |

### new\_keychain\_address {#new_keychain_address}

generates a new address and returns the new address record from table address

| ID: | Lb2fuhVMDQm1DrLL |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | True |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/Lb2fuhVMDQm1DrLL

**Results:**

| {    "wallet\_id":"UfWT4cXERIjRUFz+J3VKfKArJoSY2W+7PZlQiH03iqY=",    "address":"1GV7png2vVZjJtA4QnjqnC7MtDWWoZf7RM0a01KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd",    "address\_base":"1GV7png2vVZjJtA4QnjqnC7MtDWWoZf7RM",    "address\_version":"0a0",    "address\_key\_identifier":"1KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd",    "address\_position":2,    "is\_change":0,    "status":1,    "create\_date":1690613120,    "address\_attribute":{       "key\_public":"vP3eFs7NA3WaDBwne2wNFbncHXJhZLvoEBVWJLPPvYP6"    } } |
| :---- |

### get\_address\_balance {#get_address_balance}

returns the available (stable) balance and pending (unstable) balance of an address

| ID: | zLsiAkocn90e3K6R |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | False |

| p0 | address\<required\> |
| :---- | :---- |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/zLsiAkocn90e3K6R?p0=1GV7png2vVZjJtA4QnjqnC7MtDWWoZf7RM0a01KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd

**Results:**

| {    "stable":0,    "unstable":0 } |
| :---- |

### list\_address {#list_address}

returns records from table address. it returns the newest records by default

| ID: | 72dlrjquBORj0rhx |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | False |

| p0 | address\_base |
| :---- | :---- |
| p1 | address\_version |
| p2 | address\_key\_identifier |
| p3 | address |
| p4 | status |
| p5 | order\_by="create\_date desc" |
| p6 | record\_limit: 1000 |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/72dlrjquBORj0rhx?p6=5

Note: The output is limited to 5 entries (p6=5)

**Results:**

| \[    {       "address":"184fMDb5VEeDVArAGqVZn2MBcoRkd4HVmn0a01EH53ZToXMoSbJqBL7bCERev5vDZKm1Drh",       "address\_base":"184fMDb5VEeDVArAGqVZn2MBcoRkd4HVmn",       "address\_version":"0a0",       "address\_key\_identifier":"1EH53ZToXMoSbJqBL7bCERev5vDZKm1Drh",       "status":1,       "create\_date":1698651323    },    {       "address":"1DXCwYFznxBEu9MEGUeZkLR2TwiBkdLtCi0a01DXCwYFznxBEu9MEGUeZkLR2TwiBkdLtCi",       "address\_base":"1DXCwYFznxBEu9MEGUeZkLR2TwiBkdLtCi",       "address\_version":"0a0",       "address\_key\_identifier":"1DXCwYFznxBEu9MEGUeZkLR2TwiBkdLtCi",       "status":1,       "create\_date":1698649986,       "address\_attribute":{          "key\_public":"zEf4XnUYsdp3pxFAeWMj86CHCYY7FiocWwWk2NrmAKBX"       }    },    {       "address":"1LyNBHat8CaeeCjnFU1PDp6k8pTxEXUpPb0a01EH53ZToXMoSbJqBL7bCERev5vDZKm1Drh",       "address\_base":"1LyNBHat8CaeeCjnFU1PDp6k8pTxEXUpPb",       "address\_version":"0a0",       "address\_key\_identifier":"1EH53ZToXMoSbJqBL7bCERev5vDZKm1Drh",       "status":1,       "create\_date":1698649760    },    {       "address":"16GXSPUC2396wSa6cunvYVuNz8ktKbM6ns0a016GXSPUC2396wSa6cunvYVuNz8ktKbM6ns",       "address\_base":"16GXSPUC2396wSa6cunvYVuNz8ktKbM6ns",       "address\_version":"0a0",       "address\_key\_identifier":"16GXSPUC2396wSa6cunvYVuNz8ktKbM6ns",       "status":1,       "create\_date":1698649699    },    {       "address":"1LPXsQP57DYw9TBDUATYfZ5XMK2hcuWzJs0a01LPXsQP57DYw9TBDUATYfZ5XMK2hcuWzJs",       "address\_base":"1LPXsQP57DYw9TBDUATYfZ5XMK2hcuWzJs",       "address\_version":"0a0",       "address\_key\_identifier":"1LPXsQP57DYw9TBDUATYfZ5XMK2hcuWzJs",       "status":1,       "create\_date":1698649699    } \] |
| :---- |

### send\_transaction {#send_transaction}

submits a new transaction with a transaction payload, containing inputs, signatures, outputs and amounts to the node. this API is generally used in conjunction with the output from API RVBqKlGdk9aEhi5J (sign\_transaction)

| ID: | VnJIBrrM0KY3uQ9X |
| :---- | :---- |
| Method: | GET/POST |
| Require Identity: | True |
| Private: | True |

| p0 | transaction\_payload\_signed\<required\> |
| :---- | :---- |
| p1 | proxy\_time\_limit\<default 30000ms\> |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/VnJIBrrM0KY3uQ9X

\*\*\* grab from tutorial \*\*\*

**Results:**

### list\_transaction {#list_transaction}

returns a list of transaction records from table transaction. it returns the newest records by default

| ID: | l4kaEhMnhjB5yseq |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | False |

| p0 | date\_begin |
| :---- | :---- |
| p1 | date\_end |
| p2 | node\_id\_origin |
| p3 | is\_stable |
| p4 | is\_parent |
| p5 | is\_timeout |
| p6 | create\_date\_begin |
| p7 | create\_date\_end |
| p8 | status |
| p9 | order\_by="create\_date desc" |
| p10 | record\_limit=1000 |
| p11 | shard\_id |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/l4kaEhMnhjB5yseq?p10=4

Note: The output is limited to 4 entries (p10=4)

**Results:**

| \[    {       "transaction\_id":"12sjsAB1omdF8Zo4UhajaV8cbsMWm1B8TQujmrmfeW1rA1nx5",       "shard\_id":"qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",       "transaction\_date":1698652655,       "node\_id\_origin":"1B941nsKh7UyMm5764v8J7UeP9Tqtgqzis",       "node\_id\_proxy":"1HHSzom1JwADwiwGDryqvAcm9ZvqNgwo6q",       "version":"0a20",       "payload\_hash":"ndKc2PtDQJqoDs4BPG225fux8P8qB8ZnXde3WkPvb69aVyxVH",       "stable\_date":null,       "is\_stable":0,       "parent\_date":null,       "is\_parent":0,       "timeout\_date":null,       "is\_timeout":0,       "status":1,       "create\_date":1698652657    },    {       "transaction\_id":"26Kfwk9XGfJnKkZCw3ydeuXK22DeEarJzSd2mBpVkrUf7ke6oW",       "shard\_id":"qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",       "transaction\_date":1698652655,       "node\_id\_origin":"1B941nsKh7UyMm5764v8J7UeP9Tqtgqzis",       "node\_id\_proxy":"1HHSzom1JwADwiwGDryqvAcm9ZvqNgwo6q",       "version":"0b20",       "payload\_hash":"gEpYxmSoFnTfofN3T9k4ZPdMzfaTCRXaE2CQqDye7YpBUgdfi",       "stable\_date":null,       "is\_stable":0,       "parent\_date":null,       "is\_parent":0,       "timeout\_date":null,       "is\_timeout":0,       "status":1,       "create\_date":1698652657    },    {       "transaction\_id":"2pjXzcfKV7wEvDdGwxSb9WDnSstKv5F3iDHhwfnmoafo7iVxir",       "shard\_id":"qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",       "transaction\_date":1698652650,       "node\_id\_origin":"16jssH4iZ8Cj6ZWAR13Z5QXi952bAxgRhn",       "node\_id\_proxy":"19JPsBdqFEodJ7W6RpezUWob5fKGQTFnbi",       "version":"0b20",       "payload\_hash":"NnwuVchcoJ6f5UmEzPDSTFu5T5uv3REkfGcqFXCj8aHbPx4Uc",       "stable\_date":null,       "is\_stable":0,       "parent\_date":1698652655,       "is\_parent":1,       "timeout\_date":null,       "is\_timeout":0,       "status":1,       "create\_date":1698652653    },    {       "transaction\_id":"d4wxnF4wnr8TNRadcWPEAPnXjtRzxucxxFbD5xfdqDrBQVtdR",       "shard\_id":"qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",       "transaction\_date":1698652650,       "node\_id\_origin":"16jssH4iZ8Cj6ZWAR13Z5QXi952bAxgRhn",       "node\_id\_proxy":"19JPsBdqFEodJ7W6RpezUWob5fKGQTFnbi",       "version":"0a20",       "payload\_hash":"XgLQwMG3LhtMrJ1S4JjQ4XRfhjtxzKwhSPCbAw7wPfSsMLYBz",       "stable\_date":null,       "is\_stable":0,       "parent\_date":1698652655,       "is\_parent":1,       "timeout\_date":null,       "is\_timeout":0,       "status":1,       "create\_date":1698652651    } \] |
| :---- |

### sign\_transaction {#sign_transaction}

accepts an unsigned transaction payload and private keys to produce a signed version of the transaction\_payload\_unsigned that is used by API VnJIBrrM0KY3uQ9X to send a transaction

| ID: | RVBqKlGdk9aEhi5J |
| :---- | :---- |
| Method: | GET/POST |
| Require Identity: | True |
| Private: | True |

| p0 | transaction\_payload\_unsigned\<required\> |
| :---- | :---- |
| p1 | private\_key\_hex\<required\> |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/RVBqKlGdk9aEhi5J

\*\*\* get from tutorial \*\*\*

**Results:**

### get\_node\_transaction\_stat\_summary {#get_node_transaction_stat_summary}

returns a summary of transaction statistics from the host

| ID: | C9rEOewwhQDijCnN |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | False |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/C9rEOewwhQDijCnN

**Results:**

| {    "transaction\_free\_count":970,    "transaction\_included\_count":293437,    "transaction\_input\_count":1168899,    "transaction\_output\_count":1366610,    "transaction\_stable\_count":86578,    "transaction\_pending\_count":207829 } |
| :---- |

### get\_node\_address\_stat\_summary {#get_node_address_stat_summary}

returns a summary of address statistics from the host

| ID: | Bz73Dm7u3dKlXDS8 |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | False |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/Bz73Dm7u3dKlXDS8

**Results:**

| {    "address\_count":1283,    "key\_identifier\_count":936 } |
| :---- |

### list\_address\_version {#list_address_version}

return records from table address\_version

| ID: | 3XqkzNFzaTk1JPRf |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | False |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/3XqkzNFzaTk1JPRf

**Results:**

| \[    {       "version":"0a0",       "is\_main\_network":1,       "regex\_pattern":"(?\<address\>.\*)(?\<version\>0a0)(?\<identifier\>.\*)",       "is\_default":1,       "status":1,       "create\_date":1690613083    },    {       "version":"0b0",       "is\_main\_network":1,       "regex\_pattern":"(?\<address\>.\*)(?\<version\>0b0)(?\<identifier\>.\*)",       "is\_default":0,       "status":1,       "create\_date":1690613083    },    {       "version":"0c0",       "is\_main\_network":1,       "regex\_pattern":"(?\<address\>.\*)(?\<version\>0c0)(?\<identifier\>.\*)",       "is\_default":0,       "status":1,       "create\_date":1690613083    },    {       "version":"lal",       "is\_main\_network":0,       "regex\_pattern":"(?\<address\>.\*)(?\<version\>lal)(?\<identifier\>.\*)",       "is\_default":1,       "status":1,       "create\_date":1690613083    },    {       "version":"la0l",       "is\_main\_network":0,       "regex\_pattern":"(?\<address\>.\*)(?\<version\>la0l)(?\<identifier\>.\*)",       "is\_default":1,       "status":1,       "create\_date":1690613083    },    {       "version":"lb0l",       "is\_main\_network":0,       "regex\_pattern":"(?\<address\>.\*)(?\<version\>lb0l)(?\<identifier\>.\*)",       "is\_default":0,       "status":1,       "create\_date":1690613083    },    {       "version":"lcl",       "is\_main\_network":0,       "regex\_pattern":"(?\<address\>.\*)(?\<version\>lcl)(?\<identifier\>.\*)",       "is\_default":0,       "status":1,       "create\_date":1690613083    },    {       "version":"0d0",       "is\_main\_network":1,       "regex\_pattern":"(?\<address\>.\*)(?\<version\>0d0)(?\<identifier\>.\*)",       "is\_default":0,       "status":1,       "create\_date":1690613083    },    {       "version":"ldl",       "is\_main\_network":0,       "regex\_pattern":"(?\<address\>.\*)(?\<version\>ldl)(?\<identifier\>.\*)",       "is\_default":0,       "status":1,       "create\_date":1690613083    } \] |
| :---- |

### get\_backlog\_list {#get_backlog_list}

return backlog list

| ID: | 0df01ae7dd51cec4 |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | False |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/0df01ae7dd51cec4

**Results:**

| {    "api\_status":"success",    "backlog\_list":\[    \] } |
| :---- |

### reset\_backlog {#reset_backlog}

reset backlog

| ID: | epOW5kdvb12QdgsV |
| :---- | :---- |
| Method: | POST |
| Require Identity: | True |
| Private: | False |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/epOW5kdvb12QdgsV

**Results:**

| {    "api\_status":"success" } |
| :---- |

### new\_address\_version\_released {#new_address_version_released}

inserts a new record to table address\_version.  is\_main\_network indicates whether the new address version is on the main network or on a test network.  if the new record indicates is\_default \= true the previous address\_version record set to is\_default \= true is updated to is\_default \= false.  there can only be a single record for each network that is set to is\_default \= true

| ID: | hMrav9QMiMyLQosB |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | True |

| p0 | version\<required\> |
| :---- | :---- |
| p1 | regex\_pattern\<required\> |
| p2 | is\_main\_network\<required\> |
| p3 | is\_default\<required\> |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/hMrav9QMiMyLQosB

**Results:**

|  |
| :---- |

### list\_config\_private {#list_config_private}

returns private config values that are only available to the node operator

| ID: | CZOTAF5LfusB1Ht5 |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | True |

| p0 | type |
| :---- | :---- |
| p1 | status |
| p2 | order\_by="create\_date desc" |
| p3 | record\_limit=1000 |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/CZOTAF5LfusB1Ht5?p3=5

Note: The output is limited to 5 entries (p3=5)

**Results:**

| \[    {       "config\_id":"ph4gRtldL91WSuMwFwbR",       "config\_name":"MAX\_STORAGE\_RESERVED",       "value":"1073741824",       "type":"number",       "status":1,       "create\_date":1698686736    },    {       "config\_id":"oHMbYZpT0YpuT5FSKyXF",       "config\_name":"CHUNK\_SIZE",       "value":"50331648",       "type":"number",       "status":1,       "create\_date":1698686736    },    {       "config\_id":"QcBRhDonckug5h2JB3K2",       "config\_name":"JOB\_CONFIG\_PATH",       "value":"/home/emmanuel/millix/job.json",       "type":"string",       "status":1,       "create\_date":1698686736    },    {       "config\_id":"xHtzHupcsmr68ArSpywQ",       "config\_name":"PEER\_ROTATION\_CONFIG",       "value":"{\\"PROACTIVE\\":{\\"frequency\\":0.7,\\"DATA\_QUANTITY\\":{\\"frequency\\":0.25,\\"random\_set\_length\\":\\"PEER\_ROTATION\_MORE\_THAN\_AVERAGE\\"},\\"POPULARITY\\":{\\"frequency\\":0.25,\\"random\_set\_length\\":\\"PEER\_ROTATION\_MORE\_THAN\_AVERAGE\\"},\\"RANDOM\\":{\\"frequency\\":0.5}},\\"REACTIVE\\":{\\"frequency\\":0.3}}",       "type":"object",       "status":1,       "create\_date":1698686736    },    {       "config\_id":"872O87oypGthYSbojhks",       "config\_name":"PEER\_ROTATION\_MORE\_THAN\_ALL",       "value":"0.01",       "type":"number",       "status":1,       "create\_date":1698686736    } \] |
| :---- |

### list\_config\_public {#list_config_public}

returns returns public config values

| ID: | hXwPQrVhLEALFsIJ |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | False |

| p0 | type |
| :---- | :---- |
| p1 | status |
| p2 | order\_by="create\_date desc" |
| p3 | record\_limit=1000 |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/hXwPQrVhLEALFsIJ

**Results:**

| \[    {       "config\_id":"xHtzHupcsmr68ArSpywQ",       "config\_name":"PEER\_ROTATION\_CONFIG",       "value":"{\\"PROACTIVE\\":{\\"frequency\\":0.7,\\"DATA\_QUANTITY\\":{\\"frequency\\":0.25,\\"random\_set\_length\\":\\"PEER\_ROTATION\_MORE\_THAN\_AVERAGE\\"},\\"POPULARITY\\":{\\"frequency\\":0.25,\\"random\_set\_length\\":\\"PEER\_ROTATION\_MORE\_THAN\_AVERAGE\\"},\\"RANDOM\\":{\\"frequency\\":0.5}},\\"REACTIVE\\":{\\"frequency\\":0.3}}",       "type":"object",       "status":1,       "create\_date":1698686736    },    {       "config\_id":"trHYvFkvvlXx8xOLi2YY",       "config\_name":"MILLIX\_CIRCULATION",       "value":"9000000000000000",       "type":"number",       "status":1,       "create\_date":1698686736    },    {       "config\_id":"Uye4hpcINJeHbxupAu8M",       "config\_name":"NODE\_PORT\_API",       "value":"5500",       "type":"number",       "status":1,       "create\_date":1698686736    },    {       "config\_id":"QPVX9Xfm5dbKmUKMUBeK",       "config\_name":"NODE\_MILLIX\_VERSION",       "value":"1.23.2",       "type":"string",       "status":1,       "create\_date":1698686736    },    {       "config\_id":"XevP2PFQ3M92KTEY8Erd",       "config\_name":"NODE\_INITIAL\_LIST",       "value":"\[{\\"host\\":\\"18.136.162.158\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"18.136.162.158\\",\\"port\_protocol\\":10001,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00001.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00002.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00003.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00004.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00005.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00006.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00007.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00008.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00009.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00010.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00011.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00012.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00013.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00014.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00015.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00016.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00017.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00018.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00019.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00020.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00021.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00022.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00023.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00024.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00025.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00026.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00027.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00028.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00029.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00030.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00031.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00032.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00033.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00034.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00035.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00036.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00037.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00038.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00039.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00040.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00041.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00042.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00043.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00044.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00045.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00046.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00047.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00048.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00049.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00050.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00051.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00052.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00053.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00054.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00055.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00056.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00057.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00058.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00059.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00060.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00061.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00062.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00063.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00064.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00065.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00066.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00067.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00068.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00069.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00070.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00071.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00072.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00073.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00074.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00075.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00076.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00077.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00078.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00079.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00080.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00081.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00082.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00083.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00084.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00085.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00086.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00087.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00088.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00089.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00090.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00091.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00092.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00093.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00094.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00095.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"hos t\\":\\"node-00096.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00097.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00098.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00099.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000},{\\"host\\":\\"node-00100.millix.com\\",\\"port\_protocol\\":10000,\\"port\_api\\":5500,\\"port\_discovery\\":2000}\]",       "type":"object",       "status":1,       "create\_date":1698686736    },    {       "config\_id":"wwpo4N5eEZpGAVi9zWfc",       "config\_name":"NODE\_PORT",       "value":"10000",       "type":"number",       "status":1,       "create\_date":1698686735    } \] |
| :---- |

### optimize\_database {#optimize_database}

executes the sqlite optimize database function on the indicated shard\_id, or on all shards if shard\_id is not provided. this API pauses the node service, tasks and network until it is finished

| ID: | 4wR3kjTwwC67R94Z |
| :---- | :---- |
| Method: | PUT |
| Require Identity: | True |
| Private: | True |

| p0 | shard\_id |
| :---- | :---- |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/4wR3kjTwwC67R94Z

Note: This takes a long time to run

**Results:**

| Did not return… just hung \*\*\* |
| :---- |

### reset\_transaction\_verification\_timeout {#reset_transaction_verification_timeout}

resets is\_timeout field in table transaction records belonging to the provided key\_identifier from true to false to allow the node to retry transaction validation

| ID: | Fv9lheUpVYq5caRe |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | True |

| p0 | key\_identifier\<required\> |
| :---- | :---- |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/Fv9lheUpVYq5caRe?p0=17S8Bwq2KZMWAXrzZ49LW3ArowUMyZ3k390a01KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd

**Results:**

| \*\*\* |
| :---- |

### register\_node\_identity {#register_node_identity}

this API pushes a value from the client node to the host node for it to apply to its database. it upserts a record in the host node's table node\_attribute with attribute\_type\_id \= node\_public\_key.  if a corresponding node\_id does not exist in table node, that is inserted as well

| ID: | PwwdU9lZbgMqS2DA |
| :---- | :---- |
| Method: | GET |
| Require Identity: | False |
| Private: | nan |

| p0 | public\_key\<required\> |
| :---- | :---- |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/PwwdU9lZbgMqS2DA

**Results:**

| \*\*\* |
| :---- |

### list\_log {#list_log}

returns a list of log items from the node. it returns the newest records by default

| ID: | GMDazQSouYWzLTCv |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | True |

| p0 | type |
| :---- | :---- |
| p1 | content |
| p2 | date\_begin |
| p3 | date\_end |
| p4 | order\_by="create\_date desc" |
| p5 | record\_limit=1000 |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/GMDazQSouYWzLTCv?p5=5

Note: The output is limited to 5 entries (p5=5)

**Results:**

| {    "log":\[       {          "type":"connection\_ready",          "content":{          },          "idx":103894,          "timestamp":"2023-10-30 18:43:46"       },       {          "type":"node\_attribute\_request",          "content":{             "node\_id":"1JTZ9sknvSR1HrsUJ2AKBE3LfHPTiXne5o",             "attribute\_type":"shard\_protocol"          },          "idx":103895,          "timestamp":"2023-10-30 18:43:46"       },       {          "type":"node\_attribute\_request",          "content":{             "node\_id":"1JTZ9sknvSR1HrsUJ2AKBE3LfHPTiXne5o",             "attribute\_type":"transaction\_count"          },          "idx":103896,          "timestamp":"2023-10-30 18:43:46"       },       {          "type":"node\_attribute\_request",          "content":{             "node\_id":"1JTZ9sknvSR1HrsUJ2AKBE3LfHPTiXne5o",             "attribute\_type":"peer\_count"          },          "idx":103897,          "timestamp":"2023-10-30 18:43:46"       },       {          "type":"node\_attribute\_request",          "content":{             "node\_id":"1JTZ9sknvSR1HrsUJ2AKBE3LfHPTiXne5o",             "attribute\_type":"job\_list"          },          "idx":103898,          "timestamp":"2023-10-30 18:43:46"       }    \] } |
| :---- |

### toggle\_service\_network {#toggle_service_network}

toggles the network service for all networks (main or test networks) between running (true) and not running (false)

| ID: | 5sgpSNaqnHIcfocl |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | True |

| p0 | is\_running\<required\> |
| :---- | :---- |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/5sgpSNaqnHIcfocl?p0=true

**Results:**

| \*\*\* |
| :---- |

### toggle\_service\_node {#toggle_service_node}

toggles the node service between running (true) and not running (false)

| ID: | yefPsK2TvkZmC6M4 |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | True |

| p0 | is\_running\<required\> |
| :---- | :---- |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/yefPsK2TvkZmC6M4

**Results:**

| \*\*\* |
| :---- |

### reload\_configs\_from\_database {#reload_configs_from_database}

reloads configurations from the database

| ID: | QgbDSAuy1SYgocs6 |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | True |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/QgbDSAuy1SYgocs6

**Results:**

| {    "api\_status":"success" } |
| :---- |

### get\_mnemonic\_phrase {#get_mnemonic_phrase}

returns the 24 word mnemonic phrase for the active session which is stored by default in the millix directory

| ID: | BPZZ0l2nTfMSmmpl |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | True |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/BPZZ0l2nTfMSmmpl

**Results:**

| {    "mnemonic\_phrase":"awesome syrup cream lava stock youth grape brass breeze story theme senior pulp life way mule entire extra bid weapon horn summer collect bunker" } |
| :---- |

### get\_address\_private\_key {#get_address_private_key}

returns the private key for the indicated address that is derived from the master key that is temporarily stored in node memory for the active wallet

| ID: | PKUv2JfV87KpEZwE |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | True |

| p0 | address\<required\> |
| :---- | :---- |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/PKUv2JfV87KpEZwE?p0=17S8Bwq2KZMWAXrzZ49LW3ArowUMyZ3k390a01KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd

**Results:**

| {    "private\_key\_hex":"04cb2058313cda45ed13c1a811f1166a71034eb378e986dab272961e85c34ebf" } |
| :---- |

### update\_config\_value {#update_config_value}

updates table config value field for the indicated config\_id record

| ID: | LLpSTquu4tZL8Nu5 |
| :---- | :---- |
| Method: | POST |
| Require Identity: | True |
| Private: | True |

| p0 | config\_id\<required\> |
| :---- | :---- |
| p1 | value\<required\> |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/LLpSTquu4tZL8Nu5

**Results:**

| \*\*\* |
| :---- |

### list\_node\_attribute {#list_node_attribute}

returns records from table node\_attributes.  it returns the newest records by default

| ID: | AgsSNTSA0RHmWUkp |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | False |

| p0 | node\_id |
| :---- | :---- |
| p1 | attribute\_type\_id |
| p2 | status |
| p3 | order\_by="create\_date desc" |
| p4 | record\_limit=1000 |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/AgsSNTSA0RHmWUkp?p4=5

Note: The output is limited to 5 entries (p4=5)

**Results:**

| \[    {       "attribute\_type":"shard\_protocol",       "node\_id":"183nfoQAjYXrSJXRAaqpdUEt3tzZbp6iMP",       "attribute\_type\_id":"kbkMAkuyqOlSNKv7udFz",       "value":\[          {             "shard\_id":"qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",             "transaction\_count":5087171,             "update\_date":1698753945,             "is\_required":true,             "fee\_ask\_request\_byte":20          }       \],       "status":1,       "create\_date":1698753949    },    {       "attribute\_type":"transaction\_count",       "node\_id":"183nfoQAjYXrSJXRAaqpdUEt3tzZbp6iMP",       "attribute\_type\_id":"qhTfPzLhZENklxNbTQYW",       "value":5087171,       "status":1,       "create\_date":1698753949    },    {       "attribute\_type":"job\_list",       "node\_id":"183nfoQAjYXrSJXRAaqpdUEt3tzZbp6iMP",       "attribute\_type\_id":"Edpe3EKdoRBX2EMNHTW3",       "value":\[          {             "job\_name":"peer\_rotation",             "status":1          },          {             "job\_name":"node\_list",             "status":1          },          {             "job\_name":"transaction\_validation",             "status":1          },          {             "job\_name":"consensus\_watchdog\_validation",             "status":1          },          {             "job\_name":"wallet\_inspect",             "status":1          },          {             "job\_name":"wallet\_retry\_validation\_update",             "status":1          },          {             "job\_name":"shard\_zero\_pruning",             "status":1          },          {             "job\_name":"dag\_progress",             "status":0          },          {             "job\_name":"transaction\_output\_expiration",             "status":1          },          {             "job\_name":"node\_attribute\_update",             "status":1          }       \],       "status":1,       "create\_date":1698753949    },    {       "attribute\_type":"address\_default",       "node\_id":"183nfoQAjYXrSJXRAaqpdUEt3tzZbp6iMP",       "attribute\_type\_id":"T4CefCfUyoc4CWv7cZ5V",       "value":"16CF5nEez3onJv1UpDYr5iS4eFNZunYvkJ0a016CF5nEez3onJv1UpDYr5iS4eFNZunYvkJ",       "status":1,       "create\_date":1698753949    },    {       "attribute\_type":"node\_about",       "node\_id":"183nfoQAjYXrSJXRAaqpdUEt3tzZbp6iMP",       "attribute\_type\_id":"ijDj2VlTyJBl5R4iTCmG",       "value":{          "node\_version":"1.23.0",          "node\_create\_date":1640750972,          "node\_update\_date":1672966136       },       "status":1,       "create\_date":1698753949    } \] |
| :---- |

### get\_transaction\_input {#get_transaction_input}

returns a single record from table transaction\_input as indicated by transaction\_id and input\_position in the indicated shard

| ID: | hbBmFhIpJS87W1Fy |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | False |

| p0 | transaction\_id\<required\> |
| :---- | :---- |
| p1 | input\_position\<required\> |
| p2 | shard\_id\<required\> |

p0=fssYqPVNXmMrsFsxLm2iaeHKWoZACKY7qr3NynzC7Dg7bd5G5

p1=0

p2=qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/hbBmFhIpJS87W1Fy?p0=fssYqPVNXmMrsFsxLm2iaeHKWoZACKY7qr3NynzC7Dg7bd5G5\&p1=0\&p2=qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR

**Results:**

| {    "transaction\_id":"fssYqPVNXmMrsFsxLm2iaeHKWoZACKY7qr3NynzC7Dg7bd5G5",    "shard\_id":"qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",    "input\_position":0,    "output\_transaction\_id":"2XCZzRCf52X9rwr6Vmc4joku1NMfjBbxhfvVBuqaveXZhyTu9e",    "output\_position":0,    "output\_shard\_id":"qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",    "output\_transaction\_date":1692620135,    "double\_spend\_date":null,    "is\_double\_spend":0,    "address":"1KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd0a01KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd",    "address\_key\_identifier":"1KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd",    "status":2,    "create\_date":1692620166 } |
| :---- |

### get\_transaction {#get_transaction}

returns a single record from table transaction as indicated by transaction\_id in the indicated shard

| ID: | wDyC195wgjPjM2Ut |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | False |

| p0 | transaction\_id\<required\> |
| :---- | :---- |
| p1 | shard\_id\<required\> |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/wDyC195wgjPjM2Ut?p0=fssYqPVNXmMrsFsxLm2iaeHKWoZACKY7qr3NynzC7Dg7bd5G5\&p1=qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR

**Results:**

| {    "transaction\_id":"fssYqPVNXmMrsFsxLm2iaeHKWoZACKY7qr3NynzC7Dg7bd5G5",    "shard\_id":"qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",    "transaction\_date":1692620135,    "node\_id\_origin":"1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4",    "node\_id\_proxy":"1Gc2V1pCaANgUQyArw4DDCrCZ4Ft6iPbZh",    "version":"0a20",    "payload\_hash":"tdV4e3V3KZZjRJCSvY7UBUtwnes1jAK93QrfpdZZLjpPn3upQ",    "stable\_date":1692620933,    "is\_stable":1,    "parent\_date":1692620166,    "is\_parent":1,    "timeout\_date":null,    "is\_timeout":0,    "status":2,    "create\_date":1692620166 } |
| :---- |

### get\_transaction\_extended {#get_transaction_extended}

returns a single record with all information about a transaction as indicated by transaction\_id in the indicated shard

| ID: | IBHgAmydZbmTUAe8 |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | False |

| p0 | transaction\_id\<required\> |
| :---- | :---- |
| p1 | shard\_id\<required\> |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/IBHgAmydZbmTUAe8?p0=fssYqPVNXmMrsFsxLm2iaeHKWoZACKY7qr3NynzC7Dg7bd5G5\&p1=qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR

**Results:**

| {    "transaction\_id":"fssYqPVNXmMrsFsxLm2iaeHKWoZACKY7qr3NynzC7Dg7bd5G5",    "shard\_id":"qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",    "transaction\_date":1692620135,    "node\_id\_origin":"1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4",    "node\_id\_proxy":"1Gc2V1pCaANgUQyArw4DDCrCZ4Ft6iPbZh",    "version":"0a20",    "payload\_hash":"tdV4e3V3KZZjRJCSvY7UBUtwnes1jAK93QrfpdZZLjpPn3upQ",    "stable\_date":1692620933,    "is\_stable":1,    "parent\_date":1692620166,    "is\_parent":1,    "timeout\_date":null,    "is\_timeout":0,    "status":2,    "create\_date":1692620166,    "transaction\_signature\_list":\[       {          "address\_base":"1KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd",          "signature":"3ckefRsSe6AGXzLLaTwjU3Z83658QBn4bJZCx9rRNuQhdSJhbY2D1pRpUyNsFMqvwtd59DWhC6zaarymyaC5xeM",          "status":1,          "create\_date":1692620166,          "key\_public":"22rWHt1iiwJwBKMZBXHNHYtWFKivbxCLDF7mRZuiMjPZa"       }    \],    "transaction\_input\_list":\[       {          "input\_position":0,          "output\_transaction\_id":"2XCZzRCf52X9rwr6Vmc4joku1NMfjBbxhfvVBuqaveXZhyTu9e",          "output\_shard\_id":"qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",          "output\_position":0,          "output\_transaction\_date":1692620135,          "double\_spend\_date":null,          "is\_double\_spend":0,          "address":"1KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd0a01KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd",          "address\_key\_identifier":"1KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd",          "status":2,          "create\_date":1692620166       }    \],    "transaction\_output\_list":\[       {          "output\_position":-1,          "address":"189BiNHfmQVbbKUCq6Em7HiJ4cgG8AVFrJ0a0189BiNHfmQVbbKUCq6Em7HiJ4cgG8AVFrJ",          "address\_key\_identifier":"189BiNHfmQVbbKUCq6Em7HiJ4cgG8AVFrJ",          "amount":1000,          "stable\_date":1692620933,          "is\_stable":1,          "spent\_date":null,          "is\_spent":0,          "double\_spend\_date":null,          "is\_double\_spend":0,          "status":2,          "create\_date":1692620166       },       {          "output\_position":0,          "address":"1MYTi5Xsbf9MpfEFmnDgMmAQ6czujQ6ija0a01EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP",          "address\_key\_identifier":"1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP",          "amount":500000,          "stable\_date":1692620933,          "is\_stable":1,          "spent\_date":null,          "is\_spent":0,          "double\_spend\_date":null,          "is\_double\_spend":0,          "status":2,          "create\_date":1692620166       },       {          "output\_position":1,          "address":"1KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd0a01KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd",          "address\_key\_identifier":"1KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd",          "amount":503000,          "stable\_date":1692620933,          "is\_stable":1,          "spent\_date":1693227728,          "is\_spent":1,          "double\_spend\_date":null,          "is\_double\_spend":0,          "status":2,          "create\_date":1692620166       }    \],    "transaction\_parent\_list":\[       {          "transaction\_id\_parent":"aRG5Hq1yGRhAUVoCsthbmQueJGHKW3bj6NEMVoYWqTe4Ep7dh",          "shard\_id\_parent":"qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",          "transaction\_id\_child":"fssYqPVNXmMrsFsxLm2iaeHKWoZACKY7qr3NynzC7Dg7bd5G5",          "shard\_id\_child":"qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",          "status":1,          "create\_date":1692621025       }    \],    "transaction\_output\_attribute":{       "transaction\_output\_metadata":{                 }    } } |
| :---- |

### get\_transaction\_output {#get_transaction_output}

returns a single record from table transaction\_output as indicated by transaction\_id and output\_position in the indicated shard

| ID: | KN2ZttYDEKzCulEZ |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | False |

| p0 | transaction\_id\<required |
| :---- | :---- |
| p1 | output\_position\<required\> |
| p2 | shard\_id\<required\> |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/KN2ZttYDEKzCulEZ?p0=fssYqPVNXmMrsFsxLm2iaeHKWoZACKY7qr3NynzC7Dg7bd5G5\&p1=0\&p2=qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR

**Results:**

| {    "transaction\_id":"fssYqPVNXmMrsFsxLm2iaeHKWoZACKY7qr3NynzC7Dg7bd5G5",    "shard\_id":"qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",    "output\_position":0,    "address":"1MYTi5Xsbf9MpfEFmnDgMmAQ6czujQ6ija0a01EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP",    "address\_key\_identifier":"1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP",    "amount":500000,    "stable\_date":1692620933,    "is\_stable":1,    "spent\_date":null,    "is\_spent":0,    "double\_spend\_date":null,    "is\_double\_spend":0,    "status":2,    "create\_date":1692620166,    "transaction\_date":1692620135 } |
| :---- |

### list\_transaction\_output {#list_transaction_output}

returns records from table transaction\_output that match the provided parameters.  it returns the newest records by default

| ID: | FDLyQ5uo5t7jltiQ |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | False |

| p0 | transaction\_id |
| :---- | :---- |
| p1 | date\_begin |
| p2 | date\_end |
| p3 | address\_key\_identifier |
| p4 | is\_double\_spend |
| p5 | double\_spend\_date\_begin |
| p6 | double\_spend\_date\_end |
| p7 | is\_stable |
| p8 | stable\_date\_begin |
| p9 | stable\_date\_end |
| p10 | is\_spent |
| p11 | spent\_date\_begin |
| p12 | spent\_date\_end |
| p13 | order\_by="create\_date desc" |
| p14 | record\_limit=1000 |
| p15 | shard\_id |
|  |  |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/FDLyQ5uo5t7jltiQ?p14=2

Note: The output is limited to 2 entries (p14=2)

**Results:**

| \[    {       "transaction\_id":"hhEhQq192vcNFDH1WvG6nL1AqTZLZr9gMb5AD8AUXKARkVb4o",       "shard\_id":"qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",       "output\_position":0,       "address":"1JUaQGfziY9PxFEcTNAs5ofXuuvPfsNMBD0a01JUaQGfziY9PxFEcTNAs5ofXuuvPfsNMBD",       "address\_key\_identifier":"1JUaQGfziY9PxFEcTNAs5ofXuuvPfsNMBD",       "amount":20003301,       "stable\_date":null,       "is\_stable":0,       "spent\_date":null,       "is\_spent":0,       "double\_spend\_date":null,       "is\_double\_spend":0,       "status":2,       "create\_date":1698754545,       "transaction\_date":1698754528,       "transaction\_create\_date":1698754545,       "transaction\_status":2    },    {       "transaction\_id":"hhEhQq192vcNFDH1WvG6nL1AqTZLZr9gMb5AD8AUXKARkVb4o",       "shard\_id":"qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",       "output\_position":-1,       "address":"1GgaUk3CuJVxQF7NrkRvbjU9L1vQaP5Q730a01GgaUk3CuJVxQF7NrkRvbjU9L1vQaP5Q73",       "address\_key\_identifier":"1GgaUk3CuJVxQF7NrkRvbjU9L1vQaP5Q73",       "amount":1000,       "stable\_date":null,       "is\_stable":0,       "spent\_date":null,       "is\_spent":0,       "double\_spend\_date":null,       "is\_double\_spend":0,       "status":2,       "create\_date":1698754545,       "transaction\_date":1698754528,       "transaction\_create\_date":1698754545,       "transaction\_status":2    } \] |
| :---- |

### list\_transaction\_input {#list_transaction_input}

returns records from table transaction\_input that match the provided parameters.  it returns the newest records by default

| ID: | I3EoELuQCmqwvp8C |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | False |

| p0 | transaction\_id |
| :---- | :---- |
| p1 | date\_begin |
| p2 | date\_end |
| p3 | address\_key\_identifier |
| p4 | is\_double\_spend |
| p5 | double\_spend\_date\_begin |
| p6 | double\_spend\_date\_end |
| p7 | output\_transaction\_id |
| p8 | output\_position |
| p9 | order\_by="create\_date desc" |
| p10 | record\_limit=1000 |
| p11 | shard\_id |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/I3EoELuQCmqwvp8C?p10=2

Note: The output is limited to 2 entries (p10=2)

**Results:**

| \[    {       "transaction\_id":"hhEhQq192vcNFDH1WvG6nL1AqTZLZr9gMb5AD8AUXKARkVb4o",       "shard\_id":"qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",       "input\_position":0,       "output\_transaction\_id":"2Ld7VaTWxJFhW8xWMScMEwt96VXnvWydZbtvfWMfbi9ih2WzcT",       "output\_position":0,       "output\_shard\_id":"qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",       "output\_transaction\_date":1698754528,       "double\_spend\_date":null,       "is\_double\_spend":0,       "address":"1JUaQGfziY9PxFEcTNAs5ofXuuvPfsNMBD0a01JUaQGfziY9PxFEcTNAs5ofXuuvPfsNMBD",       "address\_key\_identifier":"1JUaQGfziY9PxFEcTNAs5ofXuuvPfsNMBD",       "status":2,       "create\_date":1698754545,       "transaction\_date":1698754528,       "transaction\_create\_date":1698754545    },    {       "transaction\_id":"2Ld7VaTWxJFhW8xWMScMEwt96VXnvWydZbtvfWMfbi9ih2WzcT",       "shard\_id":"qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",       "input\_position":6,       "output\_transaction\_id":"UBTgSwhaZXjowSp1WYSAZ9pD6ocx1JVbMVnYpVxpuHnyv4wnP",       "output\_position":0,       "output\_shard\_id":"qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",       "output\_transaction\_date":1698753927,       "double\_spend\_date":null,       "is\_double\_spend":0,       "address":"1JUaQGfziY9PxFEcTNAs5ofXuuvPfsNMBD0a01JUaQGfziY9PxFEcTNAs5ofXuuvPfsNMBD",       "address\_key\_identifier":"1JUaQGfziY9PxFEcTNAs5ofXuuvPfsNMBD",       "status":2,       "create\_date":1698754544,       "transaction\_date":1698754528,       "transaction\_create\_date":1698754540    } \] |
| :---- |

### list\_transaction\_output\_attribute\_sent {#list_transaction_output_attribute_sent}

returns sent transactions attribute records from table transaction\_output\_attribute that match the provided parameters.  it returns the newest records by default

| ID: | F7APEv5JfCY1siyz |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | False |

| p0 | date\_begin |
| :---- | :---- |
| p1 | date\_end |
| p2 | node\_id\_origin |
| p3 | is\_stable |
| p4 | is\_parent |
| p5 | is\_timeout |
| p6 | create\_date\_begin |
| p7 | create\_date\_end |
| p8 | status |
| p9 | version |
| p10 | address\_key\_identifier |
| p11 | attribute\_type\_id |
| p12 | data\_type |
| p13 | order\_by="create\_date desc" |
| p14 | record\_limit=1000 |
| p15 | shard\_id |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/F7APEv5JfCY1siyz?p14=5

Note: The output is limited to 5 entries (p14=5) (there are only 2 records in this table)

**Result:**

| \[    {       "transaction\_id":"2Ld7VaTWxJFhW8xWMScMEwt96VXnvWydZbtvfWMfbi9ih2WzcT",       "transaction\_date":1698754528,       "transaction\_create\_date":1698754540,       "address\_key\_identifier\_from":"1JUaQGfziY9PxFEcTNAs5ofXuuvPfsNMBD",       "address\_from":"1JUaQGfziY9PxFEcTNAs5ofXuuvPfsNMBD0a01JUaQGfziY9PxFEcTNAs5ofXuuvPfsNMBD",       "address\_key\_identifier\_to":"1JUaQGfziY9PxFEcTNAs5ofXuuvPfsNMBD",       "address\_to":"1JUaQGfziY9PxFEcTNAs5ofXuuvPfsNMBD0a01JUaQGfziY9PxFEcTNAs5ofXuuvPfsNMBD",       "amount":20004301,       "is\_stable":0,       "transaction\_output\_attribute":\[                 \]    },    {       "transaction\_id":"RnW3GtxkC5ffCAkayuZp5hzQFam7FsRj4Rzto3UVc8pGbJNVM",       "transaction\_date":1698754514,       "transaction\_create\_date":1698754524,       "address\_key\_identifier\_from":"1Gsiw7m35HwUpG2A2oUeukovwGzb2hasJr",       "address\_from":"1Gsiw7m35HwUpG2A2oUeukovwGzb2hasJr0a01Gsiw7m35HwUpG2A2oUeukovwGzb2hasJr",       "address\_key\_identifier\_to":"1Gsiw7m35HwUpG2A2oUeukovwGzb2hasJr",       "address\_to":"1Gsiw7m35HwUpG2A2oUeukovwGzb2hasJr0a01Gsiw7m35HwUpG2A2oUeukovwGzb2hasJr",       "amount":1359072,       "is\_stable":0,       "transaction\_output\_attribute":\[                 \]    } \] |
| :---- |

### list\_transaction\_output\_attribute\_received {#list_transaction_output_attribute_received}

returns received transactions attribute records from table transaction\_output\_attribute that match the provided parameters.  it returns the newest records by default

| ID: | Mu7VpxzfYyQimf3V |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | False |

| p0 | date\_begin |
| :---- | :---- |
| p1 | date\_end |
| p2 | node\_id\_origin |
| p3 | is\_stable |
| p4 | is\_parent |
| p5 | is\_timeout |
| p6 | create\_date\_begin |
| p7 | create\_date\_end |
| p8 | status |
| p9 | version |
| p10 | address\_key\_identifier |
| p11 | attribute\_type\_id |
| p12 | data\_type |
| p13 | order\_by="create\_date desc" |
| p14 | record\_limit=1000 |
| p15 | shard\_id |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/Mu7VpxzfYyQimf3V?p14=5

**Results:**

| \[    {       "transaction\_id":"2Ld7VaTWxJFhW8xWMScMEwt96VXnvWydZbtvfWMfbi9ih2WzcT",       "transaction\_date":1698754528,       "transaction\_create\_date":1698754540,       "amount":20004301,       "address\_key\_identifier\_to":"1JUaQGfziY9PxFEcTNAs5ofXuuvPfsNMBD",       "address\_to":"1JUaQGfziY9PxFEcTNAs5ofXuuvPfsNMBD0a01JUaQGfziY9PxFEcTNAs5ofXuuvPfsNMBD",       "output\_position":0,       "is\_stable":0,       "is\_spent":1,       "is\_double\_spend":0,       "address\_key\_identifier\_from":"1JUaQGfziY9PxFEcTNAs5ofXuuvPfsNMBD",       "address\_from":"1JUaQGfziY9PxFEcTNAs5ofXuuvPfsNMBD0a01JUaQGfziY9PxFEcTNAs5ofXuuvPfsNMBD",       "transaction\_output\_attribute":\[                 \]    },    {       "transaction\_id":"RnW3GtxkC5ffCAkayuZp5hzQFam7FsRj4Rzto3UVc8pGbJNVM",       "transaction\_date":1698754514,       "transaction\_create\_date":1698754524,       "amount":1359072,       "address\_key\_identifier\_to":"1Gsiw7m35HwUpG2A2oUeukovwGzb2hasJr",       "address\_to":"1Gsiw7m35HwUpG2A2oUeukovwGzb2hasJr0a01Gsiw7m35HwUpG2A2oUeukovwGzb2hasJr",       "output\_position":0,       "is\_stable":0,       "is\_spent":1,       "is\_double\_spend":0,       "address\_key\_identifier\_from":"1Gsiw7m35HwUpG2A2oUeukovwGzb2hasJr",       "address\_from":"1Gsiw7m35HwUpG2A2oUeukovwGzb2hasJr0a01Gsiw7m35HwUpG2A2oUeukovwGzb2hasJr",       "transaction\_output\_attribute":\[                 \]    } \] |
| :---- |

### list\_transaction\_output\_attribute\_received {#list_transaction_output_attribute_received-1}

returns received transaction attribute records from table transaction\_output\_attribute

| ID: | yyCtgjuFu9mx0edg |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | False |

| p0 | transaction\_id\<required\> |
| :---- | :---- |
| p1 | shard\_id |
| p2 | attribute\_type\_id |
| p3 | data\_type |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/yyCtgjuFu9mx0edg?p0=

**Results:**

| \*\*\*\* |
| :---- |

### new\_session\_with\_phrase {#new_session_with_phrase}

uses the passphrase and 24 word mnemonic phrase to set the active wallet used in the session by the node

| ID: | GktuwZlVP39gty6v |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | True |

| p0 | passphrase\<required\> |
| :---- | :---- |
| p1 | mnemonic\_phrase\<required\> |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/GktuwZlVP39gty6v

**Results:**

| \*\*\*\*\*\*\* |
| :---- |

### new\_session\_with\_file {#new_session_with_file}

uses the passphrase and file path containing the 24 word mnemonic phrase to set the active wallet used in the session by the node

| ID: | NwYcrWsmpE1p8ylI |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | True |

| p0 | passphrase\<required\> |
| :---- | :---- |
| p1 | mnemonic\_file\_path\<required\> |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/NwYcrWsmpE1p8ylI

**Results:**

| \*\*\* |
| :---- |

### list\_shard {#list_shard}

returns records from table shard. it returns the newest records by default

| ID: | OMAlxmPq4rZs71K8 |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | False |

| p0 | shard\_type |
| :---- | :---- |
| p1 | is\_required |
| p2 | node\_id\_origin |
| p3 | status |
| p4 | order\_by="create\_date desc" |
| p5 | record\_limit=1000 |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/OMAlxmPq4rZs71K8

**Results:**

| \[    {       "shard\_id":"qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",       "shard\_name":"genesis",       "shard\_type":"protocol",       "schema\_name":"qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR.sqlite",       "schema\_path":"${private\_field}",       "is\_required":1,       "record\_count":0,       "disk\_size":0,       "node\_id\_origin":"mzPPDwP9BJvHXyvdoBSJJsCQViRTtPbcqA",       "shard\_date":1579648257,       "node\_signature":"66n8CxBweCDRZWdvrg9caX7ckCh3Bgz5eDsJQtKYDbgVSAnRZMHCp41dnD4P1gvc6fjocFRhxDDWwtNh8JtpDpbE",       "update\_date":1690613086,       "status":1,       "create\_date":1690613086    } \] |
| :---- |

### add\_shard {#add_shard}

adds a new shard and returns the record

| ID: | aSiBLKkEsHI9lDr3 |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | True |

| p0 | shard\_name\<required\> |
| :---- | :---- |
| p1 | shard\_type\<required\> |
| p2 | is\_required\<required\> |
| p3 | schema\_name |
| p4 | schema\_path |
| p5 | shard\_attribute={} |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/aSiBLKkEsHI9lDr3

**Results:**

| \*\*\* |
| :---- |

### support\_shard {#support_shard}

adds support to an existent shard

| ID: | FAow0eot8ZejZUTJ |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | True |

| p0 | shard\_id\<required\> |
| :---- | :---- |
| p1 | shard\_attribute={} |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/FAow0eot8ZejZUTJ

**Results:**

| \*\*\*\* |
| :---- |

### verify\_address {#verify_address}

verifies if an address is valid

| ID: | Xim7SaikcsHICvfQ |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | False |

| p0 | address\<required\> |
| :---- | :---- |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/Xim7SaikcsHICvfQ?p0=1KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd0a01KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd

**Results:**

| {    "is\_valid":true,    "address\_base":"1KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd",    "address\_version":"0a0",    "address\_key\_identifier":"1KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd" } |
| :---- |

### get\_random\_mnemonic {#get_random_mnemonic}

returns a random mnemonic phrase

| ID: | Gox4NzTLDnpEr10v |
| :---- | :---- |
| Method: | GET |
| Require Identity: | False |
| Private: | False |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/Gox4NzTLDnpEr10v

**Results:**

| {    "mnemonic":"dragon ten fever disagree fruit move minute story lens inch episode audit horse zebra thing reduce recycle inject rifle assist gesture retire pilot change" } |
| :---- |

### new\_session {#new_session}

uses the passphrase to activate the wallet used in the previous session

| ID: | PMW9LXqUv7vXLpbA |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | True |

| p0 | passphrase\<required\> |
| :---- | :---- |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/PMW9LXqUv7vXLpbA

**Results:**

| \*\*\* |
| :---- |

### get\_session {#get_session}

get the active wallet in the node

| ID: | OBexeX0f0MsnL1S3 |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | True |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/OBexeX0f0MsnL1S3

**Results:**

| {    "api\_status":"success",    "wallet":{       "id":"UfWT4cXERIjRUFz+J3VKfKArJoSY2W+7PZlQiH03iqY=",       "address":"1KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd0a01KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd",       "address\_key\_identifier":"1KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd",       "address\_public\_key":"22rWHt1iiwJwBKMZBXHNHYtWFKivbxCLDF7mRZuiMjPZa"    } } |
| :---- |

### get\_stat\_summary {#get_stat_summary}

get the node stat summary

| ID: | rKclyiLtHx0dx55M |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | True |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/rKclyiLtHx0dx55M

**Results:**

| {    "balance":{       "stable":219751,       "unstable":0    },    "network":{       "online":true,       "peer\_count":60,       "node\_id":"1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4",       "node\_port":10000,       "node\_bind\_ip":"0.0.0.0",       "node\_is\_public":"unknown",       "node\_public\_ip":"5.203.197.152",       "node\_network\_addresses":\[          "192.168.43.219"       \]    },    "log":{       "log\_count":281231,       "backlog\_count":0    },    "transaction":{       "transaction\_count":295455,       "transaction\_unstable\_count":206845,       "transaction\_wallet\_count":238,       "transaction\_wallet\_unstable\_count":0    } } |
| :---- |

### get\_unspent\_output\_summary {#get_unspent_output_summary}

returns the unspent output stat summary

| ID: | FC8ylC617zzn1Gaa |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | True |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/FC8ylC617zzn1Gaa

**Results:**

| {    "transaction\_output\_count":1,    "transaction\_max\_amount":219751 } |
| :---- |

### get\_os\_info {#get_os_info}

get the node os info

| ID: | RLOk0Wji0lQVjynT |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | True |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/RLOk0Wji0lQVjynT

**Results:**

| {    "type":"Linux",    "platform":"linux",    "release":"6.2.0-32-generic",    "arch":"x64",    "cpu":{       "model":"4 \\u00d7 Intel(R) Xeon(R) CPU E5-2680 0 @ 2.70GHz",       "speed":"4 \\u00d7 2693 MHz",       "loadavg":\[          "0.94",          "1.02",          "1.02"       \]    },    "memory":{       "total":"15.61GB",       "free":"13.98GB",       "freePercent":"90%"    },    "node\_millix\_version":"1.23.2",    "node\_millix\_build\_date":1683808753 } |
| :---- |

### send\_transaction\_from\_wallet {#send_transaction_from_wallet}

submits a new transaction from the active wallet, specifying the outputs and amounts to the node. this API builds the tx payload and submits it

| ID: | XPzc85T3reYmGro1 |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | True |

| p0 | transaction\_output\_payload\<require\> |
| :---- | :---- |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/XPzc85T3reYmGro1

**Results:**

| \*\*\* |
| :---- |

### get\_transaction\_output\_data {#get_transaction_output_data}

get binary data stored as a transaction output file

| ID: | Mh9QifTIESw5t1fa |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | True |

| p0 | transaction\_id |
| :---- | :---- |
| p1 | address\_key\_identifier |
| p2 | attribute\_type\_id |
| p3 | file\_hash |
| p4 | file\_key |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/Mh9QifTIESw5t1fa

**Results:**

|  |
| :---- |

### get\_transaction\_output\_key {#get_transaction_output_key}

get the decrypt key for a transaction output file

| ID: | 3K2xvNRLMpiEqLo8 |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | True |

| p0 | transaction\_id |
| :---- | :---- |
| p1 | attribute\_type\_id |
| p2 | file\_hash |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/3K2xvNRLMpiEqLo8

**Results:**

|  |
| :---- |

### sync\_transaction\_output\_data {#sync_transaction_output_data}

sync binary data stored as a transaction output file

| ID: | SLzLU50givH77Rns |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | True |

| p0 | transaction\_id |
| :---- | :---- |
| p1 | address\_key\_identifier |
| p2 | attribute\_type\_id |
| p3 | file\_hash |
| p4 | file\_key |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/SLzLU50givH77Rns

**Results:**

|  |
| :---- |

### send\_transaction\_with\_data\_from\_wallet {#send_transaction_with_data_from_wallet}

submits a new transaction with data on dag from the active wallet, specifying the outputs and amounts to the node. this API builds the tx payload and submits it

| ID: | XQmpDjEVF691r2gX |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | True |

| p0 | transaction\_output\_payload\<require\> |
| :---- | :---- |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/XQmpDjEVF691r2gX

**Results:**

|  |
| :---- |

### send\_aggregation\_transaction\_from\_wallet {#send_aggregation_transaction_from_wallet}

submits a new aggregation transaction from the active wallet which optimizes the funds and allows spending more funds in fewer transactions. this API builds the tx payload and submits it

| ID: | kC5N9Tz06b2rA4Pg |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | True |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/kC5N9Tz06b2rA4Pg

**Results:**

|  |
| :---- |

### list\_transaction\_history {#list_transaction_history}

list transaction history for a given wallet

| ID: | w9UTTA7NXnEDUXhe |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | False |

| p0 | address\_key\_identifier\<require\> |
| :---- | :---- |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/w9UTTA7NXnEDUXhe?p0=1KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd0a

**Results:**

| \[\]  \*\*\* |
| :---- |

### end\_session {#end_session}

ends the active wallet session in the node

| ID: | pIQZEKY4T9vttBUk |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | True |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/pIQZEKY4T9vttBUk

**Results:**

| \*\*\* |
| :---- |

### wallet\_stop\_ongoing\_transaction {#wallet_stop_ongoing_transaction}

stops ongoing transaction if any

| ID: | RIlwZyfnizp2i8wh |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | True |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/RIlwZyfnizp2i8wh

**Results:**

| \*\*\* |
| :---- |

### reset\_transaction\_validation {#reset_transaction_validation}

resets transaction validation

| ID: | QISzUVake29059bi |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | True |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/QISzUVake29059bi

**Results:**

| \*\*\* |
| :---- |

### get\_config\_by\_name {#get_config_by_name}

get node config by name

| ID: | 2wYLWQfWBa6GLPYs |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | True |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/2wYLWQfWBa6GLPYs

**Results:**

| \*\*\* |
| :---- |

### get\_known\_wallet\_balance {#get_known_wallet_balance}

returns the available (stable) balance and pending (unstable) balance of all known wallet

| ID: | NPCpnfUyPHRH4j29 |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | True |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/NPCpnfUyPHRH4j29

**Results:**

| \[    {       "address\_key\_identifier":"112YACQM7Ncy2qGtLcqS6CfhmNEga4MwSN",       "balance\_stable":1300,       "balance\_pending":0    },    {       "address\_key\_identifier":"113zdQkgvvEjCqKWeWkrpgdZFi5p7vXBf6",       "balance\_stable":156577,       "balance\_pending":0    },…    {       "address\_key\_identifier":"1sTCDNb28uwvu11cp8ftWGmZ5bgHDLX2x",       "balance\_stable":0,       "balance\_pending":10634000    },    {       "address\_key\_identifier":"1zKPxSNfmHnRyUQLs1yg23srFPo6K4Q8t",       "balance\_stable":0,       "balance\_pending":2450    } \] |
| :---- |

### get\_node\_public\_ip {#get_node_public_ip}

get node public ip

| ID: | qRHogKQ1Bb7OT4N9 |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | True |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/qRHogKQ1Bb7OT4N9

**Results:**

| {    "node\_public\_ip":"5.203.197.152" } |
| :---- |

### remove\_address\_version {#remove_address_version}

remove wallet address version

| ID: | XgxHmjINTEqANwtS |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | True |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/XgxHmjINTEqANwtS

**Results:**

| \*\*\* |
| :---- |

### get\_known\_address\_balance {#get_known_address_balance}

returns the available (stable) balance and pending (unstable) balance of all known addresses

| ID: | xGaf7vbfY15TGsSd |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | True |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/xGaf7vbfY15TGsSd

**Results:**

|  |
| :---- |

### get\_is\_key\_present {#get_is_key_present}

returns boolean value of presence of private\_key.json

| ID: | LOLb7q23p8rYSLwv |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | False |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/LOLb7q23p8rYSLwv

**Results:**

| {    "private\_key\_exists":true } |
| :---- |

### reset\_validation\_transaction\_by\_guid {#reset_validation_transaction_by_guid}

reset transaction validation by transaction guid

| ID: | P2LMh8NsUTkpWAH3 |
| :---- | :---- |
| Method: | POST |
| Require Identity: | True |
| Private: | True |

| p0 | transaction\_id\<required\> |
| :---- | :---- |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/P2LMh8NsUTkpWAH3

**Results:**

| {"api\_status":"success"} |
| :---- |

### verify\_dns\_has\_address\_key\_identifier {#verify_dns_has_address_key_identifier}

check if the address key identifier is configure in the dns tx record

| ID: | DjwvDZ4bGUzKxOHW |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | False |

| p0 | dns\<required\> |
| :---- | :---- |
| p1 | address\_key\_identifier\<required\> |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/DjwvDZ4bGUzKxOHW

**Results:**

|  |
| :---- |

### get\_transaction\_output\_stats {#get_transaction_output_stats}

get transaction output stats

| ID: | wWo8DCcoXVlpczoP |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | False |

| p0 | date\_begin |
| :---- | :---- |
| p1 | date\_end |
| p2 | node\_id\_origin |
| p3 | is\_stable |
| p4 | is\_parent |
| p5 | is\_timeout |
| p6 | create\_date\_begin |
| p7 | create\_date\_end |
| p8 | status |
| p9 | version |
| p10 | address\_key\_identifier |
| p11 | attribute\_type\_id |
| p12 | data\_type |
| p13 | order\_by="create\_date desc" |
| p14 | record\_limit=1000 |
| p15 | shard\_id |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/wWo8DCcoXVlpczoP

**Results:**

|  |
| :---- |

### cryptography {#cryptography}

depending on direction encrypt or decrypt provided string

| ID: | ZXJ3DqyLslyQETkX |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | True |

| p0 | direction\<required\> |
| :---- | :---- |
| p1 | string\<required\> |

**Example:**

[https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/ZXJ3DqyLslyQETkX?p0=encrypt\&p1=helloworld](https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/ZXJ3DqyLslyQETkX?p0=encrypt&p1=helloworld)

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/ZXJ3DqyLslyQETkX?p0=decrypt\&p1=ddc559713b88ce8c75eb4ae6c572ac54%5Bac4cf2d3e3dd91411c162907be521b8f%5D%0A

encrypt

decrypt

**Results:**

| {    "result":"ddc559713b88ce8c75eb4ae6c572ac54\[ac4cf2d3e3dd91411c162907be521b8f\]" } |
| :---- |

| {    "result":"helloworld" } |
| :---- |

