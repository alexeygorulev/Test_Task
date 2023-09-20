import React from 'react';

import { IconPrimitiveProps } from '../types';
import { StyledIcon, StyledIconSvg } from '../style';
import { useTheme } from 'styled-components';

const IconPrimitive: React.FC<IconPrimitiveProps> = (props) => {
  const { size = 'm', display = 'inline', color, viewBox, children } = props;
  const theme = useTheme();

  return (
    <StyledIcon data-component="Icon" sSize={size} sDisplay={display}>
      <StyledIconSvg theme={theme} viewBox={`0 0 ${viewBox} ${viewBox}`} focusable="false" sColor={color}>
        {children}
      </StyledIconSvg>
    </StyledIcon>
  );
};

export default IconPrimitive;
