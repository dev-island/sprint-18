import { FC, useEffect } from "react";
import { Container, Center, SimpleGrid } from "@chakra-ui/react";
import Loading from "../components/Loading";
import usePokedex from "../hooks/usePokedex";
import CaughtPokemonCard from "../components/CaughtPokemonCard";

const PokemonList: FC = () => {
  const { loading, pokedex, getPokemon } = usePokedex()
  console.log("pokedex", pokedex)
  useEffect(() => {
    getPokemon();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Center>
      <Container maxW="container.xl">
        <SimpleGrid columns={{ sm: 2, md: 5 }} marginTop="30px" spacing="20px">
          {pokedex.length ? pokedex.map((p, idx) => (
            <CaughtPokemonCard
              key={idx}
              name={p.name}
              id={idx + 1}
              nickname={p.nickname}
              img={p.img}
              idx={idx}
            />
          )): <Center>No Pokemon caught yet</Center>}
        </SimpleGrid>
      </Container>
    </Center>
  );
};

export default PokemonList;
