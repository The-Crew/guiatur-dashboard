import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Content, Box, Grid, ChartLine, Button, Icon } from 'common';
import { Table, Thead, Th, Tbody, Td, Tr } from 'common/Table';

import {
  obterQuantidadeClientes,
  obterListaAtendimentosNaoConcluidos,
  finalizarAtendimento,
  removerAtendimento,
} from './relatorioActions';

class Relatorio extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    this.props.obterQuantidadeClientes()
    this.props.obterListaAtendimentosNaoConcluidos()
  }

  render() {
    console.log(this.props.listaServicosNaoConcluidos)
    return (
      <Content
        title="Painel"
        breadcrumb={[{ name: 'Painel', path: '#/' }]}
      >
        <div className="callout callout-info">
          <h4>Quantidade de clientes ativos: {this.props.quantidadeClientes}</h4>
        </div>
        <Grid cols="12 12 12 12">
        <Box title="Serviços em aberto" type="success">
          <Table>
            <Thead>
              <Th sortingOff>Cliente</Th>
              <Th sortingOff>Serviço</Th>
              <Th sortingOff>Profissional</Th>
              <Th sortingOff>Cidade</Th>
              <Th sortingOff>Data</Th>
              <Th sortingOff>Ação</Th>
            </Thead>
            <Tbody>
              {this.props.listaServicosNaoConcluidos.map((value, key) => {
                const data = value.DataAgendado.split(' ')[0].split('-');
                return (
                  <Tr key={value.Id}>
                    <Td>{value.Cliente.Nome}</Td>
                    <Td>{value.Servico.Descricao}</Td>
                    <Td>{value.Profissional.Nome}</Td>
                    <Td>{value.Municipio.Nome}</Td>
                    <Td>{data[2] + '/' + data[1] + '/' + data[0]}</Td>
                    <Td>
                      <Button className="col-md-6" icon="check" onClick={() => this.props.finalizarAtendimento(value.Id)} />
                      <Button  className="col-md-6" icon="trash" color="danger" onClick={() => this.props.removerAtendimento(value.Id)} />
                    </Td>
                  </Tr>
                )
              })}
            </Tbody>
          </Table>
        </Box>
      </Grid>
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  cancelamentos: state.relatorio.cancelamentos,
  quantidadeClientes: state.relatorio.quantidadeClientes,
  quantidadeCancelamentosAno: state.relatorio.quantidadeCancelamentosAno,
  listaServicosNaoConcluidos: state.relatorio.listaServicosNaoConcluidos,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  obterQuantidadeClientes,
  obterListaAtendimentosNaoConcluidos,
  finalizarAtendimento,
  removerAtendimento,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Relatorio)
