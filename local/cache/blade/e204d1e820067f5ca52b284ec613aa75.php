<header class="<?php echo e($block->mod($mods ?? [])); ?><?php if($class ?? false): ?> <?php echo e($class); ?><?php endif; ?>">
    <div class="<?php echo e($block->elem('inner')); ?>">

        <?php echo $logo; ?>


        <div class="<?php echo e($block->elem('menu')); ?>">
            <?php echo $menuTop; ?>

            <?php echo $menuLeft; ?>

        </div>

        <div class="<?php echo e($block->elem('auth')); ?>">
            <?php echo $auth; ?>

        </div>
    </div>
</header><?php /**PATH /var/www/workspace/bitrix/www/local/templates/gn/frontend/src/block/common/header/header.blade.php ENDPATH**/ ?>