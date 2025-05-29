<div class="{!! $block->mod($mods ?? []) !!}@if($class ?? false) {!! $class !!}@endif"
    id="{!! $productId !!}">

    <!-- заголовок -->
    @if($displayName ?? true)
    {!! $renderer->renderBlock('common/title', ['title' => $title]) !!}
    @endif

    <div class="{!! $block->elem('content') !!}">

        <div class="{!! $block->elem('block') !!}">

            <!-- блок для работы кнопки покупки -->
            <div style="display: none;" id="{!! $pictSliderId !!}" data-entity="images-container"></div>

            <div class="{!! $block->elem('image-container') !!}">
                <!-- процент скидки -->
                @if($showDiscount && $discountPercent > 0)
                <span class="{!! $block->elem('discount') !!}"
                    id="{!! $discountId !!}" title="-{!! $discountPercent !!}%">
                    -{!! $discountPercent !!}%
                </span>
                @endif

                <!-- картинка -->
                @if($mainImageSrc)
                <img class="{!! $block->elem('image') !!}" src="{!! $mainImageSrc !!}" alt="{!! $imgTitle !!}"
                    title="{!! $imgTitle !!}">
                @endif
            </div>

            <!-- характеристика товара -->
            <div class="{!! $block->elem('description') !!}">
                <!-- страна -->
                @if(!empty($countries))
                <p class="{!! $block->elem('description-text') !!}">
                    <span class="{!! $block->elem('description-title') !!}">Страны:</span>
                    @foreach($countries as $country)
                    {!! $country['NAME'] !!}
                    @if(!$loop->last), @endif
                    @endforeach
                </p>
                @endif

                <!-- тематика путешествий -->
                @if(!empty($topics))
                <p class="{!! $block->elem('description-text') !!}">
                    <span class="{!! $block->elem('description-title') !!}">Тематика путешествий:</span>
                    @foreach($topics as $topic)
                    {!! $topic['NAME'] !!}
                    @if(!$loop->last), @endif
                    @endforeach
                </p>
                @endif

                <!-- тип путешествия -->
                @if(!empty($travelType))
                <p class="{!! $block->elem('description-text') !!}">
                    <span class="{!! $block->elem('description-title') !!}">Тип путешествия:</span>
                    {!! $travelType !!}
                </p>
                @endif
            </div>

        </div>

        <!-- блок покупки -->
        <div class="{!! $block->elem('block') !!}">
            <!-- цена -->
            <div class="{!! $block->elem('price-container') !!}">
                @if($showOldPrice)
                <div class="{!! $block->elem('price-old') !!}" id="{!! $oldPriceId !!}"
                    style="display: {!! $showDiscount ? '' : 'none' !!};">
                    {!! $showDiscount ? $formattedOldPrice : '' !!}
                </div>
                @endif

                <div class="{!! $block->elem('price-current') !!}" id="{!! $priceId !!}">
                    {!! $formattedPrice !!}
                </div>
            </div>
            <!-- кнопка -->
            <div class="{!! $block->elem('button-container') !!}" id="{!! $basketActionsId !!}" style="display: {!! $canBuy ? '' : 'none' !!};">
                <a class="{!! $block->elem('button') !!}"
                    id="{!! $buyLinkId !!}" href="javascript:void(0);">
                    <span>{!! $buttonText !!}</span>
                </a>
            </div>
        </div>
    </div>
</div>