import axios from 'axios';

const api = axios.create({
    baseURL: 'https://8fty49z8qb.execute-api.ap-southeast-1.amazonaws.com',
});

api.interceptors.request.use((config) => {
    const access = localStorage.getItem('access');
    if (access) {
        config.headers.Authorization = `Bearer ${access}`;
    }
    return config;
});

api.interceptors.response.use(
    (res) => res,
    async (err) => {
        const originalRequest = err.config;
        if (err.response && err.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const refresh = localStorage.getItem('refresh');
                const res = await axios.post(`${api.defaults.baseURL}/login/get_new_token/`, { refresh });
                localStorage.setItem('access', res.data.access);
                originalRequest.headers.Authorization = `Bearer ${res.data.access}`;
                return api(originalRequest);
            } catch (e) {
                localStorage.clear();
                window.location.href = '/';
            }
        }
        return Promise.reject(err);
    }
);

export default api;
