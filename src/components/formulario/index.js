import {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class Formulario extends Component{
  render(){
    return(
      <Form method="post" action="http://localhost/Cavaleiro-Jedi/public/api/pedido.php">
        <Form.Row className="d-flex justify-content-center">
          <Col className="py-1" xs={12} sm={6} md={4} lg={2}>
            <Form.Control placeholder="Cliente" name="nome_do_cliente" />
          </Col>
          <Col className="py-1" xs={12} sm={6} md={4} lg={2}>
            <Form.Control placeholder="Endereço" name="endereco" />
          </Col>
          <Col className="py-1" xs={12} sm={6} md={4} lg={2}>
            <Form.Control placeholder="Telefone" name="telefone" />
          </Col>
          <Col className="py-1" xs={12} sm={6} md={4} lg={2}>
            <Form.Control as="select" name="id_do_produto">
              <option value="0">Produto</option>
              {this.props.data.map((produto, index) => <option key={index} value={produto.id}>{produto.categoria}</option>)}
          </Form.Control>
        </Col>
          <Col className="py-1" xs={12} sm={6} md={4} lg={1}>
            <Form.Control placeholder="Valor" name="valor_unitario" />
          </Col>
          <Col className="py-1" xs={12} sm={6} md={4} lg={1}>
            <Form.Control placeholder="Quantidade" name="quantidade" />
          </Col>
          <Col className="py-1" xs={12} sm={6} md={4} lg={1}>
            <Form.Control placeholder="Total" name="valor_total" />
          </Col>
          <Button xs={12} sm={6} md={4} lg={2} variant="success" type="submit">Enviar</Button>
      </Form.Row>
      </Form>
    );
  }
}

export default Formulario;