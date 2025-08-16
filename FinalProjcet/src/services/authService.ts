import Cookies from 'js-cookie';
import { http } from './http';
import { jwtDecode } from 'jwt-decode';

// --- API call ---
export type LoginPayload = { email: string; password: string };
export const loginApi = (data: LoginPayload) => http.post('/login/', data);

export const registerApi = (data: {name:string; email:string; password:string; role?:string; status?:string}) =>
    http.post('/master/user/', { role: 'student', status: 'confirming', ...data });

export const refreshApi = (refresh: string) =>
    http.post('/login/get_new_token/', { refresh });

// --- helpers ---
export const normalizeTokens = (resData: any) => {
    // chấp nhận nhiều cách đặt tên khác nhau
    const accessToken =
        resData?.accessToken ??
        resData?.access ??
        resData?.token ??
        resData?.data?.accessToken ??
        resData?.data?.access;

    const refreshToken =
        resData?.refreshToken ??
        resData?.refresh ??
        resData?.data?.refreshToken ??
        resData?.data?.refresh;

    return { accessToken, refreshToken };
};

export const saveTokens = (accessToken?: string, refreshToken?: string) => {
    const isHttps = typeof window !== 'undefined' && window.location.protocol === 'https:';
    if (accessToken) {
        Cookies.set('accessToken', accessToken, {
            expires: 1 / 96, // 15 phút
            secure: isHttps, // localhost -> false; deploy https -> true
            sameSite: 'Strict',
        });
    }
    if (refreshToken) {
        Cookies.set('refreshToken', refreshToken, {
            expires: 7, // 7 ngày
            secure: isHttps,
            sameSite: 'Strict',
        });
    }
};

export const clearTokens = () => {
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
};

export const decodeUser = () => {
    const t = Cookies.get('accessToken');
    if (!t) return null;
    try { return jwtDecode(t) as any; } catch { return null; }
};

export const rememberEmail = {
    get: () => Cookies.get('rememberEmail') || '',
    set: (email: string) => Cookies.set('rememberEmail', email, { expires: 30, sameSite: 'Lax' }),
    clear: () => Cookies.remove('rememberEmail'),
};
