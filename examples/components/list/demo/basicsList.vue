<template>
  <codeBox title="基础列表"
           description="基础列表。"
           :code="desicsList">
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
  </codeBox>
</template>
<script>
import { desicsList } from '../list.js'
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
export default {
  name: 'basicsList',
  data () {
    return {
      desicsList,
      data
    }
  }
}
</script>
