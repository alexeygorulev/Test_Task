import { TextAlign } from 'components/_themes/light/types';
import { InputProps, StyledInputBaseProps } from 'components/inputs/types';

export type InputTextInputMode = 'text' | 'email';

export type InputTextProps = Readonly<{
  value?: string;
  label?: string;
  width?: number | string;
  autoFocus?: boolean;
  success?: boolean;
  clearable?: boolean;
  textAlign?: TextAlign;
  autoComplete?: boolean;
  maxLength?: number;
  format?: (value?: string, maxLength?: number) => string;
  deformat?: (value?: string) => string;
  handleAccept?: ({ id, content, selected }: { id: string; content: string; selected: boolean }) => void;
  selectTodos?: () => void;
  handleDelete?: (id: string) => void;
  autosize?: boolean;
  inputMode?: InputTextInputMode;
  element?: string;
  acceptIcon?: boolean;
  deleteIcon?: boolean;
  isSelected?: boolean;
}> &
  InputProps;

export type StyledInputTextProps = StyledInputBaseProps;
