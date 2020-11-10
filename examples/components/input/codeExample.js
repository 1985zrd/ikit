const basicInputCode = `
<template>
  <ik-input placeholder="Basic usage" />
</template>
`
const autosizeInputCode = `
<template>
  <div>
    <ik-textarea placeholder="Autosize height based on content lines" autosize />
    <div style="margin: 24px 0" />
    <ik-textarea
      placeholder="Autosize height with minimum and maximum number of lines"
      :autosize="{ minRows: 2, maxRows: 6 }"
    />
  </div>
</template>
`

const iconInputCode = `
<template>
  <div class="components-input-demo-presuffix">
    <ik-input placeholder="Basic usage" v-model="userName" ref="userNameInput">
      <ik-icon slot="prefix" type="user" />
      <ik-tooltip slot="suffix" title="Extra information">
        <ik-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
      </ik-tooltip>
    </ik-input>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        userName: '',
      };
    },
    methods: {
      emitEmpty() {
        this.$refs.userNameInput.focus();
        this.userName = '';
      },
    },
  };
</script>
<style scoped>
  .components-input-demo-presuffix .anticon-close-circle {
    cursor: pointer;
    color: #ccc;
    transition: color 0.3s;
    font-size: 12px;
  }
  .components-input-demo-presuffix .anticon-close-circle:hover {
    color: #999;
  }
  .components-input-demo-presuffix .anticon-close-circle:active {
    color: #666;
  }
</style>
`
const searchInputCode = `
<template>
  <div>
    <ik-input-search placeholder="input search text" style="width: 200px" @search="onSearch" />
    <br /><br />
    <ik-input-search placeholder="input search text" @search="onSearch" enterButton />
    <br /><br />
    <ik-input-search
      placeholder="input search text"
      @search="onSearch"
      enterButton="Search"
      size="large"
    />
    <br /><br />
    <ik-input-search placeholder="input search text" @search="onSearch" size="large">
      <ik-button slot="enterButton">Custom</ik-button>
    </ik-input-search>
  </div>
</template>

<script>
  export default {
    methods: {
      onSearch(value) {
        console.log(value);
      },
    },
  };
</script>`

const sizeInputCode = `
<template>
  <div class="components-input-demo-size">
    <ik-input size="large" placeholder="large size" />
    <ik-input placeholder="default size" />
    <ik-input size="small" placeholder="small size" />
  </div>
</template>
<style scoped>
  .components-input-demo-size .ant-input {
    width: 200px;
    margin: 0 8px 8px 0;
  }
</style>
`
const compactInputCode = `
<template>
  <div>
    <ik-input-group size="large">
      <ik-row :gutter="8">
        <ik-col :span="5">
          <ik-input defaultValue="0571" />
        </ik-col>
        <ik-col :span="8">
          <ik-input defaultValue="26888888" />
        </ik-col>
      </ik-row>
    </ik-input-group>
    <br />
    <ik-input-group compact>
      <ik-input style="width: 20%" defaultValue="0571" />
      <ik-input style="width: 30%" defaultValue="26888888" />
    </ik-input-group>
    <br />
    <ik-input-group compact>
      <ik-select defaultValue="Zhejiang">
        <ik-select-option value="Zhejiang">Zhejiang</ik-select-option>
        <ik-select-option value="Jiangsu">Jiangsu</ik-select-option>
      </ik-select>
      <ik-input style="width: 50%" defaultValue="Xihu District, Hangzhou" />
    </ik-input-group>
    <br />
    <ik-input-group compact>
      <ik-select defaultValue="Option1">
        <ik-select-option value="Option1">Option1</ik-select-option>
        <ik-select-option value="Option2">Option2</ik-select-option>
      </ik-select>
      <ik-input style="width: 50%" defaultValue="input content" />
    </ik-input-group>
    <br />
    <ik-input-group compact>
      <ik-input style="width: 50%" defaultValue="input content" />
      <ik-date-picker style="width: 50%" />
    </ik-input-group>
    <br />
    <ik-input-group compact>
      <ik-select defaultValue="Option1-1">
        <ik-select-option value="Option1-1">Option1-1</ik-select-option>
        <ik-select-option value="Option1-2">Option1-2</ik-select-option>
      </ik-select>
      <ik-select defaultValue="Option2-2">
        <ik-select-option value="Option2-1">Option2-1</ik-select-option>
        <ik-select-option value="Option2-2">Option2-2</ik-select-option>
      </ik-select>
    </ik-input-group>
    <br />
    <ik-input-group compact>
      <ik-select defaultValue="1">
        <ik-select-option value="1">Between</ik-select-option>
        <ik-select-option value="2">Except</ik-select-option>
      </ik-select>
      <ik-input style=" width: 100px; text-align: center" placeholder="Minimum" />
      <ik-input
        style=" width: 30px; border-left: 0; pointer-events: none; backgroundColor: #fff; border-color: #AEAEAE"
        placeholder="~"
        disabled
      />
      <ik-input style="width: 100px; text-align: center; border-left: 0" placeholder="Maximum" />
    </ik-input-group>
    <br />
    <ik-input-group compact>
      <ik-select defaultValue="Sign Up">
        <ik-select-option value="Sign Up">Sign Up</ik-select-option>
        <ik-select-option value="Sign In">Sign In</ik-select-option>
      </ik-select>
      <ik-auto-complete
        :dataSource="dataSource"
        style="width: 200px"
        @change="handleChange"
        placeholder="Email"
      />
    </ik-input-group>
    <br />
    <ik-input-group compact>
      <ik-select style="width: 30%" defaultValue="Home">
        <ik-select-option value="Home">Home</ik-select-option>
        <ik-select-option value="Company">Company</ik-select-option>
      </ik-select>
      <ik-cascader style="width: 70%" :options="options" placeholder="Select Address" />
    </ik-input-group>
  </div>
</template>
<script>
  const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];
  export default {
    data() {
      return {
        options,
        dataSource: [],
      };
    },
    methods: {
      handleChange(value) {
        this.dataSource =
          !value || value.indexOf('@') >= 0
            ? []
            : [\`\${value}@gmail.com\`, \`\${value}@163.com\`, \`\${value}@qq.com\`];
      },
    },
  };
</script>
`
const textareaInputCode = `
<template>
  <ik-textarea placeholder="Basic usage" :rows="4" />
</template>
`
const composeInputCode = `
<template>
  <div>
    <div style="margin-bottom: 16px">
      <ik-input addonBefore="Http://" addonAfter=".com" defaultValue="mysite" />
    </div>
    <div style="margin-bottom: 16px">
      <ik-input defaultValue="mysite">
        <ik-select slot="addonBefore" defaultValue="Http://" style="width: 90px">
          <ik-select-option value="Http://">Http://</ik-select-option>
          <ik-select-option value="Https://">Https://</ik-select-option>
        </ik-select>
        <ik-select slot="addonAfter" defaultValue=".com" style="width: 80px">
          <ik-select-option value=".com">.com</ik-select-option>
          <ik-select-option value=".jp">.jp</ik-select-option>
          <ik-select-option value=".cn">.cn</ik-select-option>
          <ik-select-option value=".org">.org</ik-select-option>
        </ik-select>
      </ik-input>
    </div>
    <div style="margin-bottom: 16px">
      <ik-input defaultValue="mysite">
        <ik-icon slot="addonAfter" type="setting" />
      </ik-input>
    </div>
  </div>
</template>
`
const formatInputCode = `
<template>
  <ik-tooltip :trigger="['focus']" placement="topLeft" overlayClassName="numeric-input">
    <span slot="title" v-if="value" class="numeric-input-title">
      {{value !== '-' ? formatNumber(value) : '-'}}
    </span>
    <template slot="title" v-else>
      Input a number
    </template>
    <ik-input
      :value="value"
      @change="onChange"
      @blur="onBlur"
      placeholder="Input a number"
      :maxLength="25"
      style="width: 120px"
    />
  </ia>
</template>
<script>
  function formatNumber(value) {
    value += '';
    const list = value.split('.');
    const prefix = list[0].charAt(0) === '-' ? '-' : '';
    let num = prefix ? list[0].slice(1) : list[0];
    let result = '';
    while (num.length > 3) {
      result = \`,\${num.slice(-3)}\${result}\`;
      num = num.slice(0, num.length - 3);
    }
    if (num) {
      result = num + result;
    }
    return \`\${prefix}\${result}\${list[1] ? \`.\${list[1]}\` : ''}\`;
  }

  export default {
    data() {
      return {
        value: '',
      };
    },
    methods: {
      formatNumber,
      onChange(e) {
        const { value } = e.target;
        const reg = /^-?(0|[1-9][0-9]*)(\\.[0-9]*)?$/;
        if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
          this.value = value;
        }
      },
      // '.' at the end or only '-' in the input box.
      onBlur() {
        const { value, onChange } = this;
        if (value.charAt(value.length - 1) === '.' || value === '-') {
          onChange({ value: value.slice(0, -1) });
        }
      },
    },
  };
</script>
<style>
  /* to prevent the arrow overflow the popup container,
or the height is not enough when content is empty */
  .numeric-input .ant-tooltip-inner {
    min-width: 32px;
    min-height: 37px;
  }

  .numeric-input .numeric-input-title {
    font-size: 14px;
  }
</style>
`
const clearIconInputCode = `
<template>
  <ik-input placeholder="input with clear icon" allowClear @change="onChange" />
</template>
<script>
  export default {
    methods: {
      onChange(e) {
        console.log(e);
      },
    },
  };
</script>
`
const passwordInputCode = `
<template>
  <ik-input-password placeholder="input password" />
</template>
`

export {
  basicInputCode, autosizeInputCode, iconInputCode, searchInputCode, sizeInputCode, compactInputCode,
  textareaInputCode, composeInputCode, formatInputCode, clearIconInputCode, passwordInputCode
}
