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
echo \TAO::frontend()->renderBlock(
        'common/product',
        $arResult['CONTENT']
    );
?>



use Bitrix\Main\Localization\Loc;

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
		'displayMode' => $arParams['PRODUCT_DISPLAY_MODE']
	]
);



<div class="product-item">

	<!-- Блок изображений товара -->
<?
echo \TAO::frontend()->renderBlock(
	'product/product-image',
	 [

    ]) ;?>



	<!-- 3. Название товара -->



	<h3 class="product-item-title">
		<? if ($itemHasDetailUrl): ?>
			<a href="<?= $item['DETAIL_PAGE_URL'] ?>" title="<?= $productTitle ?>">
			<? endif; ?>
			<?= $productTitle ?>
			<? if ($itemHasDetailUrl): ?>
			</a>
		<? endif; ?>
	</h3>






	<?
	if (!empty($arParams['PRODUCT_BLOCKS_ORDER'])) {
		foreach ($arParams['PRODUCT_BLOCKS_ORDER'] as $blockName) {
			switch ($blockName) {


				// <!-- 4. Блок цены

				// Что делает:

				// Показывает текущую цену.

				// Если есть старая цена, отображает её зачёркнутой (для демонстрации скидки).


				// -->

				case 'price': ?>
					<div class="product-item-info-container product-item-price-container" data-entity="price-block">
						<!-- Старая цена -->

						<?
						if ($arParams['SHOW_OLD_PRICE'] === 'Y' && !empty($price)) {
						?>
							<span class="product-item-price-old" id="<?= $itemIds['PRICE_OLD'] ?>"
								<?= ($price['RATIO_PRICE'] >= $price['RATIO_BASE_PRICE'] ? 'style="display: none;"' : '') ?>>
								<?= $price['PRINT_RATIO_BASE_PRICE'] ?>
							</span>&nbsp;
						<?
						}
						?>

						<!-- Текущая цена -->
						<span class="product-item-price-current" id="<?= $itemIds['PRICE'] ?>">
							<?
							if (!empty($price)) {
								if ($arParams['PRODUCT_DISPLAY_MODE'] === 'N' && $haveOffers) {
									echo Loc::getMessage(
										'CT_BCI_TPL_MESS_PRICE_SIMPLE_MODE',
										array(
											'#PRICE#' => $price['PRINT_RATIO_PRICE'],
											'#VALUE#' => $measureRatio,
											'#UNIT#' => $minOffer['ITEM_MEASURE']['TITLE']
										)
									);
								} else {
									echo $price['PRINT_RATIO_PRICE'];
								}
							}
							?>
						</span>
					</div>
					<?
					break;


				// 5. Блок количества (для добавления в корзину)
				// Что делает:

				// Позволяет выбрать количество товара перед добавлением в корзину.

				// Поддерживает кнопки + и - для изменения значения.

				case 'quantityLimit':
					if ($arParams['SHOW_MAX_QUANTITY'] !== 'N') {
						if ($haveOffers) {
							if ($arParams['PRODUCT_DISPLAY_MODE'] === 'Y') {
					?>
								<div class="product-item-info-container product-item-hidden"
									id="<?= $itemIds['QUANTITY_LIMIT'] ?>"
									style="display: none;"
									data-entity="quantity-limit-block">
									<div class="product-item-info-container-title text-muted">
										<?= $arParams['MESS_SHOW_MAX_QUANTITY'] ?>:
										<span class="product-item-quantity text-dark" data-entity="quantity-limit-value"></span>
									</div>
								</div>
							<?
							}
						} else {
							if (
								$measureRatio
								&& (float)$actualItem['CATALOG_QUANTITY'] > 0
								&& $actualItem['CATALOG_QUANTITY_TRACE'] === 'Y'
								&& $actualItem['CATALOG_CAN_BUY_ZERO'] === 'N'
							) {
							?>
								<div class="product-item-info-container product-item-hidden" id="<?= $itemIds['QUANTITY_LIMIT'] ?>">
									<div class="product-item-info-container-title text-muted">
										<?= $arParams['MESS_SHOW_MAX_QUANTITY'] ?>:
										<span class="product-item-quantity text-dark" data-entity="quantity-limit-value">
											<?
											if ($arParams['SHOW_MAX_QUANTITY'] === 'M') {
												if ((float)$actualItem['CATALOG_QUANTITY'] / $measureRatio >= $arParams['RELATIVE_QUANTITY_FACTOR']) {
													echo $arParams['MESS_RELATIVE_QUANTITY_MANY'];
												} else {
													echo $arParams['MESS_RELATIVE_QUANTITY_FEW'];
												}
											} else {
												echo $actualItem['CATALOG_QUANTITY'] . ' ' . $actualItem['ITEM_MEASURE']['TITLE'];
											}
											?>
										</span>
									</div>
								</div>
							<?
							}
						}
					}

					break;



				// 6. Блок кнопок (корзина, покупка, подписка)

				// Что делает:

				// Если товар в наличии — кнопка "Добавить в корзину" или "Купить".

				// Если товара нет — кнопка "Подписаться" или текст "Нет в наличии".


				case 'quantity':
					if (!$haveOffers) {
						if ($actualItem['CAN_BUY'] && $arParams['USE_PRODUCT_QUANTITY']) {
							?>
							<div class="product-item-info-container product-item-hidden" data-entity="quantity-block">
								<div class="product-item-amount">
									<div class="product-item-amount-field-container">
										<span class="product-item-amount-field-btn-minus no-select" id="<?= $itemIds['QUANTITY_DOWN'] ?>"></span>
										<div class="product-item-amount-field-block">
											<input class="product-item-amount-field" id="<?= $itemIds['QUANTITY'] ?>" type="number" name="<?= $arParams['PRODUCT_QUANTITY_VARIABLE'] ?>" value="<?= $measureRatio ?>">
											<span class="product-item-amount-description-container">
												<span id="<?= $itemIds['QUANTITY_MEASURE'] ?>"><?= $actualItem['ITEM_MEASURE']['TITLE'] ?></span>
												<span id="<?= $itemIds['PRICE_TOTAL'] ?>"></span>
											</span>
										</div>
										<span class="product-item-amount-field-btn-plus no-select" id="<?= $itemIds['QUANTITY_UP'] ?>"></span>
									</div>
								</div>
							</div>
						<?
						}
					} elseif ($arParams['PRODUCT_DISPLAY_MODE'] === 'Y') {
						if ($arParams['USE_PRODUCT_QUANTITY']) {
						?>
							<div class="product-item-info-container product-item-hidden" data-entity="quantity-block">
								<div class="product-item-amount">
									<div class="product-item-amount-field-container">
										<span class="product-item-amount-field-btn-minus no-select" id="<?= $itemIds['QUANTITY_DOWN'] ?>"></span>
										<div class="product-item-amount-field-block">
											<input class="product-item-amount-field" id="<?= $itemIds['QUANTITY'] ?>" type="number" name="<?= $arParams['PRODUCT_QUANTITY_VARIABLE'] ?>" value="<?= $measureRatio ?>">
											<span class="product-item-amount-description-container">
												<span id="<?= $itemIds['QUANTITY_MEASURE'] ?>"><?= $actualItem['ITEM_MEASURE']['TITLE'] ?></span>
												<span id="<?= $itemIds['PRICE_TOTAL'] ?>"></span>
											</span>
										</div>
										<span class="product-item-amount-field-btn-plus no-select" id="<?= $itemIds['QUANTITY_UP'] ?>"></span>
									</div>
								</div>
							</div>
					<?
						}
					}

					break;


				// 6. Блок кнопок (корзина, покупка, подписка)

				// 					Что делает?
				// Если товар в наличии (CAN_BUY = true):

				// Показывает кнопку "В корзину" (MESS_BTN_ADD_TO_BASKET) или "Купить" (MESS_BTN_BUY), в зависимости от настроек.

				// Если товара нет в наличии:

				// Показывает кнопку "Нет в наличии" (MESS_NOT_AVAILABLE).

				// Если включена подписка ($showSubscribe = true), добавляет компонент "Уведомить о поступлении".

				// Ключевые настройки:
				// ADD_TO_BASKET_ACTION — определяет текст кнопки (BUY или ADD_TO_BASKET).

				// MESS_NOT_AVAILABLE — кастомный текст для отсутствующего товара.

				case 'buttons':
					?>
					<div class="product-item-info-container product-item-hidden" data-entity="buttons-block">
						<?
						if (!$haveOffers) {
							if ($actualItem['CAN_BUY']) {
						?>
								<div class="product-item-button-container" id="<?= $itemIds['BASKET_ACTIONS'] ?>">
									<button class="btn btn-primary <?= $buttonSizeClass ?>" id="<?= $itemIds['BUY_LINK'] ?>"
										href="javascript:void(0)" rel="nofollow">
										<?= ($arParams['ADD_TO_BASKET_ACTION'] === 'BUY' ? $arParams['MESS_BTN_BUY'] : $arParams['MESS_BTN_ADD_TO_BASKET']) ?>
									</button>
								</div>
							<?
							} else {
							?>
								<div class="product-item-button-container">
									<?
									if ($showSubscribe) {
										$APPLICATION->IncludeComponent(
											'bitrix:catalog.product.subscribe',
											'',
											array(
												'PRODUCT_ID' => $actualItem['ID'],
												'BUTTON_ID' => $itemIds['SUBSCRIBE_LINK'],
												'BUTTON_CLASS' => 'btn btn-primary ' . $buttonSizeClass,
												'DEFAULT_DISPLAY' => true,
												'MESS_BTN_SUBSCRIBE' => $arParams['~MESS_BTN_SUBSCRIBE'],
											),
											$component,
											array('HIDE_ICONS' => 'Y')
										);
									}
									?>
									<button class="btn btn-link <?= $buttonSizeClass ?>"
										id="<?= $itemIds['NOT_AVAILABLE_MESS'] ?>" href="javascript:void(0)" rel="nofollow">
										<?= $arParams['MESS_NOT_AVAILABLE'] ?>
									</button>
								</div>
							<?
							}
						} else {
							if ($arParams['PRODUCT_DISPLAY_MODE'] === 'Y') {
							?>
								<div class="product-item-button-container">
									<?
									if ($showSubscribe) {
										$APPLICATION->IncludeComponent(
											'bitrix:catalog.product.subscribe',
											'',
											array(
												'PRODUCT_ID' => $item['ID'],
												'BUTTON_ID' => $itemIds['SUBSCRIBE_LINK'],
												'BUTTON_CLASS' => 'btn btn-primary ' . $buttonSizeClass,
												'DEFAULT_DISPLAY' => !$actualItem['CAN_BUY'],
												'MESS_BTN_SUBSCRIBE' => $arParams['~MESS_BTN_SUBSCRIBE'],
											),
											$component,
											array('HIDE_ICONS' => 'Y')
										);
									}
									?>
									<button class="btn btn-link <?= $buttonSizeClass ?>"
										id="<?= $itemIds['NOT_AVAILABLE_MESS'] ?>" href="javascript:void(0)" rel="nofollow"
										<?= ($actualItem['CAN_BUY'] ? 'style="display: none;"' : '') ?>>
										<?= $arParams['MESS_NOT_AVAILABLE'] ?>
									</button>
									<div id="<?= $itemIds['BASKET_ACTIONS'] ?>" <?= ($actualItem['CAN_BUY'] ? '' : 'style="display: none;"') ?>>
										<button class="btn btn-primary <?= $buttonSizeClass ?>" id="<?= $itemIds['BUY_LINK'] ?>"
											href="javascript:void(0)" rel="nofollow">
											<?= ($arParams['ADD_TO_BASKET_ACTION'] === 'BUY' ? $arParams['MESS_BTN_BUY'] : $arParams['MESS_BTN_ADD_TO_BASKET']) ?>
										</button>
									</div>
								</div>
							<?
							} else {
							?>
								<div class="product-item-button-container">
									<a class="btn btn-primary <?= $buttonSizeClass ?>" href="<?= $item['DETAIL_PAGE_URL'] ?>">
										<?= $arParams['MESS_BTN_DETAIL'] ?>
									</a>
								</div>
						<?
							}
						}
						?>
					</div>
					<?
					break;


				// 7. Блок свойств товара
				// 				Что делает:

				// Выводит дополнительные характеристики товара (например: "Цвет", "Размер", "Материал").

				case 'props':
					if (!$haveOffers) {
						if (!empty($item['DISPLAY_PROPERTIES'])) {
					?>
							<div class="product-item-info-container product-item-hidden" data-entity="props-block">
								<dl class="product-item-properties">
									<?
									foreach ($item['DISPLAY_PROPERTIES'] as $code => $displayProperty) {
									?>
										<dt class="text-muted<?= (!isset($item['PROPERTY_CODE_MOBILE'][$code]) ? ' d-none d-sm-block' : '') ?>">
											<?= $displayProperty['NAME'] ?>
										</dt>
										<dd class="text-dark<?= (!isset($item['PROPERTY_CODE_MOBILE'][$code]) ? ' d-none d-sm-block' : '') ?>">
											<?= (is_array($displayProperty['DISPLAY_VALUE'])
												? implode(' / ', $displayProperty['DISPLAY_VALUE'])
												: $displayProperty['DISPLAY_VALUE']) ?>
										</dd>
									<?
									}
									?>
								</dl>
							</div>
						<?
						}

						if ($arParams['ADD_PROPERTIES_TO_BASKET'] === 'Y' && !empty($item['PRODUCT_PROPERTIES'])) {
						?>
							<div id="<?= $itemIds['BASKET_PROP_DIV'] ?>" style="display: none;">
								<?
								if (!empty($item['PRODUCT_PROPERTIES_FILL'])) {
									foreach ($item['PRODUCT_PROPERTIES_FILL'] as $propID => $propInfo) {
								?>
										<input type="hidden" name="<?= $arParams['PRODUCT_PROPS_VARIABLE'] ?>[<?= $propID ?>]"
											value="<?= htmlspecialcharsbx($propInfo['ID']) ?>">
									<?
										unset($item['PRODUCT_PROPERTIES'][$propID]);
									}
								}

								if (!empty($item['PRODUCT_PROPERTIES'])) {
									?>
									<table>
										<?
										foreach ($item['PRODUCT_PROPERTIES'] as $propID => $propInfo) {
										?>
											<tr>
												<td><?= $item['PROPERTIES'][$propID]['NAME'] ?></td>
												<td>
													<?
													if (
														$item['PROPERTIES'][$propID]['PROPERTY_TYPE'] === 'L'
														&& $item['PROPERTIES'][$propID]['LIST_TYPE'] === 'C'
													) {
														foreach ($propInfo['VALUES'] as $valueID => $value) {
													?>
															<label>
																<? $checked = $valueID === $propInfo['SELECTED'] ? 'checked' : ''; ?>
																<input type="radio" name="<?= $arParams['PRODUCT_PROPS_VARIABLE'] ?>[<?= $propID ?>]"
																	value="<?= $valueID ?>" <?= $checked ?>>
																<?= $value ?>
															</label>
															<br />
														<?
														}
													} else {
														?>
														<select name="<?= $arParams['PRODUCT_PROPS_VARIABLE'] ?>[<?= $propID ?>]">
															<?
															foreach ($propInfo['VALUES'] as $valueID => $value) {
																$selected = $valueID === $propInfo['SELECTED'] ? 'selected' : '';
															?>
																<option value="<?= $valueID ?>" <?= $selected ?>>
																	<?= $value ?>
																</option>
															<?
															}
															?>
														</select>
													<?
													}
													?>
												</td>
											</tr>
										<?
										}
										?>
									</table>
								<?
								}
								?>
							</div>
						<?
						}
					} else {
						$showProductProps = !empty($item['DISPLAY_PROPERTIES']);
						$showOfferProps = $arParams['PRODUCT_DISPLAY_MODE'] === 'Y' && $item['OFFERS_PROPS_DISPLAY'];

						if ($showProductProps || $showOfferProps) {
						?>
							<div class="product-item-info-container product-item-hidden" data-entity="props-block">
								<dl class="product-item-properties">
									<?
									if ($showProductProps) {
										foreach ($item['DISPLAY_PROPERTIES'] as $code => $displayProperty) {
									?>
											<dt class="text-muted<?= (!isset($item['PROPERTY_CODE_MOBILE'][$code]) ? ' d-none d-sm-block' : '') ?>">
												<?= $displayProperty['NAME'] ?>
											</dt>
											<dd class="text-dark<?= (!isset($item['PROPERTY_CODE_MOBILE'][$code]) ? ' d-none d-sm-block' : '') ?>">
												<?= (is_array($displayProperty['DISPLAY_VALUE'])
													? implode(' / ', $displayProperty['DISPLAY_VALUE'])
													: $displayProperty['DISPLAY_VALUE']) ?>
											</dd>
										<?
										}
									}

									if ($showOfferProps) {
										?>
										<span id="<?= $itemIds['DISPLAY_PROP_DIV'] ?>" style="display: none;"></span>
									<?
									}
									?>
								</dl>
							</div>
	<?
						}
					}

					break;
			}
		}
	}

	?>
</div>