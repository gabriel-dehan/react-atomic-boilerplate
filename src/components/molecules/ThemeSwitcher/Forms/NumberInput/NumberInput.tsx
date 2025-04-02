// https://base-ui.com/react/components/number-field

import { NumberField } from "@base-ui-components/react/number-field";
import * as React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import "./NumberInput.css";

interface NumberInputProps {
  defaultValue?: number;
  value?: number;
  onValueChange?: (value: number) => void;
  name?: string;
  min?: number;
  max?: number;
  step?: number;
  smallStep?: number;
  largeStep?: number;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  invalid?: boolean;
  className?: string;
  label?: string;
  register?: UseFormRegisterReturn;
  allowWheelScrub?: boolean;
  format?: Intl.NumberFormatOptions;
  showControls?: boolean;
  placeholder?: string;
}

const NumberInput = ({
  defaultValue,
  value,
  onValueChange,
  name,
  min,
  max,
  step = 1,
  smallStep = 0.1,
  largeStep = 10,
  disabled = false,
  readOnly = false,
  required = false,
  invalid = false,
  className = "",
  label,
  register,
  allowWheelScrub = false,
  format,
  showControls = true,
  placeholder,
}: NumberInputProps) => {
  const id = React.useId();

  // If register is provided, use its properties
  const registeredProps = register
    ? {
        name: register.name,
        onChange: (event: any) => {
          // Let react-hook-form know about the change
          if (register.onChange) register.onChange(event);
          // If onValueChange is also provided, call it
          if (onValueChange) onValueChange(event.target.value);
        },
        onBlur: register.onBlur,
        ref: register.ref,
      }
    : {};

  return (
    <NumberField.Root
      id={id}
      name={register ? register.name : name}
      defaultValue={defaultValue}
      value={value}
      onValueChange={(value) => {
        if (onValueChange) onValueChange(value!);
      }}
      min={min}
      max={max}
      step={step}
      smallStep={smallStep}
      largeStep={largeStep}
      disabled={disabled}
      readOnly={readOnly}
      required={required}
      invalid={invalid}
      allowWheelScrub={allowWheelScrub}
      format={format}
      className={`number-input ${className}`}
      {...registeredProps}
    >
      {label && (
        <NumberField.ScrubArea className="number-input__scrub-area">
          <label htmlFor={id} className="number-input__label">
            {label}
          </label>
          <NumberField.ScrubAreaCursor className="number-input__scrub-cursor">
            <CursorIcon />
          </NumberField.ScrubAreaCursor>
        </NumberField.ScrubArea>
      )}

      <NumberField.Group className="number-input__group">
        {showControls && (
          <NumberField.Decrement className="number-input__decrement">
            <MinusIcon />
          </NumberField.Decrement>
        )}
        <NumberField.Input
          className="number-input__input"
          placeholder={placeholder}
          value={value}
        />
        {showControls && (
          <NumberField.Increment className="number-input__increment">
            <PlusIcon />
          </NumberField.Increment>
        )}
      </NumberField.Group>
    </NumberField.Root>
  );
};

const CursorIcon = () => (
  <svg
    width="26"
    height="14"
    viewBox="0 0 24 14"
    fill="black"
    stroke="white"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.5 5.5L6.49737 5.51844V2L1 6.9999L6.5 12L6.49737 8.5L19.5 8.5V12L25 6.9999L19.5 2V5.5Z" />
  </svg>
);

const PlusIcon = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    stroke="currentcolor"
    strokeWidth="1.6"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 5H5M10 5H5M5 5V0M5 5V10" />
  </svg>
);

const MinusIcon = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    stroke="currentcolor"
    strokeWidth="1.6"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 5H10" />
  </svg>
);

export default NumberInput;
