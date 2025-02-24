import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
    const [marketData, setMarketData] = useState({
        price: "Loading...",
        marketCap: "Loading...",
        volume: "Loading...",
        liquidity: "Updating...",
        totalSupply: "Fetching...",
    });

    useEffect(() => {
        async function fetchMarketData() {
            try {
                const response = await fetch(
                    "https://api.coingecko.com/api/v3/simple/price?ids=fiorenzacoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true"
                );
                const data = await response.json();

                if (data.fiorenzacoin) {
                    setMarketData({
                        price: `$${data.fiorenzacoin.usd.toFixed(6)}`,
                        marketCap: `$${data.fiorenzacoin.usd_market_cap?.toLocaleString() || "N/A"}`,
                        volume: `$${data.fiorenzacoin.usd_24h_vol?.toLocaleString() || "N/A"}`,
                        liquidity: "Updating...",
                        totalSupply: "Fetching...",
                    });
                } else {
                    throw new Error("Invalid response from API");
                }
            } catch (error) {
                console.error("Error fetching market data:", error);
            }
        }
        fetchMarketData();
    }, []);

    return (
        <div className="container">
            {/* Navigation Bar */}
            <nav className="navbar">
                <img src="/assets/200FIORENZA.png" alt="Fiorenza Logo" width={50} height={50} />
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/tokenomics">Tokenomics</Link></li>
                    <li><Link href="/community">Community</Link></li>
                    <li><Link href="/how-to-buy">How to Buy</Link></li>
                    <li><Link href="/roadmap">Roadmap</Link></li>
                </ul>
            </nav>

            {/* Header Section */}
            <header className="header">
                <h1>New Age Renaissance Begins</h1>
                <p>The Future of Decentralized Wealth Inspired by Renaissance Legacy.</p>
                <button className="btn">Buy $FZAC</button>
                <button className="btn secondary">View Whitepaper</button>
            </header>

            {/* Live Market Data Section */}
            <section className="market-data">
                <h2>Live FiorenzaCoin Price</h2>
                <p><strong>Price:</strong> {marketData.price}</p>
                <p><strong>Market Cap:</strong> {marketData.marketCap}</p>
                <p><strong>24h Volume:</strong> {marketData.volume}</p>
                <p><strong>Liquidity:</strong> {marketData.liquidity}</p>
                <p><strong>Total Supply:</strong> {marketData.totalSupply}</p>
            </section>

            <style jsx>{`
                .container {
                    font-family: Arial, sans-serif;
                    padding: 20px;
                    text-align: center;
                }
                .navbar {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 10px;
                    background: #fff;
                    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
                }
                .navbar ul {
                    list-style: none;
                    display: flex;
                    gap: 15px;
                }
                .navbar li {
                    display: inline;
                }
                .header {
                    margin-top: 30px;
                }
                .btn {
                    padding: 10px 20px;
                    background: #d32f2f;
                    color: white;
                    border: none;
                    cursor: pointer;
                    margin: 10px;
                    border-radius: 5px;
                }
                .btn.secondary {
                    background: #757575;
                }
                .market-data {
                    margin-top: 20px;
                    padding: 20px;
                    background: #f9f9f9;
                    border-radius: 8px;
                }
            `}</style>
        </div>
    );
}
