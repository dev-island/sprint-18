import { Meta, StoryObj } from "@storybook/react";

import Abilities, { Props } from ".";

const meta: Meta<Props> = {
  argTypes: {
    height: {
      control: {
        type: "number",
      },
    },
    weight: {
      control: {
        type: "number",
      },
    },
    abilities: {
      control: {
        type: "text",
      },
    },
  },
  component: Abilities,
  title:
    "Components/PokemonDetail/Abilities",
};

export default meta;
type Story = StoryObj<Props>;

export const Primary: Story = {
  args: {
    height: 10,
    weight: 10,
    abilities: "Blaze, Solar-Power",
  },
};
