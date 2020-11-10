<template>
  <codeBox title="水平登录栏"
           description="水平登录栏，常用在顶部导航栏中。"
           :code="text">
    <ik-form layout="inline" :form="form" @submit="handleSubmit">
      <ik-form-item :validate-status="userNameError() ? 'error' : ''" :help="userNameError() || ''">
        <ik-input
          v-decorator="[
            'userName',
            { rules: [{ required: true, message: 'Please input your username!' }] },
          ]"
          placeholder="Username"
        >
          <ik-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
        </ik-input>
      </ik-form-item>
      <ik-form-item :validate-status="passwordError() ? 'error' : ''" :help="passwordError() || ''">
        <ik-input
          v-decorator="[
            'password',
            { rules: [{ required: true, message: 'Please input your Password!' }] },
          ]"
          type="password"
          placeholder="Password"
        >
          <ik-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
        </ik-input>
      </ik-form-item>
      <ik-form-item>
        <ik-button type="primary" html-type="submit" :disabled="hasErrors(form.getFieldsError())">
          Log in
        </ik-button>
      </ik-form-item>
    </ik-form>
  </codeBox>
</template>
<script>
import { basicDatePickerText } from '../codeExample'
// import mixin from '../formMixins'
function hasErrors (fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field])
}
export default {
  // mixins: [mixin],
  data () {
    return {
      text: basicDatePickerText,
      hasErrors,
      form: this.$form.createForm(this, { name: 'horizontal_login' })
    }
  },
  mounted () {
    this.$nextTick(() => {
      // To disabled submit button at the beginning.
      this.form.validateFields()
    })
  },
  methods: {
    // Only show error after a field is touched.
    userNameError () {
      const { getFieldError, isFieldTouched } = this.form
      return isFieldTouched('userName') && getFieldError('userName')
    },
    // Only show error after a field is touched.
    passwordError () {
      const { getFieldError, isFieldTouched } = this.form
      return isFieldTouched('password') && getFieldError('password')
    },
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    }
  }
}
</script>
