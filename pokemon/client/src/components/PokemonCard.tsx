import { FC } from "react";
import { Card, Text, Image, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
export type Props = {
  name: string;
  id: number;
};

const PokemonCard: FC<Props> = ({ name, id }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/pokemon/${id}`);
  };
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
      onClick={handleClick}
    >
      <Text fontSize="sm" align="right">
        # {id}
      </Text>
      <Center>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt={name}
        />
      </Center>
      <Text size="md">{name}</Text>
    </Card>
  );
};

export default PokemonCard;
