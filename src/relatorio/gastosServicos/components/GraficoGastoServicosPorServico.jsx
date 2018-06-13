import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import { Box, Grid, ChartBar } from 'common';

import { obterListaDeServico } from '../../relatorioActions';
import { obterGastoServicosPorServico } from '../gastosActions';

class GastosPorServico extends Component {
  componentWillMount() {
    if (this.props.listaServicos.length <= 0) this.props.obterListaDeServico();
  }

  componentWillUnmount() {
    this.props.obterGastoServicosPorServico('');
  }

  render() {
    const chartData = {
      labels: _.keys(this.props.gastosServicosPorServico),
      datasets: [
        {
          label: 'Gastos com serviço por serviço',
          fillColor: 'rgba(151,187,205,0.2)',
          strokeColor: 'rgba(151,187,205,1)',
          pointColor: 'rgba(151,187,205,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(151,187,205,1)',
          data: _.values(this.props.gastosServicosPorServico),
        },
      ],
    };

    return (
      <Grid cols="12 12 6 6">
        <Box title="Gastos com serviço por serviço" type="danger">
          <ChartBar data={chartData} style={{ width: '100%' }} />
          <select onChange={e => this.props.obterGastoServicosPorServico(e.target.value)}>
            <option value="">Selecione um serviço</option>
            {this.props.listaServicos.map(servico => (
              <option key={servico.Id} value={servico.Id}>
                {servico.Descricao}
              </option>
            ))}
          </select>
        </Box>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  listaServicos: state.relatorio.listaServicos,
  gastosServicosPorServico: state.relatorio.gastosServicosPorServico,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  obterListaDeServico,
  obterGastoServicosPorServico,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GastosPorServico);
