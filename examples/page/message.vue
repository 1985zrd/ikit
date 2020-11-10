<template>
  <div class="message">
    <normalPrompt></normalPrompt>
    <durationPrompt></durationPrompt>
    <indicatorPrompt></indicatorPrompt>
    <otherPrompt></otherPrompt>
    <sequencePrompt></sequencePrompt>
  </div>
</template>

<script>
import normalPrompt from '../components/message/component-collection/NormalPrompt'
import durationPrompt from '../components/message/component-collection/DurationPrompt'
import indicatorPrompt from '../components/message/component-collection/IndicatorPrompt'
import otherPrompt from '../components/message/component-collection/OtherPrompt'
import sequencePrompt from '../components/message/component-collection/SequencePrompt'

export default {
  components: { normalPrompt, durationPrompt, indicatorPrompt, otherPrompt, sequencePrompt }
}
</script>

<style lang="scss">
.message .content {
  padding: 40px 0;
}
</style>
