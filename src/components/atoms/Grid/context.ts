import { createContext } from 'react';

import { Spacing } from './types';

const GridContext = createContext<{ gridSize?: number; gridSpacing?: Spacing }>({
  gridSize: 0,
  gridSpacing: undefined,
});

export default GridContext;
