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
    die("A conexão com o banco de dados falhou. Erro: " . $conn->connect_error);
}

    $nome = $_POST['nome_do_cliente'];
    $endereço = $_POST['endereco'];
    $telefone = $_POST['telefone'];
    $produto = $_POST['id_do_produto'];
    $valor = $_POST['valor_unitario'];
    $quantidade = $_POST['quantidade'];
    $total = $_POST['valor_total'];
    $sql = "INSERT INTO pedidos (
        nome_do_cliente,
        endereco,
        telefone,
        id_do_produto,
        valor_unitario,
        quantidade,
        valor_total
        ) VALUES (
            '$nome',
            '$endereço',
            '$telefone',
            '$produto',
            '$valor',
            '$quantidade',
            '$total'
            )";
            if ($conn->query($sql) === TRUE) {
                echo "Pedido registrado com sucesso!";
            } else {
                echo "Erro: " . $sql . "<br>" . $conn->error;
            }
exit;