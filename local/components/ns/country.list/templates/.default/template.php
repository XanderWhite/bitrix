<?php
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

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

if (empty($this->arResult['COUNTRIES'])) {
    ShowError('Страны не найдены');
}
?>

<div class="countries-list">
    ввввввв
    <ul>
        <?php foreach ($arResult['COUNTRIES'] as $country): ?>
            <li> <?= $country['NAME'] ?> </li>
        <?php endforeach; ?>
    </ul>
</div>