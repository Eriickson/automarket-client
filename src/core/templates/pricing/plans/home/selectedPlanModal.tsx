import React, { FC } from "react";
import { Plan } from "@/shared";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { IconStar } from "@tabler/icons";

interface SelectedPlanModalProps {
  plan: Plan;
}

export const SelectedPlanModal: FC<SelectedPlanModalProps> = ({ plan }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  async function purchasePlan() {
    console.log(plan);
  }

  return (
    <>
      <Button
        colorScheme="pri"
        leftIcon={<IconStar size="1.25rem" />}
        textTransform="capitalize"
        w="full"
        onClick={onOpen}
      >
        Plan Seleccionado
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent rounded="sm">
          <ModalHeader textTransform="capitalize">Plan Seleccionado</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Hola</ModalBody>

          <ModalFooter>
            <Button mr={3} variant="ghost" onClick={onClose}>
              Cerrar
            </Button>
            <Button colorScheme="pri" onClick={purchasePlan}>
              Realizar compra
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
