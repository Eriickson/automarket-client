import React, { FC, useCallback } from "react";

// Packages
import Cropper from "react-easy-crop";

//Styles and Icons
import styled from "@emotion/styled";

// My Components
import { useSelectProfileImage } from "./SelectProfileImageContext";

const WrapperCropperImageStyled = styled.div`
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

export const CropImage: FC = () => {
  const { zoom, crop, rotation, aspectRatio, fileToEditing, onZoomChange, onChangeCrop, onCroppedAreaPixelsChange } =
    useSelectProfileImage();

  const onCropComplete = useCallback((_, croppedAreaPixels) => {
    const { width, height, x, y } = croppedAreaPixels;
    onCroppedAreaPixelsChange(width, height, x, y);
  }, []);

  return (
    <WrapperCropperImageStyled>
      <Cropper
        aspect={aspectRatio}
        crop={crop}
        image={fileToEditing.src}
        rotation={rotation}
        showGrid={false}
        zoom={zoom}
        zoomSpeed={0.5}
        onCropChange={onChangeCrop}
        onCropComplete={onCropComplete}
        onZoomChange={onZoomChange}
      />
    </WrapperCropperImageStyled>
  );
};
