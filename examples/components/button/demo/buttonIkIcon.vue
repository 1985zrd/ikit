<template>
  <codeBox title="使用ikang icon"
           description="使用icon设置按钮的图标类型，如果图标为ikang专属图标，需要加上:isIk='true'"
           :code="buttonIkang">
    <div>
        <ik-button icon="iconedit" :isIk="true">ikang专属图标-编辑</ik-button>
        <ik-button icon="iconrequired" :isIk="true">ikang专属图标-雪花</ik-button>
      </div>
  </codeBox>
</template>
<script>
import { buttonIkang } from '../test.js'
export default {
  name: 'buttonIkang',
  data () {
    return {
      buttonIkang
    }
  }
}
</script>
