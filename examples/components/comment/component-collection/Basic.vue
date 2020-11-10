<template>
<codeBox :title="title"
           :description="description"
           :code="basic">
  <ik-comment>
    <template slot="actions">
      <span>
        <ik-tooltip title="Like">
          <ik-icon type="like" :theme="action === 'liked' ? 'filled' : 'outlined'" @click="like" />
        </ik-tooltip>
        <span style="padding-left: '8px';cursor: 'auto'">
          {{likes}}
        </span>
      </span>
      <span>
        <ik-tooltip title="Dislike">
          <ik-icon
            type="dislike"
            :theme="action === 'disliked' ? 'filled' : 'outlined'"
            @click="dislike"
          />
        </ik-tooltip>
        <span style="padding-left: '8px';cursor: 'auto'">
          {{dislikes}}
        </span>
      </span>
      <span>Reply to</span>
    </template>
    <a slot="author">Han Solo</a>
    <ik-avatar
      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      alt="Han Solo"
      slot="avatar"
    />
    <p slot="content">
      We supply a series of design principles, practical patterns and high quality design resources
      (Sketch and Axure), to help people create their product prototypes beautifully and
      efficiently.
    </p>
    <ik-tooltip slot="datetime" :title="moment().format('YYYY-MM-DD HH:mm:ss')">
      <span>{{moment().fromNow()}}</span>
    </ik-tooltip>
  </ik-comment>
</codeBox>
</template>
<script>
import moment from 'moment'
import { basic } from '../codeExample'
export default {
  data () {
    return {
      title: '基本评论',
      description: '一个基本的评论组件，带有作者、头像、时间和操作。',
      basic,
      likes: 0,
      dislikes: 0,
      action: null,
      moment
    }
  },
  methods: {
    like () {
      this.likes = 1
      this.dislikes = 0
      this.action = 'liked'
    },
    dislike () {
      this.likes = 0
      this.dislikes = 1
      this.action = 'disliked'
    }
  }
}
</script>
