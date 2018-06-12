import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import { Box, Grid, ChartBar } from 'common';

import { obterSatisfacaoPorBairroCliente } from '../satisfacaoActions';

class SatisfacaoMediaPorBairros extends Component {
  componentWillMount() {
    this.props.obterSatisfacaoPorBairroCliente(undefined);
  }
  render() {
    const chartData = {
      labels: _.keys(this.props.satisfacaoPorBairroCliente),
      datasets: [
        {
          label: 'Satisfação por bairro cliente',
          fillColor: 'rgba(151,187,205,0.2)',
          strokeColor: 'rgba(151,187,205,1)',
          pointColor: 'rgba(151,187,205,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(151,187,205,1)',
          data: _.values(this.props.satisfacaoPorBairroCliente),
        },
      ],
    };

    return (
      <Grid cols="12 12 6 6">
        <Box title="Satisfação média por bairros">
          <ChartBar data={chartData} style={{ width: '100%' }} />
        </Box>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  satisfacaoPorBairroCliente: state.relatorio.satisfacaoPorBairroCliente,
});

const mapDispatchToProps = dispatch => bindActionCreators({ obterSatisfacaoPorBairroCliente }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SatisfacaoMediaPorBairros);
