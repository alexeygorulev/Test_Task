import { colors, gradients } from './_colors';
import { fontStyles, fontWeights, fonts } from './_fonts';
import { display, sizes, textAligns } from './_typography';
import { styles as input } from './input';

export type Size = keyof typeof sizes;

export type Font = keyof typeof fonts;

export type Color = keyof typeof colors;

export type Gradient = keyof typeof gradients;

export type TextAlign = keyof typeof textAligns;

export type FontWeight = keyof typeof fontWeights;

export type FontStyle = keyof typeof fontStyles;

export type Display = keyof typeof display;

export type ColorsType = typeof colors;

export type InputType = typeof input;
