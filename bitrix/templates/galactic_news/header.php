<!DOCTYPE html>
<html lang="ru">
<head>
    <?$APPLICATION->ShowHead();?>
    <title><?$APPLICATION->ShowTitle()?></title>
    <link href="<?=SITE_TEMPLATE_PATH?>/styles.css" rel="stylesheet">
</head>
<body>
<div class="wrapper">
    	<div id="panel"><?$APPLICATION->ShowPanel();?></div>
    <header class="header">
        <h1 class="header__title">
            <a href="/" class="header__link">Галактический вестник</a>
        </h1>
    </header>
    <main class="main">