import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import { Box, Grid, ChartBar } from 'common';

import { obterLucroMensal } from '../gastosActions';

class LucroMensal extends Component {
  componentWillMount() {
    this.props.obterLucroMensal();
  }

  render() {
    const chartData = {
      labels: _.keys(this.props.lucroMensal),
      datasets: [
        {
          label: 'Lucro mensal',
          fillColor: 'rgba(151,187,205,0.2)',
          strokeColor: 'rgba(151,187,205,1)',
          pointColor: 'rgba(151,187,205,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(151,187,205,1)',
          data: _.values(this.props.lucroMensal),
        },
      ],
    };
    return (
      <Grid cols="12 12 6 6">
        <Box title="Lucro mensal" type="success">
          <ChartBar data={chartData} style={{ width: '100%' }} />
        </Box>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({ lucroMensal: state.relatorio.lucroMensal });
const mapDispatchToProps = dispatch => bindActionCreators({ obterLucroMensal }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LucroMensal);
