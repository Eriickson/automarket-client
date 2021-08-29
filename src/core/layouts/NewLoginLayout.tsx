import React, { FC, ReactElement } from "react";

// NextJS
import Link from "next/link";
import { useRouter } from "next/router";

// Packages
import { Text, Box, Button, Divider } from "@chakra-ui/react";

// My Elements
import { AutomarketRDIsotipo, AutomarketRDLogo } from "@/assets";

// My Components
import { LegalFooter } from "../components/footers/LegalFooter";
import { AsideLeft } from "../templates/login/signup/home/AsideLeft";

interface NewLoginLayoutProps {
  title: string;
  ButtonRight?: ReactElement;
}

export const NewLoginLayout: FC<NewLoginLayoutProps> = ({ title, children }) => {
  const { asPath } = useRouter();

  return (
    <Box bg={["pri.500", null, "gray.100"]} display="flex" flexDir="column" minHeight="100vh">
      <Box alignItems="stretch" display="flex" flex="1">
        <AsideLeft />
        <Box display="flex" flex={1} flexDirection="column" justifyContent="space-between">
          <Box>
            <Box
              alignItems="center"
              bg="white"
              display={["none", null, "flex"]}
              justifyContent="space-between"
              px={[3, null, 6, 10]}
              py={4}
              shadow="sm"
              w="full"
            >
              <Box w={[56, null, null, 44, 64]}>
                <AutomarketRDLogo />
              </Box>
              {asPath.match("signin") ? (
                <Link href="/login/signup">
                  <a>
                    <Button colorScheme="pri">Regístrate</Button>
                  </a>
                </Link>
              ) : (
                <Link href="/login/signin">
                  <a>
                    <Button colorScheme="pri" variant="outline">
                      Inicia Sesión
                    </Button>
                  </a>
                </Link>
              )}
            </Box>
          </Box>
          <Box h="auto" maxW={[null, null, null, "max-content"]} pl={[3, null, 6, 10, 8]} pr={[3, null, 6, 0]}>
            <Text
              color="pri.600"
              display={["none", null, "block"]}
              fontSize={["3xl", null, "4xl", "5xl", "6xl"]}
              fontWeight="black"
              lineHeight={1}
              mb={8}
            >
              Bienvenido de nuevo
              <Text color="gray.800" fontSize={["xl", null, "2xl", "3xl"]}>
                Regístrate para continuar
              </Text>
            </Text>
            <Box bgColor={["white", null, "transparent"]} rounded="md">
              <Box display={["block", null, "none"]} mx="auto" py="4" w={[12]}>
                <Link href="/">
                  <a>
                    <AutomarketRDIsotipo />
                  </a>
                </Link>
              </Box>
              <Divider />
              <Text display={[null, null, "block"]} fontSize="2xl" fontWeight="bold" mt="5" textAlign="center">
                {title}
              </Text>
              <Box p="5">{children}</Box>
            </Box>
          </Box>
          <Box h="20"></Box>
        </Box>
      </Box>
      <Box alignItems="center" bgColor="white" display={["none", null, "flex"]} h="20">
        <LegalFooter />
      </Box>
    </Box>
  );
};
