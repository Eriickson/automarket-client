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
  aspectRatio?: number;
  onChange(value: onChangeArgsPropType): void;
}

export const SelectProfileImage: FC<SelectProfileImageProps> = ({ showAvatar, labelButton, aspectRatio, onChange }) => {
  const { fileSelected, setLabelButton, setAspectRatio } = useSelectProfileImage();

  useEffect(() => {
    labelButton && setLabelButton(labelButton);
    aspectRatio && setAspectRatio(aspectRatio);
  }, []);

  return (
    <>
      <Box alignItems="center" display="flex">
        {showAvatar && (
          <>
            {fileSelected.src ? (
              <Img shadow="sm" border="2px" borderColor="gray.200" mr={5} rounded="sm" src={fileSelected.src} w="24" />
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
