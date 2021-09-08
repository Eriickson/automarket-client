import { useUIContext } from "@/context";
import { Box, Button } from "@chakra-ui/react";
import gql from "graphql-tag";
import React from "react";
import { ApolloError, useMutation } from "@apollo/client";
import { useMutationCustom } from "@/hooks";

const HANDLER_ERROR_Q = gql`
  mutation {
    handlerError
  }
`;

type ErrorPayload = {
  status: "error" | "success" | "warning";
  error: string;
  title: string;
  message: string;
  detail: string;
};

const ToastPage = () => {
  // const toast = useToast();
  const { toast } = useUIContext();
  const { mutateFunction, options } = useMutationCustom(HANDLER_ERROR_Q);

  async function handlerClick() {
    try {
      const response = await mutateFunction();
      console.log(response);
    } catch (err) {
      console.log(options.error);

      console.log(err);
    }
  }

  function parseError(apolloError: ApolloError): ErrorPayload {
    const errorReal = apolloError.graphQLErrors[0] as any as ErrorPayload;
    return errorReal;
  }

  return (
    <Box m="10">
      <Button colorScheme="danger" onClick={handlerClick}>
        {" "}
        Show Toast
      </Button>
    </Box>
  );
};

export default ToastPage;
