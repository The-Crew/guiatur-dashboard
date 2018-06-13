import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import { Box, Grid, ChartBar } from 'common';

import { obterListaDeServico } from '../../relatorioActions';
import { obterLucroMensalPorServico } from '../gastosActions';

class LucroMensalPorServico extends Component {
  componentWillMount() {
    if (this.props.listaServicos.length <= 0) this.props.obterListaDeServico();
  }

  render() {
    const chartData = {
      labels: _.keys(this.props.lucroMensalPorServico),
      datasets: [
        {
          label: 'Lucro mensal por serviço',
          fillColor: 'rgba(151,187,205,0.2)',
          strokeColor: 'rgba(151,187,205,1)',
          pointColor: 'rgba(151,187,205,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(151,187,205,1)',
          data: _.values(this.props.lucroMensalPorServico),
        },
      ],
    };

    return (
      <Grid cols="12 12 6 6">
        <Box title="Lucro mensal por serviço" type="success">
          <ChartBar data={chartData} style={{ width: '100%' }} />
          <select onChange={e => this.props.obterLucroMensalPorServico(e.target.value)}>
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
  lucroMensalPorServico: state.relatorio.lucroMensalPorServico,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  obterListaDeServico,
  obterLucroMensalPorServico,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LucroMensalPorServico);
