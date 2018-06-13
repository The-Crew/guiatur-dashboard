import React from 'react';

import { Content } from 'common';

import GraficoLucroMensal from './components/GraficoLucroMensal';
import GraficoLucroMensalPorServico from './components/GraficoLucroMensalPorServico';

export default props => (
  <Content
    title="Lucro mensal"
    breadcrumb={[{ name: 'Relatório', path: '#/' }, { name: 'Lucro mensal', path: '#/lucroMensal' }]}
  >
    <GraficoLucroMensal />
    <GraficoLucroMensalPorServico />
  </Content>
);
