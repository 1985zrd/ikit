
<template>
  <div class='pagination'>
    <h2>基础</h2>
    <ik-pagination
      v-model='current'
      :total='50'
    />
    <br />
    <ik-pagination
      v-model='current'
      :total='1'
      :hideOnSinglePage='true'
    />
    <br />

    <h2>默认选择页数</h2>
    <ik-pagination
      :total='500'
      :defaultCurrent='6'
    />
    <br />

    <h2>显示分页器</h2>
    <ik-pagination
      showSizeChanger
      @showSizeChange='onShowSizeChange'
      :defaultCurrent='3'
      :total='500'
    />
    <br />

    <h2>显示更改分页条数</h2>
    <ik-pagination
      showSizeChanger
      :pageSize.sync='pageSize'
      @showSizeChange='onShowSizeChange'
      :total='500'
      v-model='current'
    />
    <br />

    <h2>自定义分页器选项</h2>
    <ik-pagination
      :pageSizeOptions='pageSizeOptions'
      :total='50'
      showSizeChanger
      :pageSize='pageSize'
      v-model='current'
      @showSizeChange='onShowSizeChange'
    >
      <template slot='buildOptionText' slot-scope='props'>
        <span v-if="props.value!='50'">{{props.value}}条/页</span>
        <span v-if="props.value=='50'">全部</span>
      </template>
    </ik-pagination>
    <br />

    <h2>快速跳转到某一页。</h2>
    <ik-pagination showQuickJumper :defaultCurrent='2' :total='500' @change='onChange' />
    <br />

    <h2>迷你版</h2>
    <ik-pagination size='small' :total='501' />
     <br />
    <ik-pagination size='small' :total='501' showSizeChanger showQuickJumper />
     <br />
    <ik-pagination size='small' :total='501' :showTotal='total => `Total ${total} items`' />
    <br />

    <h2>简单的翻页</h2>
    <ik-pagination simple :defaultCurrent='2' :total='50' />
    <br />

    <h2>受控制的页码</h2>
    <ik-pagination @change='onChange' :current='current' :total='50' />
    <br />

    <h2>通过设置 showTotal 展示总共有多少数据。</h2>
    <ik-pagination
      :total='85'
      :showTotal='total => `Total ${total} items`'
      :pageSize='20'
      :defaultCurrent='1'
    />
    <br />
    <ik-pagination
      :total='85'
      :showTotal='(total, range) => `${range[0]}-${range[1]} of ${total} items`'
      :pageSize='20'
      :defaultCurrent='1'
    />
    <br />

    <h2>修改上一步和下一步为文字链接。</h2>
    <ik-pagination :total='500' :itemRender='itemRender' />
    <br />
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  name: 'pagination',
  data () {
    return {
      current: 1,
      pageSize: 10,
      pageSizeOptions: ['10', '20', '30', '40', '50'],
      total: 501
    }
  },
  components: {},
  watch: {
    pageSize (val) {
      console.log('pageSize', val)
    },
    current (val) {
      console.log('current', val)
    }
  },
  methods: {
    onShowSizeChange (current, pageSize) {
      console.log(current, pageSize)
      this.pageSize = pageSize
    },
    onChange (pageNumber) {
      console.log('Page: ', pageNumber)
      this.current = pageNumber
    },
    itemRender (current, type, originalElement) {
      if (type === 'prev') {
        return <a>Previous</a>
      } else if (type === 'next') {
        return <a>下一页</a>
      }
      return originalElement
    }
  }
}
</script>

<style lang='less' scoped>
.pagination {
}
</style>
