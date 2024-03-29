import React, { Fragment, useState } from "react";
import Web3 from "web3";

const Wallet = () => {
  const [status, setStatus] = useState(""); 

  
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        
        await window.ethereum.request({ method: "eth_requestAccounts" });
        
    
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        
       
        setStatus(`Wallet connection successful.`);
      } catch (error) {
       
        setStatus("Wallet connection failed. Please make sure to approve access.");
        console.error("Error connecting to wallet:", error);
      }
    } else {
      
      setStatus("MetaMask not detected. Please install MetaMask.");
      console.error("MetaMask extension not detected");
    }
  };

  return (
    <Fragment>
      <div style={{ textAlign: "center", margin: "50px auto" }}>
        <h2 style={{ marginBottom: "20px", color: "#333" }}>Connect Your Wallet</h2>
        <button
          onClick={connectWallet}
          style={{
            padding: "7px 20px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#007bff",
            color: "#fff",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
        >
          Connect
        </button>
        <p style={{ marginTop: "20px", color: status.includes("Wallet connection successful") ? "#28a745" : "#dc3545" }}>{status}</p>
      </div>
    </Fragment>
  );
};

export default Wallet;
