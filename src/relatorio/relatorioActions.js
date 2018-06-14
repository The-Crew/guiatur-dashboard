import axios from 'axios';
import _ from 'lodash';

import {
  LISTAR_SERVICOS,
  LISTAR_PROFISSIONAIS,
  LISTAR_BAIRROS,
  QUANTIDADE_CLIENTES,
  QUANTIDADE_CANCELAMENTOS_ANO,
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

export const obterQuantidadeClientes = () => dispatch => {
  axios.post('https://beleza-agendada-api.herokuapp.com/cliente/obterQuantidade')
    .then(resposta => {
      dispatch({ type: QUANTIDADE_CLIENTES, payload: resposta.data })})
    .catch(error => console.log(error));
};

export const obterCancelamentosAno = () => (dispatch) => {
  axios.get('https://beleza-agendada-api.herokuapp.com/Relatorio/listarCancelamentos')
    .then((resposta) => {
      dispatch({ type: QUANTIDADE_CANCELAMENTOS_ANO, payload: _.sum(_.values(resposta.data)) });
    })
    .catch(error => console.log(error));
};
