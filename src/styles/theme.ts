import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    pGray: {
      '50': '#F3F2F2',
      '100': '#DDDCDA',
      '200': '#C7C5C2',
      '300': '#B1AFAA',
      '400': '#9B9892',
      '500': '#85817A',
      '600': '#6A6762',
      '700': '#504E49',
      '900': '#1B1A18',
    },
    green: {
      '800': '#369874',
    },
  },
  fonts: {
    heading: 'Inter',
    body: 'Inter',
  },
  components: {
    Text: {
      baseStyle: {
        fontSize: 'lg',
        fontWeight: 'normal',
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: 'pGray.900',
        color: 'pGray.50',
      },
    },
  },
});
