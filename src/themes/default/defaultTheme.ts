import { extendTheme } from "@chakra-ui/react";
import { sizes, breakpoints, colors } from ".";

export const defaultTheme = extendTheme({
  sizes,
  breakpoints,
  colors,
  fonts: {
    heading: "SFProDisplay",
    body: "SFProDisplay",
  },
  components: {
    Button: {
      baseStyle: {
        rounded: "sm",
        lineHeight: "4",
      },
    },
    Container: {
      baseStyle: {
        maxWidth: "container.2xl",
      },
    },
    Input: {
      baseStyle: {
        borderRadius: "sm",
      },
    },
  },
});
