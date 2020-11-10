<template>
  <codeBox :title="title"
           :description="description"
           :code="list">
    <ik-list class="comment-list"
            :header="`${data.length} replies`"
            itemLayout="horizontal"
            :dataSource="data">
      <ik-list-item slot="renderItem"
                   slot-scope="item">
        <ik-comment :author="item.author"
                   :avatar="item.avatar">
          <template slot="actions">
            <span v-for="action in item.actions" :key="action">{{action}}</span>
          </template>
          <p slot="content">{{item.content}}</p>
          <ik-tooltip slot="datetime"
                     :title="item.datetime.format('YYYY-MM-DD HH:mm:ss')">
            <span>{{item.datetime.fromNow()}}</span>
          </ik-tooltip>
        </ik-comment>
      </ik-list-item>
    </ik-list>
  </codeBox>
</template>
<script>
import moment from 'moment'
import { list } from '../codeExample'
export default {
  data () {
    return {
      title: '配合 List 组件',
      description: '配合 List 组件展现评论列表。',
      list,
      data: [
        {
          actions: ['Reply to'],
          author: 'Han Solo',
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
          datetime: moment().subtract(1, 'days')
        },
        {
          actions: ['Reply to'],
          author: 'Han Solo',
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
          datetime: moment().subtract(2, 'days')
        }
      ],
      moment
    }
  }
}
</script>
