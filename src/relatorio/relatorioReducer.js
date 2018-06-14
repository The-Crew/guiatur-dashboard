import {
  LISTAR_CANCELAMENTOS,
  LISTAR_CANCELAMENTOS_POR_BAIRRO,
  LISTAR_FATURAMENTO,
  LISTAR_FATURAMENTO_POR_SERVICO,
  LISTAR_GASTOS_SERVICOS,
  LISTAR_GASTOS_SERVICOS_POR_SERVICO,
  LISTAR_LUCRO_MENSAL,
  LISTAR_LUCRO_MENSAL_POR_SERVICO,
  LISTAR_SATISFACAO_MEDIA_POR_PROFISSIONAIS,
  LISTAR_SATISFACAO_POR_PROFISSIONAL,
  LISTAR_SATISFACAO_MEDIA_POR_BAIRRO_CLIENTE,
  LISTAR_SATISFACAO_POR_BAIRRO_CLIENTE,
  LISTAR_SATISFACAO_MEDIA_POR_SERVICOS,
  LISTAR_SATISFACAO_POR_SERVICO,
  LISTAR_SERVICOS,
  LISTAR_PROFISSIONAIS,
  LISTAR_BAIRROS,
} from './types';

const INITIAL_STATE = {
  cancelamentos: [],
  cancelamentosPorBairro: [],
  faturamento: [],
  faturamentoPorServico: [],
  gastosServicos: [],
  gastosServicosPorServico: [],
  lucroMensal: [],
  lucroMensalPorServico: [],
  satisfacaoMediaPorProfissionais: [],
  satisfacaoPorProfissional: [],
  satisfacaoMediaPorBairros: [],
  satisfacaoPorBairroAtendimento: [],
  satisfacaoPorServico: [],
  satisfacaoMediaPorServicos: [],
  listaServicos: [],
  listaProfissionais: [],
  listaBairros: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LISTAR_CANCELAMENTOS:
      return { ...state, cancelamentos: action.payload };
    case LISTAR_CANCELAMENTOS_POR_BAIRRO:
      return { ...state, cancelamentosPorBairro: action.payload };
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
    case LISTAR_SATISFACAO_MEDIA_POR_PROFISSIONAIS:
      return { ...state, satisfacaoMediaPorProfissionais: action.payload };
    case LISTAR_SATISFACAO_POR_PROFISSIONAL:
      return { ...state, satisfacaoPorProfissional: action.payload };
    case LISTAR_SATISFACAO_MEDIA_POR_BAIRRO_CLIENTE:
      return { ...state, satisfacaoMediaPorBairros: action.payload };
    case LISTAR_SATISFACAO_POR_BAIRRO_CLIENTE:
      return { ...state, satisfacaoPorBairroAtendimento: action.payload };
    case LISTAR_SATISFACAO_MEDIA_POR_SERVICOS:
      return { ...state, satisfacaoMediaPorServicos: action.payload };
    case LISTAR_SATISFACAO_POR_SERVICO:
      return { ...state, satisfacaoPorServico: action.payload };
    case LISTAR_SERVICOS:
      return { ...state, listaServicos: action.payload };
    case LISTAR_PROFISSIONAIS:
      return { ...state, listaProfissionais: action.payload };
    case LISTAR_BAIRROS:
      return { ...state, listaBairros: action.payload };
    default:
      return state;
  }
};
