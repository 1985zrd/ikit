<template>
  <div>
    <RadioBasics class="demo-item"></RadioBasics>
    <RadioDisabled class="demo-item"></RadioDisabled>
    <RadioStyle class="demo-item"></RadioStyle>
    <RadioBottomStyle class="demo-item"></RadioBottomStyle>
    <RadioGroup class="demo-item"></RadioGroup>
    <RadioGroupOption class="demo-item"></RadioGroupOption>
    <RadioName class="demo-item"></RadioName>
    <RadioMutaul class="demo-item"></RadioMutaul>
    <RadioSize class="demo-item"></RadioSize>
    <MarkdownRender mdFileName="radio"></MarkdownRender>
  </div>
</template>
<script>
import RadioBasics from './demo/radioBasics'
import RadioDisabled from './demo/radioDisabled'
import RadioStyle from './demo/radioStyle'
import RadioBottomStyle from './demo/radioBottomStyle'
import RadioGroup from './demo/radioGroup'
import RadioGroupOption from './demo/radioGroupOption'
import RadioName from './demo/radioName'
import RadioMutaul from './demo/radioMutaul'
import RadioSize from './demo/radioSize'
export default {
  name: 'radio',
  data () {
    return {}
  },
  components: {
    RadioBasics,
    RadioDisabled,
    RadioStyle,
    RadioBottomStyle,
    RadioGroup,
    RadioGroupOption,
    RadioName,
    RadioMutaul,
    RadioSize,
    MarkdownRender: () => import('../../apiDoc/radio.md')
  }
}
</script>
