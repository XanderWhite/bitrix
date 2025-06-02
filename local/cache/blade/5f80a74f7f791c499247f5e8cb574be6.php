<div class="<?php echo $block->mod($mods ?? []); ?> bx-filter <?php echo $templateData['TEMPLATE_CLASS']; ?> <?php echo $filterViewMode =='HORIZONTAL' ? 'bx-filter-horizontal' : ''; ?>">
    <div class="<?php echo $block->elem(' section'); ?> container-fluid">
        <div class='row'>
            <div class="<?php echo $filterViewMode =='HORIZONTAL' ? 'col-sm-6 col-md-4' : 'col-lg-12'; ?> <?php echo $block->elem('title'); ?>">
                <?php echo $getMessage; ?>

            </div>
        </div>

        <form name="<?php echo $arResult['FILTER_NAME'] . '_form'; ?>"
            action="<?php echo $arResult['FORM_ACTION']; ?>"
            method='get'
            class='smartfilter'>

            <?php $__currentLoopData = $arResult['HIDDEN']; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $arItem): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <input type='hidden'
                name="<?php echo $arItem[' CONTROL_NAME']; ?>"
                id="<?php echo $arItem[' CONTROL_ID']; ?>"
                value="<?php echo $arItem[' HTML_VALUE']; ?>" />
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

            <div class='row'>
                <?php $__currentLoopData = $filterItems; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $arItem): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <?php if(empty($arItem['VALUES']) || isset($arItem['PRICE'])): ?>
                    <?php continue; ?>
                <?php endif; ?>

                <div class="<?php echo $filterViewMode == 'HORIZONTAL' ? 'col-sm-6 col-md-4' : 'col-lg-12'; ?> <?php echo $block->elem('parameters-box'); ?> <?php echo $arItem['DISPLAY_EXPANDED'] == 'Y' ? 'bx-active' : ''; ?>">
                    <span class="<?php echo $block->elem(' container-modef'); ?>"></span>

                    <div class="<?php echo $block->elem(' parameters-box-title'); ?>" onclick='smartFilter.hideFilterProps(this)'>
                        <span class="<?php echo $block->elem('parameters-box-hint'); ?>">
                            <?php echo $arItem['NAME']; ?>


                            <?php if(!empty($arItem['FILTER_HINT'])): ?>
                            <i id="item_title_hint_<?php echo $arItem['ID']; ?>" class='fa fa-question-circle'></i>
                            <script>
                                new top.BX.CHint({
                                    parent: top.BX("item_title_hint_<?php echo $arItem['ID']; ?>"),
                                    show_timeout: 10,
                                    hide_timeout: 200,
                                    dx: 2,
                                    preventHide: true,
                                    min_width: 250,
                                    hint: "<?php echo CUtil::JSEscape($arItem['FILTER_HINT ']); ?>"
                                });
                            </script>
                            <?php endif; ?>

                            <i data-role='prop_angle' class="fa fa-angle-<?php echo $arItem[' DISPLAY_EXPANDED']=='Y' ? 'up' : 'down'; ?>"></i>
                        </span>
                    </div>

                    <div class="<?php echo $block->elem(' block'); ?>" data-role='bx_filter_block'>
                        <div class="row <?php echo $block->elem('parameters-box-container'); ?>">

                            <?php echo $renderer->renderBlock(
                            'catalog/catalog-filter_checkboxes',
                            [
                            'arItem' => $arItem,
                            'arParams' => $arParams
                            ]); ?>



                        </div>
                        <div style='clear: both'></div>
                    </div>
                </div>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </div>


            <?php echo $renderer->renderBlock('catalog/catalog-filter_buttons',
            [
            'arParams' => $arParams,
            'arResult' => $arResult
            ]); ?>

        </form>
    </div>
</div><?php /**PATH /var/www/workspace/bitrix/www/local/templates/gn/frontend/src/block/catalog/catalog-filter/catalog-filter.blade.php ENDPATH**/ ?>