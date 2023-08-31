import React from 'react';

const ResultCard = ({ pairName, priceUsd }) => {
  return (
    <div className="result-card">
      <p className="pair-name">Pair: {pairName}</p>
      <p className="price-usd">Price in USD: {priceUsd}</p>
    </div>
  );
};

export default ResultCard;
