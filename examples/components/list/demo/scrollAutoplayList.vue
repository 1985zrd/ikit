<template>
  <codeBox title="滚动加载"
           :description="description"
           :code="scrollautolist">
    <div class="demo-infinite-container"
         v-infinite-scroll="handleInfiniteOnLoad"
         :infinite-scroll-disabled="busy"
         :infinite-scroll-distance="10">
      <ik-list :dataSource="data">
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
        <div v-if="loading && !busy"
             class="demo-loading-container">
          <ik-spin />
        </div>
      </ik-list>
    </div>
  </codeBox>
</template>
<script>
import { scrollautolist } from '../list.js'
import reqwest from 'reqwest'
import infiniteScroll from 'vue-infinite-scroll'
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo'
export default {
  directives: { infiniteScroll },
  data () {
    return {
      scrollautolist,
      description: `结合 <a href="https://github.com/ElemeFE/vue-infinite-scroll">vue-infinite-scroll</a> 实现滚动自动加载列表。`,
      data: [],
      loading: false,
      busy: false
    }
  },
  beforeMount () {
    this.fetchData(res => {
      this.data = res.results
    })
  },
  methods: {
    fetchData (callback) {
      reqwest({
        url: fakeDataUrl,
        type: 'jsonp',
        contentType: 'application/json',
        success: res => {
          callback(res)
        }
      })
    },
    handleInfiniteOnLoad () {
      const data = this.data
      this.loading = true
      if (data.length > 14) {
        // this.$message.warning('Infinite List loaded all')
        this.busy = true
        this.loading = false
        return
      }
      this.fetchData(res => {
        this.data = data.concat(res.results)
        this.loading = false
      })
    }
  }
}
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
