<template>
  <codeBox title="栅格列表"
           description="可以通过设置 List 的 grid 属性来实现栅格列表，column 可设置期望显示的列数。"
           :code="gridList">
    <ik-list :grid="{ gutter: 16, column: 4 }"
             :dataSource="data">
      <ik-list-item slot="renderItem"
                    slot-scope="item">
        <ik-card :title="item.title">Card content</ik-card>
      </ik-list-item>
    </ik-list>
  </codeBox>
</template>
<script>
import { gridList } from '../list.js'
const data = [
  {
    title: 'Title 1'
  },
  {
    title: 'Title 2'
  },
  {
    title: 'Title 3'
  },
  {
    title: 'Title 4'
  }
]
export default {
  name: 'basicsList',
  data () {
    return {
      gridList,
      data
    }
  }
}
</script>
