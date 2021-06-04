<?php
header("Content-Type: text/html; charset=utf-8");

$name = $_POST['name'];
$phone = $_POST['phone'];
$emaildata = $_POST['email'];
$comment = $_POST['comment'];

$email = "Ed.baranovskiy@mail.ru"; 
$title = "Связь с директором";

$text = "
Обращение клиента (новый главный сайт):

\nИмя: $name 
\nТелефон: $phone
\nПочта: $emaildata
\nОбращение: ".$_POST['obr']."
Комментарий: $comment
";

// mail($email, $title, $text);

if(mail($email, $title, $text)) {
    // header('Location: https://luuk.by');
    header('Location: /');
} else {
    echo "Ошибка.";
}

?>