import React, { useEffect, useState } from "react";
import { useSession as useSessionNextAuth } from "next-auth/client";
import { ISession } from "@/shared";

export const useSession = () => {
  const [sessionNextAuth, loadingNextAuth] = useSessionNextAuth();
  const [session, setSession] = useState<ISession | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  return { session, loading };
};
