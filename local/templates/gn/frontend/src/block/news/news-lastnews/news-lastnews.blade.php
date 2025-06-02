<div class="{{ $block->mod($mods ?? []) }} swiper">
    <div class="{{ $block->elem('wrapper') }} swiper-wrapper">

        @foreach($newslist as $news)
        <div class="{{ $block->elem('news') }} swiper-slide" style="background: url('{!! $news['pathPic'] !!}') #333 no-repeat center / cover;">
            <div class="{{ $block->elem('news-inner') }} {!! $news['class'] !!}">
                <a class="{{ $block->elem('title') }}" href='{!!  $news["url"] !!}'>{!! $news['name'] !!}</a>
                <div class="{{ $block->elem('text') }}">{!! $news['text'] !!}</div>
            </div>
        </div>
        @endforeach

    </div>

</div>