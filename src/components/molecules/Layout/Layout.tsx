import React from 'react';

import { LayoutProps } from './types';
import { StyledLayout } from './style';

import LayoutMain from './_internal/LayoutMain';
import { useTheme } from 'styled-components';

const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <StyledLayout theme={theme} auth={true} data-component="Layout">
      <LayoutMain>{children}</LayoutMain>
    </StyledLayout>
  );
};

export default Layout;
