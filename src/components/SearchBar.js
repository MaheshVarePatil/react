import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './tokenSearch.css';

function TokenSearch() {
  const [userInput, setUserInput] = useState('');
  const [pairsData, setPairsData] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`https://api.dexscreener.com/latest/dex/search/?q=${userInput}`);
      
      if (response.data.pairs && Array.isArray(response.data.pairs)) {
        const sortedPairsData = response.data.pairs.sort((a, b) => parseFloat(b.priceUsd) - parseFloat(a.priceUsd));
        setPairsData(sortedPairsData);
      } else {
        console.error('Invalid data format:', response.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const response = await axios.get(`https://api.dexscreener.com/latest/dex/tokens/${userInput}`);
        setPairsData([response.data]); 
      } catch (error) {
        console.error('Error fetching initial data:', error);
      }
    };

    fetchInitialData();
  }, []);

 

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter token address or pair"
        />
        <button type="submit">Search</button>
      </form>
      

      <table>
        <thead>
          <tr>
            <th>Pair Address</th>
            <th>Base Token</th>
            <th>Quote Token</th>
            
          </tr>
        </thead>
        <tbody>
        {pairsData.map((pair, index) => (
    <tr key={index}>
      <td>{pair.pairAddress}</td>
      <td>{pair.baseToken ? pair.baseToken.name : 'N/A'}</td>
      <td>{pair.quoteToken ? pair.quoteToken.symbol : 'N/A'}</td>
      
    </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TokenSearch;
