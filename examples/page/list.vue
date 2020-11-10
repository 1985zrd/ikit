<template>
  <div class="list">
    <ik-row>
      <ik-list itemLayout="horizontal"
               :dataSource="data">
        <ik-list-item slot="renderItem"
                      slot-scope="item">
          <ik-list-item-meta description="Ant Design, a design language for background applications, is refined by Ant UED Team">
            <a slot="title"
               href="https://vue.ant.design/">{{item.title}}</a>
            <ik-avatar slot="avatar"
                       src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </ik-list-item-meta>
        </ik-list-item>
      </ik-list>
    </ik-row>
    <ik-row>
      <ik-list :grid="{ gutter: 16, column: 4 }"
               :dataSource="data">
        <ik-list-item slot="renderItem"
                      slot-scope="item">
          <ik-card :title="item.title">Card content</ik-card>
        </ik-list-item>
      </ik-list>
    </ik-row>
    <ik-row>
      <ik-list class="demo-loadmore-list"
               :loading="loading"
               itemLayout="horizontal"
               :dataSource="data1">
        <div v-if="showLoadingMore"
             slot="loadMore"
             :style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }">
          <ik-spin v-if="loadingMore" />
          <ik-button v-else
                     @click="onLoadMore">loading more</ik-button>
        </div>
        <ik-list-item slot="renderItem"
                      slot-scope="item">
          <a slot="actions">edit</a>
          <a slot="actions">more</a>
          <ik-list-item-meta description="Ant Design, a design language for background applications, is refined by Ant UED Team">
            <a slot="title"
               href="https://vue.ant.design/">{{item.name.last}}</a>
            <ik-avatar slot="avatar"
                       src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </ik-list-item-meta>
          <div>content</div>
        </ik-list-item>
      </ik-list>
    </ik-row>
    <ik-row>
      <ik-list :grid="{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }"
               :dataSource="data">
        <ik-list-item slot="renderItem"
                      slot-scope="item">
          <ik-card :title="item.title">Card content</ik-card>
        </ik-list-item>
      </ik-list>
    </ik-row>
    <ik-row>
      <h3 :style="{ marginBottom: '16px' }">Default Size</h3>
      <ik-list bordered
               :dataSource="data">
        <ik-list-item slot="renderItem"
                      slot-scope="item">{{item.title}}</ik-list-item>
        <div slot="header">Header</div>
        <div slot="footer">Footer</div>
      </ik-list>
    </ik-row>
    <ik-row>
      <h3 :style="{ margin: '16px 0' }">Small Size</h3>
      <ik-list size="small"
               bordered
               :dataSource="data">
        <ik-list-item slot="renderItem"
                      slot-scope="item">{{item.title}}</ik-list-item>
        <div slot="header">Header</div>
        <div slot="footer">Footer</div>
      </ik-list>
    </ik-row>
    <ik-row>
      <h3 :style="{ margin: '16px 0' }">Large Size</h3>
      <ik-list size="large"
               bordered
               :dataSource="data">
        <ik-list-item slot="renderItem"
                      slot-scope="item">{{item.title}}</ik-list-item>
        <div slot="header">Header</div>
        <div slot="footer">Footer</div>
      </ik-list>
    </ik-row>

    <ik-row>
      <ik-list itemLayout="vertical"
               size="large"
               :pagination="pagination"
               :dataSource="listData">
        <div slot="footer"><b>ant design vue</b> footer part</div>
        <ik-list-item slot="renderItem"
                      slot-scope="item"
                      key="item.title">
          <template slot="actions"
                    v-for="{type, text} in actions">
            <span :key="type">
              <ik-icon :type="type"
                       style="margin-right: 8px" />
              {{text}}
            </span>
          </template>
          <img slot="extra"
               width="272"
               alt="logo"
               src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />
          <ik-list-item-meta :description="item.description">
            <a slot="title"
               :href="item.href">{{item.title}}</a>
            <ik-avatar slot="avatar"
                       :src="item.avatar" />
          </ik-list-item-meta>
          {{item.content}}
        </ik-list-item>
      </ik-list>
    </ik-row>
    <ik-row>
      <div class="demo-infinite-container"
           v-infinite-scroll="handleInfiniteOnLoad"
           :infinite-scroll-disabled="busy2"
           :infinite-scroll-distance="10">
        <ik-list :dataSource="data2">
          <ik-list-item slot="renderItem"
                        slot-scope="item">
            <ik-list-item-meta :description="item.email">
              <a slot="title"
                 :href="item.href">{{item.name.last}}</a>
              <ik-avatar slot="avatar"
                         src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </ik-list-item-meta>
            <div>Content</div>
          </ik-list-item>
          <div v-if="loading2 && !busy2"
               class="demo-loading-container">
            <ik-spin />
          </div>
        </ik-list>
      </div>
    </ik-row>
    <ik-row>
      <ik-list>
        <recycle-scroller style="height:300px"
                          class="scroller"
                          :items="data4"
                          :item-size="48"
                          v-infinite-scroll="handleInfiniteOnLoad4"
                          :infinite-scroll-disabled="busy4"
                          :infinite-scroll-distance="10">
          <template v-slot="{ item }">
            <ik-list-item>
              <ik-list-item-meta :description="item.email">
                <a slot="title"
                   :href="item.href">{{item.id}}</a>
                <ik-avatar slot="avatar"
                           src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </ik-list-item-meta>
              <div>Content {{item.label}}</div>
            </ik-list-item>
          </template>
          <template #after>
            <ik-spin v-if="loading4"
                     class="demo-loading" />
          </template>
        </recycle-scroller>
      </ik-list>

    </ik-row>
    <!-- <ik-row>
      <div class="demo-infinite-container"
           v-infinite-scroll="handleInfiniteOnLoad"
           :infinite-scroll-disabled="busy2"
           :infinite-scroll-distance="10">
        <ik-list :dataSource="data2">
          <ik-list-item slot="renderItem"
                        slot-scope="item">
            <ik-list-item-meta :description="item.email">
              <a slot="title"
                 :href="item.href">{{item.name.last}}</a>
              <ik-avatar slot="avatar"
                         src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </ik-list-item-meta>
            <div>Content</div>
          </ik-list-item>
          <div v-if="loading2 && !busy2"
               class="demo-loading-container">
            <ik-spin />
          </div>
        </ik-list>
      </div>
    </ik-row>
    <ik-row>
      <ik-list>
        <recycle-scroller style="height:300px"
                          class="scroller"
                          :items="data4"
                          :item-size="48"
                          v-infinite-scroll="handleInfiniteOnLoad4"
                          :infinite-scroll-disabled="busy4"
                          :infinite-scroll-distance="10">
          <template v-slot="{ item }">
            <ik-list-item>
              <ik-list-item-meta :description="item.email">
                <a slot="title"
                   :href="item.href">{{item.id}}</a>
                <ik-avatar slot="avatar"
                           src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </ik-list-item-meta>
              <div>Content {{item.label}}</div>
            </ik-list-item>
          </template>
          <template #after>
            <ik-spin v-if="loading4"
                     class="demo-loading" />
          </template>
        </recycle-scroller>
      </ik-list>

    </ik-row> -->
  </div>
</template>

<script type="text/ecmascript-6">
import reqwest from 'reqwest'
import infiniteScroll from 'vue-infinite-scroll'
import { RecycleScroller, DynamicScroller } from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo'
const data = [
  {
    title: 'Ant Design Title 1'
  },
  {
    title: 'Ant Design Title 2'
  },
  {
    title: 'Ant Design Title 3'
  },
  {
    title: 'Ant Design Title 4'
  }
]
let arr = new Array(100000)
arr.fill(1)
const items = arr.map((item, index) => ({
  id: index,
  label: 'Title' + index,
  size: 64
}))
const listData = []
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://vue.ant.design/',
    title: `ant design vue part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
  })
}
export default {
  name: 'list-demo',
  directives: { infiniteScroll },
  data () {
    return {
      loading: true,
      loadingMore: false,
      showLoadingMore: true,
      data,
      data1: [],
      data2: [],
      data4: items,
      loading2: false,
      busy2: false,
      listData,
      pagination: {
        onChange: page => {
          console.log(page)
        },
        pageSize: 3
      },
      actions: [{ type: 'star-o', text: '156' }, { type: 'like-o', text: '156' }, { type: 'message', text: '2' }],
      busy4: false,
      loading4: false
    }
  },
  components: {
    'recycle-scroller': RecycleScroller
    // 'dynamic-scroller': DynamicScroller
  },
  mounted () {
    this.getData(res => {
      this.loading = false
      this.data1 = res.results
    })
  },
  beforeMount () {
    this.fetchData(res => {
      this.data2 = res.results
    })
  },
  methods: {
    getData (callback) {
      reqwest({
        url: fakeDataUrl,
        type: 'json',
        method: 'get',
        contentType: 'application/json',
        success: res => {
          callback(res)
        }
      })
    },
    onLoadMore () {
      this.loadingMore = true
      this.getData(res => {
        this.data1 = this.data1.concat(res.results)
        this.loadingMore = false
        this.$nextTick(() => {
          window.dispatchEvent(new Event('resize'))
        })
      })
    },
    fetchData (callback) {
      reqwest({
        url: fakeDataUrl,
        type: 'json',
        method: 'get',
        contentType: 'application/json',
        success: res => {
          callback(res)
        }
      })
    },
    handleInfiniteOnLoad () {
      const data2 = this.data2
      this.loading2 = true
      if (data.length > 14) {
        this.$message.warning('Infinite List loaded all')
        this.busy2 = true
        this.loading2 = false
        return
      }
      this.fetchData(res => {
        this.data2 = data2.concat(res.results)
        this.loading2 = false
      })
    },
    handleInfiniteOnLoad4 () {
      if (this.loading4) {
        return
      }
      let data4 = this.data4
      this.loading4 = true
      let p = new Promise(resolve => {
        setTimeout(() => {
          let arr1 = new Array(10)
          arr1.fill(1)
          let newData = arr1.map((item, index) => ({
            id: index,
            label: 'Title' + index,
            size: 64
          }))
          data4 = [...data4, ...newData]
          resolve(data4)
        }, 1000)
      })
      p.then(res => {
        this.data4 = res
        this.loading4 = false
      })
    }
  }
}
</script>

<style lang="less" scoped>
.list {
  .ant-row {
    padding: 50px 0;
    border-bottom: 1px blue dashed;
  }
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
  .user {
    height: 65px;
    padding: 0 12px;
    display: flex;
    align-items: center;
  }
  .demo-loading {
    display: flex;
    justify-content: center;
  }
}
</style>
