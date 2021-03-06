import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import { Box, Grid, ChartBar } from 'common';

import { obterFaturamento } from '../faturamentoActions';

class Faturamento extends Component {
  componentWillMount() {
    this.props.obterFaturamento();
  }

  render() {
    const chartData = {
      labels: _.keys(this.props.faturamento),
      datasets: [
        {
          label: 'Faturamento geral',
          fillColor: 'rgba(151,187,205,0.2)',
          strokeColor: 'rgba(151,187,205,1)',
          pointColor: 'rgba(151,187,205,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(151,187,205,1)',
          data: _.values(this.props.faturamento),
        },
      ],
    };

    return (
      <Grid cols="12 12 6 6">
        <Box title="Faturamento geral">
          <ChartBar data={chartData} style={{ width: '100%' }} />
        </Box>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  faturamento: state.relatorio.faturamento,
});
const mapDispatchToProps = dispatch => bindActionCreators({ obterFaturamento }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Faturamento);
