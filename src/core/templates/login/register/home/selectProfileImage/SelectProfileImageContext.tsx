import { useDisclosure } from "@chakra-ui/react";
import React, { createContext, useState, useCallback, FC, useContext } from "react";

interface ISelectProfileImageContext {
  crop: { x: number; y: number };
  zoom: number;
  rotation: number;
  isOpen: boolean;
  fileSelected: { file: File | null; src: string };
  onZoomChange(newZoom: number): void;
  onRotationChange(): void;
  onCroppedAreaPixelsChange(w: number, h: number, x: number, y: number): void;
  onChangeCrop(newCrop: { x: number; y: number }): void;
  onUploadFile(newFile: File): void;
  onReset(): void;
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
  const [fileSelected, setFileSelected] = useState<{ file: File | null; src: string }>({
    file: null,
    src: "",
  });
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
    setFileSelected({ file: newFile, src: URL.createObjectURL(newFile) });
    onOpen();
  }

  function onCroppedAreaPixelsChange(w: number, h: number, x: number, y: number) {
    setCroppedAreaPixels({ w, h, x, y });
  }

  function onReset() {
    setZoom(1);
    setCrop({ x: 0, y: 0 });
    setFileSelected({ file: null, src: "" });
    setRotate(0);
    setCroppedAreaPixels({ w: 0, h: 0, x: 0, y: 0 });
  }

  async function onSaveChange() {
    console.log({ croppedAreaPixels });

    console.log("Guardando...");
  }

  return (
    <SelectProfileImageContext.Provider
      value={{
        crop,
        zoom,
        rotation,
        isOpen,
        fileSelected,
        onZoomChange,
        onChangeCrop,
        onRotationChange,
        onUploadFile,
        onCroppedAreaPixelsChange,
        onReset,
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
