import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [marketData, setMarketData] = useState({
    price: "Loading...",
    marketCap: "Loading...",
    volume: "Loading...",
    liquidity: "Loading...",
    totalSupply: "Loading...",
  });

  useEffect(() => {
    async function fetchMarketData() {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=fiorenzacoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true"
        );
        const data = await response.json();
        setMarketData({
          price: `$${data.fiorenzacoin.usd.toFixed(6)}`,
          marketCap: `$${data.fiorenzacoin.usd_market_cap.toLocaleString()}`,
          volume: `$${data.fiorenzacoin.usd_24h_vol.toLocaleString()}`,
          liquidity: "Updating...",
          totalSupply: "500,000,000 FZAC",
        });
      } catch (error) {
        console.error("Error fetching market data:", error);
      }
    }
    fetchMarketData();
  }, []);

  return (
    <div className="container">
      {/* Navigation */}
      <header className="navbar">
        <Image src="/assets/200FIORENZA.png" alt="FiorenzaCoin Logo" width={50} height={50} />
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/tokenomics">Tokenomics</Link></li>
            <li><Link href="/community">Community</Link></li>
            <li><Link href="/how-to-buy">How to Buy</Link></li>
            <li><Link href="/roadmap">Roadmap</Link></li>
            <li><Link href="/dashboard">Dashboard</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>New Age Renaissance Begins</h1>
        <p>The Most Advanced Decentralized Cryptocurrency Inspired by Renaissance Legacy</p>
        <div className="hero-buttons">
          <button className="buy-button">Buy $FZAC</button>
          <button className="whitepaper-button">View Whitepaper</button>
        </div>
      </section>

      {/* Market Data */}
      <section className="market-data">
        <h2>Live FiorenzaCoin Price</h2>
        <p>💰 Price: {marketData.price}</p>
        <p>📈 Market Cap: {marketData.marketCap}</p>
        <p>📊 24h Volume: {marketData.volume}</p>
        <p>🏦 Liquidity: {marketData.liquidity}</p>
      </section>

      {/* Tokenomics */}
      <section className="tokenomics">
        <h2>Tokenomics</h2>
        <p>📌 Total Supply: {marketData.totalSupply}</p>
        <p>🔥 Burn Rate: 2%</p>
        <p>🎁 Staking Rewards: 5%</p>
      </section>

      {/* Roadmap */}
      <section className="roadmap">
        <h2>Our Roadmap</h2>
        <p><strong>Q1 2024:</strong> Token Launch & Listings</p>
        <p><strong>Q2 2024:</strong> NFT & DeFi Integrations</p>
        <p><strong>Q3 2024:</strong> Fiorenza Wallet & Staking Rewards</p>
        <p><strong>Q4 2024:</strong> Global Exchange Partnerships</p>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2024 FiorenzaCoin. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
