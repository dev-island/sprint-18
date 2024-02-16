import { Button } from "@chakra-ui/react";
import { FC } from "react";

export type Props = {
  navigate: (path: string) => void;
  children: React.ReactNode;
};

const NavLink: FC<Props> = ({ navigate, children }) => {
  return (
    <Button p={2} variant="link" onClick={() => navigate("/login")}>
      {children}
    </Button>
  );
};

export default NavLink;
