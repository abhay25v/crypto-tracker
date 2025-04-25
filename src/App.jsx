// import React from 'react';
// import CryptoTable from './components/CryptoTable';
// import DarkModeToggle from './components/DarkModeToggle';

// function App() {
//   return (
//     <div className="p-4 min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-2xl font-bold">Crypto Price Tracker</h1>
//         <DarkModeToggle />
//       </div>
//       <CryptoTable />
//     </div>
//   );
// }

// export default App;
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CryptoTable from './components/CryptoTable';
import { updateAsset } from './features/cryptoSlice';
import { randomizeData } from './utils/fakeWebSocket';

function App() {
  const dispatch = useDispatch();
  const assets = useSelector((state) => state.crypto.assets);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomAsset = assets[Math.floor(Math.random() * assets.length)];
      const changes = randomizeData(randomAsset);

      dispatch(updateAsset({ id: randomAsset.id, changes }));
    }, 1500); // Update every 1.5 seconds

    return () => clearInterval(interval);
  }, [assets, dispatch]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Crypto Price Tracker</h1>
      <CryptoTable />
    </div>
  );
}

export default App;
