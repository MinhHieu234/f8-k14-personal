import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/contacts';


export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
});


export const addContact = createAsyncThunk('contacts/add', async (data) => {
    const res = await axios.post(BASE_URL, data);
    return res.data;
});

export const updateContact = createAsyncThunk('contacts/update', async ({ id, data }) => {
    const res = await axios.put(`${BASE_URL}/${id}`, data);
    return res.data;
});

export const deleteContact = createAsyncThunk('contacts/delete', async (id) => {
    await axios.delete(`${BASE_URL}/${id}`);
    return id;
});

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        loading: false,
        error: null,
        search: '',
    },
    reducers: {
        setSearch(state, action) {
            state.search = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchContacts.rejected, (state) => {
                state.loading = false;
                state.error = 'Lỗi khi fetch danh bạ';
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(updateContact.fulfilled, (state, action) => {
                const index = state.items.findIndex((c) => c.id === action.payload.id);
                if (index !== -1) state.items[index] = action.payload;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.items = state.items.filter((c) => c.id !== action.payload);
            });
    },
});

export const { setSearch } = contactsSlice.actions;
export default contactsSlice.reducer;
