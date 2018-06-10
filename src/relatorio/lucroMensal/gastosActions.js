import axios from 'axios';

import {
  LISTAR_LUCRO_MENSAL,
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
