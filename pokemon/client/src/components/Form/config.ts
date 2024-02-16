export type Input = {
  isRequired: boolean;
  label: string;
  name: string;
  placeholder: string;
  type: string;
};

const loginInputs: Input[] = [
  {
    isRequired: true,
    label: "Username",
    name: "username",
    placeholder: "your username",
    type: "text",
  },
  {
    isRequired: true,
    label: "Password",
    name: "password",
    placeholder: "*******",
    type: "password",
  },
];

const loginInitState = {
  username: "",
  password: "",
};

const signUpInputs: Input[] = [
  ...loginInputs,
  {
    isRequired: true,
    label: "Email",
    name: "email",
    placeholder: "test@test.com",
    type: "email",
  },
];

export const loginForm = {
  inputs: loginInputs,
  initState: loginInitState,
  title: "Login",
  cta: "Sign In",
};

export const signUpForm = {
  inputs: signUpInputs,
  initState: { ...loginInitState, username: "" },
  title: "Sign Up",
  cta: "Create Account",
};
