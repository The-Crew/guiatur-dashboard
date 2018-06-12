import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import { Content } from 'common';

import {
  obterSatisfacaoPorProfissional,
  obterSatisfacaoPorBairroCliente,
} from './satisfacaoActions';
import GraficoSatisfacaoPorProfissional from './components/GraficoSatisfacaoPorProfissional';
import GraficoSatisfacaoPorBairroCliente from './components/GraficoSatisfacaoPorBairroCliente';
import GraficoSatisfacaoPorServico from './components/GraficoSatisfacaoPorServico';

class RelatorioGastosServicos extends Component {
  componentWillMount() {
    this.props.obterSatisfacaoPorProfissional();
    this.props.obterSatisfacaoPorBairroCliente();
  }

  render() {
    return (
      <Content
        title="Satisfação"
        breadcrumb={[{ name: 'Relatório', path: '#/' }, { name: 'Satisfação', path: '#/satisfacao' }]}
      >
        <GraficoSatisfacaoPorProfissional data={this.props.satisfacaoPorProfissional} />
        <GraficoSatisfacaoPorBairroCliente data={this.props.satisfacaoPorBairroCliente} />
        <GraficoSatisfacaoPorServico />
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  satisfacaoPorProfissional: state.relatorio.satisfacaoPorProfissional,
  satisfacaoPorBairroCliente: state.relatorio.satisfacaoPorBairroCliente,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  obterSatisfacaoPorProfissional,
  obterSatisfacaoPorBairroCliente,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RelatorioGastosServicos)
