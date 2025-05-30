<div class="{{ $block->mod($mods ?? []) }}@if($class ?? false) {{ $class }}@endif">
    @if (!empty($okMessage))
    <div class="{!! $block->elem('ok-message') !!}" id="okMessage">{!! $okMessage !!}</div>
    @endif
    <div id='message' class="{!! $block->elem('error-message') !!}"></div>
</div>