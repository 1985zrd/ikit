<template>
  <codeBox :title="title" :description="description" :code="colorfulCode">
    <div>
      <h4 style="margin-bottom: 16px">Presets:</h4>
      <div>
        <ik-tag color="pink">pink</ik-tag>
        <ik-tag color="red">red</ik-tag>
        <ik-tag color="orange">orange</ik-tag>
        <ik-tag color="green">green</ik-tag>
        <ik-tag color="cyan">cyan</ik-tag>
        <ik-tag color="blue">blue</ik-tag>
        <ik-tag color="purple">purple</ik-tag>
      </div>
      <br>
      <h4 style="margin: '16px 0'">Custom:</h4>
      <div>
        <ik-tag color="#f50">#f50</ik-tag>
        <ik-tag color="#2db7f5">#2db7f5</ik-tag>
        <ik-tag color="#87d068">#87d068</ik-tag>
        <ik-tag color="#108ee9">#108ee9</ik-tag>
      </div>
    </div>
  </codeBox>
</template>
<script>
import { colorfulCode } from '../codeExample'
export default {
  data () {
    return {
      title: '多彩标签',
      description: '我们添加了多种预设色彩的标签样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值。',
      colorfulCode
    }
  }
}
</script>
