const basiCheckboxCode = `
<template>
  <ik-checkbox @change="onChange">Checkbox</ik-checkbox>
</template>
<script>
  export default {
    methods: {
      onChange(e) {
        console.log(\`checked = \${e.target.checked}\`);
      },
    },
  };
</script>

`
const checkAllBoxCode = `
<template>
  <div>
    <div :style="{ borderBottom: '1px solid #E9E9E9' }">
      <ik-checkbox :indeterminate="indeterminate" @change="onCheckAllChange" :checked="checkAll">
        Check all
      </ik-checkbox>
    </div>
    <br />
    <ik-checkbox-group :options="plainOptions" v-model="checkedList" @change="onChange" />
  </div>
</template>
<script>
  const plainOptions = ['Apple', 'Pear', 'Orange'];
  const defaultCheckedList = ['Apple', 'Orange'];
  export default {
    data() {
      return {
        checkedList: defaultCheckedList,
        indeterminate: true,
        checkAll: false,
        plainOptions,
      };
    },
    methods: {
      onChange(checkedList) {
        this.indeterminate = !!checkedList.length && checkedList.length < plainOptions.length;
        this.checkAll = checkedList.length === plainOptions.length;
      },
      onCheckAllChange(e) {
        Object.assign(this, {
          checkedList: e.target.checked ? plainOptions : [],
          indeterminate: false,
          checkAll: e.target.checked,
        });
      },
    },
  };
</script>

`
const controllCheckboxCode = `
<template>
  <div>
    <p :style="{ marginBottom: '20px' }">
      <ik-checkbox :checked="checked" :disabled="disabled" @change="onChange">
        {{label}}
      </ik-checkbox>
    </p>
    <p>
      <ik-button type="primary" size="small" @click="toggleChecked">
        {{!checked ? 'Check' : 'Uncheck'}}
      </ik-button>
      <ik-button :style="{ marginLeft: '10px' }" type="primary" size="small" @click="toggleDisable">
        {{!disabled ? 'Disable' : 'Enable'}}
      </ik-button>
    </p>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        checked: true,
        disabled: false,
      };
    },
    computed: {
      label() {
        const { checked, disabled } = this;
        return \`\${checked ? 'Checked' : 'Unchecked'}-\${disabled ? 'Disabled' : 'Enabled'}\`;
      },
    },
    methods: {
      toggleChecked() {
        this.checked = !this.checked;
      },
      toggleDisable() {
        this.disabled = !this.disabled;
      },
      onChange(e) {
        this.checked = e.target.checked;
      },
    },
  };
</script>

`
const disablCheckboxCode = `
<template>
  <div>
    <ik-checkbox :defaultChecked="false" disabled />
    <br />
    <ik-checkbox defaultChecked disabled />
  </div>
</template>

`
const groupCheckboxCode = `
<template>
  <div>
    <ik-checkbox-group :options="plainOptions" v-model="value" @change="onChange" />
    <br />
    <ik-checkbox-group :options="plainOptions" :defaultValue="['Apple']" @change="onChange" />
    <br />
    <ik-checkbox-group :options="options" :value="['Pear']" @change="onChange" />
    <br />
    <ik-checkbox-group
      :options="optionsWithDisabled"
      disabled
      :defaultValue="['Apple']"
      @change="onChange"
    >
      <span style="color: red" slot="label" slot-scope="{value}">{{value}}</span>
    </ik-checkbox-group>
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
    { value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: false },
  ];
  export default {
    data() {
      return {
        plainOptions,
        options,
        optionsWithDisabled,
        value: [],
      };
    },
    methods: {
      onChange(checkedValues) {
        console.log('checked = ', checkedValues);
        console.log('value = ', this.value);
      },
    },
  };
</script>

`
const useWithGridCheckboxCode = `
<template>
  <ik-checkbox-group @change="onChange">
    <ik-row>
      <ik-col :span="8"><ik-checkbox value="A">A</ik-checkbox></ik-col>
      <ik-col :span="8"><ik-checkbox value="B">B</ik-checkbox></ik-col>
      <ik-col :span="8"><ik-checkbox value="C">C</ik-checkbox></ik-col>
      <ik-col :span="8"><ik-checkbox value="D">D</ik-checkbox></ik-col>
      <ik-col :span="8"><ik-checkbox value="E">E</ik-checkbox></ik-col>
    </ik-row>
  </ik-checkbox-group>
</template>
<script>
  export default {
    methods: {
      onChange(checkedValues) {
        console.log('checked = ', checkedValues);
      },
    },
  };
</script>

`
export {
  basiCheckboxCode,
  checkAllBoxCode,
  controllCheckboxCode,
  disablCheckboxCode,
  groupCheckboxCode,
  useWithGridCheckboxCode
}
