import { createSlice } from '@reduxjs/toolkit';
import sampleData from '../utils/sampleData';

export const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    assets: sampleData,
  },
  reducers: {
    updateAsset: (state, action) => {
      const { id, changes } = action.payload;
      const asset = state.assets.find((a) => a.id === id);
      if (asset) {
        Object.assign(asset, changes);
      }
    },
  },
});

export const { updateAsset } = cryptoSlice.actions;
export default cryptoSlice.reducer;
