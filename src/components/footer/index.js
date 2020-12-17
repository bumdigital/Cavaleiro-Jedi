import {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import pagamento from './formasdepagamento.png';

class Footer extends Component{
  render(){
    return(
      <footer>
        <Container className="my-5">
          <Row>
            <Col className="mx-auto text-center" sm={12} md={10} lg={8}>
              <Image src={pagamento} fluid />
            </Col>
          </Row>
        </Container>
              <div className="py-3 bg-dark text-white text-center">
                &copy; Amigão Pet
              </div>
      </footer>
    )
  }
}

export default Footer;