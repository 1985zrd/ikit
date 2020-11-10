<template>
  <codeBox title="用户头像"
           description="点击上传用户头像，并使用beforeUpload限制用户上传的图片格式和大小。
                        beforeUpload的返回值可以是一个Promise以支持异步处理，如服务端校验等"
           :code="userHeadCode">
    <div>
      <ik-upload
        name="avatar"
        listType="picture-card"
        class="avatar-uploader"
        :showUploadList="false"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        :beforeUpload="beforeUpload"
        @change="handleChange"
      >
        <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
        <div v-else>
          <ik-icon :type="loading ? 'loading' : 'plus'" />
        <div class="ant-upload-text">Upload</div>
      </div>
      </ik-upload>
      </div>
  </codeBox>
</template>
<script>
import { userHeadCode } from '../demoCode.js'

function getBase64 (img, callback) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}

export default {
  name: 'userHead',
  data () {
    return {
      userHeadCode,
      loading: false,
      imageUrl: ''
    }
  },
  methods: {
    handleChange (info) {
      if (info.file.status === 'uploading') {
        this.loading = true
        return
      }
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, imageUrl => {
          this.imageUrl = imageUrl
          this.loading = false
        })
      }
    },
    beforeUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      if (!isJPG) {
        this.$message.error('You can only upload JPG file!')
      }
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isLt2M) {
        this.$message.error('Image must smaller than 2MB!')
      }
      return isJPG && isLt2M
    }
  }
}
</script>
<style>
</style>
