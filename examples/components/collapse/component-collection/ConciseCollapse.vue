<template>
  <codeBox :title="title" :description="description" :code="conciseCollapse">
    <ik-collapse defaultActiveKey="1"
                :bordered="false">
      <ik-collapse-panel header="This is panel header 1"
                        key="1">
        <p>{{text}}</p>
      </ik-collapse-panel>
      <ik-collapse-panel header="This is panel header 2"
                        key="2"
                        :disabled="false">
        <p>{{text}}</p>
      </ik-collapse-panel>
      <ik-collapse-panel header="This is panel header 3"
                        key="3">
        <p>{{text}}</p>
      </ik-collapse-panel>
    </ik-collapse>
  </codeBox>
</template>
<script>
import { conciseCollapse } from '../codeExample'
export default {
  data () {
    return {
      title: '简洁风格',
      description: '一套没有边框的简洁样式。',
      conciseCollapse,
      text: 'A dog is a type of domesticated animal.Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.'
    }
  }
}
</script>
