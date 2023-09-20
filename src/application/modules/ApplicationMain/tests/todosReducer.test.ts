import '@testing-library/jest-dom';
import todosReducer, { handleAccept, mount } from '../store';
import { ITodosInitialState } from '../types';

test('should handle mount action correctly', () => {
  const initialState: ITodosInitialState = {
    mounted: false,
    data: {
      values: {},
      todosItems: [],
      selectedOptions: {
        all: true,
        completed: false,
        active: false,
      },
    },
  };

  const newState = todosReducer(initialState, mount());
  expect(newState.mounted).toBe(true);
  expect(localStorage.getItem('todosItems')).toBe(null);
});

beforeEach(() => {
  localStorage.clear();
  global.localStorage.__proto__.setItem = jest.fn();
});

afterEach(() => {
  jest.clearAllMocks();
});

test('should handle handleAccept action correctly', () => {
  const initialState: ITodosInitialState = {
    mounted: true,
    data: {
      values: {
        todosItem: 'Test Todo Item',
      },
      todosItems: [],
      selectedOptions: {
        all: true,
        completed: false,
        active: false,
      },
    },
  };

  const newState = todosReducer(initialState, handleAccept({ id: '2', content: 'Test Todo Item', selected: false }));
  expect(newState.data.todosItems[0].content).toBe('Test Todo Item');
  expect(localStorage.setItem).toHaveBeenCalledWith('todosItems', JSON.stringify(newState.data.todosItems));
});
