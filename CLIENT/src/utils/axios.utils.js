import axios from "axios";
import store from "@/store/store";
import { updateToken, logoutSuccess } from "@/store/features/auth.slice";

export const api = axios.create({
    baseURL: "http://localhost:4000/api/v1",
    withCredentials: true
});

api.interceptors.request.use(
    (config) => {
        const token = store.getState().auth.token;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const res = await axios.post(
                    `${api.defaults.baseURL}/auth/refresh_token`,
                    {},
                    { withCredentials: true }
                );
                const token = res.data.data.token;
                store.dispatch(updateToken(token));
                
                originalRequest.headers.Authorization = `Bearer ${token}`;
                return api(originalRequest);
            } catch (err) {
                store.dispatch(logoutSuccess());
                return Promise.reject(err);
            }
        }
        return Promise.reject(error);
    }
);
