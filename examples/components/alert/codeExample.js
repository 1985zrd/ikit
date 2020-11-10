export const topAnnouncement = `
<template>
  <div>
    <ik-alert message="Warning text" banner />
    <br />
    <ik-alert
      message="Very long warning text warning text text text text text text text"
      banner
      closable
    />
    <br />
    <ik-alert :showIcon="false" message="Warning text without icon" banner />
    <br />
    <ik-alert type="error" message="Error text" banner />
  </div>
</template>
`

export const basicAlert = `
<template>
  <ik-alert message="Success Text" type="success" />
</template>
`

export const alertCanClosed = `
<template>
  <div>
    <ik-alert
      message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
      type="warning"
      closable
      @close="onClose"
    />
    <ik-alert
      message="Error Text"
      description="Error Description Error Description Error Description Error Description Error Description Error Description"
      type="error"
      closable
      @close="onClose"
    />
  </div>
</template>
<script>
  export default {
    methods: {
      onClose(e) {
        console.log(e, 'I was closed.');
      },
    },
  };
</script>
`

export const customClose = `
<template>
  <ik-alert message="Info Text" type="info" closeText="Close Now" />
</template>
`

export const hasAuxiliaryIntroductionAlert = `
<template>
  <div>
    <ik-alert message="Success Text" type="success">
      <p slot="description">
        Success Description <span style="color: red">Success</span> Description Success Description
      </p>
    </ik-alert>
    <ik-alert
      message="Info Text"
      description="Info Description Info Description Info Description Info Description"
      type="info"
    />
    <ik-alert
      message="Warning Text"
      description="Warning Description Warning Description Warning Description Warning Description"
      type="warning"
    />
    <ik-alert
      message="Error Text"
      description="Error Description Error Description Error Description Error Description"
      type="error"
    />
  </div>
</template>
`
export const hasIconAlert = `
<template>
  <div>
    <ik-alert message="Success Tips" type="success" showIcon />
    <ik-alert message="Informational Notes" type="info" showIcon />
    <ik-alert message="Warning" type="warning" showIcon />
    <ik-alert message="Error" type="error" showIcon />
    <ik-alert
      message="Success Tips"
      description="Detailed description and advices about successful copywriting."
      type="success"
      showIcon
    />
    <ik-alert
      message="Informational Notes"
      description="Additional description and informations about copywriting."
      type="info"
      showIcon
    />
    <ik-alert
      message="Warning"
      description="This is a warning notice about copywriting."
      type="warning"
      showIcon
    />
    <ik-alert
      message="Error"
      description="This is an error message about copywriting."
      type="error"
      showIcon
    />
  </div>
</template>
`

export const stylesAlert = `
<template>
  <div>
    <ik-alert message="Success Text" type="success" />
    <ik-alert message="Info Text" type="info" />
    <ik-alert message="Warning Text" type="warning" />
    <ik-alert message="Error Text" type="error" />
  </div>
</template>
`

export const destoryedAlert = `
<template>
  <div>
    <ik-alert
      v-if="visible"
      message="Alert Message Text"
      type="success"
      closable
      :afterClose="handleClose"
    />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        visible: true,
      };
    },
    methods: {
      handleClose() {
        this.visible = false;
      },
    },
  };
</script>
`
