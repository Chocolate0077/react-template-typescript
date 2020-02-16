# mobx-react-lite 基于 React Hook API 轻量级状态管理

[官方 docs](https://mobx-react.js.org/recipes-context)

hooks API 的缘故，使用 mobx-react-lite + Context API

## useLocalStore

useLocalStore hook 可直接定义 observer 属性 computed action

```javascript
const store: IStore = useLocalStore(() => ({
  list: ['item0', 'item1'],
  get count() {
    return this.list.length;
  },
  get totalText() {
    return `总共${this.count}条`;
  },
  increment(value: string) {
    this.list.push(value);
  },
}));
```

Context API + useContext 实现透传 store
useObserver 或 observer 实现 UI 响应式

### 1. hooks useObserver

```javascript
import React, { useContext } from 'react';
import { myContext } from 'pages/todoByHooks/Todo';
import { useObserver } from 'mobx-react-lite';
interface Props {}

const TodoItem: React.FC<Props> = () => {
  const store = useContext(myContext);
  return useObserver(() => {
    // useObserver hooks让UI变为响应式
    return (
      <>
        {store.list.map((item, index) => {
          return <div key={item + index}>{item}</div>;
        })}
        <div>{store.totalText}</div>
      </>
    );
  });
};

export default TodoItem;
```

### 2. hoc observer

```javascript
import React, { useContext } from 'react';
import { myContext } from 'pages/todoByHooks/Todo';
import { useObserver, observer } from 'mobx-react-lite';
interface Props {}

const TodoItem: React.FC<Props> = () => {
  const store = useContext(myContext);
  return (
    <>
      {store.list.map((item, index) => {
        return <div key={item + index}>{item}</div>;
      })}
      <div>{store.totalText}</div>
    </>
  );
};

export default observer(TodoItem); //HOC observer UI变为响应式
```

## useAsObservableSource (mobx-react 6.x)

使用 useAsObservableSource 将 props 数据变为可观察
