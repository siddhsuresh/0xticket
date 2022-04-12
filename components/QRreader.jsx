import React, { useEffect, useState, useRef } from "react";
import QrReader from "react-qr-reader";
import Web3 from 'web3';

async function signEvent(event){
  try {
  if (window.ethereum) {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const web3 = new Web3(window.ethereum);
    var hash = web3.utils.sha3(event)
    var signature = await web3.eth.personal.sign(hash, accounts[0])


      const rawResponse = await fetch(process.env.API_URL+"/api/checkInUser", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({signature: signature, code: event})
      });
      const content = await rawResponse.json();
    
      console.log(content);


    console.log(signature)
  }
} catch {
  console.log("Error")
}
}

export default function QRread() {
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  const handleScan = (data) => {
    if (data !== result) {
      setResult(data);
    }
  };

  useEffect(() => {
    if (result) {
      console.log(result)
      signEvent(result);
    }
  }, [result]);

  const handleError = (err) => {
    console.error(err);
  };
  return (
    <>
      <div>
        <QrReader
          ref={inputRef}
          delay={1000}
          onError={handleError}
          onScan={handleScan}
          style={{ width: "100%" }}
        />
        <p>{result}</p>
      </div>
    </>
  );
}