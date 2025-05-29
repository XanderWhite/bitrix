<div class="{{ $block->mod($mods ?? []) }}@if($class ?? false) {{ $class }}@endif">
    <label class='{!! $block->elem("label") !!}'>
        <input type="checkbox"
            class='{!! $block->elem("checkbox") !!}'
            name="{!! $name !!}"
            value="Y"
            @if($checked) checked @endif
            @if($required) required @endif>
        {!! $text !!}
        @if($required)
        <span class='{{ $block->elem("required-mark") }}'>*</span>
        @endif
    </label>
</div>