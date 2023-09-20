import React, { useContext } from 'react';

import { GridItemProps } from './types';
import { StyledGridItem } from './style';
import GridContext from './context';

const GridItem: React.FC<GridItemProps> = (props) => {
  const { size, largePhone, tablet, smallDesktop, desktop, largeDesktop, grow = false, children } = props;

  const { gridSize, gridSpacing } = useContext(GridContext);

  return (
    <StyledGridItem
      data-component="GridItem"
      sGridSize={gridSize}
      sGridSpacing={gridSpacing}
      sSize={size}
      sLargePhone={largePhone}
      sTablet={tablet}
      sSmallDesktop={smallDesktop}
      sDesktop={desktop}
      sLargeDesktop={largeDesktop}
      sGrow={grow}
    >
      {children}
    </StyledGridItem>
  );
};

export default GridItem;
