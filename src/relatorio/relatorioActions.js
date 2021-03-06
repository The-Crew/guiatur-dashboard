import axios from 'axios';
import _ from 'lodash';

import {
  LISTAR_SERVICOS,
  LISTAR_SERVICOS_NAO_CONCLUIDOS,
  LISTAR_PROFISSIONAIS,
  LISTAR_BAIRROS,
  QUANTIDADE_CLIENTES,
  QUANTIDADE_CANCELAMENTOS_ANO,
} from './types';

export const obterListaAtendimentosNaoConcluidos = () => dispatch => {
  axios.get('https://guiatur-webservice.herokuapp.com/Atendimento/listarTodosNaoConcluidos', { headers: { 'Content-Type': 'application/json' }})
    .then(resposta => {
      console.log('>>>>>>', resposta)
      dispatch({ type: LISTAR_SERVICOS_NAO_CONCLUIDOS, payload: resposta.data || [] })
    })
    .catch(error => console.log(error));
};

export const obterListaDeServico = () => dispatch => {
  axios.post('https://guiatur-webservice.herokuapp.com/Servico/listarTodos')
    .then(resposta => dispatch({ type: LISTAR_SERVICOS, payload: resposta.data }))
    .catch(error => console.log(error));
};

export const obterListaDeProfissionais = () => dispatch => {
  axios.post('https://guiatur-webservice.herokuapp.com/Profissional/listarTodos')
    .then(resposta => {
      dispatch({ type: LISTAR_PROFISSIONAIS, payload: resposta.data })})
    .catch(error => console.log(error));
};

export const obterListaDeBairros = () => dispatch => {
  /*axios.post(
    'https://guiatur-webservice.herokuapp.com/Relatorio/listarBairrosAtendimento',
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
  axios.post('https://guiatur-webservice.herokuapp.com/cliente/obterQuantidade')
    .then(resposta => {
      dispatch({ type: QUANTIDADE_CLIENTES, payload: resposta.data })})
    .catch(error => console.log(error));
};

export const obterCancelamentosAno = () => (dispatch) => {
  axios.post(
    'https://guiatur-webservice.herokuapp.com/Atendimento/obterQuantidadePorStatus',
    { Status: 'C' },
    { headers: { 'Content-type': 'application/x-www-form-urlencoded' } },
  )
    .then((resposta) => {
      dispatch({ type: QUANTIDADE_CANCELAMENTOS_ANO, payload: resposta.data });
    })
    .catch(error => console.log(error));
};

export const finalizarAtendimento = (Id) => (dispatch) => {
  axios.post(
    'https://guiatur-webservice.herokuapp.com/Atendimento/finalizar',
    { Id },
    { headers: { 'Content-type': 'application/x-www-form-urlencoded' } },
  )
    .then((resposta) => {
      axios.post('https://guiatur-webservice.herokuapp.com/Atendimento/listarTodosNaoConcluidos')
      .then(resposta => dispatch({ type: LISTAR_SERVICOS_NAO_CONCLUIDOS, payload: resposta.data || [] }))
      .catch(error => console.log(error));
    })
    .catch(error => console.log(error));
};

export const removerAtendimento = (key, callbackSuccess) => (dispatch) => {
  axios.post(
    'https://guiatur-webservice.herokuapp.com/Atendimento/cancelar',
    { Id: key },
  )
    .then((resp) => {
      console.log(resp);
      axios.get('https://guiatur-webservice.herokuapp.com/Atendimento/listarTodosNaoConcluidos', { headers: { 'Content-Type': 'application/json' }})
        .then(resposta => {
          console.log('>>>>>>', resposta)
          dispatch({ type: LISTAR_SERVICOS_NAO_CONCLUIDOS, payload: resposta.data || [] })
        })
        .catch(error => console.log(error));

      if (typeof callbackSuccess === 'function') callbackSuccess();
    })
    .catch((error) => console.log(error));
};
