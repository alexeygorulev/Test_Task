import { mediaSizes } from 'components/_themes/constants';

export default {
  spacing: {
    [mediaSizes.s]: { xs: 4, s: 8, m: 12, l: 16, xl: 20 },
    [mediaSizes.m]: { xs: 4, s: 8, m: 12, l: 16, xl: 20 },
    [mediaSizes.l]: { xs: 4, s: 8, m: 12, l: 16, xl: 20 },
  },
  justifyContent: {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
    spaceBetween: 'space-between',
    spaceAround: 'space-around',
    spaceEvenly: 'space-evenly',
  },
  alignItems: {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
    stretch: 'stretch',
  },
  flexDirection: {
    row: 'row',
    rowReverse: 'row-reverse',
    column: 'column',
    columnReverse: 'column-reverse',
  },
};
