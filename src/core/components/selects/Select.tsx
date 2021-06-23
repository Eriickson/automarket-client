import React, { FC, useState } from "react";

// Packages
import ReactSelect from "react-select";
import { Controller, useFormContext, FieldValues, Control, FieldError, DeepMap } from "react-hook-form";
import { css } from "@emotion/react";

// My Elements
import { IOption } from "@/shared";

// My Components
import { ErrorValidationForm } from "@/components";
import { LabelInput } from "..";
import { Box } from "@chakra-ui/react";

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

  /* className={[
              "duration-150",
              isDisabled ? "cursor-not-allowed" : "cursor-pointer",
              label && "mt-1",
              hoverClasses,
              isError.classes,
            ].join(" ")} */

  function generateError() {
    if (errors?.[name]?.value) return { [name]: errors?.[name]?.value };
    if (errors?.[name]?.type) return errors;
    return {};
  }

  return (
    <div>
      {label && <LabelInput isRequired={isRequired} label={label} />}
      <Controller
        name={name}
        control={control}
        // defaultValue={defaultValue}
        render={({ field }) => (
          <Box
            rounded="sm"
            borderWidth="1px"
            shadow="sm"
            transition="200ms"
            css={cssStyle(isError)}
            borderColor={isFocus ? "pri.500" : "gray.300"}
            ring={isFocus ? "1px" : ""}
            ringColor={isFocus ? "pri.500" : ""}
          >
            <ReactSelect
              {...field}
              defaultValue={defaultValue}
              options={options}
              isLoading={isLoading}
              isDisabled={isDisabled}
              placeholder={placeholder}
              isSearchable={isSearchable}
              noOptionsMessage={() => "No hay opciones"}
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
              onChange={value => {
                field.onChange(value);
                onChange && onChange(value);
              }}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
            />
          </Box>
        )}
      />
      <ErrorValidationForm name={name} errors={generateError()} />
    </div>
  );
};
