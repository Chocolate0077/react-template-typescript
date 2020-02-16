import React, { useContext, useState, ChangeEvent } from 'react';
import { storeContext } from 'src/pages/todoByHooksDemo/Todo';

const Input: React.FC = () => {
  const store = useContext(storeContext);
  const [inputValue, setInputValue] = useState<string>('');
  const handleAdd = (value: string) => {
    store.increment(value);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <div>请输入todo</div>
      <input type="text" onChange={handleChange} />
      <button
        type="button"
        onClick={() => {
          handleAdd(inputValue);
        }}
      >
        add
      </button>
    </div>
  );
};

export default Input;
