<article class="<?php echo e($block->mod($mods ?? [])); ?>">
    <?php echo $renderer->renderBlock('common/date', ['date' => $date]); ?>

    <h3 class="<?php echo e($block->elem('title')); ?>"><?php echo $name; ?></h3>
    <p class="<?php echo e($block->elem('text')); ?>"><?php echo $text; ?></p>
    <?php echo $renderer->renderBlock('common/button', ['url'=>$url, 'text' => 'подробнее' ]); ?>

</article><?php /**PATH /var/www/workspace/bitrix/www/local/templates/gn/frontend/src/block/news/news-list-elem/news-list-elem.blade.php ENDPATH**/ ?>