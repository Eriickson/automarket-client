import React from "react";
import { Button, Text } from "@chakra-ui/react";
import { useUIContext } from "@/context";
import { InputControl } from "../inputs";
import { FormProvider, useForm } from "react-hook-form";
import { ConfirmPasswordResolver } from "@/validations";
import { ErrorValidationForm } from "@/components";

interface ConfirmPasswordModal {}

export const ConfirmPasswordModal = () => {
  const { alertDialog } = useUIContext();

  return (
    <>
      <Button
        onClick={() =>
          alertDialog.onOpen({
            title: "Eliminar publicación",
            name: "confirmPassword",
            desc: (
              <>
                <Text lineHeight="5" mb="3">
                  Debes validar tu identidad introduciendo tu contraseña antes de realizar esta acción
                </Text>
                <ConfirmPasswordModalForm />
              </>
            ),
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
        Click here!
      </Button>
    </>
  );
};

export const ConfirmPasswordModalForm = () => {
  const methods = useForm({ resolver: ConfirmPasswordResolver });

  return (
    <FormProvider {...methods}>
      <form
        id="confirmPassword"
        onSubmit={methods.handleSubmit(values => {
          console.log(values);
        })}
      >
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
