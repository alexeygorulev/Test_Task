import light from './light/index';

export const THEMES = {
  LIGHT: 'LIGHT',
  DARK: 'DARK',
};

const themes = {
  [THEMES.LIGHT]: Object.assign(light, { name: THEMES.LIGHT }),
};

export default themes;
