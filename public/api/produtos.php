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

$sql = " SELECT * FROM produto ";
$result = $conn->query($sql);
echo json_encode($result->fetch_all(MYSQLI_ASSOC));

$conn->close();