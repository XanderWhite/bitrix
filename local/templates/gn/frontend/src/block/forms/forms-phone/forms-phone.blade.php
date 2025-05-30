<div class="{{ $block->mod($mods ?? []) }}@if($class ?? false) {{ $class }}@endif">
    <label class='{!! $block->elem("label") !!} '>
        <span class='{{ $block->elem("text") }}'>
            {!! $label !!}
            @if($required)
            <span class='{{ $block->elem("required-mark") }}'>*</span>
            @endif
        </span>

        <input type="tel"
            class='{!! $block->elem("input") !!}'
            name='{!! $name !!}'
            value='{!! $value !!}'
            id="user_phone">


    </label>
</div>