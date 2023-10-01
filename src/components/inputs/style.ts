import styled from 'styled-components';
import { StyledInputElementProps, StyledInputIconProps, StyledInputLabelProps, StyledInputProps } from './types';
import { media, mediaSizes } from 'components/_themes/constants';
import { iconProps } from './constants';

function getInputWidth(props: StyledInputProps) {
  if (typeof props.sWidth === 'number') return `${props.sWidth}px`;
  return props.sWidth || '100%';
}

export const StyledInput = styled.div<StyledInputProps>`
  position: relative;
  box-sizing: border-box;
  display: flex;
  width: ${(props) => getInputWidth(props)};

  & input:-webkit-autofill,
  & input:-webkit-autofill:hover,
  & input:-webkit-autofill:focus,
  & input:-webkit-autofill:active,
  & input:-webkit-autofill:valid,
  & select:-webkit-autofill,
  & select:-webkit-autofill:hover,
  & select:-webkit-autofill:focus {
    -webkit-transition-delay: 99999s;
  }
`;

function getInputLabelColor(props: StyledInputLabelProps) {
  const { theme } = props;
  if (props.sDisabled) return theme.label.colors.disabled;
  if (props.sError) return theme.label.colors.error;
  if (props.sFocused) return theme.label.colors.focused;
  return theme.label.colors.normal;
}

function getInputLabelTop(props: StyledInputLabelProps, mediaSize: string) {
  const { theme } = props;
  if (props.sSmall) return `${theme.label.position[mediaSize][props.sSize].top}px`;
  return '50%';
}

function getInputLabelFontWeight(props: StyledInputLabelProps) {
  const { theme } = props;
  if (props.sSmall) return theme.label.fontWeight.small;
  return theme.label.fontWeight.normal;
}

function getInputLabelLeft(props: StyledInputLabelProps, mediaSize: string) {
  const { theme } = props;
  return `${theme.label.position[mediaSize][props.sSize].left}px`;
}

function getInputLabelRight(props: StyledInputLabelProps, mediaSize: string) {
  const { theme } = props;
  return `${theme.label.position[mediaSize][props.sSize].right}px`;
}

function getInputLabelFontSize(props: StyledInputLabelProps, mediaSize: string) {
  const { theme } = props;
  if (props.sSmall) return `${theme.label.fontSize.small[mediaSize][props.sSize]}px`;
  return `${theme.label.fontSize.normal[mediaSize][props.sSize]}px`;
}

function getInputLabelLineHeight(props: StyledInputLabelProps, mediaSize: string) {
  const { theme } = props;
  if (props.sSmall) return `${theme.label.lineHeight.small[mediaSize][props.sSize]}px`;
  return `${theme.label.lineHeight.normal[mediaSize][props.sSize]}px`;
}

export const StyledInputLabel = styled.label<StyledInputLabelProps>`
  display: block;
  box-sizing: border-box;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: absolute;
  text-align: left;
  transform: translateY(-50%);
  transition:
    top 0.12s ease-out,
    font-weight 0.12s ease-out;
  pointer-events: none;
  font-family: ${({ theme }) => theme.label.fontFamily};
  color: ${(props) => getInputLabelColor(props)};
  font-weight: ${(props) => getInputLabelFontWeight(props)};
  top: ${(props) => getInputLabelTop(props, mediaSizes.s)};
  left: ${(props) => getInputLabelLeft(props, mediaSizes.s)};
  right: ${(props) => getInputLabelRight(props, mediaSizes.s)};
  font-size: ${(props) => getInputLabelFontSize(props, mediaSizes.s)};
  line-height: ${(props) => getInputLabelLineHeight(props, mediaSizes.s)};

  @media (${media.tablet}) {
    top: ${(props) => getInputLabelTop(props, mediaSizes.m)};
    left: ${(props) => getInputLabelLeft(props, mediaSizes.m)};
    right: ${(props) => getInputLabelRight(props, mediaSizes.m)};
    font-size: ${(props) => getInputLabelFontSize(props, mediaSizes.m)};
    line-height: ${(props) => getInputLabelLineHeight(props, mediaSizes.m)};
  }

  @media (${media.desktop}) {
    top: ${(props) => getInputLabelTop(props, mediaSizes.l)};
    left: ${(props) => getInputLabelLeft(props, mediaSizes.l)};
    right: ${(props) => getInputLabelRight(props, mediaSizes.l)};
    font-size: ${(props) => getInputLabelFontSize(props, mediaSizes.l)};
    line-height: ${(props) => getInputLabelLineHeight(props, mediaSizes.l)};
  }
`;

function getInputElementFontWeight(props: StyledInputElementProps) {
  const { theme } = props;
  return theme.element.fontWeight[props.sSize];
}

function getInputElementFontSize(props: StyledInputElementProps, mediaSize: string) {
  const { theme } = props;
  return `${theme.element.fontSize[mediaSize][props.sSize]}px`;
}

function getInputElementColor(props: StyledInputElementProps) {
  const { theme } = props;

  if (props.sDisabled || props.isSelected) return theme.element.colors.disabled;
  if (props.sError) return theme.element.colors.error;
  if (props.sFocused || props.isSelected) return theme.element.colors.focused;
  return theme.element.colors.normal;
}

function getInputElementBackgroundColor(props: StyledInputElementProps) {
  const { theme } = props;
  if (props.sDisabled) return theme.element.backgroundColors.disabled;
  if (props.sError) return theme.element.backgroundColors.error;
  if (props.sFocused) return theme.element.backgroundColors.focused;
  return theme.element.backgroundColors.normal;
}

function getInputElementBorderColor(props: StyledInputElementProps) {
  const { theme } = props;
  if (props.sDisabled) return theme.element.borderColors.disabled;
  if (props.sError) return theme.element.borderColors.error;
  if (props.sFocused) return theme.element.borderColors.focused;
  return theme.element.borderColors.normal;
}

function getInputElementHeight(props: StyledInputLabelProps, mediaSize: string) {
  const { theme } = props;
  return `${theme.element.height[mediaSize][props.sSize]}px`;
}

function getInputElementLineHeight(props: StyledInputLabelProps, mediaSize: string) {
  const { theme } = props;
  return `${theme.element.lineHeight[mediaSize][props.sSize]}px`;
}

function getInputElementPadding(props: StyledInputElementProps, mediaSize: string) {
  const { theme } = props;
  const vPadding = props.sWithLabel
    ? theme.element.padding[mediaSize].vertical.withLabel[props.sSize]
    : theme.element.padding[mediaSize].vertical.normal[props.sSize];
  const hPadding = props.sWithIcon
    ? theme.element.padding[mediaSize].horizontal.withIcon[props.sSize]
    : theme.element.padding[mediaSize].horizontal.normal[props.sSize];
  return `${vPadding[0]}px ${hPadding[1]}px ${vPadding[1]}px ${hPadding[0]}px`;
}

export const StyledInputElement = styled.div<StyledInputElementProps>`
  position: relative;
  box-sizing: border-box;
  display: block;
  outline: 0 none;
  opacity: 1;
  width: 100%;
  max-width: 100%;
  border-radius: ${({ theme }) => theme.element.borderRadius}px;
  font-weight: ${(props) => getInputElementFontWeight(props)};
  transition:
    border-color 0.32s ease-out,
    background-color 0.32s ease-out,
    color 0.32s ease-out;
  font-family: ${({ theme }) => theme.element.fontFamily};
  text-align: ${(props) => (props.sTextAlign ? props.sTextAlign : 'left')};
  color: ${(props) => getInputElementColor(props)};
  background: ${(props) => getInputElementBackgroundColor(props)};
  border: 1px solid ${(props) => getInputElementBorderColor(props)};
  min-height: ${(props) => getInputElementHeight(props, mediaSizes.s)};
  line-height: ${(props) => getInputElementLineHeight(props, mediaSizes.s)};
  font-size: ${(props) => getInputElementFontSize(props, mediaSizes.s)};
  padding: ${(props) => getInputElementPadding(props, mediaSizes.s)};
  padding-left: 50px;
  text-decoration: ${({ isSelected }) => (isSelected ? 'line-through' : '')};

  @media (${media.tablet}) {
    min-height: ${(props) => getInputElementHeight(props, mediaSizes.m)};
    line-height: ${(props) => getInputElementLineHeight(props, mediaSizes.m)};
    font-size: ${(props) => getInputElementFontSize(props, mediaSizes.m)};
    padding: ${(props) => getInputElementPadding(props, mediaSizes.m)};
    ${({ checkbox }) => (checkbox ? `padding-left: 50px;` : '')}
  }

  @media (${media.desktop}) {
    min-height: ${(props) => getInputElementHeight(props, mediaSizes.l)};
    line-height: ${(props) => getInputElementLineHeight(props, mediaSizes.l)};
    font-size: ${(props) => getInputElementFontSize(props, mediaSizes.l)};
    padding: ${(props) => getInputElementPadding(props, mediaSizes.l)};
    ${({ checkbox }) => (checkbox ? `padding-left: 50px;` : '')}
  }
`;

export function getInputIconRight(props: StyledInputIconProps, mediaSize: string) {
  return `${iconProps.right[mediaSize][props.sSize]}px`;
}

export const StyledInputIcon = styled.div<StyledInputIconProps>`
  position: absolute;
  box-sizing: border-box;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  right: ${(props) => getInputIconRight(props, mediaSizes.s)};

  @media (${media.tablet}) {
    right: ${(props) => getInputIconRight(props, mediaSizes.m)};
  }

  @media (${media.desktop}) {
    right: ${(props) => getInputIconRight(props, mediaSizes.l)};
  }
`;
