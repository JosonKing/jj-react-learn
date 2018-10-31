import * as Types from '../action-types';

let initState = { 
  number: 0
};

function counter(state = initState, action) {
  switch (action.type) {
    case Types.ADD:
      return {number: state.number + action.count};
      break;
    case Types.SUB:
      return {
        number: state.number - action.count
      };
      break;
    default:
      return state;
  }
}

export default counter;