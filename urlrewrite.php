<?php
$arUrlRewrite=array (
  1 => 
  array (
    'CONDITION' => '#^/news/themes/([a-zA-Z0-9_-]+)/?(?:\\?.*)?$#',
    'RULE' => 'theme_code=$1',
    'ID' => '',
    'PATH' => '/news/index.php',
    'SORT' => 100,
  ),
  0 => 
  array (
    'CONDITION' => '#^/news/([0-9]+)/?(\\?.*)?$#',
    'RULE' => 'ELEMENT_ID=$1',
    'ID' => 'bitrix:news.detail',
    'PATH' => '/news/detail.php',
    'SORT' => 100,
  ),
);
