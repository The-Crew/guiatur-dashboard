import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import { Content, Box, Grid, ChartLine } from 'common';

import { obterCancelados } from './canceladosActions';
import GraficoCancelados from './components/GraficoCancelados';

class Relatorio extends Component {
  componentWillMount() {
    this.props.obterCancelados();
  }

  render() {
    return (
      <Content
        title="Cancelamentos"
        breadcrumb={[{ name: 'Relatório', path: '#/' }, { name: 'Cancelamentos', path: '#/cancelamentos' }]}
      >
        <GraficoCancelados data={this.props.cancelados} />
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  cancelados: state.relatorio.cancelados,
});
const mapDispatchToProps = dispatch => bindActionCreators({ obterCancelados }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Relatorio)
