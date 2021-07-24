import React, { FC } from "react";

import { NextSeo } from "next-seo";

interface SEOProps {
  title: string;
  desc: string;
}

export const SEO: FC<SEOProps> = ({ title, desc, children }) => {
  return (
    <>
      <link href="/favicon.ico" rel="icon" type="image/x-icon" />
      <NextSeo description={desc} title={title} />
      {children}
    </>
  );
};
