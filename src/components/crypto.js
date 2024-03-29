import React, { Fragment, useState, useEffect } from "react";

const Crypto = () => {
  const [cryptoData, setCryptoData] = useState(null);

  useEffect(() => {
    // Fetch cryptocurrency prices from the API
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => response.json())
      .then((data) => {
        setCryptoData(data);
      })
      .catch((error) => {
        console.error("Error fetching cryptocurrency data:", error);
      });
  }, []);

  return (
    <Fragment>
      <div style={{ margin: "0 auto", maxWidth: "800px" }}>
        <h2 style={{ textAlign: "center", marginTop: "20px" }}>Assets</h2>
        <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
          {cryptoData && (
            <Fragment>
              {Object.keys(cryptoData.bpi).map((currency) => {
                let symbol = "";
                switch (currency) {
                  case "USD":
                    symbol = "$";
                    break;
                  case "EUR":
                    symbol = "€";
                    break;
                  case "GBP":
                    symbol = "£";
                    break;
                  default:
                    symbol = "";
                }

                return (
                  <div key={currency} style={{ flex: "0 0 calc(33.33% - 20px)", margin: "10px", textAlign: "center", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", transition: "0.3s", borderRadius: "5px" }}>
                    <div style={{ padding: "20px" }}>
                      <h5 style={{ marginBottom: "10px" }}>{cryptoData.bpi[currency].description}</h5>
                      <p style={{ fontSize: "24px", fontWeight: "bold" }}>{symbol} {cryptoData.bpi[currency].rate}</p>
                    </div>
                  </div>
                );
              })}
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Crypto;
