<template>
  <div>
    <TwelveTimePicker />
    <AppendTimePicker />
    <BasicTimePicker />
    <DisabledTimePicker />
    <SelectTimePicker />
    <StepTimePicker />
    <ThreeTimePicker />
    <ControlledTimePicker />
    <IconTimePicker />
    <MarkdownRender mdFileName="timePicker"></MarkdownRender>
  </div>
</template>
<script>
import TwelveTimePicker from './demo/TwelveTimePicker'
import AppendTimePicker from './demo/AppendTimePicker'
import BasicTimePicker from './demo/BasicTimePicker'
import DisabledTimePicker from './demo/DisabledTimePicker'
import SelectTimePicker from './demo/SelectTimePicker'
import StepTimePicker from './demo/StepTimePicker'
import ThreeTimePicker from './demo/ThreeTimePicker'
import ControlledTimePicker from './demo/ControlledTimePicker'
import IconTimePicker from './demo/IconTimePicker'

export default {
  components: {
    TwelveTimePicker,
    AppendTimePicker,
    BasicTimePicker,
    DisabledTimePicker,
    SelectTimePicker,
    StepTimePicker,
    ThreeTimePicker,
    ControlledTimePicker,
    IconTimePicker
  }
}
</script>
