<template>
  <codeBox title="文件夹上传"
           description="支持上传一个文件夹里的所有文件。"
           :code="folderUploadCode">
    <div>
      <ik-upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" directory>
        <ik-button> <ik-icon type="iconupload" isIk/> Upload Directory </ik-button>
      </ik-upload>
      </div>
  </codeBox>
</template>
<script>
import { folderUploadCode } from '../demoCode.js'
export default {
  name: 'folderUpload',
  data () {
    return {
      folderUploadCode
    }
  }
}
</script>
