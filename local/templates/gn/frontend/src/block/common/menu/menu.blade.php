<?if (!empty($arResult)):?>
<ul class="{{ $block->mod($mods ?? []) }}">

<?
foreach($arResult as $arItem):
	if($arParams["MAX_LEVEL"] == 1 && $arItem["DEPTH_LEVEL"] > 1)
		continue;
?>
	<?if($arItem["SELECTED"]):?>
		<li  class="{{ $block->elem('item') }}" ><a href="<?=$arItem["LINK"]?>" class="{{ $block->elem('link') }}"><?=$arItem["TEXT"]?></a></li>
	<?else:?>
		<li class="{{ $block->elem('item') }}"><a href="<?=$arItem["LINK"]?>" class="{{ $block->elem('link') }}"><?=$arItem["TEXT"]?></a></li>
	<?endif?>

<?endforeach?>

</ul>
<?endif?>
