
<template>
    <div class="breadcrumb">
      <h2>基础用法</h2>
      <ik-breadcrumb>
        <ik-breadcrumb-item>Home</ik-breadcrumb-item>
        <ik-breadcrumb-item><a href="">Application Center</a></ik-breadcrumb-item>
        <ik-breadcrumb-item><a href="">Application List</a></ik-breadcrumb-item>
        <ik-breadcrumb-item>An Application</ik-breadcrumb-item>
      </ik-breadcrumb>
      <br>
      <h2>带有图标的</h2>
       <ik-breadcrumb>
        <ik-breadcrumb-item href="">
          <ik-icon type="home" />
        </ik-breadcrumb-item>
        <ik-breadcrumb-item href="">
          <ik-icon type="user" />
          <span>Application List</span>
        </ik-breadcrumb-item>
        <ik-breadcrumb-item>
          Application
        </ik-breadcrumb-item>
      </ik-breadcrumb>
      <br>
      <h2>分隔符 </h2>
      <ik-breadcrumb separator=">">
        <ik-breadcrumb-item>Home</ik-breadcrumb-item>
        <ik-breadcrumb-item href="">Application Center</ik-breadcrumb-item>
        <ik-breadcrumb-item href="">Application List</ik-breadcrumb-item>
        <ik-breadcrumb-item>An Application</ik-breadcrumb-item>
      </ik-breadcrumb>
      <br>
      <ik-breadcrumb>
        <span slot="separator" style="color: red">></span>
        <ik-breadcrumb-item>Home</ik-breadcrumb-item>
        <ik-breadcrumb-item href="">Application Center</ik-breadcrumb-item>
        <ik-breadcrumb-item href="">Application List</ik-breadcrumb-item>
        <ik-breadcrumb-item>An Application</ik-breadcrumb-item>
      </ik-breadcrumb>
      <br>
      <h2>和 vue-router 进行结合使用。 </h2>
      <ik-breadcrumb :routes="routes">
        <template slot="itemRender" slot-scope="{route, params, routes, paths}">
          <span v-if="routes.indexOf(route) === routes.length - 1">
            {{route.breadcrumbName}}
          </span>
          <router-link v-else :to="`${basePath}/${paths.join('/')}`">
            {{route.breadcrumbName}}
          </router-link>
        </template>
      </ik-breadcrumb>
    <br />
    {{$route.path}}
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'breadcrumb-demo',
  data () {
    const { lang } = this.$route.params
    return {
      basePath: `/`,
      routes: [
        {
          path: 'button',
          breadcrumbName: '首页'
        },
        {
          path: 'tabs',
          breadcrumbName: '一级面包屑'
        },
        {
          path: 'select',
          breadcrumbName: '当前页面'
        }
      ]
    }
  },
  components: {},
  methods: {}
}
</script>

<style lang="less" scoped>
.breadcrumb{

}
</style>
