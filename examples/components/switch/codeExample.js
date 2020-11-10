const basicCode = `
<template>
  <div>
    <ik-switch defaultChecked @change="onChange" />
  </div>
</template>
<script>
export default {
  data () {
    return {
      title: '基本用法',
      description: '最简单的用法。'
    }
  },
  methods: {
    onChange (checked) {
      console.log(\`ik-switch to \${checked}\`)
    }
  }
}
</script>
`

const disableCode = `
<template>
  <div>
    <ik-switch defaultChecked :disabled="disabled" style="margin-bottom:5px" />
    <br />
    <ik-button type="primary" @click="onToggle">Toggle disabled</ik-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      disabled: true,
      title: '不可用',
      description: 'Switch 失效状态。'
    }
  },
  methods: {
    onToggle () {
      this.disabled = !this.disabled
    }
  }
}
</script>
`
const textCode = `
<template>
  <div>
    <ik-switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
    <br />
    <ik-switch checkedChildren="1" unCheckedChildren="0" />
    <br />
    <ik-switch defaultChecked>
    <ik-icon type="check" slot="checkedChildren" />
    <ik-icon type="close" slot="unCheckedChildren" />
    </ik-switch>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'textSwitch',
  data () {
    return {}
  }
}
</script>
`
const sizeCode = `
<template>
  <div>
    <ik-switch defaultChecked />
    <br />
    <ik-switch size="small" defaultChecked />
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'size',
  data () {
    return {}
  }
}
</script>
`
const loadingCode = `
<template>
  <div>
    <ik-switch loading defaultChecked />
    <br />
    <ik-switch size="small" loading />
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'loading',
  data () {
    return {}
  }
}
</script>
`
export {
  basicCode,
  disableCode,
  textCode,
  sizeCode,
  loadingCode
}
