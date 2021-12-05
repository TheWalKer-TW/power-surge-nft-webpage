import React, { useState } from 'react'
import Web3 from 'web3';
import abi from './abi.json';

const { ethereum } = window;
const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
const contract_address = "0xFF1233536Cd163FF8970Da4462cc7f4E01e4f0d6";
const psn = new web3.eth.Contract(abi, contract_address);
var current_account = undefined;

const isMetaMaskInstalled = () => {
  return Boolean(ethereum && ethereum.isMetaMask);
};

const init = (state) => {
  const wrapp = () => {
    if(isMetaMaskInstalled()){
      web3.eth.getAccounts(function(err, accounts){
          if (err != null) console.error("An error occurred: "+err);
          else if (accounts.length == 0) console.log("User is not logged in to MetaMask");
          else {
            state(s => true)
            current_account = accounts[0];
            console.log("User is logged in to MetaMask");
          }
      });
    }
  }

  return wrapp;
}

const handleMetaMask = (state) => {
    const wrapp = () => {
      console.log("Handle MetaMask Connection");
      if(isMetaMaskInstalled()){
        ethereum.request({ method: 'eth_requestAccounts' }).then((result) => {
          console.log("Connected as" + result[0]);
          current_account = result[0];
          state(s => true)
        });
      }
    }

    return wrapp;
};

const mint = (num) => {
  const wrapp = () => {
    web3.eth.getTransactionCount(current_account, 'latest').then(function(nonce) {
      console.log("Nonce " + nonce)
      let data = psn.methods.mint(num).encodeABI();
      let transactionParameters = {
          "from": current_account,
          "nonce": web3.utils.toHex(nonce),
          "gasPrice": web3.utils.toHex(5 * 10e8),
          "gasLimit": web3.utils.toHex(330000),
          "to": contract_address,
          "value": web3.utils.toHex(num*6e16),
          "data": data,
      }

      const txHash = ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
      });

      console.log(txHash)
    })
  }

  const disable = () => {
    // do nothing
  }

  return disable
}

export {isMetaMaskInstalled, init, handleMetaMask, mint}
