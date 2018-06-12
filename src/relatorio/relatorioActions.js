import axios from 'axios';

import {
  LISTAR_SERVICOS,
} from './types';

export const obterListaDeServico = () => dispatch => {
  axios.post('https://beleza-agendada-api.herokuapp.com/Servico/listarTodos')
    .then(resposta => dispatch({ type: LISTAR_SERVICOS, payload: resposta.data }))
    .catch(error => console.log(error));
};
