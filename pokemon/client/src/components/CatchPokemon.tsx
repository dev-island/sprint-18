import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  Text,
  CircularProgress,
} from "@chakra-ui/react";
import InputGroup from "./InputGroup";

import { FC, useState } from "react";

export type Props = {
  handleUpdate: (nickName: string) => void;
  name: string;
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  handleCatch: () => void;
  loading: boolean;
};

const CatchPokemon: FC<Props> = ({
  name,
  handleUpdate,
  isOpen,
  onClose,
  handleCatch,
  loading,
}) => {
  const [nickName, setNickname] = useState("");

  const submit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (!nickName) {
      return onClose();
    }
    handleUpdate(nickName);
  };

  return (
    <Box position="absolute" right={0}>
      <Button onClick={handleCatch}>
        {loading ? <CircularProgress /> : "Catch"}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>You caught {name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Text>Would you like to give them a nickname?</Text>
              <InputGroup
                type="text"
                label="Nickname"
                name="nickname"
                placeholder="Enter nickname"
                handleChange={(e) => setNickname(e.target.value)}
              />
            </Box>
            <Box>
              <Button onClick={submit}>Submit</Button>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default CatchPokemon;
