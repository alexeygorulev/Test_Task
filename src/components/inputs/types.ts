import { InputType, TextAlign } from 'components/_themes/light/types';

export type Size = 's' | 'm' | 'l';

export type Option = Readonly<{
  value: string;
  title?: string;
  data?: Record<string, any>;
}>;

export type InputEventParams = Readonly<{
  id?: string;
  value?: string | string[] | number | boolean;
  formattedValue?: string;
  option?: Option;
}>;

export type InputProps = Readonly<{
  id?: string;
  size?: Size;
  error?: boolean;
  disabled?: boolean;
  onFocus?: (params: InputEventParams) => void;
  onBlur?: (params: InputEventParams) => void;
  onChange?: (params: InputEventParams) => void;
}>;

export type StyledInputProps = Readonly<{
  sWidth?: number | string;
}>;

export type StyledInputLabelProps = Readonly<{
  theme?: InputType;
  sSize?: Size;
  sSmall?: boolean;
  sError?: boolean;
  sSuccess?: boolean;
  sDisabled?: boolean;
  sClearable?: boolean;
  sFocused?: boolean;
}>;

export type StyledInputBaseProps = Readonly<{
  sAutoComplete?: boolean;
}> &
  StyledInputElementProps;

export type StyledInputIconProps = Readonly<{
  sSize?: Size;
  sClickable?: boolean;
  sDisabled?: boolean;
}>;

export type StyledInputElementProps = Readonly<{
  theme?: InputType;
  checkbox?: boolean;
  isSelected?: boolean;
  sSize?: Size;
  sTextAlign?: TextAlign;
  sDisabled?: boolean;
  sError?: boolean;
  sFocused?: boolean;
  sWithLabel?: boolean;
  sWithIcon?: boolean;
}>;
