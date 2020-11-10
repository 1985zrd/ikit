<template>
  <codeBox :title="title" :description="description" :code="text">
    <ik-form :form="form" @submit="handleSubmit">
      <ik-form-item label="Note" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <ik-input
          v-decorator="['note', { rules: [{ required: true, message: 'Please input your note!' }] }]"
        />
      </ik-form-item>
      <ik-form-item label="Gender" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <ik-select
          v-decorator="[
            'gender',
            { rules: [{ required: true, message: 'Please select your gender!' }] },
          ]"
          placeholder="Select a option and change input text above"
          @change="handleSelectChange"
        >
          <ik-select-option value="male">male</ik-select-option>
          <ik-select-option value="female">female</ik-select-option>
        </ik-select>
      </ik-form-item>
      <ik-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <ik-button type="primary" html-type="submit">Submit</ik-button>
      </ik-form-item>
    </ik-form>
  </codeBox>
</template>
<script>
import { fromLinkageText } from '../codeExample'
// import mixin from '../formMixins'
export default {
  // mixins: [mixin],
  name: 'fromLinkage',
  data () {
    return {
      title: '表单联动',
      description: '使用 setFieldsValue 来动态设置其他控件的值。',
      text: fromLinkageText,
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' })
    }
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
    handleSelectChange (value) {
      console.log(this.form)
      // debugger
      this.form.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`
      })
    }
  }
}
</script>
