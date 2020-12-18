import {Component} from 'react';
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Formulario from './../components/formulario';
import ListaPedidos from './../components/lista-pedidos';

class Produtos extends Component{
  state = {
    produtos: [],
    pedidos: []
  }
  componentDidMount(){
    axios.get(`https://petmania.tk/api/produtos.php`)
      .then(res => {
        const produtos = res.data;
        this.setState({ produtos });
      })
    axios.get(`https://petmania.tk/api/pedidos.php`)
      .then(res => {
        const pedidos = res.data;
        this.setState({ pedidos });
      })
  }
  render(){
    return(
      <Container className="py-5">
        <h1 className="py-5 text-success text-center">Pedidos</h1>
        <Row>
          <Col>
            <Formulario data={this.state.produtos}/>
            <ListaPedidos lista={this.state.pedidos}/>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Produtos;