export type NamedAPIResource = {
  name: string;
  url: string;
};

export type NamedAPIResourceList = {
  count: number;
  next: string;
  previous: string;
  results: NamedAPIResource[];
};

export type Pokemon = {
  id: number;
  name: string;
  height: number;
  weight: number;
  abilities: PokemonAbilities[];
  sprites: PokemonSprites;
  types: { type: { name: PokemonType } }[];
  stats: PokemonStat[];
  moves: PokemonMove[];
};

export type PokemonList = {
  count: number;
  next: string;
  previous: string;
  results: NamedAPIResource[];
};

export type Sprite = "front_default" | "back_default";

export type PokemonSprites = Record<Sprite, string>;

export type PokemonMove = {
  move: { name: string };
};

export type PokemonStat = {
  stat: {
    name: string;
  };
  base_stat: number;
  effort: number;
};

export type PokemonType =
  | "normal"
  | "fire"
  | "water"
  | "electric"
  | "grass"
  | "ice"
  | "fighting"
  | "poison"
  | "ground"
  | "flying"
  | "psychic"
  | "bug"
  | "rock"
  | "ghost"
  | "dragon"
  | "dark"
  | "steel"
  | "fairy";

export type PokemonAbilities = {
  ability: {
    name: string;
  };
};
