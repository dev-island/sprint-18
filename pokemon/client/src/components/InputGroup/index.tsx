import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { FC } from "react";
export type Props = {
  isRequired?: boolean;
  label: string;
  name: string;
  placeholder: string;
  type: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputGroup: FC<Props> = ({
  isRequired,
  label,
  name,
  placeholder,
  type,
  handleChange,
}) => {
  return (
    <FormControl isRequired={isRequired}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input
        type={type}
        placeholder={placeholder}
        size="lg"
        name={name}
        onChange={handleChange}
      />
    </FormControl>
  );
};

export default InputGroup;