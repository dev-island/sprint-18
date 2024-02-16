import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const useUserContext = () => {
  const { user, loading } = useContext(UserContext);

  return { user, loading };
};
