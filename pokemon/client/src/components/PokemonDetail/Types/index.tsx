import { FC } from "react";
import { Box, Badge } from "@chakra-ui/react";
import { PokemonColors } from "../../../constants/PokemnonColors";
import { PokemonType } from "../../../types";

export type Props = {
  typeList: { type: { name: PokemonType } }[];
}


const PokemonTypes: FC<Props> = ({ typeList }) => {
  return (
    <Box>
      {typeList.map((type) => (
        <Badge
          variant="solid"
          mr="10px"
          px="30px"
          textTransform="capitalize"
          fontSize="xl"
          bgColor={PokemonColors[type.type.name]}
          key={type.type.name}
        >
          {type.type.name}
        </Badge>
      ))}
    </Box>
  );
}

export default PokemonTypes;