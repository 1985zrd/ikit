const basicSpinCode = `
<template>
  <div>
    <ik-spin />
  </div>
</template>
`
const ikangLoadingCode = `
<template>
  <div>
  <ik-spin ikangLoading/>
  <ik-spin width="40" ikangLoading/>
  </div>
</template>
`

const sizeSpinCode = `
<template>
  <div>
    <ik-spin size="small" />
    <ik-spin />
    <ik-spin size="large" />
  </div>
</template>
`
const insideContainerSpinCode = `
<style scoped>
  .example {
    text-align: center;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    margin-bottom: 20px;
    padding: 30px 50px;
    margin: 20px 0;
  }
</style>
<template>
  <div class="example">
    <ik-spin />
  </div>
</template>
`
const embedModeSpinCode = `
<style scoped>
  .spin-content {
    border: 1px solid #91d5ff;
    background-color: #e6f7ff;
    padding: 30px;
  }
</style>
<template>
  <div>
    <ik-spin :spinning="spinning">
      <div class="spin-content">
        可以点击‘切换’按钮，控制本区域的spin展示。
      </div>
    </ik-spin>
    Loading state：<ik-switch v-model="spinning"></ik-switch>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        spinning: false,
      };
    },
    methods: {
      changeSpinning() {
        this.spinning = !this.spinning;
      },
    },
  };
</script>
`
const customizeDescriptionSpinCode = `
<style scoped>
  .spin-content {
    border: 1px solid #91d5ff;
    background-color: #e6f7ff;
    padding: 30px;
  }
</style>
<template>
  <div>
    <ik-spin tip="Loading...">
      <div class="spin-content">
        我的描述文案是自定义的。。。
      </div>
    </ik-spin>
  </div>
</template>
`
const delaySpinCode = `
<style scoped>
  .spin-content {
    border: 1px solid #91d5ff;
    background-color: #e6f7ff;
    padding: 30px;
  }
</style>
<template>
  <div>
    <ik-spin :spinning="spinning" :delay="delayTime">
      <div class="spin-content">
        可以点击‘切换’按钮，延迟显示 loading 效果。当 spinning 状态在 \`delay\` 时间内结束，则不显示
        loading 状态。
      </div>
    </ik-spin>
    Loading state：<ik-switch v-model="spinning"></ik-switch>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        spinning: false,
        delayTime: 500,
      };
    },
    methods: {
      changeSpinning() {
        this.spinning = !this.spinning;
      },
    },
  };
</script>
`
const customIndicSpinCode = `
<template>
  <div>
    <ik-spin>
      <ik-icon slot="indicator" type="loading" style="font-size: 24px" spin />
    </ik-spin>
    <ik-spin :indicator="indicator" />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        indicator: <ik-icon type="loading" style="font-size: 24px" spin />,
      };
    },
  };
</script>
`
export {
  basicSpinCode,
  ikangLoadingCode,
  sizeSpinCode,
  insideContainerSpinCode,
  embedModeSpinCode,
  customizeDescriptionSpinCode,
  delaySpinCode,
  customIndicSpinCode
}
