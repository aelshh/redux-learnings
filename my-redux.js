function myCreateStore(reducer) {
  let state;
  const listners = [];
  const store = {
    dispatch: (action) => {
      state = reducer(state, action);
      listners.forEach((listner) => {
        listner();
      });
    },
    getState: () => {
      return state;
    },
    subscribe: (listner) => {
      listners.push(listner);
      return () => {
        const listnerIndex = listners.findIndex(
          (registeredListner) => registeredListner === listner
        );
        listners.splice(listnerIndex, 1);
      };
    },
  };

  store.dispatch({ type: "@@INIT" });
  return store;
}

export default myCreateStore;
