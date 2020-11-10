<template>
  <codeBox :title="title" :description="description" :code="text">
    <div id="components-form-demo-global-state">
      <customized-form :username="fields.username" @change="handleFormChange" />
      <pre class="language-bash">
        {{ JSON.stringify(fields, null, 2) }}
      </pre>
    </div>
  </codeBox>
</template>
<script>
import mixin from '../formMixins'
import { dataStorageFormCode } from '../codeExample'
const CustomizedForm = {
  mixins: [mixin],
  props: ['username'],
  render () {
    return (
      <ik-form layout='inline' form={this.form}>
        <ik-form-item label='Username'>
          <ik-input
            v-decorator={[
              'username',
              {
                rules: [{ required: true, message: 'Username is required!' }]
              }
            ]}
          />
        </ik-form-item>
      </ik-form>
    )
  },
  created () {
    this.form = this.$form.createForm(this, {
      name: 'global_state',
      onFieldsChange: (_, changedFields) => {
        this.$emit('change', changedFields)
      },
      mapPropsToFields: () => {
        return {
          username: this.$form.createFormField({
            ...this.username,
            value: this.username.value
          })
        }
      },
      onValuesChange (_, values) {
        console.log(values)
      }
    })
  },
  watch: {
    username () {
      this.form.updateFields({
        username: this.$form.createFormField({
          ...this.username,
          value: this.username.value
        })
      })
    }
  }
}

export default {
  mixins: [mixin],
  name: 'dataStorageForm',
  components: {
    CustomizedForm
  },
  data () {
    return {
      title: '表单数据存储于上层组件',
      description: '通过使用 onFieldsChange 与 mapPropsToFields，可以把表单的数据存储到上层组件。注意：mapPropsToFields 里面返回的表单域数据必须使用 Form.createFormField 包装。如果你使用Form.create，上层组件传递的属性，必须在Form.create({ props: ...})的props中声明。如果使用this.$form.createForm，你可以使用任何数据，不仅仅局限于上层组件的属性。',
      text: dataStorageFormCode,
      fields: {
        username: {
          value: 'benjycui'
        }
      }
    }
  },
  methods: {
    handleFormChange (changedFields) {
      console.log('changedFields', changedFields)
      this.fields = { ...this.fields, ...changedFields }
    }
  }
}
</script>
<style lang="less" scoped>
#components-form-demo-global-state .language-bash {
  max-width: 400px;
  border-radius: 6px;
  margin-top: 24px;
}
</style>
