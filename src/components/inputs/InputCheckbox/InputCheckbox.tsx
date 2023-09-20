import React, { useState } from 'react';

import { InputCheckboxProps } from './types';
import { StyledCheckboxLabel, StyledCheckboxInput, StyledCheckmark } from './style';
import CompleteIcon from 'components/icons/CompleteIcon';

const InputCheckbox: React.FC<InputCheckboxProps> = (props) => {
  const { id, disabled = false, onFocus = () => null, onChange = () => null, value = false, isSelected } = props;

  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    if (!focused) {
      setFocused(true);
      onFocus({ id, value });
    }
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    onChange({ id, value: e.currentTarget.checked });
  };

  return (
    <StyledCheckboxLabel>
      <StyledCheckboxInput disabled={disabled} onFocus={handleFocus} onChange={handleChange} type="checkbox" />
      <StyledCheckmark>{isSelected && <CompleteIcon />}</StyledCheckmark>
    </StyledCheckboxLabel>
  );
};

export default InputCheckbox;
