let initState = { number: 0 };

let createStore = (reducer) => {
  let state;
  function dispatch(action) {
    state = reducer(state, action);
  }

  dispatch({});

  let getState = () => {
    JSON.parse(JSON.stringify(state))
  }

  return {
    getState,
    dispatch,
  }
}