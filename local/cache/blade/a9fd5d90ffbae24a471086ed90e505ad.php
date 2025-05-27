<div class="<?php echo e($block->mod($mods ?? [])); ?>">
    <div class="<?php echo e($block->elem('block')); ?>">
        <?php echo $renderer->renderBlock('common/date', ['date' => $date]); ?>


        <div class="<?php echo e($block->elem('title')); ?>">
            <?php echo $title; ?>

        </div>
        <div class="<?php echo e($block->elem('text')); ?>"><?php echo $text; ?></div>
        <?php echo $renderer->renderBlock('common/button', ['url'=>'/news', 'text' => 'назад к новостям', 'mods' => ['reverse'], 'modsSvg' => ['reverse','left'] ]); ?>


        <?php if(!empty($themes)): ?>
        <div class="<?php echo e($block->elem('themes')); ?>">
            <b class="<?php echo e($block->elem('themes-title')); ?>">Темы:</b>
            <?php
            $thms = [];

            foreach ($themes as $theme) {
            $thms[] = '<a href="' . $theme['URL'] . '" class="' . $block->elem('themes-link') . '">' . $theme['NAME'] . '</a>';
            }

            echo implode(', ', $thms);
            ?>
        </div>
        <?php endif; ?>
    </div>

    <?php if(!empty($picSrc)): ?>
    <div class="<?php echo e($block->elem('block')); ?>">
        <img class="<?php echo e($block->elem('image')); ?>"
            src="<?php echo $picSrc; ?>"
            alt="<?php echo $picAlt; ?>">
    </div>
    <?php endif; ?>
</div><?php /**PATH /var/www/workspace/bitrix/www/local/templates/gn/frontend/src/block/news-detail/news-detail-content/news-detail-content.blade.php ENDPATH**/ ?>