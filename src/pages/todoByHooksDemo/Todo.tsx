import React, { createContext } from 'react';
import { useLocalStore, useObserver } from 'mobx-react-lite';
import createStore, { IStore } from './store';
import Input from './Input';
import TodoItem from './TodoItem';

export const storeContext = createContext<IStore>({} as IStore);

const Todo: React.FC = () => {
  const store = useLocalStore(createStore);

  return useObserver(() => {
    return (
      <storeContext.Provider value={store}>
        <Input />
        <TodoItem />
      </storeContext.Provider>
    );
  });
};

export default Todo;
