import { Size } from 'components/_themes/light/types';

export type Spacing = Size;
export type JustifyContent = 'start' | 'center' | 'end' | 'spaceBetween' | 'spaceAround' | 'spaceEvenly';

export type AlignItems = 'start' | 'center' | 'end' | 'stretch';

export type FlexDirection = 'row' | 'rowReverse' | 'column' | 'columnReverse';

export type GridProps = Readonly<{
  size?: number;
  spacing?: Spacing;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  flexDirection?: FlexDirection;
  noWrap?: boolean;
  children?: React.ReactNode | React.ReactNode[];
}>;

export type StyledGridProps = Readonly<{
  sSize?: number;
  sSpacing?: Spacing;
  sJustifyContent: JustifyContent;
  sAlignItems: AlignItems;
  sFlexDirection: FlexDirection;
  sNoWrap?: boolean;
}>;

export type GridItemProps = Readonly<{
  size?: number | 'auto';
  largePhone?: number | 'auto';
  tablet?: number | 'auto';
  smallDesktop?: number | 'auto';
  desktop?: number | 'auto';
  largeDesktop?: number | 'auto';

  grow?: boolean;
  children?: React.ReactNode | React.ReactNode[];
}>;

export type StyledGridItemProps = Readonly<{
  sGridSize?: number;
  sGridSpacing?: Spacing;
  sSize?: number | 'auto';
  sLargePhone?: number | 'auto';
  sTablet?: number | 'auto';
  sSmallDesktop?: number | 'auto';
  sDesktop?: number | 'auto';
  sLargeDesktop?: number | 'auto';
  sGrow?: boolean;
}>;
