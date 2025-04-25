import React from 'react';
import greenChartImage from '../assets/images/green-chart.png'; // Import the static image

const formatNumber = (num) =>
  num?.toLocaleString(undefined, { maximumFractionDigits: 2 });

const CryptoRow = ({ asset }) => {
  const getColor = (val) => (val > 0 ? 'text-green-500' : val < 0 ? 'text-red-500' : '');

  // Function to get the logo URL based on the symbol
  const getLogoSrc = (symbol) => {
    // Add more mappings here for other cryptocurrencies as needed
    const logoMap = {
      BTC: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/svg/color/btc.svg', // Example Bitcoin logo URL
      ETH: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/svg/color/eth.svg', // Example Ethereum logo URL
    };
    return logoMap[symbol] || `https://via.placeholder.com/24?text=${symbol}`; // Fallback to placeholder
  };

  return (
    <tr className="border-b hover:bg-gray-100 dark:hover:bg-gray-700">
      <td className="px-2 py-3">{asset.id}</td>
      <td className="px-2 py-3">
        <img src={getLogoSrc(asset.symbol)} alt={asset.symbol} className="w-6 h-6" />
      </td>
      <td className="px-2 py-3">{asset.name}</td>
      <td className="px-2 py-3">{asset.symbol}</td>
      <td className="px-2 py-3">${formatNumber(asset.price)}</td>
      <td className={`px-2 py-3 ${getColor(asset.change1h)}`}>{asset.change1h}%</td>
      <td className={`px-2 py-3 ${getColor(asset.change24h)}`}>{asset.change24h}%</td>
      <td className={`px-2 py-3 ${getColor(asset.change7d)}`}>{asset.change7d}%</td>
      <td className="px-2 py-3">${formatNumber(asset.marketCap)}</td>
      <td className="px-2 py-3">${formatNumber(asset.volume24h)}</td>
      <td className="px-2 py-3">{formatNumber(asset.circulatingSupply)}</td>
      <td className="px-2 py-3">{asset.maxSupply || '∞'}</td>
      <td className="px-2 py-3">
        <img src={greenChartImage} alt="7d chart" className="h-6" />
      </td>
    </tr>
  );
};

export default CryptoRow;
