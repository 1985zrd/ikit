export const basic = `
<template>
  <div>
    <ik-button type="primary" @click="showDrawer">
      Open
    </ik-button>
    <ik-drawer
      title="Basic Drawer"
      placement="right"
      :closable="false"
      @close="onClose"
      :visible="visible"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </ik-drawer>
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
      showDrawer() {
        this.visible = true;
      },
      onClose() {
        this.visible = false;
      },
    },
  };
</script>
`

export const customPosition = `
<template>
  <div>
    <ik-radio-group style="margin-right: 8px" :defaultValue="placement" @change="onChange">
      <ik-radio value="top">top</ik-radio>
      <ik-radio value="right">right</ik-radio>
      <ik-radio value="bottom">bottom</ik-radio>
      <ik-radio value="left">left</ik-radio>
    </ik-radio-group>
    <ik-button type="primary" @click="showDrawer">
      Open
    </ik-button>
    <ik-drawer
      title="Basic Drawer"
      :placement="placement"
      :closable="false"
      @close="onClose"
      :visible="visible"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </ik-drawer>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        visible: false,
        placement: 'left',
      };
    },
    methods: {
      showDrawer() {
        this.visible = true;
      },
      onClose() {
        this.visible = false;
      },
      onChange(e) {
        this.placement = e.target.value;
      },
    },
  };
</script>
`

export const drawerForm = `
<template>
  <div>
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
  </div>
</template>
<script>
  export default {
    data() {
      return {
        form: this.$form.createForm(this),
        visible: false,
      };
    },
    methods: {
      showDrawer() {
        this.visible = true;
      },
      onClose() {
        this.visible = false;
      },
    },
  };
</script>
`
export const infoDrawer = `
<template>
  <div>
    <ik-list
      :dataSource="[
        {
          name: 'Lily',
        },
        {
          name: 'Lily',
        },
      ]"
      bordered
    >
      <ik-list-item slot="renderItem" slot-scope="item, index">
        <a slot="actions" @click="showDrawer">View Profile</a>
        <ik-list-item-meta description="Progresser AFX">
          <a slot="title" href="https://www.antdv.com/">{{item.name}}</a>
          <ik-avatar
            slot="avatar"
            src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
          />
        </ik-list-item-meta>
      </ik-list-item>
    </ik-list>
    <ik-drawer width="640" placement="right" :closable="false" @close="onClose" :visible="visible">
      <p :style="[pStyle, pStyle2]">User Profile</p>
      <p :style="pStyle">Personal</p>
      <ik-row>
        <ik-col :span="12">
          <description-item title="Full Name" content="Lily" />
        </ik-col>
        <ik-col :span="12">
          <description-item title="Account" content="AntDesign@example.com" />
        </ik-col>
      </ik-row>
      <ik-row>
        <ik-col :span="12">
          <description-item title="City" content="HangZhou" />
        </ik-col>
        <ik-col :span="12">
          <description-item title="Country" content="China🇨🇳" />
        </ik-col>
      </ik-row>
      <ik-row>
        <ik-col :span="12">
          <description-item title="Birthday" content="February 2,1900" />
        </ik-col>
        <ik-col :span="12">
          <description-item title="Website" content="-" />
        </ik-col>
      </ik-row>
      <ik-row>
        <ik-col :span="12">
          <description-item
            title="Message"
            content="Make things as simple as possible but no simpler."
          />
        </ik-col>
      </ik-row>
      <ik-divider />
      <p :style="pStyle">Company</p>
      <ik-row>
        <ik-col :span="12">
          <description-item title="Position" content="Programmer" />
        </ik-col>
        <ik-col :span="12">
          <description-item title="Responsibilities" content="Coding" />
        </ik-col>
      </ik-row>
      <ik-row>
        <ik-col :span="12">
          <description-item title="Department" content="AFX" />
        </ik-col>
        <ik-col :span="12">
          <description-item title="Supervisor">
            <a slot="content">Lin</a>
          </description-item>
        </ik-col>
      </ik-row>
      <ik-row>
        <ik-col :span="24">
          <description-item
            title="Skills"
            content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
          />
        </ik-col>
      </ik-row>
      <ik-divider />
      <p :style="pStyle">Contacts</p>
      <ik-row>
        <ik-col :span="12">
          <description-item title="Email" content="ant-design-vue@example.com" />
        </ik-col>
        <ik-col :span="12">
          <description-item title="Phone Number" content="+86 181 0000 0000" />
        </ik-col>
      </ik-row>
      <ik-row>
        <ik-col :span="24">
          <description-item title="Github">
            <a slot="content" href="https://github.com/vueComponent/ant-design-vue">
              github.com/vueComponent/ant-design-vue
            </a>
          </description-item>
        </ik-col>
      </ik-row>
    </ik-drawer>
  </div>
</template>
<script>
  import descriptionItem from './descriptionItem';

  export default {
    data() {
      return {
        visible: false,
        pStyle: {
          fontSize: '16px',
          color: 'rgba(0,0,0,0.85)',
          lineHeight: '24px',
          display: 'block',
          marginBottom: '16px',
        },
        pStyle2: {
          marginBottom: '24px',
        },
      };
    },
    components: {
      descriptionItem,
    },
    methods: {
      showDrawer() {
        this.visible = true;
      },
      onClose() {
        this.visible = false;
      },
    },
  };
</script>
`

export const multilayerDrawer = `
<template>
  <div>
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
  </div>
</template>
<script>
  export default {
    data() {
      return {
        visible: false,
        childrenDrawer: false,
      };
    },
    methods: {
      showDrawer() {
        this.visible = true;
      },
      onClose() {
        this.visible = false;
      },
      showChildrenDrawer() {
        this.childrenDrawer = true;
      },
      onChildrenDrawerClose() {
        this.childrenDrawer = false;
      },
    },
  };
</script>
`
