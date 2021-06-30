import React from "react";
import { useSession } from "next-auth/client";

const VerifyLogin = () => {
  const [session, loading] = useSession();

  console.log({ session, loading });

  return <div>VerifyLogin</div>;
};

export default VerifyLogin;
