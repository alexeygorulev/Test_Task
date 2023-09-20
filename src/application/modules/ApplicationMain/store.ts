import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ITodosInitialState, TodoItem } from './types';
import { fields } from './constants';

const values = Object.values(fields).reduce((result, item) => ({ ...result, [item]: '' }), {});

const selectedOptions = {
  all: true,
  completed: false,
  active: false,
};

const initialState: ITodosInitialState = {
  mounted: false,
  data: { values, todosItems: [], selectedOptions: selectedOptions },
};

export const todosReducer = createSlice({
  name: 'todosReducer',
  initialState,
  reducers: {
    mount: (state) => {
      state.mounted = true;
      const todosItems = JSON.parse(localStorage.getItem('todosItems'));
      if (todosItems) state.data.todosItems = todosItems;
    },
    unmount: (state) => {
      state.mounted = false;
    },
    handleChange: (state, actions) => {
      const { id, value } = actions.payload;
      if (!id) return;
      state.data.values[id] = value;
    },
    handleAccept: (state, action: PayloadAction<{ id: string; content: string; selected: boolean }>) => {
      if (!action.payload.content) return;
      const { id, content, selected } = action.payload;
      state.data.todosItems = [...state.data.todosItems, { id: id, content: content, selected: selected }].reverse();
      localStorage.setItem('todosItems', JSON.stringify(state.data.todosItems));
    },

    showAllItems: (state) => {
      const todosItems = JSON.parse(localStorage.getItem('todosItems'));
      state.data.selectedOptions = { all: true, completed: false, active: false };
      if (!todosItems) return;
      state.data.todosItems = todosItems;
    },

    showCompletedItems: (state) => {
      const todosItems = JSON.parse(localStorage.getItem('todosItems'));
      state.data.selectedOptions = { all: false, completed: true, active: false };
      if (!todosItems) return;
      state.data.todosItems = todosItems.filter((item: TodoItem) => item.selected);
    },

    showActiveItems: (state) => {
      const todosItems = JSON.parse(localStorage.getItem('todosItems'));
      state.data.selectedOptions = { all: false, completed: false, active: true };
      if (!todosItems) return;
      state.data.todosItems = todosItems.filter((item: TodoItem) => !item.selected);
    },

    handleDelete: (state, actions) => {
      const id = actions.payload;

      state.data.todosItems = state.data.todosItems.filter((item) => item.id !== id);
      localStorage.setItem('todosItems', JSON.stringify(state.data.todosItems));
    },

    clearAll: (state) => {
      state.data.todosItems = [];
      localStorage.setItem('todosItems', JSON.stringify(state.data.todosItems));
    },

    handleSelectTodos: (state, actions) => {
      const { id, value } = actions.payload;

      state.data.todosItems = state.data.todosItems.map((item) =>
        item.id === id ? { ...item, selected: value } : item,
      );
      localStorage.setItem('todosItems', JSON.stringify(state.data.todosItems));
    },
  },
});

export const {
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
} = todosReducer.actions;
export default todosReducer.reducer;
