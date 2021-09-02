import {
  MenuItem,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  Text,
} from "@chakra-ui/react";
import { IconEdit } from "@tabler/icons";
import React, { FC } from "react";
import { EditAgencyInformationFormType } from "@/validations";
import { EditAgencyInformationForm } from "./EditAgencyInformationForm";
import { useSelector } from "@/store";
import { useUpdateMyAgencyInformation } from "@/graphql";
import router from "next/router";
import { useUIContext } from "@/context";

export const EditAgencyInformation: FC = () => {
  const { updateMyAgencyInformationFetch } = useUpdateMyAgencyInformation();
  const { name } = useSelector(store => store.agency.myAgency);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { activateLoadingScreen, closeLoadingScreen } = useUIContext();

  async function onSubmit(values: EditAgencyInformationFormType) {
    activateLoadingScreen("Guardando Cambios...");
    const { slogan } = values;

    try {
      const { data } = await updateMyAgencyInformationFetch({
        input: {
          isNewName: values.name !== name.trim(),
          name: values.name,
          slogan,
        },
      });

      if (data?.updateMyAgencyInformation.successful) {
        router.reload();
        return;
      }
      console.log(data);
      closeLoadingScreen();
    } catch (err) {
      console.log(err);
      closeLoadingScreen();
    }
  }

  return (
    <>
      <MenuItem py="1.5" onClick={onOpen}>
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
          <IconEdit size="1.25rem" strokeWidth={1.5} />
        </Box>
        Editar información
      </MenuItem>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent rounded="sm">
          <ModalHeader>
            <Text lineHeight="none">Editar Agencia</Text>
            <Text fontSize="sm">Erickson Auto Import</Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <EditAgencyInformationForm onSubmit={onSubmit} />
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="pri" form="edit-agency-information-form" ml={3} type="submit">
              Guardar Cambios
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
