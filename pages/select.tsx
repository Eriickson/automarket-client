import { MainLayout } from "@/layouts";
import { InputControl, Select } from "@/components";
import React, { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Box, Button } from "@chakra-ui/react";
import { IOption } from "@/shared";
import { useAction, useSelector } from "@/store";

const SelectPage = () => {
  const { setExampleSelect } = useAction();
  const { exampeSelect } = useSelector(store => store.agency);
  const methods = useForm();

  useEffect(() => {
    setExampleSelect({ value: "3", label: "example3" });
  }, []);

  return (
    <MainLayout>
      <Box maxWidth="2xl" mx="auto">
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(values => {
              console.log(values);
            })}
          >
            <InputControl name="input" inputProps={{ placeholder: "Seleccionar..." }} />
            <Select
              name="example-select"
              defaultValue={exampeSelect}
              options={[
                { value: "1", label: "example1" },
                { value: "2", label: "example2" },
                { value: "3", label: "example3" },
              ]}
            />
            <Button type="submit" mt="3" colorScheme="pri" w="full">
              Enviar
            </Button>
          </form>
        </FormProvider>
      </Box>
    </MainLayout>
  );
};

export default SelectPage;
