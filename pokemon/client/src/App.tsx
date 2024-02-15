import { useState } from "react";
import PokemonList from "./views/PokemonList";
import Header from "./components/Header";
import Pokemon from "./views/Pokemon";
import { Box } from "@chakra-ui/react";
import { Routes, Route, useParams } from "react-router-dom";

function App() {
  const [currentPokemonId, setCurrentPokemonId] = useState<number | null>(null);
  return (
    <Box>
      <Header goBack={() => setCurrentPokemonId(null)} />
      <Routes>
        <Route
          path="/"
          element={
            <PokemonList
              viewPokemon={(id: number) => setCurrentPokemonId(id)}
            />
          }
        />
        <Route path="/pokemon/:pokemon" element={<Pokemon />} />
      </Routes>
    </Box>
  );
}

export default App;
