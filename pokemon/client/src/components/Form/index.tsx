import { FC, useState } from "react";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import InputGroup from "../InputGroup";
import { Input } from "./config";

export type Props = {
  onSubmit: (formData: Record<string, string>) => void;
  initState: Record<string, string>;
  inputs: Input[];
  title: string;
  cta: string;
};

const Form: FC<Props> = ({ onSubmit, initState, inputs, title, cta }) => {
  const [formData, setFormData] = useState(initState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const missingFields = Object.keys(formData).some(
      (key) => !formData[key as keyof typeof formData]
    );
    if (missingFields) {
      alert("Please fill in all fields");
      return;
    }

    onSubmit(formData);
    setFormData(initState);
  };
  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box p={2}>
        <Box textAlign="center">
          <Heading>{title}</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form>
            <Flex flexDir="column" gap={4}>
              {inputs.map((input) => (
                <InputGroup
                  isRequired={input.isRequired}
                  label={input.label}
                  name={input.name}
                  placeholder={input.placeholder}
                  type={input.type}
                  handleChange={handleChange}
                  key={input.name}
                />
              ))}
              <Button
                variant="outline"
                onClick={handleSubmit}
                width="full"
                mt={4}
              >
                {cta}
              </Button>
            </Flex>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default Form;
