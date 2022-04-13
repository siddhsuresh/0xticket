import React, { useEffect, useState, useRef } from "react";
import QrReader from "react-qr-reader";
import Web3 from "web3";
import { showNotification } from "@mantine/notifications";
import { useRouter } from "next/router";

async function signEvent(event) {
  try {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const web3 = new Web3(window.ethereum);
      var hash = web3.utils.sha3(event);
      var signature = await web3.eth.personal.sign(hash, accounts[0]);

      const rawResponse = await fetch(
        process.env.API_URL + "/api/checkInUser",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ signature: signature, code: event }),
        }
      );
      const content = await rawResponse.json();
      console.log(content);
      console.log(signature);
      return content;
    }
  } catch {
    console.log("Error");
  }
}

export default function QRread() {
  const router = useRouter();
  const [iscorrect, setIsCorrect] = useState(false);
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  const handleScan = (data) => {
    if (data !== result) {
      setResult(data);
    }
  };

  useEffect(() => {
    if (result) {
      console.log(result);
      signEvent(result).then((data) => {
        if (data.status == "ok") {
          setResult("");
          setIsCorrect(true);
          showNotification({
            title: "Success",
            message: "Success",
            color: "green",
            type: "success",
          });
          router.push("/activity");
        } else {
          setResult("");
          setIsCorrect(false);
          showNotification({
            title: "Error",
            message: "Error in Validation",
            color: "red",
            type: "error",
          });
        }
      });
      //   console.log("Content",content);
      //   if (content.status === "ok") {
      //     setIsRead(true);
      //     console.log("ok");
      //     setResult("");
      //   } else if(content.status === "error"){
      //     showNotification({
      //       title: "Error",
      //       message: "Error in Verifying the QR Code. Please try again.",
      //       type: "error",
      //       duration: 3000,
      //     });
      //     console.log("error");
      //     setResult("");
      //   }
    }
  }, [result]);

  const handleError = (err) => {
    console.error(err);
  };
  console.log("Result", result);
  if (result === "" || result === null) {
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
  } else if (iscorrect) {
    return (
      <div className="flex flex-wrap items-center justify-center gap-4">
        <svg
          x="0px"
          y="0px"
          viewBox="0 0 50 50"
          style="enable-background:new 0 0 50 50;"
        >
          <circle style="fill:#25AE88;" cx="25" cy="25" r="25" />
          <polyline
            style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;"
            points="
	38,15 22,33 12,25 "
          />
        </svg>
        <p>Successfully Verified The Ticket</p>
      </div>
    );
  } else {
    return <div className="text-white text-center">Validating...</div>;
  }
}
