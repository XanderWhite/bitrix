<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */

use Bitrix\Iblock\SectionPropertyTable;

$this->setFrameMode(true);

$templateData = array(
	'TEMPLATE_THEME' => $this->GetFolder() . '/themes/' . $arParams['TEMPLATE_THEME'] . '/colors.css',
	'TEMPLATE_CLASS' => 'bx-' . $arParams['TEMPLATE_THEME']
);

if (isset($templateData['TEMPLATE_THEME'])) {
	$this->addExternalCss($templateData['TEMPLATE_THEME']);
}
$this->addExternalCss("/bitrix/css/main/bootstrap.css");
$this->addExternalCss("/bitrix/css/main/font-awesome.css");
?>
<div class="bx-filter <?= $templateData["TEMPLATE_CLASS"] ?> <? if ($arParams["FILTER_VIEW_MODE"] == "HORIZONTAL") echo "bx-filter-horizontal" ?>">
	<div class="bx-filter-section container-fluid">
		<div class="row">
			<div class="<? if ($arParams["FILTER_VIEW_MODE"] == "HORIZONTAL"): ?>col-sm-6 col-md-4<? else: ?>col-lg-12<? endif ?> bx-filter-title"><? echo GetMessage("CT_BCSF_FILTER_TITLE") ?></div>
		</div>
		<form name="<? echo $arResult["FILTER_NAME"] . "_form" ?>" action="<? echo $arResult["FORM_ACTION"] ?>" method="get" class="smartfilter">
			<? foreach ($arResult["HIDDEN"] as $arItem): ?>
				<input type="hidden" name="<? echo $arItem["CONTROL_NAME"] ?>" id="<? echo $arItem["CONTROL_ID"] ?>" value="<? echo $arItem["HTML_VALUE"] ?>" />
			<? endforeach; ?>
			<div class="row">
				<?
				foreach ($arResult["ITEMS"] as $key => $arItem) {
					if (
						empty($arItem["VALUES"])
						|| isset($arItem["PRICE"])
					)
						continue;

				?>
					<div class="<? if ($arParams["FILTER_VIEW_MODE"] == "HORIZONTAL"): ?>col-sm-6 col-md-4<? else: ?>col-lg-12<? endif ?> bx-filter-parameters-box <? if ($arItem["DISPLAY_EXPANDED"] == "Y"): ?>bx-active<? endif ?>">
						<span class="bx-filter-container-modef"></span>
						<div class="bx-filter-parameters-box-title" onclick="smartFilter.hideFilterProps(this)">
							<span class="bx-filter-parameters-box-hint"><?= $arItem["NAME"] ?>
								<? if ($arItem["FILTER_HINT"] <> ""): ?>
									<i id="item_title_hint_<? echo $arItem["ID"] ?>" class="fa fa-question-circle"></i>
									<script>
										new top.BX.CHint({
											parent: top.BX("item_title_hint_<? echo $arItem["ID"] ?>"),
											show_timeout: 10,
											hide_timeout: 200,
											dx: 2,
											preventHide: true,
											min_width: 250,
											hint: '<?= CUtil::JSEscape($arItem["FILTER_HINT"]) ?>'
										});
									</script>
								<? endif ?>
								<i data-role="prop_angle" class="fa fa-angle-<? if ($arItem["DISPLAY_EXPANDED"] == "Y"): ?>up<? else: ?>down<? endif ?>"></i>
							</span>
						</div>

						<div class="bx-filter-block" data-role="bx_filter_block">
							<div class="row bx-filter-parameters-box-container">
								<?
								$arCur = current($arItem["VALUES"]);

								echo \TAO::frontend()->renderBlock(
									'catalog/catalog-filter_checkboxes',
									[
										'arItem' => $arItem,
										'arParams' => $arParams
									]
								);

								?>
							</div>
							<div style="clear: both"></div>
						</div>
					</div>
				<?
				}
				?>
			</div><!--//row-->
			<?
			echo \TAO::frontend()->renderBlock(
				'catalog/catalog-filter_buttons',
				[
					'arParams' => $arParams,
					'arResult' => $arResult
				]
			);
			?>
		</form>
	</div>
</div>
<?
echo \TAO::frontend()->renderBlock(
	'catalog/catalog-filter',
	[
		// Данные для фильтра
		'templateData' => $templateData, // данные шаблона (включая TEMPLATE_CLASS)
		'arParams' => $arParams, // параметры компонента
		'arResult' => $arResult, // результат работы компонента
		//  'arItem' => $arItem,
		// Дополнительные зависимости
		//
		'getMessage' => GetMessage('CT_BCSF_FILTER_TITLE'), // функция локализации

		// Настройки отображения
		'filterViewMode' => $arParams['FILTER_VIEW_MODE'], // режим отображения (HORIZONTAL/VERTICAL)
		// 'popupPosition' => $arParams['POPUP_POSITION'] ?? '', // позиция popup

		// Данные для фильтрации
		// 'hiddenFields' => $arResult['HIDDEN'], // скрытые поля формы
		'filterItems' => $arResult['ITEMS'], // элементы фильтра

		// JS параметры
		// 'jsFilterParams' => $arResult['JS_FILTER_PARAMS'], // параметры для инициализации JS

		// URL
		// 'filterUrl' => $arResult['FILTER_URL'], // URL для кнопки "Показать"

		// Количество элементов
		// 'elementCount' => $arResult['ELEMENT_COUNT'] ?? 0 // количество найденных элементов
	]
); ?>
<script>
	var smartFilter = new JCSmartFilter('<? echo CUtil::JSEscape($arResult["FORM_ACTION"]) ?>', '<?= CUtil::JSEscape($arParams["FILTER_VIEW_MODE"]) ?>', <?= CUtil::PhpToJSObject($arResult["JS_FILTER_PARAMS"]) ?>);
</script>