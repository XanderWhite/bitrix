<?php
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

class CountryListComponent extends CBitrixComponent
{
    public function executeComponent()
    {
        echo '<pre>';
print_r($this->arParams);
print_r($this->arResult);
die();

        if (!CModule::IncludeModule('iblock')) {
            ShowError('Модуль iblock не установлен');
            return;
        }

        if (CModule::IncludeModule('iblock')) {
            $filter = [
                'IBLOCK_ID' => $this->arParams['IBLOCK_ID'],
                'ACTIVE' => 'Y',
            ];

            $select = [
                'ID',
                'NAME',
            ];

            $res = CIBlockElement::GetList(
                ['NAME' => 'ASC'],
                $filter,
                false,
                false,
                $select
            );

            while ($elem = $res->GetNextElement()) {
                $fields = $elem->GetFields();
                $fields['PROPERTIES'] = $elem->GetProperties();
                $this->arResult['COUNTRIES'][] = $fields;
            }
        }
        $this->includeComponentTemplate();
    }
}
