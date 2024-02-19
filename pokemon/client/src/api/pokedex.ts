import { API_ROOT } from "../constants/apis";
import requestHandler from "../helpers/requestHandler";
import { OwnedPokemon, UncaughtPokemon } from "../hooks/usePokedex";

type CatchPokemonResponse = {
  message: string;
  pokemon: OwnedPokemon;
};

export const catchPokemon = async (userId: string, pokemon: UncaughtPokemon) => {
  return await requestHandler<CatchPokemonResponse>(
    `${API_ROOT}/users/${userId}/pokemon/`,
    "POST",
    {
      pokemon,
    }
  );
};

export const release = async (userId: string, pokemonId: string) => {
  return await requestHandler<{ message: string }>(
    `${API_ROOT}/users/${userId}/pokemon/${pokemonId}`,
    "DELETE"
  );
};

type UpdateNicknameResponse = {
  message: string;
  pokemon: OwnedPokemon;
};

export const updateNickname = async (
  userId: string,
  pokemonId: string,
  nickname: string
) => {
  return (
    (await requestHandler) <
    UpdateNicknameResponse>(
      `${API_ROOT}/users/${userId}/pokemon/${pokemonId}`,
      "PUT",
      {
        nickname,
      }
    )
  );
};

type GetPokemonResponse = {
  pokemon: OwnedPokemon[];
};

export const getPokemon = async (userId: string) => {
  return await requestHandler<GetPokemonResponse>(
    `${API_ROOT}/users/${userId}/pokemon`,
    "GET",
    null
  );
};
