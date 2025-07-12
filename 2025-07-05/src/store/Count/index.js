import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../plugins/api';

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
    const { data } = await api.get('/products');
    return data;
});

const countSlice = createSlice({
    name: 'count',
    initialState: [],
    reducers: {
        addNew: (state, action) => {
            state.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            console.log('✅ fetch ok');
            return action.payload; // Replace toàn bộ state
        });
        builder.addCase(fetchProducts.pending, () => {
            console.log('⏳ pending');
        });
    },
});

export const { increase } = countSlice.actions;
export default countSlice.reducer;


