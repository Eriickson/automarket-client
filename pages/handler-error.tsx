import { ApolloErrorComponent } from "@/components";
import { parseError } from "@/utils";
import { useMutation } from "@apollo/client";
import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import gql from "graphql-tag";
import React, { useEffect } from "react";

const HANDLER_ERROR_M = gql`
  mutation HandlerError {
    handlerError
  }
`;

const HandlerError = () => {
  const [handlerError, { error }] = useMutation(HANDLER_ERROR_M);

  async function handlerClick() {
    try {
      const response = await handlerError();
      console.log({ response });
    } catch (e) {
      // console.log("Ha ocurrido un error");
    }
  }

  return (
    <Box m="10">
      <Button onClick={handlerClick}>HandlerError</Button>
      <ApolloErrorComponent error={error} />
    </Box>
  );
};

export default HandlerError;
