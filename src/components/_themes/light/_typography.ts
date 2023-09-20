import { colors } from './_colors';
import { fonts } from './_fonts';

export const refs = {
  colors: {
    major: 'major',
    primary: 'primary',
    secondary: 'secondary',
    tertiary: 'tertiary',
    minor: 'minor',
    light: 'light',
    positive: 'positive',
    warning: 'warning',
    negative: 'negative',
    link: 'link',
    disabled: 'disabled',
  },
};

export const textAligns = {
  left: 'left',
  center: 'center',
  right: 'right ',
};

export const display = {
  block: 'block',
  inline: 'inline-block',
};

export const sizes = { xs: 'xs', s: 's', m: 'm', l: 'l', xl: 'xl', xxl: 'xxl' };

export const styles = {
  paragraphFontFamily: { ...fonts },
  colors: {
    [refs.colors.major]: colors.black,
    [refs.colors.light]: colors.white,
  },
};
