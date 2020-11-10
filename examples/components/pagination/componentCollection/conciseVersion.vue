<template>
  <codeBox :title="title" :description="description" :code="conciseVersionCode">
    <ik-pagination simple :defaultCurrent="2" :total="50" />
  </codeBox>
</template>

<script>
import { conciseVersionCode } from '../codeExample'
export default {
  data () {
    return {
      conciseVersionCode,
      title: '简洁',
      description: '简单的版本。'
    }
  }
}
</script>
