<template>
  <div>
    <basicSelect></basicSelect>
    <sizeSelect></sizeSelect>
    <tagSelect></tagSelect>
    <automaticTokenizationSelect></automaticTokenizationSelect>
    <getValueOfSelect></getValueOfSelect>
    <multipleSelect></multipleSelect>
    <coordInateSelect></coordInateSelect>
    <optionGroupSelect></optionGroupSelect>
    <searchBoxSelect></searchBoxSelect>
    <selectWithSearchSelect></selectWithSearchSelect>
    <searchAndSelectUsers></searchAndSelectUsers>
    <suffixSelect></suffixSelect>
    <hideAlreadySelect></hideAlreadySelect>
    <customDropdownSelect></customDropdownSelect>
    <MarkdownRender mdFileName="select" />
  </div>
</template>
<script>
import basicSelect from './selectCollection/basicSelect'
import sizeSelect from './selectCollection/sizeSelect'
import tagSelect from './selectCollection/tagSelect'
import automaticTokenizationSelect from './selectCollection/automaticTokenizationSelect'
import getValueOfSelect from './selectCollection/getValueOfSelect'
import multipleSelect from './selectCollection/multipleSelect'
import coordInateSelect from './selectCollection/coordInateSelect'
import optionGroupSelect from './selectCollection/optionGroupSelect'
import searchBoxSelect from './selectCollection/searchBoxSelect'
import selectWithSearchSelect from './selectCollection/selectWithSearchSelect'
import searchAndSelectUsers from './selectCollection/searchAndSelectUsers'
import suffixSelect from './selectCollection/suffixSelect'
import hideAlreadySelect from './selectCollection/hideAlreadySelect'
import customDropdownSelect from './selectCollection/customDropdownSelect'
export default {
  name: 'selectDemo',
  components: {
    basicSelect,
    sizeSelect,
    tagSelect,
    automaticTokenizationSelect,
    getValueOfSelect,
    multipleSelect,
    coordInateSelect,
    optionGroupSelect,
    searchBoxSelect,
    selectWithSearchSelect,
    searchAndSelectUsers,
    suffixSelect,
    hideAlreadySelect,
    customDropdownSelect
  }
}
</script>
