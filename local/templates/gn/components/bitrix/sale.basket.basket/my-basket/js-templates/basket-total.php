<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();

use Bitrix\Main\Localization\Loc;

/**
 * @var array $arParams
 */
?>
<script id="basket-total-template" type="text/html">
	<div class="basket-checkout-container" data-entity="basket-checkout-aligner">
		<div class="basket-checkout-block basket-checkout-block-total">
			<div class="basket-checkout-block-total-title"><?= Loc::getMessage('SBB_TOTAL') ?>:</div>
			<div class="basket-checkout-block-total-description">
				{{#WEIGHT_FORMATED}}
					<?= Loc::getMessage('SBB_WEIGHT') ?>: {{{WEIGHT_FORMATED}}}
					{{#SHOW_VAT}}<br>{{/SHOW_VAT}}
				{{/WEIGHT_FORMATED}}
				{{#SHOW_VAT}}
					<?= Loc::getMessage('SBB_VAT') ?>: {{{VAT_SUM_FORMATED}}}
				{{/SHOW_VAT}}
			</div>
		</div>


		<div class="basket-checkout-block basket-checkout-block-total-price">
			{{#DISCOUNT_PRICE_FORMATED}}
				<div class="basket-coupon-block-total-price-old">
					{{{PRICE_WITHOUT_DISCOUNT_FORMATED}}}
				</div>
			{{/DISCOUNT_PRICE_FORMATED}}

			<div class="basket-coupon-block-total-price-current" data-entity="basket-total-price">
				{{{PRICE_FORMATED}}}
			</div>

			{{#DISCOUNT_PRICE_FORMATED}}
				<div class="basket-coupon-block-total-price-difference">
					<?= Loc::getMessage('SBB_BASKET_ITEM_ECONOMY') ?>
					<span style="white-space: nowrap;">{{{DISCOUNT_PRICE_FORMATED}}}</span>
				</div>
			{{/DISCOUNT_PRICE_FORMATED}}
		</div>

		<div class="basket-checkout-block basket-checkout-block-btn">
			<button class="btn btn-lg btn-default basket-btn-checkout{{#DISABLE_CHECKOUT}} disabled{{/DISABLE_CHECKOUT}} b-basket-button"
				data-entity="basket-checkout-button">
				<?= Loc::getMessage('SBB_ORDER') ?>
			</button>
		</div>
	</div>
</script>