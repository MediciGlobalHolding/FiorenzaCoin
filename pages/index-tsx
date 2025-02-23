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
                    totalSupply: "Fetching...",
                });
            } catch (error) {
                console.error("Error fetching market data:", error);
            }
        }
        fetchMarketData();
    }, []);

    return (
        <div>
            <nav>
                <Image src="/assets/200FIORENZA.png" alt="Fiorenza Logo" width={50} height={50} />
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/tokenomics">Tokenomics</Link></li>
                    <li><Link href="/community">Community</Link></li>
                    <li><Link href="/how-to-buy">How to Buy</Link></li>
                    <li><Link href="/roadmap">Roadmap</Link></li>
                </ul>
            </nav>

            <header>
                <h1>New Age Renaissance Begins</h1>
                <p>The Future of Decentralized Wealth Inspired by Renaissance Legacy.</p>
                <button>Buy $FZAC</button>
                <button>View Whitepaper</button>
            </header>

            <section>
                <h2>Live FiorenzaCoin Price</h2>
                <p>Price: {marketData.price}</p>
                <p>Market Cap: {marketData.marketCap}</p>
                <p>24h Volume: {marketData.volume}</p>
                <p>Liquidity: {marketData.liquidity}</p>
                <p>Total Supply: {marketData.totalSupply}</p>
            </section>
        </div>
    );
}
