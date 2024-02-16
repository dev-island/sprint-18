import { Meta, StoryObj } from '@storybook/react';

import Header from '.';

const meta: Meta<typeof Header> = {
  argTypes: {},
  component: Header,
  title: 'components/Header',
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Primary: Story = {
  args: {},
};
