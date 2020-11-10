export const basic = `
<template>
  <ik-button type="primary" @click="openNotification">Open the notification box</ik-button>
</template>
<script>
  export default {
    methods: {
      openNotification() {
        this.$notification.open({
          message: 'Notification Title',
          description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
          onClick: () => {
            console.log('Notification Clicked!');
          },
        });
      },
    },
  };
</script>
`

export const customIcon = `
<template>
  <ik-button type="primary" @click="openNotification">Open the notification box</ik-button>
</template>
<script>
  export default {
    methods: {
      openNotification() {
        this.$notification.open({
          message: 'Notification Title',
          description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
          onClick: () => {
            console.log('Notification Clicked!');
          },
        });
      },
    },
  };
</script>
`

export const customStyles = `
<template>
  <ik-button type="primary" @click="openNotification">Open the notification box</ik-button>
</template>
<script>
  export default {
    methods: {
      openNotification() {
        this.$notification.open({
          message: 'Notification Title',
          description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
          style: {
            width: '600px',
            marginLeft: \`$\{335 - 600}px\`,
          },
        });
      },
    },
  };
</script>
`

export const durationClose = `
<template>
  <ik-button type="primary" @click="openNotification">Open the notification box</ik-button>
</template>
<script>
  export default {
    methods: {
      openNotification() {
        this.$notification.open({
          message: 'Notification Title',
          description:
            'I will never close automatically. I will be close automatically. I will never close automatically.',
          duration: 0,
        });
      },
    },
  };
</script>
`

export const showPosition = `
<template>
  <div>
    <ik-select v-model="selected" :style="{ width: '120px', marginRight: '10px' }">
      <ik-select-option v-for="val in options" :key="val" :value="val">{{val}}</ik-select-option>
    </ik-select>
    <ik-button type="primary" @click="openNotification">Open the notification box</ik-button>
  </div>
</template>
<script>
  const options = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
  export default {
    data() {
      return {
        options,
        selected: 'topRight',
      };
    },
    watch: {
      selected(val) {
        this.$notification.config({
          placement: val,
        });
      },
    },
    methods: {
      openNotification(val) {
        this.$notification.open({
          message: 'Notification Title',
          description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });
      },
    },
  };
</script>
`

export const customButton = `
<template>
  <ik-button type="primary" @click="openNotification">Open the notification box</ik-button>
</template>
<script>
  const close = () => {
    console.log(
      'Notification was closed. Either the close button was clicked or duration time elapsed.',
    );
  };
  export default {
    methods: {
      openNotification() {
        const key = \`open$\{Date.now()}\`;
        this.$notification.open({
          message: 'Notification Title',
          description:
            'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
          btn: h => {
            return h(
              'ik-button',
              {
                props: {
                  type: 'primary',
                  size: 'small',
                },
                on: {
                  click: () => this.$notification.close(key),
                },
              },
              'Confirm',
            );
          },
          key,
          onClose: close,
        });
      },
    },
  };
</script>
`

export const hasIcon = `
<template>
  <div>
    <ik-button @click="() => openNotificationWithIcon('success')">Success</ik-button>
    <ik-button @click="() => openNotificationWithIcon('info')">Info</ik-button>
    <ik-button @click="() => openNotificationWithIcon('warning')">Warning</ik-button>
    <ik-button @click="() => openNotificationWithIcon('error')">Error</ik-button>
  </div>
</template>
<script>
  export default {
    methods: {
      openNotificationWithIcon(type) {
        this.$notification[type]({
          message: 'Notification Title',
          description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });
      },
    },
  };
</script>
`

export const updateInfo = `
<template>
  <ik-button type="primary" @click="openNotification">Open the notification box</ik-button>
</template>
<script>
  const key = 'updatable';
  export default {
    methods: {
      openNotification() {
        this.$notification.open({
          key,
          message: 'Notification Title',
          description: 'description.',
        });
        setTimeout(() => {
          this.$notification.open({
            key,
            message: 'New Title',
            description: 'New description.',
          });
        }, 1000);
      },
    },
  };
</script>
`
