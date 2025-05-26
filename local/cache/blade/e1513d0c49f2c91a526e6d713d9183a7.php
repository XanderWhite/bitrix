<section class="<?php echo e($block->mod($mods ?? [])); ?><?php if($class ?? false): ?> <?php echo e($class); ?><?php endif; ?>">

<?php echo $renderer->renderBlock('news/news-list-title', ['title' => $title]); ?>

<?php echo $renderer->renderBlock('news/news-list', ['newsList' => $newsList]); ?>

<?php echo $nav; ?>

</section><?php /**PATH /var/www/workspace/bitrix/www/local/templates/gn/frontend/src/block/news/news-section/news-section.blade.php ENDPATH**/ ?>