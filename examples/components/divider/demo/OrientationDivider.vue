<template>
  <codeBox title="标题位置"
           description="修改分割线标题的位置。"
           :code="code">
    <div>
      <ik-divider orientation="left">Left Text</ik-divider>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
        probare, quae sunt a te dicta? Refert tamen, quo modo.
      </p>
      <ik-divider orientation="right">Right Text</ik-divider>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
        probare, quae sunt a te dicta? Refert tamen, quo modo.
      </p>
    </div>
  </codeBox>
</template>
<script>
import { orientationDivider } from '../divider'
export default {
  data () {
    return {
      code: orientationDivider
    }
  }
}
</script>
