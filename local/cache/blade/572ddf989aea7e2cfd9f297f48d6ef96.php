<div class="<?php echo e($block->mod($mods ?? [])); ?><?php if($class ?? false): ?> <?php echo e($class); ?><?php endif; ?>">
    <label class='<?php echo $block->elem("label"); ?> '>
        <span class='<?php echo e($block->elem("text")); ?>'>
            <?php echo $label; ?>

            <?php if($required): ?>
            <span class='<?php echo e($block->elem("required-mark")); ?>'>*</span>
            <?php endif; ?>
        </span>

        <input type="tel"
            class='<?php echo $block->elem("input"); ?>'
            name='<?php echo $name; ?>'
            value='<?php echo $value; ?>'
            id="user_phone">


    </label>
</div><?php /**PATH /var/www/workspace/bitrix/www/local/templates/gn/frontend/src/block/forms/forms-phone/forms-phone.blade.php ENDPATH**/ ?>