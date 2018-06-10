import axios from 'axios';

import {
  LISTAR_SATISFACAO_POR_PROFISSIONAL,
  LISTAR_SATISFACAO_POR_BAIRRO_CLIENTE,
  LISTAR_SATISFACAO_POR_SERVICO,
} from '../types';

export const obterSatisfacaoPorProfissional = () => (dispatch) => {
  axios.post('https://beleza-agendada-api.herokuapp.com/Relatorio/listarSatisfacaoPorProfissional',
    { "Id": "1" },
    { headers: { 'Content-type': 'application/x-www-form-urlencoded' }}
  )
    .then((resposta) => {
      dispatch({ type: LISTAR_SATISFACAO_POR_PROFISSIONAL, payload: resposta.data })
    })
    .catch((error) => {
      console.log(error);
    });
};

export const obterSatisfacaoPorBairroCliente = () => (dispatch) => {
  axios.post(
    'https://beleza-agendada-api.herokuapp.com/Relatorio/listarSatisfacaoPorBairroCliente',
    { "Bairro": "Imbiribeira" },
    { headers: { 'Content-type': 'application/x-www-form-urlencoded' }}
  )
    .then((resposta) => {
      dispatch({ type: LISTAR_SATISFACAO_POR_BAIRRO_CLIENTE, payload: resposta.data })
    })
    .catch((error) => {
      console.log(error);
    });
};

export const obterSatisfacaoPorServico = () => (dispatch) => {
  axios.post(
    'https://beleza-agendada-api.herokuapp.com/Relatorio/listarSatisfacaoPorServico',
    { "Id": "1" },
    { headers: { 'Content-type': 'application/x-www-form-urlencoded' }}
  )
    .then((resposta) => {
      dispatch({ type: LISTAR_SATISFACAO_POR_SERVICO, payload: resposta.data })
    })
    .catch((error) => {
      console.log(error);
    });
};
