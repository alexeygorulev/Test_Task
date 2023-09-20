import React from 'react';

import { LayoutMainProps } from '../types';
import { StyledLayoutMain } from '../style';
import { useTheme } from 'styled-components';

const LayoutMain: React.FC<LayoutMainProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <StyledLayoutMain theme={theme} data-component="LayoutMain">
      {children}
    </StyledLayoutMain>
  );
};

export default LayoutMain;
