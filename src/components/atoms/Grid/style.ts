import styled from 'styled-components';

import { StyledGridProps, StyledGridItemProps } from './types';
import theme from './constants';
import { media, mediaSizes } from 'components/_themes/constants';

function getMargin(props: StyledGridProps, mediaSize: string) {
  if (!props.sSpacing) return '0';
  return `-${theme.spacing[mediaSize][props.sSpacing]}px`;
}

function getItemPadding(props: StyledGridItemProps, mediaSize: string) {
  if (!props.sGridSpacing) return '0';
  return `${theme.spacing[mediaSize][props.sGridSpacing]}px`;
}

function getItemWidth(props: StyledGridItemProps) {
  let computedSize = props.sSize;
  if (props.sLargePhone) computedSize = props.sLargePhone;
  if (props.sTablet) computedSize = props.sTablet;
  if (props.sSmallDesktop) computedSize = props.sSmallDesktop;
  if (props.sDesktop) computedSize = props.sDesktop;
  if (props.sLargeDesktop) computedSize = props.sLargeDesktop;
  if (computedSize === 'auto') return 'auto';
  return props.sGridSize && computedSize ? `${(computedSize / props.sGridSize) * 100}%` : 'auto';
}

export const StyledGrid = styled.div<StyledGridProps>`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-flow: row ${(props) => (props.sNoWrap ? 'nowrap' : 'wrap')};
  justify-content: ${(props) => theme.justifyContent[props.sJustifyContent]};
  align-items: ${(props) => theme.alignItems[props.sAlignItems]};
  flex-direction: ${(props) => theme.flexDirection[props.sFlexDirection]};
  margin: ${(props) => getMargin(props, mediaSizes.s)};

  @media (${media.tablet}) {
    margin: ${(props) => getMargin(props, mediaSizes.m)};
  }

  @media (${media.desktop}) {
    margin: ${(props) => getMargin(props, mediaSizes.l)};
  }
`;

export const StyledGridItem = styled.div<StyledGridItemProps>`
  display: block;
  position: relative;
  box-sizing: border-box;
  flex-grow: ${(props) => (props.sGrow ? 1 : 'initial')};
  padding: ${(props) => getItemPadding(props, mediaSizes.s)};
  width: ${(props) =>
    getItemWidth({
      ...props,
      sLargePhone: undefined,
      sTablet: undefined,
      sSmallDesktop: undefined,
      sDesktop: undefined,
      sLargeDesktop: undefined,
    })};

  @media (${media.largePhone}) {
    padding: ${(props) => getItemPadding(props, mediaSizes.m)};
    width: ${(props) =>
      getItemWidth({
        ...props,
        sTablet: undefined,
        sSmallDesktop: undefined,
        sDesktop: undefined,
        sLargeDesktop: undefined,
      })};
  }

  @media (${media.tablet}) {
    padding: ${(props) => getItemPadding(props, mediaSizes.m)};
    width: ${(props) =>
      getItemWidth({
        ...props,
        sSmallDesktop: undefined,
        sDesktop: undefined,
        sLargeDesktop: undefined,
      })};
  }

  @media (${media.smallDesktop}) {
    padding: ${(props) => getItemPadding(props, mediaSizes.l)};
    width: ${(props) => getItemWidth({ ...props, sDesktop: undefined, sLargeDesktop: undefined })};
  }

  @media (${media.desktop}) {
    padding: ${(props) => getItemPadding(props, mediaSizes.l)};
    width: ${(props) => getItemWidth({ ...props, sLargeDesktop: undefined })};
  }

  @media (${media.largeDesktop}) {
    padding: ${(props) => getItemPadding(props, mediaSizes.l)};
    width: ${(props) => getItemWidth(props)};
  }
`;
