import React, { Component } from 'react';

import { Content, Box, Grid, ChartLine } from 'common';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const chartData = {
    	labels: ["Janeiro", "Fervereiro", "Março", "Abril", "Maio", "Junho", "Julho"],
    	datasets: [
    		{
    			label: 'Cancelamentos',
    			fillColor: "rgba(151,187,205,0.2)",
    			strokeColor: "rgba(151,187,205,1)",
    			pointColor: "rgba(151,187,205,1)",
    			pointStrokeColor: "#fff",
    			pointHighlightFill: "#fff",
    			pointHighlightStroke: "rgba(151,187,205,1)",
    			data: [28, 48, 40, 19, 86, 27, 90]
    		}
    	],
    };
    return (
      <Content
        title="Relatório"
        breadcrumb={[{ name: 'Relatório', path: '#/' }]}
      >
        <Grid cols="12 12 6 6">
          <Box title="Cancelamentos" type="danger">
            <ChartLine data={chartData} style={{ width: '100%' }} />
          </Box>
        </Grid>
        <Grid cols="12 12 6 6">
          <Box title="Gastos com servicos" type="warning">
            <ChartLine data={chartData} style={{ width: '100%' }} />
          </Box>
        </Grid>
        <Grid cols="12 12 6 6">
          <Box title="Faturamento">
            <ChartLine data={chartData} style={{ width: '100%' }} />
          </Box>
        </Grid>
        <Grid cols="12 12 6 6">
          <Box title="Lucro mensal" type="success">
            <ChartLine data={chartData} style={{ width: '100%' }} />
          </Box>
        </Grid>
      </Content>
    );
  }
}
