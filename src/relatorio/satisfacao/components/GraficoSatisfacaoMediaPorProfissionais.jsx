import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import { Box, Grid, ChartBar } from 'common';

import { obterSatisfacaoPorProfissional } from '../satisfacaoActions';

class SatisfacaoMediaPorProfissionais extends Component {
  componentWillMount() {
    this.props.obterSatisfacaoPorProfissional(undefined);
  }

  render() {
    const chartData = {
      labels: _.keys(this.props.satisfacaoMediaPorProfissionais),
      datasets: [
        {
          label: 'Satisfação por profissional',
          fillColor: 'rgba(151,187,205,0.2)',
          strokeColor: 'rgba(151,187,205,1)',
          pointColor: 'rgba(151,187,205,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(151,187,205,1)',
          data: _.values(this.props.satisfacaoMediaPorProfissionais),
        },
      ],
    };

    return (
      <Grid cols="12 12 6 6">
        <Box title="Satisfação média por profissionais">
          <ChartBar data={chartData} style={{ width: '100%' }} />
        </Box>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  satisfacaoMediaPorProfissionais: state.relatorio.satisfacaoMediaPorProfissionais,
});

const mapDispatchToProps = dispatch => bindActionCreators({ obterSatisfacaoPorProfissional }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SatisfacaoMediaPorProfissionais);
