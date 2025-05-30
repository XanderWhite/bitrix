<?
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php");
$APPLICATION->SetTitle("О нас");
?>
<script src="https://api-maps.yandex.ru/v3/?apikey=e4c4d8d3-b215-4945-a36e-f9970329b8a1&lang=ru_RU"></script>
    <?
    echo \TAO::frontend()->renderBlock(
        'common/title',
        [
            'title' => 'О нас',
            'class' => 'container'
        ]
    );

    echo \TAO::frontend()->renderBlock(
        'common/map',
        []
    ); ?>
<? require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/footer.php"); ?>