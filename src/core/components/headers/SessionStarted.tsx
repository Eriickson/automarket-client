import { useSelector } from "@/store";
import { Box } from "@chakra-ui/react";
import React, { FC } from "react";
import { Image } from "../images";
import styled from "@emotion/styled";

const WraperSessionStartedStyled = styled.div`
  width: 50px;
  img {
    border-radius: 100%;
  }
`;

export const SessionStarted: FC = () => {
  const { profilePicture } = useSelector(({ profile }) => profile.profileMe);

  return (
    <WraperSessionStartedStyled>
      <Image src={profilePicture} alt="" />
    </WraperSessionStartedStyled>
  );
};
