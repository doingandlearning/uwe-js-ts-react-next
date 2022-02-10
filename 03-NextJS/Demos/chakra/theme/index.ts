import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: `Inter, ${base.fonts?.body}`,
    heading: `Montserrat, ${base.fonts?.heading}`,
  },
  colors: {
    brand: {
      50: "#f5fee5",
      100: "#e1fbb2",
      200: "#cdf781",
      300: "#b8ee56",
      400: "#a2e032",
      500: "#8ac919",
      600: "#71ab09",
      700: "#578602",
      800: "#3c5e00",
      900: "#203300",
    },
  },
  components: {
    Input: {
      sizes: {
        md: {
          field: {
            borderRadius: "none",
          },
        },
      },
      variants: {
        filled: {
          field: {
            _focus: {
              borderColor: "brand.500",
            },
          },
        },
      },
    },
    Button: {
      variants: {
        primary: {
          rounded: "none",
          backgroundColor: "brand.500",

          _hover: {
            backgroundColor: "brand.600",
          },

          _active: {
            backgroundColor: "brand.700",
          },
        },
      },
    },
  },
});

export default theme;
