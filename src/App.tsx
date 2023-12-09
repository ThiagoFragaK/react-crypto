import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

export type Crypto = {
    "id": String,
    "symbol": String,
    "name": String,
    "image": String,
    "current_price": Number,
    "market_cap": Number,
    "market_cap_rank": Number,
    "fully_diluted_valuation": Number,
    "total_volume": Number,
    "high_24h": Number,
    "low_24h": Number,
};

function App() {
    const [ cryptos, setCryptos ] = useState<Crypto[] | null>();
    useEffect(() => {
        const url = "https://api.coingecko.com/api/v3/coins/list";
        const market = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en";
        axios.get(url).then((response) => {
            setCryptos(response.data)
        })
    });
    return (
        <div className="App">
            <header className="App-header">
            <h1>{ cryptos ? cryptos.map((crypto) => {
                return <p>{ crypto.name }</p>;
            }) : null}</h1>
            </header>
        </div>
    );
}

export default App;