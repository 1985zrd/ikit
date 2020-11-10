const basicGridCode = `
<template>
  <div>
    <ik-row>
      <ik-col :span="12">col-12</ik-col>
      <ik-col :span="12">col-12</ik-col>
    </ik-row>
    <ik-row>
      <ik-col :span="8">col-8</ik-col>
      <ik-col :span="8">col-8</ik-col>
      <ik-col :span="8">col-8</ik-col>
    </ik-row>
    <ik-row>
      <ik-col :span="6">col-6</ik-col>
      <ik-col :span="6">col-6</ik-col>
      <ik-col :span="6">col-6</ik-col>
      <ik-col :span="6">col-6</ik-col>
    </ik-row>
  </div>
</template>
`

const flexAlignGridCode = `
<template>
  <div>
    <p>Align Top</p>
    <ik-row type="flex" justify="center" align="top">
      <ik-col :span="4"><p class="height-100">col-4</p></ik-col>
      <ik-col :span="4"><p class="height-50">col-4</p></ik-col>
      <ik-col :span="4"><p class="height-120">col-4</p></ik-col>
      <ik-col :span="4"><p class="height-80">col-4</p></ik-col>
    </ik-row>

    <p>Align Center</p>
    <ik-row type="flex" justify="space-around" align="middle">
      <ik-col :span="4"><p class="height-100">col-4</p></ik-col>
      <ik-col :span="4"><p class="height-50">col-4</p></ik-col>
      <ik-col :span="4"><p class="height-120">col-4</p></ik-col>
      <ik-col :span="4"><p class="height-80">col-4</p></ik-col>
    </ik-row>

    <p>Align Bottom</p>
    <ik-row type="flex" justify="space-between" align="bottom">
      <ik-col :span="4"><p class="height-100">col-4</p></ik-col>
      <ik-col :span="4"><p class="height-50">col-4</p></ik-col>
      <ik-col :span="4"><p class="height-120">col-4</p></ik-col>
      <ik-col :span="4"><p class="height-80">col-4</p></ik-col>
    </ik-row>
  </div>
</template>
`

const flexOrderGridCode = `
<template>
  <div>
    <ik-row type="flex">
      <ik-col :span="6" :order="4">1 col-order-4</ik-col>
      <ik-col :span="6" :order="3">2 col-order-3</ik-col>
      <ik-col :span="6" :order="2">3 col-order-2</ik-col>
      <ik-col :span="6" :order="1">4 col-order-1</ik-col>
    </ik-row>
  </div>
</template>
`

const flexLayoutGridCode = `
<template>
  <div>
    <p>sub-element align left</p>
    <ik-row type="flex" justify="start">
      <ik-col :span="4">col-4</ik-col>
      <ik-col :span="4">col-4</ik-col>
      <ik-col :span="4">col-4</ik-col>
      <ik-col :span="4">col-4</ik-col>
    </ik-row>

    <p>sub-element align center</p>
    <ik-row type="flex" justify="center">
      <ik-col :span="4">col-4</ik-col>
      <ik-col :span="4">col-4</ik-col>
      <ik-col :span="4">col-4</ik-col>
      <ik-col :span="4">col-4</ik-col>
    </ik-row>

    <p>sub-element align right</p>
    <ik-row type="flex" justify="end">
      <ik-col :span="4">col-4</ik-col>
      <ik-col :span="4">col-4</ik-col>
      <ik-col :span="4">col-4</ik-col>
      <ik-col :span="4">col-4</ik-col>
    </ik-row>

    <p>sub-element monospaced arrangement</p>
    <ik-row type="flex" justify="space-between">
      <ik-col :span="4">col-4</ik-col>
      <ik-col :span="4">col-4</ik-col>
      <ik-col :span="4">col-4</ik-col>
      <ik-col :span="4">col-4</ik-col>
    </ik-row>

    <p>sub-element align full</p>
    <ik-row type="flex" justify="space-around">
      <ik-col :span="4">col-4</ik-col>
      <ik-col :span="4">col-4</ik-col>
      <ik-col :span="4">col-4</ik-col>
      <ik-col :span="4">col-4</ik-col>
    </ik-row>
  </div>
</template>
`

const blockGridCode = `
<template>
  <div class="gutter-example">
    <ik-row :gutter="16">
      <ik-col class="gutter-row" :span="6">
        <div class="gutter-box">col-6</div>
      </ik-col>
      <ik-col class="gutter-row" :span="6">
        <div class="gutter-box">col-6</div>
      </ik-col>
      <ik-col class="gutter-row" :span="6">
        <div class="gutter-box">col-6</div>
      </ik-col>
      <ik-col class="gutter-row" :span="6">
        <div class="gutter-box">col-6</div>
      </ik-col>
    </ik-row>
  </div>
</template>
<style scoped>
  .gutter-example >>> .ant-row > div {
    background: transparent;
    border: 0;
  }
  .gutter-box {
    background: #00a0e9;
    padding: 5px 0;
  }
</style>
`

const offsetGridCode = `
<template>
  <div>
    <ik-row>
      <ik-col :span="8">col-8</ik-col>
      <ik-col :span="8" :offset="8">col-8</ik-col>
    </ik-row>
    <ik-row>
      <ik-col :span="6" :offset="6">col-6 col-offset-6</ik-col>
      <ik-col :span="6" :offset="6">col-6 col-offset-6</ik-col>
    </ik-row>
    <ik-row>
      <ik-col :span="12" :offset="6">col-12 col-offset-6</ik-col>
    </ik-row>
  </div>
</template>
`
const attributeGridCode = `
<template>
  <ik-row>
    <ik-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</ik-col>
    <ik-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</ik-col>
    <ik-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</ik-col>
  </ik-row>
</template>
`

const responseGridCode = `
<template>
  <ik-row>
    <ik-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10">Col</ik-col>
    <ik-col :xs="20" :sm="16" :md="12" :lg="8" :xl="4">Col</ik-col>
    <ik-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10">Col</ik-col>
  </ik-row>
</template>
`

const columnGridCode = `
<template>
  <div>
    <ik-row>
      <ik-col :span="18" :push="6">col-18 col-push-6</ik-col>
      <ik-col :span="6" :pull="18">col-6 col-pull-18</ik-col>
    </ik-row>
  </div>
</template>
`

const configureGridCode = `
<template>
  <div id="components-grid-demo-playground">
    <div style="marginBottom:16px">
      <span style="marginRight:6px">Gutter (px): </span>
      <div style="width:50%">
        <ik-slider
          :min="0"
          :max="Object.keys(gutters).length - 1"
          v-model="gutterKey"
          :marks="this.gutters"
          :step="null"
        />
      </div>
      <span style="marginRight:6px">Column Count:</span>
      <div style="width:50%">
        <ik-slider
          :min="0"
          :max="Object.keys(colCounts).length - 1"
          v-model="colCountKey"
          :marks="this.colCounts"
          :step="null"
        />
      </div>
    </div>
    <ik-row :gutter="gutters[gutterKey]">
      <ik-col
        v-for="(item, index) in colCounts[colCountKey]"
        :key="item.toString()"
        :span="24/colCounts[colCountKey]"
      >
        <div>Column</div>
      </ik-col>
    </ik-row>
    <pre v-text="rowColHtml"></pre>
  </div>
</template>
<script>
  export default {
    data() {
      const gutters = {};
      const arr = [8, 16, 24, 32, 40, 48];
      arr.forEach((value, i) => {
        gutters[i] = value;
      });
      const colCounts = {};
      const arr1 = [2, 3, 4, 6, 8, 12];
      arr1.forEach((value, i) => {
        colCounts[i] = value;
      });
      return {
        gutterKey: 1,
        colCountKey: 2,
        colCounts,
        gutters,
      };
    },
    computed: {
      rowColHtml() {
        const colCount = this.colCounts[this.colCountKey];
        const getter = this.gutters[this.gutterKey];
        let colCode = '<Row :gutter="' + getter + '">\n';
        for (let i = 0; i < colCount; i++) {
          const spanNum = 24 / colCount;
          colCode += '  <Col :span="' + spanNum + '"/>\n';
        }
        colCode += '</Row>';
        return colCode;
      },
    },
  };
</script>
<style scoped>
  #components-grid-demo-playground [class^='ant-col-'] {
    background: transparent;
    border: 0;
  }
  #components-grid-demo-playground [class^='ant-col-'] > div {
    background: #00a0e9;
    height: 120px;
    line-height: 120px;
    font-size: 13px;
  }
  #components-grid-demo-playground pre {
    background: #f9f9f9;
    border-radius: 6px;
    font-size: 13px;
    padding: 8px 16px;
  }
</style>
`

export {
  basicGridCode, flexAlignGridCode, flexOrderGridCode, flexLayoutGridCode, blockGridCode, offsetGridCode, attributeGridCode, responseGridCode, columnGridCode, configureGridCode
}
