<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>

<div class="last-news" style="background: url('<?= $arResult["ITEMS"][0]["PREVIEW_PICTURE"]["SRC"] ?>') #333 no-repeat center / cover;">
    <div class="last-news__inner container">

        <a class="last-news__title-link" href='<?= $arResult["ITEMS"][0]["DETAIL_PAGE_URL"] ?>'>
            <h2 class="last-news__title"> <?= $arResult["ITEMS"][0]["NAME"] ?></h2>
        </a>
        <div class="last-news__text"><?= $arResult["ITEMS"][0]["PREVIEW_TEXT"] ?></div>
    </div>
</div>