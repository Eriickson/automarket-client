import React, { FC } from "react";

import { IconButton, HStack } from "@chakra-ui/react";

import { ZoomIn, ZoomOut, RotateCw } from "react-feather";
import { useSelectProfileImage } from "./SelectProfileImageContext";

export const EditControllers: FC = () => {
  const { zoom, onZoomChange, onRotationChange } = useSelectProfileImage();

  return (
    <HStack display="flex" mt="2">
      <IconButton
        aria-label="Acercar imagen"
        icon={<ZoomIn size="1.25rem" />}
        size="sm"
        onClick={() => zoom < 4 && onZoomChange(Number((zoom + 0.5).toFixed(2)))}
      />
      <IconButton
        aria-label="Alejar imagen"
        icon={<ZoomOut size="1.25rem" />}
        size="sm"
        onClick={() => zoom > 1 && onZoomChange(Number((zoom + -0.5).toFixed(2)))}
      />
      <IconButton aria-label="Rotar imagen" icon={<RotateCw size="1.25rem" />} size="sm" onClick={onRotationChange} />
    </HStack>
  );
};
