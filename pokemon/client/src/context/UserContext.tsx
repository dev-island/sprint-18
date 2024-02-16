import { createContext, useEffect, useState } from "react";
import { User } from "../types/Users";
import * as api from "../api/users";
import useAuthContext from "../hooks/useAuthContext";

type Props = {
  children?: React.ReactNode;
};

type IUserContext = {
  user?: User;
  setUser: (value: User) => void;
  loading: boolean;
  setLoading: (value: boolean) => void;
};

const initialContext: IUserContext = {
  user: undefined,
  setUser: () => {},
  loading: false,
  setLoading: () => {},
};

export const UserContext = createContext<IUserContext>(initialContext);

const UserProvider = ({ children }: Props) => {
  const { isAuthenticated, token } = useAuthContext();
  const [user, setUser] = useState<User | undefined>();
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    try {
      if (!isAuthenticated || !token) {
        throw new Error("User is not authenticated");
      }

      setLoading(true);
      const { data, error } = await api.getUser(token);
      setLoading(false);
      if (error) {
        throw error;
      }
      if (!data) {
        throw "Error: Failed to get user";
      }
      console.log("DATA", data);
      setUser(data);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  useEffect(() => {
    if (isAuthenticated && token && !user) {
      fetchUser();
    }
  }, [isAuthenticated, token]);

  return (
    <UserContext.Provider value={{ user, setUser, loading, setLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
