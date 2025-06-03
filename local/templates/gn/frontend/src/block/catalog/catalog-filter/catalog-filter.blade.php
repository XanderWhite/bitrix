<div class="{!! $block->mod($mods ?? []) !!} bx-filter {!! $templateData['TEMPLATE_CLASS'] !!} {!! $filterViewMode =='HORIZONTAL' ? 'bx-filter-horizontal' : '' !!}">
    <div class="{!! $block->elem('title') !!}">
        {!! $getMessage !!}
    </div>

    <form name="{!! $arResult['FILTER_NAME'] . '_form' !!}"
        action="{!! $arResult['FORM_ACTION'] !!}"
        method='get'
        class="{!! $block->elem('form') !!}">

        @foreach($arResult['HIDDEN'] as $arItem)
        <input type='hidden'
            name="{!! $arItem['CONTROL_NAME'] !!}"
            id="{!! $arItem['CONTROL_ID'] !!}"
            value="{!! $arItem['HTML_VALUE'] !!}" />
        @endforeach

        <div class="{!! $block->elem('parameters') !!}">
            @foreach($filterItems as $key => $arItem)
            @if(empty($arItem['VALUES']) || isset($arItem['PRICE']))
            @continue
            @endif

            <div class="{!! $filterViewMode == 'HORIZONTAL' ? 'col-sm-6 col-md-4' : 'col-lg-12' !!} {!! $block->elem('parameters-box') !!} bx-filter-parameters-box {!! $arItem['DISPLAY_EXPANDED'] == 'Y' ? 'bx-active' : '' !!}">


                <!-- точка для всплывашки -->
                <span class="{!! $block->elem('container-modef') !!} bx-filter-container-modef"></span>

                <div class="{!! $block->elem('parameters-box-title') !!}"
                    onclick='smartFilter.hideFilterProps(this)'>
                    <span class="{!! $block->elem('parameters-box-hint') !!}">
                        {!! $arItem['NAME'] !!}

                        @if(!empty($arItem['FILTER_HINT']))
                        <i id="item_title_hint_{!! $arItem['ID'] !!}" class='fa fa-question-circle'></i>
                        <script>
                            new top.BX.CHint({
                                parent: top.BX("item_title_hint_{!! $arItem['ID'] !!}"),
                                show_timeout: 10,
                                hide_timeout: 200,
                                dx: 2,
                                preventHide: true,
                                min_width: 250,
                                hint: "{!! $filterHint !!}"
                            });
                        </script>
                        @endif
                        <!-- стрелочка -->
                        <i data-role='prop_angle' class="fa fa-angle-{!! $arItem['DISPLAY_EXPANDED']=='Y' ? 'up' : 'down' !!}"></i>
                    </span>
                </div>

                <div class="{!! $block->elem('block') !!} bx-filter-block" data-role='bx_filter_block'>
                    <div class="row {!! $block->elem('parameters-box-container') !!}">

                    <!-- checkboxes -->
                        <div class="{!! $block->elem('checkboxes') !!}">
                            @foreach($arItem['VALUES'] as $val => $ar)
                            <div class="{!! $block->elem('item') !!}">
                                <label class="{!! $block->elem('label') !!} {!! $ar['DISABLED'] ? $block->mod('disabled') : '' !!} {!! $ar['CHECKED'] ? $block->mod('checked') : '' !!}"
                                    data-role="label_{!! $ar['CONTROL_ID'] !!}"
                                    for="{!! $ar['CONTROL_ID'] !!}">

                                    <span class="{!! $block->elem('input-container') !!}">
                                        <input class="{!! $block->elem('input') !!}"
                                            type="checkbox"
                                            value="{!! $ar['HTML_VALUE'] !!}"
                                            name="{!! $ar['CONTROL_NAME'] !!}"
                                            id="{!! $ar['CONTROL_ID'] !!}"
                                            {!! $ar['CHECKED'] ? 'checked="checked"' : '' !!}
                                            onclick="smartFilter.click(this)">

                                        <span class="{!! $block->elem('text') !!}" title="{!! $ar['VALUE'] !!}">
                                            {!! $ar['VALUE'] !!}

                                            @if($arParams['DISPLAY_ELEMENT_COUNT'] !== "N" && isset($ar['ELEMENT_COUNT']))
                                            <span class="{!! $block->elem('count') !!}" data-role="count_{!! $ar['CONTROL_ID'] !!}">
                                                ({!! $ar['ELEMENT_COUNT'] !!})
                                            </span>
                                            @endif
                                        </span>
                                    </span>
                                </label>
                            </div>
                            @endforeach
                        </div>



                    </div>
                </div>
            </div>
            @endforeach
        </div>

        <!-- Buttons -->
        <div class="{!!  $block->elem('buttons-block') !!}">
            <div class="{!! $block->elem('buttons') !!}">
                <button class="{!! $block->elem('button')->mod('apply') !!}"
                    type="submit"
                    id="set_filter"
                    name="set_filter">
                    {!! GetMessage("CT_BCSF_SET_FILTER") !!}
                </button>

                <button class="{!! $block->elem('button')->mod('reset') !!}"
                    type="submit"
                    id="del_filter"
                    name="del_filter">
                    {!! GetMessage("CT_BCSF_DEL_FILTER") !!}
                </button>
            </div>


            <div class="bx-filter-popup-result {!! $block->elem('popup') !!} <? if ($arParams["FILTER_VIEW_MODE"] == "VERTICAL") echo $arParams["POPUP_POSITION"] ?>" id="modef" <? if (!isset($arResult["ELEMENT_COUNT"])) echo 'style="display:none"'; ?>>
                <span class="{!! $block->elem('popup-result') !!}">
                    <? echo GetMessage("CT_BCSF_FILTER_COUNT", array("#ELEMENT_COUNT#" => '<span id="modef_num">' . (int)($arResult["ELEMENT_COUNT"] ?? 0) . '</span>')); ?>
                </span>
                <a class="{!! $block->elem('popup-button') !!}" href="<? echo $arResult["FILTER_URL"] ?>" target=""><? echo GetMessage("CT_BCSF_FILTER_SHOW") ?></a>
            </div>
        </div>
    </form>
</div>