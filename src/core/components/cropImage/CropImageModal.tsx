import React, { FC, useEffect, useState } from "react";

// Packages
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

// My Elements
import { AspectRatioType, ICropArea, IGeneratedImage, IFlip, IPoint } from "@/shared";
import { getCroppedImg, generateFileByUrlBlob } from "@/utils";

// My Components
import { CropImageActions } from "./CropImageActions";
import { CropImageComponent } from "./CropImageComponent";

import { IOptions } from "./types";
interface CropImageModalProps {
  name: string;
  isOpen: boolean;
  image: IGeneratedImage;
  options?: Partial<IOptions>;
  defaultValue?: {
    zoom?: number;
    aspectRatio?: AspectRatioType;
    flip?: IFlip;
    crop?: IPoint;
    rotation?: number;
  };
  onSave(newData: Partial<Omit<IGeneratedImage, "file" | "id">>): void;
  onClose(): void;
}

export const CropImageModal: FC<CropImageModalProps> = ({ onSave, defaultValue, image, isOpen, options, onClose }) => {
  const [croppedArea, setCroppedArea] = useState<ICropArea>({ w: 0, h: 0, y: 0, x: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [flip, setFlip] = useState<IFlip>({ h: false, v: false });
  const [isLoading, setIsLoading] = useState(false);
  const [aspectRatio, setAspectRatio] = useState<AspectRatioType>("4:3");
  const [crop, setCrop] = useState<IPoint>({ x: 0, y: 0 });
  const [src, setSrc] = useState("");

  async function onGenerate() {
    setIsLoading(true);
    const { blobUrl } = await getCroppedImg({
      src: image.originalSrc,
      cropArea: croppedArea,
      rotation,
      flip,
    });
    setIsLoading(false);
    const newFileGenerated = await generateFileByUrlBlob({ blobUrl, originalFile: image.file });

    const newData: IGeneratedImage = {
      ...image,
      aspectRatio,
      src: blobUrl,
      point: crop,
      zoom,
      cropArea: croppedArea,
      rotation,
      flip,
      file: newFileGenerated,
    };
    onSave(newData);
    onReset();
    onClose();
  }

  async function onChange(values: ICropArea) {
    setCroppedArea(values);
  }

  function onZoomChange(newZoom: number) {
    setZoom(newZoom);
  }

  function onAspectRatioChange(newAspectRatio: AspectRatioType) {
    setAspectRatio(newAspectRatio);
  }
  function onRotationChange(newRotation: number) {
    setRotation(newRotation);
  }

  function onChangeFlip(orientation: "HORIZONTAL" | "VERTICAL") {
    const newFlip: IFlip = orientation === "HORIZONTAL" ? { ...flip, h: !flip.h } : { ...flip, v: !flip.v };
    setFlip(newFlip);
  }

  function onReset() {
    setTimeout(() => {
      setZoom(1);
      setCrop({ x: 0, y: 0 });
      setRotation(0);
      setCroppedArea(image.cropArea);
      setIsLoading(false);
      setFlip({ h: false, v: false });
    }, 250);
  }

  useEffect(() => {
    setSrc(image.originalSrc);
    defaultValue?.aspectRatio && setAspectRatio(defaultValue?.aspectRatio);
    defaultValue?.zoom && setZoom(defaultValue.zoom);
    defaultValue?.rotation && setRotation(defaultValue.rotation);
    defaultValue?.flip && setFlip(defaultValue.flip);
  }, [image]);

  return (
    <Modal isCentered isOpen={isOpen} motionPreset="slideInBottom" size="4xl" onClose={onClose}>
      <ModalOverlay />
      <ModalContent mx="2">
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <CropImageComponent
            aspectRatio={aspectRatio}
            crop={crop}
            flip={flip}
            rotation={rotation}
            src={src}
            zoom={zoom}
            onChange={onChange}
            onCrop={setCrop}
            onZoomChange={onZoomChange}
          />
          <Tag fontWeight="semibold" mr="1" mt="1">
            X: {croppedArea.x}
            <Box mx="1"></Box>
            Y: {croppedArea.y}
            <Box mx="1"></Box>
            W: {croppedArea.w}
            <Box mx="1"></Box>
            H: {croppedArea.h}
          </Tag>
          <Tag fontWeight="semibold" mt="1">
            Dimensión: {aspectRatio}
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
            onReset={onReset}
            onRotationChange={onRotationChange}
            onZoomChange={onZoomChange}
          />
          <HStack>
            <Button
              colorScheme="danger"
              variant="ghost"
              onClick={() => {
                onClose();
                onReset();
              }}
            >
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
