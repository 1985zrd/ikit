<template>
  <codeBox :title="title" :description="description" :code="simpleCode">
    <ik-steps :current="1" labelPlacement="vertical">
      <ik-step>
        <span slot="description">Finished</span>
      </ik-step>
      <ik-step description="In Progress" />
      <ik-step description="Waiting" />
    </ik-steps>
    <br>
    <br>
    <br>
    <ik-steps :current="1">
      <ik-step>
        <!-- <span slot="title">Finished</span> -->
        <template slot="title">
          Finished
        </template>
        <span slot="description">This is a description.</span>
      </ik-step>
      <ik-step title="In Progress" description="This is a description." />
      <ik-step title="Waiting" description="This is a description." />
    </ik-steps>
  </codeBox>
</template>
<script>
import { simpleCode } from '../codeExample'
export default {
  data () {
    return {
      title: '基本用法',
      description: '简单的步骤条。',
      simpleCode
    }
  }
}
</script>
