import React, { FC, MutableRefObject, ReactElement, useState } from "react";
import {
  AlertDialog as AlertDialogChakra,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  Box,
} from "@chakra-ui/react";

import { IconCheck, IconAlertTriangle, IconAlertCircle, IconInfoCircle } from "@tabler/icons";

export type RoleType = "success" | "warning" | "danger" | "info";

export interface IAlertDialogOption {
  title: string;
  name: string;
  desc: string | ReactElement;
  priBtnLabel: string;
  secBtnLabel?: string;
  role?: RoleType;
  closeOnOverlayClick?: boolean;
  onClickPriBtn(): void;
  onClickSecBtn?(): void;
}
export interface AlertDialogProps extends Partial<IAlertDialogOption> {
  isOpen: boolean;
  onClose(): void;
  cancelRef: MutableRefObject<null>;
}

export const AlertDialog: FC<AlertDialogProps> = ({
  isOpen,
  cancelRef,
  title,
  desc,
  priBtnLabel,
  secBtnLabel,
  role = "success",
  name,
  closeOnOverlayClick,
  onClose,
  onClickPriBtn,
  onClickSecBtn,
}) => {
  const [roleInternal] = useState<Record<RoleType, Record<string, string | ReactElement>>>({
    success: {
      icon: (
        <Box color="success.500">
          <IconCheck />
        </Box>
      ),
      bgIcon: "success.100",
      colorPriButton: "success",
    },
    warning: {
      icon: (
        <Box color="warning.500">
          <IconAlertTriangle />
        </Box>
      ),
      bgIcon: "warning.100",
      colorPriButton: "warning",
    },
    danger: {
      icon: (
        <Box color="red.500">
          <IconAlertCircle />
        </Box>
      ),
      bgIcon: "red.100",
      colorPriButton: "red",
    },
    info: {
      icon: (
        <Box color="info.500">
          <IconInfoCircle />
        </Box>
      ),
      bgIcon: "info.100",
      colorPriButton: "info",
    },
  });

  return (
    <>
      <AlertDialogChakra
        isCentered
        closeOnOverlayClick={closeOnOverlayClick}
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        motionPreset="slideInBottom"
        size="lg"
        onClose={onClose}
      >
        <AlertDialogOverlay bgColor="rgba(0, 0, 0, 0.8) !important">
          <AlertDialogContent mx="1" rounded="sm">
            <AlertDialogHeader alignItems="center" display="flex" fontWeight="bold">
              <Box
                alignItems="center"
                bgColor={String(roleInternal[role].bgIcon)}
                display="flex"
                h="8"
                justifyContent="center"
                mr="2"
                w="8"
              >
                {roleInternal[role].icon}
              </Box>
              {title}
            </AlertDialogHeader>
            <AlertDialogBody pt="0">{desc}</AlertDialogBody>
            <AlertDialogFooter pt="0">
              {secBtnLabel && (
                <Button variant="ghost" onClick={onClickSecBtn}>
                  {secBtnLabel}
                </Button>
              )}
              <Button
                autoFocus
                colorScheme={String(roleInternal[role].colorPriButton)}
                form={name}
                ml={3}
                type="submit"
                onClick={onClickPriBtn}
              >
                {priBtnLabel}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialogChakra>
    </>
  );
};
