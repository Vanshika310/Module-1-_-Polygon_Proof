# NFT Approval and Deposit Script
This script interacts with the Ethereum blockchain to approve and deposit NFTs from the "NaturesBeauty" contract to the "FXRoot" contract, possibly linked to a sidechain. It uses the Hardhat development framework and ethers.js library for Ethereum interactions.

## Start
Node.js and npm installed on your machine.
Create a .env file and specify the required private key, network URL, and contract addresses.
Setup
Install dependencies: **_npm install_**
Configure .env:
In the .env file, provide the following information: **_PRIVATE_KEY=your_private_key_**

The script will perform the following steps:

1. Connect to the Ethereum network using the provided network URL.
2. Attach the "NaturesBeauty" contract and the "FXRoot" contract using the provided contract addresses.
3. Approve the "FXRoot" contract to spend NFTs owned by the "NaturesBeauty" contract.
4. Deposit a list of specified token IDs to the "FXRoot" contract.
5. Display success messages upon approval and successful deposits.
6. Please ensure that the ABI of the "FXRoot" contract is correctly specified, and that you are interacting with the correct Ethereum network and contract addresses.


### License
This is licensed under MIT
