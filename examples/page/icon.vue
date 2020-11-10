
<template>
    <div class="icon">
      <ik-icon type="home" />
      <h3>自定义icon图标  iconfont.cn</h3>
      <my-icon type="icon-paihangbang" style="color: red;"/>
      <my-icon type="icon--convertible" style="fontSize: 30px;"/>
      <ik-icon type="iconrequired" isIk></ik-icon>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'icon-demo',
  data () {
    return {}
  },
  components: {},
  methods: {}
}
</script>

<style lang="less" scoped>
.icon{
}
</style>
