import { Option } from "@/shared";
import { useSelector } from "@/store";
import { Badge, Box, Checkbox, CheckboxGroup, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import React, { FC, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

type FormPanelType = {
  title: string;
  name: string;
  items: Option[];
  defaultValues?: string[];
};

interface ListingStepFormProps {
  onSubmit(values: Record<string, string[]>): void;
}

export const ListingStepForm: FC<ListingStepFormProps> = ({ onSubmit }) => {
  const methods = useForm();
  const { accesories, features, additions } = useSelector(({ newVehicle }) => newVehicle.steps.information);
  const [formPanels, setFormPanels] = useState<FormPanelType[]>([]);

  useEffect(() => {
    const formPanels: FormPanelType[] = [
      { title: "Accesorios", name: "accessories", items: accesories },
      { title: "Características", name: "features", items: features },
      { title: "Añadidos", name: "additions", items: additions },
    ];
    setFormPanels(formPanels);
  }, []);

  console.log({ formPanels });

  return (
    <FormProvider {...methods}>
      <form id="form-listing-step" onSubmit={methods.handleSubmit(onSubmit)}>
        <SimpleGrid columns={12} gap={8}>
          {formPanels?.map((panel, i) => (
            <GridItem colSpan={[12, null, null, 6]} key={i}>
              <Box
                borderColor="gray.200"
                borderWidth={[0, null, 1]}
                h="full"
                pb="3"
                pt="1"
                px={[0, null, 3]}
                rounded="sm"
              >
                <Text bg="white" fontWeight="semibold" mt="-4" px="1" w="max-content">
                  <Badge>
                    {panel.title} ({methods.watch(panel.name)?.length || 0}/{panel.items?.length}){" "}
                  </Badge>
                </Text>
                <Box ml={[0, null, "3"]} mt="3">
                  <CheckboxGroup colorScheme="pri" defaultValue={panel?.defaultValues}>
                    <SimpleGrid columns={12} rowGap={2}>
                      {panel.items?.map((item, i) => (
                        <GridItem colSpan={[6, null, 4, 6, 4]} key={i}>
                          <Checkbox fontWeight="medium" {...methods.register(panel.name)} value={String(item.id)}>
                            {item.label}
                          </Checkbox>
                        </GridItem>
                      ))}
                    </SimpleGrid>
                  </CheckboxGroup>
                </Box>
              </Box>
            </GridItem>
          ))}
        </SimpleGrid>
      </form>
    </FormProvider>
  );
};

/*
 */
