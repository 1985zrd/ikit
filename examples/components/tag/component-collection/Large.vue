<template>
  <codeBox :title="title" :description="description" :code="largeCode">
    <div>
      <h4 style="margin-bottom: 16px">normal:</h4>
      <div>
        <ik-tag color="blue">blue</ik-tag>
        <ik-tag color="green">green</ik-tag>
        <ik-tag color="orange">orange</ik-tag>
        <ik-tag color="red">red</ik-tag>
        <ik-tag>default</ik-tag>
      </div>
      <br>
      <h4 style="margin: '16px 0'">large:</h4>
      <div>
        <ik-tag color="blue" large>blue</ik-tag>
        <ik-tag color="green" large>green</ik-tag>
        <ik-tag color="orange" large>orange</ik-tag>
        <ik-tag color="red" large>red</ik-tag>
        <ik-tag large>default</ik-tag>
      </div>
    </div>
  </codeBox>
</template>
<script>
import { largeCode } from '../codeExample'
export default {
  data () {
    return {
      title: '标签大小',
      description: '提供大尺寸标签',
      largeCode
    }
  }
}
</script>
