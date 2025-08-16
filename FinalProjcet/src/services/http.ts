import axios from 'axios';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

const API_BASE = 'https://b1u9y178ok.execute-api.ap-southeast-1.amazonaws.com';
export const http = axios.create({ baseURL: API_BASE, headers: { 'Content-Type': 'application/json' } });

const willExpireSoon = (token?: string | null) => {
    if (!token) return true;
    try {
        const { exp }: any = jwtDecode(token);
        const now = Math.floor(Date.now() / 1000);
        return !exp || exp - now <= 5 * 60;
    } catch { return true; }
};

let isRefreshing = false;
let queue: Array<() => void> = [];

http.interceptors.request.use(async (config) => {
    const access = Cookies.get('accessToken');
    if (access && willExpireSoon(access)) {
        const refresh = Cookies.get('refreshToken');
        if (refresh) {
            if (!isRefreshing) {
                isRefreshing = true;
                try {
                    const res = await axios.post(`${API_BASE}/login/get_new_token/`, { refresh });
                    const data = res.data || {};
                    const accessToken = data.accessToken ?? data.access ?? data.token;
                    const refreshToken = data.refreshToken ?? data.refresh;

                    const isHttps = typeof window !== 'undefined' && window.location.protocol === 'https:';
                    if (accessToken) Cookies.set('accessToken', accessToken, { expires: 1/96, secure: isHttps, sameSite: 'Strict' });
                    if (refreshToken) Cookies.set('refreshToken', refreshToken, { expires: 7, secure: isHttps, sameSite: 'Strict' });

                    queue.forEach(fn => fn()); queue = [];
                } catch {
                    Cookies.remove('accessToken'); Cookies.remove('refreshToken');
                } finally { isRefreshing = false; }
            }
            await new Promise<void>(resolve => queue.push(resolve));
        }
    }
    const latest = Cookies.get('accessToken');
    if (latest) {
        config.headers = config.headers || {};
        (config.headers as any).Authorization = `Bearer ${latest}`;
    }
    return config;
});

http.interceptors.response.use(
    r => r,
    err => {
        const s = err?.response?.status;
        if (s === 401 || s === 403) {
            Cookies.remove('accessToken'); Cookies.remove('refreshToken');
            window.dispatchEvent(new CustomEvent('auth:expired'));
        }
        return Promise.reject(err);
    }
);
