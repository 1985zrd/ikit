<template>
  <codeBox :title="title" :description="description" :code="vueRuterCrumb">
    <div>
      <ik-breadcrumb :routes="routes">
        <template slot="itemRender" slot-scope="{route, params, routes, paths}">
          <span v-if="routes.indexOf(route) === routes.length - 1">
            {{route.breadcrumbName}}
          </span>
          <router-link v-else :to="paths.join('/')">
            {{route.breadcrumbName}}
          </router-link>
        </template>
      </ik-breadcrumb>
      <br />
      {{$route.path}}
    </div>
  </codeBox>
</template>

<script>
import { vueRuterCrumb } from './../codeExample'

export default {
  data () {
    return {
      vueRuterCrumb,
      title: 'vue-router',
      description: '和 vue-router 进行结合使用。',
      routes: [
        {
          path: 'index',
          breadcrumbName: '首页'
        },
        {
          path: 'first',
          breadcrumbName: '一级面包屑'
        },
        {
          path: 'second',
          breadcrumbName: '当前页面'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
