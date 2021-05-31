<?php
header("Content-Type: text/html; charset=utf-8");

$name = $_POST['name'];
$phone = $_POST['phone'];

$crmDomain = 'https://instagram234.retailcrm.ru';
$crmKey = 'ivLKeYDHvgQTt0KSqwovmfw4dWy63gO4';

$product = $_POST['product'];
$product_id;
$product_price;
$product_method;

if($product == 'skatert') {
    $product_id = "gibkoe_steklo"; // гибкое стекло
    $product_price = 29.99; 
    $product_method = 'otsale';
}
elseif($product == 'play-aqua') {
    $product_id = "kovriv_aqua";
    $product_price = 27.99;
    $product_method = 'shopping-cart';
}
elseif($product == 'diode-tape') {
    $product_id = "led_lenta_blr";
    $product_price = 29.99;
    $product_method = 'shopping-cart';
}
elseif($product == 'linzi') {
    $product_id = "linzi";
    $product_price = 24.99;
    $product_method = 'shopping-cart';
}
elseif($product == 'lifting-mask') {
    $product_id = "lifting_mask";
    $product_price = 24.99;
    $product_method = 'shopping-cart';
}
elseif($product == 'shnurki') {
    $product_id = "shnirki";
    $product_price = 19.99;
    $product_method = 'shopping-cart';
}
elseif($product == 'power-belt') {
    $product_id = "powerbelt";
    $product_price = 34.99;
    $product_method = 'shopping-cart';
}
elseif($product == 'led-auto') {
    $product_id = "podsvetka_avto";
    $product_price = 54.99;
    $product_method = 'shopping-cart';
}

$postData = http_build_query(array(
    'order' => json_encode(array(
        'firstName' => $name,
        'phone' => $phone,
        'orderMethod' => $product_method,
        'managerComment' => "Заявка с сайта luuk.by",
        'items' => array(
            array(
                'initialPrice' => $product_price,
                'offer' => array(
                    'externalId' => $product_id,
                )
            ),
        )
    )),
    'apiKey' => $crmKey,
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
        $crmDomain . '/api/v4/orders/create', 
        false, 
        $context
    ),
    true
);

$email = "vrassrochky.by@gmail.com"; 
$title = "Заявка с сайта luuk.by";

$text = "
Информация о покупателе:

Имя: ".$_POST['name']."
Телефон: ".$_POST['phone']."
Время заказа: ".date("Y-m-d H:i:s");

if(mail($email, $title, $text)) {
  header('Location: good.html');
} else {
  echo "Ошибка.";
}
?>