<template>
  <codeBox :title="title"
           :description="description"
           :code="multilayerDrawer">
    <ik-button type="primary" @click="showDrawer">
      Open
    </ik-button>
    <ik-drawer
      title="Multi-level drawer"
      width="520"
      :closable="false"
      @close="onClose"
      :visible="visible"
    >
      <ik-button type="primary" @click="showChildrenDrawer">
        Two-level drawer
      </ik-button>
      <ik-drawer
        title="Two-level Drawer"
        width="320"
        :closable="false"
        @close="onChildrenDrawerClose"
        :visible="childrenDrawer"
      >
        <ik-button type="primary" @click="showChildrenDrawer">
          This is two-level drawer
        </ik-button>
      </ik-drawer>
      <div
        :style="{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e8e8e8',
          padding: '10px 16px',
          textAlign: 'right',
          left: 0,
          background: '#fff',
          borderRadius: '0 0 4px 4px',
        }"
      >
        <ik-button style="marginRight: 8px" @click="onClose">
          Cancel
        </ik-button>
        <ik-button @click="onClose" type="primary">
          Submit
        </ik-button>
      </div>
    </ik-drawer>
  </codeBox>
</template>
<script>
import { multilayerDrawer } from '../codeExample'
export default {
  data () {
    return {
      title: '抽屉表单',
      description: '在抽屉中使用表单。',
      multilayerDrawer,
      visible: false,
      childrenDrawer: false
    }
  },
  methods: {
    showDrawer () {
      this.visible = true
    },
    onClose () {
      this.visible = false
    },
    showChildrenDrawer () {
      this.childrenDrawer = true
    },
    onChildrenDrawerClose () {
      this.childrenDrawer = false
    }
  }
}
</script>
