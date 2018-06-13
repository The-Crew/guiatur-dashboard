import React from 'react';

import { Content } from 'common';

import GraficoGastoServicos from './components/GraficoGastoServicos';
import GraficoGastoServicosPorServico from './components/GraficoGastoServicosPorServico';

export default props => (
  <Content
    title="Gastos com serviços"
    breadcrumb={[{ name: 'Relatório', path: '#/' }, { name: 'Gastos com serviços', path: '#/gastosServicos' }]}
  >
    <GraficoGastoServicos />
    <GraficoGastoServicosPorServico />
  </Content>
);
