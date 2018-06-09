import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import { Content } from 'common';

import { obterFaturamento } from './faturamentoActions';
import GraficoFaturamento from './components/GraficoFaturamento';

class RelatorioFaturamento extends Component {
  componentWillMount() {
    this.props.obterFaturamento();
  }

  render() {
    return (
      <Content
        title="Faturamento"
        breadcrumb={[{ name: 'Relatório', path: '#/' }, { name: 'Faturamento', path: '#/faturamento' }]}
      >
        <GraficoFaturamento data={this.props.faturamento} />
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  faturamento: state.relatorio.faturamento,
});
const mapDispatchToProps = dispatch => bindActionCreators({ obterFaturamento }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RelatorioFaturamento)
