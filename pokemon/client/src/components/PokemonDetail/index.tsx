import { FC } from "react";
import { useState, useEffect } from "react";
import { Flex, VStack, Box, Text, Image } from "@chakra-ui/react";

import { PokemonColors } from "../../constants";

import PokemonTypes from "./Types";
import Abilities from "./Abilities";
import Stats from "./Stats";
import Moves from "./Moves";
import {
  PokemonAbilities,
  PokemonMove,
  PokemonSprites,
  PokemonStat,
  PokemonType,
} from "../../types";

type Sprite = "front_default" | "back_default";

export type Props = {
  name: string;
  height: number;
  weight: number;
  abilities: PokemonAbilities[];
  sprites: PokemonSprites;
  types: { type: { name: PokemonType } }[];
  stats: PokemonStat[];
  moves: PokemonMove[];
};

const PokemonDetail: FC<Props> = ({
  name,
  height,
  weight,
  abilities,
  sprites,
  types,
  stats,
  moves,
}) => {
  const [img, setImg] = useState<Sprite>("front_default");

  useEffect(() => {
    const timer = setTimeout(() => {
      img === "front_default"
        ? setImg("back_default")
        : setImg("front_default");
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [img]);

  const abilitiesStr = abilities
    .map(({ ability }) => ability.name)
    .join(", ");

  return (
    <>
      <Text
        fontWeight="Bold"
        fontSize="36px"
        margin="20px 5px 5px"
        textTransform="capitalize"
        textAlign="center"
      >
        {name}
      </Text>

      <Flex
        h={{ base: "auto", md: "100vh" }}
        direction={{ base: "column", md: "row" }}
      >
        <VStack w="full" h="full" p={5} spacing={5} alignItems="flex-start">
          <Box w="full" bgColor={PokemonColors[types[0].type.name]}>
            <Image
              display="block"
              boxSize="400px"
              m="auto"
              src={sprites[img]}
              alt={name}
            />
          </Box>
          <Abilities
            height={height}
            weight={weight}
            abilities={abilitiesStr}
          />
        </VStack>

        <VStack w="full" h="full" p={5} spacing={5} alignItems="flex-start">
          <Text fontWeight="Bold" fontSize="24px">
            Type
          </Text>
          <PokemonTypes typeList={types} />
          <Text fontWeight="Bold" fontSize="24px">
            Stats
          </Text>
          <Stats statList={stats} />
          <Text fontWeight="Bold" fontSize="24px">
            Moves
          </Text>
          <Moves movesList={moves} />
        </VStack>
      </Flex>
    </>
  );
};

export default PokemonDetail;
