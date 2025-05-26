<div class="<?php echo e($block->mod($mods ?? [])); ?>">

    <?php $__currentLoopData = $newsList; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $newsItem): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
    <?php echo $renderer->renderBlock(
    'news/news-list-elem',
    [
    'date' => $newsItem["DISPLAY_ACTIVE_FROM"],
    'name' => $newsItem["NAME"],
    'text' => $newsItem["PREVIEW_TEXT"],
    'url' => $newsItem["DETAIL_PAGE_URL"]
    ]
    ); ?>

    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

</div><?php /**PATH /var/www/workspace/bitrix/www/local/templates/gn/frontend/src/block/news/news-list/news-list.blade.php ENDPATH**/ ?>