<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>
<div class="latest-news">
    <?if($arParams["DISPLAY_PICTURE"]!="N" && is_array($arResult["ITEMS"][0]["PREVIEW_PICTURE"])):?>
        <img
            src="<?=$arResult["ITEMS"][0]["PREVIEW_PICTURE"]["SRC"]?>"
            alt="<?=$arResult["ITEMS"][0]["PREVIEW_PICTURE"]["ALT"]?>"
            class="latest-news__bg"
        >
    <?endif;?>

    <div class="latest-news__content">
        <h2 class="latest-news__title"><?=$arResult["ITEMS"][0]["NAME"]?></h2>
        <p class="latest-news__preview"><?=$arResult["ITEMS"][0]["PREVIEW_TEXT"]?></p>
    </div>
</div>