import React, { useCallback, useState } from "react";
import Cropper from "react-easy-crop";
//Styles and Icons
import styled from "@emotion/styled";
import { useEffect } from "react";
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
  img {
    transition: 500ms;
  }
`;

export const CropImage = () => {
  const { zoom, crop, rotation, fileSelected, onZoomChange, onChangeCrop, onCroppedAreaPixelsChange } =
    useSelectProfileImage();
  const [src, setSrc] = useState("");

  const onCropComplete = useCallback((_, croppedAreaPixels) => {
    const { width, height, x, y } = croppedAreaPixels;
    onCroppedAreaPixelsChange(width, height, x, y);
  }, []);


  return (
    <WrapperCropperImageStyled>
      <Cropper
        showGrid={false}
        image={fileSelected.src}
        crop={crop}
        zoom={zoom}
        aspect={1 / 1}
        onCropChange={onChangeCrop}
        onCropComplete={onCropComplete}
        onZoomChange={onZoomChange}
        rotation={rotation}
        zoomSpeed={0.5}
        zoomWithScroll={false}
      />
    </WrapperCropperImageStyled>
  );
};
