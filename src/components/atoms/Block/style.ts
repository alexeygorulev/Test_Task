import styled from 'styled-components';

import { StyledBlockProps } from './types';
import { media, mediaSizes } from 'components/_themes/constants';

function getFontFamily(props: StyledBlockProps) {
  const { theme } = props;
  if (!props.sFont || !theme) return 'inherit';
  return theme.block.fontFamily[props.sFont];
}

function getColor(props: StyledBlockProps) {
  const { theme } = props;
  if (!props.sColor || !theme) return 'inherit';
  return theme.block.colors[props.sColor];
}

function getTextAlign(props: StyledBlockProps) {
  const { theme } = props;
  if (!props.sTextAlign || !theme) return 'inherit';
  return theme.block.textAlign[props.sTextAlign];
}

function getFontSize(props: StyledBlockProps, mediaSize: string) {
  const { theme } = props;
  if (!props.sSize || !theme) return 'inherit';
  return `${theme.block.size[mediaSize][props.sSize]}px`;
}

function getLineHeight(props: StyledBlockProps, mediaSize: string) {
  const { theme } = props;
  if (!props.sSize || !theme) return 'inherit';
  return `${theme.block.lineHeight[mediaSize][props.sSize]}px`;
}

function getFontWeight(props: StyledBlockProps) {
  const { theme } = props;
  if (!props.sFontWeight || !theme) return 'inherit';
  return theme.block.fontWeight[props.sFontWeight];
}

function getFontStyle(props: StyledBlockProps) {
  const { theme } = props;
  if (!props.sFontStyle || !theme) return 'inherit';
  return theme.block.fontStyle[props.sFontStyle];
}

function getMargin(props: StyledBlockProps) {
  const { theme } = props;
  if (!theme) return;
  return props.sMargin ? `${theme.block.margin[props.sMargin]}px 0` : '0';
}

function getPadding(props: StyledBlockProps) {
  const { theme } = props;
  if (!theme) return;
  const vPadding = props.sVPadding || props.sPadding;
  const hPadding = props.sHPadding || props.sPadding;
  return `${vPadding ? theme.block.padding[vPadding] : 0}px ${hPadding ? theme.block.padding[hPadding] : 0}px`;
}

export const StyledTypography = styled.div`
  font-family: ${getFontFamily({ sFont: 'primary' })};
  font-style: ${getFontStyle({ sFontStyle: 'normal' })};
  font-weight: ${getFontWeight({ sFontWeight: 'regular' })};
  text-align: ${getTextAlign({ sTextAlign: 'left' })};
  font-size: ${getFontSize({ sSize: 'm' }, mediaSizes.s)};
  line-height: ${getLineHeight({ sSize: 'm' }, mediaSizes.s)};

  @media (${media.tablet}) {
    font-size: ${getFontSize({ sSize: 'm' }, mediaSizes.m)};
    line-height: ${getLineHeight({ sSize: 'm' }, mediaSizes.m)};
  }

  @media (${media.desktop}) {
    font-size: ${getFontSize({ sSize: 'm' }, mediaSizes.l)};
    line-height: ${getLineHeight({ sSize: 'm' }, mediaSizes.l)};
  }
`;

export const StyledBlock = styled.div<StyledBlockProps>`
  position: relative;
  box-sizing: border-box;
  display: block;
  font-family: ${(props) => getFontFamily(props)};
  color: ${(props) => getColor(props)};
  font-style: ${(props) => getFontStyle(props)};
  font-weight: ${(props) => getFontWeight(props)};
  text-align: ${(props) => getTextAlign(props)};
  margin: ${(props) => getMargin(props)};
  padding: ${(props) => getPadding(props)};
  font-size: ${(props) => getFontSize(props, mediaSizes.s)};
  line-height: ${(props) => getLineHeight(props, mediaSizes.s)};
  word-break: break-word;

  @media (${media.tablet}) {
    font-size: ${(props) => getFontSize(props, mediaSizes.m)};
    line-height: ${(props) => getLineHeight(props, mediaSizes.m)};
  }

  @media (${media.desktop}) {
    font-size: ${(props) => getFontSize(props, mediaSizes.l)};
    line-height: ${(props) => getLineHeight(props, mediaSizes.l)};
  }

  :first-child {
    margin-top: 0;
  }

  :last-child {
    margin-bottom: 0;
  }
`;
