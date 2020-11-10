<template>
  <div>
    <basicDatePicker class="demo-item"></basicDatePicker>
    <customizeDatePicker class="demo-item"></customizeDatePicker>
    <notSelectableDatePicker class="demo-item"></notSelectableDatePicker>
    <disableDatePicker class="demo-item"></disableDatePicker>
    <additionalDatePicker class="demo-item"></additionalDatePicker>
    <dateFormatDatePicker class="demo-item"></dateFormatDatePicker>
    <controlledDatePicker class="demo-item"></controlledDatePicker>
    <presetRangeDatePicker class="demo-item"></presetRangeDatePicker>
    <sizeDatePicker class="demo-item"></sizeDatePicker>
    <customRangeDatePicker class="demo-item"></customRangeDatePicker>
    <timeSelectionDatePicker class="demo-item"></timeSelectionDatePicker>
    <customRenderingDatePicker class="demo-item"></customRenderingDatePicker>
    <suffixIconDatePicker class="demo-item"></suffixIconDatePicker>
    <MarkdownRender mdFileName="datePicker" />
  </div>
</template>
<script>
import basicDatePicker from './componentCollection/basicDatePicker'
import customizeDatePicker from './componentCollection/customizeDatePicker'
import notSelectableDatePicker from './componentCollection/notSelectableDatePicker'
import disableDatePicker from './componentCollection/disableDatePicker'
import additionalDatePicker from './componentCollection/additionalDatePicker'
import dateFormatDatePicker from './componentCollection/dateFormatDatePicker'
import controlledDatePicker from './componentCollection/controlledDatePicker'
import presetRangeDatePicker from './componentCollection/presetRangeDatePicker'
import sizeDatePicker from './componentCollection/sizeDatePicker'
import customRangeDatePicker from './componentCollection/customRangeDatePicker'
import timeSelectionDatePicker from './componentCollection/timeSelectionDatePicker'
import customRenderingDatePicker from './componentCollection/customRenderingDatePicker'
import suffixIconDatePicker from './componentCollection/suffixIconDatePicker'

export default {
  components: {
    basicDatePicker,
    customizeDatePicker,
    notSelectableDatePicker,
    disableDatePicker,
    additionalDatePicker,
    dateFormatDatePicker,
    controlledDatePicker,
    presetRangeDatePicker,
    sizeDatePicker,
    customRangeDatePicker,
    timeSelectionDatePicker,
    customRenderingDatePicker,
    suffixIconDatePicker
  }
}
</script>
<style lang="scss"></style>
