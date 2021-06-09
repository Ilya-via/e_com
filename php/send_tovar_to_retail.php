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
    $product_price = 99.99;
    // $product_method = 'otsale';
}
elseif($product == 'avto_pilesos_1') {
    $product_id = "avto_pilesos";
    $product_price = 29.99;
}
elseif($product == 'smar_band_6_1') {
    $product_id = "smar_band_6";
    $product_price = 44.90;
}
elseif($product == 'airbuds_blr_1') {
    $product_id = "airbuds_blr";
    $product_price = 44.90;
}
elseif($product == 'apple_watch_1') {
    $product_id = "apple_watch";
    $product_price = 99.99;
}
elseif($product == 'trimmer_1') {
    $product_id = "garden_trimmer";
    $product_price = 49.99;
}
elseif($product == 'air_pods') {
    $product_id = "air_pods_pro_1";
    $product_price = 99;
}
elseif($product == 'gamak_mexico') {
    $product_id = "gamak";
    $product_price = 54.99;
}
elseif($product == 'odeyalo_1') {
    $product_id = "odeyalo_2_pillows";
    $product_price = 129.99;
}
elseif($product == 'svabra_samo') {
    $product_id = "izi_brizi";
    $product_price = 129.99;
}
elseif($product == 'clean_sr') {
    $product_id = "vcleanspot";
    $product_price = 129.99;
}
elseif($product == 'svabra_rasp') {
    $product_id = "freinberger";
    $product_price = 129.99;
}
elseif($product == 'conditioner_1') {
    $product_id = "cond_arctic_air";
    $product_price = 129.99;
}
elseif($product == 'nochnik_nebo_1') {
    $product_id = "nochnik_nebo";
    $product_price = 29.99;
}
elseif($product == 'pillow_grecha_1') {
    $product_id = "pillow_grecha";
    $product_price = 29.99;
}
elseif($product == 'disco_ball_1') {
    $product_id = "disco_ball";
    $product_price = 34.99;
}
elseif($product == 'podstavki_1') {
    $product_id = "podstavki";
    $product_price = 34.99;
}
elseif($product == 'renumax_neo_1') {
    $product_id = "renumax_neo";
    $product_price = 29.99;
}
elseif($product == 'neon_nipeli_1') {
    $product_id = "neon_nipeli";
    $product_price = 29.99;
}
elseif($product == 'derjatel_1') {
    $product_id = "derjatel";
    $product_price = 59.99;
}
elseif($product == 'parnik_exp_1') {
    $product_id = "parnik_exp";
    $product_price = 79.99;
}
elseif($product == 'rolleri_1') {
    $product_id = "rolleri";
    $product_price = 79.99;
}
elseif($product == 'tornadika_blr_1') {
    $product_id = "tornadika_blr";
    $product_price = 59.99;
}
elseif($product == 'ever_brait_blr_1') {
    $product_id = "ever_brait_blr";
    $product_price = 19.99;
}
elseif($product == 'lamzak_1_1') {
    $product_id = "lamzak_1";
    $product_price = 19.99;
}
elseif($product == 'dozator_minon_1') {
    $product_id = "dozator_minon";
    $product_price = 29.99;
}
elseif($product == 'kapsula_zont_1') {
    $product_id = "kapsula_zont";
    $product_price = 34.99;
}
elseif($product == 'kovriv_aqua_1') {
    $product_id = "kovriv_aqua";
    $product_price = 29.99;
}
elseif($product == 'magnit_res_1') {
    $product_id = "magnit_res";
    $product_price = 19.99;
}
elseif($product == 'mask_black_head_1') {
    $product_id = "mask_black_head";
    $product_price = 24.99;
}
elseif($product == 'taipi_1') {
	$product_id = "taipi";
	$product_price = 19.99;
}
elseif($product == 'dermacol_1') {
	$product_id = "dermacol";
	$product_price = 19.99;
}
elseif($product == 'lifting_mask_1') {
	$product_id = "lifting_mask";
	$product_price = 24.99;
}
elseif($product == '4d_podvodka_1') {
	$product_id = "4d_podvodka";
	$product_price = 14.99;
}
elseif($product == '4d_tush_blr_1') {
	$product_id = "4d_tush_blr";
	$product_price = 29.99;
}
elseif($product == 'makeup_brushes_1') {
	$product_id = "makeup_brushes";
	$product_price = 15.00;
}
elseif($product == 'linzi_1') {
	$product_id = "linzi";
	$product_price = 15.00;
}
elseif($product == 'viniri_1') {
	$product_id = "viniri";
	$product_price = 39.99;
}
elseif($product == 'mask_hair_1') {
	$product_id = "mask_hair";
	$product_price = 25.99;
}
elseif($product == 'kolgotki_fe_1') {
	$product_id = "kolgotki_fe";
	$product_price = 19.99;
}
elseif($product == 'stabl_bird_blr_1') {
	$product_id = "stabl_bird_blr";
	$product_price = 49.99;
}
elseif($product == 'market_tt_1') {
	$product_id = "market_tt";
	$product_price = 19.99;
}
elseif($product == 'massage_pistolet_1') {
	$product_id = "massage_pistolet";
	$product_price = 64.99;
}
elseif($product == 'magniniy_korrektor_osanki_blr_1') {
	$product_id = "magniniy_korrektor_osanki_blr";
	$product_price = 29.99;
}
elseif($product == 'plasiteyad_1') {
	$product_id = "plasiteyad";
	$product_price = 9.90;
}
elseif($product == 'kombidress_blr_1') {
	$product_id = "kombidress_blr";
	$product_price = 29.99;
}
elseif($product == 'ostio_1') {
	$product_id = "ostio";
	$product_price = 29.99;
}
elseif($product == 'set_of_pots_2_1') {
	$product_id = "set_of_pots_2";
	$product_price = 29.99;
}
elseif($product == 'veg_cutter_blr_1') {
	$product_id = "veg_cutter_blr";
	$product_price = 34.90;
}
elseif($product == 'knife_set_1') {
	$product_id = "knife_set";
	$product_price = 39.99;
}
elseif($product == 'geizer_1') {
	$product_id = "geizer";
	$product_price = 19.99;
}
elseif($product == 'manual_juicer_1') {
	$product_id = "manual_juicer";
	$product_price = 34.90;
}
elseif($product == 'manual_mixer_1') {
	$product_id = "manual_mixer";
	$product_price = 19.99;
}
elseif($product == 'kormushka_1') {
	$product_id = "kormushka";
	$product_price = 29.99;
}
elseif($product == 'clipper_blr_1') {
	$product_id = "clipper_blr";
	$product_price = 59.99;
}
elseif($product == 'animal_ottoman_1') {
	$product_id = "animal_ottoman";
	$product_price = 59.99;
}









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