const typicalCard = `
<template>
  <div>
    <ik-card title="Default size card" style="width: 300px">
      <a href="#" slot="extra">more</a>
      <p>card content</p>
      <p>card content</p>
      <p>card content</p>
    </ik-card>
    <br />
    <ik-card size="small" title="Small size card" style="width: 300px">
      <a href="#" slot="extra">more</a>
      <p>card content</p>
      <p>card content</p>
      <p>card content</p>
    </ik-card>
  </div>
</template>
`
const nobordercard = `
<template>
  <div style="background:#ECECEC; padding:30px">
    <ik-card title="Card title" :bordered="false" style="width: 300px">
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </ik-card>
  </div>
</template>
`
const mateCard = `
<template>
  <ik-card hoverable style="width: 240px">
    <img
      alt="example"
      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
      slot="cover"
    />
    <ik-card-meta title="Europe Street beat">
      <template slot="description"
        >www.instagram.com</template
      >
    </ik-card-meta>
  </ik-card>
</template>
`
const girdCard = `
<template>
  <ik-card title="Card Title">
    <ik-card-grid style="width:25%;textAlign:'center'">Content</ik-card-grid>
    <ik-card-grid style="width:25%;textAlign:'center'">Content</ik-card-grid>
    <ik-card-grid style="width:25%;textAlign:'center'">Content</ik-card-grid>
    <ik-card-grid style="width:25%;textAlign:'center'">Content</ik-card-grid>
    <ik-card-grid style="width:25%;textAlign:'center'">Content</ik-card-grid>
    <ik-card-grid style="width:25%;textAlign:'center'">Content</ik-card-grid>
    <ik-card-grid style="width:25%;textAlign:'center'">Content</ik-card-grid>
  </ik-card>
</template>
`
const latticeCard = `
<template>
  <div style="background-color: #ececec; padding: 20px;">
    <ik-row :gutter="16">
      <ik-col :span="8">
        <ik-card title="Card title" :bordered="false">
          <p>card content</p>
        </ik-card>
      </ik-col>
      <ik-col :span="8">
        <ik-card title="Card title" :bordered="false">
          <p>card content</p>
        </ik-card>
      </ik-col>
      <ik-col :span="8">
        <ik-card title="Card title" :bordered="false">
          <p>card content</p>
        </ik-card>
      </ik-col>
    </ik-row>
  </div>
</template>
`
const insideCard = `
<template>
  <ik-card title="Card title">
    <p style="fontSize: 14px;color: rgba(0, 0, 0, 0.85); marginBottom: 16px;fontWeight: 500">
      Group title
    </p>
    <ik-card title="Inner card title">
      <a href="#" slot="extra">More</a>
      Inner Card content
    </ik-card>
    <ik-card title="Inner card title" :style="{ marginTop: '16px' }">
      <a href="#" slot="extra">More</a>
      Inner Card content
    </ik-card>
  </ik-card>
</template>
`
const loadCard = `
<template>
  <div>
    <ik-card :loading="loading" title="Card title">
      whatever content
    </ik-card>
    <ik-button @click="handleClick" style="marginTop: 16px">Toggle loading</ik-button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        loading: true,
      };
    },
    methods: {
      handleClick() {
        this.loading = !this.loading;
      },
    },
  };
</script>
`
const moreCard = `
<template>
  <ik-card hoverable style="width: 300px">
    <img
      alt="example"
      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      slot="cover"
    />
    <template class="ant-card-actions" slot="actions">
      <ik-icon type="setting" />
      <ik-icon type="edit" />
      <ik-icon type="ellipsis" />
    </template>
    <ik-card-meta title="Card title" description="This is the description">
      <ik-avatar
        slot="avatar"
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      />
    </ik-card-meta>
  </ik-card>
</template>
`
const briefCard = `
<template>
  <ik-card style="width: 300px">
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </ik-card>
</template>
`
const pageCard = `
<template>
  <div>
    <ik-card
      style="width:100%"
      title="Card title"
      :tabList="tabList"
      :activeTabKey="key"
      @tabChange="key => onTabChange(key, 'key')"
    >
      <span slot="customRender" slot-scope="item"> <ik-icon type="home" />{{item.key}} </span>
      <a href="#" slot="extra">More</a>
      {{contentList[key]}}
    </ik-card>
    <br /><br />
    <ik-card
      style="width:100%"
      :tabList="tabListNoTitle"
      :activeTabKey="noTitleKey"
      @tabChange="key => onTabChange(key, 'noTitleKey')"
    >
      <p v-if="noTitleKey === 'article'">article content</p>
      <p v-else="noTitleKey === 'app'">app content</p>
      <p v-else="noTitleKey === 'project'">project content</p>
    </ik-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tabList: [
          {
            key: 'tab1',
            // tab: 'tab1',
            scopedSlots: { tab: 'customRender' },
          },
          {
            key: 'tab2',
            tab: 'tab2',
          },
        ],
        contentList: {
          tab1: 'content1',
          tab2: 'content2',
        },
        tabListNoTitle: [
          {
            key: 'article',
            tab: 'article',
          },
          {
            key: 'app',
            tab: 'app',
          },
          {
            key: 'project',
            tab: 'project',
          },
        ],
        key: 'tab1',
        noTitleKey: 'app',
      };
    },
    methods: {
      onTabChange(key, type) {
        this[type] = key;
      },
    },
  };
</script>
`
export {
  typicalCard,
  nobordercard,
  mateCard,
  girdCard,
  latticeCard,
  insideCard,
  loadCard,
  moreCard,
  briefCard,
  pageCard
}
