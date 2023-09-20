import IStore from './store';

export type TodoItem = Readonly<{
  id: string;
  content: string;
  selected: boolean;
}>;

export type SelectedOption = Readonly<{
  all: boolean;
  active: boolean;
  completed: boolean;
}>;

type Data = Readonly<{
  values: { [key: string]: string };
  todosItems: TodoItem[];
  selectedOptions: SelectedOption;
}>;

export type ComponentProps = Readonly<{
  store: ReturnType<typeof IStore>;
  actions: {
    mount?: () => void;
    unmount?: () => void;
    handleChange?: () => void;
    handleAccept?: ({ id, content, selected }: { id: string; content: string; selected: boolean }) => void;
    handleDelete?: () => void;
    handleSelectTodos?: () => void;
    showAllItems?: () => void;
    showCompletedItems?: () => void;
    showActiveItems?: () => void;
    clearAll?: () => number;
  };
}>;

export type ITodosInitialState = Readonly<{
  mounted: boolean;
  data: Data;
}>;
