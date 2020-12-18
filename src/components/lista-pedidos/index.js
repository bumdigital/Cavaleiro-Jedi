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
            <td>{item.cliente}</td>
            <td>{item.produto}</td>
            <td>R$ {item.total},00</td>
            {console.log(item)}
          </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default ListaPedidos;