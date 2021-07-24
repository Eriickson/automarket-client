import React, { FC } from "react";
import Slider, { Range as RangeComponent } from "rc-slider";
import { Badge, Box } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useFormContext, Controller } from "react-hook-form";
import { LabelInput } from "../inputs";

const StyledRangeWraper = styled.div`
  flex: 1;
  .rc-slider {
    margin: 0 auto;
    width: 98.4%;
  }
  .rc-slider-track {
    background-color: #1e86ff;
    height: 4px;
  }

  .rc-slider-step,
  .rc-slider-rail {
    height: 3px;
  }
  .rc-slider-handle {
    border-radius: 0px;
    width: 1.5rem;
    height: 1.5rem;
    margin-top: -0.6rem;
    border-color: #cbd5e0;
    &[class*="dragging"] {
      border-color: #1e86ff;
      box-shadow: none;
    }
  }

  .rc-slider-disabled {
    background-color: transparent;
    .rc-slider-track {
      background-color: #cfdae6;
    }
    .rc-slider-handle {
      background-color: #ebf3f8;
    }
  }
`;

interface RangeProps {
  name: string;
  min: number;
  max: number;
  step: number;
  defaultValue?: number[];
  multiple?: boolean;
  isDisabled?: boolean;
  label?: string;
  isRequired?: boolean;
}

export const Range: FC<RangeProps> = ({
  name,
  min,
  max,
  step,
  multiple,
  defaultValue,
  isDisabled,
  label,
  isRequired,
}) => {
  const { control, watch } = useFormContext();

  return (
    <Box>
      {label && (
        <Box mb="1">
          <LabelInput
            isRequired={isRequired}
            label={
              <>
                {label}
                <Badge ml="2">
                  {multiple
                    ? `${watch(name) ? watch(name)[0] : min} - ${watch(name) ? watch(name)[1] : max}`
                    : watch(name)[0]}
                </Badge>
              </>
            }
          />
        </Box>
      )}
      <Box display="flex" h="40px" px="2.5">
        <StyledRangeWraper>
          <Controller
            control={control}
            defaultValue={defaultValue ? defaultValue : multiple ? [min, max] : max}
            name={name}
            render={({ field }) =>
              multiple ? (
                <RangeComponent
                  {...field}
                  defaultValue={defaultValue ? defaultValue : [min, max]}
                  disabled={isDisabled}
                  max={max}
                  min={min}
                  step={step}
                />
              ) : (
                <Slider
                  {...field}
                  defaultValue={defaultValue ? defaultValue.pop() : max}
                  disabled={isDisabled}
                  max={max}
                  min={min}
                  step={step}
                />
              )
            }
          />
        </StyledRangeWraper>
      </Box>
    </Box>
  );
};
