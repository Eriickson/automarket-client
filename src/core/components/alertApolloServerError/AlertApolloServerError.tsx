import React, { FC } from "react";
import { IApolloServerError } from "@/shared";
import { AlertDialog } from "..";
import { AlertDialogProps } from "..";

interface AlertApolloServerErrorOptions
  extends IApolloServerError,
    Pick<AlertDialogProps, "priBtnLabel" | "onClickPriBtn" | "secBtnLabel" | "onClickSecBtn"> {}

interface AlertApolloServerErrorProps
  extends Partial<AlertApolloServerErrorOptions>,
    Pick<AlertDialogProps, "isOpen" | "onClose" | "cancelRef"> {}

export const AlertApolloServerError: FC<AlertApolloServerErrorProps> = ({
  priBtnLabel,
  secBtnLabel,
  message,
  detail,
  type,
  error,
  isOpen,
  cancelRef,
  onClickPriBtn,
  onClickSecBtn,
  onClose,
}) => {
  return (
    <AlertDialog
      cancelRef={cancelRef}
      desc={detail}
      isOpen={isOpen}
      name={error}
      priBtnLabel={priBtnLabel}
      role={type}
      secBtnLabel={secBtnLabel}
      title={message}
      onClickPriBtn={onClickPriBtn}
      onClickSecBtn={onClickSecBtn}
      onClose={onClose}
    />
  );
};
