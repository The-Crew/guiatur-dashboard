import axios from 'axios';

import {
  LISTAR_SERVICOS,
  LISTAR_PROFISSIONAIS,
  LISTAR_BAIRROS,
} from './types';

export const obterListaDeServico = () => dispatch => {
  axios.post('https://beleza-agendada-api.herokuapp.com/Servico/listarTodos')
    .then(resposta => dispatch({ type: LISTAR_SERVICOS, payload: resposta.data }))
    .catch(error => console.log(error));
};

export const obterListaDeProfissionais = () => dispatch => {
  axios.post('https://beleza-agendada-api.herokuapp.com/Profissional/listarTodos')
    .then(resposta => {
      dispatch({ type: LISTAR_PROFISSIONAIS, payload: resposta.data })})
    .catch(error => console.log(error));
};

export const obterListaDeBairros = () => dispatch => {
  axios.post('https://beleza-agendada-api.herokuapp.com/Relatorio/listarBairrosAtendimento')
    .then(resposta => {
      dispatch({ type: LISTAR_BAIRROS, payload: resposta.data })})
    .catch(error => console.log(error));
};
