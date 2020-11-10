<template>
  <div>
    <h2>
      input 输入框
    </h2>
    <div>
      <p>
        <ik-input placeholder="请输入内容" />
      </p>
      <p>
        <ik-input :defaultValue="username" />
      </p>
      <p>
        <ik-input v-model="disabledText"
                  disabled />
      </p>
    </div>
    <h2>
      inputNumber 数字输入框
    </h2>
    <div>
      <p>
        <ik-input-number v-model="defaultNumber"
                         :min="1"
                         :max="10" />
      </p>
    </div>
    <h2>
      tabs 标签页
    </h2>
    <div>
      <p>
        <ik-tabs defaultActiveKey="1">
          <ik-tab-pane tab="建议"
                       key="1">建议建议建议建议建议建议建议</ik-tab-pane>
          <ik-tab-pane tab="结论"
                       key="2">结论结论结论结论结论结论结论</ik-tab-pane>
          <ik-tab-pane tab="检察建议"
                       key="3">检察建议检察建议检察建议检察建议</ik-tab-pane>
          <ik-tab-pane tab="复查建议"
                       key="4">复查建议复查建议复查建议复查建议</ik-tab-pane>
          <ik-tab-pane tab="预防建议"
                       key="5">预防建议预防建议预防建议预防建议</ik-tab-pane>
        </ik-tabs>
      </p>
      <p>
        <ik-tabs defaultActiveKey="1"
                 type="card">
          <ik-tab-pane tab="放射科"
                       key="1">放射科放射科放射科</ik-tab-pane>
          <ik-tab-pane tab="放射科科室"
                       key="2">放射科科室放射科科室放射科科室</ik-tab-pane>
          <ik-tab-pane tab="放射"
                       key="3">放射放射放射</ik-tab-pane>
        </ik-tabs>
      </p>
    </div>
    <h2>
      message 全局提示
    </h2>
    <div>
      <ik-button @click="info">info</ik-button>
      <ik-button @click="success">Success</ik-button>
      <ik-button @click="error">Error</ik-button>
      <ik-button @click="warning">Warning</ik-button>
    </div>
    <h2>
      modal 对话框
    </h2>
    <div>
      <ik-button @click="infoModal">登陆状态异常</ik-button>
      <ik-button @click="confirmModal">系统提示</ik-button>
      <ik-button @click="confirmModal2">重置密码</ik-button>
      <br><br>
      <ik-button @click="successModal">Success</ik-button>
      <ik-button @click="errorModal">Error</ik-button>
      <ik-button @click="warningModal">Warning</ik-button>
      <br><br>
      <ik-button type="primary"
                 @click="showModal">下一站提示</ik-button>
      <ik-modal title="下一站提示"
                :bodyStyle="{'padding': '59px 0 76px!important','textAlign':'center'}"
                v-model="aVisible"
                :footer="null"
                @ok="handleOk">
        <strong>下一站【316 男 内科 3】</strong>
      </ik-modal>
      <br><br>
      <ik-button type="primary"
                 @click="showModalb">重置密码</ik-button>
      <ik-modal v-model="bVisible" title="重置密码">
        <ik-form>
          <ik-form-item label="登陆账号" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
            <ik-input></ik-input>
          </ik-form-item>
          <ik-form-item label="所属人" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
            <ik-input></ik-input>
          </ik-form-item>
        </ik-form>
      </ik-modal>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      username: '互联互通集团',
      disabledText: '此文本字段是不可编辑的',
      defaultNumber: 1,
      aVisible: false,
      bVisible: false
    }
  },
  methods: {
    confirmModal () {
      const h = this.$createElement
      this.$confirm({
        title: '系统提示',
        content: '您确认是否要退出账号，回到登录页面吗？',
        okText: '确定',
        cancelText: '取消'
      })
    },
    confirmModal2 () {
      const h = this.$createElement
      this.$confirm({
        title: '重置密码',
        content: '您选择了重置密码操作，点击确认后系统会将新密码发送到已绑定的邮箱 jian.gu@ikang.com 中，请及时查收邮件并修改密码。请问是否继续执行重置操作？',
        okText: '确定',
        cancelText: '取消'
      })
    },
    infoModal () {
      const h = this.$createElement
      this.$info({
        title: '登陆账号状态异常',
        content: '您输入的账号已被平台管理员置为失效，无法进行登录，请联系平台管理员进行解决。',
        okText: '我知道了',
        onOk () { }
      })
    },
    successModal () {
      this.$success({
        title: 'This is a success message',
        // JSX support
        content: (
          <div>
            <p>some messages...some messages...</p>
            <p>some messages...some messages...</p>
          </div>
        )
      })
    },
    errorModal () {
      this.$error({
        title: 'This is an error message',
        content: 'some messages...some messages...'
      })
    },
    warningModal () {
      this.$warning({
        title: 'This is a warning message',
        content: 'some messages...some messages...'
      })
    },
    info () {
      this.$message.info('This is a message of info')
    },
    success () {
      this.$message.success('This is a message of success')
    },
    error () {
      this.$message.error('This is a message of error')
    },
    warning () {
      this.$message.warning('This is message of warning')
    },
    showModal () {
      this.aVisible = true
    },
    showModalb () {
      this.bVisible = true
    },
    handleOk (e) {
      console.log(e)
      this.aVisible = false
    }
  }
}
</script>
<style lang="scss" scoped>
h2 {
  padding-top: 20px;
}
h2 + div {
  padding-bottom: 20px;
  border-bottom: 1px dashed #ccc;
}
</style>
