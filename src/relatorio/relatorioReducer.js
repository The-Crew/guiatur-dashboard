import {
  LISTAR_CANCELADOS,
  LISTAR_FATURAMENTO,
} from './types';

const INITIAL_STATE = {
  cancelados: [],
  faturamento: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LISTAR_CANCELADOS:
      return { ...state, cancelados: action.payload };
    case LISTAR_FATURAMENTO:
      return { ...state, faturamento: action.payload };
    default:
      return state;
  }
};
