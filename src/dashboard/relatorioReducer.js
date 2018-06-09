import {
  LISTAR_CANCELADOS,
} from './types';

const INITIAL_STATE = {
  cancelados: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LISTAR_CANCELADOS:
      return { ...state, cancelados: action.payload };
    default:
      return state;
  }
};
