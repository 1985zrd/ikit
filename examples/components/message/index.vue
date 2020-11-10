<template>
  <div class="message">
    <normalPrompt></normalPrompt>
    <durationPrompt></durationPrompt>
    <indicatorPrompt></indicatorPrompt>
    <otherPrompt></otherPrompt>
    <sequencePrompt></sequencePrompt>
    <MarkdownRender mdFileName="message" />
  </div>
</template>

<script>
import normalPrompt from './component-collection/NormalPrompt'
import durationPrompt from './component-collection/DurationPrompt'
import indicatorPrompt from './component-collection/IndicatorPrompt'
import otherPrompt from './component-collection/OtherPrompt'
import sequencePrompt from './component-collection/SequencePrompt'

export default {
  components: { normalPrompt, durationPrompt, indicatorPrompt, otherPrompt, sequencePrompt }
}
</script>

<style lang="scss"></style>
