<template>
  <codeBox :title="title"
           :description="description"
           :code="reply">
    <ik-list v-if="comments.length"
            :dataSource="comments"
            :header="`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`"
            itemLayout="horizontal">
      <ik-list-item slot="renderItem"
                   slot-scope="item">
        <ik-comment :author="item.author"
                   :avatar="item.avatar"
                   :content="item.content"
                   :datetime="item.datetime">
        </ik-comment>
      </ik-list-item>
    </ik-list>
    <ik-comment>
      <ik-avatar slot="avatar"
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo" />
      <div slot="content">
        <ik-form-item>
          <ik-textarea :rows="4"
                      @change="handleChange"
                      :value="value"></ik-textarea>
        </ik-form-item>
        <ik-form-item>
          <ik-button htmlType="submit"
                    :loading="submitting"
                    @click="handleSubmit"
                    type="primary">
            Add Comment
          </ik-button>
        </ik-form-item>
      </div>
    </ik-comment>
  </codeBox>
</template>
<script>
import moment from 'moment'
import { reply } from '../codeExample'
export default {
  data () {
    return {
      title: '回复框',
      description: '评论编辑器组件提供了相同样式的封装以支持自定义评论编辑器。',
      reply,
      comments: [],
      submitting: false,
      value: '',
      moment
    }
  },
  methods: {
    handleSubmit () {
      if (!this.value) {
        return
      }

      this.submitting = true

      setTimeout(() => {
        this.submitting = false
        this.comments = [
          {
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: this.value,
            datetime: moment().fromNow()
          },
          ...this.comments
        ]
        this.value = ''
      }, 1000)
    },
    handleChange (e) {
      this.value = e.target.value
    }
  }
}
</script>
