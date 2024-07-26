// src/Hooks/UserHooks.js
import { useSelector } from "react-redux";

export const useProfile = () => {
  const authState = useSelector((state) => state.customerreducer || {});
  const { isAuthenticated } = authState;
const authuser=sessionStorage.getItem("authToken");
  return {  authuser };
};
