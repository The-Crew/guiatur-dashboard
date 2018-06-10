import {
  LISTAR_CANCELADOS,
  LISTAR_FATURAMENTO,
  LISTAR_GASTOS_SERVICOS,
  LISTAR_LUCRO_MENSAL,
} from './types';

const INITIAL_STATE = {
  cancelados: [],
  faturamento: [],
  gastosServicos: [],
  lucroMensal: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LISTAR_CANCELADOS:
      return { ...state, cancelados: action.payload };
    case LISTAR_FATURAMENTO:
      return { ...state, faturamento: action.payload };
    case LISTAR_GASTOS_SERVICOS:
      return { ...state, gastosServicos: action.payload };
    case LISTAR_LUCRO_MENSAL:
      return { ...state, lucroMensal: action.payload };
    default:
      return state;
  }
};
