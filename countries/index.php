<?
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php");

//подключаем новую сборку из src/entry
\TAO::frontendCss('form');
\TAO::frontendJs('form');

$APPLICATION->SetTitle("Страны:");
?><section class="country-section container">
 <?$APPLICATION->IncludeComponent(
	"ns:country.list", 
	".default", 
	array(
		"COMPONENT_TEMPLATE" => ".default",
		"IBLOCK_ID" => "6"
	),
	false
);?> <?$APPLICATION->IncludeComponent(
	"ns:main.feedback", 
	".default", 
	array(
		"COMPONENT_TEMPLATE" => ".default",
		"EMAIL_TO" => "belov@techart.ru",
		"EVENT_MESSAGE_ID" => array(
			0 => "7",
		),
		"IBLOCK_ID" => "6",
		"OK_TEXT" => "Спасибо, ваше сообщение принято.",
		"REQUIRED_FIELDS" => array(
			0 => "NAME",
			1 => "EMAIL",
			2 => "MESSAGE",
			3 => "COUNTRY",
			4 => "PHONE",
		),
		"USE_CAPTCHA" => "N"
	),
	false
);?> </section><? require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/footer.php"); ?>