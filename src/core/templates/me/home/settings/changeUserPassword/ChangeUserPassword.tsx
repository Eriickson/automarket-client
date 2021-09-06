import { useUIContext } from "@/context";
import { useChangeUserPassword } from "@/graphql";
import { ChangeUserPassword } from "@/validations";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  MenuItem,
  Box,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { IconKey } from "@tabler/icons";
import router from "next/router";
import React, { FC } from "react";
import { ChangePasswordForm } from "./ChangeUserPasswordForm";

export const ChangePassword: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { changeUserPasswordFetch } = useChangeUserPassword();
  const { activateLoadingScreen } = useUIContext();

  async function onSubmit(values: ChangeUserPassword) {
    activateLoadingScreen("Cambiando contraseña...");
    if (values.newPassword !== values.confirmNewPassword) {
      console.log("Las contraseñas no coinciden");

      return;
    }
    const response = await changeUserPasswordFetch({ input: values });
    if (response.data && response.data.changeUserPassword.successful) router.reload();
  }

  return (
    <>
      <MenuItem onClick={onOpen}>
        <Box
          alignItems="center"
          bgColor="pri.100"
          color="pri.500"
          display="flex"
          h="6"
          justifyContent="center"
          mr="1.5"
          w="6"
        >
          <IconKey size="1.25rem" strokeWidth={1.5} />
        </Box>
        Cambiar Contraseña
      </MenuItem>
      <Modal isCentered isOpen={isOpen} size="sm" onClose={onClose}>
        <ModalOverlay />
        <ModalContent rounded="sm">
          <ModalHeader>Cambia tu contraseña</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ChangePasswordForm onSubmit={onSubmit} />
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="pri" form="change-user-password" ml={3} type="submit">
              Cambiar Contraseña
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
