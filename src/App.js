import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ResultCard from './components/ResultCard';
import WalletButton from './components/WalletButton';
import './App.css'; // Import your CSS file

const App = () => {
  const [results, setResults] = useState([]);

  const updateResults = (newResults) => {
    setResults(newResults);
  };

  return (
    <div className="app">
      <Header />
      <SearchBar updateResults={updateResults} />
      <div className="result-container">
        {results.map((result, index) => (
          <ResultCard
            key={index}
            pairName={result.pairName}
            priceUsd={result.priceUsd}
          />
        ))}
      </div>
      <WalletButton />
    </div>
  );
};

export default App;
