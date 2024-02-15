import { FC } from "react";
import { Text, Box, Progress, Grid } from "@chakra-ui/react";
import { PokemonStat } from "../../../types";

export type Props = {
  statList: PokemonStat[];
};

const Stats: FC<Props> = ({ statList }) => {
  return (
    <Box w="full">
      {statList.map((stat) => (
        <Box key={stat.stat.name}>
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <Box w="100%">
              <Text textTransform="uppercase">{stat.stat.name}</Text>
            </Box>
            <Box w="100%">
              <Text textTransform="uppercase" textAlign="right">
                {stat.base_stat}
              </Text>
            </Box>
          </Grid>
          <Progress
            mt="5px"
            position="inherit"
            colorScheme="teal"
            size="xs"
            value={stat.base_stat}
          />
        </Box>
      ))}
    </Box>
  );
};

export default Stats;
