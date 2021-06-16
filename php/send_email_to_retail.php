<?php

header("Content-Type: text/html; charset=utf-8");

$email = $_POST['email_footer'];
$country_id = 'BY';

$RETAIL_URL = 'https://instagram234.retailcrm.ru';
$RETAIL_API_KEY = 'ivLKeYDHvgQTt0KSqwovmfw4dWy63gO4'; 


$postData = http_build_query(array(
    'customer' => json_encode(array(
			'email' => $email,
			'externalId'=> 'sdd33',
    )),
		'site' => 'www-instagram-com-luuk-by',
    'apiKey' => $RETAIL_API_KEY,
));

$opts = array('http' =>
    array(
        'method'  => 'POST',
        'header'  => 'Content-type: application/x-www-form-urlencoded',
        'content' => $postData
    )
);

$context  = stream_context_create($opts);
$result = json_decode(
    file_get_contents(
        $RETAIL_URL . '/api/v4/customers/create', 
        false, 
        $context
    ),
    true
);

$email = "vrassrochky.by@gmail.com"; 
$title = "Форма в footer на новом сайте";

$text = "
Информация о покупателе:
email: ".$_POST['email_footer']."
Время заказа: ".date("Y-m-d H:i:s");
mail($email, $title, $text);
// if(mail($email, $title, $text)) {
// 	header('Location: /');
// } else {
// 	echo "Ошибка.";
// }
 ?>


<!-- Переадресация на главную страницу сайта, через 3 секунды -->
<!-- <script language="JavaScript" type="text/javascript">
	function changeurl() {
		eval(self.location = "/#footer");
	}
	window.setTimeout("changeurl();", 2500);
	
</script> -->


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Страница благодарности</title>

    <style>
        * {
            box-sizing: border-box;
            padding: 0;
            margin: 0;
        }

        body {
            font-family: "Courier New", Courier, monospace;
        }

        .wrap {
            height: 100vh;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        h1 {
            text-align: center;
            font-size: 45px;
        }
    </style>
</head>

<body>
    <div class="wrap">
        <h1>Спасибо за подписку, наш менеджер с вами свяжется</h1>
    </div>
</body>

</html>