import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';

const rootEl = document.getElementById('root') as HTMLElement;
createRoot(rootEl).render(
    <Provider store={store}>
        <App />
    </Provider>
);
