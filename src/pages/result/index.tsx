import { Box, Button, Flex, Text, useBreakpointValue } from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import Header from '../../components/Header';
import { data } from '../../utils';

export default function Result() {
  const isWideVersionMd = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <>
      <Head>
        <title>Challenge</title>
      </Head>

      <Header />

      <Box
        maxW="60"
        bgColor="pGray.700"
        borderRadius="5"
        p="5"
        mt="-10"
        mx="auto"
        textAlign="center"
      >
        <Text>Resultados</Text>
      </Box>

      <Flex maxW="720" align="center" m="0 auto" flexDirection="column" mt="5">
        <LineChart
          width={isWideVersionMd ? 600 : 300}
          height={300}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <Line
            type="monotone"
            dataKey="minhoca"
            stroke="#487854"
            activeDot={{ r: 8 }}
          />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip labelStyle={{ color: 'black' }} />
          <YAxis />
          <XAxis dataKey="name" />
          <Legend />
        </LineChart>

        <Text fontSize="xs">
          A minhoca precisou de {data.length} movimentos para sair do buraco
        </Text>

        <Link href="/">
          <Button colorScheme="red" my="2">
            Voltar
          </Button>
        </Link>
      </Flex>
    </>
  );
}
