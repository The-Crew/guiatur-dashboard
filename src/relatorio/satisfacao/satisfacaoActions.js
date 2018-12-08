import axios from 'axios';

import {
  LISTAR_SATISFACAO_MEDIA_POR_PROFISSIONAIS,
  LISTAR_SATISFACAO_POR_PROFISSIONAL,
  LISTAR_SATISFACAO_MEDIA_POR_BAIRRO_CLIENTE,
  LISTAR_SATISFACAO_POR_BAIRRO_CLIENTE,
  LISTAR_SATISFACAO_MEDIA_POR_SERVICOS,
  LISTAR_SATISFACAO_POR_SERVICO,
} from '../types';

export const obterSatisfacaoPorProfissional = profissionalId => (dispatch) => {
  if (profissionalId === '') {
    dispatch({ type: LISTAR_SATISFACAO_POR_PROFISSIONAL, payload: [] })
  } else if (profissionalId == undefined) {
    axios.post('https://guiatur-webservice.herokuapp.com/Relatorio/listarSatisfacaoPorProfissional',
      { Id: undefined },
      { headers: { 'Content-type': 'application/x-www-form-urlencoded' }}
    )
      .then(resposta => dispatch({ type: LISTAR_SATISFACAO_MEDIA_POR_PROFISSIONAIS, payload: resposta.data }))
      .catch(error => console.log(error));
  } else {
    axios.post('https://guiatur-webservice.herokuapp.com/Relatorio/listarSatisfacaoPorProfissional',
      { Id: profissionalId },
      { headers: { 'Content-type': 'application/x-www-form-urlencoded' }}
    )
      .then(resposta => dispatch({ type: LISTAR_SATISFACAO_POR_PROFISSIONAL, payload: resposta.data }))
      .catch(error => console.log(error));
  }
};

export const obterSatisfacaoPorBairroAtendimento = bairro => (dispatch) => {
  if (bairro === '') {
    dispatch({ type: LISTAR_SATISFACAO_POR_BAIRRO_CLIENTE, payload: [] })
  } else if (bairro === undefined) {
    axios.post(
      'https://guiatur-webservice.herokuapp.com/Relatorio/listarSatisfacaoPorBairroCliente',
      { Bairro: undefined },
      { headers: { 'Content-type': 'application/x-www-form-urlencoded' } },
    )
      .then(resposta => dispatch({ type: LISTAR_SATISFACAO_MEDIA_POR_BAIRRO_CLIENTE, payload: resposta.data }))
      .catch(error => console.log(error));
  } else {
    axios.post(
      'https://guiatur-webservice.herokuapp.com/Relatorio/listarSatisfacaoPorBairroAtendimento',
      { Bairro: bairro },
      { headers: { 'Content-type': 'application/x-www-form-urlencoded' } },
    )
      .then(resposta => dispatch({ type: LISTAR_SATISFACAO_POR_BAIRRO_CLIENTE, payload: resposta.data }))
      .catch(error => console.log(error));
  }
};

export const obterSatisfacaoPorServico = servicoId => (dispatch) => {
  if (servicoId === '') {
    dispatch({ type: LISTAR_SATISFACAO_POR_SERVICO, payload: [] });
  } else if (servicoId === undefined) {
    axios.post(
      'https://guiatur-webservice.herokuapp.com/Relatorio/listarSatisfacaoPorServico',
      { Id: undefined },
      { headers: { 'Content-type': 'application/x-www-form-urlencoded' } },
    )
      .then(resposta => dispatch({ type: LISTAR_SATISFACAO_MEDIA_POR_SERVICOS, payload: resposta.data }))
      .catch(error => console.log(error));
  } else {
    axios.post(
      'https://guiatur-webservice.herokuapp.com/Relatorio/listarSatisfacaoPorServico',
      { Id: servicoId },
      { headers: { 'Content-type': 'application/x-www-form-urlencoded' } },
    )
      .then(resposta => dispatch({ type: LISTAR_SATISFACAO_POR_SERVICO, payload: resposta.data }))
      .catch(error => console.log(error));
  }
};
