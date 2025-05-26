<?if (!empty($arResult)):?>
<ul class="<?php echo e($block->mod($mods ?? [])); ?>">

<?
foreach($arResult as $arItem):
	if($arParams["MAX_LEVEL"] == 1 && $arItem["DEPTH_LEVEL"] > 1)
		continue;
?>
	<?if($arItem["SELECTED"]):?>
		<li  class="<?php echo e($block->elem('item')); ?>" ><a href="<?=$arItem["LINK"]?>" class="<?php echo e($block->elem('link')); ?>"><?=$arItem["TEXT"]?></a></li>
	<?else:?>
		<li class="<?php echo e($block->elem('item')); ?>"><a href="<?=$arItem["LINK"]?>" class="<?php echo e($block->elem('link')); ?>"><?=$arItem["TEXT"]?></a></li>
	<?endif?>

<?endforeach?>

</ul>
<?endif?>
<?php /**PATH /var/www/workspace/bitrix/www/local/templates/gn/frontend/src/block/common/menu/menu.blade.php ENDPATH**/ ?>