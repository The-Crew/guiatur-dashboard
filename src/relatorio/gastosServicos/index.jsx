import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import { Content } from 'common';

import { obterGastosServicos } from './gastosActions';
import GraficoServicos from './components/GraficoServicos';

class RelatorioGastosServicos extends Component {
  componentWillMount() {
    this.props.obterGastosServicos();
  }

  render() {
    return (
      <Content
        title="Gastos com serviços"
        breadcrumb={[{ name: 'Relatório', path: '#/' }, { name: 'Gastos com serviços', path: '#/gastosServicos' }]}
      >
        <GraficoServicos data={this.props.gastosServicos} />
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  gastosServicos: state.relatorio.gastosServicos,
});
const mapDispatchToProps = dispatch => bindActionCreators({ obterGastosServicos }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RelatorioGastosServicos)
