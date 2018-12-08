import axios from 'axios';

import {
  LISTAR_FATURAMENTO,
  LISTAR_FATURAMENTO_POR_SERVICO,
} from '../types';

export const obterFaturamento = () => (dispatch) => {
  axios.get('https://guiatur-webservice.herokuapp.com/Relatorio/listarFaturamento')
    .then(resposta => dispatch({ type: LISTAR_FATURAMENTO, payload: resposta.data }))
    .catch(error => console.log(error));
};

export const obterFaturamentoPorServico = servicoId => (dispatch) => {
  if (servicoId === '') {
    dispatch({ type: LISTAR_FATURAMENTO_POR_SERVICO, payload: [] });
  } else {
    axios.post(
      'https://guiatur-webservice.herokuapp.com/Relatorio/listarFaturamentoPorServico',
      { Id: servicoId },
      { headers: { 'Content-type': 'application/x-www-form-urlencoded' } },
    )
      .then(resposta => dispatch({ type: LISTAR_FATURAMENTO_POR_SERVICO, payload: resposta.data }))
      .catch(error => console.log(error));
  }
};
