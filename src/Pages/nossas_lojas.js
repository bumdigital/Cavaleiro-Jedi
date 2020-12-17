import {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Lojas extends Component{
  render(){
    return(
      <>
        <Container className="py-5">
          <h1 className="py-5 text-success text-center">Nossas Lojas</h1>
          <Row className="d-flex justify-content-around">
            <Col className="my-3" xs={12} sm={6} md={4}>
                <h3>São Paulo - SP</h3>
                <p>Avenida sabre de luz, 1000</p>
                <p>13 &ordm; andar</p>
                <p>Centro</p>
                <p>(11) 9999-9999</p>
            </Col>
            <Col className="my-3" xs={12} sm={6} md={4}>
                <h3>Barueri - SP</h3>
                <p>Avenida Milenium Falcon, 300</p>
                <p>17 &ordm; andar</p>
                <p>Centro</p>
                <p>(11) 9999-9999</p>
            </Col>
            <Col className="my-3" xs={12} sm={6} md={4}>
                <h3>Osasco - SP</h3>
                <p>Avenida Uma nova esperança, 500</p>
                <p>66 &ordm; andar</p>
                <p>Centro</p>
                <p>(11) 9999-9999</p>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default Lojas;
