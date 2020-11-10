<template>
  <codeBox title="完全控制的上传列表"
           description="使用 fileList 对列表进行完全控制，可以实现各种自定义功能，以下演示三种情况：
                        1. 上传列表数量的限制。
                        2. 读取远程路径并显示链接。
                        3. 按照服务器返回信息筛选成功上传的文件。"
           :code="dragAndDropUploadsCode">
    <div>
      <ik-upload-dragger
        name="file"
        :multiple="true"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        @change="handleChange"
      >
        <p class="ant-upload-drag-icon">
        <ik-icon type="inbox" />
        </p>
        <p class="ant-upload-text">Click or drag file to this area to upload</p>
        <p class="ant-upload-hint">
        Support for a single or bulk upload. Strictly prohibit from uploading company data or other
        band files
        </p>
      </ik-upload-dragger>
      </div>
  </codeBox>
</template>
<script>
import { dragAndDropUploadsCode } from '../demoCode.js'
export default {
  name: 'dragAndDropUploads',
  data () {
    return {
      dragAndDropUploadsCode
    }
  },
  methods: {
    handleChange (info) {
      const status = info.file.status
      if (status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (status === 'done') {
        this.$message.success(`${info.file.name} file uploaded successfully.`)
      } else if (status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`)
      }
    }
  }
}
</script>
