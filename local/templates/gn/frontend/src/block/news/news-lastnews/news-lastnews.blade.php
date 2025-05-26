<div class="{{ $block->mod($mods ?? []) }}" style="background: url('{!! $pathPic !!}') #333 no-repeat center / cover;">

    <div class="{{ $block->elem('inner') }} @if($class ?? false) {{ $class }}@endif">
        <a class="{{ $block->elem('title') }}" href='<?= $url ?>'>{!! $name !!}</a>
        <div class="{{ $block->elem('text') }}">{!! $text !!}</div>
    </div>
</div>