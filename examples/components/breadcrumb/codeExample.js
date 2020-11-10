const basicCrumb = `
<template>
  <ik-breadcrumb>
    <ik-breadcrumb-item>Home</ik-breadcrumb-item>
    <ik-breadcrumb-item><a href="">Application Center</a></ik-breadcrumb-item>
    <ik-breadcrumb-item><a href="">Application List</a></ik-breadcrumb-item>
    <ik-breadcrumb-item>An Application</ik-breadcrumb-item>
  </ik-breadcrumb>
</template>`

const iconCrumb = `
<template>
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
</template>`

const separatorCrumb = `
<template>
  <div>
    <ik-breadcrumb separator=">">
      <ik-breadcrumb-item>Home</ik-breadcrumb-item>
      <ik-breadcrumb-item href="">Application Center</ik-breadcrumb-item>
      <ik-breadcrumb-item href="">Application List</ik-breadcrumb-item>
      <ik-breadcrumb-item>An Application</ik-breadcrumb-item>
    </ik-breadcrumb>
    <ik-breadcrumb>
      <span slot="separator" style="color: red">></span>
      <ik-breadcrumb-item>Home</ik-breadcrumb-item>
      <ik-breadcrumb-item href="">Application Center</ik-breadcrumb-item>
      <ik-breadcrumb-item href="">Application List</ik-breadcrumb-item>
      <ik-breadcrumb-item>An Application</ik-breadcrumb-item>
    </ik-breadcrumb>
  </div>
</template>`

const vueRuterCrumb = `
<template>
  <div>
    <ik-breadcrumb :routes="routes">
      <template slot="itemRender" slot-scope="{route, params, routes, paths}">
        <span v-if="routes.indexOf(route) === routes.length - 1">
          {{route.breadcrumbName}}
        </span>
        <router-link v-else :to="\`\${basePath}/\${paths.join('/')}\`">
          {{route.breadcrumbName}}
        </router-link>
      </template>
    </ik-breadcrumb>
    <br />
    {{$route.path}}
  </div>
</template>
<script>
  export default {
    data() {
      const { lang } = this.$route.params;
      return {
        basePath: \`/\${lang}/components/breadcrumb\`,
        routes: [
          {
            path: 'index',
            breadcrumbName: '首页',
          },
          {
            path: 'first',
            breadcrumbName: '一级面包屑',
          },
          {
            path: 'second',
            breadcrumbName: '当前页面',
          },
        ],
      };
    },
  };
</script>`

export {
  basicCrumb,
  iconCrumb,
  separatorCrumb,
  vueRuterCrumb
}
