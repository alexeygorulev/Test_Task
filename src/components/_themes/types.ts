import themes from './index';

export type Theme = (typeof themes)[keyof typeof themes];
