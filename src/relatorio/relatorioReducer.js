import {
  LISTAR_CANCELADOS,
  LISTAR_FATURAMENTO,
  LISTAR_GASTOS_SERVICOS,
} from './types';

const INITIAL_STATE = {
  cancelados: [],
  faturamento: [],
  gastosServicos: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LISTAR_CANCELADOS:
      return { ...state, cancelados: action.payload };
    case LISTAR_FATURAMENTO:
      return { ...state, faturamento: action.payload };
    case LISTAR_GASTOS_SERVICOS:
      return { ...state, gastosServicos: action.payload };
    default:
      return state;
  }
};
