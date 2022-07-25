import { useContext } from "react";
import { userContext } from "../contexts/userContext";

export const useAuth = () => {
    return useContext(userContext);
  };