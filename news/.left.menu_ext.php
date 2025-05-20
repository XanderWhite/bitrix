<?



CModule::IncludeModule("iblock");
$res = CIBlockElement::GetList(
	array("NAME" => "ASC"),
	array("IBLOCK_ID" => 5, "ACTIVE" => "Y"),
	false,
	false,
	array("ID", "NAME", "CODE")
);

$aMenuLinks = [];

while ($theme = $res->GetNext()) {

	$aMenuLinks[] =
		array(
			$theme['NAME'],
			"/news/themes/" . $theme["CODE"],
			array(),
			array(),
			""
		);
}
