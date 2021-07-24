import React from "react";

// NextJs
import { NextPage } from "next";

// My Components
import { IndexTemplate } from "@/templates";
import { SEO } from "@/components";

const IndexPage: NextPage = () => {
  return (
    <SEO desc="Automarket RD" title="Inicio">
      <IndexTemplate />
    </SEO>
  );
};

export default IndexPage;
