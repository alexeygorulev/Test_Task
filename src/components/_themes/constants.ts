export const mediaBreakpoints = {
  largePhone: 480,
  tablet: 768,
  smallDesktop: 992,
  desktop: 1200,
  largeDesktop: 1440,
};

export const mediaSizes = {
  s: 's', // 320 - 768      / PHONE
  m: 'm', // 768 - 1200     / TABLET
  l: 'l', // 1200 - ∞       / DESKTOP
};

export const media = {
  largePhone: `min-width: ${mediaBreakpoints.largePhone}px`,
  tablet: `min-width: ${mediaBreakpoints.tablet}px`,
  smallDesktop: `min-width: ${mediaBreakpoints.smallDesktop}px`,
  desktop: `min-width: ${mediaBreakpoints.desktop}px`,
  largeDesktop: `min-width: ${mediaBreakpoints.largeDesktop}px`,
};
