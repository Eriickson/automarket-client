import React, { FC } from "react";

import { Button, Box, Heading, FormControl, FormLabel, FormHelperText, Input,Text,Link } from "@chakra-ui/react";

import { LoginLayout } from "@/layouts";
import NextLink from "next/link";

export const SignInTemplate: FC = () => {
  return (
    <LoginLayout>
      <Box p="8" borderWidth="1px" borderColor="gray.100" shadow="sm" bg="white" maxWidth="md" m="auto" mb="3">
        <Heading as="h2" size="lg" fontWeight="medium" textAlign="center" mb="8">
          Iniciar Sesión
        </Heading>
        <Box mb="5">
          <FormControl id="email" mb="3">
            <FormLabel>Email address</FormLabel>
            <Input colorScheme="red" type="email" rounded="sm" />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input colorScheme="red" type="email" rounded="sm" />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
        </Box>
        <Button colorScheme="pri" w="full">
          Iniciar Sesión
        </Button>
      </Box>
      <Text textAlign="center" display="flex" justifyContent="center" >
        No Tienes cuenta?
        <NextLink href="signup">
          <Link color="blue.500" ml="1" cursor="pointer" >Regístrate</Link>
        </NextLink>
      </Text>
    </LoginLayout>
  );
};
