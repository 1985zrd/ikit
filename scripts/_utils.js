// 首字母大写
const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('')
const getVueExampleTep = comName => {
  return `<template>
  <div class="${comName}">
    <MarkdownRender mdFileName="${comName}"></MarkdownRender>
  </div>
</template>

<script>
export default {
  name: '${comName}-demo',
  data () {
    return {}
  },
  components: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.${comName}{
}
</style>
`
}

const getComVueTep = comName => {
  const capitalizeName = capitalize(comName)
  return `<template>
  <a-${comName} v-bind="$attrs" v-on="$listeners">

  </a-${comName}>
</template>

<script>
import { ${capitalizeName} } from 'ant-design-vue'
export default {
  name: 'ik-${comName}',
  inheritAttrs: false,
  components: {
    'a-${comName}': ${capitalizeName}
  }
}
</script>
`
}

const getComJsTep = comName => {
  const capitalizeName = capitalize(comName)
  return `import { ${capitalizeName} } from 'ant-design-vue'
export default {
  name: 'ik-${comName}',
  inheritAttrs: false,
  functional: true,
  render (h, c) {
    const slotMap = c.slots()
    return <${capitalizeName} {...c.data} scopedSlots={c.scopedSlots}>
      {Object.keys(slotMap).map(
        slotName => h('template', { slot: slotName }, slotMap[slotName])
      )}
    </${capitalizeName}>
  }
}
`
}

const getInstallTep = comName => {
  const capitalizeName = capitalize(comName)
  return `// 导入组件，组件必须声明 name
import ${capitalizeName} from './src/${capitalizeName}'

// 为组件提供 install 安装方法，供按需引入
${capitalizeName}.install = function (Vue) {
  Vue.component(${capitalizeName}.name, ${capitalizeName})
}
// 默认导出组件
export default ${capitalizeName}
`
}
module.exports = {
  capitalize,
  getVueExampleTep,
  getComVueTep,
  getComJsTep,
  getInstallTep
}
