  
Acknowledgement/Copyright

coverpage designed by splot.io millix NFT at…

People core people involved in the millix project:  
	Price Givens  
	Eriksson Monteyo  
	Cezanne Alexander  
	Danny D'Britto  
	Alexander Olhevski  
	Allen Ostergar  
	Rick Birkenstok

	  
PREFACE

Lorem ipsum dolor sit amet, consectetur adipiscing elit……………………………....………………….……………2  
Lorem ipsum dolor sit amet, consectetur adipiscing elit………………………..……………………………………..10   
Lorem ipsum dolor sit amet, consectetur adipiscing elit.…………………………………...………………………….15  
Lorem ipsum dolor sit amet, consectetur adipiscing elit.……………………………………………...……………….20    
Lorem ipsum dolor sit amet, consectetur adipiscing elit.…………………………………………...………………….25   
Lorem ipsum dolor sit amet, consectetur adipiscing elit.…………………………………...………………………….30   
Lorem ipsum dolor sit amet, consectetur adipiscing elit.……………………………………...……………………….35   
Lorem ipsum dolor sit amet, consectetur adipiscing elit.……………………………………...……………………….40 

**Introduction To Cryptocurrencies**

---

Cryptocurrencies have evolved significantly since the advent of Bitcoin, and millix is a testament to this evolution. Millix stands out in the crowded cryptocurrency space with its unique technology and approach, aiming to provide a fast, secure, and decentralized solution for digital transactions.  
This book will guide you on a journey to understanding the ins and outs of the millix ecosystem. You will learn about the underlying technology that powers millix, how to set up and run a millix node, and how to interact with the millix network using its API.  
We will explore the millix consensus algorithm, delve into the intricacies of its cryptography and security measures, and discuss the economic incentives that keep the millix network robust and vibrant.  
As we delve deeper, you will gain insights into developing applications with millix and how millix is positioning itself in the future of cryptocurrencies.

**Understanding Cryptocurrencies**

Since the creation of Bitcoin in 2009, the world of finance has been revolutionized by the emergence of cryptocurrencies. But what exactly is a cryptocurrency? And how does it work? This chapter will shed light on these questions and more, providing a solid foundation for your journey into the world of millix.

**What is a Cryptocurrency**

At the most basic level, a cryptocurrency is a digital or virtual form of currency that uses cryptography for security. Unlike traditional forms of currency, like the dollar or euro, most cryptocurrencies are decentralized. This means they are not controlled by any central authority, such as a government or financial institution. Instead, transactions are verified by network nodes through cryptography and recorded on a public distributed ledger called a blockchain.

**How Do Cryptocurrencies Work?**

The original cryptocurrencies operate on technology called blockchain. A blockchain is a chain of blocks, where each block records information about a set of transactions. The blockchain is maintained by a network of computers, known as nodes, which work together to validate and record transactions.  
When a transaction is made, it is grouped with other transactions into a block. Nodes in the network then compete to validate these transactions through a process known as mining. Once a block is validated, it is added to the chain, creating a permanent and unalterable record of those transactions.

**What is a block?**

A block refers to a digital record or ledger of transactions. It's like a page of a traditional ledger or record book, but in a digital and encrypted form. Each block contains a list of transactions.  It also includes other information such as a link to the previous block.  
Block miners determine which transactions will go into a block and validates the transactions as well. The below is a general overview of how this process works:

* **Transaction Verification**: Miners select a number of pending transactions from the transaction pool, typically prioritizing those with higher transaction fees attached. They verify these transactions against the existing blockchain to ensure there's no double-spending or other fraudulent activities.  
* **Block Creation**: Once transactions are verified, miners group them together into a candidate block. This block also contains the hash of the previous block, a timestamp, and a nonce (an arbitrary number used once).  
* **Proof-of-Work**: In order to add this new block to the blockchain, miners must solve a complex mathematical puzzle, known as proof-of-work. This involves changing the nonce value and hashing the entire block's content until they find a hash that meets certain predefined conditions (in Bitcoin's case, a hash that starts with a certain number of zeros). This process requires substantial computational power and energy.  
* **Adding to the Blockchain**: When a miner solves the puzzle, they broadcast the solution (the proof-of-work) and the new block to all other nodes in the network. The other nodes verify the proof-of-work and, if correct, add the new block to their local copy of the blockchain.  
* **Reward**: Upon successful addition of the new block, the miner is rewarded with a certain number of cryptocurrency tokens. This is known as the block reward, and it serves as an incentive for miners to continue validating and recording transactions.  In bitcoin after a certain number of blocks the rewards for solving a block halve.  This occurs until the total of 21 million bitcoins have been minted by the miners afterwards miners will only receive the transaction fees from the transactions included in the block solved.

This process repeats approximately every 10 minutes for Bitcoin. The timing for solving a block can vary from less than a minute to more than an hour for individual blocks), ensuring that transactions are verified and recorded in a decentralized manner.   
The proof-of-work mechanism has drawn criticism for its significant energy consumption, leading to exploration of alternative consensus mechanisms such as proof-of-stake, proof-of-authority, and others.  Also, the timing between blocks can be inconvenient there are also alternative solutions to this such as the lightning network. 

**What is a blockchain?**

A blockchain is a continuously growing list of blocks, which are linked and secured using cryptography. This ledger of transactions is distributed across numerous nodes, participating in a decentralized network.  
Every member of the network shares the same copy of the entire transaction history. When a new block is created, it's appended to the chain, and every participant updates their copy to reflect the change. This sharing of the ledger, which is constantly validated, provides transparency and security in the system.

**Key Features of Cryptocurrencies**

There are several key features that define cryptocurrencies:

* **Decentralization**: As mentioned earlier, cryptocurrencies are not controlled by a central authority. This decentralization is a fundamental aspect of cryptocurrencies and is seen as a way of eliminating the need for trust in financial transactions.  
* **Anonymity**: While transactions are recorded on the blockchain and are public, the identities of the parties involved are kept anonymous. Each user has a digital wallet with a unique cryptographic address, and this address is used to verify the authenticity of a transaction.  
* **Security**: Cryptocurrencies use advanced cryptographic techniques to secure transactions and control the creation of new units. For example, Bitcoin uses a technique called Proof of Work (PoW) to ensure that all transactions are verified correctly and prevent fraudulent activity.  
* **Scarcity**: Most cryptocurrencies have a limited supply. For example, the total number of Bitcoins that will ever exist is capped at 21 million. This scarcity mimics precious metals and can potentially add to the value of the cryptocurrency.

**The Impact of Cryptocurrencies**

Cryptocurrencies have had a significant impact on the world, ushering in a new era of financial technology. They have been praised for their potential to democratize finance, providing a means of exchange in areas without access to traditional banking systems. Furthermore, they offer a new way to secure digital assets and transactions, and their underlying blockchain technology has far-reaching implications for industries beyond finance, including healthcare, supply chains, and more.  
However, cryptocurrencies also face criticism and challenges. They have been associated with illicit activities due to their anonymity, and their price volatility poses risks for investors. Additionally, the mining process used by many cryptocurrencies has been criticized for its environmental impact.  
Despite these challenges, cryptocurrencies continue to evolve and mature, and they are becoming an increasingly important part of the global financial landscape.  
Understanding the basics of cryptocurrencies is the first step in mastering millix. As we delve deeper into the specifics of millix in the coming chapters, you'll see how it builds upon these foundational concepts while also introducing innovative new features and technologies. This makes Millix not just another cryptocurrency, but a significant evolution in the ever-expanding crypto universe.

**Introduction to millix**

We now turn our focus to millix, a unique and innovative player in the field. Millix is not just another cryptocurrency. It represents an evolution in cryptocurrency technology, designed to address some of the inherent limitations of traditional cryptocurrencies and provide a truly scalable, efficient, and decentralized solution for digital transactions. In this chapter, we will explore what makes millix unique and how it fits into the broader cryptocurrency landscape.

**What is millix?**

Millix is a decentralized, peer-to-peer transaction network that aims to provide a scalable and efficient solution for digital transactions. Unlike traditional cryptocurrencies, millix is designed from the ground up to be lightweight and fast, allowing for high transaction throughput while maintaining a small memory footprint.  
Millix is built around the idea of a "transaction web," a vast, interconnected network of transactions. In this web, every transaction references previous transactions, forming a complex, interwoven structure that allows for rapid confirmation and high scalability.

**Principles Behind millix**

The founders of millix came up with some principles that they used to guide the development of millix.  
Currencies should not be created with debt: Cryptocurrencies are typically generated through mining or staking, not issued against liabilities. This principle argues for a system that doesn't create currency tied to debt, to avoid scenarios like debt cycles or inflation that can happen with traditional, debt-based monetary systems.

* **Currencies should operate at infinite scale**:  A cryptocurrency should be designed to handle an unlimited number of transactions, facilitating its adoption as a global means of exchange.  
* **Currencies should work the same throughout the entire spectrum of transaction values**: Regardless of whether it's a small microtransaction or a large-value transfer, the currency's performance, speed, and cost shouldn't drastically differ.  
* **Currencies should be functional without carrying the weight of every previous transaction**: This principle suggests that transaction verification shouldn't require downloading and validating the entire transaction history, which could slow down the network and limit scalability.  
* **Modern currencies should be at least as simple to use as primitive currencies**: Digital currencies should be user-friendly, intuitive, and require minimal technical knowledge to use, similar to how simple it is to use cash.  
* **Implementing a digital currency into a process should be nearly the same effort as implementing paper cash into a process**:  The adoption and integration of a digital currency into existing financial systems should be straightforward, and any additional difficulty should be offset by clear benefits (e.g., efficiency, security, speed).  
* **Simplicity at the edge is only possible with equal simplicity in the foundation**:  A simple, well-designed underlying infrastructure is critical to ensuring that the end-user experience is straightforward and uncluttered.  
* **Currencies are a product chosen by customers and supported by professionals**: The adoption and continued use of a currency rely on the preference of its users and the support infrastructure provided by professionals (developers, nodes, financial institutions).  
* **The cost of securing value can't exceed the value it secures**: The resources used to secure a cryptocurrency network (like computational power for mining) should not surpass the actual value it is securing, or else it becomes uneconomical.  
* **Decreasing a currency's value with inflation should not dilute the value of savers**: The system should not devalue the currency by arbitrarily increasing its supply, thereby protecting the purchasing power of those who hold the currency.  
* **Increasing a currency's market value should be proportionate to increases in its fundamental value**: The market price of a currency should reflect its underlying, intrinsic value, rather than speculative bubbles.  
* **Participants that increase fundamental value should be algorithmically incentivized**: Those who contribute positively to the network (nodes, developers, etc.) should be rewarded in a systematic way, fostering continued support and development.

**The History of millix**

In 2018, the development of millix, a directed acyclic graph (DAG) based decentralized ledger system, started. The founders, who had been involved with cryptocurrencies for years, set out to develop a cryptocurrency which would address the shortcomings they perceived in other cryptocurrencies at the time.  
Throughout 2018 and 2019, the development team adhered to an iterative and rigorous process of "build, test, break." This methodology ensured that the system could withstand various challenges and scenarios. The relentless cycles of testing and improvement paved the way for a robust and resilient network.  
On January 20, 2020, the millix network experienced its Genesis event. A staggering total supply of nine quadrillion millix was created. The pivotal event of this year was demonstrating that a DAG could operate without centralization or gatekeepers (specialized nodes to verify transactions), a critical milestone in validating the technology's feasibility.  
The following year, 2021, saw millix.com becoming the first Layer 2 application on the millix network, a testament to the platform's growing adaptability. Furthermore, millix demonstrated its potential by successfully running on a Raspberry Pi, highlighting its low resource requirement and broad accessibility. The tangled browser emerged as the second Layer 2 application.  A chromium based browser with a millix node fully integrated into it. The year ended with the release of the public beta of the millix network on December 21\.  
In 2022, the network marked its one-millionth transaction, and in a single day, it handled over 100,000 transactions. This proved Millix's capacity to manage high-volume operations, further strengthening its position in the crypto industry.  
A novel advertising platform was developed for the tangled browser.  Rather than paying publishers or agencies for ad views.  The viewer would be payed without paying any middlemen.  A novel p2p advertising network utilizing millix.  The ads are currently displayed on the top of the tangled browser.  Advertisers began to recognize the platform's potential, resulting in over 200,000 payments per day. Additionally, the network expanded to incorporate over 14,000 installed nodes, amplifying its resilience and decentralization.  
The development of Layer 2 applications on Millix continued to thrive, with the creation of TangledTrivia.com, CobraHelix.com, SwapLand.io, and Tangled Social. Each of these applications contributed to the platform's diverse ecosystem, showcasing the versatility of the Millix network.  
Further, the nodes began to operate in light mode, improving the efficiency and performance of the network. Data storage capabilities on the DAG were enhanced, and support for Non-Fungible Tokens (NFTs) using millix was introduced.  
The year ended with the development of the WMLX bridge between Millix (MLX) and Ethereum (ETH).  WMLX is an ERC20 token created to promote the integration and interoperability between different crypto ecosystems.

**Technology Behind millix Overview**

At its core, Millix is powered by a unique approach to cryptocurrency technology. Instead of a single, linear blockchain, Millix operates on a Directed Acyclic Graph (DAG) structure. This means that transactions are not grouped into blocks and added to a chain one at a time. Instead, each transaction stands on its own and directly references multiple previous transactions. This structure allows for a high degree of parallelism, enabling Millix to process transactions quickly and efficiently.  
One of the distinguishing features of Millix is its lightweight design. Millix nodes do not need to store the entire transaction history. Instead, they maintain a minimal set of information, allowing for a small memory footprint. This design makes it possible to run a Millix node on a variety of devices, including mobile devices, thereby increasing accessibility and decentralization.

**The millix Network**

The Millix network is made up of nodes, each of which participates in validating transactions and maintaining the network's integrity. To incentivize participation, Millix employs a unique economic model. Nodes are rewarded for validating transactions, with rewards derived from transaction fees.  
One of the key goals of Millix is to provide a truly decentralized network. To achieve this, Millix employs a unique consensus algorithm, ensuring that no single party can control the network. This consensus algorithm, along with the network's design, aims to provide a high level of security and resistance to attacks.

**Governance**

The millix foundation was set up with the focus of maintaining and developing the protocol.  This organization accepts proposals on development of the millix protocol and maintains the reference code for the millix-node.  You can visit the foundations website at [https://millix.org](https://millix.org) .

**Conclusion**

In short, millix represents a new paradigm in the cryptocurrency landscape, an evolution in design and technology that addresses the shortcomings of traditional cryptocurrencies. Its unique design allows for high transaction throughput, low memory footprint, and increased decentralization, setting it apart from other cryptocurrencies.

**Foundations of millix**

Millix uses several novel techniques and mechanisms to ensure its network is scalable, efficient, and highly decentralized. In this chapter, we'll explore these technologies and how they differentiate millix from traditional cryptocurrencies.

**Directed Acyclical Graph (DAG)** 

One of the key technologies behind millix is its use of a Directed Acyclical Graph (DAG) for storing and processing transactions. A DAG is a one way graph that does not have any loops (cycles). It is a data structure that is used in computer science and mathematics for various applications. In the context of millix, a DAG allows for a high degree of parallelism in processing transactions, leading to increased speed and scalability.  
Unlike traditional blockchains, which group transactions into blocks that are added to a linear chain, a DAG allows each transaction to stand on its own, directly referencing multiple previous transactions. This means that transactions can be processed in parallel, rather than sequentially, leading to a much higher transaction throughput.  
The use of a DAG also has implications for the security and integrity of the network. Because each transaction directly references previous transactions, it's difficult to alter or forge a transaction without affecting the entire network. This makes the millix network highly secure and resistant to attacks.

**Cryptography** 

Millix uses cryptography much like other cryptocurrencies.  Which use cryptography to prove ownership of addresses and signing transactions.    
To sign transactions millix uses ECDSA (Elliptic Curve Digital Signature Algorithm). This creates the cryptographic signatures that prove ownership of milix and allows them to be spent.  
For addresses millix takes the public key, applys the SHA-256 hash algorithm, then the RIPEMD-160 hash algorithm, to produce the address.

**Lightweight Design** 

Another distinguishing feature of millix is its lightweight design. Unlike traditional cryptocurrencies, where the entire transaction history must be stored, millix nodes only need to maintain a minimal set of information. This results in a small memory footprint, which allows a millix node to run on a variety of devices, from powerful servers to mobile devices.  
This lightweight design also contributes to the decentralization of the millix network. By making it possible for anyone to run a node, millix ensures that control of the network is distributed among a large number of participants, rather than being concentrated in the hands of a few.

**Consensus Algorithm**

The consensus algorithm is a crucial component of millix, ensuring that all nodes agree on the state of the network. Millix employs a unique consensus algorithm designed to provide a high level of security and decentralization.  
Unlike traditional consensus algorithms like Proof of Work (PoW) or Proof of Stake (PoS), millix's consensus algorithm doesn't rely on computational power or stake ownership. Instead, it uses a method that ensures all nodes have an equal chance of validating transactions, thereby preventing any single party from controlling the network.  The lack of Proof of Work makes millix significantly reduce both the energy requirements and the amount of computer power necessary to participate in the network.  It is even possible to run millix nodes on a raspberry pi.

**Hibernation**

As you can imagine consensus can take up a great amount of network connectivity.  Because of this we limit consensus to the last ten minutes of transactions.  Afterwards the transactions are placed in hibernation.   When the transaction needs to be used later on then a 'refresh' transaction is sent first which will wake the output then a normal transaction is done sending the millix to its ultimate destination.

**Economy**

The total amount of millix (9 quadrillion) was generated at the genesis event.  Millix does not utilize decimal values, all millix are denoted in integer values.  This was done for a couple of reasons.  But, the main reason was to ensure there would be no confusion as to fractions of a millix.  To incentivize participation in the network, Millix employs a unique economic model. Individual nodes are rewarded for validating transactions, with the rewards derived from transaction fees. This creates a self-sustaining economy, where participants are incentivized to contribute to the network's operation.

**Running a millix Node**

In this chapter, we will guide you through the process of setting up and running your own millix node. By running a Millix node, you become an active participant in the millix network, validating transactions and maintaining the network's integrity.

**What is a millix Node**

A millix node is a computer running the millix node software which participates in the millix network by creating and validating transactions and also maintaining a copy of the network state. Unlike traditional blockchain networks, where the software must store the entire transaction history, millix nodes maintain only a minimal set of information, thanks to millix's lightweight design. This allows a millix node to run on a variety of devices, from powerful servers to even mobile devices.

**Requirements for running a millix Node**

Before setting up a Millix node, it's important to understand the requirements. While Millix's lightweight design allows it to run on many different types of devices, there are still some minimum requirements for running a node:

* **Hardware**: The specific hardware requirements will depend on the load that the node will handle. However, for a basic node, a computer with a moderate processor and at least 2GB of RAM should suffice.  
* **Internet Connection**: A stable internet connection is essential for your node to communicate with the Millix network.  
* **Millix Software**: The millix node software must be installed on the device that will be running the node. The software is open-source and can be downloaded from the Millix GitHub repository.   
    
  The reference node software can be downloaded from:  
  [https://github.com/millix/millix-wallet](https://github.com/millix/millix-wallet) \- requires set up on your computer.  
  [https://millix.org/client.html](https://millix.org/client.html) \- has packages for windows, osx, and ubuntu.  
  


**Setting Up a millix Node**

**Installing millix-node from prebuilt packages**  
You can install the millix node software from prebuilt packages, if you are running windows, osx, or ubuntu.  The packages can be found on [https://millix.org/client.html](https://millix.org/client.html)   
These install the reference node for millix.  There is currently one alternative build, which is also built by the same people who built the reference node.  It is the tangled web browser.   The tangled browser is based off of chromium and has the millix node incorporated into it.  
The tangled browser can be downloaded from  [https://tangled.com/browser/download.php](https://tangled.com/browser/download.php)  
   
**Installing and building millix-wallet from github**  
The process of setting up a millix node from github has several steps:  
**Download the millix wallet software**:   
	The first step is to download the Millix wallet software.   
This can be done by visiting the GitHub repository and downloading the latest release. [https://github.com/millix/millix-wallet](https://github.com/millix/millix-wallet)  

**Install the millix wallet software:** Once downloaded, you will need to install the software on your device according to the instructions on the github projects readme page.

For Ubuntu you can use the following instructions:

| Instructions for installing millix-wallet using github repository |
| :---- |
| \> sudo apt \-y install curl dirmngr apt-transport-https lsb-release ca-certificates build-essential \> curl \-sL https://deb.nodesource.com/setup\_16.x | sudo \-E bash \- \> sudo apt-get install \-y nodejs \> node \--version v16.20.1 \> git clone \--recurse-submodules https://github.com/millix/millix-wallet.git \-b develop \> cd millix-wallet \> npm install *ignore messages* \> sudo npm install \-g grunt \> grunt build-core \> cd app \> npm start |

**Setting Up a millix Node**

Once your node is up and running, it will start validating transactions and participating in the millix network. As transactions are validated, your node will earn rewards in the form of transaction fees. These rewards provide an incentive for individuals to run nodes, contributing to the decentralization and security of the millix network.  
Running a millix node is the most fundamental way to become an active participant on the millix network. It allows you to contribute to the network's operation, earn rewards, and gain a deeper understanding of the Millix technology. In the following chapters, we will delve deeper into the Millix APIs and explore how to interact with the Millix network at a deeper level.

**The millix Consensus Algorithm**  
---

A crucial aspect of any decentralized network is its consensus algorithm — the method by which the network agrees on the validity of transactions and the current state of the network. The consensus algorithm is the mechanism that ensures all nodes in the network agree on a single source of truth, preventing double-spending and other forms of fraud. In this chapter, we'll delve into the unique consensus algorithm employed by Millix, and how it contributes to the security, speed, and scalability of the network.

**Understanding Consensus Algorithms**

Before we dive into Millix's consensus algorithm, it's worth taking a moment to understand what consensus algorithms are and why they're so important.  
In a decentralized network, there is no central authority to dictate the state of the system. Instead, each node in the network maintains its own copy of the system state. But with so many copies, how do we ensure they all agree? This is where the consensus algorithm comes in.  
A consensus algorithm is a method used in computer science to achieve agreement on a single data value among distributed processes or systems. In the context of cryptocurrencies, consensus algorithms are used to agree on the validity of transactions and the current state of the blockchain.

**The millix Consensus Algorithm**

Unlike traditional cryptocurrencies that use consensus algorithms like Proof of Work (PoW) or Proof of Stake (PoS), Millix employs a unique approach to consensus. This approach is designed to achieve high security, fast transaction validation, and true decentralization.  
In Millix, each transaction must reference two previous transactions. These references are an assertion by the creator of the transaction that the referenced transactions, and all transactions directly or indirectly referenced by them, are valid and not conflicting. When a node creates a transaction, it checks the transaction's consistency against its own version of the transaction web and attaches its transaction to the parts it views as valid.  
This consensus mechanism allows transactions to be confirmed in parallel, leading to high transaction throughput. It also ensures that all nodes have an equal chance of creating transactions, promoting decentralization.  
Moreover, due to the nature of the DAG structure, transactions gain more confirmations as new transactions are added to the web, increasing the security of the transaction over time.

**The Role of Nodes**

Nodes play a crucial role in the Millix consensus algorithm. Each node in the network participates in the validation of transactions. When a node validates a transaction, it checks that the transaction does not conflict with the transaction web as the node knows it.  
To incentivize nodes to participate in this validation process, Millix employs a unique economic model where nodes are rewarded with transaction fees for their work in validating transactions. This provides a strong incentive for nodes to stay honest and participate actively in the validation process.

**Conclusion**

The Millix consensus algorithm is one of the key features that sets it apart from traditional cryptocurrencies. With its unique approach to validating transactions, Millix ensures fast transaction throughput, high security, and true decentralization. As we delve deeper into the Millix technology in the coming chapters, you'll gain a deeper understanding of how all these elements work together to make Millix a unique and innovative cryptocurrency.

**millix Cryptography and Security**  
---

The world of cryptocurrencies is built on the principles of cryptography. Cryptography ensures the integrity and security of transactions, safeguards user privacy, and prevents malicious activities. In Millix, cryptography plays a central role not only in maintaining security but also in enabling its unique features. In this chapter, we will delve into the cryptographic mechanisms underpinning Millix and how they contribute to its overall security.

**Cryptographic Principles in millix**

Millix, like all cryptocurrencies, relies heavily on cryptographic principles. Here are the key cryptographic features used in millix:

* **Hash Functions**: A hash function takes in data of any size and produces a fixed-size output, often called a hash. The same input will always produce the same hash, but even a small change to the input will produce a completely different hash. In Millix, hash functions are used in transaction validation and to create unique identifiers for transactions.  
* **Digital Signatures**: A digital signature is a cryptographic tool used to verify the authenticity of digital messages or documents. In Millix, digital signatures are used to ensure that transactions are only created by the rightful owners of the funds being transferred.  
* **Public Key Cryptography**: Public key cryptography, also known as asymmetric cryptography, involves a pair of keys \- a public key and a private key. The public key is used to encrypt data, while the private key is used to decrypt it. In the context of Millix, a user's public key is used to create their Millix address, while the private key is used to sign transactions.

**Cryptographic Principles in millix**

Building on these cryptographic principles, Millix implements several key security features:

* **Transaction Validation**: Each transaction in Millix must reference two previous transactions. These references are an assertion that the referenced transactions, and all transactions directly or indirectly referenced by them, are valid and do not conflict with each other. This requirement for direct references to previous transactions makes it difficult to forge transactions without disrupting the entire network.  
* **Consensus Algorithm**: Millix's consensus algorithm ensures that all nodes in the network agree on the validity of transactions. This consensus is reached without relying on a central authority, making the network robust against attacks and failures.  
* **Decentralization**: By encouraging decentralization \- making it easy for anyone to run a node and participate in the network \- Millix ensures that control of the network is not concentrated in a few hands, preventing any single entity from compromising the network.  
* **Node Authentication**: Each Millix node is authenticated using a unique node signature, preventing unauthorized access and ensuring that only valid nodes can participate in the network.  
  


**Conclusion**

The security and integrity of the Millix network rely heavily on the principles of cryptography. Through the use of hash functions, digital signatures, public-key cryptography, and a unique consensus algorithm, Millix ensures the secure processing of transactions and maintains the robustness of the network. As we continue to explore the Millix ecosystem in the next chapters, we will look into the economic incentives that drive network participation and discuss how Millix is shaping the future of cryptocurrencies.

**millix Network: Economy and Incentives**  
---

For any decentralized network to thrive, it's vital to have an effective incentive mechanism. Incentives ensure that all participants, known as nodes, actively contribute to the network's operation, thus maintaining the network's health and security. The Millix network has its own unique economic model and incentive mechanism, which we'll delve into in this chapter.

**The Role of Nodes in the millix Network**  
As we've discussed in previous chapters, nodes play a critical role in the Millix network. They validate transactions, maintain the network's integrity, and participate in forming the consensus. However, running a node requires computational resources and internet bandwidth. So, why would anyone choose to run a Millix node? The answer lies in the network's economic model and incentive mechanism.

**Economic Model of the  millix Network**

In the Millix network, nodes are incentivized to validate transactions through the collection of transaction fees. Each time a node validates a transaction, it collects a small fee. This fee acts as a reward for the node's contribution to the network's operation.  
The economic model of Millix ensures that the network remains self-sustaining. As long as transactions are being made, nodes have an incentive to continue validating transactions and maintaining the network. This model creates a virtuous cycle that promotes the network's health and growth.

**Incentive Mechanism in the millix Network**

The incentive mechanism in the millix network is designed to encourage participation and ensure the network's decentralization. Here's how it works:

* **Equal Opportunity**: All nodes in the millix network have an equal chance of validating transactions. This prevents any single node from dominating the network and ensures a high level of decentralization.  
* **Fee Collection**: When a node validates a transaction, it collects a transaction fee. This fee acts as a reward for the node's contribution to the network.  
* **Sustainability**: The collected fees provide a sustainable incentive for nodes to continue participating in the network. As long as transactions are being made, nodes are incentivized to validate them.

**Conclusion**

The economic model and incentive mechanism of the Millix network play a key role in ensuring its health and decentralization. By incentivizing nodes to validate transactions, Millix ensures that the network remains robust and secure. As we continue to delve deeper into the Millix ecosystem in the next chapters, we will discuss how to develop applications using Millix and explore the future of the Millix network.

**millix APIs**  
---

Having set up and started running your millix node, you are now an active participant in the millix network. But how do you interact with your node and the broader millix network at a level below the ui features? The answer lies in the millix APIs. In this chapter, we will explore these APIs, learning how they allow you to communicate with the network, send transactions, and more.

**Understanding APIs**

An Application Programming Interface, or API, is a set of rules that allows one software application to interact with another. APIs define the methods and data formats that applications can use to communicate with each other. In the context of Millix, the APIs allow you to interact with your Millix node, sending and receiving transactions, querying the state of the network, and more.

**millix API structure**

The millix APIs are structured around a simple URL scheme.   They are accessed like web pages.  They return almost exclusively json values.  There are two main ways of calling a url with data, GET and POST.  Most of the millix APIs are structured as GETs.  However, there are several APIs that POSTs.  The reference section specifically details which are POST or GET.

The URL scheme for calling a millix api via GET:  
https://localhost:5500/api/{node\_id}/{node\_signature}/{api\_id}?p0={value}&...p10={value}

Let's talk about what each part means:

* **https://**: We are calling the api using a secure call.  Each node runs with its own self signed certificate.   Which means when you call it, you need to accept the certificate.  
* **localhost:5500**: This is the location of your millix node (your computer) and default port (5500) the millix node api is listening on. You can change the port via configurations.  **It is recommended that this port be firewalled from outside access.**  
* **{node\_id}**: This is the node identifier for your millix node.  
* **{node\_signature}**: This is a signature used for authentication. It ensures that only authorized users can interact with the node.  
* **{api\_id}**: This is the identifier for the specific API you want to call.  
* **p0={value}&...p10={value}**: These are parameters for the API call. Different APIs will require different parameters.

For example to get the balance of an address would use this:

https://localhost:5500/api/{node\_id}/{node\_signature}/{api\_id}?p0={value}&...p10={value}

* **node\_id**: 1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4  
* **node\_signature**: 4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK  
* **api\_id**: zLsiAkocn90e3K6R (this is the id for the api get\_address\_balance)  
* **p0**: 1KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd0a01KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd ( the address that we want the balance of )

| https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/zLsiAkocn90e3K6R?p0=1KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd0a01KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd  |
| :---- |

We will cover this in detail in the next chapter.  We will show you how to get all the values you need to proceed and list out the api ids.

**Interacting with the millix Network**

The Millix APIs allow you to perform a variety of actions, including:

* **Creating Transactions**: You can create a new transaction, specifying the sender, receiver, and amount of Millix to transfer.  
* **Querying Transactions**: You can query for information about a specific transaction, or for all transactions involving a specific address.  
* **Querying Network State**: You can query for information about the current state of the millix network, for instance the number of nodes you are connected to, the total number of transactions, and node state are some examples.

**Conclusion**

The Millix APIs provide a powerful interface for interacting with the Millix network. They allow you to create and query transactions, interact with your Millix node, and more. Understanding these APIs is essential for anyone looking to build applications on the Millix network or deeply interact with their Millix node. 

**millix API Tutorial**  
---

In this tutorial we will show you how to access the APIs to get information about your node, get your balance, two ways to make a transaction and how to get information about a transaction .  

**The information in this tutorial is from a wallet that I created specifically for this book.  I do not recommend using the node information for your purposes.  Also I highly recommend you do not share your information (with the exception of address) with anyone else.   It can leave you vulnerable to having your millix or other information stolen.**

As we saw in the previous chapter the structure of an API call is:  
https://localhost:5500/api/{node\_id}/{node\_signature}/{api}  
**The ssl is self signed. In order to access the api you need to ignore verification.**

You can check that the node is running and what version by calling:  
[https://localhost:5500/](https://localhost:5500/)  You can either call this via the browser or a curl.

In our case we receive the following:

| {"name":"millix","version":"1.23.2"} |
| :---- |

If the node is not running you will get a message that the site can not be reached.

**Get the Node\_id and Node\_signature**

To start using the api you need to know what the node\_id and the node\_signature is.

Both of which are contained in the node.json file which resides in the **'millix'** directory in your home directory.   If you are using the tangled browser instead of millix node, it can be found in **'tangled-millix'** which would also be found in your home directory.

For this book, I will be using a newly generated wallet.  It would be best if you use your own.   
My node.json file is:

| node.json |
| :---- |
| { 	"key": "xprv9s21ZrQH143K2dWgbFerdwxwAY4U3hb9StHNQR55aPeFLfbsJGMUh7n6uYLB5iEG8ftcg87NND4n3NTyfdV524qHLC9mGP1yp5iEy3fP1ZH", 	"node\_id": "1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4", 	"node\_signature": "4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK" } |

We will be using these values for node\_id and node\_signature.

| node\_id | 1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4 |
| :---- | :---- |
| node\_signature | 4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK |

The base url using the above values  is:  
https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK

**The APIs Being Used In This Tutorial**

| API name | API ID | Description |
| :---- | :---- | :---- |
| get\_session | OBexeX0f0MsnL1S3 | return information on the active wallet |
| get\_address\_balance | zLsiAkocn90e3K6R | returns the available (stable) balance and pending (unstable) balance of an address |
| send\_transaction\_from\_wallet | XPzc85T3reYmGro1 | sends millix from the active wallet |
| list\_transaction\_output | FDLyQ5uo5t7jltiQ | returns records from table transaction\_output that match the provided parameters. |
| get\_address\_private\_key | PKUv2JfV87KpEZwE | returns address' private key |
| sign\_transaction | RVBqKlGdk9aEhi5J | signs transaction\_payload |
| send\_transaction | VnJIBrrM0KY3uQ9X | submits the transaction to a proxy |
| get\_transaction\_extended | IBHgAmydZbmTUAe8 | returns all information about a transaction |

**get\_session**

get\_session returns information on your current wallet including your wallet's main address.  
To call it we use the base url and add the api id to the end of it.

| api\_name | get\_session |
| :---- | :---- |
| api\_id | OBexeX0f0MsnL1S3 |

[https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/OBexeX0f0MsnL1S3](https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/OBexeX0f0MsnL1S3)

This will return the following for our node:

| results for get\_session |
| :---- |
| {    "api\_status":"success",    "wallet":{       "id":"UfWT4cXERIjRUFz+J3VKfKArJoSY2W+7PZlQiH03iqY=",       "address":"1KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd0a01KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd",       "address\_key\_identifier":"1KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd",       "address\_public\_key":"22rWHt1iiwJwBKMZBXHNHYtWFKivbxCLDF7mRZuiMjPZa"    } } |

Let's dissect the results.

| key | description |
| :---- | :---- |
| api\_status | This lets you know that the api performed successfully and that the returned data is valid.  If it fails it will also let you know why it failed.  We will show an example of this further on in the tutorial. |
| wallet-\>id | This is the id of the current wallet being used. |
| wallet-\>address | This is the wallet's main address.  You can create additional addresses but this is the prime address. |
| wallet-\>address\_key\_identifier | This is an identifier to signify that an address belongs to this wallet. |
| wallet-\>address\_public\_key | This is the public key for the address |

**Addresses**

Addresses are split into 3 components.

1. **address\_base**, this is the derived address. This component changes when you generate new addresses for the wallet.  
2. **address\_version**, there are several address versions that are available in millix.  In our case for simple transactions the address\_version will be **'0a0'**  
3. **address\_key\_identifier**, this part of the address indicates that this address belongs to the current wallet.

1KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd**0a0**1KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd

Now that we have our address lets check to see how much balance it has.  For this, we will use the api get\_address\_balance.

**get\_address\_balance**

get\_address\_balance returns the balance and the pending balance (stable and unstable) for a given address.

| api\_name | get\_address\_balance |
| :---- | :---- |
| api\_id | zLsiAkocn90e3K6R |
| parameter p0 | address |

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/zLsiAkocn90e3K6R

get\_address\_balance requires a parameter (**p0**).  **p0** holds the address you want to check.  
A list of all parameters and what they are is in the api reference section of this book.

We will use the following url to check the balance of the wallets prime address:  
https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/zLsiAkocn90e3K6R?p0=1KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd0a01KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd

This returned:

| Results from get\_address\_balance |
| :---- |
| {    "stable":4000,    "unstable":0 } |

As you can see it is not very much.  This is just what is around from proxying 4 transactions.  I will transfer 1,000,000 millix to this address.  And we will check it again.

| Results after sending |
| :---- |
| {    "stable":4000,    "unstable":100000 } |

I checked the balance before consensus was reached.   This is why there is an unstable amount.

I waited until consensus was reached.  A few seconds. Then checked again.

| Results after consensus |
| :---- |
| {    "stable":104000,    "unstable":0 } |

We have a little millix to play with, at the time of writing this a million millix is worth about $0.30.

Now, let's try sending millix from our wallet to another address.  
**send\_transaction\_from\_wallet**

send\_transaction\_from\_wallet is the easier of the two methods we can use to send millix.  It does not require gathering the unspents to build a transaction.  However, you do have to build a json called **transaction\_output\_payload**.  

| api\_name | send\_transaction\_from\_wallet |
| :---- | :---- |
| api\_id | XPzc85T3reYmGro1 |
| parameter p0 | transaction\_output\_payload |

| transaction\_output\_payload |
| :---- |
| {    "transaction\_output\_list":\[       {          "address\_base":"string",          "address\_version":"0a0",          "address\_key\_identifier":"string",          "amount":integer       }    \],    "transaction\_output\_fee":{       "amount": integer    } } |

The components that make up transaction\_output\_payload are

* **transaction\_output\_list**: this is an array of addresses and amounts that you wish to send. each member of this array is composed of the following:  
  * **address\_base**: the address base of the recipient's address.  
  * **address\_version**: the version of the recipient's address, in almost all cases it will be **0a0**.  
  * **address\_key\_identifier**, this is the address\_key\_identifier (wallet) of the recipient.  
  * **amount**: the total amount of millix (not including the fee)  you will send the recipient.  
* **transaction\_output\_fee**: the fee that will be paid to the proxy that will confirm and transmit your transaction.  It contains:  
  * **amount**: the default amount is currently 1000 millix.  The proxy, which is just another node, can determine the fee it wishes to charge.  If the fee you are offering (1000) is less than the fee the proxy accepts, the proxy will reject the transaction, and another proxy will be sought by your node.

Now, lets  send 500,000 millix with a fee of 1000 millix to address  1MYTi5Xsbf9MpfEFmnDgMmAQ6czujQ6ija0a01EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP .

| transaction\_output\_payload |
| :---- |
| {    "transaction\_output\_list":\[       {          "address\_base":"1MYTi5Xsbf9MpfEFmnDgMmAQ6czujQ6ija",          "address\_version":"0a0",          "address\_key\_identifier":"1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP",          "amount":500000       }    \],    "transaction\_output\_fee":{       "amount":1000    } } |

This is a GET api, and it would be called with the following url:

| https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/XPzc85T3reYmGro1?p0={"transaction\_output\_list":\[{ "address\_base":"1MYTi5Xsbf9MpfEFmnDgMmAQ6czujQ6ija", "address\_version":"0a0", "address\_key\_identifier":"1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP", "amount":500000 }\], "transaction\_output\_fee":{ "amount":1000 }} |
| :---- |

Which returns:

| {    "api\_status":"success",    "transaction":\[       {          "transaction\_input\_list":\[             {                "output\_transaction\_id":"2UBCz8DV993fpdxngWkkjRK9nksXp7mR9bgBDnKH6BJHis6Y4C",                "output\_position":-1,                "output\_transaction\_date":1692619315,                "output\_shard\_id":"qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",                "address\_base":"1KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd",                "address\_version":"0a0",                "address\_key\_identifier":"1KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd",                "input\_position":0             },             {                "output\_transaction\_id":"2sH5snR4Mw79zq3ysH5vnJQ2M3V38RJSwMYiy7SJM1JWTkbuZS",                "output\_position":0,                "output\_transaction\_date":1692605309,                "output\_shard\_id":"qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",                "address\_base":"1KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd",                "address\_version":"0a0",                "address\_key\_identifier":"1KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd",                "input\_position":1             }          \],          "transaction\_output\_list":\[             {                "address\_base":"1KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd",                "address\_version":"0a0",                "address\_key\_identifier":"1KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd",                "amount":1004000,                "output\_position":0             }          \],          "transaction\_signature\_list":\[             {                "address\_base":"1KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd",                "address\_attribute":{                   "key\_public":"22rWHt1iiwJwBKMZBXHNHYtWFKivbxCLDF7mRZuiMjPZa"                },                "signature":"4xLYDQCK4jVujKDcbQPPPFwMRPFZtnanhRE1Yzaa3qUioSpSu6GTj9PjNffafeEtsFN9VdQNhDrdRjvXRPvNwZTC"             }          \],          "transaction\_parent\_list":\[             "aRG5Hq1yGRhAUVoCsthbmQueJGHKW3bj6NEMVoYWqTe4Ep7dh"          \],          "payload\_hash":"BMAJAY8xUzXRkHSse9qM7nttVVJr59gxZua91aXgwWg7jmhc4",          "transaction\_date":1692620135,          "node\_id\_origin":"1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4",          "node\_id\_proxy":"1Gc2V1pCaANgUQyArw4DDCrCZ4Ft6iPbZh",          "shard\_id":"qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",          "version":"0b20",          "transaction\_id":"2XCZzRCf52X9rwr6Vmc4joku1NMfjBbxhfvVBuqaveXZhyTu9e"       },       {          "transaction\_input\_list":\[             {                "output\_transaction\_id":"2XCZzRCf52X9rwr6Vmc4joku1NMfjBbxhfvVBuqaveXZhyTu9e",                "output\_position":0,                "output\_transaction\_date":1692620135,                "output\_shard\_id":"qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",                "address\_base":"1KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd",                "address\_version":"0a0",                "address\_key\_identifier":"1KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd",                "input\_position":0             }          \],          "transaction\_output\_list":\[             {                "address\_base":"189BiNHfmQVbbKUCq6Em7HiJ4cgG8AVFrJ",                "address\_version":"0a0",                "address\_key\_identifier":"189BiNHfmQVbbKUCq6Em7HiJ4cgG8AVFrJ",                "amount":1000,                "output\_position":-1             },             {                "address\_base":"1MYTi5Xsbf9MpfEFmnDgMmAQ6czujQ6ija",                "address\_version":"0a0",                "address\_key\_identifier":"1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP",                "amount":500000,                "output\_position":0             },             {                "address\_base":"1KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd",                "address\_version":"0a0",                "address\_key\_identifier":"1KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd",                "amount":503000,                "output\_position":1             }          \],          "transaction\_signature\_list":\[             {                "address\_base":"1KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd",                "address\_attribute":{                   "key\_public":"22rWHt1iiwJwBKMZBXHNHYtWFKivbxCLDF7mRZuiMjPZa"                },                "signature": "3ckefRsSe6AGXzLLaTwjU3Z83658QBn4bJZCx9rRNuQhdSJhbY2D1pRpUyNsFMqvwtd59DWhC6zaarymyaC5xeM"             }          \],          "transaction\_parent\_list":\[             "aRG5Hq1yGRhAUVoCsthbmQueJGHKW3bj6NEMVoYWqTe4Ep7dh"          \],          "payload\_hash":"tdV4e3V3KZZjRJCSvY7UBUtwnes1jAK93QrfpdZZLjpPn3upQ",          "transaction\_date":1692620135,          "node\_id\_origin":"1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4",          "node\_id\_proxy":"1Gc2V1pCaANgUQyArw4DDCrCZ4Ft6iPbZh",          "shard\_id":"qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",          "version":"0a20",          "transaction\_id":"fssYqPVNXmMrsFsxLm2iaeHKWoZACKY7qr3NynzC7Dg7bd5G5",          "transaction\_output\_attribute":{             "transaction\_fee":\[                {                   "node\_id\_proxy":"1Gc2V1pCaANgUQyArw4DDCrCZ4Ft6iPbZh",                   "output\_position":-1                }             \],             "transaction\_output\_metadata":{                             }          }       }    \] } |
| :---- |

**Transaction Information**  
The api actually made two transactions.  
The first transaction is a refresh transaction.  This transaction exists because the parent transactions were hibernated.  A parent transaction is a transaction where we receive millix so that we can spend them.  All transactions get hibernated after a period of time (10 minutes).  This is done for several reasons, the main one is to reduce network load.

A refresh transaction wakes up the hibernating transaction inputs and performs validations and consensus on them then the outputs of this transaction are used to fund the requested transaction.

If a transaction is requested before the parent transaction is hibernated, but stable.  The transaction is sent without a refresh transaction.

The parts of a transaction are:

* **transaction\_input\_list**  
* **transaction\_output\_list**  
* **transaction\_signature\_list**  
* **transaction\_parent\_list**  
* **payload\_hash**  
* **transaction\_date**  
* **node\_id\_origin**  
* **node\_id\_proxy**  
* **shard\_id**  
* **version**  
* **transaction\_id**  
* **transaction\_output\_attribute**  
* **transaction\_output\_metadata**

**transaction\_input\_list**  
This is a list of unspent transaction (parent) outputs from the transactions used to fund the transaction.  
It contains:

* **output\_transaction\_id**: the transaction hash of a parent transaction.  
* **output\_position**: the position in the parent transaction of the output which will be used for funding.  
* **output\_transaction\_date**: the timestamp of when the parent transaction occured.  
* **output\_shard\_id**: on which shard does the parent transaction reside.  
* **address\_base**: the address base of the parent transaction's recipient  
* **address\_version**: the address version of the parent transaction's recipient  
* **address\_key\_identifier**: the address key identifier of the parent transaction's recipient  
* **input\_position**: the position in the current transaction that this output holds.

**transaction\_output\_list**  
This is a list of recipients, addresses and amounts that are the recipients.  
It contains:

* **address\_base**: the address base of the recipient  
* **address\_version**: the address version of the recipient  
* **address\_key\_identifier**: the address key identifier of the recipient  
* **amount**: the amount in millix that the recipient will receive  
* **output\_position**: what position in the transaction output list does this occur.

**Note**:  
The output position of the fee recipient is \-1 all others are sequential from 0\.

**transaction\_signature\_list**  
This is a list of addresses and signatures to prove ownership of the unspent outputs that are used to fund the transaction.

| transaction\_signature\_list |
| :---- |
|       "transaction\_signature\_list":\[             {                "address\_base":"1KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd",                "address\_attribute":{                   "key\_public":"22rWHt1iiwJwBKMZBXHNHYtWFKivbxCLDF7mRZuiMjPZa"                },                "signature": "3ckefRsSe6AGXzLLaTwjU3Z83658QBn4bJZCx9rRNuQhdSJhbY2D1pRpUyNsFMqvwtd59DWhC6zaarymyaC5xeM"             }          \],  |

Each member of the list consist of:

* **address\_base**: address\_base of the  address we are signing.  
* **address\_attribute-\>key\_public**: this is the public key of the address  
* **signature**: The signature of the address.

**transaction\_parent\_list**  
The list of transaction\_ids from transactions where the unspents' used to fund the current transaction were created.

**payload\_hash**  
This is a hash of the transaction data that can be used to prove that the transaction has not been modified.

**transaction\_date**  
This is a hash of the transaction data that can be used to prove that the transaction has not been modified.

**node\_id\_origin**  
The id of the sender's node.

**node\_id\_proxy**  
The id of the proxy which verifies and sends the transaction.

**shard\_id**  
The data shard the transaction resides on.

**version**  
The transaction version.  In most cases it will be 0a20

**transaction\_id**  
The transaction hash or id of the transaction.

**transaction\_output\_attribute**  
\*\*\*\*

**transaction\_output\_metadata**  
\*\*\*\*

**Error Message**  
Now, let's try sending a transaction with more than we have left to force an example of an error.

| https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/XPzc85T3reYmGro1?p0={"transaction\_output\_list":\[{ "address\_base":"1MYTi5Xsbf9MpfEFmnDgMmAQ6czujQ6ija", "address\_version":"0a0", "address\_key\_identifier":"1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP", "amount":2000000 }\], "transaction\_output\_fee":{ "amount":1000 }} |
| :---- |

this attempts to send 2,000,000 millix from a wallet that has around 500,000 millix in it.  
This results in a fail with the following return message:

| {    "api\_status":"fail",    "api\_message":{       "error":"insufficient\_balance",       "data":{          "balance\_stable":503000       }    } } |
| :---- |

You will be notified of a failure with an api\_status of "fail" and an api\_message with the reason that it failed.

**Building a transaction by using unspents**  
First, we gave you an example of how to create a transaction using the wallet.  This is the easy way.  Now, we are going to show you how to create a transaction using unspents' from previous transactions, rather than just pulling them from a wallet..

The steps involved are selecting the unspents' that you wish to use.  The unspent amounts have to have a sum greater or equal to the amount that you wish to send including the transaction fee.  
Then, you need to build the transaction payload.  This is all the information you need to send a transaction.  
Sign the transaction using the private keys of the unspents you have selected.  
Finally to send the transaction to the network using a proxy.

**listing the unspents**  
We need to get a list of unspents that are available to be used as we need to.  To do this we call  list\_transaction\_output with the parameters set to get what we need.

| api\_name | list\_transaction\_output |
| :---- | :---- |
| api\_id | FDLyQ5uo5t7jltiQ |
| parameter p0 | transaction\_id |
| parameter p1 | date\_begin |
| parameter p2 | date\_end |
| parameter p3 | address\_key\_identifier |
| parameter p4 | is\_double\_spend |
| parameter p5 | double\_spend\_date\_begin |
| parameter p6 | double\_spend\_date\_end |
| parameter p7 | is\_stable |
| parameter p8 | stable\_date\_begin |
| parameter p9 | stable\_date\_end |
| parameter p10 | is\_spent |
| parameter p11 | spent\_date\_begin |
| parameter p12 | spent\_date\_end |
| parameter p13 | order\_by (create\_date desc) |
| parameter p14 | record limit (1000) |
| parameter p15 | shard\_id |

The parameters we need for our purpost

* **p3**: address\_key\_identifier \- the address\_key identifier where the unspent was sent  
* **P4**: is\_double\_spend \- needs to be 0, if it is anything else the transaction needs to be reverified or pruned.  
* **p7**: is\_stable \- needs to be 1  
* **p10**: is\_spent \- needs to be 0, this means that the unspent has not been used.  
* **p13**: order\_by \- 'amount desc' \- largest amounts first.

The API call:

| https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/FDLyQ5uo5t7jltiQ?p3=1KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd\&p4=0\&p7=1\&p10=0\&p13=amount%20desc |
| :---- |

The results of this are:

| list of unspents we can use |
| :---- |
| \[    {       "transaction\_id":"fssYqPVNXmMrsFsxLm2iaeHKWoZACKY7qr3NynzC7Dg7bd5G5",       "shard\_id":"qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",       "output\_position":1,       "address":"1KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd0a01KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd",       "address\_key\_identifier":"1KDBhw67ewrjME1kVJnbtwdpWPgtJoTckd",       "amount":503000,       "stable\_date":1692620933,       "is\_stable":1,       "spent\_date":null,       "is\_spent":0,       "double\_spend\_date":null,       "is\_double\_spend":0,       "status":2,       "create\_date":1692620166,       "transaction\_date":1692620135,       "transaction\_create\_date":1692620166,       "transaction\_status":2    } \] |

We only had one unspent available for use.

**Building The transaction\_payload**  
Now that we have the unspent(s) we wish to use, we can build the transaction payload which we are going to sign.

The template of the transaction\_payload is described as follows.

| transaction\_payload |
| :---- |
| {    "transaction\_output\_list":\[       {          "address\_base":"string",          "address\_version":"string",          "address\_key\_identifier":"string",          "amount":integer       }    \],    "transaction\_output\_fee":{       "fee\_type":"transaction\_fee\_default",       "amount":1000    },    "transaction\_input\_list":\[       {          "output\_transaction\_id": "string",          "output\_transaction\_date":time\_stamp,          "output\_shard\_id":"string",          "output\_position":0,          "address\_base":"string",          "address\_version":"string",          "address\_key\_identifier":"string"       }    \] } |

**transaction\_output\_list**  
This is a list of addresses and amounts of the recipients of the transaction.

**transaction\_output\_fee**  
This is the fee we are willing to pay for our transaction.  Remember that the unspents need to be equivalent to the amount that will be sent including the fee.

**transaction\_input\_list**  
Finally, this is where we are going to include the unspents required to fund the transaction.

**millix API Reference**  
---

**get\_node\_id**

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

**list\_node**

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

**get\_available\_version**

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

**get\_storage\_config**

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

**event\_log\_list**

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

**list\_node\_memory\_extended**

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

**new\_node**

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

**list\_keychain\_address**

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

**get\_keychain\_address**

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

**new\_keychain\_address**

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

**get\_address\_balance**

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

**list\_address**

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

**send\_transaction**

submits a new transaction with a transaction payload, containing inputs, signatures, outputs and amounts to the node. this API is generally used in conjunction with the output from API RVBqKlGdk9aEhi5J (sign\_transaction)

| ID: | VnJIBrrM0KY3uQ9X |
| :---- | :---- |
| Method: | GET |
| Require Identity: | True |
| Private: | True |

| p0 | transaction\_payload\_signed\<required\> |
| :---- | :---- |
| p1 | proxy\_time\_limit\<default 30000ms\> |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/VnJIBrrM0KY3uQ9X

\*\*\* grab from tutorial \*\*\*

**Results:**

**list\_transaction**

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

**sign\_transaction**

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

**get\_node\_transaction\_stat\_summary**

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

**get\_node\_address\_stat\_summary**

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

**list\_address\_version**

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

**get\_backlog\_list**

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

**reset\_backlog**

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

**new\_address\_version\_released**

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

**list\_config\_private**

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

**list\_config\_public**

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

**optimize\_database**

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

**reset\_transaction\_verification\_timeout**

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

**register\_node\_identity**

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

**list\_log**

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

**toggle\_service\_network**

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

**toggle\_service\_node**

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

**reload\_configs\_from\_database**

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

**get\_mnemonic\_phrase**

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

**get\_address\_private\_key**

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

**update\_config\_value**

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

**list\_node\_attribute**

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

**get\_transaction\_input**

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

**get\_transaction**

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

**get\_transaction\_extended**

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

**get\_transaction\_output**

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

**list\_transaction\_output**

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

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/FDLyQ5uo5t7jltiQ?p14=2

Note: The output is limited to 2 entries (p14=2)

**Results:**

| \[    {       "transaction\_id":"hhEhQq192vcNFDH1WvG6nL1AqTZLZr9gMb5AD8AUXKARkVb4o",       "shard\_id":"qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",       "output\_position":0,       "address":"1JUaQGfziY9PxFEcTNAs5ofXuuvPfsNMBD0a01JUaQGfziY9PxFEcTNAs5ofXuuvPfsNMBD",       "address\_key\_identifier":"1JUaQGfziY9PxFEcTNAs5ofXuuvPfsNMBD",       "amount":20003301,       "stable\_date":null,       "is\_stable":0,       "spent\_date":null,       "is\_spent":0,       "double\_spend\_date":null,       "is\_double\_spend":0,       "status":2,       "create\_date":1698754545,       "transaction\_date":1698754528,       "transaction\_create\_date":1698754545,       "transaction\_status":2    },    {       "transaction\_id":"hhEhQq192vcNFDH1WvG6nL1AqTZLZr9gMb5AD8AUXKARkVb4o",       "shard\_id":"qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",       "output\_position":-1,       "address":"1GgaUk3CuJVxQF7NrkRvbjU9L1vQaP5Q730a01GgaUk3CuJVxQF7NrkRvbjU9L1vQaP5Q73",       "address\_key\_identifier":"1GgaUk3CuJVxQF7NrkRvbjU9L1vQaP5Q73",       "amount":1000,       "stable\_date":null,       "is\_stable":0,       "spent\_date":null,       "is\_spent":0,       "double\_spend\_date":null,       "is\_double\_spend":0,       "status":2,       "create\_date":1698754545,       "transaction\_date":1698754528,       "transaction\_create\_date":1698754545,       "transaction\_status":2    } \] |
| :---- |

**list\_transaction\_input**

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

**list\_transaction\_output\_attribute\_sent**

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

**list\_transaction\_output\_attribute\_received**

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

**list\_transaction\_output\_attribute\_received**

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

**new\_session\_with\_phrase**

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

**new\_session\_with\_file**

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

**list\_shard**

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

**add\_shard**

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

**support\_shard**

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

**verify\_address**

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

**get\_random\_mnemonic**

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

**new\_session**

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

**get\_session**

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

**get\_stat\_summary**

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

**get\_unspent\_output\_summary**

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

**get\_os\_info**

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

**send\_transaction\_from\_wallet**

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

**get\_transaction\_output\_data**

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

**get\_transaction\_output\_key**

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

**sync\_transaction\_output\_data**

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

**send\_transaction\_with\_data\_from\_wallet**

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

**send\_aggregation\_transaction\_from\_wallet**

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

**list\_transaction\_history**

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

**end\_session**

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

**wallet\_stop\_ongoing\_transaction**

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

**reset\_transaction\_validation**

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

**get\_config\_by\_name**

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

**get\_known\_wallet\_balance**

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

**get\_node\_public\_ip**

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

**remove\_address\_version**

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

**get\_known\_address\_balance**

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

**get\_is\_key\_present**

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

**reset\_validation\_transaction\_by\_guid**

reset transaction validation by transaction guid

| ID: | P2LMh8NsUTkpWAH3 |
| :---- | :---- |
| Method: | POST |
| Require Identity: | True |
| Private: | True |

**Example:**

https://localhost:5500/api/1PMhekJAHqt7VAEY5GuWAWjRdWYac3uEX4/4yTaAicYGzaU9iwkA1vwRRFrtrcdMijJ9MUQFmqbXGvdUgjENSoaUKWGRamS2HxA7SLJNfqxYKj9CtjqNrYaHBpK/P2LMh8NsUTkpWAH3

**Results:**

|  |
| :---- |

**verify\_dns\_has\_address\_key\_identifier**

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

**get\_transaction\_output\_stats**

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

**cryptography**

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

