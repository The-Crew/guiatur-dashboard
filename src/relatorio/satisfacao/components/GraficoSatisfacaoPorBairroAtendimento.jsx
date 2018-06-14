import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import { Box, Grid, ChartBar } from 'common';

import { obterListaDeBairros } from '../../relatorioActions';
import { obterSatisfacaoPorBairroAtendimento } from '../satisfacaoActions';

class SatisfacaoPorBairroAtendimento extends Component {
  componentWillMount() {
    this.props.obterListaDeBairros();
  }

  componentWillUnmount() {
    this.props.obterSatisfacaoPorBairroAtendimento('');
  }

  render() {
    const chartData = {
      labels: _.keys(this.props.satisfacaoPorBairroAtendimento),
      datasets: [
        {
          label: 'Satisfação por bairro',
          fillColor: 'rgba(151,187,205,0.2)',
          strokeColor: 'rgba(151,187,205,1)',
          pointColor: 'rgba(151,187,205,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(151,187,205,1)',
          data: _.values(this.props.satisfacaoPorBairroAtendimento),
        },
      ],
    };

    return (
      <Grid cols="12 12 6 6">
        <Box title="Satisfação por bairro">
          <ChartBar data={chartData} style={{ width: '100%' }} />
          <select onChange={(e) => this.props.obterSatisfacaoPorBairroAtendimento(e.target.value)}>
            <option value="">Selecione um bairro</option>
            {this.props.listaBairros.map(bairro =>  (
              <option key={bairro.Bairro} value={bairro.Bairro}>
                {bairro.Bairro}
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
  satisfacaoPorBairroAtendimento: state.relatorio.satisfacaoPorBairroAtendimento,
});

const mapDispatchToProps = dispatch => bindActionCreators({ obterListaDeBairros, obterSatisfacaoPorBairroAtendimento }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SatisfacaoPorBairroAtendimento);
