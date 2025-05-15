<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>
<div class="news-list">
    <?foreach($arResult["ITEMS"] as $arItem):?>
        <div class="news-item">
            <h3 class="news-item__title"><?=$arItem["NAME"]?></h3>
            <p class="news-item__preview"><?=$arItem["PREVIEW_TEXT"]?></p>
            <a href="<?=$arItem["DETAIL_PAGE_URL"]?>" class="news-item__link">Подробнее</a>
            <?=$arItem["DETAIL_PAGE_URL"]?>
        </div>
    <?endforeach;?>
</div>
<?=$arResult["NAV_STRING"]?>