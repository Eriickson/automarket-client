import React, { FC, useState } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  HStack,
} from "@chakra-ui/react";
import { CropImageComponent } from "./CropImageComponent";
import { AspectRatioType, ICroppedAreaPixels, IFlip } from "@/shared";
import { CropImageActions } from "./CropImageActions";
import { getCroppedImg } from "@/utils";

import { IOptions } from "./types";
interface CropImageModalProps {
  name: string;
  isOpen: boolean;
  src: string;
  options?: Partial<IOptions>;
  onClose(): void;
}

export const CropImageModal: FC<CropImageModalProps> = ({ src, isOpen, options, onClose }) => {
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<ICroppedAreaPixels>({ w: 0, h: 0, y: 0, x: 0 });
  const [aspectRatio, setAspectRatio] = useState<number>(4 / 3);
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [flip, setFlip] = useState<IFlip>({ horizontal: false, vertical: false });
  const [isLoading, setIsLoading] = useState(false);

  async function onSave() {
    setIsLoading(true);
    const { blobUrl } = await getCroppedImg({
      src: src,
      pixelCrop: croppedAreaPixels,
      rotation,
    });

    console.log(blobUrl);
    setIsLoading(false);
  }

  async function onChange(values: ICroppedAreaPixels) {
    setCroppedAreaPixels(values);
  }

  function onZoomChange(newZoom: number) {
    setZoom(newZoom);
  }

  function onAspectRatioChange(newAspectRatio: AspectRatioType) {
    const aspectRatios: Record<AspectRatioType, number> = {
      "16:9": 16 / 9,
      "1:1": 1 / 1,
      "4:3": 4 / 3,
    };
    setAspectRatio(aspectRatios[newAspectRatio]);
  }
  function onRotationChange(newRotation: number) {
    setRotation(newRotation);
  }

  function onChangeFlip(orientation: "HORIZONTAL" | "VERTICAL") {
    const newFlip: IFlip =
      orientation === "HORIZONTAL" ? { ...flip, horizontal: !flip.horizontal } : { ...flip, vertical: !flip.vertical };
    setFlip(newFlip);
  }

  return (
    <Modal isCentered isOpen={isOpen} motionPreset="slideInBottom" size="4xl" onClose={onClose}>
      <ModalOverlay />
      <ModalContent mx="2">
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <CropImageComponent
            aspectRatio={aspectRatio}
            flip={flip}
            rotation={rotation}
            src={src}
            zoom={zoom}
            onChange={onChange}
            onZoomChange={onZoomChange}
          />
        </ModalBody>

        <ModalFooter
          alignItems={["flex-end", null, "center"]}
          flexDirection={["column", null, "row"]}
          justifyContent={["flex-end", null, "space-between"]}
        >
          <CropImageActions
            flip={flip}
            rotation={rotation}
            zoom={zoom}
            onAspectRatioChange={onAspectRatioChange}
            onChangeFlip={onChangeFlip}
            onRotationChange={onRotationChange}
            onZoomChange={onZoomChange}
            options={options}
          />
          <HStack>
            <Button colorScheme="danger" mr={3} variant="ghost" onClick={onClose}>
              Cancelar
            </Button>
            <Button isLoading={isLoading} loadingText="Guardando Cambios" colorScheme="success" onClick={onSave}>
              Guardar Cambios
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
