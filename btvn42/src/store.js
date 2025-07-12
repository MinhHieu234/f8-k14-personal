import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './components/contacts/contactsSlice.js';

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
    },
});
