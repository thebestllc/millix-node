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



