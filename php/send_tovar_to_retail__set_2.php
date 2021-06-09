<?php
header("Content-Type: text/html; charset=utf-8");

$name = $_POST['order_form_name'];
$phone = $_POST['order_form_phone'];

$crmDomain = 'https://instagram234.retailcrm.ru';
$crmKey = 'zmb0tit05anQvNRrBgj1MvJpA1sEAgsE';

$product_id = $_POST['product'];
$product_2_id= $_POST['product_1'];
$product_price= $_POST['popup_price'];


$postData = http_build_query(array(
    'order' => json_encode(array(
        'firstName' => $name,
        'phone' => $phone,
        'orderMethod' => 'zaiavka-s-saita-luuk-by',
				'status' => 'new',
        'managerComment' => "Заявка с сайта luuk.by",
				'customFields' => array(
					'type_sale' => 1,
			),
			
        'items' => array(
            array(
                'initialPrice' => $product_price,
                'offer' => array(
                    'externalId' => $product_id,
								),
            ),
            array(
                'initialPrice' => 0,
                'offer' => array(
                    'externalId' => $product_2_id,
								),
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
$title = "Заявка с сайта luuk.by";

$text = "
Информация о покупателе:

Имя: ".$_POST['order_form_name']."
Телефон: ".$_POST['order_form_phone']."
Время заказа: ".date("Y-m-d H:i:s");

if(mail($email, $title, $text)) {
  header('Location: ./../good.html');
} else {
  echo "Ошибка.";
}
?>