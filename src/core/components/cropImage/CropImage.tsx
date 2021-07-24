import { AspectRatioType, IGeneratedFile } from "@/shared";
import React, { FC } from "react";

//Styles and Icons
import { CropImageModal } from "./CropImageModal";

import { IOptions } from "./types";

interface CropImageProps {
  name: string;
  isOpen: boolean;
  image: IGeneratedFile;
  options?: Partial<IOptions>;
  aspectRatio?: AspectRatioType;
  onClose(): void;
  onSave(newData: Partial<Omit<IGeneratedFile, "file">>): void;
}

export const CropImage: FC<CropImageProps> = ({ image, onSave, isOpen, options, onClose, aspectRatio = "4:3" }) => {
  return (
    <>
      <CropImageModal
        aspectRatioValue={aspectRatio}
        isOpen={isOpen}
        name="edit"
        options={options}
        src={image.originalSrc}
        onClose={onClose}
        onSave={onSave}
      />
    </>
  );
};
