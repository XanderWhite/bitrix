<div class="<?php echo e($block->mod($mods ?? [])); ?>">
    <h3 class="<?php echo e($block->elem('subtitle')); ?>">Новость #<?php echo $id; ?>:</h3>
    <?php echo $renderer->renderBlock('common/title', ['title' => $title]); ?>

</div><?php /**PATH /var/www/workspace/bitrix/www/local/templates/gn/frontend/src/block/news-detail/news-detail-header/news-detail-header.blade.php ENDPATH**/ ?>