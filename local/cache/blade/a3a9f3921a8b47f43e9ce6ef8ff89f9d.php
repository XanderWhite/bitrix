<div class="<?php echo $block->mod($mods ?? []); ?><?php if($class ?? false): ?> <?php echo $class; ?><?php endif; ?>"
    id="<?php echo $productId; ?>">

    <!-- заголовок -->
    <?php if($displayName ?? true): ?>
    <?php echo $renderer->renderBlock('common/title', ['title' => $title]); ?>

    <?php endif; ?>

    <div class="<?php echo $block->elem('content'); ?>">

        <div class="<?php echo $block->elem('block'); ?>">

            <!-- блок для работы кнопки покупки -->
            <div style="display: none;" id="<?php echo $pictSliderId; ?>" data-entity="images-container"></div>

            <div class="<?php echo $block->elem('image-container'); ?>">
                <!-- процент скидки -->
                <?php if($showDiscount && $discountPercent > 0): ?>
                <span class="<?php echo $block->elem('discount'); ?>"
                    id="<?php echo $discountId; ?>" title="-<?php echo $discountPercent; ?>%">
                    -<?php echo $discountPercent; ?>%
                </span>
                <?php endif; ?>

                <!-- картинка -->
                <?php if($mainImageSrc): ?>
                <img class="<?php echo $block->elem('image'); ?>" src="<?php echo $mainImageSrc; ?>" alt="<?php echo $imgTitle; ?>"
                    title="<?php echo $imgTitle; ?>">
                <?php endif; ?>
            </div>

            <!-- характеристика товара -->
            <div class="<?php echo $block->elem('description'); ?>">
                <!-- страна -->
                <?php if(!empty($countries)): ?>
                <p class="<?php echo $block->elem('description-text'); ?>">
                    <span class="<?php echo $block->elem('description-title'); ?>">Страны:</span>
                    <?php $__currentLoopData = $countries; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $country): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <?php echo $country['NAME']; ?>

                    <?php if(!$loop->last): ?>, <?php endif; ?>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </p>
                <?php endif; ?>

                <!-- тематика путешествий -->
                <?php if(!empty($topics)): ?>
                <p class="<?php echo $block->elem('description-text'); ?>">
                    <span class="<?php echo $block->elem('description-title'); ?>">Тематика путешествий:</span>
                    <?php $__currentLoopData = $topics; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $topic): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <?php echo $topic['NAME']; ?>

                    <?php if(!$loop->last): ?>, <?php endif; ?>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </p>
                <?php endif; ?>

                <!-- тип путешествия -->
                <?php if(!empty($travelType)): ?>
                <p class="<?php echo $block->elem('description-text'); ?>">
                    <span class="<?php echo $block->elem('description-title'); ?>">Тип путешествия:</span>
                    <?php echo $travelType; ?>

                </p>
                <?php endif; ?>
            </div>

        </div>

        <!-- блок покупки -->
        <div class="<?php echo $block->elem('block'); ?>">
            <!-- цена -->
            <div class="<?php echo $block->elem('price-container'); ?>">
                <?php if($showOldPrice): ?>
                <div class="<?php echo $block->elem('price-old'); ?>" id="<?php echo $oldPriceId; ?>"
                    style="display: <?php echo $showDiscount ? '' : 'none'; ?>;">
                    <?php echo $showDiscount ? $formattedOldPrice : ''; ?>

                </div>
                <?php endif; ?>

                <div class="<?php echo $block->elem('price-current'); ?>" id="<?php echo $priceId; ?>">
                    <?php echo $formattedPrice; ?>

                </div>
            </div>
            <!-- кнопка -->
            <div class="<?php echo $block->elem('button-container'); ?>" id="<?php echo $basketActionsId; ?>" style="display: <?php echo $canBuy ? '' : 'none'; ?>;">
                <a class="<?php echo $block->elem('button'); ?>"
                    id="<?php echo $buyLinkId; ?>" href="javascript:void(0);">
                    <span><?php echo $buttonText; ?></span>
                </a>
            </div>
        </div>
    </div>
</div><?php /**PATH /var/www/workspace/bitrix/www/local/templates/gn/frontend/src/block/common/product-detail/product-detail.blade.php ENDPATH**/ ?>