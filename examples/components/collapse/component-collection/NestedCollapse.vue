<template>
  <ik-collapse>
    <codeBox :title="title"
             :description="description"
             :code="nestedCollapse">
      <ik-collapse @change="changeActivekey">
        <ik-collapse-panel header="This is panel header 1"
                           key="1">
          <ik-collapse defaultActiveKey="4">
            <ik-collapse-panel header="This is panel nest panel"
                               key="4">
              <p>{{text}}</p>
            </ik-collapse-panel>
          </ik-collapse>
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
  </ik-collapse>
</template>
<script>
import { nestedCollapse } from '../codeExample'
export default {
  data () {
    return {
      title: '面板嵌套',
      description: '嵌套折叠面板。',
      nestedCollapse,
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
