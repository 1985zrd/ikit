<template>
  <codeBox :title="title"
           :description="description"
           :code="infoDrawer">
    <ik-list :dataSource="[
        {
          name: 'Lily',
        },
        {
          name: 'Lily',
        },
      ]"
             bordered>
      <ik-list-item slot="renderItem"
                    slot-scope="item">
        <a slot="actions"
           @click="showDrawer">View Profile</a>
        <ik-list-item-meta description="Progresser AFX">
          <a slot="title"
             href="https://www.antdv.com/">{{item.name}}</a>
          <ik-avatar slot="avatar"
                     src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
        </ik-list-item-meta>
      </ik-list-item>
    </ik-list>
    <ik-drawer width="640"
               placement="right"
               :closable="false"
               @close="onClose"
               :visible="visible">
      <p :style="[pStyle, pStyle2]">User Profile</p>
      <p :style="pStyle">Personal</p>
      <ik-row>
        <ik-col :span="12">
          <description-item title="Full Name"
                            content="Lily" />
        </ik-col>
        <ik-col :span="12">
          <description-item title="Account"
                            content="AntDesign@example.com" />
        </ik-col>
      </ik-row>
      <ik-row>
        <ik-col :span="12">
          <description-item title="City"
                            content="HangZhou" />
        </ik-col>
        <ik-col :span="12">
          <description-item title="Country"
                            content="China🇨🇳" />
        </ik-col>
      </ik-row>
      <ik-row>
        <ik-col :span="12">
          <description-item title="Birthday"
                            content="February 2,1900" />
        </ik-col>
        <ik-col :span="12">
          <description-item title="Website"
                            content="-" />
        </ik-col>
      </ik-row>
      <ik-row>
        <ik-col :span="12">
          <description-item title="Message"
                            content="Make things as simple as possible but no simpler." />
        </ik-col>
      </ik-row>
      <ik-divider />
      <p :style="pStyle">Company</p>
      <ik-row>
        <ik-col :span="12">
          <description-item title="Position"
                            content="Programmer" />
        </ik-col>
        <ik-col :span="12">
          <description-item title="Responsibilities"
                            content="Coding" />
        </ik-col>
      </ik-row>
      <ik-row>
        <ik-col :span="12">
          <description-item title="Department"
                            content="AFX" />
        </ik-col>
        <ik-col :span="12">
          <description-item title="Supervisor">
            <a slot="content">Lin</a>
          </description-item>
        </ik-col>
      </ik-row>
      <ik-row>
        <ik-col :span="24">
          <description-item title="Skills"
                            content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc." />
        </ik-col>
      </ik-row>
      <ik-divider />
      <p :style="pStyle">Contacts</p>
      <ik-row>
        <ik-col :span="12">
          <description-item title="Email"
                            content="ant-design-vue@example.com" />
        </ik-col>
        <ik-col :span="12">
          <description-item title="Phone Number"
                            content="+86 181 0000 0000" />
        </ik-col>
      </ik-row>
      <ik-row>
        <ik-col :span="24">
          <description-item title="Github">
            <a slot="content"
               href="https://github.com/vueComponent/ant-design-vue">
              github.com/vueComponent/ant-design-vue
            </a>
          </description-item>
        </ik-col>
      </ik-row>
    </ik-drawer>
  </codeBox>
</template>
<script>
import descriptionItem from './descriptionItem'
import { infoDrawer } from '../codeExample'
export default {
  data () {
    return {
      title: '信息预览抽屉',
      description: '需要快速预览对象概要时使用，点击遮罩区关闭。',
      infoDrawer,
      visible: false,
      pStyle: {
        fontSize: '16px',
        color: 'rgba(0,0,0,0.85)',
        lineHeight: '24px',
        display: 'block',
        marginBottom: '16px'
      },
      pStyle2: {
        marginBottom: '24px'
      }
    }
  },
  components: {
    descriptionItem
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
