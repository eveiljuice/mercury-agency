import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  fonts: {
    heading: `'Orbitron', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  colors: {
    brand: {
      50: '#fff5eb',
      100: '#ffe0c2',
      200: '#ffcb99',
      300: '#ffb670',
      400: '#ffa147',
      500: '#ff8c42', // Copper accent
      600: '#d97941',
      700: '#cd7f32', // Primary bronze
      800: '#b8732d',
      900: '#52301a', // Dark bronze
    },
    background: {
      primary: '#0a0604',
      secondary: '#1a0f0d',
      tertiary: '#2a1810',
    },
    text: {
      primary: '#ffffff',
      secondary: '#f5deb3',
      muted: '#c9a871',
    }
  },
  styles: {
    global: {
      body: {
        bg: 'background.primary',
        color: 'text.primary',
        fontFamily: 'body',
      },
      '*::selection': {
        bg: 'brand.700',
        color: 'white',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'semibold',
        borderRadius: 'lg',
      },
      variants: {
        bronze: {
          bg: 'linear-gradient(135deg, #cd7f32 0%, #ff8c42 100%)',
          color: 'white',
          _hover: {
            transform: 'translateY(-2px)',
            boxShadow: '0 0 30px rgba(205, 127, 50, 0.5)',
            _disabled: {
              transform: 'none',
            },
          },
          _active: {
            transform: 'translateY(0)',
          },
          transition: 'all 0.3s ease',
        },
        bronzeOutline: {
          border: '2px solid',
          borderColor: 'brand.700',
          color: 'brand.700',
          _hover: {
            bg: 'brand.700',
            color: 'white',
            transform: 'translateY(-2px)',
            boxShadow: '0 0 20px rgba(205, 127, 50, 0.3)',
          },
          transition: 'all 0.3s ease',
        },
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: 'heading',
        fontWeight: 'bold',
      },
    },
  },
})

export default theme

