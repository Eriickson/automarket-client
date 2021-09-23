import React, { FC } from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  Text,
  AlertDescription,
  RenderProps,
  CloseButton,
  useToast,
  Flex,
} from "@chakra-ui/react";
import { useUIContext } from "@/context";

export interface IToastOptions {
  title: string;
  desc: string;
  status: "success" | "info" | "warning" | "error" | undefined;
}

type ToastProps = IToastOptions;

export const Toast: FC<ToastProps> = ({ title, desc, status }) => {
  return (
    <Alert alignItems="flex-start" status={status} variant="left-accent">
      <AlertIcon />
      <Flex flexDir="column">
        <AlertTitle lineHeight="6" userSelect="none">
          {title}
        </AlertTitle>
        <AlertDescription>
          <Text fontSize="sm" fontWeight="medium" lineHeight="4" pr="4" userSelect="none">
            {desc}
          </Text>
        </AlertDescription>
      </Flex>
      {/* <CloseButton
        _focus={{
          ring: 0,
        }}
        borderRadius="sm"
        size="sm"
        // onClick={onClose}
      /> */}
    </Alert>
  );
};
