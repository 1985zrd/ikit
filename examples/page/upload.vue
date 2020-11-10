
<template>
  <div class="upload">
    <ik-row>
      <ik-upload name="file"
                 :multiple="true"
                 action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                 :headers="headers"
                 @change="handleChange1">
        <ik-button type="primary">
          <ik-icon type="upload" /> Click to Upload </ik-button>
      </ik-upload>
    </ik-row>
    <hr>
    <ik-row>
      <ik-upload name="avatar"
                 listType="picture-card"
                 class="avatar-uploader"
                 :showUploadList="false"
                 action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                 :beforeUpload="beforeUpload"
                 @change="handleChange2">
        <img v-if="imageUrl"
             :src="imageUrl"
             alt="avatar" />
        <div v-else>
          <ik-icon :type="loading ? 'loading' : 'plus'" />
          <div class="ant-upload-text">Upload</div>
        </div>
      </ik-upload>
    </ik-row>
    <hr>
    <ik-row>
      <ik-upload name="avatar"
                disabled
                 listType="picture-card"
                 class="avatar-uploader"
                 :showUploadList="false"
                 action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                 :beforeUpload="beforeUpload"
                 @change="handleChange2">
        <img v-if="imageUrl"
             :src="imageUrl"
             alt="avatar" />
        <div v-else>
          <ik-icon :type="loading ? 'loading' : 'plus'" />
          <div class="ant-upload-text">Upload</div>
        </div>
      </ik-upload>
    </ik-row>
    <hr>
    <ik-row>
      <ik-upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                 :defaultFileList="defaultFileList">
        <ik-button>
          <ik-icon type="upload" /> Upload </ik-button>
      </ik-upload>
    </ik-row>
    <hr>
    <ik-row>
      <div class="clearfix">
        <ik-upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                   listType="picture-card"
                   :fileList="fileList"
                   @preview="handlePreview"
                   @change="handleChange">
          <div v-if="fileList.length < 3">
            <ik-icon type="plus" />
            <div class="ant-upload-text">Upload</div>
          </div>
        </ik-upload>
        <ik-modal :visible="previewVisible"
                  :footer="null"
                  @cancel="handleCancel">
          <img alt="example"
               style="width: 100%"
               :src="previewImage" />
        </ik-modal>
      </div>
    </ik-row>
    <hr>
    <ik-row>
      <ik-upload-dragger name="file"
                        :multiple="true"
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        @change="handleChange">
        <p class="ant-upload-drag-icon">
          <ik-icon type="inbox" />
        </p>
        <p class="ant-upload-text">Click or drag file to this area to upload</p>
        <p class="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading company data or other
          band files
        </p>
      </ik-upload-dragger>
    </ik-row>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'upload-demo',
  data () {
    return {
      headers: {
        authorization: 'authorization-text'
      },
      loading: false,
      imageUrl: '',
      defaultFileList: [
        {
          uid: '1',
          name: 'xxx.png',
          status: 'done',
          response: 'Server Error 500', // custom error message to show
          url: 'http://www.baidu.com/xxx.png'
        },
        {
          uid: '2',
          name: 'yyy.png',
          status: 'done',
          url: 'http://www.baidu.com/yyy.png'
        },
        {
          uid: '3',
          name: 'zzz.png',
          status: 'error',
          response: 'Server Error 500', // custom error message to show
          url: 'http://www.baidu.com/zzz.png'
        }
      ],
      previewVisible: false,
      previewImage: '',
      fileList: [
        {
          uid: '-1',
          name: 'xxx.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
        }
      ]
    }
  },
  components: {},
  methods: {
    handleChange1 (info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (info.file.status === 'done') {
        this.$message.success(`${info.file.name} file uploaded successfully`)
      } else if (info.file.status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`)
      }
    },
    handleChange2 (info) {
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
    },
    handleCancel () {
      this.previewVisible = false
    },
    handlePreview (file) {
      this.previewImage = file.url || file.thumbUrl
      this.previewVisible = true
    },
    handleChange ({ fileList }) {
      this.fileList = fileList
    }
  }
}
</script>

<style lang="less" scoped>
.upload {
}
</style>
