import React from "react";

import NextImage, { ImageProps as ImagePropsNext } from "next/image";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;

  > div {
    position: unset !important;
  }

  img {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }
`;

interface ImageProps {
  src: string;
  alt: string;
  resolution?: "x50" | "x250";
}

export const Image: React.FC<ImageProps> = ({ src, alt, resolution = "x250" }) => {
  return (
    <Container>
      <NextImage
        alt={alt}
        blurDataURL={src.replace(/resolution/g, "x50")}
        className="image"
        layout="fill"
        placeholder="blur"
        src={src.replace(/resolution/g, resolution)}
      />
    </Container>
  );
};
