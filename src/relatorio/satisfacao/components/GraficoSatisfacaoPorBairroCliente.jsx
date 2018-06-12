import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import { Box, Grid, ChartBar } from 'common';

import { obterSatisfacaoPorBairroCliente } from '../satisfacaoActions';

class SatisfacaoPorBairroCliente extends Component {
  render() {
    const chartData = {
      labels: _.keys(this.props.satisfacaoPorBairroCliente),
      datasets: [
        {
          label: 'Satisfação por bairro cliente',
          fillColor: 'rgba(151,187,205,0.2)',
          strokeColor: 'rgba(151,187,205,1)',
          pointColor: 'rgba(151,187,205,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(151,187,205,1)',
          data: _.values(this.props.satisfacaoPorBairroCliente),
        },
      ],
    };

    return (
      <Grid cols="12 12 6 6">
        <Box title="Satisfação por bairro cliente">
          <ChartBar data={chartData} style={{ width: '100%' }} />
          <select onChange={(e) => this.props.obterSatisfacaoPorBairroCliente(e.target.value)}>
            <option value="">Selecione um bairro</option>
            {this.props.listaBairros.map(bairro =>  (
              <option key={bairro.Descricao} value={bairro.Descricao}>
                {bairro.Descricao}
              </option>
            ))}
          </select>
        </Box>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  listaBairros: state.relatorio.listaBairros,
  satisfacaoPorBairroCliente: state.relatorio.satisfacaoPorBairroCliente,
});

const mapDispatchToProps = dispatch => bindActionCreators({ obterSatisfacaoPorBairroCliente }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SatisfacaoPorBairroCliente);
