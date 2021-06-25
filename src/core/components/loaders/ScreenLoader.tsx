import React, { FC } from "react";
import { Modal, ModalOverlay, ModalContent, Text } from "@chakra-ui/react";
import { SpinnerCircular } from "spinners-react";

interface ScreenLoaderProps {
  isOpen: boolean;
  msg?: string | null;
  onClose(): void;
}

export const ScreenLoader: FC<ScreenLoaderProps> = ({ isOpen, msg, onClose }) => {
  return (
    <Modal isCentered closeOnEsc={false} closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay bgColor="rgba(0, 0, 0, 0.8) !important" />
      <ModalContent
        alignItems="center"
        bg="transparent"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        shadow="none"
      >
        <SpinnerCircular color="#1E86FF" size="25%" thickness={90} />
        <Text color="gray.200" fontSize="2xl" mt="3" userSelect="none">
          {msg ? msg : "cargando"}
        </Text>
      </ModalContent>
    </Modal>
  );
};
