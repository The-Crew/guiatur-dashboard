import React from 'react';

import { Content } from 'common';

import GraficoSatisfacaoMediaPorProfissionais from './components/GraficoSatisfacaoMediaPorProfissionais';
import GraficoSatisfacaoPorProfissional from './components/GraficoSatisfacaoPorProfissional';
import GraficoSatisfacaoPorBairroCliente from './components/GraficoSatisfacaoPorBairroCliente';
import GraficoSatisfacaoPorServico from './components/GraficoSatisfacaoPorServico';

const RelatorioGastosServicos = props => (
  <Content
    title="Satisfação"
    breadcrumb={[{ name: 'Relatório', path: '#/' }, { name: 'Satisfação', path: '#/satisfacao' }]}
  >
    <GraficoSatisfacaoMediaPorProfissionais />
    <GraficoSatisfacaoPorProfissional />
    <GraficoSatisfacaoPorBairroCliente />
    <GraficoSatisfacaoPorServico />
  </Content>
);

export default RelatorioGastosServicos;
