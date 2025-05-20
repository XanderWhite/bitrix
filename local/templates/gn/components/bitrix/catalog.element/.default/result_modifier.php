<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();

/**
 * @var CBitrixComponentTemplate $this
 * @var CatalogElementComponent $component
 */

$component = $this->getComponent();
$arParams = $component->applyTemplateModifications();

if (!empty($arResult['PROPERTIES']['COUNTRIES']['VALUE'])) {
    $countryIds = $arResult['PROPERTIES']['COUNTRIES']['VALUE'];

    $res = CIBlockElement::GetList(
        [],
        ["ID" => $countryIds],
        false,
        false,
        ["ID", "NAME", "CODE"]
    );

    $countries = [];
    while ($country = $res->Fetch()) {
        $countries[] = [
            "NAME" => $country["NAME"],
            "URL" => "/tours/countries/" . $country["CODE"]
        ];
    }


    $arResult["COUNTRIES"] = $countries;
}

if (!empty($arResult['PROPERTIES']['TOPICS']['VALUE'])) {
    $topicIds = $arResult['PROPERTIES']['TOPICS']['VALUE'];

    $res = CIBlockElement::GetList(
        [],
        ["ID" => $topicIds],
        false,
        false,
        ["ID", "NAME", "CODE"]
    );

    $topics = [];
    while ($topic = $res->Fetch()) {
        $topics[] = [
            "NAME" => $topic["NAME"],
            "URL" => "/tours/topics/" . $topic["CODE"]
        ];
    }


    $arResult["TOPICS"] = $topics;
}

if (!empty($arResult['PROPERTIES']['TYPES']['VALUE'])) {
    $arResult["TYPE"] = $arResult['PROPERTIES']['TYPES']['VALUE'];
}
