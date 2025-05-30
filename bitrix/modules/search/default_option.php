<?php
$search_default_option = [
	'include_mask' => '*.php;*.html;*.htm',
	'exclude_mask' => '/bitrix/*;/404.php;/upload/*;*/.hg/*;*/.svn/*;*/.git/*;*/cgi-bin/*;/bitrix_personal/*;/local/*',
	'max_file_size' => '',
	'max_execution_time' => '20',
	'use_stemming' => 'Y',
	'agent_stemming' => 'N',
	'agent_duration' => 2,
	'letters' => '-',
	'max_result_size' => 500,
	'max_body_size' => 100000,
	'page_tag_property' => 'tags',
	'suggest_save_days' => 30,
	'stat_phrase' => 'Y',
	'stat_phrase_save_days' => 360,
	'use_tf_cache' => 'N',
	'use_word_distance' => 'N',
	'use_social_rating' => 'N',
	'full_text_engine' => 'bitrix',
	'sphinx_connection' => '127.0.0.1:9306',
	'sphinx_index_name' => 'bitrix',
];
