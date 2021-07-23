import React, { FC } from "react";

// Packages
import Cropper from "react-easy-crop";

//Styles and Icons
import styled from "@emotion/styled";
import { CropImageModal } from "./CropImageModal";

import { IOptions } from "./types";

const WrapperCropImageStyled = styled.div`
  position: relative;
  width: 100%;
  height: 30rem;
  @media (min-width: 768px) {
    height: 40rem;
  }
  .reactEasyCrop_Container {
    background-color: #c9c9c9;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E");
  }
  .reactEasyCrop_CropArea {
    border: 2px solid #1e86ff;
  }
`;

interface CropImageProps {
  name: string;
  isOpen: boolean;
  src: string;
  options?: Partial<IOptions>;
  onClose(): void;
}

export const CropImage: FC<CropImageProps> = ({ src, isOpen, name, options, onClose }) => {
  return (
    <>
      <CropImageModal isOpen={isOpen} src={src} name="edit" onClose={onClose} options={options} />
    </>
  );
};
