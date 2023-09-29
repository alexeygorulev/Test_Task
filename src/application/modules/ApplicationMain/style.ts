import { media } from 'components/_themes/constants';
import { ColorsType } from 'components/_themes/light/types';
import styled from 'styled-components';

export const StyledApplicationMainWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledContainer = styled.div<{ colors: ColorsType }>`
  position: relative;
  min-width: 300px;
  min-height: 400px;
  box-sizing: border-box;
  background: ${({ colors }) => colors.lightGray};
  box-shadow: ${({ colors }) => `1px 2px 12px 0px ${colors.shadowBlack}`};
  border-radius: 15px;
  overflow: hidden;
  padding: 15px;
  display: flex;
  flex-direction: column;

  @media (${media.largePhone}) {
    min-width: 600px;
    min-height: 500px;
  }

  @media (${media.largeDesktop}) {
    min-width: 800px;
    min-height: 600px;
  }
`;

export const StyledTodosFormContainer = styled.div`
  margin-top: 50px;
  padding-right: 10px;
`;

export const StyledTodosOptions = styled.div<{ isSelected: boolean }>`
  width: 100%;
  height: 100%;
  cursor: pointer;
  margin: 10px;
  border: ${({ isSelected }) => (isSelected ? '1px solid #000;' : 'none')};
  border-radius: 20px;
`;

export const StyledFooterTodos = styled.div`
  margin-top: auto;
  font-size: 12px;

  @media (${media.tablet}) {
    font-size: inherit;
  }
`;
