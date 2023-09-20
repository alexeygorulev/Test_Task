import React from 'react';

import { InputProps, StyledInputElementProps } from 'components/inputs/types';

export type InputCheckboxProps = Readonly<{
  value?: boolean;
  isSelected?: boolean;
  children?: React.ReactNode | React.ReactNode[];
}> &
  InputProps;

export type StyledInputCheckboxProps = Readonly<{
  sBlock?: boolean;
  sChecked?: boolean;
}> &
  StyledInputElementProps;
