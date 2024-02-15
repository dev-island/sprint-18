import { Meta, StoryObj } from '@storybook/react';

import Header, { Props } from '.';

const meta: Meta<typeof Header> = {
  argTypes: {},
  component: Header,
  title: 'components/Header',
};

export default meta;
type Story = StoryObj<typeof Header>;

const args: Props = {
  goBack: () => {},
};

export const Primary: Story = {
  args,
};
