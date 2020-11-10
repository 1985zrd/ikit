<template>
  <codeBox :title="title"
           :description="description"
           :code="hasIconAlert">
    <ik-alert message="Success Tips" type="success" showIcon />
    <br>
    <ik-alert message="Informational Notes" type="info" showIcon />
    <br>
    <ik-alert message="Warning" type="warning" showIcon />
    <br>
    <ik-alert message="Error" type="error" showIcon />
    <br>
    <ik-alert
      message="Success Tips"
      description="Detailed description and advices about successful copywriting."
      type="success"
      showIcon
    />
    <br>
    <ik-alert
      message="Informational Notes"
      description="Additional description and informations about copywriting."
      type="info"
      showIcon
    />
    <br>
    <ik-alert
      message="Warning"
      description="This is a warning notice about copywriting."
      type="warning"
      showIcon
    />
    <br>
    <ik-alert
      message="Error"
      description="This is an error message about copywriting."
      type="error"
      showIcon
    />
  </codeBox>
</template>
<script>
import { hasIconAlert } from '../codeExample'
export default {
  data () {
    return {
      title: '图标',
      description: '可口的图标让信息类型更加醒目。',
      hasIconAlert
    }
  }
}
</script>
