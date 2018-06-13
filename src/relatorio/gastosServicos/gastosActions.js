import axios from 'axios';

import {
  LISTAR_GASTOS_SERVICOS,
  LISTAR_GASTOS_SERVICOS_POR_SERVICO,
} from '../types';

export const obterGastosServicos = () => (dispatch) => {
  axios.get('https://beleza-agendada-api.herokuapp.com/Relatorio/listarGastosServicos')
    .then(resposta => dispatch({ type: LISTAR_GASTOS_SERVICOS, payload: resposta.data }))
    .catch(error => console.log(error));
};

export const obterGastoServicosPorServico = servicoId => (dispatch) => {
  if (servicoId === '') {
    dispatch({ type: LISTAR_GASTOS_SERVICOS_POR_SERVICO, payload: [] });
  } else {
    axios.post(
      'https://beleza-agendada-api.herokuapp.com/Relatorio/listarGastosServicosPorServico',
      { Id: servicoId },
      { headers: { 'Content-type': 'application/x-www-form-urlencoded' } },
    )
      .then(resposta => dispatch({
        type: LISTAR_GASTOS_SERVICOS_POR_SERVICO,
        payload: resposta.data,
      }))
      .catch(error => console.log(error));
  }
};
