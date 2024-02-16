import { API_ROOT } from "../constants/apis";
import requestHandler from "../helpers/requestHandler";
import { OwnedPokemon, UncaughtPokemon } from "../hooks/usePokedex";

export const catchPokemon = async (userId: string, pokemon: UncaughtPokemon) => {
  return await requestHandler<OwnedPokemon>(
    `${API_ROOT}/users/${userId}/pokemon/`,
    "POST",
    {
      pokemon,
    }
  );
};

export const release = async (userId: string, pokemonId: string) => {
  return await requestHandler(
    `${API_ROOT}/users/${userId}/pokemon/${pokemonId}`,
    "DELETE"
  );
};

export const updateNickname = async (
  userId: string,
  pokemonId: string,
  nickname: string
) => {
  return await requestHandler(
    `${API_ROOT}/users/${userId}/pokemon/${pokemonId}`,
    "PUT",
    {
      nickname,
    }
  );
};

export const getPokemon = async (userId: string) => {
  return await requestHandler<OwnedPokemon[]>(
    `${API_ROOT}/users/${userId}/pokemon`,
    "GET",
    null
  );
};
