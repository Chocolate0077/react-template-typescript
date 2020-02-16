const createStore = () => {
  return {
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
  };
};

export default createStore;
export type IStore = ReturnType<typeof createStore>;
