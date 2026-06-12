import { api } from "@/utils/axios.utils"

export const googleAuthService = async (idToken) => {

    let res = await api.post("/auth/google", { idToken });

    return res.data.data.token;

}

export const profileService = async (token) => {
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    let res = await api.get("/auth/profile", { headers });
    return res.data;
}

export const logoutService = async () => {
    let res = await api.post("/auth/logout");
    return res.data;
}