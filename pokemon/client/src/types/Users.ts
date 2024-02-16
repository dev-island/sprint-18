export type User = {
  _id: string;
  username: string;
  email: string;
};

export type UserPokemon = {
  userId: string;
  pokemon: string[];
};