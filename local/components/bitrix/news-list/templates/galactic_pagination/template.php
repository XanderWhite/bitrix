<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>

<?if($arResult["NavPageCount"] > 1):?>
    <div class="pagination">
        <?if($arResult["NavPageNomer"] > 1):?>
            <a href="<?=$arResult["sUrlPath"]?>?<?=$strNavQueryString?>PAGEN_<?=$arResult["NavNum"]?>=<?=($arResult["NavPageNomer"]-1)?>" class="pagination__item">&larr;</a>
        <?endif;?>

        <?while($arResult["nStartPage"] <= $arResult["nEndPage"]):?>
            <?if($arResult["nStartPage"] == $arResult["NavPageNomer"]):?>
                <span class="pagination__item active"><?=$arResult["nStartPage"]?></span>
            <?else:?>
                <a href="<?=$arResult["sUrlPath"]?>?<?=$strNavQueryString?>PAGEN_<?=$arResult["NavNum"]?>=<?=$arResult["nStartPage"]?>" class="pagination__item"><?=$arResult["nStartPage"]?></a>
            <?endif;?>
            <?$arResult["nStartPage"]++?>
        <?endwhile;?>

        <?if($arResult["NavPageNomer"] < $arResult["NavPageCount"]):?>
            <a href="<?=$arResult["sUrlPath"]?>?<?=$strNavQueryString?>PAGEN_<?=$arResult["NavNum"]?>=<?=($arResult["NavPageNomer"]+1)?>" class="pagination__item">&rarr;</a>
        <?endif;?>
    </div>
<?endif;?>