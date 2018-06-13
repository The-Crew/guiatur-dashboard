import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Content } from 'common';

import { obterLucroMensal } from './gastosActions';
import GraficoLucroMensal from './components/GraficoLucroMensal';
import GraficoLucroMensalPorServico from './components/GraficoLucroMensalPorServico';

class RelatorioGastosServicos extends Component {
  componentWillMount() {
    this.props.obterLucroMensal();
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
});
const mapDispatchToProps = dispatch => bindActionCreators({ obterLucroMensal }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RelatorioGastosServicos)
