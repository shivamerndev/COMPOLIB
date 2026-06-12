import { googleAuthService, profileService, logoutService } from '@/services/auth.service';
import { loginSuccess, logoutSuccess, setLoading, setError } from '@/store/features/auth.slice';
import { useDispatch } from 'react-redux';
import { api } from '@/utils/axios.utils';

const useAuth = () => {
    const dispatch = useDispatch();

    const handleGoogleAuth = async (response) => {
        try {
            dispatch(setLoading(true));
            const token = await googleAuthService(response.credential);
            const profileRes = await profileService(token);
            const user = profileRes.data;
            dispatch(loginSuccess({ token, user }));
        } catch (error) {
            dispatch(setError(error?.response?.data?.message || error.message));
            console.error("Google Auth Error:", error?.response?.data || error.message);
        }
    };

    const handleGetProfile = async (token) => {
        const profile = await profileService(token);
        return profile;
    };

    const refreshSession = async () => {
        try {
            dispatch(setLoading(true));
            const res = await api.post("/auth/refresh_token", {}, { withCredentials: true });
            const token = res.data.data.token;
            const profileRes = await profileService(token);
            const user = profileRes.data;
            dispatch(loginSuccess({ token, user }));
            return { token, user };
        } catch (error) {
            dispatch(logoutSuccess());
            return null;
        } finally {
            dispatch(setLoading(false));
        }
    };

    const handleLogout = async () => {
        try {
            dispatch(setLoading(true));
            await logoutService();
        } catch (error) {
            console.error("Logout Error:", error?.response?.data || error.message);
        } finally {
            dispatch(logoutSuccess());
        }
    };

    return { 
        handleGoogleAuth, 
        handleGetProfile, 
        refreshSession, 
        handleLogout 
    };
};

export default useAuth;