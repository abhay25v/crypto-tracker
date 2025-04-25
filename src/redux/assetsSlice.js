import { createSlice } from '@reduxjs/toolkit';
import { generateRandomAssets } from '../utils/randomUpdater';

const initialState = generateRandomAssets();

const assetsSlice = createSlice({
  name: 'assets',
  initialState,
  reducers: {
    updatePrices: (state) => {
      state.forEach(asset => {
        const change = (Math.random() * 2 - 1) * 0.05; // ±5%
        const priceChange = asset.price * change;
        asset.price = parseFloat((asset.price + priceChange).toFixed(2));
        asset.change1h = parseFloat((asset.change1h + change * 100).toFixed(2));
        asset.change24h = parseFloat((asset.change24h + change * 100).toFixed(2));
        asset.change7d = parseFloat((asset.change7d + change * 100).toFixed(2));
        asset.volume24h = parseFloat((asset.volume24h * (1 + change)).toFixed(0));
      });
    },
  },
});

export const { updatePrices } = assetsSlice.actions;
export default assetsSlice.reducer;
