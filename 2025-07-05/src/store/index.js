import { configureStore } from '@reduxjs/toolkit';
import productReducer from './Product';
import countReducer from './Count';

export const store = configureStore({
    reducer: {
        products: productReducer,
        count: countReducer,
    },
});

// ✅ Re-export để có thể import từ './store'
export * from './Product';
export * from './Count';
