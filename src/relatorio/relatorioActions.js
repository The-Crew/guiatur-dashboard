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
  /*axios.post(
    'https://beleza-agendada-api.herokuapp.com/Relatorio/listarBairrosAtendimento',
    { headers: { 'Content-type': 'application/x-www-form-urlencoded' } },
  )
    .then(resposta => {
      bairros = resposta.data.map((atendimento) => {
        return { Bairro: atendimento.Bairro };
      })
      console.log(bairros);
      dispatch({ type: LISTAR_BAIRROS, payload: bairros })
    })
    .catch(error => console.log(error));*/
    dispatch({ type: LISTAR_BAIRROS, payload: [
        { Bairro: 'Boa viagem' },
        { Bairro: 'Imbiribeira' },
        { Bairro: 'IPSEP' },
        { Bairro: 'Piedade' },
      ] });
};

export const obterQuantidadeClientes = () => dispatch => {
  axios.post('https://beleza-agendada-api.herokuapp.com/cliente/obterQuantidade')
    .then(resposta => {
      dispatch({ type: QUANTIDADE_CLIENTES, payload: resposta.data })})
    .catch(error => console.log(error));
};

export const obterCancelamentosAno = () => (dispatch) => {
  axios.post(
    'https://beleza-agendada-api.herokuapp.com/Atendimento/obterQuantidadePorStatus',
    { Status: 'C' },
    { headers: { 'Content-type': 'application/x-www-form-urlencoded' } },
  )
    .then((resposta) => {
      dispatch({ type: QUANTIDADE_CANCELAMENTOS_ANO, payload: resposta.data });
    })
    .catch(error => console.log(error));
};
