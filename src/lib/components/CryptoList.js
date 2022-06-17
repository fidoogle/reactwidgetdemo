import React from 'react';
import useCryptoData from "../hooks/useCryptoData";
import CryptoItem from "./CryptoItem";

const CryptoList = ({ backgroundColor = '#1e2329' }) => {
  const { cryptoData, isLoading } = useCryptoData();
  const styles = {
    container: {
      backgroundColor,
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 30px"
    },
    loadingText: {
      color: "#fafafa",
      fontSize: "16px",
      fontWeight: 600,
    }
  }
  return (
    <div>
      <div style={styles.container}>
        {!isLoading ? (
          cryptoData.map((itemData) => (
            <CryptoItem key={itemData.Id} {...itemData} />
          ))
        ) : (
          <p style={styles.loadingText}>Loading Data...</p>
        )}
      </div>
    </div>
  );
};

export default CryptoList;