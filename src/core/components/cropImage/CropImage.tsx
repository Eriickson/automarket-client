import React, { FC } from "react";

//Styles and Icons
import { CropImageModal } from "./CropImageModal";

import { IOptions } from "./types";

interface CropImageProps {
  name: string;
  isOpen: boolean;
  src: string;
  options?: Partial<IOptions>;
  onClose(): void;
}

export const CropImage: FC<CropImageProps> = ({ src, isOpen, options, onClose }) => {
  return (
    <>
      <CropImageModal isOpen={isOpen} name="edit" options={options} src={src} onClose={onClose} />
    </>
  );
};
