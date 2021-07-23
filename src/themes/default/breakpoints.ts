import { createBreakpoints } from "@chakra-ui/theme-tools";
import { theme } from "@chakra-ui/react";

export const breakpoints = createBreakpoints({
  ...theme.breakpoints,
  xs: "475px",
  "2xl": "1536px",
});
