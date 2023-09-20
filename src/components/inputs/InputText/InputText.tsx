import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';

import { StyledInput, StyledInputIcon, StyledInputLabel } from 'components/inputs/style';

import { InputTextProps } from './types';
import { formatTextValue, deformatTextValue } from './utils';
import { StyledInputText } from './style';
import { useTheme } from 'styled-components';
import AcceptArrow from 'components/icons/AcceptArrowIcon';
import TrashIcon from 'components/icons/TrashIcon';
import InputCheckbox from '../InputCheckbox';
import { StyledCheckBoxItem } from '../InputCheckbox/style';

const InputText: React.FC<InputTextProps> = (props) => {
  const {
    id,
    size = 'm',
    error = false,
    disabled = false,
    onFocus = () => null,
    onBlur = () => null,
    onChange = () => null,
    handleAccept = () => null,
    handleDelete = () => null,
    selectTodos = () => null,
    value,
    label,
    width = '100%',
    autoFocus = false,
    textAlign = 'left',
    maxLength,
    format = formatTextValue,
    deformat = deformatTextValue,
    inputMode = 'text',
    element,
    acceptIcon = false,
    deleteIcon = false,
    isSelected = false,
  } = props;

  const [focused, setFocused] = useState(false);
  const [prevValue, setPrevValue] = useState(null);
  const [formattedValue, setFormattedValue] = useState('');

  const inputNode = useRef(null);
  const { input } = useTheme();
  const handleFocus = () => {
    setFocused(true);
    onFocus({ id, value, formattedValue });
  };

  const handleBlur = useCallback(() => {
    setFocused(false);
    onBlur({ id, value, formattedValue });
  }, [formattedValue, id, onBlur, value]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setFormattedValue('');
      handleAccept({ id, content: formattedValue, selected: false });
    }
  };

  const onAccept = () => {
    setFormattedValue('');

    handleAccept({ id, content: formattedValue, selected: false });
  };

  const onDelete = () => {
    handleDelete(id);
    setFormattedValue('');
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>) => {
    const eValue = e.currentTarget.value;

    const fValue = format(eValue, maxLength);
    const dfValue = deformat(fValue);

    setPrevValue(dfValue);
    setFormattedValue(fValue);

    onChange({ id, value: dfValue, formattedValue: fValue });
  };

  useEffect(() => {
    if (autoFocus) inputNode.current.focus();
  }, [autoFocus]);

  useEffect(() => {
    if (disabled && focused) handleBlur();
  }, [disabled, focused, handleBlur]);

  useEffect(() => {
    if (value !== prevValue) {
      setFormattedValue(format(value, maxLength));
      setPrevValue(value);
    }
  }, [format, maxLength, prevValue, value]);

  const smallLabel = useMemo(() => focused || !!value, [focused, value]);
  const isItemSelected = useMemo(() => isSelected, [isSelected]);

  return (
    <StyledInput sWidth={width}>
      {element ? (
        <>
          <StyledCheckBoxItem>
            <InputCheckbox id={id} isSelected={isItemSelected} onChange={selectTodos} />
          </StyledCheckBoxItem>
          <StyledInputText
            ref={inputNode}
            inputMode={inputMode}
            as={'input'}
            id={id}
            value={formattedValue}
            maxLength={maxLength}
            disabled={true}
            sSize={size}
            sTextAlign={textAlign}
            sWithLabel={!!label && smallLabel}
            theme={input}
            checkbox
            isSelected={isItemSelected}
          />
        </>
      ) : (
        <>
          <StyledInputText
            ref={inputNode}
            as={'input'}
            inputMode={inputMode}
            id={id}
            value={formattedValue}
            maxLength={maxLength}
            disabled={disabled}
            onKeyDown={handleKeyDown}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            sSize={size}
            sTextAlign={textAlign}
            sDisabled={disabled}
            sFocused={focused}
            sError={error}
            sWithLabel={!!label && smallLabel}
            theme={input}
          />
        </>
      )}

      {label && (
        <StyledInputLabel
          sSize={size}
          sSmall={smallLabel}
          sError={error}
          sDisabled={disabled}
          sFocused={focused}
          theme={input}
        >
          {label}
        </StyledInputLabel>
      )}
      {acceptIcon && (
        <StyledInputIcon onClick={onAccept} sSize={size}>
          <AcceptArrow display="block" />
        </StyledInputIcon>
      )}

      {deleteIcon && (
        <StyledInputIcon onClick={onDelete} sSize={size}>
          <TrashIcon display="block" />
        </StyledInputIcon>
      )}
    </StyledInput>
  );
};

export default InputText;
