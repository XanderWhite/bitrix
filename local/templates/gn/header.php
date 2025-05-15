<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<?
	$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH . '/assets/css/reset.css');
	$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH . '/assets/css/fonts.css');
	$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH . '/assets/css/main.css');

	?>

	<? $APPLICATION->ShowHead(); ?>
	<title><? $APPLICATION->ShowTitle(); ?></title>

</head>

<body>
	<? $APPLICATION->ShowPanel(); ?>
	<div class="page">
		<h1 class="visually-hidden">Галактический
			вестник</h1>
		<header class="header">
			<div class="header__inner container">
				<? $APPLICATION->IncludeComponent(
					"bitrix:main.include",
					".default",
					array(
						"AREA_FILE_SHOW" => "file",
						"AREA_FILE_SUFFIX" => "inc",
						"EDIT_TEMPLATE" => "",
						"PATH" => "/include/logo.php",
						"COMPONENT_TEMPLATE" => ".default"
					),
					false
				); ?>
			</div>
		</header>