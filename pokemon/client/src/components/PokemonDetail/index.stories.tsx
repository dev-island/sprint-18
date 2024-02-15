import { Meta, StoryObj } from "@storybook/react";

import PokemonDetail, { Props } from ".";

const meta: Meta<typeof PokemonDetail> = {
  argTypes: {},
  component: PokemonDetail,
  title: "components/PokemonDetail",
};

export default meta;
type Story = StoryObj<typeof PokemonDetail>;

const args: Props = {
  name: "pokemon",
  height: 10,
  weight: 20,
  sprites: {
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
    back_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
  },
  types: [
    {
      type: {
        name: "fire",
      },
    },
    {
      type: {
        name: "water",
      },
    },
  ],
  stats: [
    {
      base_stat: 10,
      effort: 1,
      stat: {
        name: "stat1",
      },
    },
    {
      base_stat: 20,
      effort: 2,
      stat: {
        name: "stat2",
      },
    },
  ],
  abilities: [
    {
      ability: {
        name: "ability1",
      },
    },
    {
      ability: {
        name: "ability2",
      },
    },
  ],
  moves: [
    {
      move: {
        name: "move1",
      },
    },
    {
      move: {
        name: "move2",
      },
    },
  ],
};

export const Primary: Story = {
  args,
};
