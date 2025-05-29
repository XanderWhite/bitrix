<form class='{!! $block->mod($mods ?? []) !!}'  action="{!! $action !!}" method="{!! $method !!}">
    {!! $bitrixSessidPost !!}

    <div class='{!! $block->elem("wrapper") !!}'>
        @foreach($fields as $field)
        {!! $field !!}
        @endforeach
    </div>
</form>
