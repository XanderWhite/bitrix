<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */

$this->setFrameMode(true);

if (!$arResult["NavShowAlways"]) {
	if ($arResult["NavRecordCount"] == 0 || ($arResult["NavPageCount"] == 1 && $arResult["NavShowAll"] == false))
		return;
}

$pageParam = "PAGEN_" . $arResult["NavNum"];

$currentUrl = $APPLICATION->GetCurPageParam("", array($pageParam));
$separator = strpos($currentUrl, '?') === false ? '?' : '&';
?>

<div class="pagination">
	<? if ($arResult["NavPageNomer"] > 1): ?>
		<a href="<?= $currentUrl . $separator . $pageParam . '=' . ($arResult["NavPageNomer"] - 1) ?>"
			class="pagination__link pagination__link_arrow reverse">
			<svg class="pagination__link__svg" viewBox="0 0 16.763 13.322">
				<path d="M13.34 5.66 9.39 1.71a.99.99 0 0 1 0-1.42.996.996 0 0 1 1.41 0l5.66 5.66c.4.39.4 1.02 0 1.41l-5.66 5.66c-.39.4-1.01.4-1.41 0-.4-.4-.4-1.02 0-1.41l3.95-3.95H1c-.57 0-1-.44-1-1s.43-1 1-1h12.34Z" />
			</svg>
		</a>
	<? endif ?>

	<? if ($arResult["nStartPage"] > 1): ?>
		<a href="<?= $currentUrl . $separator . $pageParam . '=1' ?>" class="pagination__link">1</a>
		<? if ($arResult["nStartPage"] > 2): ?>
			<span class="pagination__dots">...</span>
		<? endif ?>
	<? endif ?>

	<? while ($arResult["nStartPage"] <= $arResult["nEndPage"]): ?>
		<? if ($arResult["nStartPage"] == $arResult["NavPageNomer"]): ?>
			<span class="pagination__link active"><?= $arResult["nStartPage"] ?></span>
		<? else: ?>
			<a href="<?= $currentUrl . $separator . $pageParam . '=' . $arResult["nStartPage"] ?>"
				class="pagination__link">
				<?= $arResult["nStartPage"] ?>
			</a>
		<? endif ?>
		<? $arResult["nStartPage"]++ ?>
	<? endwhile ?>

	<? if ($arResult["nEndPage"] < $arResult["NavPageCount"]): ?>
		<? if ($arResult["nEndPage"] < $arResult["NavPageCount"] - 1): ?>
			<span class="pagination__dots">...</span>
		<? endif ?>
		<a href="<?= $currentUrl . $separator . $pageParam . '=' . $arResult["NavPageCount"] ?>"
			class="pagination__link">
			<?= $arResult["NavPageCount"] ?>
		</a>
	<? endif ?>

	<? if ($arResult["NavPageNomer"] < $arResult["NavPageCount"]): ?>
		<a href="<?= $currentUrl . $separator . $pageParam . '=' . ($arResult["NavPageNomer"] + 1) ?>"
			class="pagination__link pagination__link_arrow">
			<svg class="pagination__link__svg" viewBox="0 0 16.763 13.322">
				<path d="M13.34 5.66 9.39 1.71a.99.99 0 0 1 0-1.42.996.996 0 0 1 1.41 0l5.66 5.66c.4.39.4 1.02 0 1.41l-5.66 5.66c-.39.4-1.01.4-1.41 0-.4-.4-.4-1.02 0-1.41l3.95-3.95H1c-.57 0-1-.44-1-1s.43-1 1-1h12.34Z" />
			</svg>
		</a>
	<? endif ?>
</div>