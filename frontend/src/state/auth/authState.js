import { atom } from "jotai"; // Example using Jotai, replace with Redux/Zustand as needed

export const authState = atom({
  user: null,
  token: null,
});