<template>
  <codeBox :title="title"
    :description="description"
    :code="dynamic">
    <div>
      <ik-badge :count="count">
        <a href="#" class="head-example" />
      </ik-badge>
      <ik-button-group>
        <ik-button @click="decline">
          <ik-icon type="minus" />
        </ik-button>
        <ik-button @click="increase">
          <ik-icon type="plus" />
        </ik-button>
      </ik-button-group>
    </div>
    <div style="margin-top: 10px">
      <ik-badge :dot="show">
        <a href="#" class="head-example" />
      </ik-badge>
      <ik-switch v-model="show" />
    </div>
  </codeBox>
</template>
<script>
import { dynamic } from '../code.js'
export default {
  name: 'dynamicBadge',
  data () {
    return {
      title: '动态',
      description: '展示动态变化的效果。',
      dynamic,
      count: 5,
      show: true
    }
  },
  methods: {
    decline () {
      let count = this.count - 1
      if (count < 0) {
        count = 0
      }
      this.count = count
    },
    increase () {
      this.count++
    }
  }
}
</script>
<style scoped>
.ant-badge {
  margin-right: 20px;
}
.head-example {
  width: 42px;
  height: 42px;
  border-radius: 4px;
  background: #eee;
  display: inline-block;
  vertical-align: middle;
}
</style>
