<template>
  <codeBox :title="title" :description="description" :code="hideArrowCollapse">
    <ik-collapse defaultActiveKey="1" @change="changeActivekey">
      <ik-collapse-panel header="This is panel header with arrow icon" key="1">
        <p>{{text}}</p>
      </ik-collapse-panel>
      <ik-collapse-panel header="This is panel header with no arrow icon" key="2" :showArrow="false">
        <p>{{text}}</p>
      </ik-collapse-panel>
    </ik-collapse>
  </codeBox>
</template>
<script>
import { hideArrowCollapse } from '../codeExample'
export default {
  data () {
    return {
      title: '隐藏箭头',
      description: '你可以通过 :showArrow="false" 隐藏 ik-collapse-panel 组件的箭头图标。',
      hideArrowCollapse,
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
