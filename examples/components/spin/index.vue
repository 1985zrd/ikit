<template>
  <div>
    <basicSpin></basicSpin>
    <IkangLoading />
    <sizeSpin></sizeSpin>
    <insideContainerSpin></insideContainerSpin>
    <embedModeSpin></embedModeSpin>
    <customizeDescriptionSpin></customizeDescriptionSpin>
    <delaySpin></delaySpin>
    <customIndicSpin></customIndicSpin>
    <MarkdownRender mdFileName="spin" />
  </div>
</template>
<script>
import basicSpin from './spinCollection/basicSpin'
import IkangLoading from './spinCollection/ikangLoading'
import sizeSpin from './spinCollection/sizeSpin'
import insideContainerSpin from './spinCollection/insideContainerSpin'
import embedModeSpin from './spinCollection/embedModeSpin'
import customizeDescriptionSpin from './spinCollection/customizeDescriptionSpin'
import delaySpin from './spinCollection/delaySpin'
import customIndicSpin from './spinCollection/customIndicSpin'
export default {
  name: 'spinDemo',
  components: {
    basicSpin,
    sizeSpin,
    insideContainerSpin,
    embedModeSpin,
    customizeDescriptionSpin,
    delaySpin,
    customIndicSpin,
    IkangLoading
  }
}
</script>
