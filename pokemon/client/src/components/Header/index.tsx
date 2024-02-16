import { FC } from "react";
import { Box, Flex, Image, Button, useColorMode } from "@chakra-ui/react";
import PokemonLogo from "../../assets/pokemon-logo.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";

const Header: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, logout } = useAuthContext();
  const { colorMode, toggleColorMode } = useColorMode();

  const handleNavigateAuth = () => {};

  return (
    <Flex
      flexDirection="row"
      justifyContent="space-between"
      width="100%"
      as="nav"
      my={8}
      px={4}
    >
      <Box onClick={() => navigate("/")}>
        <Image
          src={PokemonLogo}
          cursor="pointer"
          alt="logo"
          width="120px"
          height="50px"
        />
      </Box>
      <Flex gap={4} align="center">
        {isAuthenticated ? (
          <>
            <Link to="/profile">Profile</Link>
            <Link to="/pokedex">Pokedex</Link>
            <Button
              p={2}
              variant={"link"}
              onClick={logout}
              outline="none"
              border="none"
            >
              Logout
            </Button>
          </>
        ) : (
          <Link to="/sign-up">Sign Up</Link>
        )}
        <Link to="/">Home</Link>
        <Button
          p={2}
          variant={"link"}
          onClick={toggleColorMode}
          outline="none"
          border="none"
        >
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header;
