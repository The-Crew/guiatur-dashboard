import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import { Content } from 'common';

import { obterGastosServicos, obterGastoServicosPorServico } from './gastosActions';
import GraficoGastoServicos from './components/GraficoGastoServicos';
import GraficoGastoServicosPorServico from './components/GraficoGastoServicosPorServico';

class RelatorioGastosServicos extends Component {
  componentWillMount() {
    this.props.obterGastosServicos();
    this.props.obterGastoServicosPorServico();
  }

  render() {
    return (
      <Content
        title="Gastos com serviços"
        breadcrumb={[{ name: 'Relatório', path: '#/' }, { name: 'Gastos com serviços', path: '#/gastosServicos' }]}
      >
        <GraficoGastoServicos data={this.props.gastosServicos} />
        <GraficoGastoServicosPorServico data={this.props.gastosServicosPorServico} />
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  gastosServicos: state.relatorio.gastosServicos,
  gastosServicosPorServico: state.relatorio.gastosServicosPorServico,
});
const mapDispatchToProps = dispatch => bindActionCreators({ obterGastosServicos, obterGastoServicosPorServico }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RelatorioGastosServicos)
