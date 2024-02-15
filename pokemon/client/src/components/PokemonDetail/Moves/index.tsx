import { FC } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Table,
  Tbody,
  Tr,
  Td,
} from "@chakra-ui/react";
import { PokemonMove } from "../../../types";

export type Props = {
  movesList: PokemonMove[];
};

const Moves: FC<Props> = ({ movesList }) => {
  return (
    <Box w="full">
      <Accordion allowMultiple>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Show Moves
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4} overflow="scroll">
            <Table variant="simple">
              <Tbody>
                {movesList.map((move) => (
                  <Tr key={move.move.name}>
                    <Td>{move.move.name}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default Moves;
