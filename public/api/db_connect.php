<?php
    header("Access-Control-Allow-Origin:*");
    
    $servidor = "localhost";
    $usuario = "root";
    $senha = "";
    $banco = "amigaopet";

    $tabela = $_GET['table'];

    $connect = mysqli_connect($servidor, $usuario, $senha, $banco);

    if (!$connect) {
        die("A conexão ao BD falhou: " . mysqli_connect_error());
    }

    setlocale(LC_MONETARY, 'pt-BR');

    $sql = "select * from $tabela";
    $resultado = $connect->query($sql);
    
    print_r(json_encode($resultado->fetch_all(MYSQLI_ASSOC)));

    mysqli_close($connect);
    
?>