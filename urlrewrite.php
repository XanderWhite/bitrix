<?php
$arUrlRewrite = array(
  2 =>
  array(
    'CONDITION' => '#^/news/details/([0-9]+)#',
    'RULE' => 'ELEMENT_ID=$1',
    'ID' => 'bitrix:news.detail',
    'PATH' => '/news/detail.php',
    'SORT' => 100,
  ),
  0 =>
  array(
    'CONDITION' => '#^/services/#',
    'RULE' => '',
    'ID' => 'bitrix:catalog',
    'PATH' => '/services/index.php',
    'SORT' => 100,
  ),
  1 =>
  array(
    'CONDITION' => '#^/products/#',
    'RULE' => '',
    'ID' => 'bitrix:catalog',
    'PATH' => '/products/index.php',
    'SORT' => 100,
  )
);
