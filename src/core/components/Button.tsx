import React, { FC } from "react";
import { Button as ChakraButton, ButtonProps as ChakraButtonProps, ThemingProps } from "@chakra-ui/react";

interface ButtonProps extends ChakraButtonProps {}

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <ChakraButton {...props} lineHeight="4" borderRadius="sm">
      {children}
    </ChakraButton>
  );
};
