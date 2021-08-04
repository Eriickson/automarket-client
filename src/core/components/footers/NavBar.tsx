import React, { FC } from "react";
import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";

const Links = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Buscar",
    href: "/",
  },
  {
    label: "Contáctanos",
    href: "/about-us/contacts",
  },
  {
    label: "FAQ's",
    href: "/about-us/faq",
  },
];

export const NavBar: FC = () => {
  return (
    <Box
      alignItems={[null, null, "center"]}
      display="flex"
      flexDirection={["column", "row"]}
      height="full"
      justifyContent="center"
    >
      {Links.map((links, i) => (
        <Box key={i} mb={[2]} mx={[null, "5"]}>
          <Link passHref href={links.href} key={i}>
            <a>
              <Text color="gray.500" cursor="pointer" fontSize="lg" fontWeight="semibold">
                {links.label}
              </Text>
            </a>
          </Link>
        </Box>
      ))}
    </Box>
  );
};
