<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>

<?
echo \TAO::frontend()->renderBlock(
	'news/news-lastnews',
	['newslist' => $arResult["LAST-NEWS"]]
); ?>
