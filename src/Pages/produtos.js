import {useState, useEffect} from 'react';

import Produto from '../components/produto';
import {Container, Row} from 'react-bootstrap';

export default function Produtos() {

    const [Produtos, setProdutos] = useState([]);

    

    useEffect(() => {
        async function fetchData() {
            const resposta = await fetch("http://localhost/Cavaleiro-Jedi/public/api/db_connect.php?table=produto")
            const dados = await resposta.json()
            setProdutos(dados);
        }
        fetchData();
    }, []);

    return (
        <Container>
            <Row>
                {Produtos && Produtos.map(item => <Produto key={item.idproduto} imagem={item.imagem} nome={item.categoria}
                preco={item.preco} categoria={item.descricao} precofinal={item.precofinal}/>)}
            </Row>
        </Container>
    )
}