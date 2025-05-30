<div class="<?php echo e($block->mod($mods ?? [])); ?><?php if($class ?? false): ?> <?php echo e($class); ?><?php endif; ?>">
    <?php if(!empty($okMessage)): ?>
    <div class="<?php echo $block->elem('ok-message'); ?>" id="okMessage"><?php echo $okMessage; ?></div>
    <?php endif; ?>
    <div id='message' class="<?php echo $block->elem('error-message'); ?>"></div>
</div><?php /**PATH /var/www/workspace/bitrix/www/local/templates/gn/frontend/src/block/forms/forms-notification/forms-notification.blade.php ENDPATH**/ ?>