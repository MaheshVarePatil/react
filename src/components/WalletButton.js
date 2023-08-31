import React from 'react';

const WalletButton = () => {
  const connectWallet = () => {
    // Call wallet connection function from Rainbow Kit
    // Example: rainbowSDK.wallet.connect();
    alert('Connect wallet functionality');
  };

  return (
    <button onClick={connectWallet}>
      Connect Wallet
    </button>
  );
};

export default WalletButton;
