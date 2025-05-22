<?
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php");
$APPLICATION->SetTitle("Главная");
?>
<section class="container" style="margin: 50px;">
    <h2><?= $APPLICATION->getTitle() ?></h2>
</section>
<? require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/footer.php"); ?>