import React from 'react';

import { BlockProps } from './types';
import { StyledBlock } from './style';
import { useTheme } from 'styled-components';

const Block: React.FC<BlockProps> = (props) => {
  const {
    size,
    font,
    color,
    fontWeight,
    fontStyle,
    margin,
    padding,
    vPadding,
    hPadding,
    textAlign,
    children,
    ...rest
  } = props;

  const theme = useTheme();

  return (
    <StyledBlock
      data-component="Block"
      {...rest}
      theme={theme}
      sSize={size}
      sFont={font}
      sColor={color}
      sFontWeight={fontWeight}
      sFontStyle={fontStyle}
      sMargin={margin}
      sPadding={padding}
      sVPadding={vPadding}
      sHPadding={hPadding}
      sTextAlign={textAlign}
    >
      {children}
    </StyledBlock>
  );
};

export default Block;
