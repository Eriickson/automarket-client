import React, { useEffect, useState } from "react";
import { useLazyQuery, useMutation, gql } from "@apollo/client";
import { Alert, AlertIcon, AlertTitle, AlertDescription, CloseButton, Button, Box, useToast } from "@chakra-ui/react";
import { AlertDialog } from "@/components";
import { useUIContext } from "@/context";

const HANDLER_ERROR_Q = gql`
  query HandlerError($errorType: String!) {
    handlerError(errorType: $errorType) {
      response
    }
  }
`;

const HANDLER_MUTATION_M = gql`
  mutation HandlerMutation($errorType: String!) {
    handlerErrorMutation(errorType: $errorType) {
      response
    }
  }
`;

const HandlerErrorPage = () => {
  const { alertDialog, activateLoadingScreen, closeLoadingScreen } = useUIContext();
  const [handlerError, { data: dataQuery, loading: loadingQuery, error: errorQuery }] = useLazyQuery(HANDLER_ERROR_Q);
  const [handlerErrorMutation, { data: dataMutation, loading: loadingMutation, error: errorMutation }] =
    useMutation(HANDLER_MUTATION_M);
  const [hasError, setHasError] = useState<string | null>(null);
  const toast = useToast();

  async function onClickQuery() {
    try {
      handlerError({
        variables: {
          errorType: "Error aquí",
        },
      });
    } catch (err) {
      console.log(err);
    }
  }
  async function onClickMutation() {
    activateLoadingScreen(null);
    setTimeout(async () => {
      try {
        await handlerErrorMutation({
          variables: {
            errorType: "Error aquí",
          },
        });
        // alertDialogState();
      } catch (err) {
        console.log(err);

        const error = JSON.parse(err.message);
        alertDialog.onOpen({
          name: "error-apollo",
          title: error.message,
          desc: error.detail,
          priBtnLabel: "Aceptar",
          role: error.type,
          onClickPriBtn() {
            alertDialog.onClose();
          },
        });
        closeLoadingScreen();
      }
    }, 3000);
  }

  useEffect(() => {
    if (errorQuery) {
      toast({
        position: "top-right",
        render: ({ onClose }) => (
          <Alert status="error" w="max-content">
            <AlertIcon />
            <AlertTitle mr={2}>{JSON.parse(errorQuery.message).message}</AlertTitle>
            <AlertDescription mr="6">{JSON.parse(errorQuery.message).detail}</AlertDescription>
            <CloseButton
              _focus={{ ring: 0, bgColor: "" }}
              _hover={{ ring: 0, bgColor: "none" }}
              position="absolute"
              right="8px"
              top="8px"
              onClick={onClose}
            />
          </Alert>
        ),
      });
    }
  }, [errorQuery]);

  return (
    <Box m="10">
      <Button mr="5" onClick={onClickQuery}>
        onClickQuery
      </Button>
      <Button onClick={onClickMutation}>onClickMutation</Button>
    </Box>
  );
};

export default HandlerErrorPage;
