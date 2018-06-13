import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import { Box, Grid, ChartBar } from 'common';

import { obterCancelamentos } from '../cancelamentosActions';

class Cancelamentos extends Component {
  componentWillMount() {
    this.props.obterCancelamentos();
  }

  render() {
    const chartData = {
      labels: _.keys(this.props.cancelamentos),
      datasets: [
        {
          label: 'Cancelamentos',
          fillColor: 'rgba(151,187,205,0.2)',
          strokeColor: 'rgba(151,187,205,1)',
          pointColor: 'rgba(151,187,205,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(151,187,205,1)',
          data: _.values(this.props.cancelamentos),
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

const mapStateToProps = state => ({ cancelamentos: state.relatorio.cancelamentos });
const mapDispatchToProps = dispatch => bindActionCreators({ obterCancelamentos }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cancelamentos)
