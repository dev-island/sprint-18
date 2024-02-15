import { FC } from "react";
import {
  Box,
  Stat,
  StatLabel,
  StatNumber,
  StatGroup,
  Text,
} from "@chakra-ui/react";

export type Props = {
  height: number;
  weight: number;
  abilities: string;
};

const Abilities: FC<Props> = ({ height, weight, abilities }) => {
  return (
    <Box w="full">
      <StatGroup
        boxShadow="inset 0 0 0 1px #e1e1e1"
        borderRadius="5px"
        padding="20px"
        textAlign="center"
      >
        <Stat position="initial">
          <StatLabel>Height</StatLabel>
          <StatNumber>{height + '"'}</StatNumber>
        </Stat>
        <Stat position="initial">
          <StatLabel>Weight</StatLabel>
          <StatNumber>{weight + "lbs"}</StatNumber>
        </Stat>
        <Stat position="initial">
          <StatLabel>Abilities</StatLabel>
          <Text
            textTransform="capitalize"
            textAlign="center"
            fontSize="2xl"
            fontWeight="semibold"
          >
            {abilities}
          </Text>
        </Stat>
      </StatGroup>
    </Box>
  );
};

export default Abilities;
