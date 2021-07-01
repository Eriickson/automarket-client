import React, { FC } from "react";

import { NextSeo } from "next-seo";

interface SEOProps {
  title: string;
  desc: string;
}

export const SEO: FC<SEOProps> = ({ title, desc, children }) => {
  return (
    <>
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <NextSeo title={title} description={desc} />
      {children}
    </>
  );
};
