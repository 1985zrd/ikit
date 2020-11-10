<template>
  <codeBox :title="title" :description="description" :code="text">
    <ik-form>
      <ik-form-item
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        label="Fail"
        validate-status="error"
        help="Should be combination of numbers & alphabets"
      >
        <ik-input id="error" placeholder="unavailable choice" />
      </ik-form-item>

      <ik-form-item
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        label="Warning"
        validate-status="warning"
      >
        <ik-input id="warning" placeholder="Warning" />
      </ik-form-item>

      <ik-form-item
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        label="Validating"
        has-feedback
        validate-status="validating"
        help="The information is being validated..."
      >
        <ik-input id="validating" placeholder="I'm the content is being validated" />
      </ik-form-item>

      <ik-form-item
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        label="Success"
        has-feedback
        validate-status="success"
      >
        <ik-input id="success" placeholder="I'm the content" />
      </ik-form-item>

      <ik-form-item
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        label="Warning"
        has-feedback
        validate-status="warning"
      >
        <ik-input id="warning2" placeholder="Warning" />
      </ik-form-item>

      <ik-form-item
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        label="Fail"
        has-feedback
        validate-status="error"
        help="Should be combination of numbers & alphabets"
      >
        <ik-input id="error2" placeholder="unavailable choice" />
      </ik-form-item>

      <ik-form-item
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        label="Success"
        has-feedback
        validate-status="success"
      >
        <ik-date-picker style="width: 100%" />
      </ik-form-item>

      <ik-form-item
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        label="Warning"
        has-feedback
        validate-status="warning"
      >
        <a-time-picker style="width: 100%" />
      </ik-form-item>

      <ik-form-item
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        label="Error"
        has-feedback
        validate-status="error"
      >
        <ik-select default-value="1">
          <ik-select-option value="1">Option 1</ik-select-option>
          <ik-select-option value="2">Option 2</ik-select-option>
          <ik-select-option value="3">Option 3</ik-select-option>
        </ik-select>
      </ik-form-item>

      <ik-form-item
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        label="Validating"
        has-feedback
        validate-status="validating"
        help="The information is being validated..."
      >
        <ik-cascader :default-value="['1']" :options="[]" />
      </ik-form-item>

      <ik-form-item
        label="inline"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        style="margin-bottom:0;"
      >
        <ik-form-item
          validate-status="error"
          help="Please select the correct date"
          :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }"
        >
          <ik-date-picker style="width: 100%" />
        </ik-form-item>
        <span :style="{ display: 'inline-block', width: '24px', textAlign: 'center' }">-</span>
        <ik-form-item :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }">
          <ik-date-picker style="width: 100%" />
        </ik-form-item>
      </ik-form-item>

      <ik-form-item
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        label="Success"
        has-feedback
        validate-status="success"
      >
        <ik-input-number style="width: 100%" />
      </ik-form-item>
    </ik-form>
  </codeBox>
</template>
<script>
import { customCheckFormCode } from '../codeExample'
// import mixin from '../formMixins'
export default {
  // mixins: [mixin],
  name: 'customCheckForm',
  data () {
    return {
      title: '自定义校验',
      description: '我们提供了 validateStatus help hasFeedback 等属性，你可以不需要使用 Form.create 和 getFieldDecorator，自己定义校验的时机和内容。validateStatus: 校验状态，可选 ‘success’, ‘warning’, ‘error’, ‘validating’。hasFeedback：用于给输入框添加反馈图标。help：设置校验文案。',
      text: customCheckFormCode,
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 }
      }
    }
  }
}
</script>
