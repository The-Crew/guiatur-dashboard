import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import { Box, Grid, ChartBar } from 'common';

import { obterGastosServicos } from '../gastosActions';

class GastosServicos extends Component {
  componentWillMount() {
    this.props.obterGastosServicos();
  }

  render() {
    const chartData = {
      labels: _.keys(this.props.gastosServicos),
      datasets: [
        {
          label: 'Gastos com serviços',
          fillColor: 'rgba(151,187,205,0.2)',
          strokeColor: 'rgba(151,187,205,1)',
          pointColor: 'rgba(151,187,205,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(151,187,205,1)',
          data: _.values(this.props.gastosServicos),
        },
      ],
    };

    return (
      <Grid cols="12 12 6 6">
        <Box title="Gastos com serviços" type="danger">
          <ChartBar data={chartData} style={{ width: '100%' }} />
        </Box>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({ gastosServicos: state.relatorio.gastosServicos });
const mapDispatchToProps = dispatch => bindActionCreators({ obterGastosServicos }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GastosServicos);
