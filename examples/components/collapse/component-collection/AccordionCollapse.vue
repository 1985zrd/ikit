<template>
  <codeBox :title="title" :description="description" :code="accordionCollapse">
    <ik-collapse accordion>
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
import { accordionCollapse } from '../codeExample'
export default {
  data () {
    return {
      title: '手风琴',
      description: '手风琴，每次只打开一个tab。默认打开第一个。',
      accordionCollapse,
      text: 'A dog is a type of domesticated animal.Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.'
    }
  }
}
</script>
