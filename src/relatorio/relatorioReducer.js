import {
  LISTAR_CANCELADOS,
  LISTAR_CANCELADOS_POR_BAIRRO,
  LISTAR_FATURAMENTO,
  LISTAR_FATURAMENTO_POR_SERVICO,
  LISTAR_GASTOS_SERVICOS,
  LISTAR_GASTOS_SERVICOS_POR_SERVICO,
  LISTAR_LUCRO_MENSAL,
  LISTAR_LUCRO_MENSAL_POR_SERVICO,
} from './types';

const INITIAL_STATE = {
  cancelados: [],
  canceladosPorBairro: [],
  faturamento: [],
  faturamentoPorServico: [],
  gastosServicos: [],
  gastosServicosPorServico: [],
  lucroMensal: [],
  lucroMensalPorServico: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LISTAR_CANCELADOS:
      return { ...state, cancelados: action.payload };
    case LISTAR_CANCELADOS_POR_BAIRRO:
      return { ...state, canceladosPorBairro: action.payload };
    case LISTAR_FATURAMENTO:
      return { ...state, faturamento: action.payload };
    case LISTAR_FATURAMENTO_POR_SERVICO:
      return { ...state, faturamentoPorServico: action.payload };
    case LISTAR_GASTOS_SERVICOS:
      return { ...state, gastosServicos: action.payload };
    case LISTAR_GASTOS_SERVICOS_POR_SERVICO:
      return { ...state, gastosServicosPorServico: action.payload };
    case LISTAR_LUCRO_MENSAL:
      return { ...state, lucroMensal: action.payload };
    case LISTAR_LUCRO_MENSAL_POR_SERVICO:
      return { ...state, lucroMensalPorServico: action.payload };
    default:
      return state;
  }
};
