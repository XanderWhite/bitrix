<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>

<section class="news-section container">
    <h2 class="news-section__title"><?=$APPLICATION->showTitle();?></h2>
    <div class="news-list">
        <? foreach ($arResult["ITEMS"] as $arItem): ?>
            <article class="news-item">
                <span class="news-date"><?= $arItem["DISPLAY_ACTIVE_FROM"] ?></span>
                <h3 class="news-title"><?= $arItem["NAME"] ?></h3>
                <div class="news-text"><?= $arItem["PREVIEW_TEXT"] ?></div>
                <a class="news-link" href="<?= $arItem["DETAIL_PAGE_URL"] ?>">
                    <span class="news-link__text">
                        подробнее
                    </span>
                    <svg class="news-link__svg" viewBox="0 0 27.004 13.322">
                        <path d="M1.02 7.64 1 7.66c-.56 0-1-.44-1-1s.44-1 1-1l.02.02v1.96Zm23.56-.98-4.95-4.95a.99.99 0 0 1 0-1.42c.4-.39 1.02-.39 1.42 0l5.65 5.66c.4.39.4 1.02 0 1.41l-5.65 5.66c-.4.4-1.02.4-1.42 0-.4-.4-.4-1.02 0-1.41l4.95-4.95Z" />
                        <path d="m23.58 5.66-3.95-3.95a.99.99 0 0 1 0-1.42c.4-.39 1.02-.39 1.42 0l5.65 5.66c.4.39.4 1.02 0 1.41l-5.65 5.66c-.4.4-1.02.4-1.42 0-.4-.4-.4-1.02 0-1.41l3.95-3.95H1c-.56 0-1-.44-1-1s.44-1 1-1h22.58Z" />
                    </svg>
                </a>
            </article>
        <? endforeach; ?>
    </div>
    <? if ($arParams["DISPLAY_BOTTOM_PAGER"]): ?>
        <br /><?= $arResult["NAV_STRING"] ?>
    <? endif; ?>


</section>