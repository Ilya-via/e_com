<?php
header("Content-Type: text/html; charset=utf-8");

$name = $_POST['name'];
$phone = $_POST['phone'];
$emaildata = $_POST['email'];
$phone = $_POST['phone'];

$email = "Ed.baranovskiy@mail.ru"; 
$title = "Связь с директором";

$text = "
Обращение клиента:

Имя: ".$_POST['name']."
Телефон: ".$_POST['phone']."
Почта: ".$_POST['email']."
Обращение: ".$_POST['obr']."

";

mail($email, $title, $text);

if(mail($email, $title, $text)) {
    header('Location: https://luuk.by');
} else {
    echo "Ошибка.";
}

?>