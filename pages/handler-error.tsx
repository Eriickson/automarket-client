import { useLazyQuery } from "@apollo/client";
import { Button, useToast } from "@chakra-ui/react";
import gql from "graphql-tag";
import React, { FC, useEffect } from "react";

const HANDLER_ERROR_Q = gql`
  query HandlerError {
    handlerError
  }
`;

// type ErrorType = {};
const HandlerError: FC = () => {
  const toast = useToast();
  const [handlerError, { error }] = useLazyQuery(HANDLER_ERROR_Q);

  useEffect(() => {
    if (error) {
      showError(error.graphQLErrors[0]);
    }
  }, [error]);

  function showError(error: any) {
    toast({
      description: error.message,
      status: error.status,
      duration: 5000,
      isClosable: true,
      position: "top-right",
    });
  }

  return (
    <div>
      <Button onClick={() => handlerError()}>Llamar</Button>
    </div>
  );
};

export default HandlerError;
