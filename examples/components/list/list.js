const desicsList = `
<template>
  <ik-list itemLayout="horizontal" :dataSource="data">
    <ik-list-item slot="renderItem" slot-scope="item, index">
      <ik-list-item-meta
        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
      >
        <a slot="title" href="https://vue.ant.design/">{{item.title}}</a>
        <ik-avatar
          slot="avatar"
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
      </ik-list-item-meta>
    </ik-list-item>
  </ik-list>
</template>
<script>
  const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];
  export default {
    data() {
      return {
        data,
      };
    },
  };
</script>
`
const gridList = `
<template>
  <ik-list :grid="{ gutter: 16, column: 4 }" :dataSource="data">
    <ik-list-item slot="renderItem" slot-scope="item, index">
      <ik-card :title="item.title">Card content</ik-card>
    </ik-list-item>
  </ik-list>
</template>
<script>
  const data = [
    {
      title: 'Title 1',
    },
    {
      title: 'Title 2',
    },
    {
      title: 'Title 3',
    },
    {
      title: 'Title 4',
    },
  ];
  export default {
    data() {
      return {
        data,
      };
    },
  };
</script>
`
const loadMoreList = `
<template>
  <ik-list class="demo-loadmore-list" :loading="loading" itemLayout="horizontal" :dataSource="data">
    <div
      v-if="showLoadingMore"
      slot="loadMore"
      :style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }"
    >
      <ik-spin v-if="loadingMore" />
      <ik-button v-else @click="onLoadMore">loading more</ik-button>
    </div>
    <ik-list-item slot="renderItem" slot-scope="item, index">
      <a slot="actions">edit</a>
      <a slot="actions">more</a>
      <ik-list-item-meta
        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
      >
        <a slot="title" href="https://vue.ant.design/">{{item.name.last}}</a>
        <ik-avatar
          slot="avatar"
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
      </ik-list-item-meta>
      <div>content</div>
    </ik-list-item>
  </ik-list>
</template>
<script>
  import reqwest from 'reqwest';

  const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

  export default {
    data() {
      return {
        loading: true,
        loadingMore: false,
        showLoadingMore: true,
        data: [],
      };
    },
    mounted() {
      this.getData(res => {
        this.loading = false;
        this.data = res.results;
      });
    },
    methods: {
      getData(callback) {
        reqwest({
          url: fakeDataUrl,
          type: 'json',
          method: 'get',
          contentType: 'application/json',
          success: res => {
            callback(res);
          },
        });
      },
      onLoadMore() {
        this.loadingMore = true;
        this.getData(res => {
          this.data = this.data.concat(res.results);
          this.loadingMore = false;
          this.$nextTick(() => {
            window.dispatchEvent(new Event('resize'));
          });
        });
      },
    },
  };
</script>
<style>
  .demo-loadmore-list {
    min-height: 350px;
  }
</style>
`
const bootstrapGripList = `
<template>
  <ik-list :grid="{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }" :dataSource="data">
    <ik-list-item slot="renderItem" slot-scope="item, index">
      <ik-card :title="item.title">Card content</ik-card>
    </ik-list-item>
  </ik-list>
</template>
<script>
  const data = [
    {
      title: 'Title 1',
    },
    {
      title: 'Title 2',
    },
    {
      title: 'Title 3',
    },
    {
      title: 'Title 4',
    },
    {
      title: 'Title 5',
    },
    {
      title: 'Title 6',
    },
  ];

  export default {
    data() {
      return {
        data,
      };
    },
  };
</script>
`
const sizeList = `
<template>
  <div>
    <h3 :style="{ marginBottom: '16px' }">Default Size</h3>
    <ik-list bordered :dataSource="data">
      <ik-list-item slot="renderItem" slot-scope="item, index">{{item}}</ik-list-item>
      <div slot="header">Header</div>
      <div slot="footer">Footer</div>
    </ik-list>
    <h3 :style="{ margin: '16px 0' }">Small Size</h3>
    <ik-list size="small" bordered :dataSource="data">
      <ik-list-item slot="renderItem" slot-scope="item, index">{{item}}</ik-list-item>
      <div slot="header">Header</div>
      <div slot="footer">Footer</div>
    </ik-list>
    <h3 :style="{ margin: '16px 0' }">Large Size</h3>
    <ik-list size="large" bordered :dataSource="data">
      <ik-list-item slot="renderItem" slot-scope="item, index">{{item}}</ik-list-item>
      <div slot="header">Header</div>
      <div slot="footer">Footer</div>
    </ik-list>
  </div>
</template>
<script>
  const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];

  export default {
    data() {
      return {
        data,
      };
    },
  };
</script>
`
const verticlList = `
<template>
  <ik-list itemLayout="vertical" size="large" :pagination="pagination" :dataSource="listData">
    <div slot="footer"><b>ant design vue</b> footer part</div>
    <ik-list-item slot="renderItem" slot-scope="item, index" key="item.title">
      <template slot="actions" v-for="{type, text} in actions">
        <span :key="type">
          <ik-icon :type="type" style="margin-right: 8px" />
          {{text}}
        </span>
      </template>
      <img
        slot="extra"
        width="272"
        alt="logo"
        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
      />
      <ik-list-item-meta :description="item.description">
        <a slot="title" :href="item.href">{{item.title}}</a>
        <ik-avatar slot="avatar" :src="item.avatar" />
      </ik-list-item-meta>
      {{item.content}}
    </ik-list-item>
  </ik-list>
</template>
<script>
  const listData = [];
  for (let i = 0; i < 23; i++) {
    listData.push({
      href: 'https://vue.ant.design/',
      title: \`ant design vue part \${i}\`,
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team.',
      content:
        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
  }

  export default {
    data() {
      return {
        listData,
        pagination: {
          onChange: page => {
            console.log(page);
          },
          pageSize: 3,
        },
        actions: [
          { type: 'star-o', text: '156' },
          { type: 'like-o', text: '156' },
          { type: 'message', text: '2' },
        ],
      };
    },
  };
</script>
`
const scrollautolist = `
<template>
  <div
    class="demo-infinite-container"
    v-infinite-scroll="handleInfiniteOnLoad"
    :infinite-scroll-disabled="busy"
    :infinite-scroll-distance="10"
  >
    <ik-list :dataSource="data">
      <ik-list-item slot="renderItem" slot-scope="item, index">
        <ik-list-item-meta :description="item.email">
          <a slot="title" :href="item.href">{{item.name.last}}</a>
          <ik-avatar
            slot="avatar"
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
        </ik-list-item-meta>
        <div>Content</div>
      </ik-list-item>
      <div v-if="loading && !busy" class="demo-loading-container">
        <ik-spin />
      </div>
    </ik-list>
  </div>
</template>
<script>
  import reqwest from 'reqwest';
  import infiniteScroll from 'vue-infinite-scroll';
  const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';
  export default {
    directives: { infiniteScroll },
    data() {
      return {
        data: [],
        loading: false,
        busy: false,
      };
    },
    beforeMount() {
      this.fetchData(res => {
        this.data = res.results;
      });
    },
    methods: {
      fetchData(callback) {
        reqwest({
          url: fakeDataUrl,
          type: 'json',
          method: 'get',
          contentType: 'application/json',
          success: res => {
            callback(res);
          },
        });
      },
      handleInfiniteOnLoad() {
        const data = this.data;
        this.loading = true;
        if (data.length > 14) {
          this.$message.warning('Infinite List loaded all');
          this.busy = true;
          this.loading = false;
          return;
        }
        this.fetchData(res => {
          this.data = data.concat(res.results);
          this.loading = false;
        });
      },
    },
  };
</script>
<style>
  .demo-infinite-container {
    border: 1px solid #e8e8e8;
    border-radius: 4px;
    overflow: auto;
    padding: 8px 24px;
    height: 300px;
  }
  .demo-loading-container {
    position: absolute;
    bottom: 40px;
    width: 100%;
    text-align: center;
  }
</style>
`
const infinitelist = `
<template>
  <ik-list>
    <virtual-scroller
      style="height: 400px"
      :items="data"
      item-height="73"
      v-infinite-scroll="handleInfiniteOnLoad"
      :infinite-scroll-disabled="busy"
      :infinite-scroll-distance="10"
    >
      <ik-list-item slot-scope="{item}">
        <ik-list-item-meta :description="item.email">
          <a slot="title" :href="item.href">{{item.name.last}}</a>
          <ik-avatar
            slot="avatar"
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
        </ik-list-item-meta>
        <div>Content {{item.index}}</div>
      </ik-list-item>
    </virtual-scroller>
    <ik-spin v-if="loading" class="demo-loading" />
  </ik-list>
</template>
<script>
  import reqwest from 'reqwest';
  import infiniteScroll from 'vue-infinite-scroll';
  import { VirtualScroller } from 'vue-virtual-scroller';
  const fakeDataUrl = 'https://randomuser.me/api/?results=10&inc=name,gender,email,nat&noinfo';
  export default {
    directives: { infiniteScroll },
    data() {
      return {
        data: [],
        loading: false,
        busy: false,
      };
    },
    beforeMount() {
      this.fetchData(res => {
        this.data = res.results.map((item, index) => ({ ...item, index }));
      });
    },
    methods: {
      fetchData(callback) {
        reqwest({
          url: fakeDataUrl,
          type: 'json',
          method: 'get',
          contentType: 'application/json',
          success: res => {
            callback(res);
          },
        });
      },
      handleInfiniteOnLoad() {
        const data = this.data;
        this.loading = true;
        if (data.length > 100) {
          this.$message.warning('Infinite List loaded all');
          this.busy = true;
          this.loading = false;
          return;
        }
        this.fetchData(res => {
          this.data = data.concat(res.results).map((item, index) => ({ ...item, index }));
          this.loading = false;
        });
      },
    },
    components: {
      'virtual-scroller': VirtualScroller,
    },
  };
</script>
<style>
  .demo-loading {
    position: absolute;
    bottom: 40px;
    width: 100%;
    text-align: center;
  }
</style>
`
export {
  desicsList,
  gridList,
  loadMoreList,
  bootstrapGripList,
  sizeList,
  verticlList,
  scrollautolist,
  infinitelist
}
