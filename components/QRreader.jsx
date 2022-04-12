import React, { useEffect, useState, useRef } from "react";
import { QrReader } from "react-qr-reader";

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
      const newWindow = window.open(
        `${result}`,
        "_blank",
        "noopener,noreferrer"
      );
      console.log(newWindow);
      if (newWindow) {
        newWindow.opener = null;
        setResult("");
      }
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
          facingMode={'rear'}
          style={{ width: "100%" }}
        />
        <p>{result}</p>
      </div>
    </>
  );
}