import axios from 'axios';

import {
  LISTAR_FATURAMENTO,
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
