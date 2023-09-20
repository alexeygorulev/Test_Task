import { StyledTypography } from 'components/atoms/Block/style';
import styled from 'styled-components';
import { LayoutStyledProps } from './types';

export const StyledLayout = styled(StyledTypography)<LayoutStyledProps>`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  justify-content: stretch;
  ${({ auth }) => (auth ? `height: 100%;` : `min-height: 100%;`)};
  min-width: 320px;
  font-family: ${({ theme }) => theme.block.fontFamily.primary};
  background: white;
  color: ${({ theme }) => theme.color};
`;

export const StyledLayoutMain = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  justify-content: stretch;
  flex-grow: 1;
  background-image: url(${({ theme }) => theme.block.background.todosBackgroundLayout});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${({ theme }) => theme.block.colors['major']};
  transition: padding 0.24s ease;
  padding-left: 0;
  padding-bottom: 16px;
`;
