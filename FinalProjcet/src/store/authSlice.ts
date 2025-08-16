import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { clearTokens } from '../services/authService';
import Cookies from 'js-cookie';

type User = { userId?: string; email?: string; role?: string; [k: string]: any };
type AuthState = { user: User | null; hydrated: boolean };

const initialState: AuthState = { user: null, hydrated: false };

// load user từ token (khi reload trang)
export const hydrateAuth = createAsyncThunk('auth/hydrate', async () => {
    const token = Cookies.get('accessToken');
    if (!token) return { user: null };
    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        if (payload?.exp * 1000 > Date.now()) {
            return { user: { userId: payload.userId, email: payload.email, role: payload.role } };
        }
    } catch {}
    return { user: null };
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<User | null>) {
            state.user = action.payload;
        },
        logout(state) {
            state.user = null;
            clearTokens();
        },
    },
    extraReducers(builder) {
        builder.addCase(hydrateAuth.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.hydrated = true;
        });
    },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
