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

            $nome = $_POST['nome'];
            $endereço = $_POST['endereço'];
            $telefone = $_POST['telefone'];
            $produto = $_POST['produto'];
            $quantidade = $_POST['quantidade'];
            $total = $_POST['total'];
            $sql = "INSERT INTO pedidos (
                nome,
                endereço,
                telefone,
                produto,
                quantidade,
                total
                ) VALUES (
                    '$nome',
                    '$endereço',
                    '$telefone',
                    '$produto',
                    '$quantidade',
                    '$total'
                    )";
            if ($conn->query($sql) === TRUE) {
                echo "Pedido registrado com sucesso!";
            } else {
                echo "Erro: " . $sql . "<br>" . $conn->error;
            }

//echo "<script type='text/javascript'>window.top.location='https://francinelio.github.io/petmania';</script>";
exit;