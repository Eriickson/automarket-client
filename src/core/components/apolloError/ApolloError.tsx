import { useUIContext } from "@/context";
import { parseError } from "@/utils";
import { ApolloError } from "@apollo/client";
import React, { FC, useEffect } from "react";

interface ApolloErrorProps {
  error: ApolloError | undefined;
}

export const ApolloErrorComponent: FC<ApolloErrorProps> = ({ error }) => {
  const { toast } = useUIContext();

  useEffect(() => {
    if (error) {
      const err = parseError(error);
      toast.showToast({ title: err.title, desc: err.message, status: err.status });
    }
  }, [error]);

  return <></>;
};
