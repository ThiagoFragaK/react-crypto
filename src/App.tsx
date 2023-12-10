import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import CryptoComponent from './components/CryptoComponent';
import { Crypto } from "./types/Crypto";

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
                console.log(crypto)
                return <CryptoComponent crypto={ crypto }></CryptoComponent>;
            }) : null}</h1>
            </header>
        </div>
    );
}

export default App;