import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import { Content } from 'common';

import { obterLucroMensal } from './gastosActions';
import GraficoLucroMensal from './components/GraficoLucroMensal';

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
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  lucroMensal: state.relatorio.lucroMensal,
});
const mapDispatchToProps = dispatch => bindActionCreators({ obterLucroMensal }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RelatorioGastosServicos)
