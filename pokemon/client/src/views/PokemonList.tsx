import { FC, useState, useEffect } from "react";
import { Container, Center, SimpleGrid } from "@chakra-ui/react";
import { NamedAPIResource } from "../types";
import { ROOT } from "../constants";
import PokemonCard from "../components/PokemonCard";
import Loading from "../components/Loading";
import axios from 'axios';

export type Props = {
  viewPokemon: (id: number) => void;
};

const PokemonList: FC<Props> = ({
  viewPokemon,
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pokemon, setPokemon] = useState<NamedAPIResource[]>([]);

  // async function fetchPokemon() {
  //   setLoading(true);
  //   try {
  //     const res = await fetch(`${ROOT}pokemon?limit=150`);
  //     const result = await res.json();
  //     console.log(result);
  //     setPokemon(result.results);
  //   } catch (error) {
  //     console.log(error);
  //     setError("Error fetching data");
  //   }
  //   setLoading(false);
  // }

  async function fetchPokemonAxios() {
    setLoading(true);
    try {
      const res = await axios.get(`${ROOT}pokemon?limit=150`);
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
            <PokemonCard key={idx} name={p.name} id={idx + 1} viewPokemon={viewPokemon} />
          ))}
        </SimpleGrid>
      </Container>
    </Center>
  );
};

export default PokemonList;
