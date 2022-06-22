import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Header from '../components/Header';
import { data } from '../utils';

export default function Home() {
  const [hole, setHole] = useState(20);
  const [up, setUp] = useState(5);
  const [down, setDown] = useState(3);

  const moves = hole / (up - down);

  const isWideVersionMd = useBreakpointValue({
    base: false,
    md: true,
  });

  function handleCalculate() {
    let newCurrent = 0;

    data.splice(0, data.length);

    for (let move = 0; move < moves; move++) {
      newCurrent = newCurrent + (up - down);
      data.push({ name: `Mov ${move}`, minhoca: newCurrent, amt: newCurrent });
    }
  }

  return (
    <>
      <Head>
        <title>Challenge</title>
      </Head>

      <Header />

      <Flex
        gap="5"
        maxW="720"
        m="0 auto"
        px="6"
        flexDirection="column"
        align="center"
        mt="-10"
      >
        <Box
          maxW="720"
          bgColor="pGray.700"
          borderRadius="5"
          p="3"
          mx="auto"
          textAlign="justify"
        >
          <Text fontSize={isWideVersionMd ? 'md' : 'xs'}>
            A aplicação consiste em uma simulação onde uma minhoca se encontra
            em um buraco e ela irá sair do buraco conforme os dados informados
            abaixo, clique em calcular e confira os resultados!
          </Text>
        </Box>
        <Flex gap="5" flexWrap="wrap" justify="center">
          <Box w="40">
            <Text>Buraco</Text>
            <Flex align="flex-end">
              <Input
                placeholder="20"
                type="number"
                value={hole}
                onChange={e => setHole(Number(e.target.value))}
              />
              <Text ml="2">cm</Text>
            </Flex>
          </Box>
          <Box w="40">
            <Text>Subir</Text>
            <Flex align="flex-end">
              <Input
                placeholder="5"
                type="number"
                value={up}
                onChange={e => setUp(Number(e.target.value))}
              />
              <Text ml="2">cm</Text>
            </Flex>
          </Box>
          <Box w="40">
            <Text>Descer</Text>
            <Flex align="flex-end">
              <Input
                placeholder="3"
                type="number"
                value={down}
                onChange={e => setDown(Number(e.target.value))}
              />
              <Text ml="2">cm</Text>
            </Flex>
          </Box>
        </Flex>
        <Link href="/result">
          <Button colorScheme="green" onClick={handleCalculate}>
            Calcular
          </Button>
        </Link>
      </Flex>
    </>
  );
}
