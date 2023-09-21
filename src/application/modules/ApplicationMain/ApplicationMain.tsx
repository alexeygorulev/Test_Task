import { useEffect } from 'react';
import { ComponentProps, TodoItem } from './types';
import Block from 'components/atoms/Block';
import {
  StyledApplicationMainWrapper,
  StyledContainer,
  StyledFooterTodos,
  StyledTodosFormContainer,
  StyledTodosOptions,
} from './style';
import { useTheme } from 'styled-components';
import Grid, { Item } from 'components/atoms/Grid';
import { fields, labels } from './constants';
import InputText from 'components/inputs/InputText';

export default function ApplicationMain(props: ComponentProps) {
  const { store, actions } = props;
  const { mounted, data } = store;
  const {
    mount,
    unmount,
    handleChange,
    handleAccept,
    handleDelete,
    handleSelectTodos,
    showAllItems,
    showCompletedItems,
    showActiveItems,
    clearAll,
  } = actions;

  const { block } = useTheme();
  const { generalColors } = block;

  useEffect(() => {
    if (!mounted) mount();

    return () => {
      if (mounted) unmount();
    };
  }, [mounted]);

  if (!mounted) return null;

  const howMuchLeft = (): number => {
    return data.todosItems.filter((item) => !item.selected).length;
  };

  return (
    <StyledApplicationMainWrapper>
      <StyledContainer colors={generalColors}>
        <Grid spacing="s" size={12} noWrap>
          <Item size={12}>
            <Block margin="l" textAlign="center">
              {labels.todosList}
            </Block>
            <StyledTodosFormContainer>
              <Block textAlign="center">
                <InputText
                  id={fields.todosItem}
                  value={data.values[fields.todosItem]}
                  onChange={handleChange}
                  label={labels.inputLabel}
                  autoFocus
                  acceptIcon
                  handleAccept={handleAccept}
                />
              </Block>
              {data.todosItems.map((item: TodoItem) => (
                <Block key={item.id} margin="xs" textAlign="center">
                  <InputText
                    id={item.id}
                    selectTodos={handleSelectTodos}
                    isSelected={item.selected}
                    handleDelete={handleDelete}
                    value={item.content}
                    element="div"
                    deleteIcon
                  />
                </Block>
              ))}
            </StyledTodosFormContainer>
          </Item>
          <Item></Item>
        </Grid>
        <StyledFooterTodos>
          <Grid spacing="s" size={12} noWrap flexDirection="row">
            <Item size={3}>
              <Block textAlign="center">{howMuchLeft()} items left</Block>
            </Item>
            <Item size={5}>
              <Grid flexDirection="row">
                <Block textAlign="center" onClick={() => showAllItems()}>
                  <StyledTodosOptions isSelected={data.selectedOptions.all}>{labels.all}</StyledTodosOptions>
                </Block>
                <Block textAlign="center" onClick={() => showActiveItems()}>
                  <StyledTodosOptions isSelected={data.selectedOptions.active}>{labels.active}</StyledTodosOptions>
                </Block>
                <Block textAlign="center" onClick={() => showCompletedItems()}>
                  <StyledTodosOptions isSelected={data.selectedOptions.completed}>
                    {labels.completed}
                  </StyledTodosOptions>
                </Block>
              </Grid>
            </Item>
            <Item size={4}>
              <Block style={{ cursor: 'pointer' }} onClick={() => clearAll()} textAlign="center">
                {labels.deletedAll}
              </Block>
            </Item>
          </Grid>
        </StyledFooterTodos>
      </StyledContainer>
    </StyledApplicationMainWrapper>
  );
}
