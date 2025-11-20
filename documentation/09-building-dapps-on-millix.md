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


