import { InputControl } from "@/components";
import { ChangeUserPassword, ChangeUserPasswordFormResolver } from "@/validations";
import { VStack } from "@chakra-ui/react";
import React, { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";

export interface ChangePasswordFormProps {
  onSubmit(values: ChangeUserPassword): void;
}

export const ChangePasswordForm: FC<ChangePasswordFormProps> = ({ onSubmit }) => {
  const methods = useForm<ChangeUserPassword>({ resolver: ChangeUserPasswordFormResolver });
  return (
    <FormProvider {...methods}>
      <form id="change-user-password" onSubmit={methods.handleSubmit(onSubmit)}>
        <VStack>
          <InputControl label="Contraseña actual" name="currentPassword" />
          <InputControl label="Nueva contraseña" name="newPassword" />
          <InputControl label="Confirmar nueva contraseña" name="confirmNewPassword" />
        </VStack>
      </form>
    </FormProvider>
  );
};
