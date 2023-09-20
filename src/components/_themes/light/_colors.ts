export const palettes = {
  transparent: 'transparent',
  black: '#000',
  shadowBlack: '#c8c4c4',
  neutral40: '#5d5e62',
  neutral50: '#76777a',
  neutral60: '#909094',
  neutral90: '#e3e2e6',
  neutral99: '#fdfcff',
  white: '#ffffff',
  lightGray: '#dadada',
  neutral10: '#1a1c1e',
  neutral80: '#c6c6ca',
  error40: '#ba1a1a',
  primary40: '#006783',
};

const light = {
  background: palettes.neutral99,
  onBackground: palettes.neutral10,
  primary: palettes.primary40,
  error: palettes.error40,
};

export const colors = {
  ...palettes,
  ...light,
};

export const gradients = {};
