import React from 'react';
import _ from 'lodash';

import { Box, Grid, ChartBar } from 'common';

export default (props) => {
  const chartData = {
    labels: _.keys(props.data),
    datasets: [
      {
        label: 'Satisfação por profissional',
        fillColor: "rgba(151,187,205,0.2)",
        strokeColor: "rgba(151,187,205,1)",
        pointColor: "rgba(151,187,205,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(151,187,205,1)",
        data: _.values(props.data),
      }
    ],
  };
  return (
    <Grid cols="12 12 6 6">
      <Box title="Satisfação por profissional" type="success">
        <ChartBar data={chartData} style={{ width: '100%' }} />
      </Box>
    </Grid>
  )
};
