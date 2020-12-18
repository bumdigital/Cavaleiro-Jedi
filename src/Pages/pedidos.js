import {Component} from 'react';
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Formulario from './../components/formulario';
import ListaPedidos from './../components/lista-pedidos';

class Produtos extends Component{
  state = {
    produto: [],
    pedidos: []
  }
  componentDidMount(){
    axios.get(`http://localhost/Cavaleiro-Jedi/public/api/produtos.php`)
      .then(res => {
        const produto = res.data;
        this.setState({ produto });
      })
    axios.get(`http://localhost/Cavaleiro-Jedi/public/api/pedidos.php`)
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
            <Formulario data={this.state.produto}/>
            <ListaPedidos lista={this.state.pedidos}/>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Produtos;