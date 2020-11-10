<template>
  <codeBox :title="title" :description="description" :code="text">
    <ik-form
    id="components-form-demo-validate-other"
    :form="form"
    v-bind="formItemLayout"
    @submit="handleSubmit"
  >
      <ik-form-item label="Plain Text">
        <span class="ant-form-text">China</span>
      </ik-form-item>
      <ik-form-item label="Select" has-feedback>
        <ik-select
          v-decorator="[
            'select',
            { rules: [{ required: true, message: 'Please select your country!' }] },
          ]"
          placeholder="Please select a country"
        >
          <ik-select-option value="china">China</ik-select-option>
          <ik-select-option value="usa">U.S.A</ik-select-option>
        </ik-select>
      </ik-form-item>

      <ik-form-item label="Select[multiple]">
        <ik-select
          v-decorator="[
            'select-multiple',
            {
              rules: [
                { required: true, message: 'Please select your favourite colors!', type: 'array' },
              ],
            },
          ]"
          mode="multiple"
          placeholder="Please select favourite colors"
        >
          <ik-select-option value="red">Red</ik-select-option>
          <ik-select-option value="green">Green</ik-select-option>
          <ik-select-option value="blue">Blue</ik-select-option>
        </ik-select>
      </ik-form-item>

      <ik-form-item label="InputNumber">
        <ik-input-number v-decorator="['input-number', { initialValue: 3 }]" :min="1" :max="10" />
        <span class="ant-form-text">machines</span>
      </ik-form-item>

      <ik-form-item label="Switch">
        <ik-switch v-decorator="['switch', { valuePropName: 'checked' }]" />
      </ik-form-item>

      <ik-form-item label="Slider">
        <ik-slider
          v-decorator="['slider']"
          :marks="{ 0: 'A', 20: 'B', 40: 'C', 60: 'D', 80: 'E', 100: 'F' }"
        />
      </ik-form-item>

      <ik-form-item label="Radio.Group">
        <ik-radio-group v-decorator="['radio-group']">
          <ik-radio value="a">item 1</ik-radio>
          <ik-radio value="b">item 2</ik-radio>
          <ik-radio value="c">item 3</ik-radio>
        </ik-radio-group>
      </ik-form-item>

      <ik-form-item label="Radio.Button">
        <ik-radio-group v-decorator="['radio-button']">
          <ik-radio-button value="a">item 1</ik-radio-button>
          <ik-radio-button value="b">item 2</ik-radio-button>
          <ik-radio-button value="c">item 3</ik-radio-button>
        </ik-radio-group>
      </ik-form-item>

      <ik-form-item label="Checkbox.Group">
        <ik-checkbox-group
          v-decorator="['checkbox-group', { initialValue: ['A', 'B'] }]"
          style="width: 100%;"
        >
          <ik-row>
            <ik-col :span="8">
              <ik-checkbox value="A">A</ik-checkbox>
            </ik-col>
            <ik-col :span="8">
              <ik-checkbox disabled value="B">B</ik-checkbox>
            </ik-col>
            <ik-col :span="8">
              <ik-checkbox value="C">C</ik-checkbox>
            </ik-col>
            <ik-col :span="8">
              <ik-checkbox value="D">D</ik-checkbox>
            </ik-col>
            <ik-col :span="8">
              <ik-checkbox value="E">E</ik-checkbox>
            </ik-col>
          </ik-row>
        </ik-checkbox-group>
      </ik-form-item>

      <ik-form-item label="Rate">
        <a-rate v-decorator="['rate', { initialValue: 3.5 }]" allow-half />
      </ik-form-item>

      <ik-form-item label="Upload" extra="longgggggggggggggggggggggggggggggggggg">
        <ik-upload
          v-decorator="[
            'upload',
            {
              valuePropName: 'fileList',
              getValueFromEvent: normFile,
            },
          ]"
          name="logo"
          action="/upload.do"
          list-type="picture"
        >
          <ik-button>
            <ik-icon type="upload" />Click to upload
          </ik-button>
        </ik-upload>
      </ik-form-item>

      <ik-form-item label="Dragger">
        <div class="dropbox">
          <ik-upload-dragger
            v-decorator="[
              'dragger',
              {
                valuePropName: 'fileList',
                getValueFromEvent: normFile,
              },
            ]"
            name="files"
            action="/upload.do"
          >
            <p class="ant-upload-drag-icon">
              <ik-icon type="inbox" />
            </p>
            <p class="ant-upload-text">Click or drag file to this area to upload</p>
            <p class="ant-upload-hint">Support for a single or bulk upload.</p>
          </ik-upload-dragger>
        </div>
      </ik-form-item>

      <ik-form-item :wrapper-col="{ span: 12, offset: 6 }">
        <ik-button type="primary" html-type="submit">Submit</ik-button>
      </ik-form-item>
    </ik-form>
  </codeBox>
</template>

<script>
// import mixin from '../formMixins'
import { otherTypesFormCode } from '../codeExample'
export default {
  // mixins: [mixin],
  name: 'otherTypesForm',
  data () {
    return {
      title: '校验其他组件',
      description: '以上演示没有出现的表单控件对应的校验演示。',
      text: otherTypesFormCode,
      formItemLayout: {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 }
      }
    }
  },
  beforeCreate () {
    this.form = this.$form.createForm(this, { name: 'validate_other' })
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    },
    normFile (e) {
      console.log('Upload event:', e)
      if (Array.isArray(e)) {
        return e
      }
      return e && e.fileList
    }
  }
}
</script>
<style>
#components-form-demo-validate-other .dropbox {
  height: 180px;
  line-height: 1.5;
}
</style>
