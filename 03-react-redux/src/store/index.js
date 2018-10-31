let initState = { number: 0 };

let createStore = (reducer) => {
  let state;
  function dispatch(action) {
    state = reducer(state, action);
  }

  dispatch({});

  let getState = () => JSON.parse(JSON.stringify(state));

  return {
    getState,
    dispatch,
  };
}

let reducer = (state = initState, action) => {
  switch (action.type) {
    case 'add':
      return {number: state.number + action.count}
    default:
      return state
  }
}

let store = createStore(reducer);
function render() {
  let content = document.querySelector('.content');
  content.innerHTML = store.getState().number;
}

function add() {
  store.dispatch({
    type: 'add',
    count: 2,
  });
  render();
}

render();

