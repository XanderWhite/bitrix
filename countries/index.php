<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Страны");
?><h2><?=$APPLICATION->getTitle()?><?$APPLICATION->IncludeComponent(
	"ns:country.list",
	".default",
	array(
		"CACHE_TIME" => "3600",
		"CACHE_TYPE" => "A",
		"COMPONENT_TEMPLATE" => ".default",
		"IBLOCK_ID" => "6"
	),
	false
);?></h2><?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>