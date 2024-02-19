import { createContext, useState } from "react";
import { OwnedPokemon } from "../hooks/usePokedex";

type Props = {
  children?: React.ReactNode;
};

type PokedexContextType = {
  pokedex?: OwnedPokemon[];
  setPokedex: (pokemon: OwnedPokemon[]) => void;
  loading: boolean;
  setLoading: (value: boolean) => void;
};

const initialContext: PokedexContextType = {
  pokedex: [],
  setPokedex: () => {},
  loading: false,
  setLoading: () => {},
};

export const PokedexContext = createContext<PokedexContextType>(initialContext);

const PokedexProvider = ({ children }: Props) => {
  const [pokedex, setPokedex] = useState<OwnedPokemon[]>([]);
  const [loading, setLoading] = useState(false);

  return (
    <PokedexContext.Provider
      value={{ loading, setLoading, pokedex, setPokedex }}
    >
      {children}
    </PokedexContext.Provider>
  );
};

export default PokedexProvider;
