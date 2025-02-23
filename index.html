import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [marketData, setMarketData] = useState({
    price: "Loading...",
    marketCap: "Loading...",
    volume: "Loading...",
    liquidity: "Loading..."
  });

  useEffect(() => {
    async function fetchMarketData() {
      try {
        const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=fiorenzacoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true");
        const data = await response.json();
        setMarketData({
          price: `$${data.fiorenzacoin.usd.toFixed(6)}`,
          marketCap: `$${data.fiorenzacoin.usd_market_cap.toLocaleString()}`,
          volume: `$${data.fiorenzacoin.usd_24h_vol.toLocaleString()}`,
          liquidity: "Updating..."
        });
      } catch (error) {
        console.error("Error fetching market data:", error);
      }
    }

    fetchMarketData();
  }, []);

  return (
    <div className="bg-black text-gold min-h-screen">
      <nav className="flex justify-between items-center p-5 bg-black shadow-md">
        <Image src="/assets/200FIORENZA.png" width={50} height={50} alt="FiorenzaCoin Logo" />
        <ul className="flex space-x-6 text-lg font-semibold">
          <li><Link href="#">Home</Link></li>
          <li><Link href="#">Tokenomics</Link></li>
          <li><Link href="#">Community</Link></li>
          <li><Link href="#">How to Buy</Link></li>
          <li><Link href="#">Roadmap</Link></li>
        </ul>
      </nav>

      <header className="relative w-full h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('/assets/Firefly.png')" }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative text-center">
          <Image src="/assets/FiorenzaCoin.png" width={200} height={200} alt="Floating Coin" className="animate-pulse" />
          <h1 className="text-6xl font-extrabold text-gold glow-effect">New Age Renaissance Begins</h1>
          <p className="text-xl text-gray-300 mt-4">The Future of Decentralized Wealth Inspired by Renaissance Legacy.</p>
          <div className="mt-8 flex space-x-4">
            <button className="bg-gold px-6 py-3 rounded-lg shadow-md text-black font-bold hover:scale-105">Buy $FZAC</button>
            <button className="border-2 border-gold px-6 py-3 rounded-lg shadow-md text-gold font-bold hover:bg-gold hover:text-black">View Whitepaper</button>
          </div>
        </div>
      </header>

      <section className="text-center py-12">
        <h2 className="text-4xl text-gold font-bold">Live FiorenzaCoin Price</h2>
        <p className="text-2xl mt-2">{marketData.price}</p>
        <p className="text-lg text-gray-300">Market Cap: {marketData.marketCap}</p>
        <p className="text-lg text-gray-300">24h Volume: {marketData.volume}</p>
      </section>

      <footer className="text-center py-4 bg-black text-gold">
        <p>&copy; 2024 FiorenzaCoin. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
