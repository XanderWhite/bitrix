<div class="<?php echo $block->mod($mods ?? []); ?>">
        <?php $__currentLoopData = $arItem['VALUES']; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $val => $ar): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <div class="<?php echo $block->elem('item'); ?>">
            <label class="<?php echo $block->elem('label'); ?> <?php echo $ar['DISABLED'] ? $block->mod('disabled') : ''; ?> <?php echo $ar['CHECKED'] ? $block->mod('checked') : ''; ?>"
                data-role="label_<?php echo $ar['CONTROL_ID']; ?>"
                for="<?php echo $ar['CONTROL_ID']; ?>">

                <span class="<?php echo $block->elem('input-container'); ?>">
                    <input class="<?php echo $block->elem('input'); ?>"
                        type="checkbox"
                        value="<?php echo $ar['HTML_VALUE']; ?>"
                        name="<?php echo $ar['CONTROL_NAME']; ?>"
                        id="<?php echo $ar['CONTROL_ID']; ?>"
                        <?php echo $ar['CHECKED'] ? 'checked="checked"' : ''; ?>

                        onclick="smartFilter.click(this)">

                    <span class="<?php echo $block->elem('text'); ?>" title="<?php echo $ar['VALUE']; ?>">
                        <?php echo $ar['VALUE']; ?>


                        <?php if($arParams['DISPLAY_ELEMENT_COUNT'] !== "N" && isset($ar['ELEMENT_COUNT'])): ?>
                        <span class="<?php echo $block->elem('count'); ?>" data-role="count_<?php echo $ar['CONTROL_ID']; ?>">
                            (<?php echo $ar['ELEMENT_COUNT']; ?>)
                        </span>
                        <?php endif; ?>
                    </span>
                </span>
            </label>
        </div>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
</div>
<?php /**PATH /var/www/workspace/bitrix/www/local/templates/gn/frontend/src/block/catalog/catalog-filter_checkboxes/catalog-filter_checkboxes.blade.php ENDPATH**/ ?>