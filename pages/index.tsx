import React from "react";

// NextJs
import { NextPage } from "next";

// My Components
import { IndexTemplate } from "@/templates";

const IndexPage: NextPage = () => {
  return <IndexTemplate />;
};

export { indexServerSide as getServerSideProps } from "@/servers";
export default IndexPage;
