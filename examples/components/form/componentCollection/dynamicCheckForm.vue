<template>
  <codeBox title="动态校验规则" description="根据不同情况执行不同的校验规则。" :code="text">
    <div>
      <ik-form :form="form">
        <ik-form-item
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
          label="Name"
        >
          <ik-input
            v-decorator="[
              'username',
              { rules: [{ required: true, message: 'Please input your name' }] },
            ]"
            placeholder="Please input your name"
          />
        </ik-form-item>
        <br />
        <ik-form-item
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
          label="Nickname"
        >
          <ik-input
            v-decorator="[
              'nickname',
              { rules: [{ required: checkNick, message: 'Please input your nickname' }] },
            ]"
            placeholder="Please input your nickname"
          />
        </ik-form-item>
        <br />
        <ik-form-item :label-col="formTailLayout.labelCol" :wrapper-col="formTailLayout.wrapperCol">
          <ik-checkbox :checked="checkNick" @change="handleChange">Nickname is required</ik-checkbox>
        </ik-form-item>
        <br />
        <ik-form-item :label-col="formTailLayout.labelCol" :wrapper-col="formTailLayout.wrapperCol">
          <ik-button type="primary" @click="check">Check</ik-button>
        </ik-form-item>
      </ik-form>
    </div>
  </codeBox>
</template>
<script>
// import mixin from '../formMixins'
import { formItemLayouts } from '../codeExample'
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 }
}
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 }
}
export default {
  // mixins: [mixin],
  data () {
    return {
      text: formItemLayouts,
      checkNick: false,
      formItemLayout,
      formTailLayout,
      form: this.$form.createForm(this, { name: 'dynamic_rule' })
    }
  },
  methods: {
    check () {
      this.form.validateFields(err => {
        if (!err) {
          console.info('success')
        }
      })
    },
    handleChange (e) {
      this.checkNick = e.target.checked
      this.$nextTick(() => {
        this.form.validateFields(['nickname'], { force: true })
      })
    }
  }
}
</script>
