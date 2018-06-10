import axios from 'axios';

import {
  LISTAR_LUCRO_MENSAL,
  LISTAR_LUCRO_MENSAL_POR_SERVICO,
} from '../types';

export const obterLucroMensal = () => (dispatch) => {
  axios.get('https://beleza-agendada-api.herokuapp.com/Relatorio/listarLucroMensal')
    .then((resposta) => {
      dispatch({ type: LISTAR_LUCRO_MENSAL, payload: resposta.data })
    })
    .catch((error) => {
      console.log(error);
    });
};

export const obterLucroMensalPorServico = () => (dispatch) => {
  axios.post(
    'https://beleza-agendada-api.herokuapp.com/Relatorio/listarLucroMensalPorServico',
    { "Servico": { "Id": "1" }},
    { headers: { 'Content-type': 'application/x-www-form-urlencoded' }}
  )
    .then((resposta) => {
      dispatch({ type: LISTAR_LUCRO_MENSAL_POR_SERVICO, payload: resposta.data })
    })
    .catch((error) => {
      console.log(error);
    });
};
