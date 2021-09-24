import React, { FC } from "react";
import { Plan } from "@/shared";
import Link from "next/link";

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
import { useSelector } from "@/store";

interface PurchasePlanModalProps {
  plan: Plan;
}

export const PurchasePlanModal: FC<PurchasePlanModalProps> = ({ plan }) => {
  const { agency, isAuth } = useSelector(({ auth }) => auth);
  const { isOpen, onOpen, onClose } = useDisclosure();

  async function purchasePlan() {
    console.log(plan);
  }

  return (
    <>
      {isAuth ? (
        <Button colorScheme="pri" textTransform="capitalize" w="full" onClick={onOpen}>
          Comprar {plan.name}
        </Button>
      ) : (
        <Link href="/login/signin">
          <Button colorScheme="pri">Iniciar Sesión</Button>
        </Link>
      )}
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
            {agency ? (
              <Button colorScheme="pri" onClick={purchasePlan}>
                Realizar compra
              </Button>
            ) : (
              <Link href="/agency/new">
                <Button colorScheme="pri">Crea tu agencia</Button>
              </Link>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
