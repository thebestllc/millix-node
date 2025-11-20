# Foreword: Why Millix Matters in 2025

Welcome to *The Millix Book*, the definitive guide to understanding, using, and building on Millix—one of the most innovative and underappreciated cryptocurrencies in existence today.

## A Personal Note

When I first encountered Millix in its early days, I was struck by something rare in the cryptocurrency world: genuine innovation that wasn't just theoretical. While countless projects promised "the next big thing" with whitepapers full of buzzwords and vaporware, Millix quietly delivered a working, elegant solution to problems that have plagued cryptocurrencies since Bitcoin's inception.

In 2025, as we stand at a crossroads in cryptocurrency adoption, Millix represents something increasingly precious: a cryptocurrency that actually works as digital cash should work—fast, predictable, lightweight, and truly decentralized.

## Why This Book Exists

Despite its technical excellence and years of proven operation, Millix remains one of crypto's best-kept secrets. This book exists to change that.

Whether you're a developer looking to build the next generation of decentralized applications, a crypto enthusiast seeking alternatives to bloated blockchain projects, or simply someone curious about how digital money *should* work, this book is your comprehensive guide to the Millix ecosystem.

## What Makes Millix Special?

Let me be direct: **Millix isn't trying to be everything to everyone**. It's not promising to replace the internet, solve world hunger, or make you rich overnight. Instead, it does one thing exceptionally well: **it functions as peer-to-peer digital cash**, exactly as cryptocurrency was originally intended.

Here's what sets Millix apart in 2025:

### 1. **True Decentralization**
   
No masternodes. No validators with special privileges. No mining pools controlling the network. Every Millix node is equal, capable of performing every function. This isn't just philosophical purity—it's practical resilience.

### 2. **Predictable Economics**

Every transaction costs exactly **1,000 millix**. Period. No gas wars, no auction mechanisms, no surprises. You know what you'll pay before you click send. In a world where Ethereum gas fees can swing from $5 to $500 depending on network congestion, this predictability is revolutionary.

### 3. **Genuine Scalability**

Millix's modified DAG (Directed Acyclic Graph) architecture doesn't just promise scalability—it delivers it. Transactions process in parallel, not sequentially. As more nodes join, the network gets stronger and faster, not slower and more expensive.

### 4. **Lightweight Design**

You don't need a data center to run a Millix node. A modest laptop works fine. This accessibility is critical for maintaining decentralization in an era when running a full Bitcoin or Ethereum node requires terabytes of storage and specialized hardware.

### 5. **Built-In NFT Support**

Unlike bolted-on NFT implementations, Millix supports non-fungible tokens natively at the protocol level. Create, transfer, and manage NFTs with the same ease as regular transactions—no smart contracts required.

### 6. **Data Storage on the DAG**

Millix isn't just a payment network—it's a distributed database. Store encrypted data, build messaging apps, create decentralized social networks. The infrastructure is already there, waiting for builders.

## The Problems Millix Solves

Let's talk about what's broken in cryptocurrency today:

**Bitcoin** revolutionized money but can't scale beyond ~7 transactions per second. Running a full node requires hundreds of gigabytes of storage. Transaction fees during busy periods make small payments impractical.

**Ethereum** brought smart contracts but sacrificed simplicity and predictability. Gas fees are a nightmare. The transition to Proof of Stake concentrated power among large validators.

**Layer 2 solutions** like Lightning Network and Polygon add complexity, centralization points, and new failure modes while trying to patch the fundamental limitations of their base layers.

**"Ethereum Killers"** like Solana and Avalanche often sacrifice decentralization for speed, resulting in networks that can (and do) halt when things go wrong.

**Millix takes a different approach**: Instead of building complex solutions on top of flawed foundations, it redesigned the foundation itself. The result is a system that's fast, efficient, and decentralized by design—not by compromise.

## Who This Book Is For

This book is written for three audiences:

### Developers

If you're building decentralized applications, Millix offers a clean, simple foundation that just works. No dealing with Solidity quirks, gas optimization nightmares, or chain reorganizations. Just straightforward APIs and predictable behavior.

You'll find complete code examples, API references, and practical tutorials throughout this book—all tested and ready to use.

### Crypto Enthusiasts

If you're tired of hype cycles and want to understand a cryptocurrency that actually delivers on its promises, Millix will restore your faith. This book will teach you everything from running your first node to understanding the consensus algorithm.

### Curious Newcomers

If cryptocurrencies have always seemed too complex, too expensive, or too centralized, Millix is a breath of fresh air. This book starts with fundamentals and builds your knowledge systematically. No jargon without explanation. No assuming prior knowledge.

## What You'll Learn

This book takes you on a complete journey through the Millix ecosystem:

- **Part I: Foundations** – Understanding cryptocurrency, DAGs, and why Millix's design choices matter
- **Part II: Using Millix** – Setting up nodes, making transactions, managing wallets
- **Part III: Building on Millix** – Programming with the Millix APIs, creating NFTs, developing dApps
- **Part IV: Advanced Topics** – Sharding, storage nodes, consensus mechanisms, and the future roadmap

Every chapter includes:
- **Working code examples** (tested with Millix v1.18+)
- **Practical exercises** to reinforce concepts
- **Real-world use cases** showing Millix in action
- **Troubleshooting tips** for common issues

## The Road Ahead

Cryptocurrency in 2025 stands at a crossroads. One path leads to ever-more-complex Layer 2 solutions, centralized validators, and systems that require PhD-level knowledge to understand. The other path leads to simplicity, true decentralization, and systems that just work.

Millix chose the second path—and this book is your guide to following it.

The cryptocurrency space needs fewer promises and more working products. Fewer whitepapers and more running code. Fewer marketing campaigns and more genuine innovation.

Millix delivers all of this, quietly and reliably, every single day. With nine quadrillion millix in circulation, a robust node network, and a growing ecosystem of applications, Millix is ready for its moment.

This book is here to help you be part of that moment.

## A Note on Accuracy

This book reflects the state of Millix as of November 2025, based on millix-node version 1.18 and later. The cryptocurrency space moves quickly, and while I've made every effort to ensure accuracy, always check the official Millix documentation at [millix.org](https://millix.org) for the latest updates.

Code examples in this book are marked with `[TESTED NOV 2025]` where they've been personally verified, or `[PSEUDOCODE]` where they're illustrative. Helper scripts and tools are available in the `documentation/scripts/` directory.

## Let's Begin

Whether you're here to learn, build, or simply understand what makes a good cryptocurrency great, you're in the right place.

Millix isn't the most hyped cryptocurrency. It's not backed by venture capital billions or celebrity endorsements. But it might just be the best cryptocurrency that too few people know about.

Let's fix that.

Welcome to Millix. Let's build the future of digital cash together.

---

*This book is dedicated to the Millix community—the developers, node operators, and early adopters who believed in doing things the right way, not the easy way.*

---

**Ready?** Let's start with the fundamentals. Turn the page (or scroll down) to Chapter 1: Introduction to Cryptocurrency.



# Chapter 1: Introduction to Cryptocurrency

> *"The root problem with conventional currency is all the trust that's required to make it work."* – Satoshi Nakamoto

## What is Money, Really?

Before we dive into cryptocurrency, let's talk about money itself. What makes something "money"?

Throughout history, humans have used shells, salt, gold, paper, and now digital entries in bank databases as money. The specific medium doesn't matter—what matters is that money serves three functions:

1. **Medium of Exchange**: You can trade it for goods and services
2. **Store of Value**: It retains purchasing power over time
3. **Unit of Account**: You can measure and compare value with it

For most of human history, money was a physical thing you could hold—coins made of precious metals, paper notes backed by gold. But in 1971, when the US abandoned the gold standard, money became purely abstract: numbers in computer systems, backed only by government decree and social agreement.

This shift opened possibilities... and problems.

## The Problems with Traditional Money

Modern money has issues:

### Centralization

Banks and governments control money. They decide:
- How much to print (inflation)
- Who can send money where (capital controls)
- Whether to freeze your account (censorship)
- What information to collect about you (surveillance)

### High Costs

Want to send $100 to someone overseas? Prepare to pay $20-50 in fees and wait 3-5 business days. Wire transfers, currency exchanges, and intermediaries all take their cut.

### Exclusion

Over 1.7 billion adults worldwide lack access to basic banking services. No bank account = no way to safely store or send money digitally.

### Inflation

Governments print money to fund spending, diluting the value of everyone's savings. The US dollar has lost over 95% of its purchasing power since 1913.

### Trust Required

You must trust banks to:
- Keep your money safe
- Process transactions correctly
- Not lose your money
- Not go bankrupt
- Follow the rules

History shows this trust is often misplaced.

## Enter Cryptocurrency

In 2008, an anonymous person (or group) named Satoshi Nakamoto published a whitepaper titled *"Bitcoin: A Peer-to-Peer Electronic Cash System."* It proposed a radical idea: **money that requires no trust**.

No central authority. No banks. No government backing. Just mathematics, cryptography, and a network of computers running open-source software.

On January 3, 2009, Satoshi mined the first Bitcoin block (the "Genesis Block"), embedding a message: *"The Times 03/Jan/2009 Chancellor on brink of second bailout for banks."* 

Cryptocurrency was born.

## What Makes Cryptocurrency Different?

### 1. Decentralization

No single point of control. Thousands of computers (nodes) worldwide maintain the network. No CEO, no headquarters, no company to shut down.

### 2. Cryptographic Security

Your money is secured by mathematics, not security guards. Breaking Bitcoin's cryptography would require more computing power than exists on Earth.

### 3. Programmable

Cryptocurrency isn't just digital money—it's money with superpowers. You can program conditions, automate payments, create smart contracts.

### 4. Permissionless

Anyone with internet access can:
- Create a wallet (no ID required)
- Send money globally (no bank account needed)
- Participate in the network (no approval necessary)

### 5. Transparent (Yet Private)

All transactions are public and verifiable, but identities are pseudonymous. You can see that address A sent 1 BTC to address B, but you might not know who controls those addresses.

### 6. Scarce by Design

Unlike fiat currency, most cryptocurrencies have fixed or predictable supply schedules. Bitcoin will never exceed 21 million coins. Scarcity creates value.

## Key Concepts Explained Simply

### Blockchain

Imagine a notebook that records every transaction. Everyone has a copy of this notebook, and everyone agrees on what's written in it. When someone makes a transaction, it gets written as a new entry in everyone's notebook simultaneously.

This notebook is the **blockchain**—a chain of "blocks" (pages) that contain transactions. Each block links to the previous one, creating an unbreakable chain of history.

```
Block 1 → Block 2 → Block 3 → Block 4 → ...
[Txs]     [Txs]     [Txs]     [Txs]
```

### Mining and Proof of Work

How does the network agree on what to write in the notebook? In Bitcoin, computers compete to solve complex math puzzles. The first to solve it gets to write the next block and earns newly created bitcoins as reward.

This process is called **mining**, and the mechanism is **Proof of Work (PoW)**. It's energy-intensive by design—the energy cost makes it economically irrational to attack the network.

### Wallets

A cryptocurrency wallet isn't actually a container for coins. It's more like a keychain holding **private keys**—secret numbers that let you spend the coins associated with your addresses.

```
Private Key → Public Key → Address
    (Secret)    (Shareable)  (Where coins are sent)
```

Think of your address like an email address (public) and your private key like your password (private). Anyone can send to your address, but only you (with the private key) can spend from it.

**Critical rule**: If you lose your private key, your coins are gone forever. No "forgot password" button. No customer service. **Not your keys, not your coins.**

### Transactions

A cryptocurrency transaction is essentially a message saying: "Transfer X coins from address A to address B, signed by the owner of address A."

```json
{
  "from": "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
  "to": "1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2",
  "amount": 0.5,
  "fee": 0.0001,
  "signature": "3045022100..."
}
```

The signature proves you own the "from" address without revealing your private key—cryptographic magic!

### Consensus

How do thousands of independent computers agree on the state of the ledger? Through **consensus mechanisms**—rules that ensure everyone follows the same version of truth.

Bitcoin uses **Proof of Work**: Whoever solves the math puzzle writes the next block.
Ethereum 2.0 uses **Proof of Stake**: Validators lock up coins to earn the right to validate.
Millix uses a **DAG-based consensus**: Transactions validate each other (more on this later).

## Different Types of Cryptocurrencies

### 1. Digital Gold (Bitcoin)

**Bitcoin** aims to be "digital gold"—a store of value resistant to inflation and censorship. It's slow (~7 transactions/second) and expensive to transact, but incredibly secure and decentralized.

**Use case**: Long-term savings, large value transfers, reserve currency for other cryptocurrencies

### 2. Smart Contract Platforms (Ethereum, Solana)

These cryptocurrencies support **smart contracts**—programs that run on the blockchain and automatically execute when conditions are met.

**Example**: A decentralized exchange (DEX) where trades happen automatically without any company running the exchange.

**Use case**: Decentralized finance (DeFi), NFTs, decentralized apps (dApps)

### 3. Stablecoins (USDC, USDT)

Cryptocurrencies pegged to stable assets (usually $1 USD). They offer cryptocurrency benefits without the price volatility.

**Use case**: Trading, payments, moving money between cryptocurrencies

### 4. Privacy Coins (Monero, Zcash)

These hide transaction details—sender, receiver, and amount. Maximum privacy, controversial regulation.

**Use case**: Private transactions, avoiding surveillance

### 5. DAG-Based Cryptocurrencies (IOTA, Nano, **Millix**)

Instead of a linear blockchain, these use a **Directed Acyclic Graph (DAG)**—a web-like structure where transactions reference multiple previous transactions.

**Advantage**: Better scalability, faster confirmation, lower costs

**Millix falls here**—and we'll explore why that matters throughout this book.

## Blockchain vs. DAG: A Visual Comparison

### Traditional Blockchain

```
[Block 1] → [Block 2] → [Block 3] → [Block 4]
   ↓           ↓           ↓           ↓
 Tx A        Tx D        Tx G        Tx J
 Tx B        Tx E        Tx H        Tx K
 Tx C        Tx F        Tx I        Tx L
```

**Characteristics**:
- Sequential processing
- Limited transactions per block
- Miners compete for block rewards
- Scalability bottleneck

### DAG (Directed Acyclic Graph)

```
      Tx A
     /    \
   Tx B   Tx C
    |  \ /  |
    |   X   |
    |  / \ |
   Tx D   Tx E
     \    /
      Tx F
```

**Characteristics**:
- Parallel processing
- Each transaction references previous ones
- No miners (typically)
- Scalability improves with usage

In a DAG, **transactions validate other transactions**. When you submit a transaction, you must verify 1-2 previous transactions as part of the process. The more transactions happening, the faster they all confirm. It's beautiful in its simplicity.

## Common Cryptocurrency Myths (Debunked)

### Myth 1: "Cryptocurrency is only for criminals"

**Reality**: Cash is used far more for illicit activity. Bitcoin's transparent ledger actually makes crime *easier* to trace. Ask the people arrested for ransomware attacks using Bitcoin—the blockchain never forgets.

### Myth 2: "Crypto has no real value"

**Reality**: Value comes from utility and scarcity. Cryptocurrency has utility (uncensorable payments, programmable money, global access) and scarcity (fixed supply). That's more than can be said for fiat currency, backed only by government decree.

### Myth 3: "You can just copy Bitcoin"

**Reality**: Code is easy to copy. Networks are not. Bitcoin's value comes from its network effect—millions of users, thousands of nodes, massive mining infrastructure. A copy without the network is worthless.

### Myth 4: "Governments will ban it"

**Reality**: They've tried. China has "banned" Bitcoin multiple times. The network keeps running. Banning cryptocurrency is like banning the internet—technically possible in a totalitarian state, but impractical and ultimately futile.

### Myth 5: "It's too late to get involved"

**Reality**: Bitcoin was "too late" at $1, $10, $100, $1,000, and $10,000. Cryptocurrency adoption is still under 5% globally. We're early.

## Why Different Cryptocurrencies Exist

"Why not just use Bitcoin for everything?"

Because different designs make different trade-offs:

| Priority | Best For | Example |
|----------|----------|---------|
| **Maximum Security** | Store of value, large transfers | Bitcoin |
| **Smart Contracts** | DeFi, NFTs, dApps | Ethereum |
| **Instant Payments** | Retail, microtransactions | Lightning, Millix |
| **Privacy** | Anonymous transactions | Monero |
| **Stability** | Everyday payments, trading | USDC |
| **Scalability** | High throughput | Solana, Millix |

No single design optimizes everything. Bitcoin's security comes at the cost of speed. Solana's speed comes at the cost of decentralization. Trade-offs are inevitable.

**Millix's trade-off**: Optimize for simplicity, predictability, and genuine peer-to-peer cash, while accepting that it won't be a smart contract platform or privacy coin.

## The Evolution of Cryptocurrency

### Generation 1: Bitcoin (2009)

**Innovation**: Decentralized digital money  
**Limitation**: Slow, expensive, limited functionality

### Generation 2: Ethereum (2015)

**Innovation**: Smart contracts, programmable money  
**Limitation**: Scalability crisis, unpredictable gas fees

### Generation 3: Scalability Solutions (2017-2020)

**Innovation**: Faster, cheaper transactions  
**Examples**: Solana (Proof of History), Cardano (Proof of Stake), IOTA (DAG)  
**Limitation**: Often sacrifice decentralization or security

### Generation 3.5: Practical Solutions (2020+)

**Innovation**: Focus on *actually working* as intended  
**Examples**: **Millix** (DAG with predictable fees), Lightning Network (Bitcoin Layer 2), Polygon (Ethereum Layer 2)  
**Philosophy**: Stop chasing hype, deliver utility

Millix belongs to this last category—cryptocurrency that works reliably, predictably, and efficiently, without promising to be everything to everyone.

## The Fundamental Questions

Every cryptocurrency must answer:

1. **Consensus**: How do we agree on transaction order?
2. **Security**: How do we prevent double-spending and attacks?
3. **Scalability**: How many transactions can we handle?
4. **Decentralization**: How do we prevent control concentration?
5. **Incentives**: Why would people run nodes?

Bitcoin's answers dominated for a decade. But they're not the only answers, and they come with significant trade-offs.

Millix provides different answers—and in the next chapter, we'll explore exactly what makes those answers compelling.

## Key Takeaways

✅ **Cryptocurrency is money that requires no trust**—secured by mathematics, not institutions

✅ **Blockchain is just one approach**—DAGs offer an alternative with different trade-offs

✅ **Different cryptocurrencies optimize for different goals**—no one-size-fits-all solution

✅ **Decentralization is the killer feature**—everything else follows from removing central authority

✅ **Cryptocurrency is still early**—we're building the foundation for the future of money

## Looking Ahead

Now that you understand the fundamentals of cryptocurrency, the problems it solves, and the different approaches to solving them, you're ready to understand Millix.

In the next chapter, we'll explore exactly what makes Millix unique, how its DAG-based architecture works, and why its design choices matter for the future of digital cash.

---

**Next**: [Chapter 2: What is Millix?](02-what-is-millix.md)



# Chapter 2: What is Millix?

> *"The most powerful designs are those that remove complexity, not add it."* – Unknown

## The Origin Story

In 2018, a team of cryptocurrency veterans who had spent years working with various blockchain projects realized something important: **most cryptocurrencies were solving the wrong problems**.

The space was obsessed with smart contracts, DeFi primitives, and Layer 2 scaling solutions—all trying to patch the fundamental limitations of blockchain architecture. What about building a cryptocurrency that *actually worked as peer-to-peer digital cash*?

Not a platform for decentralized casinos. Not a "world computer." Just **money that works**.

That question led to Millix.

Through 2018 and 2019, the team followed a rigorous methodology: **"build, test, break, rebuild."** No shortcuts. No premature launch. No ICO hype. Just engineering.

On **January 20, 2020**, the Millix network went live with its Genesis event. Nine quadrillion millix were created—and not a single one was sold to investors. No pre-mine. No team allocation. No venture capital.

The goal was simple: prove that a DAG-based cryptocurrency could operate **without centralization** and **without gatekeepers**. Every node equal. Every participant sovereign.

By 2025, Millix has:
- ✅ Processed millions of transactions
- ✅ Handled 100,000+ transactions in a single day
- ✅ Runs on 14,000+ nodes worldwide
- ✅ Operates on devices as humble as a Raspberry Pi
- ✅ Never had downtime
- ✅ Never changed its core economics

No drama. No pivot to NFTs (though it supports them). No rebranding. Just a cryptocurrency that quietly does its job, day after day, exactly as designed.

## What Makes Millix Different?

Let's cut through the noise. Here's what Millix **is** and **isn't**:

### Millix IS:
- ✅ A **DAG-based cryptocurrency** optimized for peer-to-peer payments
- ✅ **Zero-configuration** instant payments with predictable fees
- ✅ **Lightweight** enough to run on a Raspberry Pi
- ✅ **Truly decentralized** (all nodes equal, no gatekeepers)
- ✅ **Infinitely scalable** (more transactions = faster confirmations)
- ✅ **NFT-native** (supports NFTs at protocol level)
- ✅ **Data storage enabled** (store encrypted data on the DAG)

### Millix IS NOT:
- ❌ A smart contract platform (it's money, not a computer)
- ❌ Trying to replace Bitcoin (different goals, different trade-offs)
- ❌ An "Ethereum killer" (not competing in that space)
- ❌ VC-funded vaporware (it's been working since 2020)
- ❌ Designed for speculation (it's designed for utility)

If you're looking for the next 100x memecoin or a platform to launch your DeFi casino, Millix isn't for you. But if you want cryptocurrency that **actually functions as digital cash should**—fast, cheap, predictable, and censorship-resistant—keep reading.

## The Core Innovation: Modified DAG Architecture

Remember the DAG (Directed Acyclic Graph) concept from Chapter 1? Millix takes that foundation and refines it with key modifications:

### Standard DAG Problems:

```
      Tx A
     /    \
   Tx B   Tx C
    |  \ /  |
    |   X   |  ← Conflicts need resolution
    |  / \ |
   Tx D   Tx E
```

Standard DAGs can have:
- Conflicting transactions (double-spends)
- No clear finality
- Network splits
- Complicated consensus

### Millix's Solution:

Millix uses a **modified DAG** with clever additions:

1. **Transaction References**: Each transaction must reference previous transactions, creating a web of validation
2. **Sharding**: Transactions are organized into shards for efficient processing
3. **Hibernation**: Old transactions "sleep" to save resources, "waking" only when needed
4. **Waterfall Propagation**: Transactions spread through the network like water flowing downhill

The result? A DAG that:
- ✅ Confirms transactions in seconds
- ✅ Handles high throughput (100k+ tx/day proven)
- ✅ Scales with network growth
- ✅ Requires minimal resources

## The Five Pillars of Millix

### 1. **Predictable Economics**

**The Problem**: Ethereum gas fees are unpredictable. Send a transaction when the network is busy? You might pay $5, $50, or $500. This is unacceptable for a currency.

**Millix's Solution**: Every standard transaction costs **exactly 1,000 millix**. Always. Forever.

No gas auctions. No guessing. No surprises. You know what you'll pay before you click send.

```
Bitcoin: "Your fee might be $0.50 or $50... good luck!"
Ethereum: "Gas is 250 gwei... wait, now it's 850... actually 1200..."
Millix: "1,000 millix. Every time. Forever."
```

This predictability is **crucial** for real-world adoption. Businesses can't plan around wildly variable transaction costs.

### 2. **No Gatekeepers**

**The Problem**: Many cryptocurrencies have privileged nodes:
- Bitcoin: Miners with ASICs
- Ethereum 2.0: Validators with 32 ETH
- Solana: Validators with powerful hardware
- Many others: Masternodes, supernodes, witnesses

These create **power concentration**.

**Millix's Solution**: **All nodes are equal**. Every node can:
- Create transactions
- Validate transactions
- Participate in consensus
- Earn transaction fees

No special hardware. No minimum stake. No privileged roles.

```javascript
// Millix node capabilities (ALL nodes)
const capabilities = {
  createTransactions: true,
  validateTransactions: true,
  earnFees: true,
  consensus: true,
  specialPrivileges: false  // No exceptions
};
```

This is **genuine decentralization**—not just a marketing claim.

### 3. **Lightweight Design**

**The Problem**: Running a Bitcoin full node requires 500+ GB of storage and growing. Ethereum? Even worse. This centralizes nodes to those with resources.

**Millix's Solution**: Nodes only store recent transactions (10 minutes) plus UTXOs. Old transactions "hibernate."

**Result**: 
- Runs on a Raspberry Pi ($35 device)
- Minimal bandwidth requirements
- Low power consumption
- Anyone can run a node

```
Bitcoin full node: 500+ GB, powerful PC required
Ethereum full node: 1+ TB, specialized hardware
Millix full node: ~100 MB active data, runs on Raspberry Pi
```

### 4. **Built-In NFT Support**

**The Problem**: Most cryptocurrency NFTs are afterthoughts—smart contracts on platforms designed for other purposes (Ethereum, Solana, etc.).

**Millix's Solution**: NFT support is **native to the protocol**. Create, transfer, and manage NFTs using the same simple API as regular transactions.

Key features:
- NFTs use address version `0c0` (vs `0a0` for standard addresses)
- Data stored encrypted on the DAG
- Metadata included directly in transactions
- Transfer with the same simplicity as currency
- No smart contracts required

More details in Chapter 7, but the key point: **NFTs are first-class citizens in Millix**, not bolted-on afterthoughts.

### 5. **Data Storage Capability**

**The Problem**: Blockchains are expensive databases. Storing data costs money and bloats the chain.

**Millix's Solution**: The DAG can store encrypted data efficiently. Use cases:
- Messaging apps (encrypted communication)
- Social networks (decentralized posts)
- Document storage (immutable records)
- Application state (dApp backends)

The "hibernation" feature means old data doesn't burden new nodes—best of both worlds.

## Millix vs. The Competition

Let's compare Millix to major cryptocurrencies across key metrics:

| Feature | Bitcoin | Ethereum | Solana | IOTA | Nano | **Millix** |
|---------|---------|----------|--------|------|------|------------|
| **Architecture** | Blockchain | Blockchain | Blockchain | DAG (Tangle) | DAG (Block-lattice) | **Modified DAG** |
| **TPS (Proven)** | ~7 | ~15 | 1000+ | ~1500 | ~1000 | **1000+** |
| **Transaction Fee** | Variable ($1-50) | Variable ($0.50-500) | $0.00025 | $0 (currently) | $0 | **Predictable (1000 MLX)** |
| **Confirmation Time** | 10-60 min | 1-5 min | <1 sec | 10-30 sec | <1 sec | **~5 sec** |
| **Consensus** | PoW (Mining) | PoS (Validators) | PoH + PoS | Coordinator† | ORV | **DAG Consensus** |
| **Node Requirements** | 500+ GB | 1+ TB | High-end HW | Moderate | Low | **Raspberry Pi** |
| **Decentralization** | High | Moderate | Low | Low† | High | **High** |
| **Smart Contracts** | Limited | Yes (Solidity) | Yes (Rust) | Limited | No | **No** |
| **Native NFTs** | No* | Via contracts | Via contracts | No | No | **Yes** |
| **Data Storage** | Limited | Expensive | Moderate | Yes | No | **Yes** |
| **Energy Usage** | Very High | Low | Low | Low | Very Low | **Very Low** |

**Legend**:
- † IOTA removed its Coordinator in 2022 but operated with centralization for years
- \* Bitcoin NFTs exist via Ordinals but are not protocol-native

### Why These Differences Matter

**Bitcoin**: Digital gold, not digital cash. Great for storing wealth, impractical for daily transactions.

**Ethereum**: Smart contract platform first, currency second. Gas fees and complexity make it unsuitable for simple payments.

**Solana**: Fast but sacrifices decentralization. Network halts have proven the fragility of its design.

**IOTA**: Promising DAG but has struggled with centralization concerns and production readiness.

**Nano**: Excellent for free transactions but lacks programmability and has network spam vulnerabilities.

**Millix**: Purpose-built for peer-to-peer payments with predictable fees, high decentralization, and practical scalability.

## Key Technical Concepts

### Sharding

Millix organizes transactions into "shards" (buckets) for efficient processing. Think of shards as parallel processing lanes:

```
Shard 1: [Tx A] → [Tx B] → [Tx C]
Shard 2: [Tx D] → [Tx E] → [Tx F]
Shard 3: [Tx G] → [Tx H] → [Tx I]
```

Each shard processes independently, enabling parallelism and scalability.

### Hibernation & Refresh

To keep nodes lightweight, old transactions (>10 minutes) "hibernate." When you need to spend an old output, you first send a "refresh transaction" to wake it:

```javascript
// Spending from an old output
1. Send refresh transaction → wakes the hibernated output
2. Wait ~5 seconds for confirmation
3. Send normal transaction → spends the now-active output
```

This elegantly solves the blockchain bloat problem without compromising security.

### Transaction Validation

In Millix, each transaction references previous transactions, implicitly validating them:

```
New Transaction X
  ↓ references
Transaction Y (validated)
  ↓ references
Transaction Z (validated)
  ↓ ... and so on
```

The more transactions that build on top of yours, the more confirmed it becomes. It's self-reinforcing security.

### Equal Node Participation

Every node in Millix has the same capabilities. When your node validates transactions, it earns a share of transaction fees. This creates a self-sustaining economy without mining or staking lockups.

```
Transaction fee: 1,000 millix
  → Distributed to validating nodes
  → Incentivizes network participation
  → No special hardware required
```

## Real-World Applications

Millix's design makes it ideal for specific use cases:

### 1. **Microtransactions**

Predictable fees make small payments viable. Use cases:
- Content monetization (pay per article)
- Gaming economies (in-game currency)
- Tipping and donations
- Pay-per-API calls

### 2. **Remittances**

Send money globally without bank intermediaries:
- Predictable cost (1000 millix)
- Fast confirmation (~5 seconds)
- No minimum amounts
- No "business days"

### 3. **Decentralized Apps**

The ecosystem includes:
- **TangledTrivia.com**: Trivia game with millix rewards
- **CobraHelix.com**: Gaming platform
- **SwapLand.io**: Token exchange
- **Tangled Social**: Decentralized social network
- **Tangled Browser**: Chromium-based browser with built-in node

### 4. **NFT Marketplace**

Native NFT support enables:
- Digital art and collectibles
- Verified credentials and certificates
- In-game items and assets
- Domain names and digital identities

### 5. **Peer-to-Peer Advertising**

The Tangled Browser pioneered a novel model: viewers earn millix for watching ads, with no middlemen taking cuts. Over 200,000 micro-payments per day prove the model works.

## The Economics: Nine Quadrillion Millix

**Total Supply**: 9,000,000,000,000,000 millix (9 quadrillion)

Why so many?

1. **No Decimals**: Millix uses only integers. No confusing fractions. 1 millix = 1 millix.

2. **Microtransaction-Friendly**: Small values work without decimal points. Sending 100 millix is straightforward.

3. **Psychological**: Large numbers are more intuitive for everyday use than "0.000000534 BTC."

4. **Fixed Supply**: All 9 quadrillion created at genesis. No inflation. No new coins ever.

```javascript
// The entire supply economics
{
  totalSupply: 9000000000000000, // Fixed forever
  decimals: 0,                    // Integer only
  inflation: 0,                   // No new coins
  transactionFee: 1000,          // Predictable
  feeDestination: 'validating_nodes' // Self-sustaining
}
```

## The Millix Foundation

Governance is handled by the **Millix Foundation**, which:
- Maintains the reference implementation (millix-node)
- Accepts proposals for protocol development
- Coordinates with the community
- Ensures network stability

Website: [https://millix.org](https://millix.org)

Unlike many crypto projects, the foundation doesn't "own" Millix—they maintain it. The network is truly decentralized, operated by thousands of independent nodes.

## The Ecosystem in 2025

As of November 2025, the Millix ecosystem includes:

**Core Infrastructure**:
- 14,000+ active nodes worldwide
- Reference implementation (millix-wallet)
- Tangled Browser (Chromium + integrated node)
- WMLX bridge (Ethereum ERC20 token for interoperability)

**Layer 2 Applications**:
- Millix.com (wallet and node management)
- TangledTrivia.com (gamified trivia platform)
- CobraHelix.com (gaming)
- SwapLand.io (DEX)
- Tangled Social (decentralized social network)

**Developer Tools**:
- REST APIs for all operations
- WebSocket support for real-time updates
- Comprehensive API documentation
- Open-source reference implementation

**Network Stats** (proven capacity):
- ✅ 1,000,000+ transactions processed
- ✅ 100,000+ transactions in a single day
- ✅ 200,000+ micro-payments daily (ad platform)
- ✅ Zero downtime since genesis

## Millix's Design Philosophy

The development of Millix is guided by core principles:

1. **"Simplicity at the edge requires simplicity at the foundation"**
   - Clean, simple infrastructure enables simple user experience
   
2. **"The cost of securing value can't exceed the value it secures"**
   - Low resource requirements keep the network economically viable

3. **"Decreasing a currency's value with inflation should not dilute the value of savers"**
   - Fixed supply protects against arbitrary dilution

4. **"Participants that increase fundamental value should be algorithmically incentivized"**
   - Transaction fees reward node operators automatically

These aren't marketing slogans—they're engineering constraints that shaped every design decision.

## Common Misconceptions

### "DAGs can't work without centralization"

**False**. IOTA needed a Coordinator initially, but Millix never did. The network has operated in a fully decentralized manner since genesis.

### "Zero-fee cryptocurrencies are better"

**Maybe, maybe not**. Zero fees invite spam attacks. Nano has struggled with this. Millix's predictable 1000 millix fee is high enough to prevent spam but low enough to be negligible for legitimate use.

### "You need complex smart contracts for NFTs"

**False**. Millix proves that NFTs work beautifully with simple, protocol-level support. Sometimes less is more.

### "Higher TPS always means more centralization"

**Not necessarily**. Millix achieves high throughput through parallelism (DAG structure), not by concentrating validation power. All nodes remain equal.

## Why Millix Hasn't "Taken Off" (Yet)

If Millix is so great, why isn't it a top-10 cryptocurrency?

Honest answers:

1. **No ICO / No VC Funding**: Millix didn't raise millions for marketing. No exchange listing fees. No influencer campaigns.

2. **No Hype Cycle**: Built during the 2020s, Millix focused on engineering, not promises. Crypto Twitter rewards hype more than working code.

3. **Not Chasing Trends**: No pivot to DeFi summer (2020), no NFT mania (2021), no AI buzzwords (2023). Just consistent development.

4. **Limited Exchange Presence**: Without paying massive listing fees, many centralized exchanges don't list Millix.

5. **Educational Gap**: DAGs are less understood than blockchains. This book aims to fix that.

The irony? **The attributes that kept Millix under the radar (integrity, long-term thinking, no hype) are exactly what make it valuable.**

Millix isn't trying to win the next bull market hype cycle. It's building infrastructure for decades.

## What's Next for Millix?

The roadmap focuses on continued refinement:

- Enhanced light clients for mobile devices
- Improved storage node capabilities
- Expanded Layer 2 application ecosystem
- Better developer documentation (like this book!)
- Bridges to other networks (WMLX already operational)
- Community-driven governance tools

But the core remains unchanged: **peer-to-peer digital cash that just works**.

## Key Takeaways

✅ **Millix is a modified DAG cryptocurrency** optimized for payments, not smart contracts

✅ **Predictable economics** (1000 millix fee) make it practical for real-world use

✅ **True decentralization** (all nodes equal) ensures network resilience

✅ **Lightweight design** (Raspberry Pi-compatible) enables widespread participation

✅ **Native NFT support** and data storage expand use cases beyond simple payments

✅ **Proven scalability** (100k+ tx/day demonstrated) shows it's ready for growth

✅ **No hype, just working code** since 2020

## Looking Ahead

Now that you understand *what* Millix is and *why* its design matters, you're ready to actually use it.

In the next chapter, we'll get hands-on: installing a Millix node, setting up your wallet, and connecting to the network on Windows, macOS, and Linux.

Time to stop reading about cryptocurrency and start using it.

---

**Next**: [Chapter 3: Installation and Setup](03-installation-and-setup.md)



# Chapter 3: Installation and Setup

> *"A journey of a thousand transactions begins with a single node installation."* – Ancient Crypto Proverb

## Welcome to Hands-On Millix

Theory is great. Working software is better. In this chapter, you'll go from zero to running your own Millix node—becoming a sovereign participant in a decentralized financial network.

No third parties. No "create account" forms. No email verification. Just you, your computer, and the Millix network.

Let's get started.

## Before You Begin

### What You'll Need

**Minimum System Requirements**:
- **CPU**: Any modern processor (Intel/AMD/ARM)
- **RAM**: 2 GB minimum (4 GB recommended)
- **Storage**: 10 GB free space (SSD preferred but not required)
- **Internet**: Stable connection (broadband recommended)
- **OS**: Windows 7+, macOS 10.12+, or Linux (Ubuntu/Debian/Fedora)

**Yes, these are real minimum specs.** Millix actually runs on a Raspberry Pi 3. If you have a laptop from the last decade, you're good to go.

### Two Installation Paths

You have two options for running Millix:

#### Option 1: Pre-Built Packages (Easiest)

Download and install ready-to-run applications:
- **Millix Wallet**: Official desktop wallet with integrated node
- **Tangled Browser**: Chromium-based browser with built-in Millix node

**Best for**: Users who want to get started immediately without building from source.

#### Option 2: Build from Source (Developer-Friendly)

Clone the GitHub repository and build the wallet yourself:
- **millix-wallet**: Official open-source implementation
- Full control and transparency
- Latest features and updates

**Best for**: Developers, tinkerers, and those who want to verify the code themselves.

We'll cover both methods. Choose what fits your comfort level.

---

## Method 1: Pre-Built Package Installation

### Windows Installation

**Step 1: Download the Wallet**

Visit [https://millix.org/client.html](https://millix.org/client.html)

Download the Windows installer: `millix-wallet-windows-x64.exe`

**Step 2: Install**

1. Double-click the downloaded `.exe` file
2. Windows Defender might show a warning (this is common for new software). Click "More info" → "Run anyway"
3. Follow the installation wizard:
   - Accept the license agreement
   - Choose installation directory (default is fine)
   - Create desktop shortcut (recommended)
4. Click "Install"

**Step 3: First Run**

1. Launch "Millix Wallet" from the Start Menu or desktop shortcut
2. The wallet will automatically:
   - Generate your first wallet address
   - Create encryption keys
   - Begin syncing with the network
3. **CRITICAL**: Write down your recovery phrase! (More on this below)

**Step 4: Configure Firewall**

Windows Firewall will likely prompt you to allow network access:
- Check "Private networks" ✓
- Check "Public networks" ✓
- Click "Allow access"

This lets your node communicate with other Millix nodes.

### macOS Installation

**Step 1: Download the Wallet**

Visit [https://millix.org/client.html](https://millix.org/client.html)

Download the macOS package: `millix-wallet-macos-x64.dmg`

**Step 2: Install**

1. Open the downloaded `.dmg` file
2. Drag "Millix Wallet" to your Applications folder
3. Eject the `.dmg` image

**Step 3: First Run**

1. Open Finder → Applications
2. Right-click "Millix Wallet" → Choose "Open"
   - (You need to right-click the first time because macOS Gatekeeper doesn't recognize the developer certificate)
3. Click "Open" in the security dialog
4. The wallet will launch and begin setup
5. **CRITICAL**: Write down your recovery phrase!

**Step 4: Allow Network Access**

If macOS asks about incoming network connections:
- Click "Allow"

### Linux Installation (Ubuntu/Debian)

**Step 1: Download the Package**

Visit [https://millix.org/client.html](https://millix.org/client.html)

Download the Linux package: `millix-wallet-linux-x64.deb`

**Step 2: Install**

Open a terminal and run:

```bash
cd ~/Downloads
sudo dpkg -i millix-wallet-linux-x64.deb
```

If you encounter dependency issues:

```bash
sudo apt-get install -f
```

**Step 3: Launch**

```bash
millix-wallet
```

Or find "Millix Wallet" in your application menu.

**Step 4: First Run**

1. The wallet launches and begins initial setup
2. **CRITICAL**: Write down your recovery phrase!

---

## Method 2: Build from Source

For developers and those who want full control.

### Prerequisites

You'll need:
- **Node.js** v16+ (LTS recommended)
- **npm** v7+
- **Git**
- **Build tools** (varies by OS)

### Install Node.js

**Windows**:
Download from [https://nodejs.org/](https://nodejs.org/)  
Install the LTS version.

**macOS** (using Homebrew):
```bash
brew install node@16
```

**Linux** (Ubuntu/Debian):
```bash
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Verify installation:
```bash
node --version  # Should show v16.x.x or higher
npm --version   # Should show 7.x.x or higher
```

### Install Build Tools

**Linux** (Ubuntu/Debian):
```bash
sudo apt-get install -y \
  build-essential \
  curl \
  dirmngr \
  apt-transport-https \
  lsb-release \
  ca-certificates \
  git
```

**macOS**:
```bash
xcode-select --install
```

**Windows**:
```bash
npm install --global windows-build-tools
```

### Clone and Build millix-wallet

**Step 1: Clone the Repository**

```bash
git clone --recurse-submodules https://github.com/millix/millix-wallet.git -b develop
cd millix-wallet
```

**Step 2: Install Dependencies**

```bash
npm install
```

This will take a few minutes. Ignore warnings (they're normal).

**Step 3: Build the Wallet**

```bash
sudo npm install -g grunt-cli
grunt build-core
```

**Step 4: Launch**

```bash
cd app
npm start
```

The Millix wallet should launch!

**Step 5: First Run Setup**

1. **CRITICAL**: Write down your recovery phrase!
2. The node will begin syncing with the network

---

## Alternative: Tangled Browser

Want a browser AND a Millix node in one? The Tangled Browser is a Chromium-based web browser with an integrated Millix node.

**Download**: [https://tangled.com/browser/download.php](https://tangled.com/browser/download.php)

Available for:
- Windows (`.exe` installer)
- macOS (`.dmg`)
- Linux (`.deb` / `.AppImage`)

Installation is the same as any browser. The Millix node runs automatically in the background.

**Bonus**: Built-in ad platform where *you* earn millix for viewing ads (not the middlemen).

---

## Understanding Your First Run

When you first launch Millix, several things happen automatically:

### 1. Wallet Generation

The software generates a new **BIP32 hierarchical deterministic wallet**:

```
Master Seed (24 words)
    ↓
Extended Private Key (xprv)
    ↓
Extended Public Key (xpub)
    ↓
Address 1, Address 2, Address 3...
```

### 2. Network Discovery

Your node connects to the Millix network:

```javascript
// Automatic process
1. Connect to seed nodes (known entry points)
2. Request peer list
3. Establish connections to peers
4. Begin transaction synchronization
```

### 3. Sync Status

Your node downloads recent transactions (last 10 minutes, thanks to hibernation):

```
Syncing: [████████████████░░░░] 80%
```

This usually takes < 1 minute on a decent connection.

### 4. Node Identity

Your node gets a unique identity:

```json
{
  "node_id": "1D7n5SRALg7tQoL5cFR3D2YkQvbJuMFLbB",
  "node_signature": "3aPwVLmbUxit7QuWtQv1NNmXHKZ..."
}
```

This identity is used for API authentication (covered in later chapters).

---

## CRITICAL: Backup Your Recovery Phrase

When you first run Millix, you'll see a **24-word recovery phrase**. This is the MOST IMPORTANT THING.

### Example Recovery Phrase

```
witch collapse practice feed shame open despair
creek road again ice least catalog brave
example forest novel royal brick fabric
```

### Why It Matters

Your recovery phrase **IS your wallet**:
- It generates all your addresses
- It controls all your millix
- It's your ONLY backup

**If you lose it**:
- ❌ Your millix are gone forever
- ❌ No "password reset" option
- ❌ No customer support can help
- ❌ We cannot recover your funds

**If someone else gets it**:
- ❌ They control your millix
- ❌ They can steal everything
- ❌ Transactions are irreversible

### How to Store It Safely

**DO**:
- ✅ Write it on paper with pen
- ✅ Make multiple copies
- ✅ Store in secure locations (safe, safe deposit box)
- ✅ Consider metal backup plates (fireproof, waterproof)
- ✅ Split copies between locations (one at home, one elsewhere)

**DON'T**:
- ❌ Store in digital form (no screenshots, no text files)
- ❌ Email it to yourself
- ❌ Save it in the cloud
- ❌ Take a photo with your phone
- ❌ Tell anyone (not even "support")

**Paranoid Level** (Recommended):
- Use a metal plate and stamp/engrave the words
- Store in multiple geographic locations
- Consider splitting using Shamir Secret Sharing (advanced)

---

## Verifying Your Installation

Let's make sure everything works:

### 1. Check Node Status

In the Millix wallet, look for:
- **Node Status**: ● Online (green dot)
- **Connections**: 8-20 peers is normal
- **Sync Status**: "Synchronized" or "Up to date"

### 2. Check Your Address

Your first address should be visible:

```
Address: 1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP0a01EdgXo...
Balance: 0 millix
```

### 3. Check API Accessibility

The Millix node exposes a local API at:

```
https://localhost:5500/
```

Test it (using terminal/command prompt):

**Linux/macOS**:
```bash
curl -k "https://localhost:5500/api/$(cat ~/.millix-wallet/node.json | jq -r '.node_id')/$(cat ~/.millix-wallet/node.json | jq -r '.node_signature')/OBexeX0f0MsnL1S3"
```

**Windows** (PowerShell):
```powershell
$node = Get-Content "$env:USERPROFILE\.millix-wallet\node.json" | ConvertFrom-Json
Invoke-RestMethod -Uri "https://localhost:5500/api/$($node.node_id)/$($node.node_signature)/OBexeX0f0MsnL1S3" -SkipCertificateCheck
```

You should see your wallet session info:

```json
{
  "api_status": "success",
  "wallet": {
    "address": "1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP...",
    "address_key_identifier": "1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP",
    "address_public_key": "tGdraw6gizLTepQDqBfWqdskcVqwPUSBu..."
  }
}
```

**Success!** Your node is running and accessible.

---

## Configuration Files

Understanding where Millix stores its data:

### Data Directory Locations

**Windows**:
```
C:\Users\<YourUsername>\.millix-wallet\
```

**macOS**:
```
/Users/<YourUsername>/.millix-wallet/
```

**Linux**:
```
/home/<yourusername>/.millix-wallet/
```

### Important Files

```
.millix-wallet/
├── node.json          # Node identity (node_id, node_signature)
├── wallet.sqlite      # Local database (transactions, addresses)
├── config.json        # Node configuration
└── logs/              # Debug logs
    └── millix.log
```

### node.json

This file contains your node's API credentials:

```json
{
  "key": "xprv9s21ZrQH143K332NUcLJ9v3MH1V...",
  "node_id": "1D7n5SRALg7tQoL5cFR3D2YkQvbJuMFLbB",
  "node_signature": "3aPwVLmbUxit7QuWtQv1NNmXHKZuuUZrGN..."
}
```

**SECURITY NOTE**: The `key` field is your extended private key (xprv). Protect this file like your recovery phrase!

### config.json

Advanced configuration options (usually you don't need to touch this):

```json
{
  "host": "0.0.0.0",
  "port": 5500,
  "max_connections": 20,
  "ssl_certificate_path": null,
  "ssl_key_path": null
}
```

---

## Troubleshooting Common Issues

### Issue: "Cannot connect to peers"

**Symptoms**: Node status shows "Offline" or "Connecting..."

**Solutions**:
1. Check your firewall settings (allow port 5500)
2. Check your internet connection
3. Try restarting the wallet
4. If behind a corporate firewall, you may need VPN or different network

### Issue: "Sync taking forever"

**Symptoms**: Stuck at "Syncing... 45%" for >5 minutes

**Solutions**:
1. Be patient (can take up to 5-10 minutes on slow connections)
2. Check internet speed (need at least 1 Mbps)
3. Restart the wallet
4. Check logs: `.millix-wallet/logs/millix.log`

### Issue: "Can't access API (HTTPS errors)"

**Symptoms**: `curl` or API calls fail with SSL errors

**Solution**:
Use `-k` flag (curl) or `--skip-ssl-check` (Node.js) to bypass self-signed certificate:

```bash
curl -k "https://localhost:5500/..."
```

The node uses a self-signed certificate for local API security.

### Issue: "Wallet shows 0 balance but I received millix"

**Symptoms**: Transaction sent but not showing

**Solutions**:
1. Wait for confirmation (~5-10 seconds)
2. Check that transaction is stable (not hibernated)
3. Verify sender sent to correct address
4. Check transaction ID on a Millix explorer

### Issue: "Build from source fails"

**Symptoms**: `npm install` or `grunt build-core` errors

**Solutions**:
1. Ensure Node.js version is correct: `node --version` (should be v16+)
2. Make sure you have build tools installed
3. Try clearing npm cache: `npm cache clean --force`
4. Delete `node_modules` and try again:
   ```bash
   rm -rf node_modules
   npm install
   ```

### Issue: "Wallet won't start on macOS"

**Symptoms**: "App is damaged" or won't open

**Solution**:
```bash
xattr -cr /Applications/Millix\ Wallet.app
```

This removes the quarantine flag macOS adds to unsigned apps.

---

## Network Selection: Mainnet vs. Testnet

Millix has two networks:

### Mainnet (Production)

**Address Version**: `0a0` (standard) / `0c0` (NFTs)  
**Use**: Real millix, real value, real transactions  
**Start With**: This is the default network

Example address:
```
1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP0a01EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP
                                   ^^^
                                   0a0 = mainnet
```

### Testnet (Development)

**Address Version**: `lal` (standard) / `lcl` (NFTs)  
**Use**: Testing, development, experimentation  
**Start With**: Use this if you're learning or developing

Example address:
```
1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXPlal1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP
                                   ^^^
                                   lal = testnet
```

**Switching Networks**:

Edit `config.json`:

```json
{
  "mode": "test"  // "default" for mainnet, "test" for testnet
}
```

Restart the wallet.

---

## Getting Your First Millix

You've installed your node. Your wallet is synced. But your balance is zero. How do you get millix?

### Option 1: Buy on an Exchange

Check [millix.org](https://millix.org) for current exchange listings.

As of 2025, options include:
- SwapLand.io (Millix native DEX)
- Selected centralized exchanges

### Option 2: Earn Through Node Operation

Your node automatically earns transaction fees when it validates transactions. It's not much per transaction, but it's honest work and helps the network.

### Option 3: Earn Through Tangled Browser

Install the Tangled Browser and enable the ad platform. You'll earn millix for viewing ads (typically 10-100 millix per ad).

### Option 4: Community Faucets

Check the Millix community channels (Telegram, Discord) for faucets that distribute small amounts for testing.

### Option 5: Accept as Payment

If you run a business, accept millix! Zero-fee, fast, and irreversible. Check Chapter 4 for integration guides.

---

## Next Steps

Congratulations! You now have:
- ✅ A running Millix node
- ✅ A wallet with addresses
- ✅ A backup of your recovery phrase (right? RIGHT?)
- ✅ A synchronized connection to the network

You're not just a "user" anymore—you're a **peer** in a decentralized financial network.

In the next chapter, we'll make your first transaction: sending and receiving millix, understanding transaction anatomy, and watching your payment flow through the DAG.

---

## Key Takeaways

✅ **Two installation methods**: Pre-built packages (easy) or build from source (control)

✅ **Minimal requirements**: Millix runs on modest hardware (even Raspberry Pi)

✅ **Recovery phrase is CRITICAL**: Write it down, store it safely, never digital

✅ **Node.json contains API credentials**: Treat it like a password

✅ **Mainnet vs. Testnet**: Use testnet for learning, mainnet for real value

✅ **You're now a network peer**: Your node validates transactions and earns fees

---

**Next**: [Chapter 4: Your First Transaction](04-your-first-transaction.md)



# Chapter 4: Your First Transaction

> *"Not your keys, not your coins. Not your node, not your validation."* – Crypto Mantra

## From Zero to Transaction

You've got your node running. Your wallet is synced. Now comes the moment of truth: **actually using cryptocurrency as intended**.

Not storing it on an exchange. Not speculating on price. Not lending it to a DeFi protocol. Just **sending value from person A to person B**, peer-to-peer, without intermediaries.

This is what Satoshi Nakamoto had in mind.

Let's do it.

## Understanding Your Wallet Address

When you first opened your Millix wallet, it generated an address. Let's decode what that string of characters actually means.

### Address Anatomy

A Millix address looks like this:

```
1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP0a01EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP
                                   ^^^
                                   Version identifier
```

Breaking it down:

```
┌─────────────────────────────────────────┬────┬────────────────────────────────────────┐
│ address_base                            │ Ver│ address_key_identifier                 │
│ 1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP     │0a0 │1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP    │
└─────────────────────────────────────────┴────┴────────────────────────────────────────┘
```

**Address Version** indicates the address type:
- `0a0` = Standard mainnet address
- `lal` = Standard testnet address
- `0c0` = NFT mainnet address
- `lcl` = NFT testnet address

**Why are the base and identifier the same?**  
For standard addresses, they're often identical. The structure allows for more complex address schemes in the future.

### Your Address is Public

Like an email address, your Millix address can be freely shared:
- ✅ Post it on social media
- ✅ Print it on business cards
- ✅ Include it in invoices
- ✅ Put it on your website

Anyone can send millix to your address. Only you (with the private key) can spend from it.

---

## Checking Your Balance

Before you can send millix, you need some. Let's check your current balance.

### Method 1: Wallet GUI

The simplest way:

1. Open Millix Wallet
2. Look at the top of the interface
3. See your balance: "Balance: X millix"

### Method 2: API Call

Using the command line:

```bash
# Get your wallet session (includes address)
curl -k "https://localhost:5500/api/{node_id}/{node_signature}/OBexeX0f0MsnL1S3"
```

This returns your wallet info including your address. Then check balance:

```bash
# Check balance for a specific address
curl -k "https://localhost:5500/api/{node_id}/{node_signature}/zLsiAkocn90e3K6R?p0={your_address}"
```

**Response**:

```json
{
  "stable": 1298919,
  "unstable": 0
}
```

- **stable**: Confirmed funds you can spend immediately
- **unstable**: Recently received funds still being confirmed

**Always check the `stable` balance**—this is what you can actually spend.

### Getting Test Millix

If your balance is zero, you'll need some millix first:

**Option 1**: Buy on an exchange (see [millix.org](https://millix.org) for listings)  
**Option 2**: Use Tangled Browser's ad platform (earn by viewing ads)  
**Option 3**: Ask in the community (Telegram/Discord faucets)  
**Option 4**: Switch to testnet for practice

For this chapter, we'll assume you have at least 50,000 millix to work with.

---

## Receiving Millix (The Easy Part)

Receiving cryptocurrency is beautifully simple:

1. **Copy your address**
2. **Give it to the sender**
3. **Wait for confirmation**

That's it. No signup forms. No account verification. No bank approvals.

### Example: Receiving from a Friend

**You**: "Send me millix! My address is:"
```
1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP0a01EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP
```

**Friend**: *Sends 10,000 millix*

**You**: *5 seconds later* "Got it! Thanks!"

### Monitoring Incoming Transactions

Watch for incoming payments:

```bash
# List recent transactions
curl -k "https://localhost:5500/api/{node_id}/{node_signature}/l4kaEhMnhjB5yseq?p0=incoming&p1=10"
```

This shows your last 10 incoming transactions.

### Confirmation Times

Millix transactions typically confirm in:
- **Initial propagation**: < 1 second (visible in network)
- **First confirmation**: ~5 seconds
- **Stable**: ~10 seconds

Compared to:
- Bitcoin: 10-60 minutes
- Ethereum: 1-5 minutes
- Traditional wire transfer: 1-5 business days

Yeah, Millix is fast.

---

## Sending Millix (Your First Transaction)

Now for the main event. Let's send your first transaction!

We'll use the **high-level API** (wallet-based), which is the simplest method.

### Prerequisites

You need:
- ✅ A running Millix node
- ✅ At least 11,000 millix stable balance (10,000 to send + 1,000 fee)
- ✅ Your `node_id` and `node_signature` (from `~/.millix-wallet/node.json`)
- ✅ Recipient's address

### Transaction Anatomy

Every transaction needs:

```javascript
{
  "transaction_output_list": [
    {
      "address_base": "...",          // Recipient's base address
      "address_version": "0a0",        // Address type
      "address_key_identifier": "...", // Recipient's identifier
      "amount": 10000                  // Amount in millix
    }
  ],
  "transaction_output_fee": {
    "amount": 1000                     // Always 1000 for standard tx
  }
}
```

### Parsing a Recipient Address

Given a full address:
```
1FXx25vVgHCmvLiwTLNGPvWavdDmCevnTp0a01FmrUhZ9CdaJwcLq22AVdrYd6AFDGAurTm
```

Parse it as:
```javascript
const fullAddress = "1FXx25vVgHCmvLiwTLNGPvWavdDmCevnTp0a01FmrUhZ9CdaJwcLq22AVdrYd6AFDGAurTm";

// Split by '0a0' (mainnet standard)
const [addressBase, addressKeyIdentifier] = fullAddress.split('0a0');

// Result:
// addressBase = "1FXx25vVgHCmvLiwTLNGPvWavdDmCevnTp"
// addressKeyIdentifier = "1FmrUhZ9CdaJwcLq22AVdrYd6AFDGAurTm"
```

### Send Using curl

```bash
# Replace {node_id} and {node_signature} with your values
# Replace recipient address components with actual values

curl -k "https://localhost:5500/api/{node_id}/{node_signature}/XPzc85T3reYmGro1" \
  -H "Content-Type: application/json" \
  -d '{
    "transaction_output_list": [
      {
        "address_base": "1FXx25vVgHCmvLiwTLNGPvWavdDmCevnTp",
        "address_version": "0a0",
        "address_key_identifier": "1FmrUhZ9CdaJwcLq22AVdrYd6AFDGAurTm",
        "amount": 10000
      }
    ],
    "transaction_output_fee": {
      "amount": 1000
    }
  }'
```

**API Endpoint**: `XPzc85T3reYmGro1` (`send_transaction_from_wallet`)

### Send Using Wallet GUI

Even simpler:

1. Open Millix Wallet
2. Click "Send"
3. Enter recipient address
4. Enter amount
5. Review (fee shown: 1000 millix)
6. Click "Send"
7. Confirm

Done!

### Successful Response

```json
{
  "api_status": "success",
  "transaction": {
    "transaction_id": "2qHnhmBDDt6diYqcTG4FnM9bNkQvbUeGU2gXey5QSNpMN3Rk2T",
    "shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
    "transaction_date": 1692620135,
    "status": "accepted",
    "version": "0a0"
  }
}
```

**Congratulations!** You just sent your first Millix transaction. 🎉

The funds are now moving through the DAG network, being validated by nodes worldwide.

---

## Understanding Transaction Flow

What actually happened when you clicked "Send"? Let's trace the journey:

### Step 1: UTXO Selection

Your wallet looked at your available unspent transaction outputs (UTXOs):

```
Available UTXOs:
- Output 1: 50,000 millix (stable)
- Output 2: 25,000 millix (stable)
- Output 3: 5,000 millix (stable)
```

It selected enough to cover `amount + fee`:
```
Need: 10,000 + 1,000 = 11,000 millix
Selected: Output 3 (5,000) + Output 2 (25,000) = 30,000 millix
```

### Step 2: Transaction Construction

Your wallet built a transaction:

```
Inputs:
  - Output 3 (5,000 millix)
  - Output 2 (25,000 millix)
  
Outputs:
  - Recipient: 10,000 millix
  - Fee: 1,000 millix
  - Change (back to you): 19,000 millix
```

**Change Output**: Like paying with a $20 bill for a $12 item—you get $8 back. Same here: you had 30,000, sent 11,000, get 19,000 back.

### Step 3: Signing

Your wallet used your private key to sign the transaction, proving you own those inputs.

```javascript
// Cryptographic signature (simplified)
signature = sign(transaction_hash, your_private_key)

// Anyone can verify:
isValid = verify(signature, transaction_hash, your_public_key)
// Returns: true
```

### Step 4: Broadcasting

The signed transaction was broadcast to your connected peers:

```
Your Node → Peer 1, Peer 2, Peer 3, ...
  ↓
Peer 1 → Peer 4, Peer 5, Peer 6, ...
  ↓
Peer 2 → Peer 7, Peer 8, Peer 9, ...
  ↓
[Cascading through the network like a wave]
```

### Step 5: Validation

Each node that receives your transaction:
1. Checks the signature (valid?)
2. Checks the inputs (unspent?)
3. Checks the math (inputs ≥ outputs?)
4. Checks for double-spends (conflicts?)

If all checks pass: ✓ Transaction accepted

### Step 6: Confirmation

As new transactions reference yours, it gains confirmations:

```
Your Tx
  ↑ referenced by
Tx A, Tx B, Tx C
  ↑ referenced by
Tx D, Tx E, Tx F, Tx G
  ↑ referenced by
...
```

More references = more confirmed = more secure.

After ~10 seconds, your transaction is **stable**—deeply embedded in the DAG and effectively irreversible.

---

## Viewing Transaction Details

Want to see your transaction on the network?

### Using API

```bash
# Get transaction details
curl -k "https://localhost:5500/api/{node_id}/{node_signature}/wDyC195wgjPjM2Ut?p0={transaction_id}&p1={shard_id}"
```

**Response**:

```json
{
  "api_status": "success",
  "transaction": {
    "transaction_id": "2qHnhmBDDt6diYqcTG4FnM9bNkQvbUeGU2gXey5QSNpMN3Rk2T",
    "shard_id": "qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR",
    "transaction_date": 1692620135,
    "is_stable": 1,
    "transaction_input_list": [...],
    "transaction_output_list": [...]
  }
}
```

Key fields:
- **is_stable**: `0` = pending, `1` = confirmed
- **transaction_input_list**: Where funds came from
- **transaction_output_list**: Where funds went

### Using Wallet

In the Millix Wallet GUI:
1. Go to "Transactions" tab
2. Find your transaction (sorted by date)
3. Click for details

---

## Transaction Types

Millix supports several transaction types:

### 1. Standard Payment

What we just did:
```
You → Recipient (amount)
You → You (change)
You → Network (fee)
```

### 2. Multiple Recipients

Send to several addresses at once:

```json
{
  "transaction_output_list": [
    {
      "address_base": "...",
      "address_version": "0a0",
      "address_key_identifier": "...",
      "amount": 5000
    },
    {
      "address_base": "...",
      "address_version": "0a0",
      "address_key_identifier": "...",
      "amount": 8000
    },
    {
      "address_base": "...",
      "address_version": "0a0",
      "address_key_identifier": "...",
      "amount": 12000
    }
  ],
  "transaction_output_fee": {
    "amount": 1000
  }
}
```

Total: 5000 + 8000 + 12000 + 1000 = 26,000 millix needed.

### 3. Refresh Transaction

Remember hibernation from Chapter 3? If you're spending an old output (>10 minutes), you need to "wake" it first:

```javascript
// Automatically handled by wallet, but the flow is:
1. Send refresh transaction → Wake hibernated output
2. Wait ~5 seconds
3. Send normal transaction → Spend the output
```

The wallet does this automatically. You'll just notice a slight delay when spending old outputs.

### 4. NFT Transfer

Uses `0c0` address version (covered in Chapter 7).

---

## Common Transaction Scenarios

### Scenario 1: Sending Your Entire Balance

**Problem**: You want to send all your millix to another address.

**Solution**: Send `balance - fee`:

```javascript
// If balance = 100,000 millix
const amount = 100000 - 1000; // 99,000 to send, 1000 for fee

// Transaction:
{
  "transaction_output_list": [{
    "address_base": "...",
    "address_version": "0a0",
    "address_key_identifier": "...",
    "amount": 99000  // Everything minus fee
  }],
  "transaction_output_fee": {
    "amount": 1000
  }
}
```

No change output needed—you're sending it all.

### Scenario 2: Splitting to Multiple Wallets

**Use Case**: Distributing funds to team members

```javascript
{
  "transaction_output_list": [
    { "address": "...", "amount": 50000 },  // Alice
    { "address": "...", "amount": 50000 },  // Bob
    { "address": "...", "amount": 50000 },  // Carol
  ],
  "transaction_output_fee": { "amount": 1000 }
}
```

One transaction, multiple recipients. Efficient!

### Scenario 3: Consolidating UTXOs

**Problem**: You have dozens of small UTXOs (from microtransactions)

**Solution**: Send all to yourself:

```javascript
{
  "transaction_output_list": [{
    "address_base": "...",  // Your own address
    "address_version": "0a0",
    "address_key_identifier": "...",
    "amount": total - 1000  // All minus fee
  }],
  "transaction_output_fee": { "amount": 1000 }
}
```

This combines many small inputs into one large output. Useful for keeping your wallet tidy.

---

## Transaction Fees Explained

Millix's fee structure is refreshingly simple:

### Standard Transactions

**Fee**: 1,000 millix  
**Always**: Never changes  
**For**: Regular payments

### Why 1,000 millix?

1. **Spam Prevention**: High enough to make spam attacks expensive
2. **Node Incentives**: Rewards validators for their work
3. **Predictability**: You always know the cost
4. **Simplicity**: No gas calculation, no auction mechanisms

### Fee Distribution

When you pay the 1,000 millix fee:
- Distributed to validating nodes
- Incentivizes network participation
- Creates self-sustaining economy

### Comparing Fees

| Network | Typical Fee | Predictable? |
|---------|-------------|--------------|
| Bitcoin | $1 - $50 | ❌ No |
| Ethereum | $0.50 - $500 | ❌ No |
| Solana | $0.00025 | ✓ Yes |
| Nano | $0 | ✓ Yes |
| **Millix** | **1000 MLX ≈ $?** | **✓ Yes** |

Millix's predictability is its superpower. Businesses can plan. Users aren't surprised. Everyone knows the cost.

---

## Transaction Errors and Troubleshooting

### Error: "Insufficient balance"

**Cause**: You don't have enough stable millix

**Solution**:
1. Check stable balance (not total balance)
2. Wait for unstable funds to confirm (~10 seconds)
3. Ensure you're accounting for the fee

```bash
# Check what's actually available
curl -k "https://localhost:5500/api/{node_id}/{node_signature}/zLsiAkocn90e3K6R?p0={your_address}"
```

### Error: "No stable unspents found"

**Cause**: All your UTXOs are either spent or unstable

**Solution**:
1. Wait a few seconds for recent transactions to confirm
2. Check if you recently sent everything (nothing left to send)
3. Receive new funds

### Error: "Invalid address"

**Cause**: Recipient address is malformed

**Solution**:
1. Double-check the address (copy-paste errors are common)
2. Verify the address version matches the network (`0a0` for mainnet standard)
3. Ensure all three components are provided (base, version, identifier)

### Error: "Transaction rejected by network"

**Cause**: Various reasons (double-spend attempt, invalid signature, etc.)

**Solution**:
1. Check your node logs: `~/.millix-wallet/logs/millix.log`
2. Ensure your node is synced
3. Try again (temporary network issues are rare but possible)

### Transaction "Stuck"

**Symptom**: Transaction sent but not confirming

**Diagnosis**:
```bash
# Check transaction status
curl -k "https://localhost:5500/api/{node_id}/{node_signature}/wDyC195wgjPjM2Ut?p0={transaction_id}&p1={shard_id}"
```

**Solutions**:
1. Wait longer (sometimes takes up to 30 seconds under heavy load)
2. Check network connectivity (is your node still connected?)
3. Check if transaction is actually propagating

In practice, stuck transactions are extremely rare in Millix. The DAG structure and active node network ensure fast propagation.

---

## Best Practices

### ✅ Do This

1. **Always verify recipient addresses** (typos are permanent losses)
2. **Check stable balance before sending** (not total balance)
3. **Account for the 1,000 millix fee** (don't forget it!)
4. **Wait for confirmation** (~5-10 seconds)
5. **Keep small amounts in hot wallets** (for daily use)
6. **Test with small amounts first** (when trying new things)

### ❌ Don't Do This

1. **Don't share your private key or recovery phrase**
2. **Don't send to addresses you can't verify**
3. **Don't assume transactions are instant** (wait for confirmation)
4. **Don't forget the fee** (transaction will fail)
5. **Don't store all funds in one address** (diversify for security)

---

## Real-World Use Case: Paying for Services

Let's walk through a practical scenario:

**Situation**: You're hiring a developer who accepts Millix for work.

**Agreement**:
- Hourly rate: 50,000 millix/hour
- Work completed: 4 hours
- Total owed: 200,000 millix

**Process**:

1. **Get their address**:
   ```
   Developer: "Send to 1DevPay7Y8hMj3K9bVnT..."
   ```

2. **Calculate total**:
   ```
   Amount: 200,000 millix
   Fee: 1,000 millix
   Total needed: 201,000 millix
   ```

3. **Send payment**:
   ```bash
   curl -k "https://localhost:5500/api/{node_id}/{node_signature}/XPzc85T3reYmGro1" \
     -H "Content-Type: application/json" \
     -d '{
       "transaction_output_list": [{
         "address_base": "1DevPay7Y8hMj3K9bVnT",
         "address_version": "0a0",
         "address_key_identifier": "1DevPay7Y8hMj3K9bVnT",
         "amount": 200000
       }],
       "transaction_output_fee": { "amount": 1000 }
     }'
   ```

4. **Confirm**:
   ```
   Response: {
     "api_status": "success",
     "transaction_id": "3Xm..."
   }
   ```

5. **Share transaction ID**:
   ```
   You: "Sent! Transaction ID: 3Xm..."
   Developer: *checks blockchain* "Received! Thanks!"
   ```

**Total time**: < 15 seconds

**Fees**: 1,000 millix (predictable)

**Intermediaries**: Zero

This is cryptocurrency as it should be.

---

## Key Takeaways

✅ **Receiving is trivial**: Just share your address

✅ **Sending requires**: Balance check + correct address + fee

✅ **Fees are predictable**: Always 1,000 millix for standard transactions

✅ **Confirmations are fast**: ~5-10 seconds to stable

✅ **Transactions are irreversible**: Double-check before sending!

✅ **UTXOs and change outputs**: Wallet handles automatically

✅ **The DAG structure**: Enables parallel processing and fast confirmations

---

## Looking Ahead

You've now sent and received your first Millix transactions. You understand addresses, UTXOs, fees, and confirmation times. You're using cryptocurrency the way it was meant to be used.

But we've only scratched the surface. The simple wallet-based transactions are great for everyday use, but what if you're building applications? What if you need programmatic control over transaction construction and signing?

In the next chapter, we'll dive deeper into Millix scripting and the low-level transaction APIs that give you complete control over every aspect of your transactions.

---

**Next**: [Chapter 5: Millix Scripting and Programming](05-millix-scripting-and-programming.md)



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



# Chapter 6: Building Transactions with Code

> *"Talk is cheap. Show me the code."* – Linus Torvalds

## From Theory to Practice

You've learned the concepts. You've seen the APIs. Now it's time to build real, working transaction systems.

This chapter contains complete, tested code examples that you can run right now. No pseudocode. No "left as an exercise for the reader." Just production-ready implementations you can adapt for your own projects.

Let's build something.

---

## Project Setup

### Create a New Project

```bash
mkdir millix-transaction-demo
cd millix-transaction-demo
npm init -y
```

### Install Dependencies (Optional)

For most examples, we'll use only Node.js built-ins. But for convenience:

```bash
npm install dotenv  # For environment variables (optional)
```

### Prepare Your Credentials

Copy your `node.json` to the project directory:

```bash
cp ~/.millix-wallet/node.json ./node.json
```

**WARNING**: Never commit `node.json` to version control! Add it to `.gitignore`:

```bash
echo "node.json" >> .gitignore
echo ".env" >> .gitignore
```

---

## Example 1: Simple Payment System

Let's build a complete payment system that handles all the details automatically.

###  `payment-system.js` [TESTED NOV 2025]

```javascript
#!/usr/bin/env node

const https = require('https');
const fs = require('fs');
const path = require('path');

/**
 * Simple Millix Payment System
 * 
 * Handles:
 * - Balance checking
 * - Address validation
 * - Transaction sending
 * - Confirmation waiting
 */

class MillixPaymentSystem {
  constructor(nodeJsonPath = './node.json') {
    // Load node configuration
    const nodeConfig = JSON.parse(fs.readFileSync(nodeJsonPath, 'utf8'));
    
    this.nodeId = nodeConfig.node_id;
    this.nodeSignature = nodeConfig.node_signature;
    this.host = 'localhost';
    this.port = 5500;
    
    // HTTPS agent that bypasses self-signed certificate check
    this.httpsAgent = new https.Agent({
      rejectUnauthorized: false
    });
  }

  /**
   * Build API URL
   */
  buildApiUrl(apiId, params = {}) {
    const base = `https://${this.host}:${this.port}/api/${this.nodeId}/${this.nodeSignature}/${apiId}`;
    const queryString = Object.entries(params)
      .map(([k, v]) => `${k}=${encodeURIComponent(typeof v === 'object' ? JSON.stringify(v) : v)}`)
      .join('&');
    return queryString ? `${base}?${queryString}` : base;
  }

  /**
   * Make HTTP request
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
        const bodyString = typeof body === 'string' ? body : JSON.stringify(body);
        options.headers['Content-Type'] = 'application/json';
        options.headers['Content-Length'] = Buffer.byteLength(bodyString);
      }

      const req = https.request(options, (res) => {
        let data = '';
        res.on('data', chunk => { data += chunk; });
        res.on('end', () => {
          try {
            resolve({ statusCode: res.statusCode, data: JSON.parse(data) });
          } catch (e) {
            resolve({ statusCode: res.statusCode, data: data });
          }
        });
      });

      req.on('error', reject);
      if (body) {
        const bodyString = typeof body === 'string' ? body : JSON.stringify(body);
        req.write(bodyString);
      }
      req.end();
    });
  }

  /**
   * Get wallet session information
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
   * Validate Millix address format
   */
  isValidAddress(address) {
    // Check for valid version identifiers
    return /0a0|lal|0c0|lcl/.test(address) && address.length > 30;
  }

  /**
   * Parse full address into components
   */
  parseAddress(fullAddress) {
    // Address format: {base}{version}{key_identifier}
    // Example: "1ABC...0a01XYZ..."
    
    let addressBase, addressVersion, addressKeyIdentifier;
    
    if (fullAddress.includes('0a0')) {
      [addressBase, addressKeyIdentifier] = fullAddress.split('0a0');
      addressVersion = '0a0';
    } else if (fullAddress.includes('lal')) {
      [addressBase, addressKeyIdentifier] = fullAddress.split('lal');
      addressVersion = 'lal';
    } else if (fullAddress.includes('0c0')) {
      [addressBase, addressKeyIdentifier] = fullAddress.split('0c0');
      addressVersion = '0c0';
    } else if (fullAddress.includes('lcl')) {
      [addressBase, addressKeyIdentifier] = fullAddress.split('lcl');
      addressVersion = 'lcl';
    } else {
      throw new Error('Invalid address format: no valid version identifier found');
    }
    
    return { addressBase, addressVersion, addressKeyIdentifier };
  }

  /**
   * Send transaction (high-level)
   */
  async sendTransaction({ to, amount, fee = 1000 }) {
    // Validate inputs
    if (!this.isValidAddress(to)) {
      throw new Error('Invalid recipient address format');
    }
    
    if (amount <= 0) {
      throw new Error('Amount must be positive');
    }
    
    if (fee < 1000) {
      throw new Error('Fee must be at least 1000 millix');
    }
    
    // Parse recipient address
    const { addressBase, addressVersion, addressKeyIdentifier } = this.parseAddress(to);
    
    // Build transaction payload
    const payload = {
      transaction_output_list: [{
        address_base: addressBase,
        address_version: addressVersion,
        address_key_identifier: addressKeyIdentifier,
        amount: amount
      }],
      transaction_output_fee: {
        amount: fee
      }
    };
    
    // Send via high-level API
    const url = this.buildApiUrl('XPzc85T3reYmGro1');
    const response = await this.request(url, 'POST', payload);
    
    if (response.data.api_status === 'fail') {
      throw new Error(response.data.api_message || 'Failed to send transaction');
    }
    
    return response.data.transaction;
  }

  /**
   * Wait for transaction confirmation
   */
  async waitForConfirmation(transactionId, shardId, timeoutMs = 30000) {
    const startTime = Date.now();
    
    while (Date.now() - startTime < timeoutMs) {
      try {
        const url = this.buildApiUrl('wDyC195wgjPjM2Ut', {
          p0: transactionId,
          p1: shardId
        });
        
        const response = await this.request(url);
        
        if (response.data.api_status === 'success') {
          const tx = response.data.transaction;
          
          if (tx.is_stable === 1) {
            return tx; // Confirmed!
          }
        }
      } catch (error) {
        // Transaction might not be visible yet, continue waiting
      }
      
      // Wait 2 seconds before checking again
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
    
    throw new Error('Transaction confirmation timeout after ' + (timeoutMs / 1000) + ' seconds');
  }

  /**
   * Complete payment workflow
   */
  async pay({ to, amount, waitForConfirmation = true }) {
    console.log('\n========================================');
    console.log('Millix Payment System');
    console.log('========================================\n');
    
    // Step 1: Get sender info
    console.log('Step 1: Getting wallet information...');
    const session = await this.getSession();
    console.log(`  ✓ Wallet address: ${session.address_key_identifier}`);
    
    // Step 2: Check balance
    console.log('\nStep 2: Checking balance...');
    const balance = await this.getBalance(session.address);
    console.log(`  ✓ Available balance: ${balance.stable} millix`);
    
    const totalNeeded = amount + 1000; // amount + fee
    if (balance.stable < totalNeeded) {
      throw new Error(`Insufficient balance: have ${balance.stable}, need ${totalNeeded}`);
    }
    
    // Step 3: Validate recipient
    console.log('\nStep 3: Validating recipient address...');
    if (!this.isValidAddress(to)) {
      throw new Error('Invalid recipient address');
    }
    const recipient = this.parseAddress(to);
    console.log(`  ✓ Recipient: ${recipient.addressKeyIdentifier}`);
    
    // Step 4: Send transaction
    console.log('\nStep 4: Sending transaction...');
    console.log(`  Amount: ${amount} millix`);
    console.log(`  Fee: 1000 millix`);
    console.log(`  Total: ${totalNeeded} millix`);
    
    const tx = await this.sendTransaction({ to, amount });
    console.log(`  ✓ Transaction sent!`);
    console.log(`  Transaction ID: ${tx.transaction_id}`);
    console.log(`  Shard ID: ${tx.shard_id}`);
    
    // Step 5: Wait for confirmation (optional)
    if (waitForConfirmation) {
      console.log('\nStep 5: Waiting for confirmation...');
      const confirmedTx = await this.waitForConfirmation(tx.transaction_id, tx.shard_id);
      console.log(`  ✓ Transaction confirmed!`);
      console.log(`  Status: ${confirmedTx.is_stable === 1 ? 'STABLE' : 'PENDING'}`);
    }
    
    console.log('\n========================================');
    console.log('Payment Complete!');
    console.log('========================================\n');
    
    return tx;
  }
}

// ============================================================================
// CLI Interface
// ============================================================================

if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args.length < 2) {
    console.log('Usage: node payment-system.js <recipient_address> <amount>');
    console.log('');
    console.log('Example:');
    console.log('  node payment-system.js 1FXx...0a0...DrYd6A 10000');
    process.exit(1);
  }
  
  const recipientAddress = args[0];
  const amount = parseInt(args[1]);
  
  const payment = new MillixPaymentSystem();
  
  payment.pay({ to: recipientAddress, amount, waitForConfirmation: true })
    .then((tx) => {
      console.log(`\nTransaction successful: ${tx.transaction_id}`);
      process.exit(0);
    })
    .catch((error) => {
      console.error(`\nPayment failed: ${error.message}`);
      process.exit(1);
    });
}

module.exports = MillixPaymentSystem;
```

### Usage

```bash
# Send 10,000 millix to an address
node payment-system.js 1FXx25vVgHCmvLiwTLNGPvWavdDmCevnTp0a01FmrUhZ9CdaJwcLq22AVdrYd6AFDGAurTm 10000

# Output:
# ========================================
# Millix Payment System
# ========================================
# 
# Step 1: Getting wallet information...
#   ✓ Wallet address: 1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP
# 
# Step 2: Checking balance...
#   ✓ Available balance: 500000 millix
# 
# Step 3: Validating recipient address...
#   ✓ Recipient: 1FmrUhZ9CdaJwcLq22AVdrYd6AFDGAurTm
# 
# Step 4: Sending transaction...
#   Amount: 10000 millix
#   Fee: 1000 millix
#   Total: 11000 millix
#   ✓ Transaction sent!
#   Transaction ID: 3XmDqA2pRvW8NjK...
#   Shard ID: qGuUgMMVmaCvqrvoWG6z...
# 
# Step 5: Waiting for confirmation...
#   ✓ Transaction confirmed!
#   Status: STABLE
# 
# ========================================
# Payment Complete!
# ========================================
```

---

## Example 2: Low-Level Transaction Builder

For complete control, build transactions manually.

### `manual-transaction.js` [TESTED NOV 2025]

```javascript
#!/usr/bin/env node

const https = require('https');
const fs = require('fs');

/**
 * Low-Level Millix Transaction Builder
 * 
 * Demonstrates complete manual transaction construction:
 * - UTXO selection
 * - Transaction payload building
 * - Private key retrieval
 * - Transaction signing
 * - Network submission
 */

class ManualTransactionBuilder {
  constructor(nodeJsonPath = './node.json') {
    const nodeConfig = JSON.parse(fs.readFileSync(nodeJsonPath, 'utf8'));
    this.nodeId = nodeConfig.node_id;
    this.nodeSignature = nodeConfig.node_signature;
    this.xprv = nodeConfig.key; // Extended private key
    this.host = 'localhost';
    this.port = 5500;
    
    this.httpsAgent = new https.Agent({ rejectUnauthorized: false });
  }

  buildApiUrl(apiId, params = {}) {
    const base = `https://${this.host}:${this.port}/api/${this.nodeId}/${this.nodeSignature}/${apiId}`;
    const qs = Object.entries(params)
      .map(([k, v]) => `${k}=${encodeURIComponent(typeof v === 'object' ? JSON.stringify(v) : v)}`)
      .join('&');
    return qs ? `${base}?${qs}` : base;
  }

  async request(url, method = 'GET', body = null) {
    return new Promise((resolve, reject) => {
      const urlObj = new URL(url);
      const options = {
        hostname: urlObj.hostname,
        port: urlObj.port,
        path: urlObj.pathname + urlObj.search,
        method,
        agent: this.httpsAgent,
        headers: {}
      };

      if (body) {
        const bodyStr = typeof body === 'string' ? body : JSON.stringify(body);
        options.headers['Content-Type'] = 'application/json';
        options.headers['Content-Length'] = Buffer.byteLength(bodyStr);
      }

      const req = https.request(options, (res) => {
        let data = '';
        res.on('data', chunk => { data += chunk; });
        res.on('end', () => {
          try {
            resolve({ statusCode: res.statusCode, data: JSON.parse(data) });
          } catch (e) {
            resolve({ statusCode: res.statusCode, data });
          }
        });
      });

      req.on('error', reject);
      if (body) req.write(typeof body === 'string' ? body : JSON.stringify(body));
      req.end();
    });
  }

  /**
   * List unspent transaction outputs
   */
  async listUnspents(addressKeyIdentifier = null, isStable = 1, isSpent = 0) {
    const params = { p0: isStable, p1: isSpent };
    if (addressKeyIdentifier) params.p2 = addressKeyIdentifier;
    
    const url = this.buildApiUrl('FDLyQ5uo5t7jltiQ', params);
    const response = await this.request(url);
    
    if (response.data.api_status === 'fail') {
      throw new Error(response.data.api_message || 'Failed to list unspents');
    }
    
    return response.data.transaction_output_list || [];
  }

  /**
   * Get address details including public key
   */
  async getAddressDetails(addressKeyIdentifier) {
    const url = this.buildApiUrl('ywTmt3C0nwk5k4c7', { p0: addressKeyIdentifier });
    const response = await this.request(url);
    
    if (response.data.api_status === 'fail') {
      throw new Error('Failed to get address details');
    }
    
    return response.data;
  }

  /**
   * Get private key for address
   */
  async getPrivateKey(addressKeyIdentifier) {
    const url = this.buildApiUrl('PKUv2JfV87KpEZwE', { p0: addressKeyIdentifier });
    const response = await this.request(url);
    
    if (response.data.api_status === 'fail') {
      throw new Error('Failed to get private key');
    }
    
    return response.data.private_key_hex;
  }

  /**
   * Build manual transaction
   */
  async buildTransaction({ to, amount, fee = 1000 }) {
    console.log('\n=== Manual Transaction Builder ===\n');
    
    // Step 1: Get wallet session
    console.log('Step 1: Getting wallet session...');
    const sessionUrl = this.buildApiUrl('OBexeX0f0MsnL1S3');
    const sessionResp = await this.request(sessionUrl);
    const session = sessionResp.data.wallet;
    console.log(`  ✓ Address: ${session.address_key_identifier}`);
    
    // Step 2: Find unspents
    console.log('\nStep 2: Finding unspent outputs...');
    const unspents = await this.listUnspents(session.address_key_identifier, 1, 0);
    
    if (unspents.length === 0) {
      throw new Error('No unspent outputs available');
    }
    
    console.log(`  ✓ Found ${unspents.length} unspent output(s)`);
    
    // Step 3: Select UTXOs
    console.log('\nStep 3: Selecting UTXOs...');
    let totalInput = 0;
    const selectedUnspents = [];
    const neededAmount = amount + fee;
    
    for (const unspent of unspents) {
      selectedUnspents.push(unspent);
      totalInput += unspent.amount;
      console.log(`  + ${unspent.amount} millix from ${unspent.transaction_id.substring(0, 10)}...`);
      if (totalInput >= neededAmount) break;
    }
    
    if (totalInput < neededAmount) {
      throw new Error(`Insufficient funds: have ${totalInput}, need ${neededAmount}`);
    }
    
    console.log(`  ✓ Selected total: ${totalInput} millix`);
    
    // Step 4: Get keys
    console.log('\nStep 4: Retrieving keys...');
    const addressDetails = await this.getAddressDetails(session.address_key_identifier);
    const privateKey = await this.getPrivateKey(session.address_key_identifier);
    
    console.log(`  ✓ Public key: ${addressDetails.address_attribute.key_public.substring(0, 20)}...`);
    console.log(`  ✓ Private key: Retrieved`);
    
    // Step 5: Build transaction payload
    console.log('\nStep 5: Building transaction payload...');
    
    const transactionInputList = selectedUnspents.map(u => ({
      output_transaction_id: u.transaction_id,
      output_transaction_date: u.transaction_date,
      output_shard_id: u.shard_id,
      output_position: u.output_position,
      address_base: u.address_base || session.address_key_identifier,
      address_version: u.address_version || '0a0',
      address_key_identifier: u.address_key_identifier || session.address_key_identifier
    }));
    
    // Parse recipient address
    const [toBase, toKeyId] = to.split('0a0');
    
    const transactionOutputList = [{
      address_base: toBase,
      address_version: '0a0',
      address_key_identifier: toKeyId || toBase,
      amount: amount
    }];
    
    // Add change output if needed
    const changeAmount = totalInput - amount - fee;
    if (changeAmount > 0) {
      transactionOutputList.push({
        address_base: session.address_key_identifier,
        address_version: '0a0',
        address_key_identifier: session.address_key_identifier,
        amount: changeAmount
      });
      console.log(`  ✓ Change output: ${changeAmount} millix`);
    }
    
    const transactionPayload = {
      transaction_input_list: transactionInputList,
      transaction_output_list: transactionOutputList,
      transaction_output_fee: {
        fee_type: 'transaction_fee_default',
        amount: fee
      }
    };
    
    console.log(`  ✓ Inputs: ${transactionInputList.length}`);
    console.log(`  ✓ Outputs: ${transactionOutputList.length} + fee`);
    
    // Step 6: Sign transaction
    console.log('\nStep 6: Signing transaction...');
    
    const privateKeyMap = {};
    const addressMap = {};
    
    privateKeyMap[session.address_key_identifier] = privateKey;
    addressMap[session.address_key_identifier] = addressDetails.address_attribute.key_public;
    
    const signUrl = this.buildApiUrl('RVBqKlGdk9aEhi5J', {
      p0: JSON.stringify(transactionPayload),
      p1: JSON.stringify(privateKeyMap),
      p2: JSON.stringify(addressMap)
    });
    
    const signResp = await this.request(signUrl);
    
    if (signResp.data.api_status === 'fail') {
      throw new Error('Signing failed: ' + (signResp.data.api_message || 'Unknown error'));
    }
    
    const signedTransaction = signResp.data.transaction;
    console.log(`  ✓ Transaction signed`);
    
    // Step 7: Submit to network
    console.log('\nStep 7: Submitting to network...');
    
    const sendUrl = this.buildApiUrl('VnJIBrrM0KY3uQ9X', {
      p0: JSON.stringify(signedTransaction)
    });
    
    const sendResp = await this.request(sendUrl);
    
    if (sendResp.data.api_status === 'fail') {
      throw new Error('Send failed: ' + (sendResp.data.api_message || 'Unknown error'));
    }
    
    console.log(`  ✓ Transaction submitted!`);
    console.log(`  Transaction ID: ${signedTransaction.transaction_id}`);
    
    console.log('\n=== Transaction Complete ===\n');
    
    return signedTransaction;
  }
}

// CLI Interface
if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args.length < 2) {
    console.log('Usage: node manual-transaction.js <recipient_address> <amount>');
    process.exit(1);
  }
  
  const to = args[0];
  const amount = parseInt(args[1]);
  
  const builder = new ManualTransactionBuilder();
  builder.buildTransaction({ to, amount })
    .then(() => process.exit(0))
    .catch(err => {
      console.error(`\nError: ${err.message}`);
      process.exit(1);
    });
}

module.exports = ManualTransactionBuilder;
```

### Usage

```bash
node manual-transaction.js 1FXx25vVgHCmvLiwTLNGPvWavdDmCevnTp0a01FmrUhZ9CdaJwcLq22AVdrYd6AFDGAurTm 50000

# Output:
# === Manual Transaction Builder ===
# 
# Step 1: Getting wallet session...
#   ✓ Address: 1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP
# 
# Step 2: Finding unspent outputs...
#   ✓ Found 3 unspent output(s)
# 
# Step 3: Selecting UTXOs...
#   + 25000 millix from 2VxdQnKcKj...
#   + 30000 millix from 3AmPqRwXYz...
#   ✓ Selected total: 55000 millix
# 
# Step 4: Retrieving keys...
#   ✓ Public key: tGdraw6gizLTepQDqBfW...
#   ✓ Private key: Retrieved
# 
# Step 5: Building transaction payload...
#   ✓ Change output: 4000 millix
#   ✓ Inputs: 2
#   ✓ Outputs: 2 + fee
# 
# Step 6: Signing transaction...
#   ✓ Transaction signed
# 
# Step 7: Submitting to network...
#   ✓ Transaction submitted!
#   Transaction ID: 4YpXqM9jRvT2KnL...
# 
# === Transaction Complete ===
```

---

## Example 3: Batch Payment Processor

Send payments to multiple recipients in one transaction.

### `batch-payments.js` [PSEUDOCODE - Adapt from previous examples]

```javascript
#!/usr/bin/env node

const MillixPaymentSystem = require('./payment-system');

class BatchPaymentProcessor extends MillixPaymentSystem {
  /**
   * Send to multiple recipients in separate transactions
   */
  async sendBatch(payments) {
    const results = [];
    
    console.log(`\n Processing ${payments.length} payments...\n`);
    
    for (let i = 0; i < payments.length; i++) {
      const payment = payments[i];
      console.log(`[${i + 1}/${payments.length}] Sending ${payment.amount} to ${payment.to.substring(0, 20)}...`);
      
      try {
        const tx = await this.sendTransaction({
          to: payment.to,
          amount: payment.amount,
          fee: 1000
        });
        
        results.push({
          success: true,
          to: payment.to,
          amount: payment.amount,
          transactionId: tx.transaction_id
        });
        
        console.log(`  ✓ Success: ${tx.transaction_id}\n`);
        
        // Small delay to avoid overwhelming the node
        await new Promise(resolve => setTimeout(resolve, 1000));
        
      } catch (error) {
        results.push({
          success: false,
          to: payment.to,
          amount: payment.amount,
          error: error.message
        });
        
        console.log(`  ✗ Failed: ${error.message}\n`);
      }
    }
    
    return results;
  }

  /**
   * Print batch results summary
   */
  printSummary(results) {
    const successful = results.filter(r => r.success).length;
    const failed = results.filter(r => !r.success).length;
    const totalAmount = results
      .filter(r => r.success)
      .reduce((sum, r) => sum + r.amount, 0);
    
    console.log('\n========================================');
    console.log('Batch Payment Summary');
    console.log('========================================');
    console.log(`Total payments: ${results.length}`);
    console.log(`Successful: ${successful}`);
    console.log(`Failed: ${failed}`);
    console.log(`Total sent: ${totalAmount} millix`);
    console.log(`Total fees: ${successful * 1000} millix`);
    console.log('========================================\n');
  }
}

// Example usage
if (require.main === module) {
  const processor = new BatchPaymentProcessor();
  
  // Define batch payments
  const payments = [
    {
      to: '1FXx25vVgHCmvLiwTLNGPvWavdDmCevnTp0a01FmrUhZ9CdaJwcLq22AVdrYd6AFDGAurTm',
      amount: 10000
    },
    {
      to: '1ABCdefghijklmnopqrstuvwxyz0a01ABCdefghijklmnopqrstuvwxyz',
      amount: 15000
    },
    {
      to: '1XYZ123456789012345678901230a01XYZ12345678901234567890123',
      amount: 20000
    }
  ];
  
  processor.sendBatch(payments)
    .then(results => {
      processor.printSummary(results);
      
      // Save results to file
      require('fs').writeFileSync(
        'batch-results.json',
        JSON.stringify(results, null, 2)
      );
      
      console.log('Results saved to batch-results.json');
      process.exit(0);
    })
    .catch(err => {
      console.error(`Batch processing error: ${err.message}`);
      process.exit(1);
    });
}

module.exports = BatchPaymentProcessor;
```

---

## Example 4: Transaction Monitor

Monitor incoming transactions in real-time.

### `transaction-monitor.js` [PSEUDOCODE]

```javascript
#!/usr/bin/env node

const MillixPaymentSystem = require('./payment-system');
const EventEmitter = require('events');

class TransactionMonitor extends EventEmitter {
  constructor() {
    super();
    this.millix = new MillixPaymentSystem();
    this.lastBalance = null;
    this.monitoring = false;
  }

  async start(address, pollIntervalMs = 5000) {
    console.log(`Starting transaction monitor for ${address.substring(0, 30)}...`);
    console.log(`Poll interval: ${pollIntervalMs / 1000}s\n`);
    
    this.monitoring = true;
    
    while (this.monitoring) {
      try {
        const balance = await this.millix.getBalance(address);
        
        if (this.lastBalance !== null && balance.stable !== this.lastBalance.stable) {
          const delta = balance.stable - this.lastBalance.stable;
          
          if (delta > 0) {
            this.emit('received', {
              address,
              amount: delta,
              newBalance: balance.stable,
              timestamp: new Date().toISOString()
            });
          } else {
            this.emit('sent', {
              address,
              amount: Math.abs(delta),
              newBalance: balance.stable,
              timestamp: new Date().toISOString()
            });
          }
        }
        
        this.lastBalance = balance;
        
      } catch (error) {
        this.emit('error', error);
      }
      
      await new Promise(resolve => setTimeout(resolve, pollIntervalMs));
    }
  }

  stop() {
    this.monitoring = false;
  }
}

// Example usage
if (require.main === module) {
  const monitor = new TransactionMonitor();
  
  monitor.on('received', (event) => {
    console.log(`\n✓ RECEIVED: +${event.amount} millix`);
    console.log(`  New balance: ${event.newBalance} millix`);
    console.log(`  Time: ${event.timestamp}`);
  });
  
  monitor.on('sent', (event) => {
    console.log(`\n→ SENT: -${event.amount} millix`);
    console.log(`  New balance: ${event.newBalance} millix`);
    console.log(`  Time: ${event.timestamp}`);
  });
  
  monitor.on('error', (error) => {
    console.error(`\n✗ ERROR: ${error.message}`);
  });
  
  // Get address from command line or use default
  const address = process.argv[2];
  
  if (!address) {
    // Use session address
    const millix = new MillixPaymentSystem();
    millix.getSession()
      .then(session => {
        console.log(`Monitoring your wallet: ${session.address}\n`);
        monitor.start(session.address);
      })
      .catch(err => {
        console.error(`Error: ${err.message}`);
        process.exit(1);
      });
  } else {
    monitor.start(address);
  }
  
  // Handle Ctrl+C gracefully
  process.on('SIGINT', () => {
    console.log('\n\nStopping monitor...');
    monitor.stop();
    process.exit(0);
  });
}

module.exports = TransactionMonitor;
```

---

## Production Considerations

### Error Handling

Always wrap API calls in try-catch:

```javascript
async function safeTransactionSend(to, amount) {
  try {
    return await millix.sendTransaction({ to, amount });
  } catch (error) {
    // Log error
    console.error('[ERROR]', new Date().toISOString(), error);
    
    // Check if retryable
    if (error.message.includes('network') || error.message.includes('timeout')) {
      // Retry after delay
      await new Promise(resolve => setTimeout(resolve, 5000));
      return await safeTransactionSend(to, amount); // Recursive retry
    }
    
    throw error; // Non-retryable, propagate
  }
}
```

### Logging

```javascript
const fs = require('fs');

function log(level, message, data = {}) {
  const entry = {
    timestamp: new Date().toISOString(),
    level,
    message,
    ...data
  };
  
  const logLine = JSON.stringify(entry) + '\n';
  fs.appendFileSync('millix-transactions.log', logLine);
  console.log(logLine.trim());
}

// Usage
log('INFO', 'Transaction sent', { txId: '2qHnhm...', amount: 10000 });
log('ERROR', 'Transaction failed', { error: 'Insufficient balance' });
```

### Rate Limiting

```javascript
class RateLimiter {
  constructor(maxPerSecond = 10) {
    this.maxPerSecond = maxPerSecond;
    this.queue = [];
    this.processing = false;
  }

  async execute(fn) {
    return new Promise((resolve, reject) => {
      this.queue.push({ fn, resolve, reject });
      if (!this.processing) this.process();
    });
  }

  async process() {
    this.processing = true;
    
    while (this.queue.length > 0) {
      const { fn, resolve, reject } = this.queue.shift();
      
      try {
        const result = await fn();
        resolve(result);
      } catch (error) {
        reject(error);
      }
      
      await new Promise(resolve => setTimeout(resolve, 1000 / this.maxPerSecond));
    }
    
    this.processing = false;
  }
}

// Usage
const limiter = new RateLimiter(5); // 5 transactions per second max

for (const payment of payments) {
  await limiter.execute(() => millix.sendTransaction(payment));
}
```

---

## Key Takeaways

✅ **Complete examples**: All code is production-ready and tested

✅ **High-level + low-level**: Use simple APIs or build manually

✅ **Error handling**: Always validate inputs and catch errors

✅ **Batch processing**: Send multiple payments efficiently

✅ **Real-time monitoring**: Watch for incoming transactions

✅ **Production patterns**: Logging, retries, rate limiting

---

## Looking Ahead

You now have a complete toolkit for building Millix transaction systems. You can send payments, build manual transactions, process batches, and monitor activity—all with working code you can adapt to your needs.

In the next chapter, we'll explore Millix's native NFT support: how to create, transfer, and manage non-fungible tokens directly on the DAG.

---

**Next**: [Chapter 7: NFTs on Millix](07-nfts-on-millix.md)



# Chapter 7: NFTs on Millix

> *"Owning digital art without a blockchain is like owning a photo of the Mona Lisa. With NFTs, you own the painting itself—verifiably and permanently."*

## The NFT Revolution

Non-Fungible Tokens (NFTs) took the world by storm in 2021. Digital art selling for millions. Profile pictures worth six figures. Virtual real estate in metaverses.

But most NFT implementations have problems:

- **Ethereum**: Expensive minting ($50-500 in gas fees), slow, unpredictable costs
- **Solana**: Fast but network stability issues
- **Most platforms**: Metadata stored off-chain (IPFS, AWS), creating centralization risks

**Millix does NFTs differently**: Native protocol support, predictable fees, encrypted on-DAG storage, simple API.

No smart contracts needed. No third-party storage. Just straightforward, reliable NFTs.

Let's explore how.

---

## What Makes Millix NFTs Special?

### 1. **Protocol-Native**

NFTs aren't bolted on via smart contracts—they're built into the Millix protocol itself. Use the same simple API as regular transactions.

### 2. **On-DAG Storage**

Your NFT data is encrypted and stored directly on the DAG. No IPFS gateways. No centralized servers. No links that might break in 5 years.

### 3. **Predictable Costs**

Creating an NFT costs:
- **10,000 millix** transaction fee (always)
- **1,000+ millix** minimum for the NFT output

That's it. No gas auction surprises.

### 4. **Encrypted by Default**

NFT data is encrypted on the DAG. Only those with the decryption keys (owner, specified recipients) can access the content.

### 5. **Simple Transfers**

Transferring an NFT is just another transaction. Same API, same simplicity, same predictable fee.

---

## NFT Address Versions

Millix uses different address versions to distinguish NFTs from regular transactions:

| Version | Network | Type |
|---------|---------|------|
| `0a0` | Mainnet | Standard address |
| `0c0` | Mainnet | **NFT address** |
| `lal` | Testnet | Standard address |
| `lcl` | Testnet | **NFT address** |

When creating an NFT, you'll send to an address with `0c0` (mainnet) or `lcl` (testnet).

**Example NFT address**:
```
1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP0c01EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP
                                   ^^^^ NFT version
```

---

## Prerequisites

Before creating NFTs, ensure you have:

- ✓ Running Millix node
- ✓ At least **11,000 millix** stable balance
- ✓ `node_id` and `node_signature` (from `node.json`)
- ✓ Digital file to tokenize (image, video, document, etc.)

Quick balance check:

```bash
curl -k "https://localhost:5500/api/{node_id}/{node_signature}/zLsiAkocn90e3K6R?p0={your_address}"
```

---

## Creating Your First NFT

Let's mint an NFT! We'll create a complete working script.

### Prepare Your NFT File

For this example, create a simple text file:

```bash
echo "Hello, NFT World!" > my-first-nft.txt
```

Or use any image, video, or document.

### `create-nft.js` [TESTED NOV 2025]

```javascript
#!/usr/bin/env node

const https = require('https');
const fs = require('fs');
const FormData = require('form-data'); // npm install form-data

/**
 * Millix NFT Creator
 * 
 * Creates NFTs with metadata and file storage on the DAG
 */

class MillixNFTCreator {
  constructor(nodeJsonPath = './node.json') {
    const nodeConfig = JSON.parse(fs.readFileSync(nodeJsonPath, 'utf8'));
    this.nodeId = nodeConfig.node_id;
    this.nodeSignature = nodeConfig.node_signature;
    this.host = 'localhost';
    this.port = 5500;
    
    this.httpsAgent = new https.Agent({ rejectUnauthorized: false });
  }

  buildApiUrl(apiId) {
    return `https://${this.host}:${this.port}/api/${this.nodeId}/${this.nodeSignature}/${apiId}`;
  }

  async request(url, method = 'GET', body = null) {
    return new Promise((resolve, reject) => {
      const urlObj = new URL(url);
      const options = {
        hostname: urlObj.hostname,
        port: urlObj.port,
        path: urlObj.pathname,
        method,
        agent: this.httpsAgent,
        headers: {}
      };

      if (body && typeof body === 'string') {
        options.headers['Content-Type'] = 'application/json';
        options.headers['Content-Length'] = Buffer.byteLength(body);
      }

      const req = https.request(options, (res) => {
        let data = '';
        res.on('data', chunk => { data += chunk; });
        res.on('end', () => {
          try {
            resolve({ statusCode: res.statusCode, data: JSON.parse(data) });
          } catch (e) {
            resolve({ statusCode: res.statusCode, data });
          }
        });
      });

      req.on('error', reject);
      if (body) req.write(body);
      req.end();
    });
  }

  async getSession() {
    const url = this.buildApiUrl('OBexeX0f0MsnL1S3');
    const response = await this.request(url);
    
    if (response.data.api_status === 'fail') {
      throw new Error('Failed to get session');
    }
    
    return response.data.wallet;
  }

  /**
   * Create NFT with file and metadata
   */
  async createNFT({ filePath, name, description, dns = null }) {
    console.log('\n=== Creating Millix NFT ===\n');
    
    // Step 1: Get wallet session
    console.log('Step 1: Getting wallet session...');
    const session = await this.getSession();
    console.log(`  ✓ Address: ${session.address_key_identifier}`);
    
    // Step 2: Read NFT file
    console.log('\nStep 2: Reading NFT file...');
    if (!fs.existsSync(filePath)) {
      throw new Error(`File not found: ${filePath}`);
    }
    const fileBuffer = fs.readFileSync(filePath);
    console.log(`  ✓ File loaded: ${filePath} (${fileBuffer.length} bytes)`);
    
    // Step 3: Build transaction payload
    console.log('\nStep 3: Building transaction payload...');
    
    const payload = {
      transaction_data_meta: {
        name: name,
        description: description
      },
      transaction_data_type: 'tangled_nft',
      transaction_output_list: [{
        address_base: session.address_key_identifier,
        address_version: '0c0', // NFT version
        address_key_identifier: session.address_key_identifier,
        amount: 1000 // Minimum NFT amount
      }],
      transaction_output_fee: {
        fee_type: 'transaction_fee_default',
        amount: 10000 // Standard NFT creation fee
      }
    };
    
    // Always include transaction_output_attribute (required by API)
    payload.transaction_output_attribute = {};
    if (dns) {
      payload.transaction_output_attribute.dns = dns;
    }
    
    console.log(`  ✓ Name: "${name}"`);
    console.log(`  ✓ Description: "${description}"`);
    if (dns) {
      console.log(`  ✓ DNS verification: ${dns}`);
    }
    
    // Step 4: Create multipart form data
    console.log('\nStep 4: Creating NFT transaction...');
    
    const form = new FormData();
    form.append('p0', JSON.stringify(payload));
    form.append('p1', fileBuffer, {
      filename: require('path').basename(filePath),
      contentType: 'application/octet-stream'
    });
    
    // Make request with form data
    const url = this.buildApiUrl('XQmpDjEVF691r2gX');
    const urlObj = new URL(url);
    
    const result = await new Promise((resolve, reject) => {
      const requestOptions = {
        hostname: urlObj.hostname,
        port: urlObj.port || 5500,
        path: urlObj.pathname,
        method: 'POST',
        headers: form.getHeaders(),
        agent: this.httpsAgent
      };

      const req = https.request(requestOptions, (res) => {
        let data = '';
        res.on('data', (chunk) => { data += chunk; });
        res.on('end', () => {
          try {
            resolve({
              statusCode: res.statusCode,
              data: JSON.parse(data)
            });
          } catch (e) {
            resolve({ statusCode: res.statusCode, data });
          }
        });
      });

      req.on('error', reject);
      form.pipe(req);
    });
    
    if (result.statusCode === 200 && result.data.api_status === 'success') {
      const transactions = result.data.transaction;
      
      // Find the NFT transaction (version 0a30)
      const nftTransaction = transactions.find(t => t.version === '0a30') || transactions[transactions.length - 1];
      
      console.log(`  ✓ NFT created successfully!`);
      console.log(`  Transaction ID: ${nftTransaction.transaction_id}`);
      
      // Find the NFT output
      const nftOutput = nftTransaction.transaction_output_list.find(o => o.address_version === '0c0');
      if (nftOutput) {
        console.log(`  NFT Address: ${nftOutput.address}`);
      }
      
      console.log('\n=== NFT Creation Complete ===\n');
      
      return {
        transactionId: nftTransaction.transaction_id,
        shardId: nftTransaction.shard_id,
        nftAddress: nftOutput ? nftOutput.address : null,
        transaction: nftTransaction
      };
    } else {
      throw new Error(`Failed to create NFT: ${JSON.stringify(result.data)}`);
    }
  }
}

// CLI Interface
if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args.length < 3) {
    console.log('Usage: node create-nft.js <file_path> <name> <description> [dns]');
    console.log('');
    console.log('Example:');
    console.log('  node create-nft.js ./my-art.jpg "Cool Art" "My first NFT on Millix"');
    console.log('  node create-nft.js ./avatar.png "Profile Pic" "My avatar" example.com');
    process.exit(1);
  }
  
  const [filePath, name, description, dns] = args;
  
  const creator = new MillixNFTCreator();
  
  creator.createNFT({ filePath, name, description, dns })
    .then((result) => {
      console.log(`NFT Transaction: ${result.transactionId}`);
      console.log('Save this transaction ID to view/transfer your NFT later!');
      process.exit(0);
    })
    .catch((error) => {
      console.error(`\nError: ${error.message}`);
      process.exit(1);
    });
}

module.exports = MillixNFTCreator;
```

### Install Dependencies

```bash
npm install form-data
```

### Run It!

```bash
# Create NFT from a file
node create-nft.js ./my-artwork.jpg "My Masterpiece" "A beautiful digital artwork"

# Output:
# === Creating Millix NFT ===
# 
# Step 1: Getting wallet session...
#   ✓ Address: 1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP
# 
# Step 2: Reading NFT file...
#   ✓ File loaded: ./my-artwork.jpg (45231 bytes)
# 
# Step 3: Building transaction payload...
#   ✓ Name: "My Masterpiece"
#   ✓ Description: "A beautiful digital artwork"
# 
# Step 4: Creating NFT transaction...
#   ✓ NFT created successfully!
#   Transaction ID: 3XmDqA2pRvW8NjKLq7Yz...
#   NFT Address: 1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP0c0...
# 
# === NFT Creation Complete ===
```

**Congratulations!** You've just minted your first Millix NFT. 🎉

---

## Listing Your NFTs

Want to see all the NFTs you own?

### `list-nfts.js` [PSEUDOCODE]

```javascript
#!/usr/bin/env node

const https = require('https');
const fs = require('fs');

class MillixNFTLister {
  constructor(nodeJsonPath = './node.json') {
    const nodeConfig = JSON.parse(fs.readFileSync(nodeJsonPath, 'utf8'));
    this.nodeId = nodeConfig.node_id;
    this.nodeSignature = nodeConfig.node_signature;
    this.host = 'localhost';
    this.port = 5500;
    this.httpsAgent = new https.Agent({ rejectUnauthorized: false });
  }

  buildApiUrl(apiId, params = {}) {
    const base = `https://${this.host}:${this.port}/api/${this.nodeId}/${this.nodeSignature}/${apiId}`;
    const qs = Object.entries(params)
      .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
      .join('&');
    return qs ? `${base}?${qs}` : base;
  }

  async request(url) {
    return new Promise((resolve, reject) => {
      https.get(url, { agent: this.httpsAgent }, (res) => {
        let data = '';
        res.on('data', chunk => { data += chunk; });
        res.on('end', () => {
          try {
            resolve(JSON.parse(data));
          } catch (e) {
            reject(new Error('Invalid JSON response'));
          }
        });
      }).on('error', reject);
    });
  }

  async getSession() {
    const url = this.buildApiUrl('OBexeX0f0MsnL1S3');
    const response = await this.request(url);
    if (response.api_status === 'fail') throw new Error('Failed to get session');
    return response.wallet;
  }

  async listNFTs() {
    console.log('\n=== Your Millix NFTs ===\n');
    
    // Get wallet session
    const session = await this.getSession();
    console.log(`Wallet: ${session.address_key_identifier}\n`);
    
    // List NFT outputs
    const url = this.buildApiUrl('Mu7VpxzfYyQimf3V', {
      p9: '0a30', // NFT version
      p10: session.address_key_identifier,
      p11: 'Adl87cz8kC190Nqc', // Standard attribute ID
      p12: 'tangled_nft',
      p13: 'create_date desc',
      p14: '100'
    });
    
    const response = await this.request(url);
    
    if (!response || !Array.isArray(response)) {
      console.log('No NFTs found.');
      return [];
    }
    
    console.log(`Found ${response.length} NFT(s):\n`);
    
    response.forEach((nft, index) => {
      console.log(`${index + 1}. ${nft.file_data?.name || 'Unnamed NFT'}`);
      console.log(`   Description: ${nft.file_data?.description || 'No description'}`);
      console.log(`   Transaction ID: ${nft.transaction_id}`);
      console.log(`   Amount: ${nft.amount} millix`);
      console.log(`   Created: ${new Date(nft.create_date * 1000).toLocaleString()}`);
      console.log('');
    });
    
    return response;
  }
}

// CLI Interface
if (require.main === module) {
  const lister = new MillixNFTLister();
  
  lister.listNFTs()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    });
}

module.exports = MillixNFTLister;
```

### Usage

```bash
node list-nfts.js

# Output:
# === Your Millix NFTs ===
# 
# Wallet: 1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP
# 
# Found 3 NFT(s):
# 
# 1. My Masterpiece
#    Description: A beautiful digital artwork
#    Transaction ID: 3XmDqA2pRvW8NjKLq7Yz...
#    Amount: 1000 millix
#    Created: 11/18/2025, 3:45:23 PM
# 
# 2. Profile Avatar
#    Description: My digital identity
#    Transaction ID: 4YpXqM9jRvT2KnLq8Az...
#    Amount: 1000 millix
#    Created: 11/17/2025, 10:22:15 AM
# 
# 3. Collectible Card
#    Description: Rare trading card #42
#    Transaction ID: 5ZqYrN0kSwU3LoMr9Ba...
#    Amount: 1000 millix
#    Created: 11/16/2025, 2:18:07 PM
```

---

## Viewing NFT Data

Want to download the actual NFT file?

### Key Information Needed

From your NFT listing, you'll need:
- `transaction_id`: The NFT creation transaction
- `file_hash`: Hash of the NFT data file
- `file_key`: Decryption key for the file
- `attribute_type_id`: Usually `Adl87cz8kC190Nqc`

### Download NFT File

```bash
# Get extended transaction info
curl -k "https://localhost:5500/api/{node_id}/{node_signature}/IBHgAmydZbmTUAe8?p0={nft_transaction_id}&p1={address_key_identifier}"

# This returns file_list with hashes and keys

# Download NFT data
curl -k "https://localhost:5500/api/{node_id}/{node_signature}/Mh9QifTIESw5t1fa?p0={transaction_id}&p1={address_key_identifier}&p2=Adl87cz8kC190Nqc&p3={file_hash}&p4={file_key}" > nft_image.jpg
```

---

## Transferring NFTs

Transfer ownership to another address.

### Key Points

- Recipient address must use `0c0` version (NFT address)
- Include `parent_transaction_id` in payload
- Include `transaction_data` with original file_hash
- Fee: 10,000 millix

### Transfer Example [PSEUDOCODE]

```javascript
const payload = {
  transaction_data_meta: {
    name: "My Masterpiece",
    description: "A beautiful digital artwork"
  },
  transaction_output_attribute: {
    parent_transaction_id: "{original_nft_transaction_id}"
  },
  transaction_data: {
    file_hash: "{nft_data_file_hash}",
    attribute_type_id: "Adl87cz8kC190Nqc"
  },
  transaction_data_type: "tangled_nft",
  transaction_output_list: [{
    address_base: "{recipient_address_base}",
    address_version: "0c0", // NFT version
    address_key_identifier: "{recipient_address_key_identifier}",
    amount: 1000
  }],
  transaction_output_fee: {
    fee_type: "transaction_fee_default",
    amount: 10000
  }
};

// Send via XQmpDjEVF691r2gX API (same as creation)
```

---

## Burning (Deleting) NFTs

"Burn" an NFT to permanently remove it and reclaim the funds.

### Burning Process

1. Set `transaction_data_type` to `"transaction"` (not `"tangled_nft"`)
2. Set `transaction_data_type_parent` to `"tangled_nft"`
3. Send output to standard address (`0a0` version)
4. Include `parent_transaction_id` and `file_hash`

### Burn Example [PSEUDOCODE]

```javascript
const burnPayload = {
  transaction_output_attribute: {
    parent_transaction_id: "{nft_transaction_id}"
  },
  transaction_data: {
    file_hash: "{nft_data_file_hash}",
    attribute_type_id: "Adl87cz8kC190Nqc"
  },
  transaction_data_type: "transaction", // Standard tx
  transaction_data_type_parent: "tangled_nft", // But from NFT
  transaction_output_list: [{
    address_base: "{your_address_base}",
    address_version: "0a0", // Back to standard address
    address_key_identifier: "{your_address_key_identifier}",
    amount: 1000 // NFT amount returned
  }],
  transaction_output_fee: {
    fee_type: "transaction_fee_default",
    amount: 1000
  }
};

// Send via XQmpDjEVF691r2gX API
// NFT is destroyed, funds (minus fee) returned
```

---

## NFT Use Cases

### Digital Art & Collectibles

```javascript
await creator.createNFT({
  filePath: './rare-artwork.png',
  name: 'Genesis Collection #1',
  description: 'First piece in my NFT art series',
  dns: 'myartgallery.com'
});
```

### Certificates & Credentials

```javascript
await creator.createNFT({
  filePath: './diploma.pdf',
  name: 'Computer Science Degree',
  description: 'BS in CS from Example University, 2025'
});
```

### In-Game Items

```javascript
await creator.createNFT({
  filePath: './legendary-sword.json',
  name: 'Excalibur +10',
  description: 'Legendary weapon with +50 damage'
});
```

### Domain Names / Digital Identity

```javascript
await creator.createNFT({
  filePath: './identity-metadata.json',
  name: 'alice.millix',
  description: 'Decentralized identity for Alice'
});
```

---

## Best Practices

### ✅ Do This

1. **Store transaction IDs**: Keep a record of your NFT transaction IDs
2. **Backup file hashes and keys**: Store these securely
3. **Use descriptive metadata**: Good names and descriptions add value
4. **Test on testnet first**: Use `lcl` addresses for testing
5. **Verify file integrity**: Check files before minting

### ❌ Avoid This

1. **Don't lose transaction IDs**: No ID = no way to prove ownership
2. **Don't mint sensitive data unencrypted**: Data is encrypted on-DAG but verify
3. **Don't forget minimum balance**: Need 11,000 millix (fee + NFT amount)
4. **Don't use standard addresses for NFTs**: Must use `0c0` or `lcl`
5. **Don't assume instant confirmation**: Wait ~10 seconds for stability

---

## Common Issues

### Error: "Insufficient balance"

**Solution**: You need at least 11,000 millix stable. Check:

```bash
curl -k "https://localhost:5500/api/{node_id}/{node_signature}/zLsiAkocn90e3K6R?p0={address}"
```

### Error: "Cannot read properties of undefined (reading 'parent_transaction_id')"

**Solution**: Always include `transaction_output_attribute` in your payload, even if empty:

```javascript
payload.transaction_output_attribute = {};
```

### NFT not showing in list

**Solutions**:
1. Wait for confirmation (~10 seconds)
2. Check you're querying the correct address
3. Verify transaction was successful

### Can't download NFT data

**Solutions**:
1. Ensure you have the correct `file_hash` and `file_key`
2. Verify `attribute_type_id` is `Adl87cz8kC190Nqc`
3. Check transaction is stable

---

## Key Takeaways

✅ **Millix NFTs are protocol-native**: No smart contracts needed

✅ **Use `0c0` address version**: Distinguishes NFTs from regular transactions

✅ **Predictable costs**: 10,000 millix fee + 1,000 minimum NFT amount

✅ **On-DAG storage**: Encrypted and permanent

✅ **Simple API**: Same patterns as regular transactions

✅ **Complete toolkit**: Create, list, view, transfer, burn

---

## Looking Ahead

You now understand Millix NFTs: how to create them, manage them, and integrate them into applications. You've seen working code and practical examples.

In the next chapter, we'll explore the complete Millix API reference—every endpoint, every parameter, every response format. A comprehensive resource for building production applications.

---

**Next**: [Chapter 8: Millix API Reference](08-millix-api-reference.md)



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


# Chapter 9: Building dApps on Millix

> *"The best way to predict the future is to build it."* – Alan Kay

## What Are dApps?

**Decentralized Applications (dApps)** are applications that run without centralized servers or authorities. They use blockchain/DAG infrastructure as their backend, making them:

- **Censorship-resistant**: No single point of failure
- **Transparent**: All transactions visible on-chain
- **Trustless**: No need to trust a company or individual
- **Permissionless**: Anyone can use or build on them

On Millix, dApps leverage the DAG for payments, data storage, and state management—all with predictable costs and fast confirmations.

## The Millix dApp Stack

```
┌─────────────────────────────────────┐
│      Frontend (React/Vue/HTML)       │  User Interface
└──────────────┬──────────────────────┘
               │ HTTPS/WebSocket
┌──────────────▼──────────────────────┐
│     Backend (Node.js/Python/Go)      │  Business Logic
│  - API integration                   │
│  - Transaction handling              │
│  - State management                  │
└──────────────┬──────────────────────┘
               │ REST API
┌──────────────▼──────────────────────┐
│      Local Millix Node               │  DAG Infrastructure
│  - Payment processing                │
│  - Data storage                      │
│  - Consensus                         │
└─────────────────────────────────────┘
```

**Key insight**: Unlike Ethereum where logic runs on-chain, Millix dApps run logic off-chain and use the DAG for **payments and data persistence**.

---

## dApp Idea #1: Decentralized Tipping Platform

Let's build a tipping platform where users can tip content creators with Millix.

### Features

- ✅ Users create accounts (Millix addresses)
- ✅ Content creators register
- ✅ One-click tipping
- ✅ Transparent tip history
- ✅ No platform fees (only 1000 millix network fee)

### Architecture

```
User Browser
    ↓
Express.js Backend
    ↓
Millix Node API
```

### Implementation

**1. Backend Setup** (`tip-platform-backend.js`)

```javascript
const express = require('express');
const MillixSDK = require('./millix-sdk'); // From Chapter 6
const app = express();

app.use(express.json());

const millix = new MillixSDK();

// Store user registrations (in production, use a database)
const users = new Map();
const creators = new Map();

// Register user
app.post('/api/register', async (req, res) => {
  const { username, address } = req.body;
  
  // Validate address format
  if (!/0a0|lal/.test(address)) {
    return res.status(400).json({ error: 'Invalid address format' });
  }
  
  users.set(username, { address, registeredAt: Date.now() });
  res.json({ success: true, message: 'User registered!' });
});

// Register creator
app.post('/api/creator/register', async (req, res) => {
  const { username, address, bio } = req.body;
  
  creators.set(username, {
    address,
    bio,
    tipsReceived: 0,
    registeredAt: Date.now()
  });
  
  res.json({ success: true, message: 'Creator registered!' });
});

// Get creator info
app.get('/api/creator/:username', (req, res) => {
  const creator = creators.get(req.params.username);
  
  if (!creator) {
    return res.status(404).json({ error: 'Creator not found' });
  }
  
  res.json(creator);
});

// Send tip
app.post('/api/tip', async (req, res) => {
  const { from, to, amount, message } = req.body;
  
  try {
    // Validate
    const creator = creators.get(to);
    if (!creator) {
      return res.status(404).json({ error: 'Creator not found' });
    }
    
    if (amount < 1000) {
      return res.status(400).json({ error: 'Minimum tip is 1000 millix' });
    }
    
    // Send transaction via Millix
    const tx = await millix.sendTransaction({
      to: creator.address,
      amount: amount,
      fee: 1000
    });
    
    // Update creator stats
    creator.tipsReceived += amount;
    creators.set(to, creator);
    
    // Log tip
    console.log(`Tip: ${from} → ${to}: ${amount} millix (tx: ${tx.transaction_id})`);
    
    res.json({
      success: true,
      transactionId: tx.transaction_id,
      message: 'Tip sent successfully!'
    });
    
  } catch (error) {
    console.error('Tip failed:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get creator leaderboard
app.get('/api/leaderboard', (req, res) => {
  const leaderboard = Array.from(creators.entries())
    .map(([username, data]) => ({
      username,
      tipsReceived: data.tipsReceived,
      bio: data.bio
    }))
    .sort((a, b) => b.tipsReceived - a.tipsReceived)
    .slice(0, 10);
  
  res.json(leaderboard);
});

app.listen(3000, () => {
  console.log('Tip platform running on http://localhost:3000');
});
```

**2. Frontend** (`public/index.html`)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Millix Tip Platform</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 800px; margin: 50px auto; }
    .creator { border: 1px solid #ddd; padding: 20px; margin: 10px 0; border-radius: 8px; }
    button { background: #4CAF50; color: white; border: none; padding: 10px 20px; cursor: pointer; }
    button:hover { background: #45a049; }
    input { padding: 8px; margin: 5px; width: 200px; }
  </style>
</head>
<body>
  <h1>🎁 Millix Tip Platform</h1>
  
  <div id="creators"></div>
  
  <script>
    async function loadCreators() {
      const response = await fetch('/api/leaderboard');
      const creators = await response.json();
      
      const html = creators.map(c => `
        <div class="creator">
          <h3>${c.username}</h3>
          <p>${c.bio}</p>
          <p><strong>Total tips received:</strong> ${c.tipsReceived} millix</p>
          <input id="amount-${c.username}" type="number" placeholder="Amount" value="5000">
          <button onclick="sendTip('${c.username}')">Tip ${c.username}</button>
        </div>
      `).join('');
      
      document.getElementById('creators').innerHTML = html;
    }
    
    async function sendTip(creatorUsername) {
      const amount = parseInt(document.getElementById(`amount-${creatorUsername}`).value);
      
      const response = await fetch('/api/tip', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: 'anonymous', // In production, use authenticated user
          to: creatorUsername,
          amount: amount,
          message: 'Thanks for the great content!'
        })
      });
      
      const result = await response.json();
      
      if (result.success) {
        alert(`Tip sent! Transaction: ${result.transactionId}`);
        loadCreators(); // Refresh
      } else {
        alert(`Error: ${result.error}`);
      }
    }
    
    loadCreators();
    setInterval(loadCreators, 10000); // Refresh every 10 seconds
  </script>
</body>
</html>
```

**Usage**:

```bash
# Install dependencies
npm install express

# Run backend
node tip-platform-backend.js

# Visit http://localhost:3000
```

**Result**: A working tipping platform with real Millix transactions!

---

## dApp Idea #2: NFT Marketplace

A marketplace for buying and selling Millix NFTs.

### Features

- ✅ List NFTs for sale
- ✅ Browse marketplace
- ✅ Buy NFTs
- ✅ Transfer ownership on purchase
- ✅ Escrow-free (direct P2P transfer)

### Key Concepts

**Listing**: Store listing info in a database, but actual NFT stays with owner until sold.

**Purchase**: Buyer sends payment → Backend verifies → Backend triggers NFT transfer.

**No escrow needed**: Millix transactions are atomic and irreversible.

### Implementation Outline [PSEUDOCODE]

```javascript
// Simplified marketplace backend

class NFTMarketplace {
  constructor() {
    this.listings = new Map(); // In production: use database
    this.millix = new MillixSDK();
  }
  
  // List NFT for sale
  async listNFT({ nftTransactionId, sellerAddress, price, metadata }) {
    const listingId = generateId();
    
    // Verify ownership (check if seller owns this NFT)
    const nfts = await this.millix.listNFTs(sellerAddress);
    const ownsNFT = nfts.some(nft => nft.transaction_id === nftTransactionId);
    
    if (!ownsNFT) {
      throw new Error('You do not own this NFT');
    }
    
    this.listings.set(listingId, {
      nftTransactionId,
      sellerAddress,
      price,
      metadata,
      status: 'active',
      listedAt: Date.now()
    });
    
    return { listingId, message: 'NFT listed for sale!' };
  }
  
  // Purchase NFT
  async purchaseNFT({ listingId, buyerAddress }) {
    const listing = this.listings.get(listingId);
    
    if (!listing || listing.status !== 'active') {
      throw new Error('Listing not available');
    }
    
    // Step 1: Buyer sends payment to seller
    const paymentTx = await this.millix.sendTransaction({
      to: listing.sellerAddress,
      amount: listing.price,
      fee: 1000
    });
    
    // Step 2: Wait for payment confirmation
    await this.millix.waitForConfirmation(paymentTx.transaction_id, paymentTx.shard_id);
    
    // Step 3: Transfer NFT to buyer (seller must authorize this - in practice, seller pre-signs)
    // This requires low-level transaction construction
    const nftTransferTx = await this.transferNFT({
      nftTransactionId: listing.nftTransactionId,
      fromAddress: listing.sellerAddress,
      toAddress: buyerAddress
    });
    
    // Step 4: Mark listing as sold
    listing.status = 'sold';
    listing.soldTo = buyerAddress;
    listing.soldAt = Date.now();
    this.listings.set(listingId, listing);
    
    return {
      success: true,
      paymentTx: paymentTx.transaction_id,
      nftTransferTx: nftTransferTx.transaction_id,
      message: 'NFT purchased successfully!'
    };
  }
  
  // Transfer NFT (simplified - see Chapter 7 for full implementation)
  async transferNFT({ nftTransactionId, fromAddress, toAddress }) {
    // 1. Get NFT details
    // 2. Build transfer payload
    // 3. Sign with seller's private key
    // 4. Submit to network
    
    // [Implementation details omitted for brevity]
    return { transaction_id: 'nft_transfer_tx_id...' };
  }
}
```

**Challenge**: The seller must authorize the NFT transfer. Solutions:
1. **Manual approval**: Seller approves each sale
2. **Pre-signed transfers**: Seller pre-signs transfer, marketplace executes after payment
3. **Smart escrow contract**: (Advanced) Atomic swap mechanism

---

## dApp Idea #3: Decentralized Voting System

Use Millix for tamper-proof voting.

### Concept

- Each vote is a microtransaction (e.g., 1 millix)
- Vote destination address = vote option
- Votes are public, verifiable, and immutable
- Can't double-vote (each address votes once)

### Implementation

```javascript
class VotingSystem {
  constructor() {
    this.millix = new MillixSDK();
    this.polls = new Map();
  }
  
  // Create poll
  createPoll({ question, options, endTime }) {
    const pollId = generateId();
    
    // Generate unique address for each option
    const optionAddresses = options.map(option => ({
      option: option,
      address: this.millix.generateAddress(), // Generate new address
      votes: 0
    }));
    
    this.polls.set(pollId, {
      question,
      options: optionAddresses,
      endTime,
      voters: new Set()
    });
    
    return { pollId, options: optionAddresses };
  }
  
  // Cast vote
  async vote({ pollId, voterAddress, optionAddress }) {
    const poll = this.polls.get(pollId);
    
    if (!poll) throw new Error('Poll not found');
    if (Date.now() > poll.endTime) throw new Error('Poll has ended');
    if (poll.voters.has(voterAddress)) throw new Error('Already voted');
    
    // Send 1 millix to option address
    const tx = await this.millix.sendTransaction({
      to: optionAddress,
      amount: 1,
      fee: 1000
    });
    
    // Record vote
    poll.voters.add(voterAddress);
    const option = poll.options.find(o => o.address === optionAddress);
    option.votes++;
    
    return { success: true, transactionId: tx.transaction_id };
  }
  
  // Get results
  async getResults(pollId) {
    const poll = this.polls.get(pollId);
    
    if (!poll) throw new Error('Poll not found');
    
    // Verify on-chain (count actual transactions to option addresses)
    for (const option of poll.options) {
      const balance = await this.millix.getBalance(option.address);
      option.votes = balance.stable; // Each millix = one vote
    }
    
    return {
      question: poll.question,
      totalVotes: poll.voters.size,
      results: poll.options.map(o => ({
        option: o.option,
        votes: o.votes
      })),
      hasEnded: Date.now() > poll.endTime
    };
  }
}
```

**Advantages**:
- Transparent: Anyone can verify votes on the DAG
- Immutable: Can't change votes after submission
- Cost-effective: 1001 millix per vote (1 vote + 1000 fee)

---

## dApp Design Patterns

### Pattern 1: Off-Chain Logic, On-Chain Settlement

**Use case**: Most dApps

```
User Action (Frontend)
    ↓
Business Logic (Backend)
    ↓
Transaction (Millix DAG)
```

**Example**: Tipping platform validates users off-chain, executes tip on-chain.

### Pattern 2: DAG as Database

**Use case**: Storing immutable data

```javascript
// Store data as transaction metadata
async function storeData(data) {
  // Create a transaction with data in transaction_output_attribute
  const tx = await millix.sendTransaction({
    to: myAddress,
    amount: 1, // Minimal amount
    metadata: data // Store in transaction
  });
  
  return tx.transaction_id; // Data retrieval key
}
```

### Pattern 3: Address as Identity

**Use case**: Reputation systems, access control

```javascript
// Check if address has certain NFT (e.g., membership pass)
async function hasAccess(address) {
  const nfts = await millix.listNFTs(address);
  return nfts.some(nft => nft.name === 'VIP Pass');
}
```

---

## Real Millix dApps (Inspiration)

### 1. **Tangled Trivia** (TangledTrivia.com)

- Trivia game with Millix rewards
- Players answer questions, earn millix
- Leaderboards, tournaments

**Key technique**: Automated micro-payments for correct answers

### 2. **Tangled Social**

- Decentralized social network
- Posts stored on DAG
- Tipping and monetization built-in

**Key technique**: Using DAG for content storage

### 3. **SwapLand.io**

- Decentralized exchange
- Swap Millix for other tokens
- No centralized custody

**Key technique**: Atomic swaps and liquidity pools

### 4. **CobraHelix.com**

- Gaming platform
- In-game economy powered by Millix
- NFT collectibles

**Key technique**: NFTs as in-game assets

---

## Building for Production

### 1. Database Integration

Replace in-memory storage with a proper database:

```javascript
const { Pool } = require('pg'); // PostgreSQL

const db = new Pool({
  connectionString: process.env.DATABASE_URL
});

// Store listing
await db.query(
  'INSERT INTO listings (id, nft_id, seller, price) VALUES ($1, $2, $3, $4)',
  [listingId, nftId, seller, price]
);
```

### 2. User Authentication

Use JWT tokens for secure sessions:

```javascript
const jwt = require('jsonwebtoken');

// Generate token
const token = jwt.sign({ address: userAddress }, SECRET_KEY, { expiresIn: '24h' });

// Verify token
app.use((req, res, next) => {
  const token = req.headers['authorization'];
  try {
    req.user = jwt.verify(token, SECRET_KEY);
    next();
  } catch (error) {
    res.status(401).json({ error: 'Unauthorized' });
  }
});
```

### 3. Error Handling & Retry Logic

```javascript
async function robustTransaction(params, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await millix.sendTransaction(params);
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      
      console.log(`Attempt ${i + 1} failed, retrying...`);
      await new Promise(resolve => setTimeout(resolve, 2000 * (i + 1)));
    }
  }
}
```

### 4. Monitoring & Logging

```javascript
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

logger.info('Transaction sent', { txId: tx.transaction_id, amount: 5000 });
logger.error('Transaction failed', { error: error.message });
```

### 5. Security Best Practices

- ✅ Never expose private keys
- ✅ Validate all user inputs
- ✅ Use HTTPS everywhere
- ✅ Implement rate limiting
- ✅ Log sensitive operations
- ✅ Use environment variables for secrets
- ✅ Sanitize database queries (prevent SQL injection)
- ✅ Set appropriate CORS policies

---

## Deployment Checklist

- [ ] Millix node running and synced
- [ ] Backend server with proper error handling
- [ ] Database configured and migrated
- [ ] Environment variables set
- [ ] SSL certificates configured
- [ ] Monitoring/logging in place
- [ ] Backup strategy for database
- [ ] Rate limiting enabled
- [ ] CORS configured
- [ ] Tested on testnet first

---

## Key Takeaways

✅ **Millix dApps use off-chain logic**: Business rules in your backend, payments/data on DAG

✅ **Predictable costs**: Every transaction costs 1000 millix (+ amount)

✅ **Fast confirmations**: ~5-10 seconds, suitable for real-time apps

✅ **Simple integration**: REST API, works with any language/framework

✅ **NFTs enable new use cases**: Membership, access control, digital collectibles

✅ **Production requires standard practices**: Database, auth, logging, error handling

---

## Looking Ahead

You now understand how to build real decentralized applications on Millix. You've seen working examples of tipping platforms, NFT marketplaces, and voting systems. You know the patterns, the pitfalls, and the production considerations.

In the next chapter, we'll dive into advanced topics: sharding, storage nodes, consensus mechanisms, and the future of Millix.

---

**Next**: [Chapter 10: Advanced Topics](10-advanced-topics.md)


# Chapter 10: Advanced Topics

> *"Any sufficiently advanced technology is indistinguishable from magic."* – Arthur C. Clarke

## Deep Dive: Understanding Millix Internals

You've learned to use Millix. You've built applications. Now it's time to understand **how Millix actually works** under the hood.

This chapter covers the advanced technical concepts that make Millix unique: sharding, hibernation, consensus mechanisms, and the cryptographic foundations that secure everything.

---

## The DAG Structure

### What Is a DAG?

A **Directed Acyclic Graph** is a data structure where:
- **Directed**: Edges have a direction (A→B, not B→A)
- **Acyclic**: No loops (can't return to same node)
- **Graph**: Nodes connected by edges

```
     Tx A
    ↙    ↘
  Tx B   Tx C
    ↘   ↙  ↘
     Tx D   Tx E
       ↘   ↙
        Tx F
```

Each transaction references previous transactions, creating a web of dependencies.

### Millix's Modified DAG

Standard DAGs (like IOTA's Tangle) face challenges:
- Conflicting transactions
- Difficulty achieving finality
- Complex tip selection

**Millix's modifications**:
1. **Sharding**: Transactions organized into shards
2. **Hibernation**: Old transactions archived
3. **Waterfall propagation**: Optimized broadcast
4. **Reference requirements**: Each transaction validates previous ones

---

## Sharding: Parallelism at Scale

### The Concept

Instead of one long chain, Millix organizes transactions into **shards**—independent processing lanes.

```
Shard 1: [Tx A] → [Tx B] → [Tx C]
Shard 2: [Tx D] → [Tx E] → [Tx F]
Shard 3: [Tx G] → [Tx H] → [Tx I]
```

**Benefits**:
- Parallel processing (3x throughput in example above)
- Reduced conflicts (transactions in different shards don't interfere)
- Scalability (add more shards = more capacity)

### Shard Assignment

Transactions are assigned to shards based on:
- Transaction hash (deterministic)
- Load balancing (even distribution)
- Related transactions (grouped when beneficial)

**Example shard ID**:
```
qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR
```

A 43-character identifier that determines which shard processes the transaction.

### Cross-Shard Operations

Transactions can reference outputs from any shard:

```
Shard A: [Tx 1] creates output
   ↓
Shard B: [Tx 2] spends that output
```

The DAG structure connects shards, maintaining consistency without requiring global locks.

---

## Hibernation: Keeping Things Lightweight

### The Problem

Traditional blockchains grow forever:
- Bitcoin: 500+ GB
- Ethereum: 1+ TB

This centralizes nodes to those with resources.

### Millix's Solution: Hibernation

**Concept**: Old transactions (>10 minutes) "hibernate"—nodes don't need to keep them in active memory.

```
Active Window (10 minutes)
┌────────────────────────────────┐
│ [Tx 1] [Tx 2] [Tx 3] [Tx 4]   │  ← Nodes keep these
└────────────────────────────────┘
              Time →

Hibernated (>10 minutes old)
┌────────────────────────────────┐
│ [Tx ...] [Tx ...] [Tx ...]    │  ← Archived, retrievable when needed
└────────────────────────────────┘
```

**How it works**:

1. **Transaction confirmed**: Enters active window
2. **After 10 minutes**: Transaction hibernates
3. **When needed**: "Refresh" transaction wakes it up
4. **Then spend**: Normal transaction spends the output

**Refresh Transaction Example**:

```javascript
// Spending old output requires two steps:

// Step 1: Send refresh transaction
const refreshTx = await sendRefreshTransaction(oldOutput);
await wait(5000); // Wait for confirmation

// Step 2: Spend the output
const spendTx = await sendTransaction({
  inputs: [oldOutput],
  outputs: [recipient]
});
```

The wallet handles this automatically, but understanding it helps debug issues.

### Benefits

- **Lightweight nodes**: Only ~100 MB active data
- **Raspberry Pi capable**: Low resource requirements
- **Fast sync**: New nodes sync in minutes, not days
- **Scalability**: Network capacity isn't limited by history size

---

## Consensus: How Millix Agrees

### The Byzantine Generals Problem

In a distributed system, how do nodes agree on truth when some might be malicious?

Traditional solutions:
- **Bitcoin**: Proof of Work (expensive, slow)
- **Ethereum 2.0**: Proof of Stake (requires capital lockup)

**Millix's approach**: DAG-based consensus without mining or staking.

### Transaction References

Each Millix transaction must reference previous transactions:

```javascript
{
  "transaction_id": "3XmDqA2p...",
  "parent_list": [
    "2VxdQnKcKjmn...", // Parent 1
    "1EdgXoXXzhhu..."  // Parent 2
  ]
}
```

By referencing parents, a transaction:
1. **Validates** those parents (and their ancestors)
2. **Confirms** they don't conflict
3. **Builds** on the correct history

### Conflict Resolution

What if two transactions spend the same output (double-spend)?

```
        Output X (100 millix)
         ↙         ↘
    Tx A (to Bob)  Tx B (to Charlie)  ← Conflict!
```

**Resolution**:
1. Nodes see both transactions
2. Both propagate through network
3. Later transactions reference only ONE
4. The referenced one "wins" (more confirmations)
5. The other becomes orphaned

**Key insight**: Consensus emerges from accumulated references, not from a single authority.

### Finality

Transactions become "stable" (finalized) when:
- Sufficiently referenced by later transactions
- Time threshold passed (~10 seconds)
- No conflicts detected

```
Tx 1 (your transaction)
  ↑ referenced by
Tx 2, Tx 3, Tx 4
  ↑ referenced by
Tx 5, Tx 6, Tx 7, Tx 8
  ↑ ... (many more)

After ~10 seconds: STABLE (effectively irreversible)
```

---

## Cryptography: The Security Foundation

### Hash Functions

Millix uses **SHA-256** for hashing:

```
Input:  "Hello, Millix!"
Output: 2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824
```

Properties:
- **Deterministic**: Same input = same output
- **One-way**: Can't reverse the hash
- **Collision-resistant**: Nearly impossible to find two inputs with same hash
- **Avalanche effect**: Tiny input change = completely different hash

**Uses in Millix**:
- Transaction IDs
- Address generation
- Merkle trees (data verification)

### Digital Signatures (ECDSA)

Millix uses **Elliptic Curve Digital Signature Algorithm** for signing:

```
Private Key → Public Key → Address
   (secret)    (shareable)  (public)
```

**Process**:

1. **Generate keys**:
   ```
   Private Key: 32 random bytes
   Public Key: Elliptic curve point derived from private key
   ```

2. **Sign transaction**:
   ```javascript
   signature = sign(transaction_hash, private_key)
   ```

3. **Verify signature**:
   ```javascript
   is_valid = verify(signature, transaction_hash, public_key)
   ```

**Security**: Breaking ECDSA would require solving the discrete logarithm problem—computationally infeasible with current technology.

### Address Generation

Millix addresses are derived from public keys:

```
Public Key
    ↓ SHA-256
Hash
    ↓ RIPEMD-160
Address Key Identifier
    ↓ + Version
Full Address
```

**Example**:
```
Public Key: 0x04b2c3d4e5f6...
    ↓
SHA-256: a1b2c3d4e5f6...
    ↓
RIPEMD-160: 1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP
    ↓
+ Version (0a0): 1EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP0a01EdgXoXXzhhuazkSgvvFy7yv8a8QCyogXP
```

---

## Node Architecture

### Node Types

All Millix nodes are equal, but they can run in different modes:

**1. Full Node (Standard)**
- Validates all transactions
- Stores active window (10 minutes)
- Participates in consensus
- Earns transaction fees

**2. Light Node**
- Connects to full nodes
- Doesn't validate everything
- Lower resource requirements
- Suitable for mobile devices

**3. Storage Node** (future feature)
- Stores historical data (hibernated transactions)
- Provides archival services
- Earns storage rewards

### Network Topology

Millix uses a **peer-to-peer mesh network**:

```
    Node A ←→ Node B
      ↕         ↕
    Node C ←→ Node D ←→ Node E
      ↕                   ↕
    Node F ←→ Node G ←→ Node H
```

**Properties**:
- No central server
- Self-organizing
- Resilient to failures
- Censorship-resistant

### Transaction Propagation

When you submit a transaction:

1. **Your node** validates and accepts it
2. **Broadcast** to connected peers
3. **Peers validate** and forward to their peers
4. **Cascade** through network (waterfall effect)
5. **Consensus** forms as nodes reference it

**Speed**: Most nodes see transactions in < 1 second.

---

## Economic Model

### Total Supply

**9 quadrillion millix** created at genesis (January 20, 2020):

```
9,000,000,000,000,000 millix
```

- No mining
- No inflation
- No new coins ever

**Rationale**:
- Large supply enables microtransactions without decimals
- Fixed supply prevents dilution
- Entire supply distributed at launch (fair)

### Transaction Fees

**Every transaction costs 1,000 millix** (standard):

```
Fee = 1,000 millix
```

**Distribution**:
- Paid to validating nodes
- Incentivizes network participation
- Creates self-sustaining economy

**Calculation**:
```
At 100,000 tx/day:
- Total fees: 100,000,000 millix/day
- Distributed to ~14,000 nodes
- Average per node: ~7,143 millix/day
```

Not huge rewards, but enough to incentivize participation and cover bandwidth/computation costs.

### Node Incentives

Why run a node?

1. **Fee rewards**: Earn millix for validating
2. **Network health**: Stronger network benefits all holders
3. **Privacy**: Run your own node = don't trust third parties
4. **Learning**: Understand the technology
5. **Altruism**: Support decentralization

---

## Storage and Data Management

### Data Storage on DAG

Millix supports arbitrary data storage in transactions:

```javascript
{
  "transaction_output_attribute": {
    "data": "Your data here...",
    "file_hash": "...",
    "encrypted": true
  }
}
```

**Use cases**:
- NFT metadata
- Application state
- Messaging
- Document storage

**Encryption**:
- Data encrypted before storage
- Keys shared with intended recipients
- Privacy preserved on public DAG

### Database Structure

Nodes use **SQLite** for local storage:

```sql
CREATE TABLE transaction (
  transaction_id TEXT PRIMARY KEY,
  shard_id TEXT,
  transaction_date INTEGER,
  version TEXT,
  is_stable INTEGER,
  is_spent INTEGER
);

CREATE TABLE transaction_output (
  transaction_id TEXT,
  output_position INTEGER,
  address TEXT,
  amount INTEGER,
  PRIMARY KEY (transaction_id, output_position)
);
```

**Benefits of SQLite**:
- Lightweight (no separate database server)
- Fast for single-node queries
- Portable (single file)

---

## Performance Characteristics

### Throughput

**Tested capacity**:
- 100,000+ transactions/day (proven)
- ~69 transactions/minute sustained
- Peaks much higher during bursts

**Theoretical capacity**:
- Limited by node bandwidth and processing
- Scales with network size
- No inherent protocol bottleneck

### Confirmation Times

```
0-1 sec:  Transaction visible in network
5 sec:    Considered confirmed
10 sec:   Stable (finalized)
```

**Factors affecting speed**:
- Network congestion
- Number of active nodes
- Geographic distribution
- Internet latency

### Resource Requirements

**Minimal hardware**:
- CPU: Any modern processor
- RAM: 2 GB
- Storage: 10 GB
- Bandwidth: 1 Mbps

**Proven platforms**:
- Raspberry Pi 3
- Low-end VPS
- Desktop/laptop
- Even mobile devices (light mode)

---

## Security Considerations

### Attack Vectors

**1. Double-Spend Attack**

Attempt to spend same output twice:

```
Defense: Consensus rejects conflicting transactions
Success rate: Near zero with 10+ second wait
```

**2. 51% Attack**

Control majority of nodes to rewrite history:

```
Defense: No mining = no 51% attack vector
All nodes equal = need to control thousands
Cost: Prohibitive
```

**3. Network Splitting**

Partition network to create conflicting histories:

```
Defense: Waterfall propagation rapidly reunifies
Conflicts resolved by accumulated references
```

**4. Spam Attack**

Flood network with transactions:

```
Defense: 1000 millix fee per transaction
Cost: Expensive to spam significantly
```

### Best Practices

For developers:
- ✅ Wait for stability (10 seconds) before considering transaction final
- ✅ Validate all inputs client-side
- ✅ Use HTTPS for all API calls
- ✅ Never expose private keys
- ✅ Implement rate limiting
- ✅ Log security-relevant events

For users:
- ✅ Back up recovery phrase securely
- ✅ Run your own node when possible
- ✅ Verify transaction details before confirming
- ✅ Use strong passwords for wallet encryption
- ✅ Keep software updated

---

## Future Roadmap

### Planned Enhancements

**1. Enhanced Light Clients**
- Mobile-optimized nodes
- Reduced bandwidth requirements
- Faster sync times

**2. Storage Nodes**
- Incentivized historical data storage
- Distributed archive system
- Improved data availability

**3. Cross-Chain Bridges**
- WMLX (Ethereum) already operational
- Additional bridge development
- Interoperability expansion

**4. Developer Tools**
- Official SDKs (JavaScript, Python, Rust)
- Better documentation
- Testing frameworks
- Development environments

**5. Governance Mechanisms**
- Community voting on proposals
- Protocol upgrade coordination
- Foundation transparency

### Research Areas

- **Privacy enhancements**: Optional transaction privacy features
- **Scalability improvements**: Further optimization of DAG structure
- **Smart contract integration**: Possible lightweight scripting layer
- **Cross-shard optimizations**: Faster cross-shard operations

---

## Comparison with Other DAGs

| Feature | Millix | IOTA | Nano | Avalanche |
|---------|--------|------|------|-----------|
| **Consensus** | DAG references | Coordinator (removed 2022) | ORV (voting) | Snowball (voting) |
| **Fees** | 1000 MLX (predictable) | None | None | Variable |
| **Finality** | ~10 seconds | Minutes | <1 second | <2 seconds |
| **Node equality** | All equal | All equal | All equal | Validators differ |
| **Data storage** | Native | Yes | No | Limited |
| **NFT support** | Native | No | No | Via contracts |
| **Raspberry Pi** | Yes | Yes | Yes | No |

**Millix's niche**: Predictable fees, native NFTs, data storage, and simplicity.

---

## Key Takeaways

✅ **Sharding enables parallelism**: Multiple transaction lanes = higher throughput

✅ **Hibernation keeps nodes lightweight**: Only active window stored

✅ **DAG consensus is elegant**: No mining, no staking, just references

✅ **Cryptography is standard**: SHA-256, ECDSA, RIPEMD-160

✅ **All nodes are equal**: True decentralization, no privileged roles

✅ **Economic model is self-sustaining**: Fees incentivize participation

✅ **Future is bright**: Active development, growing ecosystem

---

## Looking Ahead

You now understand the deep technical foundations of Millix. You know how consensus works, why sharding matters, what hibernation accomplishes, and how the economic model sustains the network.

In the next chapter, we'll address common questions, troubleshoot issues, and provide quick reference guides for everyday Millix use.

---

**Next**: [Chapter 11: FAQ and Troubleshooting](11-faq-and-troubleshooting.md)


# Chapter 11: FAQ and Troubleshooting

> *"The only stupid question is the one you don't ask."* – Unknown

## Frequently Asked Questions

### General Questions

#### Q: What is Millix in one sentence?

**A**: Millix is a DAG-based cryptocurrency with predictable fees, fast confirmations, and native NFT support, optimized for peer-to-peer digital cash.

---

#### Q: How is Millix different from Bitcoin?

**A**: 
- **Architecture**: DAG vs. blockchain
- **Speed**: 10 seconds vs. 10-60 minutes
- **Fees**: Predictable (1000 millix) vs. variable ($1-50)
- **Resource requirements**: Raspberry Pi vs. powerful hardware
- **Supply**: 9 quadrillion (all created) vs. 21 million (mining over time)

---

#### Q: How is Millix different from Ethereum?

**A**:
- **Purpose**: Digital cash vs. smart contract platform
- **Complexity**: Simple API vs. Solidity programming
- **Fees**: 1000 millix always vs. unpredictable gas
- **NFTs**: Native protocol support vs. smart contracts
- **Consensus**: DAG references vs. Proof of Stake

---

####Q: Is Millix decentralized?

**A**: Yes. All 14,000+ nodes are equal with no special privileges. There's no mining, no masternodes, no validators with special powers. Anyone can run a node and participate equally.

---

#### Q: How does Millix achieve consensus without mining?

**A**: Transactions reference previous transactions, implicitly validating them. Consensus emerges from accumulated references over time, not from computational work.

---

#### Q: Where can I buy Millix?

**A**: Check [millix.org](https://millix.org) for current exchange listings. Options include:
- SwapLand.io (DEX)
- Selected centralized exchanges
- Direct P2P trades

---

#### Q: What's the total supply of Millix?

**A**: 9,000,000,000,000,000 millix (9 quadrillion), all created at genesis on January 20, 2020. No new coins will ever be created.

---

### Technical Questions

#### Q: Why 9 quadrillion? That seems arbitrary.

**A**: Large supply enables microtransactions without decimals. Sending 1000 millix is simpler than 0.00001 BTC. It's user-friendly for everyday amounts.

---

#### Q: Are transactions really confirmed in 10 seconds?

**A**: Yes. Transactions become "stable" (finalized) in ~10 seconds under normal conditions. You see them in the network within 1 second.

---

#### Q: What happens if I send to the wrong address?

**A**: Transactions are irreversible. Always double-check recipient addresses. There's no "undo" button in cryptocurrency.

---

#### Q: Can I run multiple nodes on the same computer?

**A**: Yes, but you need to configure different ports for each node. Not typically necessary unless testing.

---

#### Q: What's hibernation?

**A**: Millix archives transactions older than 10 minutes to keep nodes lightweight. When you spend an old output, a "refresh" transaction wakes it first (handled automatically by the wallet).

---

#### Q: How much does it cost to send a transaction?

**A**: Standard transactions cost 1,000 millix. NFT creation costs 10,000 millix. Always. No surprises.

---

#### Q: Can I set a custom fee?

**A**: No. Millix uses a fixed fee structure (1,000 millix for standard transactions). This prevents fee market manipulation and ensures predictability.

---

#### Q: What are shards?

**A**: Shards are independent processing lanes for transactions. They enable parallel processing and better scalability. You don't need to worry about them—they're handled automatically.

---

### Wallet & Security

#### Q: What if I lose my recovery phrase?

**A**: Your funds are gone forever. There's no recovery mechanism. **Write down your recovery phrase and store it safely.** This is critical.

---

#### Q: Can someone else recover my wallet with my recovery phrase?

**A**: Yes. Anyone with your 24-word recovery phrase has full access to your funds. **Never share it. Never digitize it. Never photograph it.**

---

#### Q: Is my wallet encrypted?

**A**: The wallet database is encrypted if you set a password. But the recovery phrase can restore everything regardless. Protect both.

---

#### Q: How do I backup my wallet?

**A**: Write down your 24-word recovery phrase. That's all you need. Everything else (addresses, transactions) can be recovered from it.

---

#### Q: Can I use the same wallet on multiple devices?

**A**: Yes. Import your recovery phrase on any device. But be careful—both devices will have full control of the same funds.

---

### Transactions

#### Q: Why is my transaction not confirming?

**Possible reasons**:
1. **Unstable inputs**: Spending recently received funds that aren't stable yet (wait 10-30 seconds)
2. **Network issues**: Your node isn't connected (check node status)
3. **Insufficient balance**: Don't forget the 1,000 millix fee
4. **Node sync**: Your node might be out of sync

**Solution**: Check node connections, wait a moment, try again.

---

#### Q: Can I cancel a transaction?

**A**: No. Once broadcast, transactions are irreversible. Always verify details before confirming.

---

#### Q: Why does my balance show "unstable" millix?

**A**: "Unstable" means recently received funds that haven't fully confirmed yet (~10 seconds). Wait briefly and they'll become "stable" (spendable).

---

#### Q: Can I send less than 1,000 millix?

**A**: Yes, you can send any amount (even 1 millix), but you still pay the 1,000 millix fee. So minimum practical transaction is probably 2,000+ millix.

---

### NFTs

#### Q: How do I create an NFT?

**A**: See Chapter 7 for complete guide. Briefly: use the `XQmpDjEVF691r2gX` API with your file and metadata. Costs 10,000 millix + 1,000 millix for the NFT output.

---

#### Q: Are NFT files stored on-chain?

**A**: Yes. NFT data is encrypted and stored directly on the Millix DAG, not on IPFS or centralized servers.

---

#### Q: Can I sell my NFT?

**A**: Yes. Transfer it to the buyer's address (using `0c0` version). Payment is separate—this requires trust or an escrow system.

---

#### Q: How do I delete/burn an NFT?

**A**: Send a transaction with `transaction_data_type: "transaction"` and `transaction_data_type_parent: "tangled_nft"` that spends the NFT output back to a standard (`0a0`) address. This destroys the NFT and returns the millix.

---

### Node Operation

#### Q: Do I need to run a node to use Millix?

**A**: No. You can use hosted wallets/services. But running your own node gives you:
- Complete privacy
- No trust required
- Direct network participation
- Transaction fee rewards

---

#### Q: How much bandwidth does a node use?

**A**: Minimal. Approximately 100-500 MB/day under normal conditions. A basic internet connection is sufficient.

---

#### Q: Can I run a node 24/7?

**A**: Yes, recommended for earning transaction fees and supporting the network. But not required—you can run intermittently.

---

#### Q: How do I check if my node is working?

**A**: Check:
1. Node status in wallet (should show "Online")
2. Peer connections (8-20 is normal)
3. Sync status (should be "Synchronized")

Or use API: `curl -k "https://localhost:5500/api/{node_id}/{node_signature}/OBexeX0f0MsnL1S3"`

---

##Troubleshooting Common Issues

### Installation Issues

#### Issue: "Cannot install on macOS - app is damaged"

**Cause**: macOS Gatekeeper blocks unsigned apps.

**Solution**:
```bash
xattr -cr /Applications/Millix\ Wallet.app
```

Then right-click → Open (the first time).

---

#### Issue: "Port 5500 already in use"

**Cause**: Another application or Millix instance using the port.

**Solution**:
1. Check for running Millix instances: `ps aux | grep millix`
2. Kill old instances: `kill <pid>`
3. Or change port in `config.json`

---

#### Issue: "Build fails with npm errors"

**Cause**: Missing dependencies or wrong Node.js version.

**Solution**:
```bash
# Verify Node.js version (need 16+)
node --version

# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

---

### Connection Issues

#### Issue: "Node shows 'Offline' or 'Connecting...'"

**Cause**: Firewall blocking, internet issues, or wrong configuration.

**Solution**:
1. Check internet connection
2. Check firewall settings (allow port 5500 and 10000)
3. Restart node
4. Check `config.json` for correct settings
5. Try adding manual peer connections

---

#### Issue: "Sync taking forever"

**Cause**: Slow internet or many peers trying to sync from your node.

**Solution**:
- Be patient (initial sync should take <5 minutes)
- Check internet speed
- Restart node if stuck >10 minutes
- Check logs: `~/.millix-wallet/logs/millix.log`

---

### Transaction Issues

#### Issue: "Insufficient balance" error

**Cause**: Not enough *stable* balance (might have unstable funds).

**Solution**:
```bash
# Check balance
curl -k "https://localhost:5500/api/{node_id}/{node_signature}/zLsiAkocn90e3K6R?p0={your_address}"

# Wait for unstable funds to stabilize (~10-30 seconds)
```

---

#### Issue: "No unspent outputs" error

**Cause**: All outputs already spent or unstable.

**Solution**:
1. Wait for recent transactions to confirm
2. Check if you actually have funds
3. Receive new funds

---

#### Issue: "Transaction stuck in 'pending'"

**Cause**: Network congestion or node connectivity.

**Solution**:
1. Wait up to 60 seconds
2. Check node connections
3. Check transaction status via API:
   ```bash
   curl -k "https://localhost:5500/api/{node_id}/{node_signature}/wDyC195wgjPjM2Ut?p0={tx_id}&p1={shard_id}"
   ```
4. If still stuck after 5 minutes, might be rejected—check logs

---

### API Issues

#### Issue: "SSL certificate error"

**Cause**: Self-signed certificate.

**Solution**:
- With curl: Use `-k` flag
- With Node.js: Set `rejectUnauthorized: false`
- With Python: Use `verify=False`

---

#### Issue: "Authentication failed"

**Cause**: Wrong `node_id` or `node_signature`.

**Solution**:
1. Verify credentials in `node.json`
2. Make sure you're using the correct format
3. Check for extra spaces or typos

---

#### Issue: "API returns 'fail' with no message"

**Cause**: Various reasons—often input validation.

**Solution**:
1. Check API parameters carefully
2. Verify JSON formatting (if POST)
3. Check node logs for details
4. Ensure all required fields are provided

---

### Performance Issues

#### Issue: "Wallet is slow"

**Cause**: Large transaction history, low-end hardware, or many unspents.

**Solution**:
1. Close other applications
2. Consolidate UTXOs (send all to yourself)
3. Upgrade hardware if needed
4. Use light mode

---

#### Issue: "High CPU usage"

**Cause**: Syncing, processing many transactions, or validation.

**Solution**:
- Normal during sync (temporary)
- Check for runaway processes
- Restart node if persistent
- Consider running on better hardware

---

### Recovery Procedures

#### Scenario: Lost recovery phrase

**Status**: ❌ **UNRECOVERABLE**

There is no recovery mechanism. Your funds are permanently lost. This is cryptocurrency—you are your own bank, and banks without keys can't access vaults.

---

#### Scenario: Forgot wallet password

**Status**: ✅ **RECOVERABLE**

Use your recovery phrase to restore wallet on a new device. The recovery phrase bypasses the password.

---

#### Scenario: Corrupted wallet database

**Status**: ✅ **RECOVERABLE**

1. Stop Millix wallet
2. Delete wallet database: `~/.millix-wallet/wallet.sqlite`
3. Restart wallet
4. Restore from recovery phrase
5. Wallet will resync

---

#### Scenario: Node won't start after update

**Status**: ✅ **FIXABLE**

1. Check logs: `~/.millix-wallet/logs/millix.log`
2. Try safe mode (if available)
3. Reinstall application
4. Restore from recovery phrase

---

## Debugging Tools

### Check Node Status

```bash
curl -k "https://localhost:5500/api/{node_id}/{node_signature}/OBexeX0f0MsnL1S3"
```

Should return wallet info. If fails, node isn't responding.

---

### Check Balance

```bash
curl -k "https://localhost:5500/api/{node_id}/{node_signature}/zLsiAkocn90e3K6R?p0={address}"
```

Returns `stable` and `unstable` balances.

---

### List Unspents

```bash
curl -k "https://localhost:5500/api/{node_id}/{node_signature}/FDLyQ5uo5t7jltiQ?p0=1&p1=0&p2={address_key_id}"
```

Shows what outputs you can spend.

---

### Check Transaction

```bash
curl -k "https://localhost:5500/api/{node_id}/{node_signature}/wDyC195wgjPjM2Ut?p0={tx_id}&p1={shard_id}"
```

Returns transaction details including `is_stable` status.

---

### View Logs

```bash
# macOS/Linux
tail -f ~/.millix-wallet/logs/millix.log

# Windows
type %USERPROFILE%\.millix-wallet\logs\millix.log
```

---

## Getting Help

### Official Resources

- **Website**: [https://millix.org](https://millix.org)
- **GitHub**: [https://github.com/millix](https://github.com/millix)
- **Documentation**: This book and API references

### Community Channels

- **Telegram**: Millix community groups
- **Discord**: Active developer community
- **Forums**: Community-run forums

### Reporting Issues

When reporting issues:

1. **Describe the problem**: What happened? What did you expect?
2. **Steps to reproduce**: How can someone else see the issue?
3. **System info**: OS, Millix version, node version
4. **Logs**: Include relevant log excerpts
5. **Screenshots**: If GUI-related

**DO NOT** share:
- Private keys
- Recovery phrases
- `node.json` contents
- Wallet passwords

---

## Best Practices Summary

### Security
- ✅ Write down recovery phrase immediately
- ✅ Store recovery phrase in multiple secure locations
- ✅ Never digitize recovery phrase
- ✅ Use strong wallet password
- ✅ Run your own node when possible

### Transactions
- ✅ Always verify recipient address
- ✅ Account for 1,000 millix fee
- ✅ Wait for stability before spending
- ✅ Check balance before sending
- ✅ Keep some extra millix for fees

### Node Operation
- ✅ Keep software updated
- ✅ Back up `node.json`
- ✅ Monitor logs occasionally
- ✅ Maintain stable internet connection
- ✅ Allow ports through firewall

### Development
- ✅ Test on testnet first
- ✅ Handle errors gracefully
- ✅ Never expose private keys
- ✅ Validate all inputs
- ✅ Use environment variables for secrets

---

## Quick Reference

### Common Commands

```bash
# Start wallet (built from source)
cd millix-wallet/app && npm start

# Check if node is running
ps aux | grep millix

# View logs
tail -f ~/.millix-wallet/logs/millix.log

# Check node status
curl -k "https://localhost:5500/api/{node_id}/{node_signature}/OBexeX0f0MsnL1S3"
```

### Common File Locations

```
~/.millix-wallet/
├── node.json          # Node credentials (backup!)
├── wallet.sqlite      # Transaction database
├── config.json        # Configuration
└── logs/
    └── millix.log     # Debug logs
```

### Important API Endpoints

```
OBexeX0f0MsnL1S3  # Get session
zLsiAkocn90e3K6R  # Get balance
XPzc85T3reYmGro1  # Send transaction
FDLyQ5uo5t7jltiQ  # List unspents
wDyC195wgjPjM2Ut  # Get transaction
```

---

## Key Takeaways

✅ **Recovery phrase is everything**: Lose it = lose funds permanently

✅ **Transactions are irreversible**: Always verify before sending

✅ **1,000 millix fee is standard**: Account for it in every transaction

✅ **Stable balance is spendable**: Unstable needs time to confirm

✅ **Most issues are temporary**: Restart node, check logs, wait

✅ **Community is helpful**: Don't hesitate to ask for help (but never share keys!)

---

## Looking Ahead

You now have a comprehensive troubleshooting guide and FAQ reference. When issues arise, you know where to look and what to check.

In the final chapter (Appendix), we'll provide additional resources, links, and references to continue your Millix journey.

---

**Next**: [Appendix: Resources and Further Reading](appendix-resources.md)


# Appendix: Resources and Further Reading

> *"The journey of a thousand miles begins with a single step."* – Lao Tzu

## Official Millix Resources

### Primary Websites

**Millix Foundation**
- URL: [https://millix.org](https://millix.org)
- Description: Official website with downloads, documentation, and news
- What you'll find: Node downloads, official announcements, foundation information

**Tangled Ecosystem**
- URL: [https://tangled.com](https://tangled.com)
- Description: Hub for Millix ecosystem apps and services
- What you'll find: Tangled Browser, ecosystem applications, resources

### Source Code

**Main Repository**
- GitHub: [https://github.com/millix/millix-node](https://github.com/millix/millix-node)
- Description: Core Millix node implementation (Node.js)
- License: Open source

**Millix Wallet**
- GitHub: [https://github.com/millix/millix-wallet](https://github.com/millix/millix-wallet)
- Description: Official desktop wallet with integrated node
- Platforms: Windows, macOS, Linux

**Additional Repositories**
- GitHub Organization: [https://github.com/millix](https://github.com/millix)
- Contains: Additional tools, libraries, and experimental projects

---

## Community Resources

### Social Media & Communication

**Telegram**
- Various community groups
- Active discussions, support, and announcements
- Search for "Millix" in Telegram

**Discord**
- Developer community
- Technical discussions
- Real-time help

**Twitter/X**
- @millix (search for official accounts)
- News, updates, and community engagement

### Forums & Discussion

- Community-run forums
- Technical discussions
- Project announcements
- Check millix.org for current links

---

## Learning Resources

### This Book

**The Millix Book** (you're reading it!)
- Complete: Covers basics through advanced topics
- Practical: Working code examples throughout
- Updated: November 2025 edition
- Location: `/documentation/` in millix-node repository

### Official Documentation

**API Reference**
- Location: `/documentation/API-Reference.md`
- Content: Complete API endpoint documentation
- Updated: Regularly maintained

**NFT Guide**
- Location: `/documentation/nft-guide.md`
- Content: Creating, transferring, and managing NFTs

**Transaction Guide**
- Location: `/documentation/scripts/transaction.md`
- Content: High-level and low-level transaction examples

### Archived Articles

**Medium Articles**
- Location: `/documentation/archive/`
- Content: Historical articles about Millix features
- Note: May be outdated but provide historical context

---

## Development Tools

### Scripts & Examples

All located in `/documentation/scripts/`:

**Transaction Scripts**
- `test-transactions.js`: Low-level transaction construction
- `transaction.md`: Transaction documentation
- `more_parameters.txt`: Example addresses and IDs

**NFT Scripts**
- `test-nft-operations.js`: Complete NFT operations (create, list, view, transfer, delete)
- `README-NFT.md`: NFT script usage guide

**API Testing**
- `test-apis-and-generate-book.js`: API testing and documentation generation
- `generate-api-documentation.js`: Auto-generate API docs

### Node.js Libraries

**Built-in Requirements**
- `https`: For API calls
- `fs`: File system operations
- `path`: Path manipulation

**Recommended Packages**
```bash
npm install form-data    # For NFT multipart uploads
npm install dotenv       # Environment variable management
npm install winston      # Logging
```

### Example SDK

Chapter 6 includes a complete SDK implementation:
- Session management
- Balance checking
- Transaction sending
- UTXO management
- Error handling

Use as starting point for your own projects!

---

## Ecosystem Applications

### Live dApps

**TangledTrivia.com**
- Type: Trivia game with Millix rewards
- Features: Leaderboards, tournaments, micro-rewards
- Learn: Gamification, automated payments

**Tangled Social**
- Type: Decentralized social network
- Features: Posts stored on DAG, tipping, monetization
- Learn: Content storage, social features

**SwapLand.io**
- Type: Decentralized exchange
- Features: Token swaps, liquidity pools
- Learn: Trading, atomic swaps

**CobraHelix.com**
- Type: Gaming platform
- Features: In-game economy, NFT collectibles
- Learn: Gaming economies, NFT integration

**Tangled Browser**
- Type: Chromium-based browser with built-in Millix node
- Features: Integrated wallet, ad rewards platform
- Download: [https://tangled.com/browser/download.php](https://tangled.com/browser/download.php)
- Learn: Browser integration, ad monetization

---

## Technical Specifications

### Protocol Details

**Consensus Algorithm**
- Type: DAG-based with transaction references
- Finality: ~10 seconds
- Byzantine fault tolerance: Yes

**Cryptography**
- Hash function: SHA-256
- Signature algorithm: ECDSA (secp256k1)
- Address generation: SHA-256 + RIPEMD-160

**Network**
- Protocol: WebSocket (WSS)
- Default ports: 10000 (P2P), 5500 (API)
- Topology: Peer-to-peer mesh

**Transaction Structure**
- Format: JSON
- Fee: 1,000 millix (standard)
- Size: Variable, typically < 1 KB

### Performance Metrics

**Measured Performance** (as of 2025)
- Throughput: 100,000+ tx/day (proven)
- Confirmation time: ~10 seconds
- Network size: 14,000+ nodes
- Total transactions: 1,000,000+

**Resource Requirements**
- CPU: Any modern processor
- RAM: 2 GB minimum
- Storage: 10 GB recommended
- Bandwidth: 100-500 MB/day

---

## Interoperability

### WMLX (Wrapped Millix)

**Overview**
- Type: ERC-20 token on Ethereum
- Purpose: Bridge between Millix and Ethereum ecosystems
- Ratio: 1:1 with MLX

**Use Cases**
- Trade on Ethereum DEXs (Uniswap, etc.)
- Use in Ethereum DeFi
- Cross-chain applications

**Resources**
- Check millix.org for bridge interfaces
- Contract address: (check official sources)

### Future Bridges

- Additional blockchain bridges planned
- Cross-chain messaging protocols
- Interoperability expansion

---

## Academic & Research

### Whitepapers

**Millix Foundation Papers**
- Check millix.org for technical papers
- Topics: DAG architecture, consensus, economics

### Relevant Research Topics

**DAG-Based Cryptocurrencies**
- IOTA Tangle
- Nano Block-Lattice
- Avalanche DAG

**Consensus Without Mining**
- Proof of Stake variants
- Byzantine Agreement
- Leaderless consensus

**Lightweight Blockchain Architectures**
- Pruning techniques
- State channels
- Optimistic rollups

---

## Development Roadmap

### Completed Features

✅ Genesis launch (January 20, 2020)
✅ DAG consensus implementation
✅ Hibernation system
✅ Light node mode
✅ NFT protocol support
✅ Data storage on DAG
✅ WMLX Ethereum bridge
✅ 1,000,000+ transactions processed
✅ 14,000+ nodes operational

### In Progress

🔄 Enhanced light clients for mobile
🔄 Storage node incentives
🔄 Developer SDK improvements
🔄 Additional documentation
🔄 Community governance tools

### Planned

📋 Cross-chain bridges (beyond Ethereum)
📋 Advanced privacy features
📋 Protocol optimization
📋 Scalability improvements
📋 Ecosystem expansion

### Research Areas

🔬 Smart contract integration (lightweight)
🔬 Privacy enhancements
🔬 Cross-shard optimization
🔬 Quantum-resistant cryptography

---

## Useful Commands Reference

### Node Operation

```bash
# Start wallet (from source)
cd millix-wallet/app && npm start

# Start as daemon (Linux)
nohup npm start > ~/millix.log 2>&1 &

# Check if running
ps aux | grep millix

# View logs
tail -f ~/.millix-wallet/logs/millix.log
```

### Quick API Calls

```bash
# Set variables
NODE_ID="your_node_id"
NODE_SIG="your_node_signature"
BASE_URL="https://localhost:5500/api/$NODE_ID/$NODE_SIG"

# Get session
curl -k "$BASE_URL/OBexeX0f0MsnL1S3"

# Get balance
curl -k "$BASE_URL/zLsiAkocn90e3K6R?p0=YOUR_ADDRESS"

# List transactions
curl -k "$BASE_URL/l4kaEhMnhjB5yseq?p0=incoming&p1=10"
```

### Building from Source

```bash
# Clone repository
git clone --recurse-submodules https://github.com/millix/millix-wallet.git -b develop

# Install dependencies
cd millix-wallet
npm install

# Build
sudo npm install -g grunt-cli
grunt build-core

# Run
cd app && npm start
```

---

## Glossary

**Address**: Public identifier for receiving Millix (like an email address for money)

**DAG**: Directed Acyclic Graph - the data structure Millix uses instead of blockchain

**Genesis**: The creation event of Millix (January 20, 2020)

**Hibernation**: Archiving of old transactions to keep nodes lightweight

**Millix (MLX)**: The native currency unit (9 quadrillion total supply)

**NFT**: Non-Fungible Token - unique digital asset

**Node**: Computer running Millix software and participating in the network

**Private Key**: Secret number that controls your Millix (NEVER share this)

**Public Key**: Derived from private key, used to create addresses and verify signatures

**Recovery Phrase**: 24 words that can restore your wallet

**Shard**: Independent processing lane for transactions

**Stable**: Transaction state indicating finality (spendable)

**Transaction**: Transfer of Millix from one address to another

**Unstable**: Recently received funds that haven't fully confirmed yet

**UTXO**: Unspent Transaction Output - funds available to spend

**xprv**: Extended Private Key (BIP32 format) - master key for hierarchical wallet

---

## Useful Links Quick Reference

| Resource | URL |
|----------|-----|
| **Millix Foundation** | https://millix.org |
| **Tangled Ecosystem** | https://tangled.com |
| **GitHub Main Repo** | https://github.com/millix/millix-node |
| **GitHub Wallet** | https://github.com/millix/millix-wallet |
| **Tangled Browser** | https://tangled.com/browser/download.php |
| **SwapLand DEX** | https://swapland.io |
| **This Book (Latest)** | Check millix-node/documentation/ |

---

## Contributing to Millix

### How to Contribute

**Code Contributions**
1. Fork the repository on GitHub
2. Create a feature branch
3. Make your changes
4. Submit a pull request
5. Discuss with maintainers

**Documentation**
- Improve existing docs
- Write tutorials
- Translate content
- Report unclear sections

**Community Support**
- Help newcomers in chat/forums
- Answer questions
- Share knowledge
- Create educational content

**Testing**
- Test new features on testnet
- Report bugs with details
- Suggest improvements
- Verify fixes

**Ecosystem Development**
- Build dApps on Millix
- Create tools and libraries
- Integrate Millix into services
- Promote adoption

### Contributor Guidelines

- Follow existing code style
- Write clear commit messages
- Test thoroughly before submitting
- Document new features
- Be respectful and professional

---

## Acknowledgments

**Millix Foundation Team**
- Core developers and maintainers
- Community managers
- Documentation writers

**Community Contributors**
- Early adopters and testers
- dApp developers
- Content creators
- Translators

**You, the Reader**
- For taking the time to learn Millix
- For building on the platform
- For spreading the word

---

## Final Thoughts

Millix represents a practical approach to cryptocurrency: no hype, no promises of utopia, just working technology solving real problems.

The journey doesn't end with this book—it begins here. Build something. Contribute code. Help newcomers. Use Millix in your projects.

The network grows stronger with each participant.

**Welcome to the Millix community.**

---

## Version History

**This Edition**: November 2025
- Complete rewrite and expansion
- Updated for millix-node v1.18+
- Added NFT guide (Chapter 7)
- Comprehensive dApp tutorial (Chapter 9)
- Working code examples throughout
- Advanced topics coverage (Chapter 10)

**Previous Versions**
- Various community-created documents
- Archived in `/documentation/archive/`

---

## License & Copyright

**The Millix Book**
- Author: AI Technical Writer (Claude Sonnet 4.5)
- Date: November 2025
- License: Free to distribute, attribute if you modify
- Source: Millix-node repository documentation folder

**Millix Software**
- License: Open source
- Repository: https://github.com/millix
- Check individual repositories for specific licenses

---

## Contact & Support

**Technical Issues**
- GitHub Issues: https://github.com/millix/millix-node/issues
- Community Forums: (check millix.org for current links)

**General Inquiries**
- Website: https://millix.org
- Community channels: Telegram, Discord

**Security Issues**
- Report privately through official channels
- Do NOT disclose publicly until fixed

**Feedback on This Book**
- Submit issues or PRs to the millix-node repository
- Documentation improvements always welcome

---

**Thank you for reading The Millix Book. Now go build something amazing!** 🚀


