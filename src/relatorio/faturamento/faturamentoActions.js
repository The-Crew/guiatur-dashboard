import axios from 'axios';

import {
  LISTAR_FATURAMENTO,
  LISTAR_FATURAMENTO_POR_SERVICO,
} from '../types';

export const obterFaturamento = () => (dispatch) => {
  axios.get('https://beleza-agendada-api.herokuapp.com/Relatorio/listarFaturamento')
    .then((resposta) => {
      dispatch({ type: LISTAR_FATURAMENTO, payload: resposta.data })
    })
    .catch((error) => {
      console.log(error);
    });
};

export const obterFaturamentoPorServico = () => (dispatch) => {
  axios.post('https://beleza-agendada-api.herokuapp.com/Relatorio/listarFaturamentoPorServico',
    { "Id": "1" },
    { headers: { 'Content-type': 'application/x-www-form-urlencoded' }}
  )
    .then((resposta) => {
      dispatch({ type: LISTAR_FATURAMENTO_POR_SERVICO, payload: resposta.data })
    })
    .catch((error) => {
      console.log(error);
    });
};
