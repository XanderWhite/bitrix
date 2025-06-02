<div class="<?php echo e($block->mod($mods ?? [])); ?> swiper">
    <div class="<?php echo e($block->elem('wrapper')); ?> swiper-wrapper">

        <?php $__currentLoopData = $newslist; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $news): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <div class="<?php echo e($block->elem('news')); ?> swiper-slide" style="background: url('<?php echo $news['pathPic']; ?>') #333 no-repeat center / cover;">
            <div class="<?php echo e($block->elem('news-inner')); ?> <?php echo $news['class']; ?>">
                <a class="<?php echo e($block->elem('title')); ?>" href='<?php echo $news["url"]; ?>'><?php echo $news['name']; ?></a>
                <div class="<?php echo e($block->elem('text')); ?>"><?php echo $news['text']; ?></div>
            </div>
        </div>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

    </div>

</div><?php /**PATH /var/www/workspace/bitrix/www/local/templates/gn/frontend/src/block/news/news-lastnews/news-lastnews.blade.php ENDPATH**/ ?>