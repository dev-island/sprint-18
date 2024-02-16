import { Meta, StoryObj } from '@storybook/react';

import Form, { Props } from '.';

const meta: Meta<typeof Form> = {
  argTypes: {},
  component: Form,
  title: 'components/AuthForm/Form',
};

export default meta;
type Story = StoryObj<typeof Form>;

const loginArgs: Props = {
  onSubmit: (formData) => {
    console.log(formData);
  },
  initState: {
    email: '',
    password: '',
  },
  inputs: [
    {
      isRequired: true,
      label: 'Email',
      name: 'email',
      placeholder: 'test@test.com',
      type: 'email',
    },
    {
      isRequired: true,
      label: 'Password',
      name: 'password',
      placeholder: '*******',
      type: 'password',
    },
  ],
  title: 'Login',
  cta: 'Sign In',
};

export const Login: Story = {
  args: loginArgs,
};

export const SignUp: Story = {
  args: {
    ...loginArgs,
    initState: {
      email: '',
      password: '',
      username: '',
    },
    inputs: [
      ...loginArgs.inputs,
      {
        isRequired: true,
        label: 'Username',
        name: 'username',
        placeholder: 'test',
        type: 'text',
      },
    ],
    title: 'Sign Up',
    cta: 'Create Account',
  },
};
