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

interface PostFormProps {
  onSubmit(values: any): void;
}

export const PostForm: FC<PostFormProps> = ({ onSubmit }) => {
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
                    <Tr>
                      <Td>
                        <Text w="max-content">Puñal/Santiago (SEDE)</Text>
                      </Td>
                      <Td>
                        <Checkbox mx="auto" size="lg" />
                      </Td>
                      <Td>
                        <Radio mx="auto" name="storaged" size="lg" value="1" />
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <Text w="max-content">Hato Mayor/Santiago</Text>
                      </Td>
                      <Td>
                        <Checkbox mx="auto" size="lg" />
                      </Td>
                      <Td>
                        <Radio mx="auto" name="storaged" size="lg" value="2" />
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <Text w="max-content">Bella Vista/Santo Domingo</Text>
                      </Td>
                      <Td>
                        <Checkbox mx="auto" size="lg" />
                      </Td>
                      <Td>
                        <Radio mx="auto" name="storaged" size="lg" value="3" />
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <Text w="max-content">Bella Vista/Santo Domingo</Text>
                      </Td>
                      <Td>
                        <Checkbox mx="auto" size="lg" />
                      </Td>
                      <Td>
                        <Radio mx="auto" name="storaged" size="lg" value="4" />
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <Text w="max-content">Bella Vista/Santo Domingo</Text>
                      </Td>
                      <Td>
                        <Checkbox mx="auto" size="lg" />
                      </Td>
                      <Td>
                        <Radio mx="auto" name="storaged" size="lg" value="5" />
                      </Td>
                    </Tr>
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
