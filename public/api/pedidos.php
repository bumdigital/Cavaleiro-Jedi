<?php

 header("Access-Control-Allow-Origin: *");

 $servidor = "localhost";
 $usuario = "root";
 $senha = "";
 $banco = "amigaopet";

// Create connection
$conn =  new mysqli($servidor, $usuario, $senha, $banco);
$conn->query("set names utf8");

// Check connection
if ($conn->connect_error) {
    die("A conexao com o banco de dados falhou. Erro: " . $conn->connect_error);
}

$sql = "SELECT produto.descricao, pedidos.id_do_produto, pedidos.nome_do_cliente, pedidos.valor_total
        FROM produto
        INNER JOIN pedidos
        ON produto.idproduto";
$result = $conn->query($sql);
echo json_encode($result->fetch_all(MYSQLI_ASSOC));

$conn->close();