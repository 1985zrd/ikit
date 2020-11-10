<template>
  <codeBox :title="title" :description="description" :code="text">
    <ik-form :layout="formLayout">
      <ik-form-item
        label="Form Layout"
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
      >
        <ik-radio-group default-value="horizontal" @change="handleFormLayoutChange">
          <ik-radio-button value="horizontal">Horizontal</ik-radio-button>
          <ik-radio-button value="vertical">Vertical</ik-radio-button>
          <ik-radio-button value="inline">Inline</ik-radio-button>
        </ik-radio-group>
      </ik-form-item>
      <ik-form-item
        label="Field A"
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
      >
        <ik-input placeholder="input placeholder" />
      </ik-form-item>
      <ik-form-item
        label="Field B"
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
      >
        <ik-input placeholder="input placeholder" />
      </ik-form-item>
      <ik-form-item :wrapper-col="buttonItemLayout.wrapperCol">
        <ik-button type="primary">Submit</ik-button>
      </ik-form-item>
    </ik-form>
  </codeBox>
</template>

<script>
import { formLayoutCode } from '../codeExample'
// import mixin from '../formMixins'
export default {
  // mixins: [mixin],
  name: 'layoutForm',
  data () {
    return {
      title: '表单布局。',
      description: '表单有三种布局。',
      text: formLayoutCode,
      formLayout: 'horizontal'
    }
  },
  computed: {
    formItemLayout () {
      const { formLayout } = this
      return formLayout === 'horizontal'
        ? {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 }
        }
        : {}
    },
    buttonItemLayout () {
      const { formLayout } = this
      return formLayout === 'horizontal'
        ? {
          wrapperCol: { span: 14, offset: 4 }
        }
        : {}
    }
  },
  methods: {
    handleFormLayoutChange (e) {
      this.formLayout = e.target.value
    }
  }
}
</script>
