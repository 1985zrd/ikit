<template>
  <codeBox title="输入框组合 " description="输入框的组合展现。<br/>注意：使用 compact 模式时，不需要通过 Col 来控制宽度。" :code="compactInputCode">
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
  </codeBox>
</template>
<script>
import { compactInputCode } from './../codeExample'
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
            label: 'West Lake'
          }
        ]
      }
    ]
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
            label: 'Zhong Hua Men'
          }
        ]
      }
    ]
  }
]
export default {
  data () {
    return {
      compactInputCode,
      options,
      dataSource: []
    }
  },
  methods: {
    handleChange (value) {
      this.dataSource =
          !value || value.indexOf('@') >= 0
            ? []
            : [`${value}@gmail.com`, `${value}@163.com`, `${value}@qq.com`]
    }
  }
}
</script>
