# Base Framework Research & Development

## Contents:
- [Basic Smart-Contract Framework](#basic-smart-contract-framework)
- [Exchange Launching](#exchange-launching)
- [Probable Reference](#probable-reference-to-algorithmic-stablecoins)



## Combinatorial Mechanics Algorithms

### Combinatorial Algorithm Guide:




#### Step 1: Divide Balances by Tokens (Total)
```
Wallet 1 Balance / Wallet 1 Tokens 
  returns Wallet 1 Token Value
  
Wallet 2 Balance / Wallet 2 Tokens 
  returns Wallet 2 Token Value
```



#### Step 2: Multiply Token Values by Tokens Exchanged
```
Wallet 1 Token Value * Wallet 1 Tokens Exchanged 
  returns Wallet 1 Value To-Be-Added to Wallet 2 Balance
  
Wallet 2 Token Value * Wallet 2 Tokens Exchanged
  returns Wallet 2 Value To-Be-Added to Wallet 1 Balance
```



#### Step 3: Compare/Contrast Wallet Tokens, then Exchange Tokens
```
If 
Wallet 1 Tokens < Wallet 1 Tokens Exchanged 
  and/or
Wallet 2 Tokens < Wallet 2 Tokens Exchanged
  return error  
  
Else If 
Wallet 1 Tokens Exchanged == null
  and/or
Wallet 2 Tokens Exchanged == null  
  return error
  
Else 
Wallet 1 Tokens >= Wallet 1 Tokens Exchanged 
  and
Wallet 2 Tokens >= Wallet 2 Tokens Exchanged   
  New Wallet 1 Tokens == Wallet 1 Tokens - Wallet 1 Tokens Exchanged
  New Wallet 2 Tokens == Wallet 2 Tokens - Wallet 2 Tokens Exchanged
  Wallet 1 Tokens == New Wallet 1 Tokens
  Wallet 2 Tokens == New Wallet 2 Tokens
```



#### Step 4: Update Balances (EXCHANGE)

```
//Wallet Balance Mechanics Never Decrease in Value (Mechanics-To-Be-Updated)
New Wallet 2 Balance == Wallet 2 Balance  + Wallet 1 Value To-Be-Added to Wallet 2 Balance
New Wallet 1 Balance == Wallet 1 Balance  + Wallet 2 Value To-Be-Added to Wallet 1 Balance

If 
New Wallet 1 Balance > 999,999,999.99
  and/or
New Wallet 2 Balance > 999,999,999.99
  return error  
  break
  
Else
Wallet 1 Balance == New Wallet 1 Balance
Wallet 2 Balance == New Wallet 2 Balance


```

## Basic Smart-Contract Framework:

```solidity
pragma solidity ^0.4.0;
import "./ERC20.sol";
contract myToken is ERC20{
  mapping(address =&gt;uint256) public amount;
  uint256 totalAmount;
  string tokenName;
  string tokenSymbol;
  uint256 decimal;
    constructor() public{
      totalAmount = 10000 * 10**18;
      amount[msg.sender]=totalAmount;
      tokenName="Mytoken";
      tokenSymbol="Mytoken";
      decimal=18;
    }
  function totalSupply() public view returns(uint256){
      return totalAmount;
  }
  function balanceOf(address to_who) public view returns(uint256){
      return amount[to_who];
  }
  function transfer(address to_a,uint256 _value) public returns(bool){
      require(_value&lt;=amount[msg.sender]);
      amount[msg.sender]=amount[msg.sender]-_value;
      amount[to_a]=amount[to_a]+_value;
      return true;
  }
}
```
### Steps to test an Ethereum smart contract
1. Try to run all your smart contract methods like transfer, total supply, and balance(in the above smart contract example). These methods are present at the right-hand side of the remix window and you can run all the processes from there itself.
2. Try to transfer some tokens to other ethereum wallet addresses and then check the balance of that address by calling the balance method.
3. Try to get total supply by running the total supply method.

### Steps to deploy Ethereum Smart Contracts
1. To make your smart contract live, switch to the main ethereum network at metamask
2. Add some real ethers.
3. Now again, deploy your smart contract using remix as mentioned in the above steps.
4. When a smart contract is deployed successfully, visit http://www.etherscan.io and search your smart contract address there. Select your smart contract.
5. Now you need to verify your smart contract here, click “verify the contract.”
6. Copy your smart contract code and paste it at Etherscan. Select the same compiler version that you selected at remix to compile your code.
7. Check “optimization” to Yes, if you had selected optimization at remix; otherwise, select No.
8. Click Verify.
9. It will take a few minutes and your smart contract will be live if no issue occurs.
10. You can now run your smart contract methods at Etherscan.

### Tools and Technologies
#### Truffle
An Ethereum development framework that allows developers to write and test smart contracts. Written in JavaScript, Truffle contains a compiler for the Solidity programming language. Truffle Contract is a JavaScript library that allows importing of compiled smart contracts.
#### Web3.js
An Ethereum JavaScript API that interacts with the Ethereum network via RPC calls.
#### Visual Studio Code
A functional code editor.
#### Ganache CLI
An Ethereum remote procedure call client within the Truffle framework that is also known as TestRPC.
#### Parity
A secure and fast Ethereum client for handling Ethereum accounts and tokens.
#### Node.js
A javascript runtime environment used for server-side programming. Node.js is required to test the Ethereum smart contract’s functionality while ensuring its secure and proper operation. You need to install a package manager, for example, Yarn along with Node.js.

### Expanded Steps:

#### Total Supply
For the needs of our ECR20 tutorial, we shall use the simplest approach: Set the total amount of tokens at contract creation time and initially assign all of them to the “contract owner” i.e. the account that deployed the smart contract:

```solidity
uint256 totalSupply_;
constructor(uint256 total) public {
   totalSupply_ = total;
   balances[msg.sender] = _totalSupply;
}
```

A constructor is a special function automatically called by Ethereum right after the contract is deployed. It is typically used to initialize the token’s state using parameters passed by the contract’s deploying account.

msg is a global variable declared and populated by Ethereum itself. It contains important data for performing the contract. The field we are using here: msg.sender contains the Ethereum account executing the current contract function.

Only the deploying account can enter a contract’s constructor. When the contract is started up, this function allocates available tokens to the ‘contract owner’ account.

#### Set the events of the token
We will declare the events Transfer and Approval inside our contract:

```solidity
event Transfer(address indexed from, address indexed to, uint tokens);

event Approval(address indexed tokenOwner, address indexed spender, uint tokens);
```

#### Set the name, symbol, and decimal of the token

Next, we set the name of our token, its symbol, and the decimal to use:

```solidity
string public constant name = "ND Coin";
string public constant symbol = "NDN";
uint8 public constant decimals = 18;
```

Our token name is ND Coin and our symbol is NDN. We set the decimals to be 18.

#### Set the balances and allowances map

```solidity
mapping(address => uint256) balances;

mapping(address => mapping (address => uint256)) allowed;
```

A mapping in Solidity is similar to a key-value pair. So in the balances, an address is the key while the uint256 (unsigned integer of 256 bits) is the value.

According to the Solidity docs, an address type is a 160-bit value that does not allow any arithmetic operations. It is suitable for storing addresses of contracts, or a hash of the public half of a key pair belonging to external accounts.

The balances maps an address to a uint256 int:

```
Address	uint256
0x01	23
0x02	10
0x03	2
```

An address refers to its balance. The allowed mapping is also a key-value pair that maps addresses to another mapping. This last mapping maps addresses to their unit256 values. It allows you to store the number of tokens that can be transferred to a recipient.

#### Declare the total supply
The next line of code is as follows:

```solidity
uint256 totalSupply_;
```

This stores the number of tokens that are available in our contract.

#### Set the amount of the total supply and the balances
Next, we have the constructor. We know that constructors are called when the class is being created. In smart contracts, the constructor is called when the contract is deployed to the network.

```solidity
constructor(uint256 total) {
  totalSupply_ = total;
  balances[msg.sender] = totalSupply_;
}
```

Here, the constructor is called with the total number of tokens we want to be in our contract (total). The total is set to `totalSupply_`, and the balance of the deploying address is set to the total tokens. The `msg.sender` contains the Ethereum account of the currently executing contract function.

#### Get Total Token Supply
```solidity
function totalSupply() public view returns (uint256) {
  return totalSupply_;
}
```
This function will return the number of all tokens allocated by this contract regardless of owner.

#### Get Token Balance of Owner
```solidity
function balanceOf(address tokenOwner) public view returns (uint) {
  return balances[tokenOwner];
}
```

`balanceOf` will return the current token balance of an account, identified by its owner’s address.

#### Approve a token transfer

The next method is approve:
```solidity
function approve(address delegate, uint numTokens) public returns (bool) {
    allowed[msg.sender][delegate] = numTokens;
    emit Approval(msg.sender, delegate, numTokens);
    return true;
}
```

This method has arguments called delegate and numTokens.

- `delegate` is the address we want to set the number of tokens that the deployer can send to it
- `numTokens` is the number of tokens the deployer can send to the `delegate`
- 
In the method body, we reference the `delegate` map in the `allowed` mapping to set the number of tokens to it. Then, we emit the `Approval` event and return true.

#### Get the allowance status of an account

The method is `allowance`:

```solidity
function allowance(address owner, address delegate) public view returns (uint) {
    return allowed[owner][delegate];
}
```

This method has the following arguments: `owner` and `delegate`. `owner` is the address to return the number of tokens transferable to the recipient in the `delegate`.

#### Transfer tokens from an account to another account
The method to transfer tokens from one account to another is `transferFrom`:

```solidity
function transferFrom(address owner, address buyer, uint numTokens) public returns (bool) {
    require(numTokens <= balances[owner]);
    require(numTokens <= allowed[owner][msg.sender]);
    balances[owner] -= numTokens;
    allowed[owner][msg.sender] -= numTokens;
    balances[buyer] += numTokens;
    emit Transfer(owner, buyer, numTokens);
    return true;
}
```

`transferFrom` has args called `owner`, `buyer` and `numTokens`.

- `owner` is the address of the balances from which we will transfer the `numTokens` 
- `buyer` is the address in the balances that we will credit the `numTokens` `numTokens` is the number of tokens to be transferred from `owner` to `buyer`.

In the method body, we first check whether the balance in the owner is enough and whether the owner is approved to send that amount of tokens to the buyer.

Next, the transfer is made by subtracting the number of tokens from the owner’s balance and allowed balance. Then, the number of tokens is added to the buyer’s balance. The `Transfer` event is emitted and the boolean `true` is returned.

##### Full Code:

```solidity
contract NDCoinERC20 {

    event Transfer(address indexed from, address indexed to, uint tokens);
    event Approval(address indexed tokenOwner, address indexed spender, uint tokens);

    string public constant name = "ND Coin";
    string public constant symbol = "NDN";
    uint8 public constant decimals = 18;

    mapping(address => uint256) balances;

    mapping(address => mapping (address => uint256)) allowed;

    uint256 totalSupply_;

    constructor(uint256 total) {
      totalSupply_ = total;
      balances[msg.sender] = totalSupply_;
    }

    function totalSupply() public view returns (uint256) {
      return totalSupply_;
    }

    function balanceOf(address tokenOwner) public view returns (uint) {
        return balances[tokenOwner];
    }

    function transfer(address receiver, uint numTokens) public returns (bool) {
        require(numTokens <= balances[msg.sender]);
        balances[msg.sender] -= numTokens;
        balances[receiver] += numTokens;
        emit Transfer(msg.sender, receiver, numTokens);
        return true;
    }

    function approve(address delegate, uint numTokens) public returns (bool) {
        allowed[msg.sender][delegate] = numTokens;
        emit Approval(msg.sender, delegate, numTokens);
        return true;
    }

    function allowance(address owner, address delegate) public view returns (uint) {
        return allowed[owner][delegate];
    }

    function transferFrom(address owner, address buyer, uint numTokens) public returns (bool) {
        require(numTokens <= balances[owner]);
        require(numTokens <= allowed[owner][msg.sender]);

        balances[owner] -= numTokens;
        allowed[owner][msg.sender] -= numTokens;
        balances[buyer] += numTokens;
        emit Transfer(owner, buyer, numTokens);
        return true;
    }
}
```

#### Approve Delegate to Withdraw Tokens
This function is most often used in a token marketplace scenario.

```solidity
function approve(address delegate,
                uint numTokens) public returns (bool) {
  allowed[msg.sender][delegate] = numTokens;
  emit Approval(msg.sender, delegate, numTokens);
  return true;
}
```

What approve does is to allow an owner i.e. msg.sender to approve a delegate account — possibly the marketplace itself — to withdraw tokens from his account and to transfer them to other accounts.

As you can see, this function is used for scenarios where owners are offering tokens on a marketplace. It allows the marketplace to finalize the transaction without waiting for prior approval.

At the end of its execution, this function fires an Approval event.

#### Get Number of Tokens Approved for Withdrawal

```solidity
function allowance(address owner,
                  address delegate) public view returns (uint) {
  return allowed[owner][delegate];
}
```

This function returns the current approved number of tokens by an owner to a specific delegate, as set in the approve function.

#### Transfer Tokens by Delegate

The transferFrom function is the peer of the approve function, which we discussed previously. It allows a delegate approved for withdrawal to transfer owner funds to a third-party account.

```solidity
function transferFrom(address owner, address buyer,
                     uint numTokens) public returns (bool) {
  require(numTokens <= balances[owner]);
  require(numTokens <= allowed[owner][msg.sender]);
  balances[owner] = balances[owner] — numTokens;
  allowed[owner][msg.sender] =
        allowed[from][msg.sender] — numTokens;
  balances[buyer] = balances[buyer] + numTokens;
  Transfer(owner, buyer, numTokens);
  return true;
}
```

The two require statements at function start are to verify that the transaction is legitimate, i.e. that the owner has enough tokens to transfer and that the delegate has approval for (at least) numTokens to withdraw.

In addition to transferring the numTokens amount from owner to buyer, this function also subtracts numTokens from the delegate’s allowance. This basically allows a delegate with a given allowance to break it into several separate withdrawals, which is typical marketplace behavior.

We could stop here and have a valid ERC20 implementation. However, we want to go a step further, as we want an industrial strength token. This requires us to make our code a bit more secure, though we will still be able to keep the token relatively simple, if not basic.

#### SafeMath Solidity Library

SafeMath is a Solidity library aimed at dealing with one way hackers have been known to break contracts: integer overflow attack. In such an attack, the hacker forces the contract to use incorrect numeric values by passing parameters that will take the relevant integers past their maximal values.

SafeMath protects against this by testing for overflow before performing the arithmetic action, thus removing the danger of overflow attack. The library is so small that the impact on contract size is minimal, incurring no performance and little storage cost penalties.

```solidity
library SafeMath { // Only relevant functions
function sub(uint256 a, uint256 b) internal pure returns (uint256) {
  assert(b <= a);
  return a — b;
}
function add(uint256 a, uint256 b) internal pure returns (uint256)   {
  uint256 c = a + b;
  assert(c >= a);
  return c;
}
}
```

SafeMath uses `assert` statements to verify the correctness of the passed parameters. Should assert fail, the function execution will be immediately stopped and all blockchain changes shall be rolled back.

Next, let us add the following statement introducing the library to the Solidity compiler:

```solidity
using SafeMath for uint256;
```

Then, we replace the naive arithmetics we used at the beginning with SafeMath functions:

```solidity
balances[msg.sender] = balances[msg.sender].sub(numTokens);
balances[receiver] = balances[receiver].add(numTokens);
balances[buyer] = balances[buyer].add(numTokens);
balances[owner] = balances[owner].sub(numTokens);
```

##### Providing Price Data

https://market.link/

##### PACKING IT ALL TOGETHER
In Solidity, a smart contract’s functions and events are wrapped into an entity called a contract which you can silently translate to a “blockchain class.” Below is the ERC20-compatible contract we created, including a Gist of our code. The name and symbol fields can be changed at will. Most tokens keep the decimal value at 18, so we will do the same.

#### Contract creation
The first and most important part of deploying a smart contract is the actual creation of the contract. According to the Ethereum yellow paper, the base cost of a create operation is a whopping 32,000 gas, and added to that is the base cost of 21,000 gas for entering a new transaction onto the block itself. This alone puts the creation price at 53,000 gas.

Given that: `3,000 Gas * 0.0000001 Ether per Gas * $4000 per Ether = $21.20`

That is $21 for the deployment of the contract itself. This is far from the final cost, as we will see, but this is still a sizeable cost for simply initializing a blank contract.

For larger applications such as a platform like a pancake swap, their application is not a single contract but a collection of contracts all talking and working together. There will be multiple deployments, each of which needs to pay this fee. That is $21 per empty contract. See their open-source repo here:

#### Contract storage
Contracts also need to be stored somewhere. Ethereum has a cost for storage according to the whitepaper of 20,000 gas per 256 bits. A kilobyte of data adds up to a whopping 640,000 gas or just over $250 dollars.

So how big is our contract in this example? We can gauge this by checking similar sizes of other contracts.

Using Ether-scan (a site to explore the state of the chain) to find a few example contracts like so:
https://etherscan.io/tx/0xeed6c791744af81bde027c6bcb2ac927b6d7964535edfc434c060fec7d24de2b
https://etherscan.io/tx/0x28c44bb10d469cbd42accf97bd00b73eabbace138e9d44593e851231fbed1cb7

We can see that these contracts are running about 8KB in length. These are large and popular examples, so our simple example can be smaller, but it’s good to know they exist.
If we were asking for 8KB to store our bytecode at 640,000 gas per KB, we get a price of over $2000!

`8 KB * 640000 Gas Each * 0.0000001 Ether * $4000 = $2048`

That is one expensive contract! The ones I cited there were deployed on particularly high gas-cost days, with one of them guzzling 6 million gas at 300 Gwei each. Not a cheap operation at all.

#### Contract execution
Now that we have committed to deploying the contract and have paid the cost to store it, it’s finally time to run it! The last step for Ethereum is to run the initialization function of the contract. This is a block of code that is written to allocate and variables or do whatever else you want on deployment.
This is the most variable of all the costs as depending on what you want to do here, it could be free, or it could be the largest price by far. 

Allocation of memory for a contract costs 200 Gwei per byte, which is expensive, to say the least. If your application was memory-hungry and wanted to take up a single gigabyte for internal storage it would cost over 80 MILLION DOLLARS:

`1 Billion Bytes * 200 Gas* 0.0000001 Ether * $4000 = $80,000,000`

Choose to be more conservative with memory and take a few kilobytes of data for internal states and user data. What would this cost? $1600.

`20,000 Bytes * 200 Gas Each * 0.0000001 Ether per Gwei * 4000 Dolars`4

#### In Closing
Simply put, Ethereum’s main chain is suffering from multiple compounding issues at once.
1. Ether is surging in price, meaning everything is more expensive when converted to USD.
2. The network has a limited bandwidth, with limited space, this is increasingly causing bidding wars for space on blocks.
3. The network is hitting major network effects. As everyone floods onto the platform, the value of the platform rises, and thus people are willing to pay more and more to join the party.

At the end of the day, deployment to the Ethereum main chain is likely a bad idea for most projects. If you are looking for alternatives, there are many layer-2-chains that boast much lower prices and many of the benefits Ethereum brings.

## Exchange Launching

### MonaLisa AMM Creation

**Try to use ETH/L2 as bridge first.**

https://learn.figment.io/tutorials/create-an-amm-on-avalanche#introduction

Uniswap uses p * q = k, where p is the amount of one token in the liquidity pool, and q is the amount of the other. Here “k” is a fixed constant which means the pool’s total liquidity always has to remain the same. For further explanation let us take an example if an AMM has coin A and Coin B, two volatile assets, every time A is bought, the price of A goes up as there is less A in the pool than before the purchase. Conversely, the price of B goes down as there is more B in the pool. The pool stays in constant balance, where the total value of A in the pool will always equal the total value of B in the pool. The size will expand only when new liquidity providers join the pool.

#### Implementing the smart contract

```solidity
// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract AMM {
    using SafeMath for uint256;
}
```

##### State Variables

Next, we define the state variables needed to operate the AMM. We will be using the same mathematical formula as used by Uniswap to determine the price of the assets (K = totalToken1 * totalToken2). For simplicity purposes, We are maintaining our own internal balance mapping (token1Balance & token2Balance) instead of dealing with the ERC-20 tokens. As Solidity doesn't support floating-point numbers, we will reserve the first six digits of an integer value to represent the decimal value after the dot. This is achieved by scaling the numbers by a factor of 10^6 (PRECISION).

```solidity
uint256 totalShares;  // Stores the total amount of share issued for the pool
uint256 totalToken1;  // Stores the amount of Token1 locked in the pool
uint256 totalToken2;  // Stores the amount of Token2 locked in the pool
uint256 K;            // Algorithmic constant used to determine price (K = totalToken1 * totalToken2)

uint256 constant PRECISION = 1_000_000;  // Precision of 6 decimal places

mapping(address => uint256) shares;  // Stores the share holding of each provider

mapping(address => uint256) token1Balance;  // Stores the available balance of user outside of the AMM
mapping(address => uint256) token2Balance;
```

### Uniswap
Contrary to the traditional architecture of the “order book” model which many crypto exchange platforms use, Uniswap works with the help of the following two components:

- Liquidity Pools
- Constant Product Market Maker Protocol

### Liquidity Pools
Simply defined, liquidity pools refer to token pools locked in smart contracts. They provide liquidity to facilitate trading. Several decentralized exchange platforms use liquidity pools.

### Constant Product Market Maker Protocol
The constant product market maker protocol is a form of the much known automated market maker (AMM) model. Basically, automated market makers are smart contracts that hold liquidity pools. These pools are funded by liquidity providers so that the traders can trade against these pools. Traders pay a fee to the pool in return, which is proportionally divided among the liquidity providers, according to their shares. The constant product market maker protocol works similarly, along with the advantage that any token can be added to Uniswap if it is funded with an equal value of ETH or ERC20 token being traded.

So how does it work?

Liquidity Providers, also known as LPs, form a market by depositing two tokens of equivalent value, which can either be an ETH and an ERC-20 token or two ERC20 tokens. Mostly, these pools are made of stablecoins like DAI. Liquidity providers get liquidity tokens in return, which:

- depict their share in the liquidity pool
- can be redeemed for the share they represent.

The main idea behind Uniswap is that the total liquidity in the liquidity pool must remain constant. Let’s understand this with the help of an example.

The liquidity pool we’ll take into consideration is the ETH/USDT liquidity pool. Let’s refer to the ETH portion as x and the USDT portion as y. To calculate the pool’s total liquidity (which we will consider as k), Uniswap multiplies these two quantities: **x x y = k**

So, if you buy 1 ETH for 300 USDT via the ETH/USDT liquidity pool, you increase the USDT portion and reduce the ETH portion of the pool. This implies that the price of ETH will rise because k must remain constant, so the price of ETH is based on how much shift the given transaction/trade causes between x and y. This is the mechanism that determines the pricing. Hence, it is conceivable that with large liquidity pools, it is easier to process large trades as the shift between x and y is lower as compared to smaller liquidity pools.

This mechanism brings us to the concept of impermanent losses. 

### Impermanent Losses
Liquidity providers earn a fee in exchange for providing liquidity for traders to swap tokens. But often, liquidity providers don’t take every aspect into account while providing liquidity to the pools. One such aspect is impermanent losses, which you’ll understand better with the help of an example.

Suppose there is a pool on Uniswap with 10 ETH and 1,000 USDT, and you deposit 1 ETH and 100 USDT in it. Token pairs have to be of equal value, which implies:

**Price of 1 ETH = 100 USDT**

This implies that you have a 10% share of the pool. The total liquidity here will be 10,000. If a few trades take place and cause a shift in the ratio of USDT and ETH to 2,000 and 5 respectively, the price of 1 ETH will rise to 400 USDT. Why? The reason behind this is precisely what we discussed earlier, i.e., the total liquidity must be constant. So, the arbitrage traders will remove ETH and add USDT to the pool until the ratio stabilizes.

At this price, according to your 10% share, you own 0.5 ETH and 200 USDT (total 400 USDT), which is lesser than what you had deposited (total 500 USDT at this price). The loss here is “impermanent” because as long as you don’t withdraw your funds from the pool, this loss can be recovered or balanced:

- when the price of ETH returns to its original value, i.e., 100 USDT.
- by earning LP fees over time.

However, if you withdraw your funds at this time, then your loss will become permanent as you’ll only receive a total value of 400 USDT.

### Create an Exchange
The first thing you need to do is create an exchange so that Uniswap knows about your token. You may take the following steps to create an exchange:

Step 1: Go to https://uniswap.exchange/ This screen will appear.

Listing Tokens on Uniswap ExchangeStep 2: Connect with your MetaMask Wallet.

Uniswap Exchange - Connect with your MetaMask WalletAs you can see, it will give a few other options to connect a wallet and ask you to download MetaMask if you haven’t done it already.

Step 3: Select the “Pool” option on the upper right corner of the screen.

Step 4: Select “Create Exchange”

Step 5: Press the “Select a Token”option.

Step 6: Enter your token’s address in the “Search Name or Address” field. Now select your token from the dropdown.

Step 7: Click on the “Create Exchange”option.

Step 8: A pop-up will show up. Click on the “Confirm” option.

### Add Liquidity
Now that you have created an exchange for your tokens, it is time to add liquidity. You will have to deposit both ETH and your own token. The price will be set according to how many tokens you deposit. Why? Because, as we discussed earlier, the tokens are supposed to be deposited in pairs and should be of equal value, as the total liquidity of the pool must remain constant. Hence, if you deposit 1 ETH with 1 of your token, then it would imply that your token price will be equal to 1 ETH.

Step 1:Click on the dropdown on the same page and press “Add Liquidity.”

Step 2: Put in the amount of ETH you wish to deposit.

Step 3: Now select the “Select a Token” option.

Step 4: Enter your token’s address in the “Token Address” field and select your token from the dropdown.

Step 5: Press the “Unlock” option. You’ll find it next to your token symbol.

Step 6: Click on “Confirm” once the pop-up shows up. Your transaction will be confirmed.

Step 7: Now, in the same way, enter the amount of your tokens you wish to deposit. Make sure to check the calculated exchange rate.

Step 8: Now, select the “Add Liquidity” option and click “Confirm” once the pop-up shows up.

### Remove Liquidity
Suppose you sell your tokens to investors and wish to remove your liquidity/deposits from the platform. You may follow the following steps to do so:

Step 1: Go to https://uniswap.exchange/remove-liquidity.

Step 2:Press the “Select a Token” option.

Step 3: Put in your token’s address in the “Token Address”field.

Step 4:Choose your token from the dropdown.

Step 5: Uniswap will provide you with your pool’s balance. Enter the amount you wish to withdraw.

Step 6: Uniswap will show you the funds you’ll receive for both ETH and your token. Press the “Remove Liquidity” option.

Step 7: Select the “Confirm” option when the MetaMask pop-up shows up.
To show the tokens in Metamask go to Assets then Add Token then paste the contract address in.

## Minting Tokens Using Truffle Console
While we are in the truffle console we can interact with the deployed contract. Let’s first create an instance of it using the command

`const instance = await myToken.deployed();`

Then let’s try minting tokens to an address, so copy and paste the public key address from metamask or the truffle output in to the following command:

`instance.mint('0x...','1000000000000000000000');`

Note that both fields are strings encapsulated in quotes. Also the value is the lowest denomination and by default the contract is set to 18 decimals so this will mint 1000 whole tokens. If we enter our public key address into the Ropsten ethernet explorer we will see these tokens in our account. We can also transfer and check balances from within Truffle.

```
instance.transfer('0x...','500000000000000000000');
instance.balanceOf('0x...');
```

So to summarise we have two addresses:

- A public key address, this is our personal address which we set up on metamask to move funds around and pay for transaction fees. It also has unique ownership rights to the token contract which enables us to mint new tokens and carry out other administrative tasks.
- A contract address where the token is deployed which is used to access the contract functions. You can think of the contract address as the location at which your new token exists on the Ethereum network. It will be used when we setup a liquidity pool.

### Conclusion/Cost Analysis
The main cost involved is with the base asset of the liquidity pool. There’s no exact answer as to how much is a good starting point as it depends on expected trading volumes and how much supply and demand for the new token there will be. As a rough estimate I think five times the expected daily trading volume would be a good place to start but each pool will be different.

The cost of deploying the contracts and setting up the liquidity pool were as follows:

Deployment of the ERC20 Token cost 0.0649833 ETH
Deployment of the liquidity pool cost 0.031548 ETH

#### More Info:
- https://www.toptal.com/ethereum/create-erc20-token-tutorial
- https://blog.logrocket.com/create-deploy-erc-20-token-ethereum-blockchain/
- https://medium.com/the-capital/how-much-does-it-cost-to-deploy-a-smart-contract-on-ethereum-11bcd64da1

## Probable Reference to Algorithmic Stablecoins

*Rebasing Algorithmic Stablecoins*
- The rebasing algorithmic stablecoins basically involve the supply taking over regulation of value. In this case, the algorithm reduces the coin supply in event of a price drop and ensures issuing additional coins in the opposite situation. 

*Over-collateralized Algorithmic Stablecoins*
- The over-collateralized algorithmic stablecoins depend on a large reserve of cryptocurrencies for issuing lesser stablecoins. Such types of algorithmic stablecoins serve as an effective choice for a buffer for price fluctuations. 

*Fractional Algorithmic Stablecoins*
- Fractional algorithmic stablecoins are one of the important additions to an algorithmic stablecoins list, and they are partially collateralized. The assets feature backing of cryptographic algorithms as well as asset collateralization. 

*Seigniorage Algorithmic Stablecoins*
- The Seigniorage algorithmic stablecoin model opts for an alternative to the rebasing mechanism. It features two distinct tokens such as a supply-elastic currency and the investment shares of the network. The owners of the investment shares can receive inflationary rewards and bear the burden of debt when the currency falls. 

