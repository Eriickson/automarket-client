import { IGeneratedFile } from "@/shared";
import React, { FC } from "react";

//Styles and Icons
import { CropImageModal } from "./CropImageModal";

import { IOptions } from "./types";

interface CropImageProps {
  name: string;
  isOpen: boolean;
  image: IGeneratedFile;
  options?: Partial<IOptions>;
  onClose(): void;
  onSave(newData: Partial<Omit<IGeneratedFile, "file">>): void;
}

export const CropImage: FC<CropImageProps> = ({ image, onSave, isOpen, options, onClose }) => {
  return (
    <>
      <CropImageModal isOpen={isOpen} name="edit" options={options} src={image.src} onClose={onClose} onSave={onSave} />
    </>
  );
};
