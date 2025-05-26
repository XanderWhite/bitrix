<header class="{{ $block->mod($mods ?? []) }}@if($class ?? false) {{ $class }}@endif">
    <div class="{{ $block->elem('inner') }}">

        {!! $logo !!}

        <div class="{{ $block->elem('menu') }}">
            {!! $menuTop !!}
            {!! $menuLeft !!}
        </div>

        <div class="{{ $block->elem('auth') }}">
            {!! $auth !!}
        </div>
    </div>
</header>