import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import { Content } from 'common';

import { obterFaturamento, obterFaturamentoPorServico } from './faturamentoActions';
import GraficoFaturamento from './components/GraficoFaturamento';

class RelatorioFaturamento extends Component {
  componentWillMount() {
    this.props.obterFaturamento();
    this.props.obterFaturamentoPorServico();
  }

  render() {
    return (
      <Content
        title="Faturamento"
        breadcrumb={[{ name: 'Relatório', path: '#/' }, { name: 'Faturamento', path: '#/faturamento' }]}
      >
        <GraficoFaturamento data={this.props.faturamento} />
        <GraficoFaturamento data={this.props.faturamentoPorServico} />
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  faturamento: state.relatorio.faturamento,
  faturamentoPorServico: state.relatorio.faturamentoPorServico,
});
const mapDispatchToProps = dispatch => bindActionCreators({ obterFaturamento, obterFaturamentoPorServico }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RelatorioFaturamento)
