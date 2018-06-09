import axios from 'axios';

import {
  LISTAR_GASTOS_SERVICOS,
} from '../types';

export const obterGastosServicos = () => (dispatch) => {
  axios.get('https://beleza-agendada-api.herokuapp.com/Relatorio/listarGastosServicos')
    .then((resposta) => {
      dispatch({ type: LISTAR_GASTOS_SERVICOS, payload: resposta.data })
    })
    .catch((error) => {
      console.log(error);
    });
};
