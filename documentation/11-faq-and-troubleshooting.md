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


