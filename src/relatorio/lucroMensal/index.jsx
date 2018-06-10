import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import { Content } from 'common';

import { obterLucroMensal, obterLucroMensalPorServico } from './gastosActions';
import GraficoLucroMensal from './components/GraficoLucroMensal';
import GraficoLucroMensalPorServico from './components/GraficoLucroMensalPorServico';

class RelatorioGastosServicos extends Component {
  componentWillMount() {
    this.props.obterLucroMensal();
    this.props.obterLucroMensalPorServico();
  }

  render() {
    return (
      <Content
        title="Lucro mensal"
        breadcrumb={[{ name: 'Relatório', path: '#/' }, { name: 'Lucro mensal', path: '#/lucroMensal' }]}
      >
        <GraficoLucroMensal data={this.props.lucroMensal} />
        <GraficoLucroMensalPorServico data={this.props.lucroMensalPorServico} />
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  lucroMensal: state.relatorio.lucroMensal,
  lucroMensalPorServico: state.relatorio.lucroMensalPorServico,
});
const mapDispatchToProps = dispatch => bindActionCreators({ obterLucroMensal, obterLucroMensalPorServico }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RelatorioGastosServicos)
