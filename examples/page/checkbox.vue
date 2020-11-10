
<template>
  <div style="padding: 20px;">
    <div style="margin-top: 20px;">
      <h2>Checkbox</h2>
      <ik-checkbox >Checkbox</ik-checkbox>
      <ik-checkbox @change="checkboxOnChange" :disabled="true" >Checkbox disabled</ik-checkbox>
      <div>
        <div :style="{ borderBottom: '1px solid #E9E9E9' }">
          <ik-checkbox :indeterminate="indeterminate" @change="onCheckAllChange" :checked="checkAll">
            Check all
          </ik-checkbox>
          <span>如果全选不想选中禁止的，在Check all的change里过滤掉就可以</span>
        </div>
        <br />
        <ik-checkbox-group :options="plainOptions" v-model="checkedList" @change="checkboxGroupChange" />
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
const plainOptions = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: true }
]
const defaultCheckedList = ['Apple', 'Orange']
export default {
  name: 'checkbox-demo',
  data () {
    return {
      indeterminate: true,
      checkAll: false,
      plainOptions,
      checkedList: defaultCheckedList,
      checkNick: false
    }
  },
  methods: {
    checkboxOnChange (e) {
      console.log(e)
    },
    checkboxGroupChange (checkedList) {
      this.indeterminate = !!checkedList.length && checkedList.length < this.plainOptions.length
      this.checkAll = checkedList.length === this.plainOptions.length
    },
    onCheckAllChange (e) {
      Object.assign(this, {
        checkedList: e.target.checked ? plainOptions.map((item) => item.value) : [],
        indeterminate: false,
        checkAll: e.target.checked
      })
    }
  }
}
</script>

<style lang="less" scoped>
.upload {
}
</style>
