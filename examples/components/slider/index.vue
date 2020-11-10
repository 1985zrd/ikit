<template>
  <div>
    <Base />
    <BindInput />
    <BindIcon />
    <CustomTip />
    <Event />
    <HasLabel />
    <Vertical />
    <ShowTip />
    <MarkdownRender mdFileName="slider" />
  </div>
</template>
<script>
import Base from './components/base'
import BindInput from './components/bindInput'
import BindIcon from './components/bindIcon'
import CustomTip from './components/customTip'
import Event from './components/event'
import HasLabel from './components/hasLabel'
import Vertical from './components/vertical'
import ShowTip from './components/showTip'
export default {
  name: 'sliderDemo',
  components: {
    Base,
    BindInput,
    BindIcon,
    CustomTip,
    Event,
    HasLabel,
    Vertical,
    ShowTip
  }
}
</script>
