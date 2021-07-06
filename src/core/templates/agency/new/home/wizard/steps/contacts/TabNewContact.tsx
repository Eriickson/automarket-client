import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { NewNumberPhoneForm } from "./NewNumberPhoneForm";
import { NewEmailForm } from "./NewEmailForm";

import { useForm, FormProvider, useFieldArray, FieldValues, Control } from "react-hook-form";

export const TabNewContact = () => {
  const methods = useForm();
  function onSubmit(values: any) {
    console.log(values);
  }

  console.log(methods.getValues());

  return (
    <FormProvider {...methods}>
      <Tabs>
        <TabList>
          <Tab>Número Telefónico</Tab>
          <Tab>Correo electrónico</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <NewNumberPhoneForm />
          </TabPanel>
          <TabPanel>
            <NewEmailForm control={methods.control} onSubmit={onSubmit} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </FormProvider>
  );
};
