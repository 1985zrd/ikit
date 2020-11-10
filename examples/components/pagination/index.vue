<template>
  <div>
    <basicPaging></basicPaging>
    <changeTheNumberOfPage></changeTheNumberOfPage>
    <conciseVersion></conciseVersion>
    <controlledVersion></controlledVersion>
    <customDropdownOptions></customDropdownOptions>
    <jumpPage></jumpPage>
    <miniVersion></miniVersion>
    <morePaging></morePaging>
    <nextAndPre></nextAndPre>
    <total></total>
    <MarkdownRender mdFileName="pagination"/>
  </div>
</template>
<script>
import basicPaging from './componentCollection/basicPaging'
import changeTheNumberOfPage from './componentCollection/changeTheNumberOfPage'
import conciseVersion from './componentCollection/conciseVersion'
import controlledVersion from './componentCollection/controlledVersion'
import customDropdownOptions from './componentCollection/customDropdownOptions'
import jumpPage from './componentCollection/jumpPage'
import miniVersion from './componentCollection/miniVersion'
import morePaging from './componentCollection/morePaging'
import nextAndPre from './componentCollection/nextAndPre'
import total from './componentCollection/total'
export default {
  name: 'paginationDemo',
  components: {
    basicPaging,
    changeTheNumberOfPage,
    conciseVersion,
    controlledVersion,
    customDropdownOptions,
    jumpPage,
    miniVersion,
    morePaging,
    nextAndPre,
    total
  }
}
</script>
