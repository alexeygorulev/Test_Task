import { mediaSizes } from 'components/_themes/constants';
import { colors } from 'components/_themes/light/_colors';
import { fonts } from 'components/_themes/light/_fonts';

export const styles = {
  label: {
    fontFamily: fonts.primary,
    position: {
      [mediaSizes.s]: {
        s: { top: 10, left: 16, right: 16 },
        m: { top: 16, left: 16, right: 16 },
        l: { top: 18, left: 16, right: 16 },
      },
      [mediaSizes.m]: {
        s: { top: 10, left: 16, right: 16 },
        m: { top: 16, left: 16, right: 16 },
        l: { top: 18, left: 16, right: 16 },
      },
      [mediaSizes.l]: {
        s: { top: 10, left: 16, right: 16 },
        m: { top: 16, left: 16, right: 16 },
        l: { top: 18, left: 16, right: 16 },
      },
    },
    fontSize: {
      normal: {
        [mediaSizes.s]: { s: 16, m: 16, l: 16 },
        [mediaSizes.m]: { s: 14, m: 16, l: 16 },
        [mediaSizes.l]: { s: 14, m: 16, l: 16 },
      },
      small: {
        [mediaSizes.s]: { s: 12, m: 12, l: 12 },
        [mediaSizes.m]: { s: 12, m: 12, l: 12 },
        [mediaSizes.l]: { s: 12, m: 12, l: 12 },
      },
    },
    lineHeight: {
      normal: {
        [mediaSizes.s]: { s: 20, m: 24, l: 24 },
        [mediaSizes.m]: { s: 20, m: 24, l: 24 },
        [mediaSizes.l]: { s: 20, m: 24, l: 24 },
      },
      small: {
        [mediaSizes.s]: { s: 16, m: 16, l: 16 },
        [mediaSizes.m]: { s: 16, m: 16, l: 16 },
        [mediaSizes.l]: { s: 16, m: 16, l: 16 },
      },
    },
    fontWeight: {
      normal: 400,
      small: 400,
    },
    colors: {
      disabled: colors.neutral60,
      focused: colors.neutral40,
      error: colors.neutral40,
      normal: colors.neutral40,
    },
  },

  element: {
    fontFamily: fonts.primary,
    fontWeight: { s: 400, m: 500, l: 500 },
    borderRadius: 4,
    height: {
      [mediaSizes.s]: { s: 40, m: 56, l: 64 },
      [mediaSizes.m]: { s: 40, m: 56, l: 64 },
      [mediaSizes.l]: { s: 40, m: 56, l: 64 },
    },
    padding: {
      [mediaSizes.s]: {
        vertical: {
          normal: { s: [9, 9], m: [15, 15], l: [19, 19] },
          withLabel: { s: [17, 1], m: [25, 5], l: [29, 9] },
        },
        horizontal: {
          normal: { s: [15, 15], m: [15, 15], l: [15, 15] },
          withIcon: { s: [15, 55], m: [15, 55], l: [15, 55] },
        },
      },
      [mediaSizes.m]: {
        vertical: {
          normal: { s: [9, 9], m: [15, 15], l: [19, 19] },
          withLabel: { s: [17, 1], m: [25, 5], l: [29, 9] },
        },
        horizontal: {
          normal: { s: [15, 15], m: [15, 15], l: [15, 15] },
          withIcon: { s: [15, 55], m: [15, 55], l: [15, 55] },
        },
      },
      [mediaSizes.l]: {
        vertical: {
          normal: { s: [9, 9], m: [15, 15], l: [19, 19] },
          withLabel: { s: [17, 1], m: [25, 5], l: [29, 9] },
        },
        horizontal: {
          normal: { s: [15, 15], m: [15, 15], l: [15, 15] },
          withIcon: { s: [15, 55], m: [15, 55], l: [15, 55] },
        },
      },
    },
    lineHeight: {
      [mediaSizes.s]: { s: 20, m: 24, l: 24 },
      [mediaSizes.m]: { s: 20, m: 24, l: 24 },
      [mediaSizes.l]: { s: 20, m: 24, l: 24 },
    },
    fontSize: {
      [mediaSizes.s]: { s: 16, m: 16, l: 18 },
      [mediaSizes.m]: { s: 14, m: 16, l: 18 },
      [mediaSizes.l]: { s: 14, m: 16, l: 18 },
    },
    colors: {
      disabled: colors.neutral60,
      focused: colors.onBackground,
      error: colors.onBackground,
      normal: colors.onBackground,
    },
    backgroundColors: {
      disabled: colors.neutral90,
      focused: colors.background,
      error: colors.background,
      normal: colors.background,
    },
    borderColors: {
      disabled: colors.neutral80,
      focused: colors.primary,
      error: colors.error,
      normal: colors.neutral60,
    },
  },

  icon: {
    right: {
      [mediaSizes.s]: { s: 8, m: 16, l: 16 },
      [mediaSizes.m]: { s: 8, m: 16, l: 16 },
      [mediaSizes.l]: { s: 8, m: 16, l: 16 },
    },
  },
};
