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
  desc: string;
  priBtnLabel: string;
  secBtnLabel?: string;
  role?: RoleType;
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

  console.log(roleInternal[role].icon);

  return (
    <>
      <AlertDialogChakra
        isCentered
        motionPreset="slideInBottom"
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        size="lg"
        // closeOnOverlayClick={false}
      >
        <AlertDialogOverlay>
          <AlertDialogContent mx="1" rounded="sm">
            <AlertDialogHeader display="flex" alignItems="center" fontWeight="bold">
              <Box
                w="8"
                h="8"
                mr="2"
                display="flex"
                bgColor={String(roleInternal[role].bgIcon)}
                alignItems="center"
                justifyContent="center"
              >
                {roleInternal[role].icon}
              </Box>
              {title}
            </AlertDialogHeader>
            <AlertDialogBody pt="0">{desc}</AlertDialogBody>
            <AlertDialogFooter>
              {secBtnLabel && (
                <Button variant="ghost" onClick={onClickSecBtn}>
                  {secBtnLabel}
                </Button>
              )}
              <Button colorScheme={String(roleInternal[role].colorPriButton)} autoFocus ml={3} onClick={onClickPriBtn}>
                {priBtnLabel}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialogChakra>
    </>
  );
};
