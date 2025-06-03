<div class="<?php echo $block->mod($mods ?? []); ?> bx-filter <?php echo $templateData['TEMPLATE_CLASS']; ?> <?php echo $filterViewMode =='HORIZONTAL' ? 'bx-filter-horizontal' : ''; ?>">
    <div class="<?php echo $block->elem('title'); ?>">
        <?php echo $getMessage; ?>

    </div>

    <form name="<?php echo $arResult['FILTER_NAME'] . '_form'; ?>"
        action="<?php echo $arResult['FORM_ACTION']; ?>"
        method='get'
        class="<?php echo $block->elem('form'); ?>">

        <?php $__currentLoopData = $arResult['HIDDEN']; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $arItem): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <input type='hidden'
            name="<?php echo $arItem['CONTROL_NAME']; ?>"
            id="<?php echo $arItem['CONTROL_ID']; ?>"
            value="<?php echo $arItem['HTML_VALUE']; ?>" />
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

        <div class="<?php echo $block->elem('parameters'); ?>">
            <?php $__currentLoopData = $filterItems; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $arItem): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <?php if(empty($arItem['VALUES']) || isset($arItem['PRICE'])): ?>
            <?php continue; ?>
            <?php endif; ?>

            <div class="<?php echo $filterViewMode == 'HORIZONTAL' ? 'col-sm-6 col-md-4' : 'col-lg-12'; ?> <?php echo $block->elem('parameters-box'); ?> bx-filter-parameters-box <?php echo $arItem['DISPLAY_EXPANDED'] == 'Y' ? 'bx-active' : ''; ?>">


                <!-- точка для всплывашки -->
                <span class="<?php echo $block->elem('container-modef'); ?> bx-filter-container-modef"></span>

                <div class="<?php echo $block->elem('parameters-box-title'); ?>"
                    onclick='smartFilter.hideFilterProps(this)'>
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
                                hint: "<?php echo $filterHint; ?>"
                            });
                        </script>
                        <?php endif; ?>
                        <!-- стрелочка -->
                        <i data-role='prop_angle' class="fa fa-angle-<?php echo $arItem['DISPLAY_EXPANDED']=='Y' ? 'up' : 'down'; ?>"></i>
                    </span>
                </div>

                <div class="<?php echo $block->elem('block'); ?> bx-filter-block" data-role='bx_filter_block'>
                    <div class="row <?php echo $block->elem('parameters-box-container'); ?>">

                    <!-- checkboxes -->
                        <div class="<?php echo $block->elem('checkboxes'); ?>">
                            <?php $__currentLoopData = $arItem['VALUES']; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $val => $ar): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <div class="<?php echo $block->elem('item'); ?>">
                                <label class="<?php echo $block->elem('label'); ?> <?php echo $ar['DISABLED'] ? $block->mod('disabled') : ''; ?> <?php echo $ar['CHECKED'] ? $block->mod('checked') : ''; ?>"
                                    data-role="label_<?php echo $ar['CONTROL_ID']; ?>"
                                    for="<?php echo $ar['CONTROL_ID']; ?>">

                                    <span class="<?php echo $block->elem('input-container'); ?>">
                                        <input class="<?php echo $block->elem('input'); ?>"
                                            type="checkbox"
                                            value="<?php echo $ar['HTML_VALUE']; ?>"
                                            name="<?php echo $ar['CONTROL_NAME']; ?>"
                                            id="<?php echo $ar['CONTROL_ID']; ?>"
                                            <?php echo $ar['CHECKED'] ? 'checked="checked"' : ''; ?>

                                            onclick="smartFilter.click(this)">

                                        <span class="<?php echo $block->elem('text'); ?>" title="<?php echo $ar['VALUE']; ?>">
                                            <?php echo $ar['VALUE']; ?>


                                            <?php if($arParams['DISPLAY_ELEMENT_COUNT'] !== "N" && isset($ar['ELEMENT_COUNT'])): ?>
                                            <span class="<?php echo $block->elem('count'); ?>" data-role="count_<?php echo $ar['CONTROL_ID']; ?>">
                                                (<?php echo $ar['ELEMENT_COUNT']; ?>)
                                            </span>
                                            <?php endif; ?>
                                        </span>
                                    </span>
                                </label>
                            </div>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        </div>



                    </div>
                </div>
            </div>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </div>

        <!-- Buttons -->
        <div class="<?php echo $block->elem('buttons-block'); ?>">
            <div class="<?php echo $block->elem('buttons'); ?>">
                <button class="<?php echo $block->elem('button')->mod('apply'); ?>"
                    type="submit"
                    id="set_filter"
                    name="set_filter">
                    <?php echo GetMessage("CT_BCSF_SET_FILTER"); ?>

                </button>

                <button class="<?php echo $block->elem('button')->mod('reset'); ?>"
                    type="submit"
                    id="del_filter"
                    name="del_filter">
                    <?php echo GetMessage("CT_BCSF_DEL_FILTER"); ?>

                </button>
            </div>


            <div class="bx-filter-popup-result <?php echo $block->elem('popup'); ?> <? if ($arParams["FILTER_VIEW_MODE"] == "VERTICAL") echo $arParams["POPUP_POSITION"] ?>" id="modef" <? if (!isset($arResult["ELEMENT_COUNT"])) echo 'style="display:none"'; ?>>
                <span class="<?php echo $block->elem('popup-result'); ?>">
                    <? echo GetMessage("CT_BCSF_FILTER_COUNT", array("#ELEMENT_COUNT#" => '<span id="modef_num">' . (int)($arResult["ELEMENT_COUNT"] ?? 0) . '</span>')); ?>
                </span>
                <a class="<?php echo $block->elem('popup-button'); ?>" href="<? echo $arResult["FILTER_URL"] ?>" target=""><? echo GetMessage("CT_BCSF_FILTER_SHOW") ?></a>
            </div>
        </div>
    </form>
</div><?php /**PATH /var/www/workspace/bitrix/www/local/templates/gn/frontend/src/block/catalog/catalog-filter/catalog-filter.blade.php ENDPATH**/ ?>