<template>
    <div>
      <noDataIcon></noDataIcon>
      <basicUsage></basicUsage>
      <basicUsageStripe></basicUsageStripe>
      <border></border>
      <conpactType></conpactType>
      <controllableFilteringAndSorting></controllableFilteringAndSorting>
      <customFilterMenu></customFilterMenu>
      <customSection></customSection>
      <deployable></deployable>
      <editableCell></editableCell>
      <editableRow></editableRow>
      <filteringAndSorting></filteringAndSorting>
      <fixedcolumn></fixedcolumn>
      <fixedHead></fixedHead>
      <fixedHeadAndColumn></fixedHeadAndColumn>
      <formMerging></formMerging>
      <headerGrouping></headerGrouping>
      <loadDataRemotely></loadDataRemotely>
      <nestedSubTable></nestedSubTable>
      <sectionAndOperation></sectionAndOperation>
      <selectable></selectable>
      <templateApi></templateApi>
      <treeDataDisplay></treeDataDisplay>
      <MarkdownRender mdFileName="table"/>
    </div>
</template>

<script>
import noDataIcon from './componentCollection/noDataIcon'
import basicUsage from './componentCollection/basicUsage'
import basicUsageStripe from './componentCollection/basicUsageStripe'
import border from './componentCollection/border'
import conpactType from './componentCollection/conpactType'
import controllableFilteringAndSorting from './componentCollection/controllableFilteringAndSorting'
import customFilterMenu from './componentCollection/customFilterMenu'
import customSection from './componentCollection/customSection'
import deployable from './componentCollection/deployable'
import editableCell from './componentCollection/editableCell'
import editableRow from './componentCollection/editableRow'
import filteringAndSorting from './componentCollection/filteringAndSorting'
import fixedcolumn from './componentCollection/fixedcolumn'
import fixedHead from './componentCollection/fixedHead'
import fixedHeadAndColumn from './componentCollection/fixedHeadAndColumn'
import formMerging from './componentCollection/formMerging'
import headerGrouping from './componentCollection/headerGrouping'
import loadDataRemotely from './componentCollection/loadDataRemotely'
import nestedSubTable from './componentCollection/nestedSubTable'
import sectionAndOperation from './componentCollection/sectionAndOperation'
import selectable from './componentCollection/selectable'
import templateApi from './componentCollection/templateApi'
import treeDataDisplay from './componentCollection/treeDataDisplay'

export default {
  name: 'tableDemo',
  components: {
    noDataIcon,
    basicUsage,
    basicUsageStripe,
    border,
    conpactType,
    controllableFilteringAndSorting,
    customFilterMenu,
    customSection,
    deployable,
    editableCell,
    editableRow,
    filteringAndSorting,
    fixedcolumn,
    fixedHead,
    fixedHeadAndColumn,
    formMerging,
    headerGrouping,
    loadDataRemotely,
    nestedSubTable,
    sectionAndOperation,
    selectable,
    templateApi,
    treeDataDisplay
  }
}
</script>
