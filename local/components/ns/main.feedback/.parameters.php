<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

$site = ($_REQUEST["site"] <> '' ? $_REQUEST["site"] : ($_REQUEST["src_site"] <> '' ? $_REQUEST["src_site"] : false));
$arFilter = array("TYPE_ID" => "FEEDBACK_FORM", "ACTIVE" => "Y");
if ($site !== false)
	$arFilter["LID"] = $site;

$arEvent = array();
$dbType = CEventMessage::GetList("id", "desc", $arFilter);
while ($arType = $dbType->GetNext())
	$arEvent[$arType["ID"]] = "[" . $arType["ID"] . "] " . $arType["SUBJECT"];

$arComponentParameters = array(
	"PARAMETERS" => array(
		"USE_CAPTCHA" => array(
			"NAME" => GetMessage("MFP_CAPTCHA"),
			"TYPE" => "CHECKBOX",
			"DEFAULT" => "Y",
			"PARENT" => "BASE",
		),
		"OK_TEXT" => array(
			"NAME" => GetMessage("MFP_OK_MESSAGE"),
			"TYPE" => "STRING",
			"DEFAULT" => GetMessage("MFP_OK_TEXT"),
			"PARENT" => "BASE",
		),
		"EMAIL_TO" => array(
			"NAME" => GetMessage("MFP_EMAIL_TO"),
			"TYPE" => "STRING",
			"DEFAULT" => htmlspecialcharsbx(COption::GetOptionString("main", "email_from")),
			"PARENT" => "BASE",
		),
		"REQUIRED_FIELDS" => array(
			"NAME" => GetMessage("MFP_REQUIRED_FIELDS"),
			"TYPE" => "LIST",
			"MULTIPLE" => "Y",
			"VALUES" => array("NONE" => GetMessage("MFP_ALL_REQ"), "NAME" => GetMessage("MFP_NAME"), "EMAIL" => "E-mail", "MESSAGE" => GetMessage("MFP_MESSAGE"), "COUNTRY" => GetMessage("MFP_COUNTRY"), "PHONE" => GetMessage("MFP_PHONE")),
			"DEFAULT" => "",
			"COLS" => 25,
			"PARENT" => "BASE",
		),

		"EVENT_MESSAGE_ID" => array(
			"NAME" => GetMessage("MFP_EMAIL_TEMPLATES"),
			"TYPE" => "LIST",
			"VALUES" => $arEvent,
			"DEFAULT" => "",
			"MULTIPLE" => "Y",
			"COLS" => 25,
			"PARENT" => "BASE",
		),
		"IBLOCK_ID" => [
			"PARENT" => "BASE",
			"NAME" => "ID инфоблока",
			"TYPE" => "STRING",
			"DEFAULT" => "",
			"REQUIRED" => "Y"
		]
	)
);
