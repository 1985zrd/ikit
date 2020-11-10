<template>
  <codeBox :title="title"
           :description="description"
           :code="drawerForm">
    <ik-button type="primary" @click="showDrawer"> <ik-icon type="plus" /> New account </ik-button>
    <ik-drawer
      title="Create a new account"
      :width="720"
      @close="onClose"
      :visible="visible"
      :wrapStyle="{height: 'calc(100% - 108px)',overflow: 'auto',paddingBottom: '108px'}"
    >
      <ik-form :form="form" layout="vertical" hideRequiredMark>
        <ik-row :gutter="16">
          <ik-col :span="12">
            <ik-form-item label="Name">
              <ik-input
                v-decorator="['name', {
                  rules: [{ required: true, message: 'Please enter user name' }]
                }]"
                placeholder="Please enter user name"
              />
            </ik-form-item>
          </ik-col>
          <ik-col :span="12">
            <ik-form-item label="Url">
              <ik-input
                v-decorator="['url', {
                  rules: [{ required: true, message: 'please enter url' }]
                }]"
                style="width: 100%"
                addonBefore="http://"
                addonAfter=".com"
                placeholder="please enter url"
              />
            </ik-form-item>
          </ik-col>
        </ik-row>
        <ik-row :gutter="16">
          <ik-col :span="12">
            <ik-form-item label="Owner">
              <ik-select
                v-decorator="['owner', {
                  rules: [{ required: true, message: 'Please select an owner' }]
                }]"
                placeholder="Please ik-s an owner"
              >
                <ik-select-option value="xiao">Xiaoxiao Fu</ik-select-option>
                <ik-select-option value="mao">Maomao Zhou</ik-select-option>
              </ik-select>
            </ik-form-item>
          </ik-col>
          <ik-col :span="12">
            <ik-form-item label="Type">
              <ik-select
                v-decorator="['type', {
                  rules: [{ required: true, message: 'Please choose the type' }]
                }]"
                placeholder="Please choose the type"
              >
                <ik-select-option value="private">Private</ik-select-option>
                <ik-select-option value="public">Public</ik-select-option>
              </ik-select>
            </ik-form-item>
          </ik-col>
        </ik-row>
        <ik-row :gutter="16">
          <ik-col :span="12">
            <ik-form-item label="Approver">
              <ik-select
                v-decorator="['approver', {
                  rules: [{ required: true, message: 'Please choose the approver' }]
                }]"
                placeholder="Please choose the approver"
              >
                <ik-select-option value="jack">Jack Ma</ik-select-option>
                <ik-select-option value="tom">Tom Liu</ik-select-option>
              </ik-select>
            </ik-form-item>
          </ik-col>
          <ik-col :span="12">
            <ik-form-item label="DateTime">
              <ik-date-picker
                v-decorator="['dateTime', {
                  rules: [{ required: true, message: 'Please choose the dateTime' }]
                }]"
                style="width: 100%"
                :getPopupContainer="trigger => trigger.parentNode"
              />
            </ik-form-item>
          </ik-col>
        </ik-row>
        <ik-row :gutter="16">
          <ik-col :span="24">
            <ik-form-item label="Description">
              <ik-textarea
                v-decorator="['description', {
                  rules: [{ required: true, message: 'Please enter url description' }]
                }]"
                :rows="4"
                placeholder="please enter url description"
              />
            </ik-form-item>
          </ik-col>
        </ik-row>
      </ik-form>
      <div
        :style="{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e9e9e9',
          padding: '10px 16px',
          background: '#fff',
          textAlign: 'right',
        }"
      >
        <ik-button :style="{marginRight: '8px'}" @click="onClose">
          Cancel
        </ik-button>
        <ik-button @click="onClose" type="primary">Submit</ik-button>
      </div>
    </ik-drawer>
  </codeBox>
</template>
<script>
import { drawerForm } from '../codeExample'
export default {
  data () {
    return {
      title: '抽屉表单',
      description: '在抽屉中使用表单。',
      drawerForm,
      form: this.$form.createForm(this),
      visible: false
    }
  },
  methods: {
    showDrawer () {
      this.visible = true
    },
    onClose () {
      this.visible = false
    }
  }
}
</script>
