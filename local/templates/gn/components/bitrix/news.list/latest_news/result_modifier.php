<?
$arResult["LAST-NEWS"] = [];

foreach ($arResult["ITEMS"] as $item) {
  $arResult["LAST-NEWS"][] = [
        'name' => $item["NAME"],
        'text' => $item["PREVIEW_TEXT"],
        'url' =>  $item["DETAIL_PAGE_URL"],
        'pathPic' =>  $item["PREVIEW_PICTURE"]["SRC"],
        'class' => 'container'
    ];
}