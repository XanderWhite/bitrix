<div class="{{ $block->mod($mods ?? []) }}@if($class ?? false) {{ $class }}@endif">
    <div class="{{ $block->elem('tabs') }} container">
        <button class="{{ $block->elem('tab') }} active" data-office="tula">
            Офис в Туле
        </button>
        <button class="{{ $block->elem('tab') }}" data-office="moscow">
            Офис в Москве
        </button>
    </div>

    <div class="{{ $block->elem('content') }} " id='offices'>
        <div class="{{ $block->elem('office') }} active" data-office="tula">

            <div id="yandex-map1" class="{{ $block->elem('map') }} "></div>

            <div class="{{ $block->elem('description') }}">
                <h3 class="{{ $block->elem('title') }}">Офис в Туле</h3>
                <p class="{{ $block->elem('text') }}">
                    300041, г. Тула, ул. Ф. Смирнова ул., д. 28, оф. 601-602, 701, 703-707, 712<br>
                    Тел. / Факс: (4872) 250-450, 57-05-01
                </p>
            </div>
        </div>

        <div class="{{ $block->elem('office') }}" data-office="moscow">
            <div id="yandex-map-2" class="{{ $block->elem('map') }}"></div>

            <div class="{{ $block->elem('description') }}">
                <h3 class="{{ $block->elem('title') }}">Офис в Москве</h3>
                <p class="{{ $block->elem('text') }}">
                    115230, г. Москва, Варшавское шоссе, д. 47, к. 4, оф. 1224 (12 этаж)<br>
                    Тел. / Факс: (495) 933-62-10
                </p>
            </div>
        </div>
    </div>
</div>