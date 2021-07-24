import { AspectRatioType, IGeneratedImage } from "@/shared";
import React, { FC } from "react";

//Styles and Icons
import { CropImageModal } from "./CropImageModal";

import { IOptions } from "./types";

interface CropImageProps {
  name: string;
  isOpen: boolean;
  image: IGeneratedImage;
  options?: Partial<IOptions>;
  aspectRatio?: AspectRatioType;
  onClose(): void;
  onSave(newData: Partial<Omit<IGeneratedImage, "file">>): void;
}

export const CropImage: FC<CropImageProps> = ({ image, onSave, isOpen, options, onClose, aspectRatio = "4:3" }) => {
  return (
    <>
      <CropImageModal
        aspectRatioValue={aspectRatio}
        image={image}
        isOpen={isOpen}
        name="edit"
        options={options}
        onClose={onClose}
        onSave={onSave}
      />
    </>
  );
};
