<template>
  <codeBox title="栅格列表"
           description="可以通过设置 List 的 grid 属性来实现栅格列表，column 可设置期望显示的列数。"
           :code="loadMoreList">
    <ik-list class="demo-loadmore-list"
             :loading="loading"
             itemLayout="horizontal"
             :dataSource="data">
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
  </codeBox>
</template>
<script>
import { loadMoreList } from '../list.js'
import reqwest from 'reqwest'
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo'
export default {
  name: 'basicsList',
  data () {
    return {
      loadMoreList,
      dataloading: true,
      loadingMore: false,
      showLoadingMore: true,
      data: [],
      loading: false
    }
  },
  mounted () {
    this.getData(res => {
      this.loading = false
      this.data = res.results
    })
  },
  methods: {
    getData (callback) {
      reqwest({
        url: fakeDataUrl,
        type: 'jsonp',
        contentType: 'application/json',
        success: res => {
          callback(res)
        }
      })
    },
    onLoadMore () {
      this.loadingMore = true
      this.getData(res => {
        this.data = this.data.concat(res.results)
        this.loadingMore = false
        this.$nextTick(() => {
          window.dispatchEvent(new Event('resize'))
        })
      })
    }
  }
}
</script>
<style>
.demo-loadmore-list {
  min-height: 350px;
}
</style>
