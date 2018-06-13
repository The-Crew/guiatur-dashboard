import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import { Box, Grid, ChartBar } from 'common';

import { obterCancelados } from '../canceladosActions';

class Cancelamentos extends Component {
  componentWillMount() {
    this.props.obterCancelados();
  }

  render() {
    const chartData = {
      labels: _.keys(this.props.cancelados),
      datasets: [
        {
          label: 'Cancelamentos',
          fillColor: 'rgba(151,187,205,0.2)',
          strokeColor: 'rgba(151,187,205,1)',
          pointColor: 'rgba(151,187,205,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(151,187,205,1)',
          data: _.values(this.props.cancelados),
        }
      ],
    };
    return (
      <Grid cols="12 12 6 6">
        <Box title="Cancelamentos" type="danger">
          <ChartBar data={chartData} style={{ width: '100%' }} />
        </Box>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({ cancelados: state.relatorio.cancelados });
const mapDispatchToProps = dispatch => bindActionCreators({ obterCancelados }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cancelamentos)
