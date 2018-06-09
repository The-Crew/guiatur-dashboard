import axios from 'axios';

import {
  LISTAR_CANCELADOS,
} from './types';

export const obterCancelados = () => (dispatch) => {
  axios.post('https://beleza-agendada-api.herokuapp.com/Relatorio/listarCancelamentos')
    .then((resposta) => {
      dispatch({ type: LISTAR_CANCELADOS, payload: resposta.data })
    })
    .catch((error) => {
      console.log(error);
    });
};
