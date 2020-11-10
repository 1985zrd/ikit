<template>
  <codeBox :title="title"
           :description="description"
           :code="customDropdownSelectCode">
    <ik-select defaultValue="lucy"
               @change="handleChange"
               style="width: 120px">
      <div slot="dropdownRender"
           slot-scope="menu">
        <v-nodes :vnodes="menu" />
        <hr />
        <div style="padding: 8px; cursor: pointer;">
          <ik-icon type="plus" />Add item
        </div>
      </div>
      <ik-select-option value="jack">Jack</ik-select-option>
      <ik-select-option value="lucy">Lucy</ik-select-option>
    </ik-select>
  </codeBox>
</template>
<script>
import { customDropdownSelectCode } from '../demoCode.js'
export default {
  name: 'customDropdownSelect',
  data () {
    return {
      title: '扩展菜单',
      description: '使用 dropdownRender 对下拉菜单进行自由扩展。',
      customDropdownSelectCode
    }
  },
  components: {
    VNodes: {
      functional: true,
      render: (h, ctx) => ctx.props.vnodes
    }
  },
  methods: {
    handleChange (value) {
      console.log(`selected ${value}`)
    }
  }
}
</script>
