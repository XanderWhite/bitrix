<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>

<section class="news-section container">
    <?
    echo \TAO::frontend()->renderBlock(
        'news/news-list-title',
        [
            'title' => $APPLICATION->getTitle(),
        ]
    );

    echo \TAO::frontend()->renderBlock(
        'news/news-list',
        [
            'newsList' => $arResult["ITEMS"],
        ]
    );
    ?>

    <? if ($arParams["DISPLAY_BOTTOM_PAGER"]): ?>
        <br /><?= $arResult["NAV_STRING"] ?>
    <? endif; ?>


</section>