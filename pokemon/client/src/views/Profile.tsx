import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { useUserContext } from "../hooks/useUserContext";

const Profile: React.FC = () => {
  const { user, loading } = useUserContext();

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <Box padding="4" borderWidth="1px" borderRadius="lg">
      <Heading as="h1" size="lg">
        Profile
      </Heading>
      <Text mt={4}>Username: {user?.username}</Text>
      <Text mt={4}>Email: {user?.email}</Text>
    </Box>
  );
};

export default Profile;
