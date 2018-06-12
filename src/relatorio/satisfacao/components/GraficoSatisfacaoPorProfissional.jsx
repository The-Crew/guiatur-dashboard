import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import { Box, Grid, ChartBar } from 'common';

import { obterListaDeProfissionais } from '../../relatorioActions';
import { obterSatisfacaoPorProfissional } from '../satisfacaoActions';

class SatisfacaoPorProfissional extends Component {
  componentWillMount() {
    this.props.obterListaDeProfissionais();
  }

  render() {
    const chartData = {
      labels: _.keys(this.props.satisfacaoPorProfissional),
      datasets: [
        {
          label: 'Satisfação por profissional',
          fillColor: 'rgba(151,187,205,0.2)',
          strokeColor: 'rgba(151,187,205,1)',
          pointColor: 'rgba(151,187,205,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(151,187,205,1)',
          data: _.values(this.props.satisfacaoPorProfissional),
        },
      ],
    };

    return (
      <Grid cols="12 12 6 6">
        <Box title="Satisfação por profissional">
          <ChartBar data={chartData} style={{ width: '100%' }} />
          <select onChange={(e) => this.props.obterSatisfacaoPorProfissional(e.target.value)}>
            <option value="">Selecione um profissional</option>
            {this.props.listaProfissionais.map(profissional => (
              <option key={profissional.Id} value={profissional.Id}>
                {profissional.Nome}
              </option>
            ))}
          </select>
        </Box>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  listaProfissionais: state.relatorio.listaProfissionais,
  satisfacaoPorProfissional: state.relatorio.satisfacaoPorProfissional,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  obterListaDeProfissionais,
  obterSatisfacaoPorProfissional,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SatisfacaoPorProfissional);
