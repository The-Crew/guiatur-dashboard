import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import { Content } from 'common';

import {
  obterSatisfacaoPorProfissional,
  obterSatisfacaoPorBairroCliente,
  obterSatisfacaoPorServico,
} from './satisfacaoActions';
import GraficoSatisfacaoPorProfissional from './components/GraficoSatisfacaoPorProfissional';
import GraficoSatisfacaoPorBairroCliente from './components/GraficoSatisfacaoPorBairroCliente';
import GraficoSatisfacaoPorServico from './components/GraficoSatisfacaoPorServico';

class RelatorioGastosServicos extends Component {
  componentWillMount() {
    this.props.obterSatisfacaoPorProfissional();
    this.props.obterSatisfacaoPorBairroCliente();
    this.props.obterSatisfacaoPorServico();
  }

  render() {
    return (
      <Content
        title="Satisfação"
        breadcrumb={[{ name: 'Relatório', path: '#/' }, { name: 'Satisfação', path: '#/satisfacao' }]}
      >
        <GraficoSatisfacaoPorProfissional data={this.props.satisfacaoPorProfissional} />
        <GraficoSatisfacaoPorBairroCliente data={this.props.satisfacaoPorBairroCliente} />
        <GraficoSatisfacaoPorServico data={this.props.satisfacaoPorServico} />
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  satisfacaoPorProfissional: state.relatorio.satisfacaoPorProfissional,
  satisfacaoPorBairroCliente: state.relatorio.satisfacaoPorBairroCliente,
  satisfacaoPorServico: state.relatorio.satisfacaoPorServico,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  obterSatisfacaoPorProfissional,
  obterSatisfacaoPorBairroCliente,
  obterSatisfacaoPorServico,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RelatorioGastosServicos)
