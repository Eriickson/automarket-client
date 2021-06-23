import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";

const Links = [
  {
    label: "Inicio",
    href: "",
  },
  {
    label: "Buscar",
    href: "",
  },
  {
    label: "Contáctanos",
    href: "",
  },
  {
    label: "FAQ's",
    href: "",
  },
];

export const NavBar = () => {
  return (
    <Box
      display="flex"
      flexDirection={["column", "row"]}
      alignItems={[null, null, "center"]}
      height="full"
      justifyContent="center"
    >
      {Links.map((links, i) => (
        <Box mb={[2]} mx={[null, "5"]}>
          <Link key={i} href={links.href}>
            <Text color="gray.500" fontSize="lg" fontWeight="semibold">
              {links.label}
            </Text>
          </Link>
        </Box>
      ))}
    </Box>
  );
};
