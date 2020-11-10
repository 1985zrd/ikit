<template>
  <codeBox :title="title"
           :description="description"
           :code="hasAuxiliaryIntroductionAlert">
    <ik-alert message="Success Text" type="success">
      <p slot="description">
        Success Description <span style="color: red">Success</span> Description Success Description
      </p>
    </ik-alert>
    <br>
    <ik-alert
      message="Info Text"
      description="Info Description Info Description Info Description Info Description"
      type="info"
    />
    <br>
    <ik-alert
      message="Warning Text"
      description="Warning Description Warning Description Warning Description Warning Description"
      type="warning"
    />
    <br>
    <ik-alert
      message="Error Text"
      description="Error Description Error Description Error Description Error Description"
      type="error"
    />
  </codeBox>
</template>
<script>
import { hasAuxiliaryIntroductionAlert } from '../codeExample'
export default {
  data () {
    return {
      title: '含有辅助性文字介绍',
      description: '含有辅助性文字介绍的警告提示。',
      hasAuxiliaryIntroductionAlert
    }
  }
}
</script>
