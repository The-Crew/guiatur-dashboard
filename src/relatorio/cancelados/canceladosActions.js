import axios from 'axios';

import {
  LISTAR_CANCELADOS,
  LISTAR_CANCELADOS_POR_BAIRRO,
} from '../types';

export const obterCancelados = () => (dispatch) => {
  axios.get('https://beleza-agendada-api.herokuapp.com/Relatorio/listarCancelamentos')
    .then((resposta) => {
      dispatch({ type: LISTAR_CANCELADOS, payload: resposta.data })
    })
    .catch((error) => {
      console.log(error);
    });
};

export const obterCanceladosPorBairro = () => (dispatch) => {
  axios.post('https://beleza-agendada-api.herokuapp.com/Relatorio/listarCancelamentos',
    { "Bairro": "Imbiribeira" },
    { headers: { 'Content-type': 'application/x-www-form-urlencoded' }}
  )
    .then((resposta) => {
      dispatch({ type: LISTAR_CANCELADOS_POR_BAIRRO, payload: resposta.data })
    })
    .catch((error) => {
      console.log(error);
    });
};
