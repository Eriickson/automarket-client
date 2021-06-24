import React, { FC, useEffect, ReactElement } from "react";
import { TransformImageModal } from "./TransformImageModal";
import { ShowAvatar } from "./ShowAvatar";
import { useSelectProfileImage } from "./SelectProfileImageContext";

export type onChangeArgsPropType = {
  file: File;
  src: string;
  croppedAreaPixels: { w: number; h: number; x: number; y: number };
  rotation: number;
};

interface SelectProfileImageProps {
  labelButton?: string;
  buttonTopContent?: ReactElement;
  onChange(value: onChangeArgsPropType): void;
}

export const SelectProfileImage: FC<SelectProfileImageProps> = ({ labelButton, buttonTopContent, onChange }) => {
  const { setLabelButton, setButtonTopContent } = useSelectProfileImage();

  useEffect(() => {
    labelButton && setLabelButton(labelButton);
    setButtonTopContent(buttonTopContent);
  }, []);

  return (
    <>
      <ShowAvatar />
      <TransformImageModal onChange={onChange} />
    </>
  );
};

export { SelectProfileImageProvider } from "./SelectProfileImageContext";
