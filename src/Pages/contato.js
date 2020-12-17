import {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import whatsapp from './whatsapp.jpg';
import email from './email.jpg';
import './Contato.css';

class Contato extends Component{
  render(){
    return(
      <Container className="py-5">
        <h1 className="py-5 text-success text-center">Fale Conosco</h1>
        <Row className="d-flex justify-content-center pl-md-5 ml-md-5">
          <Col xs={12} md={6} lg={4} className="my-3">
            <div className="Contato-link">
            <img className="Contato-img" src={email} alt="" />
            <a href="mailto:contato@amigaopet.com.br">contato@amigaopet.com.br</a>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4} className="my-3">
            <div className="Contato-link">
            <img className="Contato-img" src={whatsapp} alt="" />
            <a href="https://web.whatsapp.com/send?phone=+5511999999999&text=">(11) 99999-9999</a>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Contato;