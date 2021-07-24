import React, { FC } from "react";
import { Avatar as ChakraAvatar, AvatarProps as ChakraAvatarProps } from "@chakra-ui/react";
import styled from "@emotion/styled";

const WraperAvatarStyled = styled.div`
  img {
    border-radius: 0.25rem;
  }
`;

export const Avatar: FC<ChakraAvatarProps> = props => {
  return (
    <WraperAvatarStyled>
      <ChakraAvatar rounded="sm" {...props} />
    </WraperAvatarStyled>
  );
};
