import { MainLayout } from "@/layouts";
import { InputControl, Select } from "@/components";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Box } from "@chakra-ui/react";

const SelectPage = () => {
  const methods = useForm();

  return (
    <MainLayout>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(values => {
            console.log(values);
          })}
        >
          <Box mb="5">
            <InputControl name="input" inputProps={{ placeholder: "Seleccionar..." }} />
          </Box>
          <Select
            name="select"
            defaultValue={{ value: "3", label: "example3" }}
            options={[
              { value: "1", label: "example1" },
              { value: "2", label: "example2" },
              { value: "3", label: "example3" },
            ]}
          />
          <button>Enviar</button>
        </form>
      </FormProvider>
    </MainLayout>
  );
};

export default SelectPage;
