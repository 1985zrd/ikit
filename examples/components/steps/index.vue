
<template>
  <div>
    <Simple></Simple>
    <SmallSize></SmallSize>
    <Icon></Icon>
    <StepNext></StepNext>
    <Vertical></Vertical>
    <VerticalSmall></VerticalSmall>
    <Error></Error>
    <ProgressDot></ProgressDot>
    <CustomizedProgressDot></CustomizedProgressDot>
    <MarkdownRender mdFileName="steps" />
  </div>
</template>

<script>
import Simple from './component-collection/Simple'
import SmallSize from './component-collection/SmallSize'
import Icon from './component-collection/Icon'
import StepNext from './component-collection/StepNext'
import Vertical from './component-collection/Vertical'
import VerticalSmall from './component-collection/VerticalSmall'
import Error from './component-collection/Error'
import ProgressDot from './component-collection/ProgressDot'
import CustomizedProgressDot from './component-collection/CustomizedProgressDot'

export default {
  name: 'steps-dome',
  components: {
    Simple,
    SmallSize,
    Icon,
    StepNext,
    Vertical,
    VerticalSmall,
    Error,
    ProgressDot,
    CustomizedProgressDot
  }
}
</script>
