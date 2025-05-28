<?php

if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) {
	die();
}

use Bitrix\Main\Localization\Loc;

/**
 * @global CMain $APPLICATION
 * @var array $arParams
 * @var array $item
 * @var array $actualItem
 * @var array $minOffer
 * @var array $itemIds
 * @var array|null $price
 * @var float|int|null $measureRatio
 * @var bool $haveOffers
 * @var bool $showSubscribe
 * @var array $morePhoto
 * @var bool $showSlider
 * @var bool $itemHasDetailUrl
 * @var string $imgTitle
 * @var string $productTitle
 * @var string $buttonSizeClass
 * @var string $discountPositionClass
 * @var string $labelPositionClass
 * @var CatalogSectionComponent $component
 */
?>
<?
echo \TAO::frontend()->renderBlock(
	'common/product',
	[
		'hasDetailUrl' => $itemHasDetailUrl,
		'detailUrl' => $item['DETAIL_PAGE_URL'],
		'imgTitle' => $imgTitle,
		'mainImageId' => $itemIds['PICT'],
		'mainImageSrc' => $item['PREVIEW_PICTURE']['SRC'],
		'showDiscount' => $arParams['SHOW_DISCOUNT_PERCENT'] === 'Y',
		'discountPercent' => $price['PERCENT'],
		'discountId' => $itemIds['DSC_PERC'],
		'title' => $productTitle,

		'showOldPrice' => $arParams['SHOW_OLD_PRICE'] === 'Y',
		'oldPrice' => $price['RATIO_BASE_PRICE'],
		'oldPriceId' => $itemIds['PRICE_OLD'],
		'formattedOldPrice' => $price['PRINT_RATIO_BASE_PRICE'],
		'currentPrice' => $price['RATIO_PRICE'],
		'priceId' => $itemIds['PRICE'],
		'formattedPrice' => $price['PRINT_RATIO_PRICE'],

		'canBuy' => $actualItem['CAN_BUY'],
		'hasOffers' => $haveOffers,
		'productId' => $actualItem['ID'],
		'basketActionsId' => $itemIds['BASKET_ACTIONS'],
		'buyLinkId' => $itemIds['BUY_LINK'],
		'buttonText' => ($arParams['ADD_TO_BASKET_ACTION'] === 'BUY'
			? $arParams['MESS_BTN_BUY']
			: $arParams['MESS_BTN_ADD_TO_BASKET']),
		'buttonSizeClass' => $buttonSizeClass,
		'showSubscribe' => $showSubscribe,
		'subscribeId' => $itemIds['SUBSCRIBE_LINK'],
		'notAvailableId' => $itemIds['NOT_AVAILABLE_MESS'],
		'notAvailableMessage' => $arParams['MESS_NOT_AVAILABLE'],
		'displayMode' => $arParams['PRODUCT_DISPLAY_MODE'],

		'pictSliderId' => $itemIds['PICT_SLIDER'],
		'secondPictId' => $itemIds['SECOND_PICT']
	]
); ?>