<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

\TAO::frontendCss('index');
\TAO::frontendJs('index');
?>

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
	<title><? $APPLICATION->ShowTitle(); ?> </title>

</head>

<body>
	<? $APPLICATION->ShowPanel(); ?>

	<div class="page">
		<h1 class="visually-hidden">Галактический
			вестник</h1>


		<? ob_start();
		$APPLICATION->IncludeComponent(
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
		);

		$logo = ob_get_clean();

		ob_start();
		$APPLICATION->IncludeComponent(
			"bitrix:menu",
			"template123",
			array(
				"ALLOW_MULTI_SELECT" => "N",
				"CHILD_MENU_TYPE" => "left",
				"DELAY" => "N",
				"MAX_LEVEL" => "1",
				"MENU_CACHE_GET_VARS" => array(0 => "",),
				"MENU_CACHE_TIME" => "3600",
				"MENU_CACHE_TYPE" => "N",
				"MENU_CACHE_USE_GROUPS" => "Y",
				"ROOT_MENU_TYPE" => "top",
				"USE_EXT" => "N"
			)
		);
		$menuTop = ob_get_clean();

		ob_start();
		$APPLICATION->IncludeComponent(
			"bitrix:menu",
			"template123",
			array(
				"ALLOW_MULTI_SELECT" => "N",
				"CHILD_MENU_TYPE" => "left",
				"DELAY" => "N",
				"MAX_LEVEL" => "1",
				"MENU_CACHE_GET_VARS" => array(""),
				"MENU_CACHE_TIME" => "3600",
				"MENU_CACHE_TYPE" => "N",
				"MENU_CACHE_USE_GROUPS" => "Y",
				"ROOT_MENU_TYPE" => "left",
				"USE_EXT" => "Y"
			)
		);
		$menuLeft = ob_get_clean();

		ob_start();
		$APPLICATION->IncludeComponent(
			"bitrix:system.auth.form",
			"auth.form",
			array(
				"FORGOT_PASSWORD_URL" => "",
				"PROFILE_URL" => "",
				"REGISTER_URL" => "/login/index.php",
				"SHOW_ERRORS" => "N",
				"COMPONENT_TEMPLATE" => "auth.form"
			),
			false
		);
		$auth = ob_get_clean();

		echo \TAO::frontend()->renderBlock(
			'common/header',
			[
				'logo' => $logo,
				'menuTop' => $menuTop,
				'menuLeft' => $menuLeft,
				'auth' => $auth,
				'class' => 'container'
			]
		); ?>