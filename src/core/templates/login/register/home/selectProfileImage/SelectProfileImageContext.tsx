import { useDisclosure } from "@chakra-ui/react";
import React, { createContext, useState, useCallback, FC, useContext } from "react";

interface ISelectProfileImageContext {
  crop: { x: number; y: number };
  zoom: number;
  rotation: number;
  isOpen: boolean;
  onZoomChange(newZoom: number): void;
  onRotationChange(): void;
  onCroppedAreaPixelsChange(w: number, h: number, x: number, y: number): void;
  onChangeCrop(newCrop: { x: number; y: number }): void;
  onUploadFile(newFile: File): void;
  onOpen(): void;
  onClose(): void;
  onSaveChange(): void;
}

const SelectProfileImageContext = createContext<ISelectProfileImageContext | null>(
  null,
) as React.Context<ISelectProfileImageContext>;

const SelectProfileImageProvider: FC = ({ children }) => {
  const [zoom, setZoom] = useState(1);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotate] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState({ w: 0, h: 0, x: 0, y: 0 });
  const { isOpen, onOpen, onClose } = useDisclosure();

  function onZoomChange(newZoom: number) {
    setZoom(newZoom);
  }

  function onChangeCrop(crop: { x: number; y: number }) {
    setCrop(crop);
  }

  function onRotationChange() {
    setRotate(rotation + 90);
  }

  function onUploadFile(newFile: File) {
    console.log(newFile);
    onOpen();
  }

  function onCroppedAreaPixelsChange(w: number, h: number, x: number, y: number) {
    setCroppedAreaPixels({ w, h, x, y });
  }

  async function onSaveChange() {
    console.log("Guardando...");
  }

  return (
    <SelectProfileImageContext.Provider
      value={{
        crop,
        zoom,
        rotation,
        isOpen,
        onZoomChange,
        onChangeCrop,
        onRotationChange,
        onUploadFile,
        onCroppedAreaPixelsChange,
        onOpen,
        onClose,
        onSaveChange,
      }}
    >
      {children}
    </SelectProfileImageContext.Provider>
  );
};

const useSelectProfileImage = (): ISelectProfileImageContext =>
  useContext<ISelectProfileImageContext>(SelectProfileImageContext);

export { SelectProfileImageProvider, useSelectProfileImage };
