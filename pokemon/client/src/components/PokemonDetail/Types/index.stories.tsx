import { Meta, StoryObj } from '@storybook/react';

import Types, { Props } from '.';

const meta: Meta<typeof Types> = {
  argTypes: {
    typeList: {
      control: {
        type: 'object',
      },
    },
  },
  component: Types,
  title: 'components/PokemonDetail/Types',
};

export default meta;
type Story = StoryObj<typeof Types>;

const args: Props = {
  typeList: [
    {
      type: {
        name: 'fire',
      },
    },
    {
      type: {
        name: 'water',
      },
    },
  ],
};

export const Primary: Story = {
  args,
};
