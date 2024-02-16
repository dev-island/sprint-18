import { FC, useEffect, useState } from "react";
import { Container, Skeleton, SkeletonText } from "@chakra-ui/react";
// import PokemonDetail from "../component/PokemonDetail/PokemonDetail";
import { Pokemon } from "../types";
import { POKE_ROOT } from "../constants/apis";
import PokemonDetail from "../components/PokemonDetail";
import { useParams } from "react-router-dom";

const PokemonView: FC = () => {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pokemon, setPokemon] = useState<Pokemon>();

  async function fetchPokemon() {
    setLoading(true);
    try {
      const res = await fetch(`${POKE_ROOT}pokemon/${params.pokemon}`);
      const result = await res.json();
      // console.log(result);
      setPokemon(result);
    } catch (error) {
      console.log(error);
      setError("Error fetching data");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchPokemon();
  }, []);

  if (loading || !pokemon?.id)
    return (
      <Container maxW="container.xl">
        <Skeleton height="100px" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
      </Container>
    );

  if (error) {
    return (
      <Container>
        <p>{error}</p>
      </Container>
    );
  }

  return (
    <Container maxW="container.xl">
      <PokemonDetail {...pokemon} />
    </Container>
  );
};

export default PokemonView;
