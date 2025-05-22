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
