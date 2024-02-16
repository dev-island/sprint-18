import PokemonList from "./views/PokemonList";
import Header from "./components/Header";
import Pokemon from "./views/Pokemon";
import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import AuthRoute from "./components/AuthRoute";
import Profile from "./views/Profile";
import Pokedex from "./views/Pokedex";
import Login from "./views/Login";
import SignUp from "./views/SignUp";

function App() {
  return (
    <Box>
      <Header />
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<PokemonList />} />
        <Route path="/pokemon/:pokemon" element={<Pokemon />} />
        <Route element={<AuthRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/pokedex" element={<Pokedex />} />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
