import axios from 'axios';

import {
  LISTAR_SATISFACAO_POR_PROFISSIONAL,
  LISTAR_SATISFACAO_POR_BAIRRO_CLIENTE,
  LISTAR_SATISFACAO_POR_SERVICO,
} from '../types';

export const obterSatisfacaoPorProfissional = profissionalId => (dispatch) => {
  if (profissionalId === '') {
    dispatch({ type: LISTAR_SATISFACAO_POR_PROFISSIONAL, payload: [] })
  } else {
    axios.post('https://beleza-agendada-api.herokuapp.com/Relatorio/listarSatisfacaoPorProfissional',
      { Id: profissionalId },
      { headers: { 'Content-type': 'application/x-www-form-urlencoded' }}
    )
      .then(resposta => dispatch({ type: LISTAR_SATISFACAO_POR_PROFISSIONAL, payload: resposta.data }))
      .catch(error => console.log(error));
  }
};

export const obterSatisfacaoPorBairroCliente = bairro => (dispatch) => {
  if (bairro === '') {
    dispatch({ type: LISTAR_SATISFACAO_POR_BAIRRO_CLIENTE, payload: [] })
  } else {
    axios.post(
      'https://beleza-agendada-api.herokuapp.com/Relatorio/listarSatisfacaoPorBairroCliente',
      { Bairro: bairro },
      { headers: { 'Content-type': 'application/x-www-form-urlencoded' } },
    )
      .then(resposta => dispatch({ type: LISTAR_SATISFACAO_POR_BAIRRO_CLIENTE, payload: resposta.data }))
      .catch(error => console.log(error));
  }
};

export const obterSatisfacaoPorServico = servicoId => (dispatch) => {
  if (servicoId === '') {
    dispatch({ type: LISTAR_SATISFACAO_POR_SERVICO, payload: [] });
  } else {
    axios.post(
      'https://beleza-agendada-api.herokuapp.com/Relatorio/listarSatisfacaoPorServico',
      { Id: servicoId },
      { headers: { 'Content-type': 'application/x-www-form-urlencoded' } },
    )
      .then(resposta => dispatch({ type: LISTAR_SATISFACAO_POR_SERVICO, payload: resposta.data }))
      .catch(error => console.log(error));
  }
};
