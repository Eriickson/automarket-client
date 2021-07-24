import React, { FC } from "react";
import { Avatar as ChakraAvatar } from "@chakra-ui/react";

interface AvatarProps {
  src?: string;
}

export const Avatar: FC<AvatarProps> = ({ src }) => {
  return (
    <div>
      <ChakraAvatar src={src} mb={3} rounded="sm" size="2xl" />
    </div>
  );
};
