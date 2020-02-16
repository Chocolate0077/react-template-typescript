import React, { useContext } from 'react';
import { storeContext } from 'src/pages/todoByHooksDemo/Todo';
import { observer } from 'mobx-react-lite';

const TodoItem: React.FC = () => {
  const store = useContext(storeContext);
  return (
    <>
      {store.list.map(item => {
        return <div key={item}>{item}</div>;
      })}
      <div>{store.totalText}</div>
    </>
  );
};

export default observer(TodoItem); // HOC observer UI变为响应式
