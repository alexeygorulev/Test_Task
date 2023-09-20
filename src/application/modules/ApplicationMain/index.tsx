import { useSelector } from 'react-redux';
import Component from './ApplicationMain';
import { RootState } from 'index';
import {
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
} from './store';
import { useActions } from 'application/hooks/useActions';

const Module: React.FC = () => {
  const store = useSelector((state: RootState) => state.todosReducer);
  const actions = useActions({
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
  });

  return <Component store={store} actions={actions} />;
};

export default Module;
