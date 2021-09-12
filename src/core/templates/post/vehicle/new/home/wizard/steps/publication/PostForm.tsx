import React, { FC } from "react";

// Packages
import {
  Box,
  HStack,
  Textarea,
  Text,
  Tag,
  TagLabel,
  TagCloseButton,
  Button,
  Table,
  Thead,
  Th,
  Tr,
  Td,
  Tbody,
  Checkbox,
  Radio,
  RadioGroup,
  VStack,
} from "@chakra-ui/react";
import { useForm, FormProvider, useFieldArray } from "react-hook-form";

// My Components
import { InputControl, LabelInput } from "@/components";
import { useSelector } from "@/store";

interface PostFormProps {
  onSubmit(values: any): void;
}

export const PostForm: FC<PostFormProps> = ({ onSubmit }) => {
  const { branches } = useSelector(({ newVehicle }) => newVehicle.steps.information);
  const { selectedBranch } = useSelector(({ auth }) => auth);
  const methods = useForm();
  const { append, fields, remove } = useFieldArray({ control: methods.control, name: "tags" });

  return (
    <FormProvider {...methods}>
      <form id="form-publication-step" onSubmit={methods.handleSubmit(onSubmit)}>
        <VStack alignItems="stretch" spacing="3">
          <InputControl label="título" name="title" />
          <Box>
            <LabelInput label="Descripción" />
            <Textarea
              _focus={{ borderWidth: "2px", borderColor: "pri.500" }}
              minH="32"
              placeholder="Escribe algo..."
              px="3"
              rounded="sm"
              shadow="sm"
            />
          </Box>
          <Box>
            <LabelInput label={`Etiquetas (${fields.length}/10)`} />
            <HStack alignItems="flex-start" flexWrap="wrap" mb="2">
              {fields.map((field, i) => (
                <Tag key={field.id} mb="2" w="max-content">
                  <TagLabel
                    cursor="pointer"
                    onClick={() => {
                      methods.setValue("tag", Object.values(field)[1]);
                      remove(i);
                      methods.setFocus("tag");
                    }}
                  >
                    {Object.values(field)[1]}
                  </TagLabel>
                  <TagCloseButton onClick={() => remove(i)} />
                </Tag>
              ))}
            </HStack>
            <HStack>
              {/* <InputControl noMarginBottom isDisabled={fields.length == 10} name="tag" /> */}
              <Button
                isDisabled={fields.length == 10}
                onClick={() => {
                  if (methods.getValues("tag").length < 5) return;
                  append({ tag: methods.getValues("tag") });
                  methods.setValue("tag", null);
                  methods.setFocus("tag");
                }}
              >
                Agregar
              </Button>
            </HStack>
          </Box>
          <Box>
            <LabelInput label="Disponibilidad" />
            <Box mt="2" overflow="auto">
              <RadioGroup>
                <Table size="sm">
                  <Thead>
                    <Tr>
                      <Th overflow="hidden">Sucursal</Th>
                      <Th overflow="hidden">Disponibilidad</Th>
                      <Th overflow="hidden">Almacenado</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {branches.map(branch => (
                      <Tr key={branch.id}>
                        <Td>
                          <Text w="max-content">{branch.name}</Text>
                        </Td>
                        <Td>
                          <Checkbox
                            {...methods.register("availability")}
                            defaultChecked
                            mx="auto"
                            size="lg"
                            value={branch.id}
                          />
                        </Td>
                        <Td>
                          <Radio
                            cursor="pointer"
                            defaultChecked={selectedBranch?.id === branch.id}
                            mx="auto"
                            {...methods.register("storaged")}
                            size="lg"
                            value={branch.id}
                          />
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </RadioGroup>
            </Box>
          </Box>
        </VStack>
      </form>
    </FormProvider>
  );
};
