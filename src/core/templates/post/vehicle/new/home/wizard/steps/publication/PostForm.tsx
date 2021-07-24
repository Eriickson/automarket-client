import React, { FC } from "react";

// Packages
import { Box, HStack, Textarea, Tag, TagLabel, TagCloseButton, Button } from "@chakra-ui/react";
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
        <InputControl label="título" name="title" />
        <Box mb="2">
          <LabelInput label="Descripción" />
          <Textarea _focus={{ borderWidth: "2px", borderColor: "pri.500" }} minH="32" rounded="sm" shadow="sm" />
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
            <InputControl noMarginBottom isDisabled={fields.length == 10} name="tag" />
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
      </form>
    </FormProvider>
  );
};
