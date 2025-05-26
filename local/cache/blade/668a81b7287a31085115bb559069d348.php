<div class="<?php echo e($block->mod($mods ?? [])); ?>" style="background: url('<?php echo $pathPic; ?>') #333 no-repeat center / cover;">

    <div class="<?php echo e($block->elem('inner')); ?> <?php if($class ?? false): ?> <?php echo e($class); ?><?php endif; ?>">
        <a class="<?php echo e($block->elem('title')); ?>" href='<?= $url ?>'><?php echo $name; ?></a>
        <div class="<?php echo e($block->elem('text')); ?>"><?php echo $text; ?></div>
    </div>
</div><?php /**PATH /var/www/workspace/bitrix/www/local/templates/gn/frontend/src/block/news/news-lastnews/news-lastnews.blade.php ENDPATH**/ ?>