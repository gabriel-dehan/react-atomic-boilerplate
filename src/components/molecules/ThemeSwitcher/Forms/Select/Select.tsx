// https://base-ui.com/react/components/select

import { Select as BaseSelect } from "@base-ui-components/react/select";
import {
  Control,
  FieldPath,
  FieldValues,
  useController,
} from "react-hook-form";
import "./Select.css";

export interface SelectOption {
  value: string | number;
  label: string;
}

interface SelectProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
  options: SelectOption[];
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string | number) => void;
  placeholder?: string;
  name?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  control?: Control<TFieldValues>;
  fieldName?: TName;
}

function Select<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  options,
  defaultValue,
  value,
  onValueChange,
  placeholder = "Select an option",
  name,
  disabled = false,
  required = false,
  className = "",
  control,
  fieldName,
}: SelectProps<TFieldValues, TName>) {
  // If control and fieldName are provided, use react-hook-form's Controller
  if (control && fieldName) {
    const { field } = useController({
      name: fieldName,
      control,
      defaultValue: defaultValue as any,
    });

    return (
      <BaseSelect.Root
        name={field.name}
        value={field.value}
        onValueChange={(val) => {
          field.onChange(val);
          if (onValueChange) onValueChange(val);
        }}
        onOpenChange={() => field.onBlur()}
        disabled={disabled}
        required={required}
      >
        <BaseSelect.Trigger className={`select ${className}`}>
          <BaseSelect.Value placeholder={placeholder} />
          <BaseSelect.Icon className="select__icon">
            <ChevronIcon />
          </BaseSelect.Icon>
        </BaseSelect.Trigger>
        <BaseSelect.Portal>
          <BaseSelect.Positioner className="select__positioner" sideOffset={8}>
            <BaseSelect.Popup className="select__popup">
              {options.map((option) => (
                <BaseSelect.Item
                  key={option.value}
                  value={option.value}
                  className="select__item"
                >
                  <BaseSelect.ItemIndicator className="select__item-indicator">
                    <CheckIcon />
                  </BaseSelect.ItemIndicator>
                  <BaseSelect.ItemText className="select__item-text">
                    {option.label}
                  </BaseSelect.ItemText>
                </BaseSelect.Item>
              ))}
            </BaseSelect.Popup>
          </BaseSelect.Positioner>
        </BaseSelect.Portal>
      </BaseSelect.Root>
    );
  }

  // If control and fieldName are not provided, use the component as normal
  return (
    <BaseSelect.Root
      name={name}
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}
      disabled={disabled}
      required={required}
    >
      <BaseSelect.Trigger className={`select ${className}`}>
        <BaseSelect.Value placeholder={placeholder} />
        <BaseSelect.Icon className="select__icon">
          <ChevronIcon />
        </BaseSelect.Icon>
      </BaseSelect.Trigger>
      <BaseSelect.Portal>
        <BaseSelect.Positioner className="select__positioner" sideOffset={8}>
          <BaseSelect.Popup className="select__popup">
            {options.map((option) => (
              <BaseSelect.Item
                key={option.value}
                value={option.value}
                className="select__item"
              >
                <BaseSelect.ItemIndicator className="select__item-indicator">
                  <CheckIcon />
                </BaseSelect.ItemIndicator>
                <BaseSelect.ItemText className="select__item-text">
                  {option.label}
                </BaseSelect.ItemText>
              </BaseSelect.Item>
            ))}
          </BaseSelect.Popup>
        </BaseSelect.Positioner>
      </BaseSelect.Portal>
    </BaseSelect.Root>
  );
}

const ChevronIcon = () => (
  <svg
    width="8"
    height="12"
    viewBox="0 0 8 12"
    fill="none"
    stroke="currentcolor"
    strokeWidth="1.5"
  >
    <path d="M0.5 4.5L4 1.5L7.5 4.5" />
    <path d="M0.5 7.5L4 10.5L7.5 7.5" />
  </svg>
);

const CheckIcon = () => (
  <svg fill="currentcolor" width="10" height="10" viewBox="0 0 10 10">
    <path d="M9.1603 1.12218C9.50684 1.34873 9.60427 1.81354 9.37792 2.16038L5.13603 8.66012C5.01614 8.8438 4.82192 8.96576 4.60451 8.99384C4.3871 9.02194 4.1683 8.95335 4.00574 8.80615L1.24664 6.30769C0.939709 6.02975 0.916013 5.55541 1.19372 5.24822C1.47142 4.94102 1.94536 4.91731 2.2523 5.19524L4.36085 7.10461L8.12299 1.33999C8.34934 0.993152 8.81376 0.895638 9.1603 1.12218Z" />
  </svg>
);

export default Select;
