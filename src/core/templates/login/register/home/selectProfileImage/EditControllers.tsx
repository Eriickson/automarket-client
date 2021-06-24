import React from "react";

import { IconButton, HStack } from "@chakra-ui/react";

import { ZoomIn, ZoomOut, RotateCw } from "react-feather";
import { useSelectProfileImage } from "./SelectProfileImageContext";

export const EditControllers = () => {
  const { zoom, onZoomChange, onRotationChange } = useSelectProfileImage();

  return (
    <HStack mt="2" display="flex">
      <IconButton
        aria-label="Acercar imagen"
        size="sm"
        icon={<ZoomIn size="1.25rem" />}
        onClick={() => zoom < 4 && onZoomChange(Number((zoom + 0.5).toFixed(2)))}
      />
      <IconButton
        aria-label="Alejar imagen"
        size="sm"
        icon={<ZoomOut size="1.25rem" />}
        onClick={() => zoom > 1 && onZoomChange(Number((zoom + -0.5).toFixed(2)))}
      />
      <IconButton aria-label="Rotar imagen" size="sm" icon={<RotateCw size="1.25rem" />} onClick={onRotationChange} />
    </HStack>
  );
};
