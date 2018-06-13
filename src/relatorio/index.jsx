import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Content, Box, Grid, ChartLine } from 'common';

class Relatorio extends Component {
  componentWillMount() {

  }

  render() {
    return (
      <Content
        title="Relatório"
        breadcrumb={[{ name: 'Relatório', path: '#/' }]}
      >
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  cancelamentos: state.relatorio.cancelamentos,
});
const mapDispatchToProps = dispatch => bindActionCreators({  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Relatorio)
