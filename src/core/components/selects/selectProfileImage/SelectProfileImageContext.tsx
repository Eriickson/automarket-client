import { useDisclosure } from "@chakra-ui/react";
import React, { createContext, useState, FC, useContext } from "react";
import { compressImage, getCroppedImg } from "@/utils";

interface ISelectProfileImageContext {
  crop: { x: number; y: number };
  zoom: number;
  rotation: number;
  isOpen: boolean;
  isLoading: boolean;
  fileToEditing: { file: File | null; src: string };
  fileSelected: { file: File | null; src: string };
  croppedAreaPixels: { w: number; h: number; x: number; y: number };
  labelButton: string;
  aspectRatio: number;
  onZoomChange(newZoom: number): void;
  onRotationChange(): void;
  onCroppedAreaPixelsChange(w: number, h: number, x: number, y: number): void;
  onChangeCrop(newCrop: { x: number; y: number }): void;
  onUploadFile(newFile: File): void;
  onReset(): void;
  onOpen(): void;
  onClose(): void;
  onSaveChange(): void;
  setLabelButton(labelButton: string): void;
  setAspectRatio(aspectRatio: number): void;
}

const SelectProfileImageContext = createContext<ISelectProfileImageContext | null>(
  null,
) as React.Context<ISelectProfileImageContext>;

const SelectProfileImageProvider: FC = ({ children }) => {
  const [zoom, setZoom] = useState(1);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const [rotation, setRotate] = useState(0);
  const [labelButton, setLabelButton] = useState("Seleccionar");
  const [aspectRatio, setAspectRatio] = useState(1 / 1);
  const [fileToEditing, setFileToEditing] = useState<{ file: File | null; src: string }>({
    file: null,
    src: "",
  });
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
    rotation === 270 ? setRotate(0) : setRotate(rotation + 90);
  }

  async function onUploadFile(newFile: File) {
    const zipFile = await compressImage(newFile);
    const payload = { file: zipFile, src: URL.createObjectURL(zipFile) };

    setFileToEditing(payload);
    onOpen();
  }

  function onCroppedAreaPixelsChange(w: number, h: number, x: number, y: number) {
    setCroppedAreaPixels({ w, h, x, y });
  }

  function onReset() {
    setTimeout(() => {
      setZoom(1);
      setCrop({ x: 0, y: 0 });
      setFileToEditing({ file: null, src: "" });
      setRotate(0);
      setCroppedAreaPixels({ w: 0, h: 0, x: 0, y: 0 });
      setIsLoading(false);
    }, 250);
  }

  async function onSaveChange() {
    setIsLoading(true);
    try {
      if (fileToEditing.file) {
        const { blobUrl } = await getCroppedImg({
          src: fileToEditing.src,
          cropArea: croppedAreaPixels,
          rotation,
        });

        setFileSelected({ src: blobUrl, file: fileToEditing.file });
      }

      onReset();
      onClose();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <SelectProfileImageContext.Provider
      value={{
        crop,
        zoom,
        rotation,
        isOpen,
        fileSelected,
        fileToEditing,
        isLoading,
        croppedAreaPixels,
        labelButton,
        aspectRatio,
        setAspectRatio,
        setLabelButton,
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
