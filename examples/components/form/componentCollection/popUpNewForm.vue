<template>
  <codeBox :title="title"
           :description="description"
           :code="text">
    <div>
      <ik-button type="primary"
                 @click="showModal">
        New Collection
      </ik-button>
      <collection-create-form ref="collectionForm"
                              :visible="visible"
                              @cancel="handleCancel"
                              @create="handleCreate" />
    </div>
  </codeBox>
</template>
<script>
import mixin from '../formMixins'
import { popUpNewFormCode } from '../codeExample'
const CollectionCreateForm = {
  props: ['visible'],
  mixins: [mixin],
  beforeCreate () {
    this.form = this.$form.createForm(this, { name: 'form_in_modal' })
  },
  render () {
    return (
      <ik-modal
        visible={this.visible}
        title='Create a new collection'
        okText='Create'
        onCancel={() => { this.$emit('cancel') }}
        onOk={() => { this.$emit('create') }}
      >
        <ik-form layout='vertical' form={this.form}>
          <ik-form-item label='Title'>
            <ik-input
              v-decorator={[
                'title',
                {
                  rules: [{ required: true, message: 'Please input the title of collection!' }]
                }
              ]}
            />
          </ik-form-item>
          <ik-form-item label='Description'>
            <ik-input
              type='textarea'
              v-decorator={['description']}
            />
          </ik-form-item>
          <ik-form-item class='collection-create-form_last-form-item'>
            <ik-radio-group
              v-decorator={[
                'modifier',
                {
                  initialValue: 'private'
                }
              ]}
            >
              <ik-radio value='public'>Public</ik-radio>
              <ik-radio value='private'>Private</ik-radio>
            </ik-radio-group>
          </ik-form-item>
        </ik-form>
      </ik-modal>
    )
  }
}

export default {
  mixins: [mixin],
  name: 'popUpNewForm',
  components: { CollectionCreateForm },
  data () {
    return {
      title: '弹出层中的新建表单',
      description: '当用户访问一个展示了某个列表的页面，想新建一项但又不想跳转页面时，可以用 Modal 弹出一个表单，用户填写必要信息后创建新的项。',
      text: popUpNewFormCode,
      visible: false
    }
  },
  methods: {
    showModal () {
      this.visible = true
    },
    handleCancel () {
      this.visible = false
    },
    handleCreate () {
      const form = this.$refs.collectionForm.form
      form.validateFields((err, values) => {
        if (err) {
          return
        }
        console.log('Received values of form: ', values)
        form.resetFields()
        this.visible = false
      })
    }
  }
}
</script>
