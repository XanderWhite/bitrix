<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>
<div class="news-list">
    <?foreach($arResult["ITEMS"] as $arItem):?>
    <div class="news-item">
        <h3><?=$arItem["NAME"]?></h3>
        <p><?=$arItem["PREVIEW_TEXT"]?></p>
        <a href="<?=$arItem["DETAIL_PAGE_URL"]?>">Подробнее</a>
    </div>
    <?endforeach;?>
</div>