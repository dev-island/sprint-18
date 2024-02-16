import { FC, useState, useEffect } from "react";
import { Container, Center, SimpleGrid } from "@chakra-ui/react";
import { NamedAPIResource } from "../types";
import { POKE_ROOT } from "../constants/apis";
import PokemonCard from "../components/PokemonCard";
import Loading from "../components/Loading";
import axios from 'axios';

const PokemonList: FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pokemon, setPokemon] = useState<NamedAPIResource[]>([]);

  async function fetchPokemonAxios() {
    setLoading(true);
    try {
      const res = await axios.get(`${POKE_ROOT}pokemon?limit=150`);
      console.log('res', res.data)
      setPokemon(res.data.results);
    } catch (error) {
      console.log(error);
      setError("Error fetching data");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchPokemonAxios();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <Container>
        <Center>
          <p>{error}</p>
        </Center>
      </Container>
    );
  }

  return (
    <Center>
      <Container maxW="container.xl">
        <SimpleGrid columns={{ sm: 2, md: 5 }} marginTop="30px" spacing="20px">
          {pokemon.map((p, idx) => (
            <PokemonCard key={idx} name={p.name} id={idx + 1} />
          ))}
        </SimpleGrid>
      </Container>
    </Center>
  );
};

export default PokemonList;
