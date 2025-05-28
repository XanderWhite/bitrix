<div class="{!! $block->mod($mods ?? []) !!}@if($class ?? false) {!! $class !!}@endif">
    <!-- Изображение -->
  <div>
        <span id="<?= $pictSliderId ?>">
        </span>
        <span id="<?= $secondPictId ?>">
        </span>
    </div>
    @if($hasDetailUrl)
    <a class="{!! $block->elem('link') !!}" href="{!! $detailUrl !!}" title="{!! $imgTitle !!}">
        @else
        <span class="{!! $block->elem('link') !!}">
            @endif

            <!-- Основное изображение -->
            <span class="{!! $block->elem('main-image') !!}" id="{!! $mainImageId !!}"
                style="background-image: url('{!! $mainImageSrc !!}'); {!! $showSlider ? 'display: none;' : '' !!}"></span>

            <!-- Скидка -->
            @if($showDiscount && $discountPercent > 0)
            <div class="{!! $block->elem('discount') !!}" id="{!! $discountId !!}">-{!! $discountPercent !!}%
            </div>
            @endif

            @if($hasDetailUrl)
    </a>
    @else
    </span>
    @endif

    <!-- Заголовок -->

    <h3 class="{!! $block->elem('title') !!}">
        @if($hasDetailUrl)
        <a class="{!! $block->elem('title-link') !!}" href='{!! $detailUrl !!}' title="{!! $title !!}">
            @endif

            {!! $title !!}

            @if($hasDetailUrl)
        </a>
        @endif
    </h3>


    <!-- Цена -->

    <div class="{!! $block->elem('price') !!}" data-entity="price-block">
        @if($showOldPrice && $oldPrice)
        <span class="{!! $block->elem('old-price') !!}" id="{!! $oldPriceId !!}"
            style="{!! $currentPrice >= $oldPrice ? 'display: none;' : '' !!}">
            {!! $formattedOldPrice !!}
        </span>
        @endif

        <span class="{!! $block->elem('current-price') !!}" id="{!! $priceId !!}">
            {!! $formattedPrice !!}
        </span>
    </div>

    <!-- Кнопка -->

    <div class="{!! $block->elem('container-button') !!}" id="{!! $basketActionsId !!}">
        <button class="{!! $block->elem('button') !!}"
            id="{!! $buyLinkId !!}"
            href="javascript:void(0)"
            rel="nofollow">
            {!! $buttonText !!}
        </button>
    </div>

</div>