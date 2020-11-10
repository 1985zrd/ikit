<template>
  <codeBox title="手动上传"
           description="beforeUpload 返回 false 后，手动上传文件。"
           :code="manualUploadCode">
    <div>
      <ik-upload :fileList="fileList" :remove="handleRemove" :beforeUpload="beforeUpload">
        <ik-button> <ik-icon type="iconupload" isIk/> Select File </ik-button>
      </ik-upload>
      <ik-button
        type="primary"
        @click="handleUpload"
        :disabled="fileList.length === 0"
        :loading="uploading"
        style="margin-top: 16px"
      >
        {{uploading ? 'Uploading' : 'Start Upload' }}
      </ik-button>
      </div>
  </codeBox>
</template>
<script>
import { manualUploadCode } from '../demoCode.js'
export default {
  name: 'manualUpload',
  data () {
    return {
      manualUploadCode,
      fileList: [],
      uploading: false
    }
  },
  methods: {
    handleRemove (file) {
      const index = this.fileList.indexOf(file)
      const newFileList = this.fileList.slice()
      newFileList.splice(index, 1)
      this.fileList = newFileList
    },
    beforeUpload (file) {
      this.fileList = [...this.fileList, file]
      return false
    },
    handleUpload () {
      const { fileList } = this
      const formData = new FormData()
      fileList.forEach(file => {
        formData.append('files[]', file)
      })
      this.uploading = true

      // You can use any AJAX library you like
      reqwest({
        url: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        method: 'post',
        processData: false,
        data: formData,
        success: () => {
          this.fileList = []
          this.uploading = false
          this.$message.success('upload successfully.')
        },
        error: () => {
          this.uploading = false
          this.$message.error('upload failed.')
        }
      })
    }
  }
}
</script>
