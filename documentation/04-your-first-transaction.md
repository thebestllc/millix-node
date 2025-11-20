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



