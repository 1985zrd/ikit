<template>
  <codeBox title="滚动加载无限长列表"
           :description="description"
           :code="infinitelist">
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
  </codeBox>
</template>
<script>
import { infinitelist } from '../list.js'
import reqwest from 'reqwest'
import infiniteScroll from 'vue-infinite-scroll'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
import { RecycleScroller, DynamicScroller } from 'vue-virtual-scroller'
const fakeDataUrl = 'https://randomuser.me/api/?results=10&inc=name,gender,email,nat&noinfo'
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
let arr = new Array(100)
arr.fill(1)
const items = arr.map((item, index) => ({
  id: index,
  label: 'Title' + index,
  size: 64
}))
const listData = []
export default {
  directives: { infiniteScroll },
  data () {
    return {
      infinitelist,
      description: `结合 <a href="https://github.com/ElemeFE/vue-infinite-scroll">vue-infinite-scroll</a> 实现滚动加载无限长列表，带有虚拟化（<a href="https://blog.jscrambler.com/optimizing-react-rendering-through-virtualization/">virtualization</a>）功能，能够提高数据量大时候长列表的性能。<br/>
      可以结合 <a href="https://github.com/ElemeFE/vue-infinite-scroll">vue-infinite-scroll</a> 实现滚动自动加载无限长列表。<br/>
      virtualized 是在大数据列表中应用的一种技术，主要是为了减少不可见区域不必要的渲染从而提高性能，特别是数据量在成千上万条效果尤为明显。`,
      loading: true,
      loadingMore: false,
      showLoadingMore: true,
      data,
      data1: [],
      data2: [],
      data4: items,
      loading2: false,
      busy2: false,
      busy4: false,
      loading4: false
    }
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
  components: {
    'recycle-scroller': RecycleScroller
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
<style>
.demo-loading {
  position: absolute;
  bottom: 40px;
  width: 100%;
  text-align: center;
}
</style>
