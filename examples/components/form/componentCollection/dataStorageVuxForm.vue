<template>
  <codeBox :title="title" :description="description" :code="text">
    <div id="components-form-demo-vuex">
      <ik-form :form="form" @submit="handleSubmit">
        <ik-form-item label="Username">
          <ik-input
            v-decorator="[
              'username',
              {
                rules: [{ required: true, message: 'Username is required!' }],
              },
            ]"
          />
        </ik-form-item>
        <ik-button type="primary" html-type="submit">Submit</ik-button>
      </ik-form>
    </div>
  </codeBox>
</template>

<script>
import { dataStorageVuxFormCode } from '../codeExample'
import mixin from '../formMixins'
export default {
  mixins: [mixin],
  name: 'dataStorageVuxForm',
  data () {
    return {
      title: '表单数据存储于 Vuex Store 中',
      description: '通过使用 onFieldsChange 与 mapPropsToFields，可以把表单的数据存储到 Vuex 中。注意：mapPropsToFields 里面返回的表单域数据必须使用 Form.createFormField 包装。',
      text: dataStorageVuxFormCode,
      // 本demo 为了演示从 vuex 获取数据, 而不安装vuex, 在这里写了假的 $store, 实际在使用vuex的项目中, 并不需要声明该数据
      // 相应的, 在computed username 里, return 了假的 this.$data.$store.state.username, 实际上 return this.$store.state.username 就可以了
      '$store': {
        state: {
          username: 'zeka'
        }
      }
    }
  },
  computed: {
    username () {
      return this.$data.$store.state.username
    }
  },
  watch: {
    username (val) {
      console.log('this.$store.state.username: ', val)
      this.form.setFieldsValue({ username: val })
    }
  },
  created () {
    this.form = this.$form.createForm(this, {
      onFieldsChange: (_, changedFields) => {
        this.$emit('change', changedFields)
      },
      mapPropsToFields: () => {
        return {
          username: this.$form.createFormField({
            value: this.username
          })
        }
      },
      onValuesChange: (_, values) => {
        console.log(values)
        // Synchronize to vuex store in real time
        // this.$store.commit('update', values)
      }
    })
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
          this.$store.commit('update', values)
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
#components-form-demo-vuex .language-bash {
  max-width: 400px;
  border-radius: 6px;
  margin-top: 24px;
}
</style>
