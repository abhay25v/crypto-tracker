import React from 'react';
import { useSelector } from 'react-redux';
import CryptoRow from './CryptoRow';

const CryptoTable = () => {
  const assets = useSelector((state) => state.crypto.assets);

  if (!Array.isArray(assets)) {
    return <div>Loading assets or assets not available...</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm text-left">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-800">
            <th className="px-2 py-2">#</th>
            <th className="px-2 py-2">Logo</th>
            <th className="px-2 py-2">Name</th>
            <th className="px-2 py-2">Symbol</th>
            <th className="px-2 py-2">Price</th>
            <th className="px-2 py-2">1h %</th>
            <th className="px-2 py-2">24h %</th>
            <th className="px-2 py-2">7d %</th>
            <th className="px-2 py-2">Market Cap</th>
            <th className="px-2 py-2">24h Volume</th>
            <th className="px-2 py-2">Circulating</th>
            <th className="px-2 py-2">Max</th>
            <th className="px-2 py-2">7D Chart</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset) => (
            <CryptoRow key={asset.id} asset={asset} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
