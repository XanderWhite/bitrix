 <a class="<?php echo e($block->mod($mods ?? [])); ?> <?php if($class ?? false): ?> <?php echo e($class); ?><?php endif; ?>" href="<?php echo $url; ?>">
     <?php if($text): ?>
     <span class="<?php echo e($block->elem('text')); ?>">
         <?php echo $text; ?>

     </span>
     <?php endif; ?>
     <svg class="<?php echo e($block->elem('svg')->mod($modsSvg ?? [])); ?>" viewBox="0 0 27.004 13.322">
         <path d="M1.02 7.64 1 7.66c-.56 0-1-.44-1-1s.44-1 1-1l.02.02v1.96Zm23.56-.98-4.95-4.95a.99.99 0 0 1 0-1.42c.4-.39 1.02-.39 1.42 0l5.65 5.66c.4.39.4 1.02 0 1.41l-5.65 5.66c-.4.4-1.02.4-1.42 0-.4-.4-.4-1.02 0-1.41l4.95-4.95Z" />
         <path d="m23.58 5.66-3.95-3.95a.99.99 0 0 1 0-1.42c.4-.39 1.02-.39 1.42 0l5.65 5.66c.4.39.4 1.02 0 1.41l-5.65 5.66c-.4.4-1.02.4-1.42 0-.4-.4-.4-1.02 0-1.41l3.95-3.95H1c-.56 0-1-.44-1-1s.44-1 1-1h22.58Z" />
     </svg>
 </a><?php /**PATH /var/www/workspace/bitrix/www/local/templates/gn/frontend/src/block/common/button/button.blade.php ENDPATH**/ ?>