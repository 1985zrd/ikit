<template>
  <div>
    <h2>基本使用</h2>
    <ik-input placeholder="Basic usage" style="width:200px" />
    <br><br>
    <ik-input placeholder="Basic usage" style="width:200px" disabled />

    <h2>适应文本高度的文本域</h2>
    <ik-input-textarea style="width:200px"
      placeholder="Autosize height based on content lines"
      autosize
    />
    <div style="margin: 24px 0" />
    <ik-input-textarea style="width:200px"
      placeholder="Autosize height with minimum and maximum number of lines"
      :autosize="{ minRows: 2, maxRows: 6 }"
    />

    <h2>前缀和后缀</h2>
    <ik-input style="width:200px" placeholder="Basic usage" ref="userNameInput">
      <ik-icon slot="prefix" type="user" />
      <ik-tooltip slot="suffix" title="Extra information">
        <ik-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
      </ik-tooltip>
    </ik-input>

    <h2>搜索框</h2>
    <ik-input-search
      placeholder="input search text"
      style="width: 200px"
      @search="onSearch"
    />
    <br /><br />
    <ik-input-search style="width:200px"
      placeholder="input search text"
      @search="onSearch"
      enterButton="Search"
      size="large"
    />
    <br /><br />
    <ik-input-search style="width:200px"
      placeholder="input search text"
      @search="onSearch"
      size="large"
    >
      <ik-button slot="enterButton">Custom</ik-button>
    </ik-input-search>

    <h2>三种大小</h2>
    <ik-input size="large" placeholder="large size" style="width:200px" /><br /><br />
    <ik-input placeholder="default size" style="width:200px"/><br /><br />
    <ik-input size="small" placeholder="small size" style="width:200px" />

    <h2>输入框组合</h2>
    <ik-input-group>
      <ik-input placeholder="aaa" style="width:200px" /> &nbsp;&nbsp; <ik-input placeholder="bbb" style="width:200px"  />
    </ik-input-group>

    <h2>文本域</h2>
    <ik-input-textarea style="width:500px" placeholder="Basic usage" :rows="4" />

    <h2>前置/后置标签</h2>
    <ik-input style="width:500px" addonBefore="Http://" addonAfter=".com" defaultValue="mysite" />

    <h2>带移除图标</h2>
    <ik-input placeholder="input with clear icon" allowClear />

    <h2>密码框</h2>
    <ik-input-password placeholder="input password" />
    <br><br>
  </div>
</template>
<script>
export default {
  name: 'Input',
  methods: {
    onSearch (value) {
      console.log(value)
    }
  }
}
</script>
