<?php
chdir('../..');
$_SERVER['DOCUMENT_ROOT'] = getcwd();
require_once($_SERVER['DOCUMENT_ROOT'] . '/bitrix/modules/main/include/prolog_before.php');
TAO::CLI();