import React, { FC, useEffect } from "react";

// Packages
import { Button, Text } from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";

// My Components
import { ErrorValidationForm } from "@/components";
import { useUIContext } from "@/context";
import { useVerifyUserPassword } from "@/graphql";
import { IFormConfirmPasswordOnSubmit, ConfirmPasswordResolver } from "@/validations";
import { InputControl } from "../inputs";

interface ConfirmPasswordModalProps {
  labelButton: string;
  hasSuccess(success: boolean | null): void;
}

export const ConfirmPasswordModal: FC<ConfirmPasswordModalProps> = ({ labelButton, hasSuccess }) => {
  const { alertDialog } = useUIContext();

  const Descripction = () => (
    <>
      <Text lineHeight="5">Debes validar tu identidad introduciendo tu contraseña antes de realizar esta acción</Text>
      <ConfirmPasswordModalForm hasSuccess={hasSuccess} />
    </>
  );

  return (
    <>
      <Button
        onClick={() =>
          alertDialog.onOpen({
            title: "Eliminar publicación",
            name: "confirmPassword",
            desc: <Descripction />,
            role: "success",
            priBtnLabel: "Validar",
            secBtnLabel: "Cancelar",
            onClickSecBtn() {
              alertDialog.onClose();
            },
            onClickPriBtn() {},
          })
        }
      >
        {labelButton}
      </Button>
    </>
  );
};

interface ConfirmPasswordModalFormProps {
  hasSuccess(success: boolean | null): void;
}

export const ConfirmPasswordModalForm: FC<ConfirmPasswordModalFormProps> = ({ hasSuccess }) => {
  const { verifyUserPasswordFetch, verified, loading } = useVerifyUserPassword();
  const { alertDialog } = useUIContext();
  const methods = useForm({ resolver: ConfirmPasswordResolver });

  async function onSubmit(values: IFormConfirmPasswordOnSubmit) {
    verifyUserPasswordFetch({ password: values.confirmPassword });
  }

  useEffect(() => {
    verified && alertDialog.onClose();
    hasSuccess(verified);
  }, [verified]);

  return (
    <FormProvider {...methods}>
      {verified === false && (
        <Text my="3" color="danger.500" fontWeight="semibold" textAlign="center" p="0.1" bgColor="danger.100">
          La contraseña es incorrecta
        </Text>
      )}
      <form id="confirmPassword" onSubmit={methods.handleSubmit(onSubmit)}>
        <InputControl
          isRequired
          label="Confirma tu contraseña"
          name="confirmPassword"
          inputProps={{ placeholder: "Contraseña" }}
        />
        <ErrorValidationForm name="confirmPassword" errors={methods.formState.errors} />
      </form>
    </FormProvider>
  );
};
