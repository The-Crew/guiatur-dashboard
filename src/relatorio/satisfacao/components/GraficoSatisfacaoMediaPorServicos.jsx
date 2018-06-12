import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import { Box, Grid, ChartBar } from 'common';

import { obterSatisfacaoPorServico } from '../satisfacaoActions';

class SatisfacaoMediaPorServicos extends Component {
  componentWillMount() {
    this.props.obterSatisfacaoPorServico(undefined);
  }

  render() {
    const chartData = {
      labels: _.keys(this.props.satisfacaoMediaPorServicos),
      datasets: [
        {
          label: 'Satisfação média por serviços',
          fillColor: 'rgba(151,187,205,0.2)',
          strokeColor: 'rgba(151,187,205,1)',
          pointColor: 'rgba(151,187,205,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(151,187,205,1)',
          data: _.values(this.props.satisfacaoMediaPorServicos),
        }
      ],
    };

    return (
      <Grid cols="12 12 6 6">
        <Box title="Satisfação média por serviços">
          <ChartBar data={chartData} style={{ width: '100%' }} />
        </Box>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  satisfacaoMediaPorServicos: state.relatorio.satisfacaoMediaPorServicos,
});

const mapDispatchToProps = dispatch => bindActionCreators({ obterSatisfacaoPorServico }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SatisfacaoMediaPorServicos);
