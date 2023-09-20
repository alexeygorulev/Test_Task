import React from 'react';

import { IconProps } from './types';
import IconPrimitive from './_internal/IconPrimitive';

const CompleteIcon: React.FC<IconProps> = (props) => {
  return (
    <IconPrimitive {...props} viewBox={24}>
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 511.999 511.999">
        <path d="M502.87,75.474c-12.201-12.204-31.952-12.205-44.154-0.001L163.89,370.299L53.284,259.693 c-12.201-12.204-31.952-12.205-44.154-0.001c-12.173,12.174-12.173,31.981,0,44.153L141.814,436.53 c12.199,12.198,31.953,12.2,44.153,0L502.87,119.626C515.042,107.453,515.042,87.645,502.87,75.474z" />
        <path d="M502.87,75.474c-12.201-12.204-31.952-12.205-44.154-0.001L243.511,290.678v88.306L502.87,119.626 C515.042,107.453,515.042,87.645,502.87,75.474z" />
      </svg>
    </IconPrimitive>
  );
};

export default CompleteIcon;
