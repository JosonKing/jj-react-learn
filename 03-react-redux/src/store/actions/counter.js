import * as Types from '../action-types';

let actions = {
  add(num) {
    return {
      type: Types.ADD,
      count: num,
    }
  },

  sub(num) {
    return {
      type: Types.SUB,
      count: num,
    }
  }
}

export default actions;