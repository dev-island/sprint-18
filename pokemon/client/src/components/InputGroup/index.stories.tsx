import { Meta, StoryObj } from '@storybook/react';

import InputGroup, { Props } from '.';

const meta: Meta<typeof InputGroup> = {
  argTypes: {},
  component: InputGroup,
  title: 'components/AuthForm/components/InputGroup',
};

export default meta;
type Story = StoryObj<typeof InputGroup>;

const args: Props = {
  isRequired: true,
  label: 'Email',
  name: 'email',
  placeholder: 'test@test.com',
  type: 'email',
  handleChange: (event) => {
    console.log(event.target.value);
  },
};

export const Primary: Story = {
  args,
};
