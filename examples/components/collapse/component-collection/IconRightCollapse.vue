<template>
  <codeBox :title="title" :description="description" :code="IconRightCollapse">
    <ik-collapse iconRight defaultActiveKey="1" @change="changeActivekey">
      <ik-collapse-panel header="This is panel header with arrow icon" key="1">
        <p>{{text}}</p>
      </ik-collapse-panel>
      <ik-collapse-panel header="This is panel header with no arrow icon" key="2">
        <p>{{text}}</p>
      </ik-collapse-panel>
    </ik-collapse>
  </codeBox>
</template>
<script>
import { IconRightCollapse } from '../codeExample'
export default {
  data () {
    return {
      title: '箭头在右侧',
      description: '你可以通过添加iconRight属性使箭头在右侧展示',
      IconRightCollapse,
      text: 'A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.'
    }
  },
  methods: {
    changeActivekey (key) {
      console.log(key)
    }
  }
}
</script>
