<template>
  <codeBox title="布局"
           description="Checkbox.Group内嵌Checkbox并与Grid组件一起使用，可以实现灵活的布局"
           :code="useWithGridCheckboxCode">
    <div>
        <ik-checkbox-group @change="onChange">
          <ik-row>
            <ik-col :span="8">
              <ik-checkbox value="A">A</ik-checkbox>
            </ik-col>
            <ik-col :span="8">
              <ik-checkbox value="B">B</ik-checkbox>
            </ik-col>
            <ik-col :span="8">
              <ik-checkbox value="C">C</ik-checkbox>
            </ik-col>
            <ik-col :span="8">
              <ik-checkbox value="D">D</ik-checkbox>
            </ik-col>
            <ik-col :span="8">
              <ik-checkbox value="E">E</ik-checkbox>
            </ik-col>
          </ik-row>
        </ik-checkbox-group>
      </div>
  </codeBox>
</template>
<script>
import { useWithGridCheckboxCode } from '../demoCode.js'
export default {
  name: 'useWithGridCheckbox',
  data () {
    return {
      useWithGridCheckboxCode
    }
  },
  methods: {
    onChange (checkedValues) {
      console.log('checked = ', checkedValues)
    }
  }
}
</script>
