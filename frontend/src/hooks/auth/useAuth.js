import { useState, useEffect } from "react";
import { loginAPI, fetchUserAPI } from "../../api/auth/authAPI";
import { saveToken, getToken, clearToken } from "../../utils/auth/authUtils";

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      const token = getToken();
      if (token) {
        try {
          const userData = await fetchUserAPI(token);
          setUser(userData);
        } catch {
          clearToken();
        }
      }
      setLoading(false);
    };

    initializeAuth();
  }, []);

  const login = async (username, password) => {
    const { access_token } = await loginAPI(username, password);
    saveToken(access_token);
    const userData = await fetchUserAPI(access_token);
    setUser(userData);
  };

  const logout = () => {
    clearToken();
    setUser(null);
  };

  return { user, loading, login, logout };
};