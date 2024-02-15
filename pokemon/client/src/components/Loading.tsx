import { FC } from 'react';
import { Container, Center, Spinner } from '@chakra-ui/react';

const Loading: FC = () => {
  return (
    <Container>
      <Center>
        <Spinner />
      </Center>
    </Container>
  );
}

export default Loading;
