import React, { FC } from "react";

import { NextSeo } from "next-seo";

export interface SeoProviderProps {
  title: string;
  desc: string;
}

export const SeoProvider: FC<SeoProviderProps> = ({ title, desc, children }) => {
  return (
    <>
      <link href="/favicon.ico" rel="icon" type="image/x-icon" />
      <NextSeo description={desc} title={title} />
      {children}
    </>
  );
};
