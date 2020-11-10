<template>
  <codeBox title="全选"
           description="在实现全选效果时，你可能会用到indeterminate属性"
           :code="checkAllBoxCode">
    <div>
        <div :style="{ borderBottom: '1px solid #E9E9E9' }">
          <ik-checkbox
            :indeterminate="indeterminate"
            @change="onCheckAllChange"
            :checked="checkAll"
          >Check all</ik-checkbox>
        </div>
        <br />
        <ik-checkbox-group :options="plainOptions" v-model="checkedList" @change="onChange" />
      </div>
  </codeBox>
</template>
<script>
import { checkAllBoxCode } from '../demoCode.js'
const plainOptions = ['Apple', 'Pear', 'Orange']
const defaultCheckedList = ['Apple', 'Orange']
export default {
  name: 'checkAllBox',
  data () {
    return {
      checkAllBoxCode,
      checkedList: defaultCheckedList,
      indeterminate: true,
      checkAll: false,
      plainOptions
    }
  },
  methods: {
    onChange (checkedList) {
      this.indeterminate = !!checkedList.length && checkedList.length < plainOptions.length
      this.checkAll = checkedList.length === plainOptions.length
    },
    onCheckAllChange (e) {
      Object.assign(this, {
        checkedList: e.target.checked ? plainOptions : [],
        indeterminate: false,
        checkAll: e.target.checked
      })
    }
  }
}
</script>
