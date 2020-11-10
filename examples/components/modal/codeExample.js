const asyncModalCode = `
<template>
  <div>
    <ik-button type="primary" @click="showModal">Open Modal with async logic</ik-button>
    <ik-modal
      title="Title"
      :visible="visible"
      @ok="handleOk"
      :confirmLoading="confirmLoading"
      @cancel="handleCancel"
    >
      <p>{{ModalText}}</p>
    </ik-modal>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        ModalText: 'Content of the modal',
        visible: false,
        confirmLoading: false,
      };
    },
    methods: {
      showModal() {
        this.visible = true;
      },
      handleOk(e) {
        this.ModalText = 'The modal will be closed after two seconds';
        this.confirmLoading = true;
        setTimeout(() => {
          this.visible = false;
          this.confirmLoading = false;
        }, 2000);
      },
      handleCancel(e) {
        console.log('Clicked cancel button');
        this.visible = false;
      },
    },
  };
</script>`

const firstModalCode = `
<template>
  <div>
    <ik-button type="primary" @click="showModal">Open Modal</ik-button>
    <ik-modal title="Basic Modal" v-model="visible" @ok="handleOk">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </ik-modal>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        visible: false,
      };
    },
    methods: {
      showModal() {
        this.visible = true;
      },
      handleOk(e) {
        console.log(e);
        this.visible = false;
      },
    },
  };
</script>`

const confirmModalCode = `
<template>
  <ik-button @click="showConfirm">
    Confirm
  </ik-button>
</template>
<script>
  export default {
    methods: {
      showConfirm() {
        this.$confirm({
          title: 'Do you want to delete these items?',
          content: 'When clicked the OK button, this dialog will be closed after 1 second',
          onOk() {
            return new Promise((resolve, reject) => {
              setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
            }).catch(() => console.log('Oops errors!'));
          },
          onCancel() {},
        });
      },
    },
  };
</script>`

const multipleModalCode = `
<template>
  <div>
    <ik-button @click="showConfirm">
      Confirm
    </ik-button>
    <ik-button @click="showDeleteConfirm" type="dashed">
      Delete
    </ik-button>
    <ik-button @click="showPropsConfirm" type="dashed">
      With extra props
    </ik-button>
  </div>
</template>
<script>
  export default {
    methods: {
      showConfirm() {
        this.$confirm({
          title: 'Do you Want to delete these items?',
          content: h => <div style="color:red;">Some descriptions</div>,
          onOk() {
            console.log('OK');
          },
          onCancel() {
            console.log('Cancel');
          },
          class: 'test',
        });
      },

      showDeleteConfirm() {
        this.$confirm({
          title: 'Are you sure delete this task?',
          content: 'Some descriptions',
          okText: 'Yes',
          okType: 'danger',
          cancelText: 'No',
          onOk() {
            console.log('OK');
          },
          onCancel() {
            console.log('Cancel');
          },
        });
      },
      showPropsConfirm() {
        this.$confirm({
          title: 'Are you sure delete this task?',
          content: 'Some descriptions',
          okText: 'Yes',
          okType: 'danger',
          okButtonProps: {
            props: { disabled: true },
          },
          cancelText: 'No',
          onOk() {
            console.log('OK');
          },
          onCancel() {
            console.log('Cancel');
          },
        });
      },
    },
  };
</script>`

const customizedTitleModalCode = `
<template>
  <div>
    <ik-button type="primary" @click="showModal">自定义title</ik-button>
    <ik-modal :title="title" :subTitle='subTitle' v-model="visible" @ok="handleOk">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </ik-modal>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        visible: false,
      };
    },
    methods: {
      showModal() {
        this.visible = true;
      },
      handleOk(e) {
        console.log(e);
        this.visible = false;
      },
    },
  };
</script>`

const customizedModalCode = `
<template>
  <div>
    <ik-button type="primary" @click="showModal">
      Open Modal with customized footer
    </ik-button>
    <ik-modal v-model="visible" title="Title" onOk="handleOk">
      <template slot="footer">
        <ik-button key="back" @click="handleCancel">Return</ik-button>
        <ik-button key="submit" type="primary" :loading="loading" @click="handleOk">
          Submit
        </ik-button>
      </template>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </ik-modal>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        loading: false,
        visible: false,
      };
    },
    methods: {
      showModal() {
        this.visible = true;
      },
      handleOk(e) {
        this.loading = true;
        setTimeout(() => {
          this.visible = false;
          this.loading = false;
        }, 3000);
      },
      handleCancel(e) {
        this.visible = false;
      },
    },
  };
</script>`

const titleModalCenterCode = `
<template>
  <div>
    <ik-button type="primary" @click="showModal">title居中</ik-button>
    <ik-modal title="下一站提示" 
              :bodyStyle="{'padding': '59px 0 76px!important','fontSize':'18px','textAlign':'center'}" 
              v-model="aVisible"
              :footer="null"
              @ok="handleOk">
      <strong>下一站【316 男 内科 3】</strong>
    </ik-modal>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        visible: false,
      };
    },
    methods: {
      showModal() {
        this.visible = true;
      },
      handleOk(e) {
        console.log(e);
        this.visible = false;
      },
    },
  };
</script>`

const typeModalCode = `
<template>
  <div>
    <ik-button @click="info">Info</ik-button>
    <ik-button @click="success">Success</ik-button>
    <ik-button @click="error">Error</ik-button>
    <ik-button @click="warning">Warning</ik-button>
  </div>
</template>
<script>
  import { Modal } from 'ikit';
  export default {
    methods: {
      info() {
        const h = this.$createElement;
        this.$info({
          title: 'This is a notification message',
          content: h('div', {}, [
            h('p', 'some messages...some messages...'),
            h('p', 'some messages...some messages...'),
          ]),
          onOk() {},
        });
      },

      success() {
        this.$success({
          title: 'This is a success message',
          // JSX support
          content: (
            <div>
              <p>some messages...some messages...</p>
              <p>some messages...some messages...</p>
            </div>
          ),
        });
      },

      error() {
        this.$error({
          title: 'This is an error message',
          content: 'some messages...some messages...',
        });
      },

      warning() {
        this.$warning({
          title: 'This is a warning message',
          content: 'some messages...some messages...',
        });
      },
    },
  };
</script>`
const internationalModalCode = `
<template>
  <div>
    <ik-button type="primary" @click="showModal">Modal</ik-button>
    <ik-modal title="Modal" v-model="visible" @ok="hideModal" okText="确认" cancelText="取消">
      <p>Bla bla ...</p>
      <p>Bla bla ...</p>
      <p>Bla bla ...</p>
    </ik-modal>
    <br />
    <br />
    <ik-button @click="confirm">Confirm</ik-button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        visible: false,
      };
    },
    methods: {
      showModal() {
        this.visible = true;
      },
      hideModal() {
        this.visible = false;
      },
      confirm() {
        this.$confirm({
          title: 'Confirm',
          content: 'Bla bla ...',
          okText: '确认',
          cancelText: '取消',
        });
      },
    },
  };
</script>`

const manualModalCode = `
<template>
  <ik-button @click="countDown">Open modal to close in 5s</ik-button>
</template>
<script>
  export default {
    methods: {
      countDown() {
        let secondsToGo = 5;
        const modal = this.$success({
          title: 'This is a notification message',
          content:\`This modal will be destroyed after \${secondsToGo} second.\`,
        });
        const interval = setInterval(() => {
          secondsToGo -= 1;
          modal.update({
            content:\`This modal will be destroyed after \${secondsToGo} second.\`
          });
        }, 1000);
        setTimeout(() => {
          clearInterval(interval);
          modal.destroy();
        }, secondsToGo * 1000);
      },
    },
  };
</script>`

const customizedStyleModalCode = `
<template>
  <div id="components-modal-demo-position">
    <ik-button type="primary" @click="() => setModal1Visible(true)"
      >Display a modal dialog at 20px to Top</ik-button
    >
    <ik-modal
      title="20px to Top"
      style="top: 20px;"
      :visible="modal1Visible"
      @ok="() => setModal1Visible(false)"
      @cancel="() => setModal1Visible(false)"
    >
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
    </ik-modal>
    <br /><br />
    <ik-button type="primary" @click="() => modal2Visible = true"
      >Vertically centered modal dialog</ik-button
    >
    <ik-modal
      title="Vertically centered modal dialog"
      centered
      v-model="modal2Visible"
      @ok="() => modal2Visible = false"
    >
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
    </ik-modal>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        modal1Visible: false,
        modal2Visible: false,
      };
    },
    methods: {
      setModal1Visible(modal1Visible) {
        this.modal1Visible = modal1Visible;
      },
    },
  };
</script>`

const customizedButtonModalCode = `
<template>
  <div>
    <ik-button type="primary" @click="showModal">Open Modal with customized button props</ik-button>
    <ik-modal
      title="Basic Modal"
      v-model="visible"
      @ok="handleOk"
      :okButtonProps="{ props: {disabled: true} }"
      :cancelButtonProps="{ props: {disabled: true} }"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </ik-modal>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        visible: false,
      };
    },
    methods: {
      showModal() {
        this.visible = true;
      },
      handleOk(e) {
        console.log(e);
        this.visible = false;
      },
      handleCancel(e) {
        console.log(e);
        this.visible = false;
      },
    },
  };
</script>
`

const destroyModalCode = `
<template>
  <ik-button @click="showConfirm">
    Confirm
  </ik-button>
</template>
<script>
  import Button from '../../button';
  export default {
    methods: {
      showConfirm() {
        const self = this;
        for (let i = 0; i < 3; i += 1) {
          setTimeout(() => {
            this.$confirm({
              content: 'destroy all',
              onOk() {
                return new Promise((resolve, reject) => {
                  setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                }).catch(() => console.log('Oops errors!'));
              },
              cancelText: 'Click to destroy all',
              onCancel() {
                self.destroyAll();
              },
            });
          }, i * 500);
        }
      },
      destroyAll() {
        this.$destroyAll();
      },
    },
  };
</script>
`

export {
  asyncModalCode, firstModalCode, confirmModalCode, multipleModalCode, customizedTitleModalCode, customizedModalCode, titleModalCenterCode, typeModalCode,
  internationalModalCode, manualModalCode, customizedStyleModalCode, customizedButtonModalCode, destroyModalCode
}
