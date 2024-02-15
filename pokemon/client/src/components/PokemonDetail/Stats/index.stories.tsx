import { Meta, StoryObj } from '@storybook/react';

import Stats, { Props } from '.';

const meta: Meta<typeof Stats> = {
  argTypes: {},
  component: Stats,
  title: 'components/PokemonDetail/Stats',
};

export default meta;
type Story = StoryObj<typeof Stats>;

const args: Props = {
  statList: [
    {
      base_stat: 10,
      effort: 1,
      stat: {
        name: 'stat1',
      },
    },
    {
      base_stat: 20,
      effort: 2,
      stat: {
        name: 'stat2',
      },
    },
  ],
};

export const Primary: Story = {
  args,
};
