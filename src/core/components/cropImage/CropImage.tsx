import { AspectRatioType, IFlip, IGeneratedImage, IPoint } from "@/shared";
import React, { FC } from "react";

//Styles and Icons
import { CropImageModal } from "./CropImageModal";

import { IOptions } from "./types";

interface CropImageProps {
  name: string;
  isOpen: boolean;
  image: IGeneratedImage;
  options?: Partial<IOptions>;
  defaultValue?: {
    rotation?: number;
    zoom?: number;
    aspectRatio?: AspectRatioType;
    flip?: IFlip;
    crop?: IPoint;
  };
  onClose(): void;
  onSave(newData: Partial<Omit<IGeneratedImage, "file">>): void;
}

export const CropImage: FC<CropImageProps> = ({ image, defaultValue, onSave, isOpen, options, onClose }) => {
  return (
    <>
      <CropImageModal
        defaultValue={defaultValue}
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
