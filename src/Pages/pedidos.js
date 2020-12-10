import {useState} from 'react';
import { Button, Row, Form} from 'react-bootstrap';

export default function Pedidos() {
    const [form, setForm] = useState({
        nome: "",
        endereco: "",
        fone: "",
        nome_do_produto: "",
        valor: "",
        quantidade: "",
        preco_final: ""
    });

    const controleMudanca = (evento) => {
        console.log(evento.target.value);
        setForm({
            ...form,
            [evento.target.id]: evento.target.value
        });  
    }

    const controleEnvio = async (evento) => {
        evento.preventDefault();
      
        const preco_final = parseFloat(form.valor) * parseFloat(form.quantidade);
        
        document.getElementById("preco_final").value = `R$ ${preco_final}`;

        setForm({
            ...form,
            preco_final: preco_final
        })

        const json = JSON.stringify(form);
        const opcoes = {
            crossDomain: true,
            mode: 'cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        }

        const resposta = await fetch("http://localhost/Cavaleiro-Jedi/public/api/cadastro_produto.php", opcoes);
            const dados = await resposta.json()
            console.log(dados);
    }

    return (
        <Row>
            <div className="col-lg-7 col-md-7 mx-auto">
                <Form onSubmit={controleEnvio}>
                    <h4>Fazer Pedido</h4>
                    <Form.Group>
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="nome"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Endereço:</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="endereco"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Telefone:</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="fone"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Tipo do amigao:</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="nome_do_produto"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Valor:</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="valor"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Quantidade:</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="quantidade"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Preço final:</Form.Label>
                        <Form.Control disabled type="text" id="preco_final"/>
                    </Form.Group>
                    <Button variant="success" type="submit">Cadastrar</Button>
                        
                </Form>
            </div>
        </Row>
    );
}