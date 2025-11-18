# Millix: Creating and using NFTS

## Millix in a nutshell:

If you are already with millix and calling the api's you can skip this topic.

Millix is a novel cryptocurrency based on a dag rather than a blockchain.   Millix is trustless, all nodes (the code for running the millix protocol) are all the same. There are no trusted nodes or servers.  Transactions are verified by consensus.

Reference node can be found at https://github.com/millix

The reference node is written in nodejs.   You can access its api by curling its url.

| https://localhost:5500/api/{node\_id}/{node\_signature}/{api} |
| :---: |

node\_id: The node\_id can be found in node.json the millix data directory.  
node\_signature: Can also be found in node.json  
api: The api id of the api you wish to call. 

For this article we will be using values from the following node.json:

| { 	"key": "xprv9s21ZrQH143K3cfXDm19v7bt7CxbfnUMw8CjGmFdtvnHPNZiC6B1vAGUFnq9YZbD55hTyU2kWvanHi22YfGShDRmh61V2XWXcbMKXU85Gyx", 	"node\_id": "1D7n5SRALg7tQoL5cFR3D2YkQvbJuMFLbB", 	"node\_signature": "3aPwVLmbUxit7QuWtQv1NNmXHKZuuUZrGNuzq6uV7ZxhicF1ffrN5XfsY7FYDac3sKGtiEubEYzrGpEreQapt16o" } |
| :---- |

The apis are accessed by curls using either GET or POST methods depending on the API.  Because the ssls for each node are self-signed you need to not verify peer.

Let's start out with an api that will return both session information and the first address on the node.

**node\_id**: 1D7n5SRALg7tQoL5cFR3D2YkQvbJuMFLbB  
**node\_signature**: 3aPwVLmbUxit7QuWtQv1NNmXHKZuuUZrGNuzq6uV7ZxhicF1ffrN5XfsY7FYDac3sKGtiEubEYzrGpEreQapt16o  
**api**: OBexeX0f0MsnL1S3   (get session)

| https://localhost:5500/api/1D7n5SRALg7tQoL5cFR3D2YkQvbJuMFLbB/3aPwVLmbUxit7QuWtQv1NNmXHKZuuUZrGNuzq6uV7ZxhicF1ffrN5XfsY7FYDac3sKGtiEubEYzrGpEreQapt16o/OBexeX0f0MsnL1S3 |
| :---- |

This returns the following in our example ( your values WILL be different ) 

| { "api\_status":"success", "wallet":{ "id":"icqxJCN/GP3vii1wWRf42sNKgT8EJdr8f1/baAildys=", "address":"1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP0a01EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP", "address\_key\_identifier":"1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP", "address\_public\_key":"tGdraw6gizLTepQDqBfWqdskcVqwPUSBuGMeDpQcQ5XC" } } |
| :---- |

From this you now know the wallet id and address.

Address (this is the full address and consists of the following parts):  
		{address\_base}{address\_type}{address\_key\_identifier}

* 1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP0a01EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP

## Creating an NFT:

This is just a simple step by step how to, just to get your first NFT stored.  
The first thing you need to do is check to see if you have enough balance to create an NFT.

To do this we call the bellow api.

Get balance:    
**api**: zLsiAkocn90e3K6R  (get\_balance)  
**type**: GET  
**parameters**: p0 \= address

| https://localhost:5500/api/1D7n5SRALg7tQoL5cFR3D2YkQvbJuMFLbB/3aPwVLmbUxit7QuWtQv1NNmXHKZuuUZrGNuzq6uV7ZxhicF1ffrN5XfsY7FYDac3sKGtiEubEYzrGpEreQapt16o/zLsiAkocn90e3K6R?p0=1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP0a01EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP |
| :---- |

Which informs us we have:

| { "stable":1298919, "unstable":0 } |
| :---- |

Which is more than enough millix to create an nft.  The minimum needed to create an NFT is 11000 millix.

The information necessary for the  NFT:

* the name of the NFT  
  * Stupid Cat  
* the description of the NFT  
  * Another Stupid cat nft  
* the data/image of the NFT.  
* the address where the NFT will be created.  
  * address\_base ( 1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP )  
  * address\_type, the milix address type for NFTs is:  **0c0**  
  * address\_key\_identifier ( 1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP )  
  * amount this is a small amount sent to the address for the nft transaction.  In this case it is 1000 millix.  
* (optionally) if we want it verified we need a domain name to verify it against.  
  * li8.io (verified domain)    
    * To verify your domain you need to create a text record in your dns:

| @         txt          tangled={address\_key\_identifier} |
| :---: |

* The transaction fee, which is 10000 millix.

We take the information and assemble it into a json as the example below:

| { "transaction\_data\_meta":{ "name":"Stupid Cat", "description":"Another stupid cat nft" }, "transaction\_output\_attribute":{ "dns":"li8.io" }, "transaction\_data\_type":"tangled\_nft", "transaction\_output\_list":\[ { "address\_base":"1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP", "address\_version":"0c0", "address\_key\_identifier":"1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP", "amount":1000 } \], "transaction\_output\_fee":{ "fee\_type":"transaction\_fee\_default", "amount":10000 } } |
| :---- |

We then call the api:  
**api**: XQmpDjEVF691r2gX (create\_nft)  
**type**: POST  (multipart/form-data)  
**parameters**: 

* p0 \= json payload (from the example above)  
* p1 \= file

| https://localhost:5500/api/1D7n5SRALg7tQoL5cFR3D2YkQvbJuMFLbB/3aPwVLmbUxit7QuWtQv1NNmXHKZuuUZrGNuzq6uV7ZxhicF1ffrN5XfsY7FYDac3sKGtiEubEYzrGpEreQapt16o/XQmpDjEVF691r2gX |
| :---- |
| p0 \= { "transaction\_data\_meta":{ "name":"Stupid Cat", "description":"Another stupid cat nft" }, "transaction\_output\_attribute":{ "dns":"li8.io" }, "transaction\_data\_type":"tangled\_nft", "transaction\_output\_list":\[ { "address\_base":"1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP", "address\_version":"0c0", "address\_key\_identifier":"1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP", "amount":1000 } \], "transaction\_output\_fee":{ "fee\_type":"transaction\_fee\_default", "amount":10000 } } |
| p1 \= file |

Which returned:

| { "api\_status":"success", "transaction":\[ { "transaction\_input\_list":\[ { "output\_transaction\_id":"eEnXkGaHHv9kusqoqzrEXT9bbfBrsTH7zDJwAzyScqNFiQP76", "output\_position":1, "output\_transaction\_date":1683314986, "output\_shard\_id":"qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR", "address\_base":"1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP", "address\_version":"0a0", "address\_key\_identifier":"1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP", "input\_position":0 } \], "transaction\_output\_list":\[ { "address\_base":"1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP", "address\_version":"0a0", "address\_key\_identifier":"1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP", "amount":1298919, "output\_position":0 } \], "transaction\_signature\_list":\[ { "address\_base":"1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP", "address\_attribute":{ "key\_public":"tGdraw6gizLTepQDqBfWqdskcVqwPUSBuGMeDpQcQ5XC" }, "signature":"AYNby5CjbFEqjEPw5e6Mg9XZ4xgoJZvgF5nt9WAiaCgKFzA5KPxV5CowDxnLnVjwWBA2cA7p2H3uHzA7NgZ69zu" } \], "transaction\_parent\_list":\[ "27xeEu2qTGBjtL6CeJfGs5azHe2tMNmb9jMW7HveqyEiVLHhQ1" \], "payload\_hash":"UWERHmQri1o2cqfsPXcP4jSEGY4VW9psL4UzHbiVMa8QtH459", "transaction\_date":1683387651, "node\_id\_origin":"1D7n5SRALg7tQoL5cFR3D2YkQvbJuMFLbB", "node\_id\_proxy":"16FGCjdh8v36wqv5BAW8NZvDK4aAkpJrd8", "shard\_id":"qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR", "version":"0b20", "transaction\_id":"Q95x7fQGcSFEWwHLARKfBBCmfBJSE3Hc1zwUFimTaJbyKVGQG" }, { "transaction\_input\_list":\[ { "output\_transaction\_id":"Q95x7fQGcSFEWwHLARKfBBCmfBJSE3Hc1zwUFimTaJbyKVGQG", "output\_position":0, "output\_transaction\_date":1683387651, "output\_shard\_id":"qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR", "address\_base":"1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP", "address\_version":"0a0", "address\_key\_identifier":"1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP", "input\_position":0 } \], "transaction\_output\_list":\[ { "address\_base":"1L6f4cGBeJdR4ARJha6pTUD7ZMR31YTiXX", "address\_version":"0a0", "address\_key\_identifier":"1L6f4cGBeJdR4ARJha6pTUD7ZMR31YTiXX", "amount":10000, "output\_position":\-1 }, { "address\_base":"1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP", "address\_version":"0c0", "address\_key\_identifier":"1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP", "amount":1000, "output\_position":0 }, { "address\_base":"1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP", "address\_version":"0a0", "address\_key\_identifier":"1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP", "amount":1287919, "output\_position":1 } \], "transaction\_signature\_list":\[ { "address\_base":"1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP", "address\_attribute":{ "key\_public":"tGdraw6gizLTepQDqBfWqdskcVqwPUSBuGMeDpQcQ5XC" }, "signature":"2m65Hkds88XNbF2nrtNZyNKYx6k7CNcNiSi88v4bHnVUPggmYGTHgm8PDSgUZssHnXtqXbb9XfRzAfduoKnGstU9" } \], "transaction\_parent\_list":\[ "27xeEu2qTGBjtL6CeJfGs5azHe2tMNmb9jMW7HveqyEiVLHhQ1" \], "transaction\_output\_attribute":{ "transaction\_fee":\[ { "node\_id\_proxy":"16FGCjdh8v36wqv5BAW8NZvDK4aAkpJrd8", "fee\_type":"transaction\_fee\_default", "output\_position":\-1 } \], "transaction\_output\_metadata":{ "dns":"li8.io", "file\_list":\[ { "public":false, "hash":"be223bad66aa15676db714cd90a50e5ba1f0e50e619d47af8e80ee649b8c5a93", "size":49475, "type":"tangled\_nft", "name":"1683387652187", "mime\_type":"application/octet-stream", "1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP":{ "key":"0416561c4a557e784e1d2d3c3028733e16e3d4cc4bb2590fa77de320453898aa45a3f3c4fa4e654973bba26e97cc298922afbbc19fec0e39f48d814b67a934fb4f4177d5aaa600a7672792e88d11bb46488dfba4fac0d18f3276a4c72a6461ea14d3dd9424dffc7efcfb434e80205f732a485d48e02032b559d00bff483da12dd45699b90b96dded931ceffc5b068f632f5b1883a82ee31f0387f4d4267b661128" } }, { "public":false, "hash":"47f0bc23a18706b8fe7e4fe8c00b1492caad9bea8d20df75cc22faa06b3ec744", "size":60, "type":"tangled\_nft\_meta", "name":"1683387652187\_meta", "1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP":{ "key":"0476ebc53dc596e89437d3b28a43ff80e70ee7ef82090919c2e97c116ab49a283f44c64ef846841e3edca2157d811de80933f9b3dc2b535eb22ddc4ebd5d8a6bb865d96c2714f2aecf49feb9e50b509893973c791e0c23132edbe75312c99deabf22e94d5d73238477b8157cf35c6abc41e4b812cd451ee3e518991bdba5a6d0562757b70d6e6c8181bae3cdab0e9da7557029fa8425593a278abebe908927f7e5" } } \] } }, "payload\_hash":"2VNrCjMGQNAUjP1FP4tXKm5qBddAv8RdQBoFJFwroDSzWS7PHq", "transaction\_date":1683387651, "node\_id\_origin":"1D7n5SRALg7tQoL5cFR3D2YkQvbJuMFLbB", "node\_id\_proxy":"16FGCjdh8v36wqv5BAW8NZvDK4aAkpJrd8", "shard\_id":"qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR", "version":"0a30", "transaction\_id":"tnYFzGUyuGK3Nv7qAxGXJsLMkxVNVH5QwyayL8aUYxsb9RNHW" } \] } |
| :---- |

Explanation:

This actually has 2 transactions.  
The first transaction is a refresh transaction.   This is required to 'wake' a previous transaction that has been put into a hibernated state.  Refresh transactions have a refresh version of **0b20**.

The second transaction creates the NFT.  
Take a look at **transaction\_output\_list**.   There are 3 outputs.  

* the output at position \-1 is the address where the fee goes.     
* the output at position 0 is the address where the NFT is created (note address\_type 0c0).  
* the last one is the change address (address type of 0a0)

**transaction\_output\_metadata** contains the meet of the NFT.

* dns \- signifies that the address is verified against a domain name  
* file\_list contains two files.   The NFT and meta information about the NFT (name etc…)

Congratulations you have just created your first NFT.  
I realize that this is rather sparse and requires a lot more information to be complete.  
But, let's move on anyway\!

**Listing the NFTs:**

Now, you have created an nft, wonderful\!  
What do I do now?  How can I list them?

**api**: Mu7VpxzfYyQimf3V (list\_transaction\_output\_attribute\_received)  
**type**: GET  
**parameters**:

* p0= date\_begin  
* p1= date\_end   
* p2= node\_id\_origin   
* p3= is\_stable   
* p4= is\_parent   
* p5= is\_timeout   
* p6= create\_date\_begin   
* p7= create\_date\_end   
* p8= status  
* **p9= version** (**0a30**)  
* **p10=address\_key\_identifier** (ours is 1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP)  
* **p11= attribute\_type\_id** (**Adl87cz8kC190Nqc**)  
* **p12= data\_type** ( **tangled\_nft** )  
* p13=order\_by="create\_date desc"   
* p14= record\_limit=1000   
* p15= shard\_id


For this example we are only interested in **p9**, **p10**, **p11**, **p12**

The call we will be making is:

| https://localhost:5500/api/1D7n5SRALg7tQoL5cFR3D2YkQvbJuMFLbB/3aPwVLmbUxit7QuWtQv1NNmXHKZuuUZrGNuzq6uV7ZxhicF1ffrN5XfsY7FYDac3sKGtiEubEYzrGpEreQapt16o/Mu7VpxzfYyQimf3V?p9=0a30\&p10=1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP\&p11=Adl87cz8kC190Nqc\&p12=tangled\_nft |
| :---- |

Which in our case returns:

| \[ { "transaction\_id":"tnYFzGUyuGK3Nv7qAxGXJsLMkxVNVH5QwyayL8aUYxsb9RNHW", "transaction\_date":1683387651, "transaction\_create\_date":1683387652, "amount":1000, "address\_key\_identifier\_to":"1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP", "address\_to":"1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP0c01EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP", "output\_position":0, "is\_stable":1, "is\_spent":0, "is\_double\_spend":0, "address\_key\_identifier\_from":"1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP", "address\_from":"1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP0a01EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP", "transaction\_output\_attribute":\[ { "transaction\_id":"tnYFzGUyuGK3Nv7qAxGXJsLMkxVNVH5QwyayL8aUYxsb9RNHW", "attribute\_type\_id":"Adl87cz8kC190Nqc", "shard\_id":"qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR", "value":{ "dns":"li8.io", "file\_list":\[ { "public":false, "hash":"be223bad66aa15676db714cd90a50e5ba1f0e50e619d47af8e80ee649b8c5a93", "size":49475, "type":"tangled\_nft", "name":"1683387652187", "mime\_type":"application/octet-stream", "1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP":{ "key":"0416561c4a557e784e1d2d3c3028733e16e3d4cc4bb2590fa77de320453898aa45a3f3c4fa4e654973bba26e97cc298922afbbc19fec0e39f48d814b67a934fb4f4177d5aaa600a7672792e88d11bb46488dfba4fac0d18f3276a4c72a6461ea14d3dd9424dffc7efcfb434e80205f732a485d48e02032b559d00bff483da12dd45699b90b96dded931ceffc5b068f632f5b1883a82ee31f0387f4d4267b661128" } }, { "public":false, "hash":"47f0bc23a18706b8fe7e4fe8c00b1492caad9bea8d20df75cc22faa06b3ec744", "size":60, "type":"tangled\_nft\_meta", "name":"1683387652187\_meta", "1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP":{ "key":"0476ebc53dc596e89437d3b28a43ff80e70ee7ef82090919c2e97c116ab49a283f44c64ef846841e3edca2157d811de80933f9b3dc2b535eb22ddc4ebd5d8a6bb865d96c2714f2aecf49feb9e50b509893973c791e0c23132edbe75312c99deabf22e94d5d73238477b8157cf35c6abc41e4b812cd451ee3e518991bdba5a6d0562757b70d6e6c8181bae3cdab0e9da7557029fa8425593a278abebe908927f7e5" } } \] }, "status":1, "create\_date":1683388258, "file\_data":{ "47f0bc23a18706b8fe7e4fe8c00b1492caad9bea8d20df75cc22faa06b3ec744":{ "name":"Stupid Cat", "description":"Another stupid cat nft" } }, "attribute\_file\_key":{ "be223bad66aa15676db714cd90a50e5ba1f0e50e619d47af8e80ee649b8c5a93":"36303961383131373930333937623832343564356237663161326531633734383735326234366361646134306435346465363436363939333733333939346661", "47f0bc23a18706b8fe7e4fe8c00b1492caad9bea8d20df75cc22faa06b3ec744":"36303961383131373930333937623832343564356237663161326531633734383735326234366361646134306435346465363436363939333733333939346661" } } \] }, {   …  (another nft) }, …  (other nfts) \] |
| :---- |

The important data from this is:

* transaction\_id ( **tnYFzGUyuGK3Nv7qAxGXJsLMkxVNVH5QwyayL8aUYxsb9RNHW** )  
* transaction\_output\_attribute  
  * value   
    * file\_list

				from the json with "type: tangled\_nft"

* hash (**be223bad66aa15676db714cd90a50e5ba1f0e50e619d47af8e80ee649b8c5a93 this is the file\_hash**)  
  * mime\_type (**application/octet-stream**)  
  * file\_data  
    * 47f0bc23a18706b8fe7e4fe8c00b1492caad9bea8d20df75cc22faa06b3ec744  
      * name (**Stupid Cat**)  
      * description (**Another stupid cat nft**)  
  * attribute\_file\_key  
    * be223bad66aa15676db714cd90a50e5ba1f0e50e619d47af8e80ee649b8c5a93  
      * **36303961383131373930333937623832343564356237663161326531633734383735326234366361646134306435346465363436363939333733333939346661 (file\_key)**

You now have enough information to download the NFT's data:

* transaction\_id  
* file\_hash   
* file\_key

**Displaying the NFT:**

In order to display the NFT you need to download the data from the DAG.

api: Mh9QifTIESw5t1fa  
type: GET  
parameters: 

* p0 \= transaction\_id ( tnYFzGUyuGK3Nv7qAxGXJsLMkxVNVH5QwyayL8aUYxsb9RNHW )  
* p2 \= Adl87cz8kC190Nqc  
* p3 \= file\_hash ( be223bad66aa15676db714cd90a50e5ba1f0e50e619d47af8e80ee649b8c5a93 )  
* p4 \= file\_key ( 36303961383131373930333937623832343564356237663161326531633734383735326234366361646134306435346465363436363939333733333939346661 )

To retrieve the data from our example:

| https://localhost:5500/api/1D7n5SRALg7tQoL5cFR3D2YkQvbJuMFLbB/3aPwVLmbUxit7QuWtQv1NNmXHKZuuUZrGNuzq6uV7ZxhicF1ffrN5XfsY7FYDac3sKGtiEubEYzrGpEreQapt16o/Mh9QifTIESw5t1fa?p0=tnYFzGUyuGK3Nv7qAxGXJsLMkxVNVH5QwyayL8aUYxsb9RNHW\&p2=Adl87cz8kC190Nqc\&p3=be223bad66aa15676db714cd90a50e5ba1f0e50e619d47af8e80ee649b8c5a93\&p4=36303961383131373930333937623832343564356237663161326531633734383735326234366361646134306435346465363436363939333733333939346661 |
| :---- |

The output from this is binary.

If you want the metadata from the NFT you can use the same api as above, but with the following parameters:

* p0 \= transaction\_id ( tnYFzGUyuGK3Nv7qAxGXJsLMkxVNVH5QwyayL8aUYxsb9RNHW ) (same as above)  
* p2 \= Adl87cz8kC190Nqc (same)  
* p3 \= file\_hash ( 47f0bc23a18706b8fe7e4fe8c00b1492caad9bea8d20df75cc22faa06b3ec744 ) (this is the tangled\_nft\_meta type)  
* p4 \= file\_key ( 36303961383131373930333937623832343564356237663161326531633734383735326234366361646134306435346465363436363939333733333939346661 ) (the the file key associated with the 47f0.. hash)

The call for our example is as follows:

| https://localhost:5500/api/1D7n5SRALg7tQoL5cFR3D2YkQvbJuMFLbB/3aPwVLmbUxit7QuWtQv1NNmXHKZuuUZrGNuzq6uV7ZxhicF1ffrN5XfsY7FYDac3sKGtiEubEYzrGpEreQapt16o/Mh9QifTIESw5t1fa?p0=tnYFzGUyuGK3Nv7qAxGXJsLMkxVNVH5QwyayL8aUYxsb9RNHW\&p2=Adl87cz8kC190Nqc\&p3=47f0bc23a18706b8fe7e4fe8c00b1492caad9bea8d20df75cc22faa06b3ec744\&p4=36303961383131373930333937623832343564356237663161326531633734383735326234366361646134306435346465363436363939333733333939346661 |
| :---- |

Which returns:

| { "name":"Stupid Cat", "description":"Another stupid cat nft" } |
| :---- |

**Burning an NFT:**

To burn a NFT you need to build the p0 json as follows:

| {             transaction\_output\_attribute: {                 name                 : "nft name" ,                 description          : "nft description",                 parent\_transaction\_id:  "transaction\_id of the NFT"             },             transaction\_data            : {                 file\_hash        : "transaction file hash",                 attribute\_type\_id: "Adl87cz8kC190Nqc"             },             transaction\_data\_type       : "transaction",             transaction\_data\_type\_parent: "tangled\_nft",             transaction\_output\_list     : \[                 {                     address\_base          : "address\_base",                     address\_version       : "0a0" ,                     address\_key\_identifier: "address\_key\_identifier",                     amount                :                  }             \],             transaction\_output\_fee      : {                 fee\_type: "transaction\_fee\_default",                 amount  : 1000             }         } } |
| :---- |

For the example we are going to use a different NFT than the NFT created above one.  
We will be using the NFT created with transaction\_id: Bvp6NNHy91YUwscsyzcS89A4iBDvxinMemu2L1FpZEEeWtF9q

Some helpful API's to get the information you need.

**get\_transaction\_extended** (IBHgAmydZbmTUAe8)  
p0 \= transaction\_id (Bvp6NNHy91YUwscsyzcS89A4iBDvxinMemu2L1FpZEEeWtF9q )   
p1 \= shard (qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR this is currently the only shard that is being used on the DAG)

**get\_transaction\_output\_key** (3K2xvNRLMpiEqLo8)  
p0 \= transaction\_id (Bvp6NNHy91YUwscsyzcS89A4iBDvxinMemu2L1FpZEEeWtF9q)  
p1 \= Adl87cz8kC190Nqc  
p2 \= nft\_file\_hash (e34c8a4cec13e8728f27f795aaf7f43ac99502659b63653f507921662e6a1392)

**load\_nft** (Mh9QifTIESw5t1fa)  
This is to load the metadata.  
p0 \= transaction\_id (Bvp6NNHy91YUwscsyzcS89A4iBDvxinMemu2L1FpZEEeWtF9q)  
p2 \= Adl87cz8kC190Nqc  
p3 \= nft\_file\_hash (e34c8a4cec13e8728f27f795aaf7f43ac99502659b63653f507921662e6a1392)  
p4 \= nft\_file\_key (39383263613534386566323632653165636534393738376135393634323335386164393038363562666233313865313936663238623566386334376461313366)

**get\_transaction\_extended**

Call the api:

| https://localhost:5500/api/1D7n5SRALg7tQoL5cFR3D2YkQvbJuMFLbB/3aPwVLmbUxit7QuWtQv1NNmXHKZuuUZrGNuzq6uV7ZxhicF1ffrN5XfsY7FYDac3sKGtiEubEYzrGpEreQapt16o/IBHgAmydZbmTUAe8?p0=Bvp6NNHy91YUwscsyzcS89A4iBDvxinMemu2L1FpZEEeWtF9q\&p1=qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR |
| :---- |

| { "transaction\_id":"Bvp6NNHy91YUwscsyzcS89A4iBDvxinMemu2L1FpZEEeWtF9q", "shard\_id":"qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR", "transaction\_date":1682255419, "node\_id\_origin":"1D7n5SRALg7tQoL5cFR3D2YkQvbJuMFLbB", "node\_id\_proxy":"1QDgRh3QLtoLr38GinL7nfMNco2WmmHJaE", "version":"0a30", "payload\_hash":"2KorSQtM73ZYd1JjdCrv2jjSAXjedV1ga2bsQxvUV6FD1brYB7", "stable\_date":1682255435, "is\_stable":1, "parent\_date":1682255423, "is\_parent":1, "timeout\_date":*null*, "is\_timeout":0, "status":2, "create\_date":1682255421, "transaction\_signature\_list":\[ { "address\_base":"1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP", "signature":"4bWgmcg4dvcbKAMetxufoLVoyXjETfR8wrYz3mgh3wnkAzhvMrNCovXMzpyJLnFwjaNUUokESFLcRiKTrc7Kg4Py", "status":1, "create\_date":1682255421, "key\_public":"tGdraw6gizLTepQDqBfWqdskcVqwPUSBuGMeDpQcQ5XC" } \], "transaction\_input\_list":\[ { "input\_position":0, "output\_transaction\_id":"2NcDQLSRsN4BP5jaHKLUcbXXustinetfEdDnCzQpPDvKe2z4cQ", "output\_shard\_id":"qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR", "output\_position":0, "output\_transaction\_date":1682255419, "double\_spend\_date":*null*, "is\_double\_spend":0, "address":"1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP0a01EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP", "address\_key\_identifier":"1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP", "status":2, "create\_date":1682255421 } \], "transaction\_output\_list":\[ { "output\_position":-1, "address":"19LHR4ovEVLezHnUFZW2P9ncUop3zrE2sn0a019LHR4ovEVLezHnUFZW2P9ncUop3zrE2sn", "address\_key\_identifier":"19LHR4ovEVLezHnUFZW2P9ncUop3zrE2sn", "amount":10000, "stable\_date":1682255435, "is\_stable":1, "spent\_date":*null*, "is\_spent":0, "double\_spend\_date":*null*, "is\_double\_spend":0, "status":2, "create\_date":1682255421 }, { "output\_position":0, "address":"1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP0c01EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP", "address\_key\_identifier":"1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP", "amount":10000, "stable\_date":1682255435, "is\_stable":1, "spent\_date":*null*, "is\_spent":0, "double\_spend\_date":*null*, "is\_double\_spend":0, "status":2, "create\_date":1682255421 } \], "transaction\_parent\_list":\[ { "transaction\_id\_parent":"26KuR62h2N2mk9xy5UocEdeeHSGDEEEsMj5YtWNsT78XHHxe7k", "shard\_id\_parent":"qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR", "transaction\_id\_child":"Bvp6NNHy91YUwscsyzcS89A4iBDvxinMemu2L1FpZEEeWtF9q", "shard\_id\_child":"qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR", "status":1, "create\_date":1682256030 } \], "transaction\_output\_attribute":{ "transaction\_output\_metadata":{ "file\_list":\[ { "public":false, "hash":"a179d6a77969cb049099fd154b99fe40f2035f0b330a2a28f708d6e569170a4e", "size":49475, "type":"tangled\_nft", "name":"1682255419990", "mime\_type":"image/jpeg", "1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP":{ "key":"04e7be7357aafd86904095b438da1e6a4aba6c279ab96087de4c55137fb95b48d39489a459a432c3aed1dd77f50f33f5871ca8e16845fedcab814d6dd5ffff6fd4f44779bb951aec8c3a9c142c96928e66eace65ae062bc363e8d96b9f80c824b19dca9b178b731dbdaa7f54ef8819dd224454a924630c25e697b79ff34b939fc246b5121fdff3f5f439b3011c79031c52a47ae27f3199f596d608165e8fb13ccb" } }, { "public":false, "hash":"e34c8a4cec13e8728f27f795aaf7f43ac99502659b63653f507921662e6a1392", "size":59, "type":"tangled\_nft\_meta", "name":"1682255419990\_meta", "1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP":{ "key":"046e61523ca94f22676ceee349f552881f350db317f20dbccc2719c6f647aa07441ad623dc4087865a018109145a39b06052ca64a282fe96cb2b661fc8207c9afc2ceeb4b9011b34ab4f150ff17e3200b1126e639d87a158f91d8a5fe969d54ea7d33cdda20362f9c2a183077abcbd51501be0285ac6f79240fbb7887c52029647bd59a170270216b1aede9b60aa219edf06201130b4b967b65bef2e62c93c0184" } } \] } } } |
| :---- |

**get\_transaction\_output\_key**

call the API with the info above

| https://localhost:5500/api/1D7n5SRALg7tQoL5cFR3D2YkQvbJuMFLbB/3aPwVLmbUxit7QuWtQv1NNmXHKZuuUZrGNuzq6uV7ZxhicF1ffrN5XfsY7FYDac3sKGtiEubEYzrGpEreQapt16o/3K2xvNRLMpiEqLo8?p0=Bvp6NNHy91YUwscsyzcS89A4iBDvxinMemu2L1FpZEEeWtF9q\&p1=Adl87cz8kC190Nqc\&p2=e34c8a4cec13e8728f27f795aaf7f43ac99502659b63653f507921662e6a1392 |
| :---- |

which responds with:

| {     "key": "39383263613534386566323632653165636534393738376135393634323335386164393038363562666233313865313936663238623566386334376461313366" } |
| :---- |

**load\_nft** (Mh9QifTIESw5t1fa)  
We are getting the nft's metadata with this.

p0 \= transaction\_id (Bvp6NNHy91YUwscsyzcS89A4iBDvxinMemu2L1FpZEEeWtF9q)  
p2 \= Adl87cz8kC190Nqc  
p3 \= nft\_file\_hash (e34c8a4cec13e8728f27f795aaf7f43ac99502659b63653f507921662e6a1392)  
p4 \= nft\_file\_key (39383263613534386566323632653165636534393738376135393634323335386164393038363562666233313865313936663238623566386334376461313366)

| https://localhost:5500/api/1D7n5SRALg7tQoL5cFR3D2YkQvbJuMFLbB/3aPwVLmbUxit7QuWtQv1NNmXHKZuuUZrGNuzq6uV7ZxhicF1ffrN5XfsY7FYDac3sKGtiEubEYzrGpEreQapt16o/Mh9QifTIESw5t1fa?p0=Bvp6NNHy91YUwscsyzcS89A4iBDvxinMemu2L1FpZEEeWtF9q\&p2=Adl87cz8kC190Nqc\&p3=e34c8a4cec13e8728f27f795aaf7f43ac99502659b63653f507921662e6a1392\&p4=39383263613534386566323632653165636534393738376135393634323335386164393038363562666233313865313936663238623566386334376461313366 |
| :---- |

Which responds with:

| { "name":"another stupid cat", "description":"my second nft" } |
| :---- |

Now, we build the json necessary for burning NFT and assign to p0.

| p0 \= {             transaction\_output\_attribute: {                 name                 : "another stupid cat" ,                 description          : "my second nft",                 parent\_transaction\_id:  "Bvp6NNHy91YUwscsyzcS89A4iBDvxinMemu2L1FpZEEeWtF9q"             },             transaction\_data            : {                 file\_hash        : "e34c8a4cec13e8728f27f795aaf7f43ac99502659b63653f507921662e6a1392",                 attribute\_type\_id: "Adl87cz8kC190Nqc"             },             transaction\_data\_type       : "transaction",             transaction\_data\_type\_parent: "tangled\_nft",             transaction\_output\_list     : \[                 {                     address\_base          : "1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP",                     address\_version       : "0a0" ,                     address\_key\_identifier: "1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP",                     amount                :                  }             \],             transaction\_output\_fee      : {                 fee\_type: "transaction\_fee\_default",                 amount  : 1000             }         } } |
| :---- |

Then call the following api   
**send\_transaction\_with\_data\_from\_wallet**  
api: XQmpDjEVF691r2gX  
parameters:  
p0 \= json\_payload

| https://localhost:5500/api/1D7n5SRALg7tQoL5cFR3D2YkQvbJuMFLbB/3aPwVLmbUxit7QuWtQv1NNmXHKZuuUZrGNuzq6uV7ZxhicF1ffrN5XfsY7FYDac3sKGtiEubEYzrGpEreQapt16o/XQmpDjEVF691r2gX |
| :---- |

Which returns:

| { "api\_status":"success", "transaction":\[ { "transaction\_input\_list":\[ { "output\_transaction\_id":"Bvp6NNHy91YUwscsyzcS89A4iBDvxinMemu2L1FpZEEeWtF9q", "output\_position":0, "output\_transaction\_date":1682255419, "output\_shard\_id":"qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR", "address\_base":"1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP", "address\_version":"0c0", "address\_key\_identifier":"1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP", "input\_position":0 }, { "output\_transaction\_id":"2UzcWjDYmgFFzhFymwXziA1Dgm1R3dkCPECQQWpJXvZtbUW2Vs", "output\_position":0, "output\_transaction\_date":1683997353, "output\_shard\_id":"qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR", "address\_base":"1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP", "address\_version":"0a0", "address\_key\_identifier":"1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP", "input\_position":1 } \], "transaction\_output\_list":\[ { "address\_base":"1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP", "address\_version":"0c0", "address\_key\_identifier":"1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP", "amount":1418654, "output\_position":0 } \], "transaction\_signature\_list":\[ { "address\_base":"1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP", "address\_attribute":{ "key\_public":"tGdraw6gizLTepQDqBfWqdskcVqwPUSBuGMeDpQcQ5XC" }, "signature":"5B8CP6117LfuiiwgtDcbndW3U6v3w2Tf7QRBdiWicdHUdJ5CxqJ9G1qi3NJR8HfywqEq1ddJmpwwH2tBGcZtewf" } \], "transaction\_parent\_list":\[ "2q1rzSByaSZ8p5qthHpwNBtFZRmj2UFX4FfsgT56ieK6CSQ9SJ" \], "payload\_hash":"DgTAdF8yXuD3x2orUe3jtazhW1urJuMG4GQX6SfbZgxSM5yVf", "transaction\_date":1684002258, "node\_id\_origin":"1D7n5SRALg7tQoL5cFR3D2YkQvbJuMFLbB", "node\_id\_proxy":"1CXjjMJPSW46bMz63G3BEaoKatbWdeikHG", "shard\_id":"qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR", "version":"0b20", "transaction\_id":"uim4ECj5jE1qDDzyddw9rBhYUwLHnJ9Qc16CJ3vXUFDvJ7Trs" }, { "transaction\_input\_list":\[ { "output\_transaction\_id":"uim4ECj5jE1qDDzyddw9rBhYUwLHnJ9Qc16CJ3vXUFDvJ7Trs", "output\_position":0, "output\_transaction\_date":1684002258, "output\_shard\_id":"qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR", "address\_base":"1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP", "address\_version":"0c0", "address\_key\_identifier":"1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP", "input\_position":0 } \], "transaction\_output\_list":\[ { "address\_base":"19LHR4ovEVLezHnUFZW2P9ncUop3zrE2sn", "address\_version":"0a0", "address\_key\_identifier":"19LHR4ovEVLezHnUFZW2P9ncUop3zrE2sn", "amount":1000, "output\_position":\-1 }, { "address\_base":"1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP", "address\_version":"0a0", "address\_key\_identifier":"1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP", "amount":10000, "output\_position":0 }, { "address\_base":"1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP", "address\_version":"0a0", "address\_key\_identifier":"1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP", "amount":1407654, "output\_position":1 } \], "transaction\_signature\_list":\[ { "address\_base":"1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP", "address\_attribute":{ "key\_public":"tGdraw6gizLTepQDqBfWqdskcVqwPUSBuGMeDpQcQ5XC" }, "signature":"FjVKNMWkB4b5Zjmf6hcJ7L3ZW9rYN2r5Z91hQZQSQcrUGTGHRqQhkH6CYRM5sAGEorzfQiKCp3RJYcDeCTMop9J" } \], "transaction\_parent\_list":\[ "2q1rzSByaSZ8p5qthHpwNBtFZRmj2UFX4FfsgT56ieK6CSQ9SJ" \], "transaction\_output\_attribute":{ "transaction\_fee":\[ { "node\_id\_proxy":"1CXjjMJPSW46bMz63G3BEaoKatbWdeikHG", "fee\_type":"transaction\_fee\_default", "output\_position":\-1 } \], "transaction\_output\_metadata":{ "name":"another stupid cat", "description":"my second nft", "parent\_transaction\_id":"Bvp6NNHy91YUwscsyzcS89A4iBDvxinMemu2L1FpZEEeWtF9q" } }, "payload\_hash":"4BnFgse1ezdqYQoSKJtrs8aQUaNf6Srr9H6xwDEDqZx9wRLbS", "transaction\_date":1684002258, "node\_id\_origin":"1D7n5SRALg7tQoL5cFR3D2YkQvbJuMFLbB", "node\_id\_proxy":"1CXjjMJPSW46bMz63G3BEaoKatbWdeikHG", "shard\_id":"qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR", "version":"0a30", "transaction\_id":"zM3un4EzFAYQzeK8WYXP35kQkwC5PrMcYf2xo4mAx6ATrEyvQ" } \] } |
| :---- |

And that is it, your NFT has been deleted.  
The funds from the NFT have been returned to your wallet (minus fees)

**Sending an NFT:**

To send an NFT to another address, you need to use the following api and json:

