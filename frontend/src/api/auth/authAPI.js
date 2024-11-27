import { API_BASE_URL } from "../../config/auth/config";

export const loginAPI = async (username, password) => {
  const response = await fetch(`${API_BASE_URL}/auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ username, password }),
  });

  if (!response.ok) {
    throw new Error("Invalid credentials");
  }

  return await response.json(); // { access_token, token_type }
};

export const fetchUserAPI = async (token) => {
  const response = await fetch(`${API_BASE_URL}/auth/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  return await response.json(); // User object
};