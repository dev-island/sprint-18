import { Meta, StoryObj } from '@storybook/react';

import Moves, { Props } from '.';

const meta: Meta<typeof Moves> = {
  argTypes: {},
  component: Moves,
  title: 'components/PokemonDetail/Moves',
};

export default meta;
type Story = StoryObj<typeof Moves>;

const args: Props = {
  movesList: [
    {
      move: {
        name: 'move1',
      },
    },
    {
      move: {
        name: 'move2',
      },
    },
  ],
};

export const Primary: Story = {
  args,
};
