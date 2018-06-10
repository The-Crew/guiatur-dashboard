import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import { Content, Box, Grid, ChartLine } from 'common';

import { obterCancelados, obterCanceladosPorBairro } from './canceladosActions';
import GraficoCancelados from './components/GraficoCancelados';
import GraficoCanceladosPorBairro from './components/GraficoCanceladosPorBairro';

class Relatorio extends Component {
  componentWillMount() {
    this.props.obterCancelados();
    this.props.obterCanceladosPorBairro();
  }

  render() {
    return (
      <Content
        title="Cancelamentos"
        breadcrumb={[{ name: 'Relatório', path: '#/' }, { name: 'Cancelamentos', path: '#/cancelamentos' }]}
      >
        <GraficoCancelados data={this.props.cancelados} />
        <GraficoCanceladosPorBairro data={this.props.canceladosPorBairro} />
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  cancelados: state.relatorio.cancelados,
  canceladosPorBairro: state.relatorio.canceladosPorBairro,
});
const mapDispatchToProps = dispatch => bindActionCreators({ obterCancelados, obterCanceladosPorBairro }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Relatorio)
