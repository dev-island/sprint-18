import { FC } from "react";
import { loginForm } from "../components/Form/config";
import {
  Center,
  CircularProgress,
  Container,
  Flex,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { LoginRequest } from "../api/auth";
import useAuthContext from "../hooks/useAuthContext";
import Form from "../components/Form";

const Login: FC = () => {
  const { signIn, loading } = useAuthContext();

  const handleSubmit = async (formData: Record<string, string>) => {
    signIn(formData as LoginRequest);
  };

  return (
    <Container maxW="container.xl">
      <Center>
        {loading ? (
          <CircularProgress isIndeterminate />
        ) : (
          <Flex flexDir="column" align="center">
            <Form {...loginForm} onSubmit={handleSubmit} />
            <Link to="/sign-up">
              Don't have an account?
            </Link>
          </Flex>
        )}
      </Center>
    </Container>
  );
};

export default Login;
