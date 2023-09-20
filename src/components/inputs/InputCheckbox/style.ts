import styled from 'styled-components';

export const StyledCheckboxLabel = styled.label`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

export const StyledCheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const StyledCheckmark = styled.span`
  position: relative;
  display: inline-block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid #ccc;
  background-color: #fff;
  vertical-align: middle;
  line-height: 24px;
  text-align: center;
`;

export const StyledCheckBoxItem = styled.div`
  position: absolute;
  z-index: 200;
  top: 13px;
  bottom: 0;
  left: 10px;
`;
