import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import { Box, Grid, ChartBar } from 'common';

import { obterSatisfacaoPorBairroAtendimento } from '../satisfacaoActions';

class SatisfacaoMediaPorAtendimento extends Component {
  componentWillMount() {
    this.props.obterSatisfacaoPorBairroAtendimento(undefined);
  }

  render() {
    const chartData = {
      labels: _.keys(this.props.satisfacaoMediaPorBairros),
      datasets: [
        {
          label: 'Satisfação média por bairros',
          fillColor: 'rgba(151,187,205,0.2)',
          strokeColor: 'rgba(151,187,205,1)',
          pointColor: 'rgba(151,187,205,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(151,187,205,1)',
          data: _.values(this.props.satisfacaoMediaPorBairros),
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
  satisfacaoMediaPorBairros: state.relatorio.satisfacaoMediaPorBairros,
});

const mapDispatchToProps = dispatch => bindActionCreators({ obterSatisfacaoPorBairroAtendimento }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SatisfacaoMediaPorAtendimento);
