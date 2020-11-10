<template>
  <codeBox title="响应式的栅格列表"
           :description="description"
           :code="bootstrapGripList">
    <ik-list :grid="{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }"
             :dataSource="data">
      <ik-list-item slot="renderItem"
                    slot-scope="item">
        <ik-card :title="item.title">Card content</ik-card>
      </ik-list-item>
    </ik-list>
  </codeBox>
</template>
<script>
import { bootstrapGripList } from '../list'
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
  },
  {
    title: 'Title 5'
  },
  {
    title: 'Title 6'
  }
]

export default {
  data () {
    return {
      bootstrapGripList,
      data,
      description: `响应式的栅格列表。尺寸与 <a href="https://vue.ant.design/components/grid-cn/#Col">Layout Grid</a> 保持一致。`
    }
  }
}
</script>
<style></style>
