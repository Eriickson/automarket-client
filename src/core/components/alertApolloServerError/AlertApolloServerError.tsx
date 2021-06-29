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
      priBtnLabel={priBtnLabel}
      secBtnLabel={secBtnLabel}
      title={message}
      desc={detail}
      role={type}
      name={error}
      isOpen={isOpen}
      cancelRef={cancelRef}
      onClose={onClose}
      onClickPriBtn={onClickPriBtn}
      onClickSecBtn={onClickSecBtn}
    />
  );
};
