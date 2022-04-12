import { useRouter } from 'next/router'
const Web3 = require("web3");

const ethEnabled = async () => {
  if (window.ethereum) {
    await window.ethereum.request({method: 'eth_requestAccounts'});
    window.web3 = new Web3(window.ethereum);
    return true;
  }
  return false;
}

export default function connectWallet()
{
    const router = useRouter()
    ethEnabled()
    router.push('/')
    return(
        <>
            Connecting...
        </>
    )
}