<div class="<?php echo $block->mod($mods ?? []); ?><?php if($class ?? false): ?> <?php echo $class; ?><?php endif; ?>">
    <!-- Изображение -->
  <div>
        <span id="<?= $pictSliderId ?>">
        </span>
        <span id="<?= $secondPictId ?>">
        </span>
    </div>
    <?php if($hasDetailUrl): ?>
    <a class="<?php echo $block->elem('link'); ?>" href="<?php echo $detailUrl; ?>" title="<?php echo $imgTitle; ?>">
        <?php else: ?>
        <span class="<?php echo $block->elem('link'); ?>">
            <?php endif; ?>

            <!-- Основное изображение -->
            <span class="<?php echo $block->elem('main-image'); ?>" id="<?php echo $mainImageId; ?>"
                style="background-image: url('<?php echo $mainImageSrc; ?>'); <?php echo $showSlider ? 'display: none;' : ''; ?>"></span>

            <!-- Скидка -->
            <?php if($showDiscount && $discountPercent > 0): ?>
            <div class="<?php echo $block->elem('discount'); ?>" id="<?php echo $discountId; ?>">-<?php echo $discountPercent; ?>%
            </div>
            <?php endif; ?>

            <?php if($hasDetailUrl): ?>
    </a>
    <?php else: ?>
    </span>
    <?php endif; ?>

    <!-- Заголовок -->

    <h3 class="<?php echo $block->elem('title'); ?>">
        <?php if($hasDetailUrl): ?>
        <a class="<?php echo $block->elem('title-link'); ?>" href='<?php echo $detailUrl; ?>' title="<?php echo $title; ?>">
            <?php endif; ?>

            <?php echo $title; ?>


            <?php if($hasDetailUrl): ?>
        </a>
        <?php endif; ?>
    </h3>


    <!-- Цена -->

    <div class="<?php echo $block->elem('price'); ?>" data-entity="price-block">
        <?php if($showOldPrice && $oldPrice): ?>
        <span class="<?php echo $block->elem('old-price'); ?>" id="<?php echo $oldPriceId; ?>"
            style="<?php echo $currentPrice >= $oldPrice ? 'display: none;' : ''; ?>">
            <?php echo $formattedOldPrice; ?>

        </span>
        <?php endif; ?>

        <span class="<?php echo $block->elem('current-price'); ?>" id="<?php echo $priceId; ?>">
            <?php echo $formattedPrice; ?>

        </span>
    </div>

    <!-- Кнопка -->

    <div class="<?php echo $block->elem('container-button'); ?>" id="<?php echo $basketActionsId; ?>">
        <button class="<?php echo $block->elem('button'); ?>"
            id="<?php echo $buyLinkId; ?>"
            href="javascript:void(0)"
            rel="nofollow">
            <?php echo $buttonText; ?>

        </button>
    </div>

</div><?php /**PATH /var/www/workspace/bitrix/www/local/templates/gn/frontend/src/block/common/product/product.blade.php ENDPATH**/ ?>