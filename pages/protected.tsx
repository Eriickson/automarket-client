import { useSession } from "next-auth/client";
import React, { FC } from "react";

const Protected: FC = () => {
  const [session] = useSession();

  console.log(session);

  return <div>Protected</div>;
};

export default Protected;
