<template>
  <codeBox title="前置/后置标签  " description="用于配置一些固定组合。" :code="composeInputCode">
    <div style="margin-bottom: 16px">
      <ik-input addonBefore="Http://" addonAfter=".com" defaultValue="mysite" />
    </div>
    <div style="margin-bottom: 16px">
      <ik-input defaultValue="mysite">
        <ik-select slot="addonBefore" defaultValue="Http://" style="width: 90px">
          <ik-select-option value="Http://">Http://</ik-select-option>
          <ik-select-option value="Https://">Https://</ik-select-option>
        </ik-select>
        <ik-select slot="addonAfter" defaultValue=".com" style="width: 80px">
          <ik-select-option value=".com">.com</ik-select-option>
          <ik-select-option value=".jp">.jp</ik-select-option>
          <ik-select-option value=".cn">.cn</ik-select-option>
          <ik-select-option value=".org">.org</ik-select-option>
        </ik-select>
      </ik-input>
    </div>
    <div style="margin-bottom: 16px">
      <ik-input defaultValue="mysite">
        <ik-icon slot="addonAfter" type="setting" />
      </ik-input>
    </div>
  </codeBox>
</template>

<script>
import { composeInputCode } from './../codeExample'
export default {
  data () {
    return {
      composeInputCode
    }
  }
}
</script>
