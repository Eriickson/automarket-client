import React from "react";
import { NextPage } from "next";
import { IndexTemplate } from "@/templates";
import { SEO } from "@/components";

const IndexPage: NextPage = () => {
  return (
    <SEO title="Inicio" desc="Automarket RD">
      <IndexTemplate />
    </SEO>
  );
};

export default IndexPage;
