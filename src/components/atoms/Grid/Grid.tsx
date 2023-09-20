import React, { useMemo } from 'react';

import { GridProps } from './types';
import { StyledGrid } from './style';
import GridContext from './context';

const Grid: React.FC<GridProps> = (props) => {
  const {
    size,
    spacing,
    justifyContent = 'start',
    alignItems = 'start',
    flexDirection = 'row',
    noWrap = false,
    children,
  } = props;

  const context = useMemo(() => ({ gridSize: size, gridSpacing: spacing }), [size, spacing]);

  return (
    <StyledGrid
      data-component="Grid"
      sSpacing={spacing}
      sJustifyContent={justifyContent}
      sAlignItems={alignItems}
      sFlexDirection={flexDirection}
      sNoWrap={noWrap}
    >
      <GridContext.Provider value={context}>{children}</GridContext.Provider>
    </StyledGrid>
  );
};

export default Grid;
