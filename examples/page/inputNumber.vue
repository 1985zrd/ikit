<template>
  <div>
    <h2>基本</h2>
    <ik-input-number :min="1" :max="10" v-model="value" @change="onChange" />
    当前值：{{ value }}

    <h2>三种大小</h2>
    <ik-input-number
      size="large"
      :min="1"
      :max="100000"
      :defaultValue="3"
      @change="onChange"
    /><br>
    <ik-input-number
      :min="1"
      :max="100000"
      :defaultValue="3"
      @change="onChange"
    />
    <br>
    <ik-input-number
      size="small"
      :min="1"
      :max="100000"
      :defaultValue="3"
      @change="onChange"
    />

    <h2>不可用</h2>
    <ik-input-number
      :min="1"
      :max="10"
      :disabled="disabled"
      :defaultValue="3"
    />
    <div style="marginTop:20px">
      <ik-button @click="toggle" type="primary">Toggle disabled</ik-button>
    </div>

    <h2>小数</h2>
    <ik-input-number :min="0" :max="10" :step="0.1" @change="onChange" />

    <h2>格式化展示</h2>
     <ik-input-number
      :defaultValue="1000"
      :formatter="value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
      :parser="value => value.replace(/\$\s?|(,*)/g, '')"
      @change="onChange"
    /><br>
    <ik-input-number
      :defaultValue="100"
      :min="0"
      :max="100"
      :formatter="value => `${value}%`"
      :parser="value => value.replace('%', '')"
      @change="onChange"
    />

  </div>
</template>
<script>
export default {
  name: 'InputNumber',
  data () {
    return {
      value: 3,
      disabled: true
    }
  },
  methods: {
    onChange (value) {
      console.log('changed', value)
      this.value = value
    },
    toggle () {
      this.disabled = !this.disabled
    }
  }
}
</script>
<style scoped>
.ant-input-number {
  margin-right: 10px;
}
</style>
