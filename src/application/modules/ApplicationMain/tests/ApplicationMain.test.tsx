import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import todosReducer, { mount, unmount } from '../store';
import ApplicationMain from '../ApplicationMain';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import themes, { THEMES } from 'components/_themes';
import isPropValid from '@emotion/is-prop-valid';

const mockActions = {
  mount: jest.fn(),
  unmount: jest.fn(),
  handleChange: jest.fn(),
  handleAccept: jest.fn(),
  handleDelete: jest.fn(),
  handleSelectTodos: jest.fn(),
  showAllItems: jest.fn(),
  showCompletedItems: jest.fn(),
  showActiveItems: jest.fn(),
  clearAll: jest.fn(),
};

const store = configureStore({
  reducer: {
    todosReducer,
  },
});

describe('ApplicationMain Component', () => {
  it('should mount and unmount correctly', async () => {
    store.dispatch(mount());

    const { unmount: unMountComponent } = render(
      <StyleSheetManager shouldForwardProp={isPropValid}>
        <Provider store={store}>
          <ThemeProvider theme={themes[THEMES.LIGHT]}>
            <ApplicationMain store={store.getState().todosReducer} actions={mockActions} />
          </ThemeProvider>
        </Provider>
      </StyleSheetManager>,
    );

    expect(await screen.findByText('What is needs to be done')).toBeInTheDocument();

    expect(store.getState().todosReducer.mounted).toBe(true);
    unMountComponent();

    store.dispatch(unmount());

    expect(store.getState().todosReducer.mounted).toBe(false);
  });
});

it('should display the main elements when mounted', () => {
  store.dispatch(mount());
  render(
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <Provider store={store}>
        <ThemeProvider theme={themes[THEMES.LIGHT]}>
          <ApplicationMain store={store.getState().todosReducer} actions={mockActions} />
        </ThemeProvider>
      </Provider>
    </StyleSheetManager>,
  );

  expect(screen.getByText('What is needs to be done')).toBeInTheDocument();
  expect(screen.getByText('0 items left')).toBeInTheDocument();
  expect(screen.getByText('All')).toBeInTheDocument();
  expect(screen.getByText('Active')).toBeInTheDocument();
  expect(screen.getByText('Completed')).toBeInTheDocument();
  expect(screen.getByText('Deleted all')).toBeInTheDocument();
});

test('should display the correct number of items left', () => {
  store.dispatch(mount());

  store.dispatch({
    type: 'todosReducer/handleAccept',
    payload: { id: '0', content: 'Test Todo', selected: false },
  });
  store.dispatch({
    type: 'todosReducer/handleAccept',
    payload: { id: '1', content: 'Another Todo', selected: false },
  });

  render(
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <Provider store={store}>
        <ThemeProvider theme={themes[THEMES.LIGHT]}>
          <ApplicationMain store={store.getState().todosReducer} actions={mockActions} />
        </ThemeProvider>
      </Provider>
    </StyleSheetManager>,
  );

  expect(screen.getByText('2 items left')).toBeInTheDocument();
});

test('should delete a todo item correctly', () => {
  store.dispatch(mount());

  store.dispatch({
    type: 'todosReducer/handleAccept',
    payload: { id: '0', content: 'Todo Item to Delete', selected: false },
  });

  store.dispatch({
    type: 'todosReducer/handleDelete',
    payload: { id: '0', content: 'New Todo Item', selected: false },
  });

  render(
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <Provider store={store}>
        <ThemeProvider theme={themes[THEMES.LIGHT]}>
          <ApplicationMain store={store.getState().todosReducer} actions={mockActions} />
        </ThemeProvider>
      </Provider>
    </StyleSheetManager>,
  );

  expect(screen.queryByText('Todo Item to Delete')).not.toBeInTheDocument();
});
