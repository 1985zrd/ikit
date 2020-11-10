<template>
  <codeBox :title="title" :description="description" :code="text">
    <ik-form
    id="components-form-demo-normal-login"
    :form="form"
    class="login-form"
    @submit="handleSubmit"
  >
    <ik-form-item>
      <ik-input
        v-decorator="[
          'userName',
          { rules: [{ required: true, message: 'Please input your username!' }] },
        ]"
        placeholder="Username"
      >
        <ik-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
      </ik-input>
    </ik-form-item>
      <ik-form-item>
        <ik-input
          v-decorator="[
            'password',
            { rules: [{ required: true, message: 'Please input your Password!' }] },
          ]"
          type="password"
          placeholder="Password"
        >
          <ik-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
        </ik-input>
      </ik-form-item>
      <ik-form-item>
        <ik-checkbox
          v-decorator="[
            'remember',
            {
              valuePropName: 'checked',
              initialValue: true,
            },
          ]"
        >Remember me</ik-checkbox>
        <a class="login-form-forgot" href>Forgot password</a>
        <ik-button type="primary" html-type="submit" class="login-form-button">Log in</ik-button>Or
        <a href>register now!</a>
      </ik-form-item>
    </ik-form>
  </codeBox>
</template>

<script>
import { loginBoxFormCode } from '../codeExample'
// import mixin from '../formMixins'
export default {
  // mixins: [mixin],
  name: 'loginBoxForm',
  data () {
    return {
      title: '登录框',
      description: '普通的登录框，可以容纳更多的元素。',
      text: loginBoxFormCode
    }
  },
  beforeCreate () {
    this.form = this.$form.createForm(this, { name: 'normal_login' })
  },
  methods: {
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
<style lang="less" scoped>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>
