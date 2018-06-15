import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Content, Box, Grid, ChartLine } from 'common';

import { obterQuantidadeClientes } from './relatorioActions';

class Relatorio extends Component {
  componentWillMount() {
    this.props.obterQuantidadeClientes()
  }

  render() {
    return (
      <Content
        title="Relatório"
        breadcrumb={[{ name: 'Relatório', path: '#/' }]}
      >
        <div className="callout callout-info">
          <h4>Quantidade de clientes ativos: {this.props.quantidadeClientes}</h4>
        </div>
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  cancelamentos: state.relatorio.cancelamentos,
  quantidadeClientes: state.relatorio.quantidadeClientes,
  quantidadeCancelamentosAno: state.relatorio.quantidadeCancelamentosAno,
});
const mapDispatchToProps = dispatch => bindActionCreators({ obterQuantidadeClientes }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Relatorio)
