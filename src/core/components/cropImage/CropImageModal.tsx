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
  Tag,
  Box,
} from "@chakra-ui/react";
import { CropImageComponent } from "./CropImageComponent";
import { AspectRatioType, ICropArea, IGeneratedFile, IFlip } from "@/shared";
import { CropImageActions } from "./CropImageActions";
import { getCroppedImg } from "@/utils";

import { IOptions } from "./types";
interface CropImageModalProps {
  name: string;
  isOpen: boolean;
  src: string;
  options?: Partial<IOptions>;
  onSave(newData: Partial<Omit<IGeneratedFile, "file" | "id">>): void;
  onClose(): void;
}

export const CropImageModal: FC<CropImageModalProps> = ({ onSave, src, isOpen, options, onClose }) => {
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<ICropArea>({ w: 0, h: 0, y: 0, x: 0 });
  const [aspectRatio, setAspectRatio] = useState<number>(4 / 3);
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [flip, setFlip] = useState<IFlip>({ h: false, v: false });
  const [isLoading, setIsLoading] = useState(false);
  const [aspectRatioString, setAspectRatioString] = useState<AspectRatioType>("4:3");

  async function onGenerate() {
    setIsLoading(true);
    const { blobUrl } = await getCroppedImg({
      src: src,
      pixelCrop: croppedAreaPixels,
      rotation,
      flip,
    });

    const newData = {
      src: blobUrl,
      croppedAreaPixels,
      rotation,
      flip,
    };

    onSave(newData);

    setIsLoading(false);
    onClose();
  }

  async function onChange(values: ICropArea) {
    setCroppedAreaPixels(values);
  }

  function onZoomChange(newZoom: number) {
    setZoom(newZoom);
  }

  function onAspectRatioChange(newAspectRatio: AspectRatioType) {
    setAspectRatioString(newAspectRatio);
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
    const newFlip: IFlip = orientation === "HORIZONTAL" ? { ...flip, h: !flip.h } : { ...flip, v: !flip.v };
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
          <Tag mr="1" fontWeight="semibold" mt="1">
            X: {croppedAreaPixels.x}
            <Box mx="1"></Box>
            Y: {croppedAreaPixels.y}
            <Box mx="1"></Box>
            W: {croppedAreaPixels.w}
            <Box mx="1"></Box>
            H: {croppedAreaPixels.h}
          </Tag>
          <Tag fontWeight="semibold" mt="1">
            Dimensión: {aspectRatioString}
            <Box mx="1"></Box>
            Zoom: {((zoom - 1 / 1) * 100).toFixed(0)}%<Box mx="1"></Box>
            Rotación: {rotation}°<Box mx="1"></Box>
            Vuelta: {Number(flip.h)}, {Number(flip.v)}
            <Box mx="1"></Box>
          </Tag>
        </ModalBody>

        <ModalFooter
          alignItems={["flex-end", null, "center"]}
          flexDirection={["column", null, "row"]}
          justifyContent={["flex-end", null, "space-between"]}
        >
          <CropImageActions
            flip={flip}
            options={options}
            rotation={rotation}
            zoom={zoom}
            onAspectRatioChange={onAspectRatioChange}
            onChangeFlip={onChangeFlip}
            onRotationChange={onRotationChange}
            onZoomChange={onZoomChange}
          />
          <HStack>
            <Button colorScheme="danger" mr={3} variant="ghost" onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="success" isLoading={isLoading} loadingText="Guardando Cambios" onClick={onGenerate}>
              Guardar Cambios
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
