import React from 'react';

import { Content } from 'common';

import GraficoSatisfacaoMediaPorProfissionais from './components/GraficoSatisfacaoMediaPorProfissionais';
import GraficoSatisfacaoPorProfissional from './components/GraficoSatisfacaoPorProfissional';
import GraficoSatisfacaoMediaPorBairros from './components/GraficoSatisfacaoMediaPorBairros';
import GraficoSatisfacaoPorBairroAtendimento from './components/GraficoSatisfacaoPorBairroAtendimento';
import GraficoSatisfacaoMediaPorServicos from './components/GraficoSatisfacaoMediaPorServicos';
import GraficoSatisfacaoPorServico from './components/GraficoSatisfacaoPorServico';

const RelatorioGastosServicos = props => (
  <Content
    title="Satisfação"
    breadcrumb={[{ name: 'Relatório', path: '#/' }, { name: 'Satisfação', path: '#/satisfacao' }]}
  >
    <GraficoSatisfacaoMediaPorProfissionais />
    <GraficoSatisfacaoPorProfissional />
    <GraficoSatisfacaoPorBairroAtendimento />
    <GraficoSatisfacaoPorServico />
  </Content>
);

export default RelatorioGastosServicos;
