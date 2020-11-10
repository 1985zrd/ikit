const radioBasics = `
<template>
  <ik-radio>Radio</ik-radio>
</template>
`
const radioDisabled = `
<template>
  <div>
    <ik-radio :defaultChecked="false" :disabled="disabled">Disabled</ik-radio>
    <br />
    <ik-radio defaultChecked :disabled="disabled">Disabled</ik-radio>
    <div :style="{ marginTop: 20 }">
      <ik-button type="primary" @click="toggleDisabled">
        Toggle disabled
      </ik-button>
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
      toggleDisabled() {
        this.disabled = !this.disabled;
      },
    },
  };
</script>
`
const radioStyle = `
<template>
  <div>
    <div>
      <ik-radio-group @change="onChange" v-model="value">
        <ik-radio-button value="a">Hangzhou</ik-radio-button>
        <ik-radio-button value="b">Shanghai</ik-radio-button>
        <ik-radio-button value="c">Beijing</ik-radio-button>
        <ik-radio-button value="d">Chengdu</ik-radio-button>
      </ik-radio-group>
    </div>
    <div :style="{ marginTop: '16px' }">
      <ik-radio-group @change="onChange" defaultValue="a">
        <ik-radio-button value="a">Hangzhou</ik-radio-button>
        <ik-radio-button value="b" disabled>Shanghai</ik-radio-button>
        <ik-radio-button value="c">Beijing</ik-radio-button>
        <ik-radio-button value="d">Chengdu</ik-radio-button>
      </ik-radio-group>
    </div>
    <div :style="{ marginTop: '16px' }">
      <ik-radio-group disabled @change="onChange" defaultValue="a">
        <ik-radio-button value="a">Hangzhou</ik-radio-button>
        <ik-radio-button value="b">Shanghai</ik-radio-button>
        <ik-radio-button value="c">Beijing</ik-radio-button>
        <ik-radio-button value="d">Chengdu</ik-radio-button>
      </ik-radio-group>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: 'a',
      };
    },
    methods: {
      onChange(e) {
        console.log(\`checked = \${e.target.value}\`);
      },
    },
  };
</script>
`
const radioBottomStyle = `
<template>
  <div>
    <div>
      <ik-radio-group defaultValue="a" buttonStyle="solid">
        <ik-radio-button value="a">Hangzhou</ik-radio-button>
        <ik-radio-button value="b">Shanghai</ik-radio-button>
        <ik-radio-button value="c">Beijing</ik-radio-button>
        <ik-radio-button value="d">Chengdu</ik-radio-button>
      </ik-radio-group>
    </div>
    <div :style="{ marginTop: '16px' }">
      <ik-radio-group defaultValue="c" buttonStyle="solid">
        <ik-radio-button value="a">Hangzhou</ik-radio-button>
        <ik-radio-button value="b" disabled>Shanghai</ik-radio-button>
        <ik-radio-button value="c">Beijing</ik-radio-button>
        <ik-radio-button value="d">Chengdu</ik-radio-button>
      </ik-radio-group>
    </div>
  </div>
</template>
`
const radioGroup = `
<template>
  <ik-radio-group @change="onChange" v-model="value">
    <ik-radio :style="radioStyle" :value="1">Option A</ik-radio>
    <ik-radio :style="radioStyle" :value="2">Option B</ik-radio>
    <ik-radio :style="radioStyle" :value="3">Option C</ik-radio>
    <ik-radio :style="radioStyle" :value="4">
      More...
      <ik-input v-if="value === 4" :style="{ width: 100, marginLeft: 10 }" />
    </ik-radio>
  </ik-radio-group>
</template>
<script>
  export default {
    data() {
      return {
        value: 1,
        radioStyle: {
          display: 'block',
          height: '30px',
          lineHeight: '30px',
        },
      };
    },
    methods: {
      onChange(e) {
        console.log('radio checked', e.target.value);
      },
    },
  };
</script>
`
const radioGroupOption = `
<template>
  <div>
    <ik-radio-group :options="plainOptions" @change="onChange1" :defaultValue="value1" />
    <br />
    <ik-radio-group :options="options" @change="onChange2" v-model="value2" />
    <br />
    <ik-radio-group :options="optionsWithDisabled" disabled @change="onChange3" v-model="value3" />
  </div>
</template>
<script>
  const plainOptions = ['Apple', 'Pear', 'Orange'];
  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
  ];
  const optionsWithDisabled = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: false },
  ];
  export default {
    data() {
      return {
        plainOptions,
        options,
        optionsWithDisabled,
        value1: 'Apple',
        value2: 'Apple',
        value3: 'Apple',
      };
    },
    methods: {
      onChange1(e) {
        console.log('radio1 checked', e.target.value);
      },
      onChange2(e) {
        console.log('radio2 checked', e.target.value);
      },
      onChange3(e) {
        console.log('radio3 checked', e.target.value);
      },
    },
  };
</script>
`
const radioName = `
<template>
  <ik-radio-group name="radioGroup" :defaultValue="1">
    <ik-radio :value="1">A</ik-radio>
    <ik-radio :value="2">B</ik-radio>
    <ik-radio :value="3">C</ik-radio>
    <ik-radio :value="4">D</ik-radio>
  </ik-radio-group>
</template>
`
const radioMutaul = `
<template>
  <div>
    <ik-radio-group @change="onChange" v-model="value">
      <ik-radio :value="1">A</ik-radio>
      <ik-radio :value="2">B</ik-radio>
      <ik-radio :value="3">C</ik-radio>
      <ik-radio :value="4">D</ik-radio>
    </ik-radio-group>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: 1,
      };
    },
    methods: {
      onChange(e) {
        console.log('radio checked', e.target.value);
      },
    },
  };
</script>
`
const radioSize = `
<template>
  <div>
    <div>
      <ik-radio-group defaultValue="a" size="large">
        <ik-radio-button value="a">Hangzhou</ik-radio-button>
        <ik-radio-button value="b">Shanghai</ik-radio-button>
        <ik-radio-button value="c">Beijing</ik-radio-button>
        <ik-radio-button value="d">Chengdu</ik-radio-button>
      </ik-radio-group>
    </div>
    <div :style="{ marginTop: '16px' }">
      <ik-radio-group defaultValue="a">
        <ik-radio-button value="a">Hangzhou</ik-radio-button>
        <ik-radio-button value="b">Shanghai</ik-radio-button>
        <ik-radio-button value="c">Beijing</ik-radio-button>
        <ik-radio-button value="d">Chengdu</ik-radio-button>
      </ik-radio-group>
    </div>
    <div :style="{ marginTop: '16px' }">
      <ik-radio-group defaultValue="a" size="small">
        <ik-radio-button value="a">Hangzhou</ik-radio-button>
        <ik-radio-button value="b">Shanghai</ik-radio-button>
        <ik-radio-button value="c">Beijing</ik-radio-button>
        <ik-radio-button value="d">Chengdu</ik-radio-button>
      </ik-radio-group>
    </div>
  </div>
</template>
`
export {
  radioBasics,
  radioDisabled,
  radioStyle,
  radioBottomStyle,
  radioGroup,
  radioGroupOption,
  radioName,
  radioMutaul,
  radioSize
}
