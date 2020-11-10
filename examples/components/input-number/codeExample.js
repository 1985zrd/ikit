const basicInputNumberCode = `
<template>
  <div>
    <ik-input-number :min="1" :max="10" v-model="value" @change="onChange" />
    当前值：{{value}}
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: 3,
      };
    },
    methods: {
      onChange(value) {
        console.log('changed', value);
      },
    },
  };
</script>
`
const sizeInputNumberCode = `
<template>
  <div>
    <ik-input-number size="large" :min="1" :max="100000" :defaultValue="3" @change="onChange" />
    <ik-input-number :min="1" :max="100000" :defaultValue="3" @change="onChange" />
    <ik-input-number size="small" :min="1" :max="100000" :defaultValue="3" @change="onChange" />
  </div>
</template>
<script>
  export default {
    methods: {
      onChange(value) {
        console.log('changed', value);
      },
    },
  };
</script>
<style scoped>
  .ant-input-number {
    margin-right: 10px;
  }
</style>
`
const disabledInputNumberCode = `
<template>
  <div>
    <ik-input-number :min="1" :max="10" :disabled="disabled" :defaultValue="3" />
    <div style="marginTop:20px">
      <ik-button @click="toggle" type="primary">Toggle disabled</ik-button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        disabled: true,
      };
    },
    methods: {
      toggle() {
        this.disabled = !this.disabled;
      },
    },
  };
</script>
`
const decimalInputNumberCode = `
<template>
  <ik-input-number :min="0" :max="10" :step="0.1" @change="onChange" />
</template>
<script>
  export default {
    methods: {
      onChange(value) {
        console.log('changed', value);
      },
    },
  };
</script>
`

const formatterInputNumberCode = `
<template>
  <div>
    <ik-input-number
      :defaultValue="1000"
      :formatter="value => \`$ \${value}\`.replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',')"
      :parser="value => value.replace(/\\$\\s?|(,*)/g, '')"
      @change="onChange"
    />
    <ik-input-number
      :defaultValue="100"
      :min="0"
      :max="100"
      :formatter="value => \`\${value}%\`"
      :parser="value => value.replace('%', '')"
      @change="onChange"
    />
  </div>
</template>
<script>
  export default {
    methods: {
      onChange(value) {
        console.log('changed', value);
      },
    },
  };
</script>
`

export {
  basicInputNumberCode, sizeInputNumberCode, disabledInputNumberCode, decimalInputNumberCode, formatterInputNumberCode
}
