<template>
  <codeBox :title="title" :description="description" :code="text">
    <ik-form :form="form" @submit="handleSubmit">
      <ik-form-item v-bind="formItemLayout" label="E-mail">
        <ik-input
          v-decorator="[
            'email',
            {
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ],
            },
          ]"
        />
      </ik-form-item>
      <ik-form-item v-bind="formItemLayout" label="Password">
        <ik-input
          v-decorator="[
            'password',
            {
              rules: [
                {
                  required: true,
                  message: 'Please input your password!',
                },
                {
                  validator: validateToNextPassword,
                },
              ],
            },
          ]"
          type="password"
        />
      </ik-form-item>
      <ik-form-item v-bind="formItemLayout" label="Confirm Password">
        <ik-input
          v-decorator="[
            'confirm',
            {
              rules: [
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                {
                  validator: compareToFirstPassword,
                },
              ],
            },
          ]"
          type="password"
          @blur="handleConfirmBlur"
        />
      </ik-form-item>
      <ik-form-item v-bind="formItemLayout">
        <span slot="label">
          Nickname&nbsp;
          <ik-tooltip title="What do you want others to call you?">
            <ik-icon type="question-circle-o" />
          </ik-tooltip>
        </span>
        <ik-input
          v-decorator="[
            'nickname',
            {
              rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
            },
          ]"
        />
      </ik-form-item>
      <ik-form-item v-bind="formItemLayout" label="Habitual Residence">
        <ik-cascader
          v-decorator="[
            'residence',
            {
              initialValue: ['zhejiang', 'hangzhou', 'xihu'],
              rules: [
                { type: 'array', required: true, message: 'Please select your habitual residence!' },
              ],
            },
          ]"
          :options="residences"
        />
      </ik-form-item>
      <ik-form-item v-bind="formItemLayout" label="Phone Number">
        <ik-input
          v-decorator="[
            'phone',
            {
              rules: [{ required: true, message: 'Please input your phone number!' }],
            },
          ]"
          style="width: 100%"
        >
          <ik-select
            slot="addonBefore"
            v-decorator="['prefix', { initialValue: '86' }]"
            style="width: 70px"
          >
            <ik-select-option value="86">+86</ik-select-option>
            <ik-select-option value="87">+87</ik-select-option>
          </ik-select>
        </ik-input>
      </ik-form-item>
      <ik-form-item v-bind="formItemLayout" label="Website">
        <ik-auto-complete
          v-decorator="['website', { rules: [{ required: true, message: 'Please input website!' }] }]"
          placeholder="website"
          @change="handleWebsiteChange"
        >
          <template slot="dataSource">
            <ik-select-option v-for="website in autoCompleteResult" :key="website">{{ website }}</ik-select-option>
          </template>
          <ik-input />
        </ik-auto-complete>
      </ik-form-item>
      <ik-form-item
        v-bind="formItemLayout"
        label="Captcha"
        extra="We must make sure that your are a human."
      >
        <ik-row :gutter="8">
          <ik-col :span="12">
            <ik-input
              v-decorator="[
                'captcha',
                { rules: [{ required: true, message: 'Please input the captcha you got!' }] },
              ]"
            />
          </ik-col>
          <ik-col :span="12">
            <ik-button>Get captcha</ik-button>
          </ik-col>
        </ik-row>
      </ik-form-item>
      <ik-form-item v-bind="tailFormItemLayout">
        <ik-checkbox v-decorator="['agreement', { valuePropName: 'checked' }]">
          I have read the
          <a href>agreement</a>
        </ik-checkbox>
      </ik-form-item>
      <ik-form-item v-bind="tailFormItemLayout">
        <ik-button type="primary" html-type="submit">Register</ik-button>
      </ik-form-item>
    </ik-form>
  </codeBox>
</template>

<script>
// import mixin from '../formMixins'
import { registerNewUserCode } from '../codeExample'
const residences = [
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
  // mixins: [mixin],
  name: 'registerNewUser',
  data () {
    return {
      title: '注册新用户',
      description: '用户填写必须的信息以注册新用户。',
      text: registerNewUserCode,
      confirmDirty: false,
      residences,
      autoCompleteResult: [],
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 }
        }
      },
      tailFormItemLayout: {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0
          },
          sm: {
            span: 16,
            offset: 8
          }
        }
      }
    }
  },
  beforeCreate () {
    this.form = this.$form.createForm(this, { name: 'register' })
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    },
    handleConfirmBlur (e) {
      const value = e.target.value
      this.confirmDirty = this.confirmDirty || !!value
    },
    compareToFirstPassword (rule, value, callback) {
      const form = this.form
      const tip = 'Two passwords that you enter is inconsistent!'
      if (value && value !== form.getFieldValue('password')) {
        callback(tip)
      } else {
        callback()
      }
    },
    validateToNextPassword (rule, value, callback) {
      const form = this.form
      if (value && this.confirmDirty) {
        form.validateFields(['confirm'], { force: true })
      }
      callback()
    },
    handleWebsiteChange (value) {
      let autoCompleteResult
      if (!value) {
        autoCompleteResult = []
      } else {
        autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`)
      }
      this.autoCompleteResult = autoCompleteResult
    }
  }
}
</script>
