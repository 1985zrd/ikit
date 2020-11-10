<template>
  <codeBox title="竖排列表样式"
           description="通过设置 itemLayout 属性为 vertical 可实现竖排列表样式。"
           :code="verticlList">
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
  </codeBox>
</template>
<script>
import { verticlList } from '../list.js'
const listData = []
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://vue.ant.design/',
    title: `ant design vue part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
  })
}
export default {
  data () {
    return {
      verticlList,
      listData,
      pagination: {
        onChange: page => {
          console.log(page)
        },
        pageSize: 3
      },
      actions: [
        { type: 'star-o', text: '156' },
        { type: 'like-o', text: '156' },
        { type: 'message', text: '2' }
      ]
    }
  }
}
</script>
