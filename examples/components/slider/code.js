const base = `
<template>
  <div>
    <ik-slider id="test" :defaultValue="30" :disabled="disabled" />
    <ik-slider range :defaultValue="[20, 50]" :disabled="disabled" />
    Disabled: <ik-switch size="small" :checked="disabled" @change="handleDisabledChange" />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        disabled: false,
      };
    },
    methods: {
      handleDisabledChange(disabled) {
        this.disabled = disabled;
      },
    },
  };
</script>
<style scoped>
  .code-box-demo .ant-slider {
    margin-bottom: 16px;
  }
</style>
`
const bindInput = `
<template>
  <div>
    <ik-row>
      <ik-col :span="12">
        <ik-slider :min="1" :max="20" v-model="inputValue1" />
      </ik-col>
      <ik-col :span="4">
        <ik-input-number :min="1" :max="20" style="marginLeft: 16px" v-model="inputValue1" />
      </ik-col>
    </ik-row>
    <ik-row>
      <ik-col :span="12">
        <ik-slider :min="0" :max="1" v-model="inputValue" :step="0.01" />
      </ik-col>
      <ik-col :span="4">
        <ik-input-number
          :min="0"
          :max="1"
          :step="0.01"
          style="marginLeft: 16px"
          v-model="inputValue"
        />
      </ik-col>
    </ik-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        inputValue: 0,
        inputValue1: 1,
      };
    },
  };
</script>
<style scoped>
  .code-box-demo .ant-slider {
    margin-bottom: 16px;
  }
</style>
`
const bindIcon = `
<template>
  <div class="icon-wrapper">
    <ik-icon :style="{color: preColor}" type="frown-o" />
    <ik-slider :min="0" :max="20" @change="handleChange" :value="value" />
    <ik-slider :min="0" :max="20" v-model="value" />
    <ik-icon :style="{color: nextColor}" type="smile-o" />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: 0,
        min: 0,
        max: 20,
      };
    },
    methods: {
      handleChange(value) {
        this.value = value;
      },
    },
    computed: {
      preColor() {
        const { max, min, value } = this;
        const mid = ((max - min) / 2).toFixed(5);
        return value >= mid ? '' : 'rgba(0, 0, 0, .45)';
      },
      nextColor() {
        const { max, min, value } = this;
        const mid = ((max - min) / 2).toFixed(5);
        return value >= mid ? 'rgba(0, 0, 0, .45)' : '';
      },
    },
  };
</script>
<style scoped>
  .icon-wrapper {
    position: relative;
    padding: 0px 30px;
  }

  .icon-wrapper .anticon {
    position: absolute;
    top: -2px;
    width: 16px;
    height: 16px;
    line-height: 1;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.25);
  }

  .icon-wrapper .anticon:first-child {
    left: 0;
  }

  .icon-wrapper .anticon:last-child {
    right: 0;
  }
</style>
`
const customTip = `
<template>
  <div>
    <ik-slider :tipFormatter="formatter" />
    <ik-slider :tipFormatter="null" />
  </div>
</template>
<script>
  export default {
    methods: {
      formatter(value) {
        return value %;
      },
    },
  };
</script>
`
const event = `
<template>
  <div class="code-box-demo">
    <ik-slider :defaultValue="30" @change="onChange" @afterChange="onAfterChange" />
    <ik-slider
      range
      :step="10"
      :defaultValue="[20, 50]"
      @change="onChange"
      @afterChange="onAfterChange"
    />
  </div>
</template>
<script>
  export default {
    methods: {
      onChange(value) {
        console.log('change: ', value);
      },
      onAfterChange(value) {
        console.log('afterChange: ', value);
      },
    },
  };
</script>
<style scoped>
  .code-box-demo .ant-slider {
    margin-bottom: 16px;
  }
</style>
`
const label = `
<template>
  <div id="components-slider-demo-mark">
    <h4>included=true</h4>
    <ik-slider :marks="marks" :defaultValue="37" />
    <ik-slider range :marks="marks" :defaultValue="[26, 37]" />

    <h4>included=false</h4>
    <ik-slider :marks="marks" :included="false" :defaultValue="37" />

    <h4>marks & step</h4>
    <ik-slider :marks="marks" :step="10" :defaultValue="37" />

    <h4>step=null</h4>
    <ik-slider :marks="marks" :step="null" :defaultValue="37" />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        marks: {
          0: '0°C',
          26: '26°C',
          37: '37°C',
          100: {
            style: {
              color: '#f50',
            },
            label: <strong>100°C</strong>,
          },
        },
      };
    },
    methods: {
      onChange(value) {
        console.log('change: ', value);
      },
      onAfterChange(value) {
        console.log('afterChange: ', value);
      },
    },
  };
</script>
<style scoped>
  #components-slider-demo-mark h4 {
    margin: 0 0 16px;
  }
  #components-slider-demo-mark .ant-slider-with-marks {
    margin-bottom: 44px;
  }
</style>
`
const vertical = `
<template>
  <div style="height: 300px">
    <div style="float:left;height: 300px;marginLeft: 70px">
      <ik-slider vertical :defaultValue="30" />
    </div>
    <div style="float:left;height: 300px;marginLeft: 70px">
      <ik-slider vertical range :step="10" :defaultValue="[20, 50]" />
    </div>
    <div style="float:left;height: 300px;marginLeft: 70px">
      <ik-slider vertical range :marks="marks" :defaultValue="[26, 37]" />
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        marks: {
          0: '0°C',
          26: '26°C',
          37: '37°C',
          100: {
            style: {
              color: '#f50',
            },
            label: <strong>100°C</strong>,
          },
        },
      };
    }
  };
</script>
`
const showTip = `
<template>
  <ik-slider :defaultValue="30" :tooltipVisible="true" />
</template>
`

export {
  base,
  bindInput,
  bindIcon,
  customTip,
  event,
  label,
  vertical,
  showTip
}
