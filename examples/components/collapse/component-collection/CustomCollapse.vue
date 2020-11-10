<template>
  <codeBox :title="title" :description="description" :code="customCollapse">
    <ik-collapse defaultActiveKey="1"
                :bordered="false">
      <template v-slot:expandIcon="props">
        <ik-icon type="caret-right"
                :rotate="props.isActive ? 90 : 0" />
      </template>
      <ik-collapse-panel header="This is panel header 1"
                        key="1"
                        :style="customStyle">
        <p>{{text}}</p>
      </ik-collapse-panel>
      <ik-collapse-panel header="This is panel header 2"
                        key="2"
                        :style="customStyle">
        <p>{{text}}</p>
      </ik-collapse-panel>
      <ik-collapse-panel header="This is panel header 3"
                        key="3"
                        :style="customStyle">
        <p>{{text}}</p>
      </ik-collapse-panel>
    </ik-collapse>
  </codeBox>
</template>
<script>
import { customCollapse } from '../codeExample'
export default {
  data () {
    return {
      title: '自定义面板',
      description: '自定义各个面板的背景色、圆角、边距和图标。',
      customCollapse,
      text: 'A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.',
      customStyle:
        'background: #f7f7f7;border-radius: 4px;margin-bottom: 24px;border: 0;overflow: hidden'
    }
  }
}
</script>
