<?php
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

if (empty($arResult['COUNTRIES'])) {
    ShowError('Страны не найдены');
    return;
}
?>
<div class="country">
    <h2 class="country__title"><?= $APPLICATION->showTitle(); ?></h2>
    <ul class="country-list">
        <?php foreach ($arResult['COUNTRIES'] as $country): ?>
            <li class="country-item"> <?= $country['NAME'] ?> </li>
            <?php endforeach; ?>
        </ul>
    </div>