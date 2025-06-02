<div class="{!! $block->mod($mods ?? []) !!} bx-filter {!! $templateData['TEMPLATE_CLASS'] !!} {!! $filterViewMode =='HORIZONTAL' ? 'bx-filter-horizontal' : '' !!}">
    <div class="{!! $block->elem(' section') !!} container-fluid">
        <div class='row'>
            <div class="{!! $filterViewMode =='HORIZONTAL' ? 'col-sm-6 col-md-4' : 'col-lg-12' !!} {!! $block->elem('title') !!}">
                {!! $getMessage !!}
            </div>
        </div>

        <form name="{!! $arResult['FILTER_NAME'] . '_form' !!}"
            action="{!! $arResult['FORM_ACTION'] !!}"
            method='get'
            class='smartfilter'>

            @foreach($arResult['HIDDEN'] as $arItem)
            <input type='hidden'
                name="{!! $arItem[' CONTROL_NAME'] !!}"
                id="{!! $arItem[' CONTROL_ID'] !!}"
                value="{!! $arItem[' HTML_VALUE'] !!}" />
            @endforeach

            <div class='row'>
                @foreach($filterItems as $key => $arItem)
                @if(empty($arItem['VALUES']) || isset($arItem['PRICE']))
                    @continue
                @endif

                <div class="{!! $filterViewMode == 'HORIZONTAL' ? 'col-sm-6 col-md-4' : 'col-lg-12' !!} {!! $block->elem('parameters-box') !!} {!! $arItem['DISPLAY_EXPANDED'] == 'Y' ? 'bx-active' : '' !!}">
                    <span class="{!! $block->elem(' container-modef') !!}"></span>

                    <div class="{!! $block->elem(' parameters-box-title') !!}" onclick='smartFilter.hideFilterProps(this)'>
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
                                    hint: "{!! CUtil::JSEscape($arItem['FILTER_HINT ']) !!}"
                                });
                            </script>
                            @endif

                            <i data-role='prop_angle' class="fa fa-angle-{!! $arItem[' DISPLAY_EXPANDED']=='Y' ? 'up' : 'down' !!}"></i>
                        </span>
                    </div>

                    <div class="{!! $block->elem(' block') !!}" data-role='bx_filter_block'>
                        <div class="row {!! $block->elem('parameters-box-container') !!}">

                            {!! $renderer->renderBlock(
                            'catalog/catalog-filter_checkboxes',
                            [
                            'arItem' => $arItem,
                            'arParams' => $arParams
                            ]) !!}


                        </div>
                        <div style='clear: both'></div>
                    </div>
                </div>
                @endforeach
            </div>


            {!! $renderer->renderBlock('catalog/catalog-filter_buttons',
            [
            'arParams' => $arParams,
            'arResult' => $arResult
            ]) !!}
        </form>
    </div>
</div>