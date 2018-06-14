import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import { Box, Grid, ChartBar } from 'common';

import { obterListaDeBairros } from '../../relatorioActions';
import { obterCancelamentosPorBairro } from '../cancelamentosActions';

class CancelamentosPorServico extends Component {
  componentWillMount() {
    this.props.obterListaDeBairros();
  }

  componentWillUnmount() {
    this.props.obterCancelamentosPorBairro('');
  }

  render() {
    const chartData = {
      labels: _.keys(this.props.cancelamentosPorBairro),
      datasets: [
        {
          label: 'Cancelamentos por bairro',
          fillColor: 'rgba(151,187,205,0.2)',
          strokeColor: 'rgba(151,187,205,1)',
          pointColor: 'rgba(151,187,205,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(151,187,205,1)',
          data: _.values(this.props.cancelamentosPorBairro),
        },
      ],
    };

    return (
      <Grid cols="12 12 6 6">
        <Box title="Cancelamentos por bairro" type="warning">
          <ChartBar data={chartData} style={{ width: '100%' }} />
          <select onChange={e => this.props.obterCancelamentosPorBairro(e.target.value)}>
            <option value="">Selecione um serviço</option>
            {this.props.listaBairros.map(bairro => (
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
  cancelamentosPorBairro: state.relatorio.cancelamentosPorBairro,
});
const mapDispatchToProps = dispatch => bindActionCreators({ obterListaDeBairros, obterCancelamentosPorBairro }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CancelamentosPorServico);
