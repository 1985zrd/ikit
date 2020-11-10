<template>
  <codeBox title="照片墙"
           description="用户可以上传图片并在列表中显示缩略图。当上传照片数到达限制后，上传按钮消失。"
           :code="photoWallCode">
    <div>
      <ik-upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        :fileList="fileList"
        @preview="handlePreview"
        @change="handleChange"
      >
        <div v-if="fileList.length < 3">
            <ik-icon type="plus" />
            <div class="ant-upload-text">Upload</div>
        </div>
      </ik-upload>
      <ik-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
        <img alt="example" style="width: 100%" :src="previewImage" />
      </ik-modal>
      </div>
  </codeBox>
</template>
<script>
import { photoWallCode } from '../demoCode.js'
export default {
  name: 'photoWall',
  data () {
    return {
      photoWallCode,
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
  methods: {
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
<style>
  /* you can make up upload button and sample style by using stylesheets */
  .ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
  }

  .ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
  }
</style>
