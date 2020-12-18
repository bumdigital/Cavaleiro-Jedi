import {Component} from 'react';
import Table from 'react-bootstrap/Table';

class ListaPedidos extends Component{
  render(){
    return(
      <Table className="my-5" striped bordered hover>
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Produto</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {this.props.lista.map((item, index) => (
          <tr key={index}>
            <td>{item.nome_do_cliente}</td>
            <td>{item.descricao}</td>
            <td>R$ {item.valor_total},00</td>
            {console.log(item)}
          </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default ListaPedidos;