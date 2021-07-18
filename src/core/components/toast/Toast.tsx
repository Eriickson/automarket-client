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
} from "@chakra-ui/react";
import { useUIContext } from "@/context";

export interface IToastOptions {
  title: string;
  desc: string;
}

interface ToastProps extends RenderProps, IToastOptions {}

export const Toast: FC<ToastProps> = ({ title, desc, onClose }) => {
  const options = useUIContext();
  console.log(options);

  return (
    <Alert alignItems="center" status="error" variant="left-accent">
      <AlertIcon />
      {/* <AlertTitle>{toast.options.title}</AlertTitle> */}
      <AlertDescription>
        <Text fontSize="sm" fontWeight="medium" pr="4">
          {/* {toast.options.desc} */}
        </Text>
      </AlertDescription>
      <CloseButton
        _focus={{
          ring: 0,
        }}
        borderRadius="sm"
        size="sm"
        onClick={onClose}
      />
    </Alert>
  );
};
