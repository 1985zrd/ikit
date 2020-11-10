export const basic = `
<template>
  <div>
    <ik-progress :percent="30" />
    <ik-progress :percent="50" status="active" />
    <ik-progress :percent="70" status="exception" />
    <ik-progress :percent="100" />
    <ik-progress :percent="50" :showInfo="false" />
  </div>
</template>
`

export const circle = `
<template>
  <div>
    <ik-progress type="circle" :percent="75" />
    <ik-progress type="circle" :percent="70" status="exception" />
    <ik-progress type="circle" :percent="100" />
  </div>
</template>
<style scoped>
  .ant-progress-circle-wrap,
  .ant-progress-line-wrap {
    margin-right: 8px;
    margin-bottom: 5px;
  }
</style>
`

export const small = `
<template>
  <div style="width: 170px">
    <ik-progress :percent="30" size="small" />
    <ik-progress :percent="50" size="small" status="active" />
    <ik-progress :percent="70" size="small" status="exception" />
    <ik-progress :percent="100" size="small" />
  </div>
</template>
`

export const smallCircle = `
<template>
  <div>
    <ik-progress type="circle" :percent="30" :width="80" />
    <ik-progress type="circle" :percent="70" :width="80" status="exception" />
    <ik-progress type="circle" :percent="100" :width="80" />
  </div>
</template>
<style scoped>
  .ant-progress-circle-wrap,
  .ant-progress-line-wrap {
    margin-right: 8px;
    margin-bottom: 5px;
  }
</style>
`

export const dynamicCircle = `
<template>
  <div>
    <ik-progress type="circle" :percent="percent" />
    <ik-button-group>
      <ik-button @click="decline" icon="minus" />
      <ik-button @click="increase" icon="plus" />
    </ik-button-group>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        percent: 0,
      };
    },
    methods: {
      increase() {
        let percent = this.percent + 10;
        if (percent > 100) {
          percent = 100;
        }
        this.percent = percent;
      },
      decline() {
        let percent = this.percent - 10;
        if (percent < 0) {
          percent = 0;
        }
        this.percent = percent;
      },
    },
  };
</script>
`

export const customText = `
<template>
  <div>
    <ik-progress type="circle" :percent="75" :format="percent => \`$\{percent} Days\`" />
    <ik-progress type="circle" :percent="100" :format="() => 'Done'" />
    <ik-progress type="circle" :percent="75">
      <template v-slot:format="percent">
        <span style="color: red">{{percent}}</span>
      </template>
    </ik-progress>
  </div>
</template>
<style scoped>
  div.ant-progress-circle,
  div.ant-progress-line {
    margin-right: 8px;
    margin-bottom: 8px;
  }
</style>
`

export const dynamic = `
<template>
  <div>
    <ik-progress :percent="percent" />
    <ik-button-group>
      <ik-button @click="decline" icon="minus" />
      <ik-button @click="increase" icon="plus" />
    </ik-button-group>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        percent: 0,
      };
    },
    methods: {
      increase() {
        let percent = this.percent + 10;
        if (percent > 100) {
          percent = 100;
        }
        this.percent = percent;
      },
      decline() {
        let percent = this.percent - 10;
        if (percent < 0) {
          percent = 0;
        }
        this.percent = percent;
      },
    },
  };
</script>
`

export const dashboard = `
<template>
  <div>
    <ik-progress type="dashboard" :percent="75" />
  </div>
</template>
`

export const piecewise = `
<template>
  <div>
    <ik-tooltip title="3 done / 3 in progress / 4 to do">
      <ik-progress :percent="60" :successPercent="30" />
    </ik-tooltip>
    <ik-tooltip title="3 done / 3 in progress / 4 to do">
      <ik-progress :percent="60" :successPercent="30" type="circle" />
    </ik-tooltip>
    <ik-tooltip title="3 done / 3 in progress / 4 to do">
      <ik-progress :percent="60" :successPercent="30" type="dashboard" />
    </ik-tooltip>
  </div>
</template>
`

export const strokeLinkCap = `
<template>
  <div>
    <ik-progress strokeLinecap="square" :percent="75" />
    <ik-progress strokeLinecap="square" :percent="75" type="circle" />
    <ik-progress strokeLinecap="square" :percent="75" type="dashboard" />
  </div>
</template>
`
