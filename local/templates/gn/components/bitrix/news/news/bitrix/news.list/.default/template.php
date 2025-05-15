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
$this->setFrameMode(true);
?>

<section class="news-section container">
	<h2 class="news-section__title">Новости</h2>
	<div class="news-list">
		<? if ($arParams["DISPLAY_TOP_PAGER"]): ?>
			<?= $arResult["NAV_STRING"] ?><br />
		<? endif; ?>
		<? foreach ($arResult["ITEMS"] as $arItem): ?>
			<?
			$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
			$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
			?>
			<div class="news-item" id="<?= $this->GetEditAreaId($arItem['ID']); ?>">
				<? if ($arParams["DISPLAY_PICTURE"] != "N" && is_array($arItem["PREVIEW_PICTURE"])): ?>
					<? if (!$arParams["HIDE_LINK_WHEN_NO_DETAIL"] || ($arItem["DETAIL_TEXT"] && $arResult["USER_HAVE_ACCESS"])): ?>
						<a href="<?= $arItem["DETAIL_PAGE_URL"] ?>"><img
								class="preview_picture"
								border="0"
								src="<?= $arItem["PREVIEW_PICTURE"]["SRC"] ?>"
								width="<?= $arItem["PREVIEW_PICTURE"]["WIDTH"] ?>"
								height="<?= $arItem["PREVIEW_PICTURE"]["HEIGHT"] ?>"
								alt="<?= $arItem["PREVIEW_PICTURE"]["ALT"] ?>"
								title="<?= $arItem["PREVIEW_PICTURE"]["TITLE"] ?>"
								style="float:left" /></a>
					<? else: ?>
						<img
							class="preview_picture"
							border="0"
							src="<?= $arItem["PREVIEW_PICTURE"]["SRC"] ?>"
							width="<?= $arItem["PREVIEW_PICTURE"]["WIDTH"] ?>"
							height="<?= $arItem["PREVIEW_PICTURE"]["HEIGHT"] ?>"
							alt="<?= $arItem["PREVIEW_PICTURE"]["ALT"] ?>"
							title="<?= $arItem["PREVIEW_PICTURE"]["TITLE"] ?>"
							style="float:left" />
					<? endif; ?>
				<? endif ?>
				<? if ($arParams["DISPLAY_DATE"] != "N" && $arItem["DISPLAY_ACTIVE_FROM"]): ?>
					<span class="news-date"><? echo $arItem["DISPLAY_ACTIVE_FROM"] ?></span>
				<? endif ?>
				<? if ($arParams["DISPLAY_NAME"] != "N" && $arItem["NAME"]): ?>
					<? if (!$arParams["HIDE_LINK_WHEN_NO_DETAIL"] || ($arItem["DETAIL_TEXT"] && $arResult["USER_HAVE_ACCESS"])): ?>
						<a class="news-title" href="<? echo $arItem["DETAIL_PAGE_URL"] ?>"><b><? echo $arItem["NAME"] ?></b></a>
					<? else: ?>
						<b><? echo $arItem["NAME"] ?></b><br />
					<? endif; ?>
				<? endif; ?>

				<? if ($arParams["DISPLAY_PREVIEW_TEXT"] != "N" && $arItem["PREVIEW_TEXT"]): ?>
					<div class="news-text"><? echo $arItem["PREVIEW_TEXT"]; ?></div>
				<? endif; ?>

				<a class="news-link" href="/news/<? echo $arItem["DETAIL_PAGE_URL"] ?>">
					<span class="news-link__text">
						подробнее
					</span>
					<svg class="news-link__svg" viewBox="0 0 27.004 13.322">
						<path d="M1.02 7.64 1 7.66c-.56 0-1-.44-1-1s.44-1 1-1l.02.02v1.96Zm23.56-.98-4.95-4.95a.99.99 0 0 1 0-1.42c.4-.39 1.02-.39 1.42 0l5.65 5.66c.4.39.4 1.02 0 1.41l-5.65 5.66c-.4.4-1.02.4-1.42 0-.4-.4-.4-1.02 0-1.41l4.95-4.95Z" />
						<path d="m23.58 5.66-3.95-3.95a.99.99 0 0 1 0-1.42c.4-.39 1.02-.39 1.42 0l5.65 5.66c.4.39.4 1.02 0 1.41l-5.65 5.66c-.4.4-1.02.4-1.42 0-.4-.4-.4-1.02 0-1.41l3.95-3.95H1c-.56 0-1-.44-1-1s.44-1 1-1h22.58Z" />
					</svg>
				</a>


				<? if ($arParams["DISPLAY_PICTURE"] != "N" && is_array($arItem["PREVIEW_PICTURE"])): ?>
					<div style="clear:both"></div>
				<? endif ?>
				<? foreach ($arItem["FIELDS"] as $code => $value): ?>
					<small>
						<?= GetMessage("IBLOCK_FIELD_" . $code) ?>:&nbsp;<?= $value; ?>
					</small><br />
				<? endforeach; ?>
				<? foreach ($arItem["DISPLAY_PROPERTIES"] as $pid => $arProperty): ?>
					<small>
						<?= $arProperty["NAME"] ?>:&nbsp;
						<? if (is_array($arProperty["DISPLAY_VALUE"])): ?>
							<?= implode("&nbsp;/&nbsp;", $arProperty["DISPLAY_VALUE"]); ?>
						<? else: ?>
							<?= $arProperty["DISPLAY_VALUE"]; ?>
						<? endif ?>
					</small><br />
				<? endforeach; ?>
			</div>
		<? endforeach; ?>
		<? if ($arParams["DISPLAY_BOTTOM_PAGER"]): ?>
			<br /><?= $arResult["NAV_STRING"] ?>
		<? endif; ?>
	</div>






	
	<?php if (isset($pagination)) : ?>
		<div class="pagination">
			<?php if ($pagination->getPrevious()): ?>
				<a class="pagination__link pagination__link_arrow reverse" href="/page/<?= $pagination->getPrevious() ?>">
					<svg class="pagination__link__svg" viewBox="0 0 16.763 13.322">
						<path d="M13.34 5.66 9.39 1.71a.99.99 0 0 1 0-1.42.996.996 0 0 1 1.41 0l5.66 5.66c.4.39.4 1.02 0 1.41l-5.66 5.66c-.39.4-1.01.4-1.41 0-.4-.4-.4-1.02 0-1.41l3.95-3.95H1c-.57 0-1-.44-1-1s.43-1 1-1h12.34Z" />
					</svg>
				</a>
			<?php endif; ?>

			<?php foreach ($pagination->getPages() as $pageNumber): ?>
				<?php if ($pageNumber == $pagination->getCurrent()): ?>
					<span class="pagination__link active"><?= $pageNumber ?></span>
				<?php else: ?>
					<a class="pagination__link" href="/page/<?= $pageNumber ?>"><?= $pageNumber ?></a>
				<?php endif; ?>
			<?php endforeach; ?>

			<?php if ($pagination->getNext()): ?>
				<a class="pagination__link pagination__link_arrow" href="/page/<?= $pagination->getNext() ?>">
					<svg class="pagination__link__svg" viewBox="0 0 16.763 13.322">
						<path d="M13.34 5.66 9.39 1.71a.99.99 0 0 1 0-1.42.996.996 0 0 1 1.41 0l5.66 5.66c.4.39.4 1.02 0 1.41l-5.66 5.66c-.39.4-1.01.4-1.41 0-.4-.4-.4-1.02 0-1.41l3.95-3.95H1c-.57 0-1-.44-1-1s.43-1 1-1h12.34Z" />
					</svg>
				</a>
			<?php endif; ?>
		</div>
	<?php endif; ?>
</section>