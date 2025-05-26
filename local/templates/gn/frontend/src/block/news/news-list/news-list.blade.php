<div class="{{ $block->mod($mods ?? []) }}">

    @foreach ($newsList as $newsItem)
    {!! $renderer->renderBlock(
    'news/news-list-elem',
    [
    'date' => $newsItem["DISPLAY_ACTIVE_FROM"],
    'name' => $newsItem["NAME"],
    'text' => $newsItem["PREVIEW_TEXT"],
    'url' => $newsItem["DETAIL_PAGE_URL"]
    ]
    ) !!}
    @endforeach

</div>