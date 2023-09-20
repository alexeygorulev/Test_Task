import { Color, Font, FontStyle, FontWeight, Size, TextAlign } from 'components/_themes/light/types';
import { Theme } from 'components/_themes/types';
import React from 'react';

export type BlockProps = Readonly<{
  size?: Size;
  font?: Font;
  color?: Color;
  fontWeight?: FontWeight;
  fontStyle?: FontStyle;
  textAlign?: TextAlign;
  margin?: Size;
  padding?: Size;
  vPadding?: Size;
  hPadding?: Size;
  children?: React.ReactNode | React.ReactNode[];
}> &
  React.ComponentPropsWithoutRef<'div'>;

export type StyledBlockProps = Readonly<{
  theme?: Theme;
  isAuthPage?: boolean;
  sSize?: Size;
  sFont?: Font;
  sColor?: Color;
  sFontWeight?: FontWeight;
  sFontStyle?: FontStyle;
  sTextAlign?: TextAlign;
  sMargin?: Size;
  sPadding?: Size;
  sVPadding?: Size;
  sHPadding?: Size;
}>;
