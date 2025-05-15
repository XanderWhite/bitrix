
<footer class="footer container">
    <? $APPLICATION->IncludeComponent(
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
); ?>
</footer>
</div>
</body>

</html>