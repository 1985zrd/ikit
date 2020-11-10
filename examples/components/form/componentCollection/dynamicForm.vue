<template>
  <codeBox :title="title" :description="description" :code="text">
    <ik-form :form="form" @submit="handleSubmit">
      <ik-form-item
        v-for="(k, index) in form.getFieldValue('keys')"
        :key="k"
        v-bind="index === 0 ? formItemLayout : formItemLayoutWithOutLabel"
        :label="index === 0 ? 'Passengers' : ''"
        :required="false"
      >
        <ik-input
          v-decorator="[
            `names[${k}]`,
            {
              validateTrigger: ['change', 'blur'],
              rules: [
                {
                  required: true,
                  whitespace: true,
                  message: 'Please input passenger\'s name or delete this field.',
                },
              ],
            },
          ]"
          placeholder="passenger name"
          style="width: 60%; margin-right: 8px"
        />
        <ik-icon
          v-if="form.getFieldValue('keys').length > 1"
          class="dynamic-delete-button"
          type="minus-circle-o"
          :disabled="form.getFieldValue('keys').length === 1"
          @click="() => remove(k)"
        />
      </ik-form-item>
      <ik-form-item v-bind="formItemLayoutWithOutLabel">
        <ik-button type="dashed" style="width: 60%" @click="add">
          <ik-icon type="plus" /> Add field
        </ik-button>
      </ik-form-item>
      <ik-form-item v-bind="formItemLayoutWithOutLabel">
        <ik-button type="primary" html-type="submit">
          Submit
        </ik-button>
      </ik-form-item>
    </ik-form>
  </codeBox>
</template>
<script>
// import mixin from '../formMixins'
import { dynamicFormCode } from '../codeExample'
let id = 0
export default {
  // mixins: [mixin],
  name: 'dynamicForm',
  data () {
    return {
      title: '动态增减表单项',
      description: '动态增加、减少表单项。',
      text: dynamicFormCode,
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 4 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 20 }
        }
      },
      formItemLayoutWithOutLabel: {
        wrapperCol: {
          xs: { span: 24, offset: 0 },
          sm: { span: 20, offset: 4 }
        }
      }
    }
  },
  beforeCreate () {
    this.form = this.$form.createForm(this, { name: 'dynamic_form_item' })
    this.form.getFieldDecorator('keys', { initialValue: [], preserve: true })
  },
  methods: {
    remove (k) {
      const { form } = this
      // can use data-binding to get
      const keys = form.getFieldValue('keys')
      // We need at least one passenger
      if (keys.length === 1) {
        return
      }

      // can use data-binding to set
      form.setFieldsValue({
        keys: keys.filter(key => key !== k)
      })
    },

    add () {
      const { form } = this
      // can use data-binding to get
      const keys = form.getFieldValue('keys')
      const nextKeys = keys.concat(id++)
      // can use data-binding to set
      // important! notify form to detect changes
      form.setFieldsValue({
        keys: nextKeys
      })
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
<style>
.dynamic-delete-button {
  cursor: pointer;
  position: relative;
  top: 4px;
  font-size: 24px;
  color: #999;
  transition: all 0.3s;
}
.dynamic-delete-button:hover {
  color: #777;
}
.dynamic-delete-button[disabled] {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
