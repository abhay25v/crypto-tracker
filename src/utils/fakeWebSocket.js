export function randomizeData(asset) {
    const randomPercent = () => (Math.random() * 2 - 1).toFixed(2); // -1% to +1%
    const randomVolume = () => asset.volume24h * (1 + (Math.random() * 0.02 - 0.01)); // ±1%
  
    return {
      price: +(asset.price * (1 + parseFloat(randomPercent()) / 100)).toFixed(2),
      change1h: +(parseFloat(asset.change1h) + parseFloat(randomPercent())).toFixed(2),
      change24h: +(parseFloat(asset.change24h) + parseFloat(randomPercent())).toFixed(2),
      change7d: +(parseFloat(asset.change7d) + parseFloat(randomPercent())).toFixed(2),
      volume24h: +randomVolume().toFixed(2),
    };
  }
  