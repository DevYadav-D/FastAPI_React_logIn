import { loginAPI, fetchUserAPI } from "../../api/auth/authAPI";

export const authenticateUser = async (username, password) => {
  const { access_token } = await loginAPI(username, password);
  return access_token;
};

export const getUser = async (token) => {
  return await fetchUserAPI(token);
};