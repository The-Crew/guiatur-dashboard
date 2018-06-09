import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import { Content, Box, Grid, ChartLine } from 'common';

import { obterCancelados } from './relatorioActions';
import GraficoCancelados from './components/GraficoCancelados';

class Dashboard extends Component {
  componentWillMount() {
    this.props.obterCancelados();
  }

  render() {
    return (
      <Content
        title="Relatório"
        breadcrumb={[{ name: 'Relatório', path: '#/' }]}
      >
        <GraficoCancelados data={this.props.cancelados} />
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  cancelados: state.dashboard.cancelados,
});
const mapDispatchToProps = dispatch => bindActionCreators({ obterCancelados }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
