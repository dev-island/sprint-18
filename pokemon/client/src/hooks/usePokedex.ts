import { useContext, useEffect, useState } from "react";
import { Pokemon } from "../types";
import { useUserContext } from "./useUserContext";
import * as api from "../api/pokedex";
import { PokedexContext } from "../context/PokedexContext";
export type OwnedPokemon = {
  nickname?: string;
  name: string;
  _id: string;
  height: number;
  weight: number;
  img: string;
  id: number;
};

export type UncaughtPokemon = Omit<OwnedPokemon, "_id">;

const usePokedex = () => {
  const { user, loading: userLoading } = useUserContext();
  const { pokedex: _pokedex, setPokedex, loading, setLoading } =
    useContext(PokedexContext);
  // {
  //   name: "wartortle",
  //   height: 10,
  //   weight: 225,
  //   img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
  //   id: 8,
  //   _id: "1",
  //   nickname: "Blastoise",
  // },
  const pokedex = _pokedex as OwnedPokemon[];
  const [catching, setCatching] = useState("");

  const userId = user?._id;

  const getPokemon = async () => {
    try {
      if (!userId) {
        throw new Error("User is not authenticated");
      }
      setLoading(true);
      const res = await api.getPokemon(userId);
      setLoading(false);
      if (res.error) {
        throw res.error;
      }
      if (!res?.data?.pokemon) {
        throw new Error("Error: failed to fetch pokedex data");
      }
      if (res.data.pokemon.length) {
        setPokedex(res.data.pokemon);
      }
    } catch (error) {
      console.error("Error: ", error);
      setLoading(false);
    }
  };

  const catchPokemon = async (pokemon: UncaughtPokemon) => {
    try {
      if (!userId) {
        throw new Error("User is not authenticated");
      }
      setLoading(true);
      const res = await api.catchPokemon(userId, pokemon);
      console.log("RESPONSE FROM CATCH POKEMON", res);
      if (res.error) {
        throw res.error;
      }

      if (!res?.data?.pokemon?._id) {
        throw new Error("Error: failed to catch pokemon");
      }
      const caughtPokemon = res.data.pokemon;
      setCatching(caughtPokemon._id);
      setPokedex([...pokedex, caughtPokemon]);
      setLoading(false);
    } catch (error) {
      console.error("Error: ", error);
      setLoading(false);
    }
  };

  const release = async (pokemonId: string) => {
    try {
      if (!userId) {
        throw new Error("User is not authenticated");
      }
      setLoading(true);
      const res = await api.release(userId, pokemonId);
      setLoading(false);
      if (res.error) {
        throw res.error;
      }
      setPokedex(pokedex.filter((p) => p._id !== pokemonId));
    } catch (error) {
      console.error("Error: ", error);
      setLoading(false);
    }
  };

  const updateNickname = async (nickname: string) => {
    try {
      if (!userId) {
        throw new Error("User is not authenticated");
      }
      setLoading(true);
      const res = await api.updateNickname(userId, catching, nickname);
      setLoading(false);
      if (res.error) {
        throw res.error;
      }
      setPokedex(pokedex.map((p) => {
          if (p._id === catching) {
            return { ...p, nickname };
          }
          return p;
        })
      );
    } catch (error) {
      console.error("Error: ", error);
      setLoading(false);
    }
  };

  const checkHasCaught = (id: number) => {
    return pokedex.some((p) => p.id === id);
  };

  useEffect(() => {
    console.log("pokedex", pokedex);
  }, [pokedex]);

  return {
    pokedex,
    loading: loading || userLoading,
    getPokemon,
    catchPokemon,
    release,
    setCatching,
    updateNickname,
    checkHasCaught,
  };
};

export default usePokedex;
