import { FC } from "react";
import { Card, Text, Image, Center } from "@chakra-ui/react";
export type Props = {
  name: string;
  id: number;
  nickname?: string;
  img: string;
  idx: number;
};

const CaughtPokemonCard: FC<Props> = ({ name, img, nickname, idx }) => {
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
      <Text fontSize="sm" align="left">
        {idx + 1}
      </Text>
      <Center>
        <Image src={img} alt={name} />
      </Center>
      <Text size="md" fontWeight={700}>
        {nickname ? nickname : name}
      </Text>
      {nickname && (
        <Text fontSize="sm" align="left">
          {name}
        </Text>
      )}
    </Card>
  );
};

export default CaughtPokemonCard;
