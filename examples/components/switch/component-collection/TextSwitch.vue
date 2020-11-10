<template>
  <codeBox :title="title" :description="description" :code="textCode">
    <div>
      <ik-switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
      <br />
      <br />
      <ik-switch checkedChildren="1" unCheckedChildren="0" />
      <br />
      <br />
      <ik-switch defaultChecked>
        <ik-icon type="check" slot="checkedChildren" />
        <ik-icon type="close" slot="unCheckedChildren" />
      </ik-switch>
    </div>
  </codeBox>
</template>
<script type="text/ecmascript-6">
import { textCode } from '../codeExample'
export default {
  name: 'textSwitch',
  data () {
    return {
      title: '文字和图标',
      description: '带有文字和图标。',
      textCode
    }
  }
}
</script>
