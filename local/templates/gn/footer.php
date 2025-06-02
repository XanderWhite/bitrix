<?
ob_start();
$APPLICATION->IncludeComponent(
	"bitrix:main.include",
	".default",
	array(
		"AREA_FILE_SHOW" => "file",
		"AREA_FILE_SUFFIX" => "inc",
		"EDIT_TEMPLATE" => "",
		"PATH" => "/include/copyright.php",
		"COMPONENT_TEMPLATE" => ".default"
	),
	false
);

$footer = ob_get_clean();

echo \TAO::frontend()->renderBlock(
	'common/footer',
	[
		'footer' => $footer,
		'class' => 'container'
	]
); ?>

</div>

</body>

</html>