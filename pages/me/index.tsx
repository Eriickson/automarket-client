import React, { FC, useEffect } from "react";

import { MeTemplate } from "@/templates";
import { MePageProps } from "@/servers";
import { useAction } from "@/store";

const MePage: FC<MePageProps> = ({ profileMe }) => {
  const { setProfileMe } = useAction();

  useEffect(() => {
    setProfileMe(profileMe);
  }, []);

  return <MeTemplate />;
};

export { meServerSide as getServerSideProps } from "@/servers";
export default MePage;
