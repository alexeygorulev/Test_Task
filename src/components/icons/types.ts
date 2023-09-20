import { Color, Display, Size } from 'components/_themes/light/types';
import { Theme } from 'components/_themes/types';
import React from 'react';

export type IconProps = Readonly<{
  size?: Size;
  color?: Color;
  display?: Display;
}>;

export type StyledIconProps = Readonly<{
  theme?: Theme;
  sSize?: Size;
  sColor?: Color;
  sDisplay?: Display;
}>;

export type StyledIconSvgProps = Readonly<{
  theme?: Theme;
  sSize?: Size;
  sColor?: Color;
  sDisplay?: Display;
}>;

export type IconPrimitiveProps = Readonly<{
  viewBox?: number;
  children?: React.ReactNode | React.ReactNode[];
}> &
  IconProps;
