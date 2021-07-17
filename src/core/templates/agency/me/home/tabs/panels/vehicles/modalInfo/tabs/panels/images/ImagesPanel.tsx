import React, { FC, useEffect, useState } from "react";
import { ImagePanelSwiper } from "./ImagePanelSwiper";

export const ImagesPanel: FC = () => {
  const [showing, setShowing] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowing(true);
    }, 1000);
  }, []);
  return <div>{showing && <ImagePanelSwiper />}</div>;
};
