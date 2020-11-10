const BasicCode = `
<template>
  <ik-timeline>
    <ik-timeline-item>Create a services site 2015-09-01</ik-timeline-item>
    <ik-timeline-item>Solve initial network problems 2015-09-01</ik-timeline-item>
    <ik-timeline-item>Technical testing 2015-09-01</ik-timeline-item>
    <ik-timeline-item>Network problems being solved 2015-09-01</ik-timeline-item>
  </ik-timeline>
</template>
`
const ColorCode = `
<template>
  <ik-timeline>
    <ik-timeline-item color="green">Create a services site 2015-09-01</ik-timeline-item>
    <ik-timeline-item color="green">Create a services site 2015-09-01</ik-timeline-item>
    <ik-timeline-item color="red">
      <p>Solve initial network problems 1</p>
      <p>Solve initial network problems 2</p>
      <p>Solve initial network problems 3 2015-09-01</p>
    </ik-timeline-item>
    <ik-timeline-item>
      <p>Technical testing 1</p>
      <p>Technical testing 2</p>
      <p>Technical testing 3 2015-09-01</p>
    </ik-timeline-item>
  </ik-timeline>
</template>
`
const PendingCode = `
<template>
  <div>
    <ik-timeline pending="Recording..." :reverse="reverse">
      <ik-timeline-item>Create a services site 2015-09-01</ik-timeline-item>
      <ik-timeline-item>Solve initial network problems 2015-09-01</ik-timeline-item>
      <ik-timeline-item>Technical testing 2015-09-01</ik-timeline-item>
    </ik-timeline>
    <ik-button type="primary" style="margin-top: 16px" @click="handleClick">Toggle Reverse</ik-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      reverse: false
    }
  },
  methods: {
    handleClick () {
      this.reverse = !this.reverse
    }
  }
}
</script>
`
const CustomCode = `
<template>
  <ik-timeline>
    <ik-timeline-item>Create a services site 2015-09-01</ik-timeline-item>
    <ik-timeline-item>Solve initial network problems 2015-09-01</ik-timeline-item>
    <ik-timeline-item color="red">
      <ik-icon slot="dot" type="clock-circle-o" style="font-size: 16px;" />
      Technical testing 2015-09-01
    </ik-timeline-item>
    <ik-timeline-item>Network problems being solved 2015-09-01</ik-timeline-item>
  </ik-timeline>
</template>
`
const AlternateCode = `
<template>
  <ik-timeline mode="alternate">
    <ik-timeline-item>Create a services site 2015-09-01</ik-timeline-item>
    <ik-timeline-item color="green">Solve initial network problems 2015-09-01</ik-timeline-item>
    <ik-timeline-item>
      <ik-icon slot="dot" type="clock-circle-o" style="font-size: 16px;" />
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
      laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
      beatae vitae dicta sunt explicabo.
    </ik-timeline-item>
    <ik-timeline-item color="red">Network problems being solved 2015-09-01</ik-timeline-item>
    <ik-timeline-item>Create a services site 2015-09-01</ik-timeline-item>
    <ik-timeline-item>
      <ik-icon slot="dot" type="clock-circle-o" style="font-size: 16px;" />
      Technical testing 2015-09-01
    </ik-timeline-item>
  </ik-timeline>
</template>
`
const RighCode = `
<template>
  <ik-timeline mode="right">
    <ik-timeline-item>Create a services site 2015-09-01</ik-timeline-item>
    <ik-timeline-item>Solve initial network problems 2015-09-01</ik-timeline-item>
    <ik-timeline-item>
      <ik-icon slot="dot" type="clock-circle-o" style="font-size: 16px;" />
      Technical testing 2015-09-01
    </ik-timeline-item>
    <ik-timeline-item>Network problems being solved 2015-09-01</ik-timeline-item>
  </ik-timeline>
</template>
`
export {
  BasicCode,
  ColorCode,
  PendingCode,
  CustomCode,
  AlternateCode,
  RighCode
}
