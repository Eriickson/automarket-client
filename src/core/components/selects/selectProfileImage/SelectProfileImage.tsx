import React, { FC, useEffect } from "react";
import { TransformImageModal } from "./TransformImageModal";
import { UploadButton } from "./UploadButton";
import { useSelectProfileImage } from "./SelectProfileImageContext";
import { Box, Avatar, Img } from "@chakra-ui/react";
import { ICroppedAreaPixels } from "@/shared";

export type onChangeArgsPropType = {
  file: File;
  src: string;
  croppedAreaPixels: ICroppedAreaPixels;
  rotation: number;
};

interface SelectProfileImageProps {
  labelButton?: string;
  showAvatar?: boolean;
  onChange(value: onChangeArgsPropType): void;
}

export const SelectProfileImage: FC<SelectProfileImageProps> = ({ showAvatar, labelButton, onChange }) => {
  const { fileSelected, setLabelButton } = useSelectProfileImage();

  useEffect(() => {
    labelButton && setLabelButton(labelButton);
  }, []);

  return (
    <>
      <Box alignItems="center" display="flex">
        {showAvatar && (
          <>
            {fileSelected.src ? (
              <Img mr={5} rounded="sm" src={fileSelected.src} w="24" />
            ) : (
              <Avatar mr={5} rounded="sm" size="xl" />
            )}
          </>
        )}
        <UploadButton />
      </Box>
      <TransformImageModal onChange={onChange} />
    </>
  );
};

export { SelectProfileImageProvider } from "./SelectProfileImageContext";
