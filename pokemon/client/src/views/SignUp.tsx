import { FC } from "react";
import { signUpForm } from "../components/Form/config";
import {
  Button,
  Center,
  CircularProgress,
  Container,
  Flex,
} from "@chakra-ui/react";

import { Link, useNavigate } from "react-router-dom";
import { SignUpRequest } from "../api/auth";
import useAuthContext from "../hooks/useAuthContext";
import Form from "../components/Form";
import NavLink from "../components/NavLink";

const SignUp: FC = () => {
  const navigate = useNavigate();
  const { signUp, loading } = useAuthContext();

  const handleSubmit = async (formData: Record<string, string>) => {
    await signUp(formData as SignUpRequest);
  };

  return (
    <Container maxW="container.xl">
      <Center>
        {loading ? (
          <CircularProgress isIndeterminate />
        ) : (
          <Flex flexDir="column" align="center">
            <Form {...signUpForm} onSubmit={handleSubmit} />
            <Link to="/login">
              Already have an account?
            </Link>
          </Flex>
        )}
      </Center>
    </Container>
  );
};

export default SignUp;
