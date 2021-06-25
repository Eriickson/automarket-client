import React, { FC, useState } from "react";

// Packages
import ReactSelect from "react-select";
import { Controller, useFormContext } from "react-hook-form";
import { css } from "@emotion/react";

// My Elements
import { IOption } from "@/shared";

// My Components
import { ErrorValidationForm } from "@/components";
import { LabelInput } from "..";
import { Box, Button } from "@chakra-ui/react";

/* eslint-disable-next-line */
const cssStyle = (isError: any) => css`
  span + div {
    border: none;
    box-shadow: none !important;
    border-radius: 0px;
    background-color: ${`${isError.disabled ? "#fafafa" : isError.bgColor}`};
  }
  span.css-1okebmr-indicatorSeparator {
    visibility: hidden;
  }
  .css-1wa3eu0-placeholder {
    color: ${`${isError.placeholderColor}`};
  }
  .css-26l3qy-menu {
    border-radius: 0;
  }
  svg {
    color: ${`${isError.svgColor}`};
    transition: 150ms;
  }
`;

// Types and Interfaces
interface SelectProps {
  name: string;
  defaultValue?: IOption;
  placeholder?: string;
  options: IOption[];
  onChange?: (value: IOption) => void;
  isDisabled?: boolean;
  isSearchable?: boolean;
  isLoading?: boolean;
  label?: string;
  isRequired?: boolean;
}

export const Select: FC<SelectProps> = ({
  name,
  placeholder = "Seleccionar...",
  defaultValue,
  isDisabled,
  options,
  isSearchable,
  isLoading,
  label,
  isRequired,
  onChange,
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const {
    formState: { errors },
    control,
  } = useFormContext();
  const isError = errors?.[name]
    ? {
        classes: "border-danger-500 ring-danger-500",
        bgColor: "#fef5f5",
        placeholderColor: "#f9b2b2",
        svgColor: isFocus ? "#f03e3e" : "#f03e3e60",
        borderMenu: "2px solid #f03e3e",
        bgColorItem: "#f03e3e",
      }
    : {
        classes: isFocus ? "ring-pri-500 border-pri-500" : "border-gray-300",
        placeholderColor: "#a0aec0",
        borderMenu: "2px solid #1e86ff",
        bgColorItem: "#1e86ff",
        isDisabled,
      };

  function generateError() {
    if (errors?.[name]?.value) return { [name]: errors?.[name]?.value };
    if (errors?.[name]?.type) return errors;
    return {};
  }

  console.log(isFocus);

  return (
    <div>
      {label && <LabelInput isRequired={isRequired} label={label} />}
      <Controller
        control={control}
        defaultValue={defaultValue}
        name={name}
        render={({ field }) => (
          <Button
            _focus={{
              ring: "0",
            }}
            cursor="auto"
            fontWeight="normal"
            p="0"
            ring={isFocus ? "1px" : ""}
            ringColor={
              isFocus ? (errors?.[name] ? "danger.500" : "pri.500") : errors?.[name] ? "danger.500" : "gray.300"
            }
            variant="unstyled"
            w="full"
          >
            <Box
              borderColor={
                isFocus ? (errors?.[name] ? "danger.500" : "pri.500") : errors?.[name] ? "danger.500" : "gray.300"
              }
              borderWidth="1px"
              css={cssStyle(isError)}
              rounded="sm"
              shadow="sm"
              transition="200ms"
            >
              <ReactSelect
                {...field}
                defaultValue={defaultValue}
                isDisabled={isDisabled}
                isLoading={isLoading}
                isSearchable={isSearchable}
                noOptionsMessage={() => "No hay opciones"}
                options={options}
                placeholder={placeholder}
                styles={{
                  option: (styles, { isFocused }) => ({
                    ...styles,
                    cursor: "pointer",
                    backgroundColor: isFocused ? isError.bgColorItem : "",
                    color: isFocused ? "white" : "",
                  }),
                  control: styles => ({
                    ...styles,
                    cursor: "pointer",
                  }),
                  menu: styles => ({
                    ...styles,
                    padding: 0,
                    borderRadius: 0,
                    border: isError.borderMenu,
                  }),
                  singleValue: style => ({
                    ...style,
                    color: isDisabled ? "rgb(107, 114, 128)" : "",
                  }),
                }}
                onBlur={() => setIsFocus(false)}
                onChange={value => {
                  field.onChange(value);
                  onChange && onChange(value);
                }}
                onFocus={() => setIsFocus(true)}
              />
            </Box>
          </Button>
        )}
      />
      <ErrorValidationForm errors={generateError()} name={name} />
    </div>
  );
};
