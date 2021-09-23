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

interface PurchasePlanModalProps {
  plan: Plan;
}

export const PurchasePlanModal: FC<PurchasePlanModalProps> = ({ plan }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  async function purchasePlan() {
    console.log(plan);
  }

  return (
    <>
      <Button colorScheme="pri" textTransform="capitalize" w="full" onClick={onOpen}>
        Comprar {plan.name}
      </Button>
      <Modal isCentered closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent rounded="sm">
          <ModalHeader textTransform="capitalize">Adquirir plan {plan.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Hola</ModalBody>

          <ModalFooter>
            <Button mr={3} variant="ghost" onClick={onClose}>
              Cancelar
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
