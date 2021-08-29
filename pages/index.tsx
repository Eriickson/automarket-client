import React from "react";

// NextJs
import { NextPage } from "next";

// My Components
import { IndexTemplate } from "@/templates";
import { AttendanceBanner, SEO } from "@/components";

const IndexPage: NextPage = () => {
  return (
    <SEO desc="Automarket RD" title="Inicio">
      <IndexTemplate />
      {/* <AttendanceBanner /> */}
    </SEO>
  );
};

// export { indexServerSide as getServerSideProps } from "@/servers";
export default IndexPage;
