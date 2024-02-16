import { FC } from "react";
import { Card, Text, Image, Center } from "@chakra-ui/react";
export type Props = {
  name: string;
  id: number;
  nickname?: string;
};

const CaughtPokemonCard: FC<Props> = ({ name, id, nickname }) => {
  return (
    <Card
      variant="elevated"
      rounded="md"
      cursor="pointer"
      width="200px"
      padding="10px"
      _hover={{
        boxShadow: "md",
      }}
    >
      <Center>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt={name}
        />
      </Center>
      <Text size="md">{nickname ? nickname : name}</Text>
      {nickname && (
        <Text fontSize="sm" align="right">
          {name}
        </Text>
      )}
    </Card>
  );
};

export default CaughtPokemonCard;
