import React, { FC } from "react";

import { MeTemplate } from "@/templates";
import { MePageProps } from "@/servers";
import { useAction } from "@/store";
import { SEO } from "@/components";

const MePage: FC<MePageProps> = props => {
  const { setProfileMe } = useAction();

  setProfileMe({ ...props });

  return (
    <SEO desc="Automarket RD" title="eriickson01d | Automarket RD">
      <MeTemplate />
    </SEO>
  );
};

export { meServerSide as getServerSideProps } from "@/servers";
export default MePage;
