<?php
header("Content-Type: text/html; charset=utf-8");

$name = $_POST['order_form_name'];
$phone = $_POST['order_form_phone'];

$crmDomain = 'https://instagram234.retailcrm.ru';
$crmKey = 'zmb0tit05anQvNRrBgj1MvJpA1sEAgsE';

$product = $_POST['product'];
$product_id;
$product_price;
$col=$_POST['colichestvo'];
// $product_method;

if($product == 'robot_1') {
    $product_id = "clean_robot"; // робот
    $product_price = 69.99;
    // $product_method = 'otsale';
}
elseif($product == 'trimmer_1') {
    $product_id = "garden_trimmer";
    $product_price = 49.99;
}
// elseif($product == 'diode-tape') {
//     $product_id = "led_lenta_blr";
//     $product_price = 29.99;
//     $product_method = 'shopping-cart';
// }
// elseif($product == 'linzi') {
//     $product_id = "linzi";
//     $product_price = 24.99;
//     $product_method = 'shopping-cart';
// }
// elseif($product == 'lifting-mask') {
//     $product_id = "lifting_mask";
//     $product_price = 24.99;
//     $product_method = 'shopping-cart';
// }
// elseif($product == 'shnurki') {
//     $product_id = "shnirki";
//     $product_price = 19.99;
//     $product_method = 'shopping-cart';
// }
// elseif($product == 'power-belt') {
//     $product_id = "powerbelt";
//     $product_price = 34.99;
//     $product_method = 'shopping-cart';
// }
// elseif($product == 'led-auto') {
//     $product_id = "podsvetka_avto";
//     $product_price = 54.99;
//     $product_method = 'shopping-cart';
// }

$postData = http_build_query(array(
    'order' => json_encode(array(
        'firstName' => $name,
        'phone' => $phone,
        // 'orderMethod' => $product_method,
				'status' => 'new',
        'managerComment' => "Заявка с нового сайта luuk.by",
				'customFields' => array(
					'type_sales' => 3,
					
			),
			
        'items' => array(
            array(
                'initialPrice' => $product_price,
								'quantity' => $col,
                'offer' => array(
                    'externalId' => $product_id,
                )
            ),
        )
    )),
		'site' => 'www-instagram-com-luuk-by',
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
$title = "Заявка с нового сайта luuk.by";

$text = "
Информация о покупателе:

Имя: ".$_POST['name']."
Телефон: ".$_POST['phone']."
Время заказа: ".date("Y-m-d H:i:s");

if(mail($email, $title, $text)) {
  header('Location: ./../good.html');
} else {
  echo "Ошибка.";
}
?>