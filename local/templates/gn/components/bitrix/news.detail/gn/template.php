<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>

<section class="news-detail-section container">
    <?
    echo \TAO::frontend()->renderBlock(
        'news-detail/news-detail-header',
        [
            'title' => $APPLICATION->getTitle(),
            'id' =>  $arResult['ID'],
        ]
    );

    echo \TAO::frontend()->renderBlock(
        'news-detail/news-detail-content',
        $arResult['CONTENT']
    );
    ?>
</section>