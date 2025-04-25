export function generateRandomAssets() {
    return [
      {
        id: 1,
        name: 'Bitcoin',
        symbol: 'BTC',
        logo: '/assets/logos/btc.png',
        chart: '/assets/charts/btc.svg',
        price: 30000,
        change1h: 0.2,
        change24h: -0.3,
        change7d: 2.4,
        marketCap: 600000000000,
        volume24h: 35000000000,
        circulatingSupply: 19000000,
        maxSupply: 21000000,
      },
      {
        id: 2,
        name: 'Ethereum',
        symbol: 'ETH',
        logo: '/assets/logos/eth.png',
        chart: '/assets/charts/eth.svg',
        price: 2000,
        change1h: -0.1,
        change24h: 1.2,
        change7d: -0.8,
        marketCap: 300000000000,
        volume24h: 20000000000,
        circulatingSupply: 115000000,
        maxSupply: null,
      },
      // Add 3 more fake assets here...
    ];
  }
  