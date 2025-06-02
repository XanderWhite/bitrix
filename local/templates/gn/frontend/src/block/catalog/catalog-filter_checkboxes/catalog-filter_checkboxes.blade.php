<div class="{!! $block->mod($mods ?? []) !!}">
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
