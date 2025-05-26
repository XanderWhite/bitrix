<div class="<?php echo e($block->mod($mods ?? [])); ?><?php if($class ?? false): ?> <?php echo e($class); ?><?php endif; ?>">
    <h2 class="<?php echo e($block->elem('title')); ?>"><?php echo $title; ?></h2>
    <ul class="<?php echo e($block->elem('list')); ?>">
        <?php $__currentLoopData = $countries; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $country): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <li class="<?php echo e($block->elem('item')); ?>"><?php echo $country['NAME']; ?></li>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    </ul>
</div><?php /**PATH /var/www/workspace/bitrix/www/local/templates/gn/frontend/src/block/common/country-list/country-list.blade.php ENDPATH**/ ?>