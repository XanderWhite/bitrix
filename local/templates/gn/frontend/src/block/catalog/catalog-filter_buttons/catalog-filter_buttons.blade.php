<div class="{!! $block->mod($mods ?? []) !!}">
        <div class="{!! $block->elem('inner') !!}">
            <div class="{!! $block->elem('container') !!}">
                <div class="{!! $block->elem('buttons') !!}">
                    <button class="{!! $block->elem('button') !!} {!! $block->elem('button')->mod('apply') !!}"
                        type="submit"
                        id="set_filter"
                        name="set_filter">
                        {!! GetMessage("CT_BCSF_SET_FILTER") !!}
                    </button>

                    <button class="{!! $block->elem('button') !!} {!! $block->elem('button')->mod('reset') !!}"
                        type="submit"
                        id="del_filter"
                        name="del_filter">
                        {!! GetMessage("CT_BCSF_DEL_FILTER") !!}
                    </button>
                </div>


                <div class="bx-filter-popup-result <? if ($arParams["FILTER_VIEW_MODE"] == "VERTICAL") echo $arParams["POPUP_POSITION"] ?>" id="modef" <? if (!isset($arResult["ELEMENT_COUNT"])) echo 'style="display:none"'; ?> style="display: inline-block;">
                    <? echo GetMessage("CT_BCSF_FILTER_COUNT", array("#ELEMENT_COUNT#" => '<span id="modef_num">' . (int)($arResult["ELEMENT_COUNT"] ?? 0) . '</span>')); ?>
                    <span class="arrow"></span>
                    <br />
                    <a href="<? echo $arResult["FILTER_URL"] ?>" target=""><? echo GetMessage("CT_BCSF_FILTER_SHOW") ?></a>
                </div>


        </div>
    </div>
</div>