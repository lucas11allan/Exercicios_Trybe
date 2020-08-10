const funcaoReducer = (state = 0, action) => {
  switch (action.type) {
    case 'PLUS':
      return state + action.value;
    case 'MINUS':
      return state - action.value;
    default:
      return state;
  }
};

const store = Redux.createStore(funcaoReducer);

document.getElementById('plus')
  .addEventListener('click', () => {
    store.dispatch({
      type: 'PLUS',
      value: 1,
    });
  }
);

document.getElementById('minus')
  .addEventListener('click', () => {
    store.dispatch({
      type: 'MINUS',
      value: 1,
    });
  });

store.subscribe(() => {
  const actualState = store.getState();
  document.getElementById('value').innerHTML = actualState.toString();
});
