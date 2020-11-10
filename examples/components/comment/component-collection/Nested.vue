<template>
  <codeBox :title="title"
           :description="description"
           :code="nested">
    <ik-comment>
      <span slot="actions">Reply to</span>
      <a slot="author">Han Solo</a>
      <ik-avatar slot="avatar"
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo" />
      <p slot="content">
        We supply a series of design principles, practical patterns and high quality design resources
        (Sketch and Axure).
      </p>
      <ik-comment>
        <span slot="actions">Reply to</span>
        <a slot="author">Han Solo</a>
        <ik-avatar slot="avatar"
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  alt="Han Solo" />
        <p slot="content">
          We supply a series of design principles, practical patterns and high quality design
          resources (Sketch and Axure).
        </p>
        <ik-comment>
          <span slot="actions">Reply to</span>
          <a slot="author">Han Solo</a>
          <ik-avatar slot="avatar"
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="Han Solo" />
          <p slot="content">
            We supply a series of design principles, practical patterns and high quality design
            resources (Sketch and Axure).
          </p>
        </ik-comment>
        <ik-comment>
          <span slot="actions">Reply to</span>
          <a slot="author">Han Solo</a>
          <ik-avatar slot="avatar"
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="Han Solo" />
          <p slot="content">
            We supply a series of design principles, practical patterns and high quality design
            resources (Sketch and Axure).
          </p>
        </ik-comment>
      </ik-comment>
    </ik-comment>
  </codeBox>
</template>
<script>
import { nested } from '../codeExample'
export default {
  data () {
    return {
      title: '嵌套评论',
      description: '评论可以嵌套。',
      nested
    }
  }
}
</script>
