const normalPromptCode = `
<template>
  <ik-button type="primary" @click="info">Display normal message</ik-button>
</template>
<script>
  export default {
    methods: {
      info() {
        this.$message.info('This is a normal message');
      },
    },
  };
</script>`

const durationPromptCode = `
<template>
  <ik-button @click="success">Customized display duration</ik-button>
</template>
<script>
  export default {
    methods: {
      success() {
        this.$message.success(
          'This is a prompt message for success, and it will disappear in 10 seconds',
          10,
        );
      },
    },
  };
</script>`

const indicatorPromptCode = `
<template>
  <ik-button @click="success">Display a loading indicator</ik-button>
</template>
<script>
  export default {
    methods: {
      success() {
        const hide = this.$message.loading('Action in progress..', 0);
        setTimeout(hide, 2500);
      },
    },
  };
</script>`

const otherPromptCode = `
<template>
  <div>
    <ik-button @click="success">Success</ik-button>
    <ik-button @click="error">Error</ik-button>
    <ik-button @click="warning">Warning</ik-button>
  </div>
</template>
<script>
  export default {
    methods: {
      success() {
        this.$message.success('This is a message of success');
      },
      error() {
        this.$message.error('This is a message of error');
      },
      warning() {
        this.$message.warning('This is message of warning');
      },
    },
  };
</script>`

const sequencePromptCode = `
<template>
  <ik-button @click="success">Display a sequence of message</ik-button>
</template>
<script>
  export default {
    methods: {
      success() {
        this.$message
          .loading('Action in progress..', 2.5)
          .then(() => this.$message.success('Loading finished', 2.5))
          .then(() => this.$message.info('Loading finished is finished', 2.5));
      },
    },
  };
</script>`

export {
  normalPromptCode,
  durationPromptCode,
  indicatorPromptCode,
  otherPromptCode,
  sequencePromptCode
}
