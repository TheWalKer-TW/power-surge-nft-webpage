import Web3 from 'web3';
import abi from './abi.json';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const { ethereum } = window;
const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
const contract_address = "0x6edD07B0B8e8C025072dEf2925D7E7a9ff7350cE";
const psn = new web3.eth.Contract(abi, contract_address);
var current_account = undefined;
const states = []

const isMetaMaskInstalled = () => {
  return Boolean(ethereum && ethereum.isMetaMask);
};

const checkNetwork = () => {
  if(ethereum.networkVersion != 1){
    toast("You are not connected to ethereum mainnet.", {
        type: toast.TYPE.INFO,
        position: "top-left",
        autoClose: true,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
     });
     return false;
  }

  return true;
}

const internalToast = (message, type) => {
  toast(message, {
      type: type,
      position: "top-left",
      autoClose: true,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
   });
}


const checkMintEnabled = () => {
  if(psn!==undefined){
    psn.methods.isPublicMintEnabled().call(function (err, res) {
      if (err) {
        internalToast("Error raised while trying to get contract status.", toast.TYPE.INFO);
        return false;
      }

      if(!res){
        internalToast("Minting is not enabled yet. Check twitter or discord announcements.", toast.TYPE.INFO);
        return false;
      }
      return true;
    });
  } else {
     internalToast("Unexpected error. Please contact project team if this ever shows up.", toast.TYPE.ERROR);
     return false;
  }

}

const updateCurrentAccount = (state) => {
  if(isMetaMaskInstalled()){
    ethereum.on('accountsChanged', data => {
      if(data.length === 0){
        current_account = undefined;
        states.forEach(state=>state(s => false));
      }
      current_account = data[0];
    });

    web3.eth.getAccounts(function(err, accounts){
        if (err != null) return;
        else if (accounts.length === 0) return;
        else if (state!==undefined) {
          state(s => true)
          current_account = accounts[0];
        }
    });
  }
}

const init = (state) => {
  states.push(state);

  updateCurrentAccount(state);
}

const handleMetaMask = () => {
    console.log("Handle MetaMask Connection");
    if(isMetaMaskInstalled() && checkNetwork()){
      ethereum.request({ method: 'eth_requestAccounts' }).then((result) => {
        console.log("Connected as" + result[0]);
        current_account = result[0];
        states.forEach(state=>state(s => true));
      });
    }
};

const mint = (num) => {
  let currentToastId = undefined;

  const notify = (message) => currentToastId = toast(message, {
      type: toast.TYPE.INFO,
      position: "top-left",
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
   });

  const update = (message, toastType) => toast.update(currentToastId, { type: toastType, render: message, autoClose: 5000 });


  const waitForReceipt = (hash, cb) => {
    web3.eth.getTransactionReceipt(hash, function (err, receipt) {
      if (err) {
        update(err['message'], toast.TYPE.ERROR);
      }

      if (receipt !== null) {
        // Transaction went through
        if (cb) {
          cb(receipt);
        }
      } else {
        // Try again in 1 second
        window.setTimeout(function () {
          waitForReceipt(hash, cb);
        }, 1000);
      }
    });
  }

  const wrapp = () => {
    if(!checkNetwork()){
      return;
    }

    // if(!checkMintEnabled()){
    //   return;
    // }

    notify("Transaction in progress.")
    web3.eth.getTransactionCount(current_account, 'latest').then(function(nonce) {
      console.log("Nonce " + nonce)
      let data = psn.methods.mint(num).encodeABI();
      let transactionParameters = {
          "from": current_account,
          "nonce": web3.utils.toHex(nonce),
          // "gasPrice": web3.utils.toHex(5 * 10e8),
          // "gasLimit": web3.utils.toHex(330000),
          "to": contract_address,
          "value": web3.utils.toHex(num*4e16),
          "data": data,
      }

      const txHash = ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
      });

      txHash.then(hash => {
        waitForReceipt(hash, receipt => {
          console.log(receipt);
          if(receipt['status']===true){
            update("Congratulations. You've minted " + num + " tokens.", toast.TYPE.SUCCESS);
          } else {
            update("Error occured while processing your transaction. Check tx for more details.", toast.TYPE.ERROR);
          }
        })

      }).catch(error => {
        update(error['message'], toast.TYPE.ERROR);
      });
    })
  }

  return wrapp
}

export {isMetaMaskInstalled, init, handleMetaMask, mint}
