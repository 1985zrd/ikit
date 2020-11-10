
<template>
  <div style="padding: 20px;">
    <div style="margin-top: 20px;">
      <h2>Form</h2>
      <ik-form :form="form">
        <ik-form-item ref="formItem"
                     label="Note"
                     :label-col="{ span: 5 }"
                     :wrapper-col="{ span: 12 }">
          <ik-input v-decorator="['note', { rules: [{ required: true, message: 'Please input your note!' }] }]" />
        </ik-form-item>

        <ik-form-item :wrapper-col="{ span: 12, offset: 5 }">
          <ik-button type="primary"
                     @click="handleSubmit">
            Submit
          </ik-button>
        </ik-form-item>
      </ik-form>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'form-demo',
  data () {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' })
    }
  },
  mounted () {
    setTimeout(() => { console.log('a-----', this.$refs['formItem']) }, 20)
  },
  methods: {
    handleSubmit (e) {
      console.log(e)
      // e.preventDefault()
      debugger
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    },
    handleSelectChange (value) {
      this.form.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`
      })
    }
  }
}
</script>

<style lang="less" scoped>
.upload {
}
</style>
