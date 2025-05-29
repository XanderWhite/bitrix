<div class="<?php echo e($block->mod($mods ?? [])); ?><?php if($class ?? false): ?> <?php echo e($class); ?><?php endif; ?>">
    <label class='<?php echo $block->elem("label"); ?>'>
        <input type="checkbox"
            class='<?php echo $block->elem("checkbox"); ?>'
            name="<?php echo $name; ?>"
            value="Y"
            <?php if($checked): ?> checked <?php endif; ?>
            <?php if($required): ?> required <?php endif; ?>>
        <?php echo $text; ?>

        <?php if($required): ?>
        <span class='<?php echo e($block->elem("required-mark")); ?>'>*</span>
        <?php endif; ?>
    </label>
</div><?php /**PATH /var/www/workspace/bitrix/www/local/templates/gn/frontend/src/block/forms/forms-checkbox/forms-checkbox.blade.php ENDPATH**/ ?>