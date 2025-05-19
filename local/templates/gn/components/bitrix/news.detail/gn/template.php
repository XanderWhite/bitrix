<section class="news-detail-section container">
    <h2 class="news-detail-section__title"><?= $arResult["NAME"] ?></h2>
    <div class="news-detail-section__content">
        <div class="article news-detail-section__content__block">
            <span class="news-date"><?= $arResult["DISPLAY_ACTIVE_FROM"] ?></span>
            <div class="news-title active">
                <?= $arResult["PREVIEW_TEXT"]; ?>
            </div>
            <div class="news-text"><?= $arResult["DETAIL_TEXT"]; ?></div>
            <a class="news-link" href='/news'>
                <svg class="news-link__svg reverse news-link__svg_left" viewBox="0 0 27.004 13.322">
                    <path d="M1.02 7.64 1 7.66c-.56 0-1-.44-1-1s.44-1 1-1l.02.02v1.96Zm23.56-.98-4.95-4.95a.99.99 0 0 1 0-1.42c.4-.39 1.02-.39 1.42 0l5.65 5.66c.4.39.4 1.02 0 1.41l-5.65 5.66c-.4.4-1.02.4-1.42 0-.4-.4-.4-1.02 0-1.41l4.95-4.95Z" />
                    <path d="m23.58 5.66-3.95-3.95a.99.99 0 0 1 0-1.42c.4-.39 1.02-.39 1.42 0l5.65 5.66c.4.39.4 1.02 0 1.41l-5.65 5.66c-.4.4-1.02.4-1.42 0-.4-.4-.4-1.02 0-1.41l3.95-3.95H1c-.56 0-1-.44-1-1s.44-1 1-1h22.58Z" />
                </svg>
                <span class="news-link__text">
                    назад к новостям
                </span>
            </a>

            <?php if (!empty($arResult['THEMES'])): ?>
                <div class="news-themes">
                    <b>Темы:</b>
                    <?php foreach ($arResult['THEMES'] as $theme) {
                        $themes[] = '<a href=' . $theme["URL"] . ' class="theme-link">' . $theme['NAME'] . '</a>';
                    }
                    echo implode(', ', $themes);
                    ?>
                </div>
            <?php endif; ?>
        </div>

        <?php if (!empty($arResult["DETAIL_PICTURE"]["SRC"])): ?>


            <div class="news-detail-section__content__block">
                <img class="news-detail-section__image"
                    src="<?= $arResult["DETAIL_PICTURE"]["SRC"] ?>"
                    alt="<?= !empty($arResult["DETAIL_PICTURE"]["ALT"]) ? $arResult["DETAIL_PICTURE"]["ALT"] : $arResult["NAME"] ?>">
            </div>
        <?php endif; ?>


    </div>
</section>