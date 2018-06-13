import axios from 'axios';

import {
  LISTAR_CANCELAMENTOS,
  LISTAR_CANCELAMENTOS_POR_BAIRRO,
} from '../types';

export const obterCancelamentos = () => (dispatch) => {
  axios.get('https://beleza-agendada-api.herokuapp.com/Relatorio/listarCancelamentos')
    .then(resposta => dispatch({ type: LISTAR_CANCELAMENTOS, payload: resposta.data }))
    .catch(error => console.log(error));
};

export const obterCancelamentosPorBairro = bairro => (dispatch) => {
  if (bairro === '') {
    dispatch({ type: LISTAR_CANCELAMENTOS_POR_BAIRRO, payload: [] });
  } else {
    axios.post(
      'https://beleza-agendada-api.herokuapp.com/Relatorio/listarCancelamentos',
      { Bairro: bairro },
      { headers: { 'Content-type': 'application/x-www-form-urlencoded' } },
    )
      .then(resposta => dispatch({ type: LISTAR_CANCELAMENTOS_POR_BAIRRO, payload: resposta.data }))
      .catch(error => console.log(error));
  }
};
