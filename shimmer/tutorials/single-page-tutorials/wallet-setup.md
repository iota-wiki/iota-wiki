# Setup a Testnet Address and Receive Funds from the 
 Faucet

In this tutorial, you will [create a new mnemonic seed phrase](#create-mnemonic-script) to set up a Stronghold account with the [NodeJS binding of wallet.rs](https://github.com/iotaledger/wallet.rs/tree/develop/bindings/nodejs). Afterward, you will [generate a new address](#3-create-address), [request funds from the Shimmer testnet faucet](#request-tokens-from-faucet), and [check your account balance](#check-balance-again).

## Prerequisites

### Development Environment and Libraries

- [Node.js](https://nodejs.org/en/)

***

## Set Up

### Prepare Your Development Environment

1. Create a new folder for the tutorial in a location of your choice and navigate to it:

```bash
mkdir wallet-setup
cd wallet-setup
```

2. Run the Node.js initializer to configure the project:

```bash
npm init --yes
```

3. Overwrite the `package.json` file with the following content:


```json {6-12}
{
  "name": "wallet-setup",
  "version": "1.0.0",
  "description": "",
  "main": "create-mnemonic.js",
  "dependencies": {
    "@iota/wallet": "2.0.2-alpha.21",
    "bip39": "^3.0.4",
    "dotenv": "^16.0.1",
    "node-fetch": "^2.6.7"
  },

  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "Apache-2.0"
}
```

4. Install new dependencies by running the following command:
:::note

The installation might take a while if there is no prebuilt wallet NPM package for your combination of OS and NodeJS version.

:::
```bash
npm install
```

***

### Prepare the Network Configuration

Create a new file `networkConfig.js` and add the following code:

```javascript
var networkConfig = {};

// Shimmer Beta network configuration
networkConfig.node = 'https://api.testnet.shimmer.network';
networkConfig.faucetWebsite = 'https://faucet.testnet.shimmer.network';
networkConfig.faucetApi = 'https://faucet.testnet.shimmer.network/api/enqueue';
networkConfig.explorer = 'https://explorer.shimmer.network/testnet';

module.exports = { networkConfig };
```

***

### Prepare the Environment Variables

Create a new `.env` file  and add the content below:

```javascript
ACCOUNT_NAME = "<Enter_your_name_here>"
SH_PASSWORD = "<Enter_your_password_here>"
MNEMONIC = "<You_will_create_your_own_mnemonic_seed_phrase_in_the_next_step_and_paste_it_in_here>"
```

Enter your desired account name as well as a secure Stronghold password. You will create your new mnemonic seed phrase in the next step and paste it here afterward.

***

## Scripts

### Create Mnemonic Script

Create a new file called `create-mnemonic.js`, and add the following code:

```javascript
// Libraries
const bip39 = require('bip39')
 
// For better readability, some console output will be printed in a different color
const consoleColor = '\x1b[36m%s\x1b[0m';


async function run() {
	// A 256-bits entropy leads to a 24 word mnemonic seed phrase
	const mnemonic = bip39.generateMnemonic(256);
	console.log(consoleColor, 'Copy your mnemonic seed phrase and paste it into the .env file:');
	console.log(mnemonic, '\n');
}

run();
```

Run the script `create-mnemonic.js` and check the console output for your new mnemonic seed phrase:
```console
node create-mnemonic.js
```
You can now copy the seed phrase and paste it into the previously [created `.env` file](#prepare-environment-variables).


***

### Setup Account Script

Create a new file called `setup-account.js` and add the following code:

:::note

We broke the code into separate snippets to help you understand it better. To make it work, copy all code snippets one after another into the file you have just created.


:::

#### 1. Imports and parameters

This part imports all necessary packages, network configuration parameters, and environment variables.

```javascript
// Libraries
 const { AccountManager, CoinType } = require('@iota/wallet');

// Network configuration
const { networkConfig } = require("./networkConfig.js");
const nodeURL = networkConfig.node;
 
// Environment variables
require('dotenv').config({ path: './.env' });
const password = process.env.SH_PASSWORD;
const mnemonic = process.env.MNEMONIC;
const accountName = process.env.ACCOUNT_NAME;

// For better readability, some console output will be printed in a different color
const consoleColor = '\x1b[36m%s\x1b[0m';
```

#### 2. Create an account

This part of the code will:

1. Create a new account manager with defined options 
2. Store your mnemonic seed phrase.

```javascript
async function run() {
    // Define the account manager options with the imported network configuration and environment variables
    const accountManagerOptions = {
        storagePath: `./${accountName}-database`,
        clientOptions: {
            nodes: [nodeURL],
            localPow: true,},
        coinType: CoinType.Shimmer,
        secretManager: {
            Stronghold: {
                snapshotPath: `./wallet.stronghold`,
                password: `${password}`,
            },
        },
    };

    // Create a new account manager
    const manager = new AccountManager(accountManagerOptions);

    // Store your mnemonic seed phrase in Stronghold
    await manager.storeMnemonic(mnemonic);

    // Create a new account with your set account name
    const account = await manager.createAccount({
      alias: accountName,
    });
    console.log(consoleColor, `${accountName}'s account:`);
    console.log(account, '\n');
```

#### 3. Create address

This step creates a new address in your account.

```javascript
    // Generate a new address for your account
	const address = await account.generateAddress();
	console.log(consoleColor, `${accountName}'s new address:`);
	console.log(address.address, '\n');

	process.exit(0);
}

run();
```

#### Run the script

Run the script `setup-account.js` and check the console output:

```console
node setup-account.js
```


Stronghold will create a new wallet database folder, `<accountName>-database`, and a snapshot file called `wallet.stronghold`, which safely stores your mnemonic seed phrase.


The console output should look similar to this:

```json
<account_name>'s account:
Account {
  meta: {
    index: 0,
    coinType: 4219,
    alias: '<account_name>',
    publicAddresses: [ [Object] ],
    internalAddresses: [],
    addressesWithUnspentOutputs: [],
    outputs: {},
    lockedOutputs: [],
    unspentOutputs: {},
    transactions: {},
    pendingTransactions: [],
    incomingTransactions: {}
  },
  messageHandler: MessageHandler { messageHandler: [External: 277668a8e40] }
} 

<account_name>'s new address:
<your_new_address>
```
You can see your new account and the generated address, which you will use to receive funds from the faucet. Before you request funds, let's check your account balance.

***

### Check Balance Script


Create a new file called `check-balance.js` and add the following code:

:::note

We broke the code into separate snippets to help you understand it better. To make it work, copy all code snippets one after another into the file you have just created.

:::

#### 1. Imports and parameters

This part imports all necessary packages, network configuration parameters and environment variables.

```javascript
// Libraries
const { AccountManager } = require('@iota/wallet');

// Environment variables
require('dotenv').config({ path: './.env' });
const password = process.env.SH_PASSWORD;
const accountName = process.env.ACCOUNT_NAME;

// For better readability, some console output will be printed in a different color
const consoleColor = '\x1b[36m%s\x1b[0m';
```

#### 2. Import Stronghold account

The following part of the script will create a new account manager from the previously created Stronghold database path.

```javascript
async function run() {
    // Create a new account manager from existing database path
    const manager = new AccountManager({
        storagePath: `./${accountName}-database`,
    });

    // Pass password to manager
    await manager.setStrongholdPassword(password);

    // Get specific account from account manager
    const account = await manager.getAccount(accountName);
```

#### 3. Get balance

This script will synchronize your account and fetch the balance for the imported account.

```javascript
    // Always sync before getting the account balance
    await account.sync();
    const balance = await account.getBalance();

    console.log(consoleColor, `${accountName}'s Balance:`);
    console.log(balance, '\n');

    process.exit(0);
};

run();
```

#### Run the script

You can now run the `check-balance.js`  script and check the console output:

```console
node check-balance.js
```

If you [created a new mnemonic seed phrase](#create-mnemonic-script)  at the beginning of this tutorial, you should see an entirely empty balance on your account.

```json
<Account Name>'s Balance:
{
  baseCoin: { total: '0', available: '0' },
  requiredStorageDeposit: '0',
  nativeTokens: [],
  nfts: [],
  aliases: [],
  foundries: [],
  potentiallyLockedOutputs: {}
}
```

***

## Request Tokens from the Faucet


Below you can find two ways to request funds from the [Shimmer testnet faucet](https://faucet.testnet.shimmer.network/). You can either [request funds via the Shimmer faucet website](#request-tokens-via-faucet-website) or programmatically by directly [calling the API of the faucet](#request-tokens-via-faucet-api).

### Request Tokens via the Faucet Website

After you have [set up your account](#setup-account-script), you can go to the [Shimmer Testnet Faucet Website](https://faucet.testnet.shimmer.network/), paste in your newly created address, and request funds.

:::note

The 'Request' button will become clickable as soon as a valid Shimmer address is recognized.

:::

![Shimmer Testnet Faucet](./images/shimmer-testnet-faucet.png)

***

### Request Tokens via the Faucet API

Create a new file called `request-faucet.js`, add the code below, and replace the `receivingAddress` variable.

Make sure to paste your previously generated address into the variable `receivingAddress`. The function `requestFunds` receives the URL of the faucet API and a valid Shimmer testnet address and sends a request to the faucet API for tokens.


```javascript
// Libraries
const fetch = require("node-fetch");

// Network configuration
const { networkConfig } = require("./networkConfig.js");
const faucetApi = networkConfig.faucetApi;

// Address to receive faucet tokens
const receivingAddress = '<paste_your_previously_generated_address_here>';


async function run() {
    const request = await requestFunds(faucetApi, receivingAddress);
    console.log(request);
}

// Request tokens from faucet via API call
async function requestFunds(faucetUrl, addressBech32) {
    const requestFunds = await fetch(faucetUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ address: addressBech32 })
        });

    return await requestFunds.json();
}

run();
```

#### Run the script

Run the script `request-faucet.js` and check the console output:


```console
node request-faucet.js
```

If the request was successfull, the console output should look similar to this:

```json
{
  address: '<your_address>',
  waitingRequests: 1
}
```

***

### Check Your Account Balance Again

After a few seconds you can check your balance again by running [the `check-balance.js` script](#check-balance-script):


```console
node check-balance.js
```

If the faucet successfully transferred testnet tokens to your address, your balance should look similar to the content below. If the total balance for the `baseCoin` is still 0, repeat the process of running the `check-balance.js` script since it might take a little time for the funds to be transferred.

```json
<account_name>'s Balance:
{
  baseCoin: { total: '1000000000', available: '1000000000' },
  requiredStorageDeposit: '42600',
  nativeTokens: [],
  nfts: [],
  aliases: [],
  foundries: [],
  potentiallyLockedOutputs: {}
}
```

Congratulations, your account is now ready to explore other exciting features of the Shimmer network, such as native tokens and NFTs on L1.