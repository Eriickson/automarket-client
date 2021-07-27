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
  options?: Partial<IOptions>;
  onRotationChange(newRotation: number): void;
  onZoomChange(newZoom: number): void;
  onChangeFlip(newFlip: "HORIZONTAL" | "VERTICAL"): void;
  onAspectRatioChange(newAspectRatio: AspectRatioType): void;
  onReset(): void;
}
export const CropImageActions: FC<CropImageActionsProps> = ({
  options,
  rotation,
  zoom,
  onAspectRatioChange,
  onRotationChange,
  onZoomChange,
  onChangeFlip,
  onReset,
}) => {
  const [actionSelected, setActionSelected] = useState<ActionsType | null>(null);

  return (
    <HStack mb={["2", null, 0]} w="full">
      {actionSelected === null ? (
        <>
          {options?.showBtnAspectRatio && (
            <Button size="sm" onClick={() => setActionSelected("ASPECT-RATIO")}>
              Dimencionar
            </Button>
          )}
          {options?.showBtnZoom && (
            <Button size="sm" onClick={() => setActionSelected("ZOOM")}>
              Zoom
            </Button>
          )}
          {options?.showBtnRotation && (
            <Button size="sm" onClick={() => setActionSelected("ROTATE")}>
              Rotar
            </Button>
          )}
          {options?.showBtnFlip && (
            <Button size="sm" onClick={() => setActionSelected("FLIP")}>
              Voltear
            </Button>
          )}
        </>
      ) : (
        <>
          <Button
            colorScheme="info"
            leftIcon={<IconChevronLeft />}
            pl="1"
            size="sm"
            onClick={() => setActionSelected(null)}
          >
            Volver
          </Button>
          <HStack>
            {actionSelected === "ROTATE" && options ? (
              <>
                <IconButton
                  aria-label="Rotar hacia la derecha"
                  icon={<RotateCw size="1.25rem" />}
                  size="sm"
                  onClick={() => {
                    rotation === 270 ? onRotationChange(0) : onRotationChange(rotation + 90);
                  }}
                />
                <IconButton
                  aria-label="Rotar hacia la izquierda"
                  icon={<RotateCcw size="1.25rem" />}
                  size="sm"
                  onClick={() => {
                    rotation === 0 ? onRotationChange(270) : onRotationChange(rotation - 90);
                  }}
                />
              </>
            ) : actionSelected === "ASPECT-RATIO" ? (
              <>
                <Button px="2" size="sm" onClick={() => onAspectRatioChange("16:9")}>
                  16:9
                </Button>
                <Button px="2" size="sm" onClick={() => onAspectRatioChange("4:3")}>
                  4:3
                </Button>
                <Button px="2" size="sm" onClick={() => onAspectRatioChange("1:1")}>
                  1:1
                </Button>
              </>
            ) : actionSelected === "FLIP" ? (
              <>
                <IconButton
                  aria-label="acercar"
                  icon={<IconFlipVertical size="1.25rem" />}
                  size="sm"
                  onClick={() =>
                    rotation === 90 || rotation === 270 ? onChangeFlip("VERTICAL") : onChangeFlip("HORIZONTAL")
                  }
                />
                <IconButton
                  aria-label="acercar"
                  icon={<IconFlipHorizontal size="1.25rem" />}
                  size="sm"
                  onClick={() =>
                    rotation === 90 || rotation === 270 ? onChangeFlip("HORIZONTAL") : onChangeFlip("VERTICAL")
                  }
                />
              </>
            ) : (
              actionSelected === "ZOOM" && (
                <>
                  <IconButton
                    aria-label="acercar"
                    icon={<ZoomIn size="1.25rem" />}
                    size="sm"
                    onClick={() => zoom < 3 && onZoomChange(Number((zoom + 0.2).toFixed(2)))}
                  />
                  <IconButton
                    aria-label="acercar"
                    icon={<ZoomOut size="1.25rem" />}
                    size="sm"
                    onClick={() => zoom > 1.2 && onZoomChange(Number((zoom + -0.2).toFixed(2)))}
                  />
                </>
              )
            )}
          </HStack>
        </>
      )}
      <Button
        colorScheme="danger"
        variant="ghost"
        onClick={() => {
          onReset();
        }}
      >
        Restablecer
      </Button>
    </HStack>
  );
};
