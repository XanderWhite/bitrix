<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

if (!empty($arResult['PROPERTIES']['THEMES']['VALUE'])) {
    $themeIds = $arResult['PROPERTIES']['THEMES']['VALUE'];

    $res = CIBlockElement::GetList(
        [],
        ["ID" => $themeIds],
        false,
        false,
        ["ID", "NAME", "CODE"]
    );

    $themes = [];
    while ($theme = $res->Fetch()) {
        $themes[] = [
            "NAME" => $theme["NAME"],
            "URL" => "/news/themes/" . $theme["CODE"]
        ];
    }

    if (!empty($arResult['NAME'])) {
        $APPLICATION->SetPageProperty("title", "Галактический вестник. " . $arResult['NAME']);
        $APPLICATION->SetTitle($arResult['NAME']);
    }

    $arResult["THEMES"] = $themes;
}

global $USER;

if (
    !($USER->IsAuthorized() && (in_array(1, $USER->GetUserGroupArray()) || in_array(6, $USER->GetUserGroupArray())))
    && $arResult["PROPERTIES"]["RESTRICTED_ACCESS"]["VALUE"] === 'да'
) {
    \Bitrix\Iblock\Component\Tools::process404(
        "",
        true,
        true,
        true,
        false
    );
}

$arResult['CONTENT'] = [
    'date' =>  $arResult["DISPLAY_ACTIVE_FROM"],
    'title' =>  $arResult["PREVIEW_TEXT"],
    'text' => $arResult["DETAIL_TEXT"],
    'themes' => $arResult['THEMES'],
    'picSrc' => $arResult["DETAIL_PICTURE"]["SRC"],
    'picAlt' => $arResult["DETAIL_PICTURE"]["ALT"]
];
