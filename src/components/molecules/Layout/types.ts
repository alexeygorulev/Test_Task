import { Theme } from 'components/_themes/types';

export type LayoutSectionWidth = 's' | 'm' | 'l';

export type LayoutNavigationItem = Readonly<{
  id: string;
  path: string;
  title: string;
  items?: LayoutNavigationItem[];
}>;

export type LayoutProps = Readonly<{
  children?: React.ReactNode | React.ReactNode[];
}>;

export type LayoutStyledProps = Readonly<{
  theme?: Theme;
  auth: boolean;
}>;

export type LayoutMainProps = Readonly<{
  children?: React.ReactNode | React.ReactNode[];
}>;
