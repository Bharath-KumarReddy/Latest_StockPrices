import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [stockDetail, setStockDetail] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://latest-stock-price.p.rapidapi.com/any', {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '661c57c3b9mshf31376371f92592p175988jsnec88e1a280d8',
          'X-RapidAPI-Host': 'latest-stock-price.p.rapidapi.com'
        }
      });

      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.length);
      setStockDetail(data[randomIndex]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <h1 className="head">Latest Stock Prices</h1>
      {stockDetail && (
        <div className="container">
          <ul className="stock-info">
            <li><strong style={{ color: 'coral' }}>Identifier:</strong> {stockDetail.identifier}</li>
            <li><strong style={{ color: 'coral' }}>Open:</strong> {stockDetail.open}</li>
            <li><strong style={{ color: 'coral' }}>Day High:</strong> {stockDetail.dayHigh}</li>
            <li><strong style={{ color: 'coral' }}>Day Low:</strong> {stockDetail.dayLow}</li>
            <li><strong style={{ color: 'coral' }}>Last Price:</strong> {stockDetail.lastPrice}</li>
            <li><strong style={{ color: 'coral' }}>Year High:</strong> {stockDetail.yearHigh}</li>
            <li><strong style={{ color: 'coral' }}>Year Low:</strong> {stockDetail.yearLow}</li>
            <li><strong style={{ color: 'coral' }}>Per Change (30 Days):</strong> {stockDetail.perChange30d}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
