import React, { FC } from "react";
import { Avatar, Box, Img } from "@chakra-ui/react";

import { useSelectProfileImage } from "./SelectProfileImageContext";
import { UploadButton } from "./UploadButton";

export const ShowAvatar: FC = () => {
  const { fileSelected } = useSelectProfileImage();

  return (
    <Box alignItems="center" display="flex">
      {fileSelected.src ? (
        <Img mr={5} rounded="sm" src={fileSelected.src} w="24" />
      ) : (
        <Avatar mr={5} rounded="sm" size="xl" />
      )}
      <UploadButton />
    </Box>
  );
};
