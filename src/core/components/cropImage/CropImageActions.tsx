import { AspectRatioType, IFlip } from "@/shared";
import { Button, HStack, IconButton } from "@chakra-ui/react";
import { IconChevronLeft, IconFlipHorizontal, IconFlipVertical } from "@tabler/icons";
import React, { useState, FC } from "react";
import { RotateCcw, RotateCw, ZoomIn, ZoomOut } from "react-feather";
import { IOptions } from "./types";

type ActionsType = "ZOOM" | "ROTATE" | "FLIP" | "ASPECT-RATIO";

interface CropImageActionsProps {
  zoom: number;
  rotation: number;
  flip: IFlip;
  onRotationChange(newRotation: number): void;
  onZoomChange(newZoom: number): void;
  onChangeFlip(newFlip: "HORIZONTAL" | "VERTICAL"): void;
  onAspectRatioChange(newAspectRatio: AspectRatioType): void;
  options?: Partial<IOptions>;
}
export const CropImageActions: FC<CropImageActionsProps> = ({
  options,
  rotation,
  zoom,
  onAspectRatioChange,
  onRotationChange,
  onZoomChange,
  onChangeFlip,
}) => {
  const [actionSelected, setActionSelected] = useState<ActionsType | null>(null);

  return (
    <HStack mb={["2", null, 0]} w="full">
      {actionSelected === null ? (
        <>
          {options?.showBtnAspectRatio && (
            <Button onClick={() => setActionSelected("ASPECT-RATIO")}>Dimencionar</Button>
          )}
          {options?.showBtnZoom && <Button onClick={() => setActionSelected("ZOOM")}>Zoom</Button>}
          {options?.showBtnRotation && <Button onClick={() => setActionSelected("ROTATE")}>Rotar</Button>}
          {options?.showBtnFlip && <Button onClick={() => setActionSelected("FLIP")}>Voltear</Button>}
        </>
      ) : (
        <>
          <Button colorScheme="info" leftIcon={<IconChevronLeft />} pl="1" onClick={() => setActionSelected(null)}>
            Volver
          </Button>
          <HStack>
            {actionSelected === "ROTATE" && options ? (
              <>
                <IconButton
                  aria-label="Rotar hacia la derecha"
                  icon={<RotateCcw />}
                  onClick={() => {
                    rotation === 270 ? onRotationChange(0) : onRotationChange(rotation + 90);
                  }}
                />
                <IconButton
                  aria-label="Rotar hacia la izquierda"
                  icon={<RotateCw />}
                  onClick={() => {
                    rotation === 0 ? onRotationChange(270) : onRotationChange(rotation - 90);
                  }}
                />
              </>
            ) : actionSelected === "ASPECT-RATIO" ? (
              <>
                <Button onClick={() => onAspectRatioChange("16:9")}>16:9</Button>
                <Button onClick={() => onAspectRatioChange("4:3")}>4:3</Button>
                <Button onClick={() => onAspectRatioChange("1:1")}>1:1</Button>
              </>
            ) : actionSelected === "FLIP" ? (
              <>
                <IconButton
                  aria-label="acercar"
                  icon={<IconFlipVertical />}
                  onClick={() => onChangeFlip("HORIZONTAL")}
                />
                <IconButton
                  aria-label="acercar"
                  icon={<IconFlipHorizontal />}
                  onClick={() => onChangeFlip("VERTICAL")}
                />
              </>
            ) : (
              actionSelected === "ZOOM" && (
                <>
                  <IconButton
                    aria-label="acercar"
                    icon={<ZoomIn />}
                    onClick={() => zoom < 3 && onZoomChange(Number((zoom + 0.2).toFixed(2)))}
                  />
                  <IconButton
                    aria-label="acercar"
                    icon={<ZoomOut />}
                    onClick={() => zoom > 1.2 && onZoomChange(Number((zoom + -0.2).toFixed(2)))}
                  />
                </>
              )
            )}
          </HStack>
        </>
      )}
    </HStack>
  );
};