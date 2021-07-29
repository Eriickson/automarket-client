import React, { FC, useEffect, useState } from "react";

// Packages
import {
  Button,
  Flex,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Img,
} from "@chakra-ui/react";
import { IconPhoto, IconX } from "@tabler/icons";

// My Elements
import { IGeneratedImage } from "@/shared";

interface PreviewImageModalProps {
  file: IGeneratedImage;
  remove(): void;
}

export const PreviewImageModal: FC<PreviewImageModalProps> = ({ file, remove }) => {
  const [filename, setFilename] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    let filename: string = file.originalFile.name;
    const ext: string = filename.split(".").pop() || "";

    filename =
      file.originalFile.name.length > 30 ? `${file.originalFile.name}`.substring(0, 30).concat("... .", ext) : filename;

    setFilename(filename);
  }, []);

  return (
    <>
      <Flex>
        <Button leftIcon={<IconPhoto />} size="sm" onClick={onOpen}>
          {filename}
        </Button>
        <IconButton
          aria-label="eliminar archivo"
          colorScheme="danger"
          icon={<IconX size="1.25rem" />}
          size="sm"
          onClick={remove}
        />
      </Flex>
      <Modal isCentered isOpen={isOpen} size="2xl" onClose={onClose}>
        <ModalOverlay />
        <ModalContent mx="2">
          <ModalHeader>{filename}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Img src={file.originalSrc} />
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="danger"
              mr={3}
              variant="ghost"
              onClick={() => {
                onClose();
                remove();
              }}
            >
              Eliminar
            </Button>
            <Button onClick={onClose}>Cerrar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
