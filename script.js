// Fetch Real-Time Market Data
async function fetchMarketData() {
    const apiURL = "https://api.dexscreener.com/latest/dex/tokens/0x6EeFCF57A5161a8dfD850B6f6E7709218e0aA75e";
    
    try {
        const response = await fetch(apiURL);
        const data = await response.json();

        if (data.pairs && data.pairs.length > 0) {
            const price = parseFloat(data.pairs[0].priceUsd).toFixed(6);
            const marketCap = (price * 21000000).toLocaleString();
            const volume = parseFloat(data.pairs[0].volume.h24).toLocaleString();
            const liquidity = parseFloat(data.pairs[0].liquidity.usd).toLocaleString();

            document.getElementById("price-container").innerText = `$${price}`;
            document.getElementById("market-cap").innerText = `$${marketCap}`;
            document.getElementById("volume").innerText = `$${volume}`;
            document.getElementById("liquidity").innerText = `$${liquidity}`;
        } else {
            console.log("No market data found");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Fetch data every 30 seconds
setInterval(fetchMarketData, 30000);
fetchMarketData();
