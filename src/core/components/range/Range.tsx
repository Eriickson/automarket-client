import React, { FC, useState } from "react";
import Slider, { Range as RangeComponent } from "rc-slider";
import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useFormContext, Controller } from "react-hook-form";

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
}

export const Range: FC<RangeProps> = ({ name, min, max, step, multiple, defaultValue, isDisabled }) => {
  const { control } = useFormContext();

  return (
    <Box display="flex" h="40px">
      <StyledRangeWraper>
        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue ? defaultValue : multiple ? [min, max] : max}
          render={({ field }) =>
            multiple ? (
              <RangeComponent
                {...field}
                min={min}
                max={max}
                step={step}
                defaultValue={defaultValue ? defaultValue : [min, max]}
                disabled={isDisabled}
              />
            ) : (
              <Slider
                {...field}
                min={min}
                max={max}
                step={step}
                defaultValue={defaultValue ? defaultValue.pop() : max}
                disabled={isDisabled}
              />
            )
          }
        />
      </StyledRangeWraper>
    </Box>
  );
};