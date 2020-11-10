<template>
  <codeBox title="已上传的文件列表"
           description="使用defaultFileList设置已上传的内容。"
           :code="uploadedFilesListCode">
    <div>
      <ik-upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        :defaultFileList="defaultFileList"
      >
        <ik-button> <ik-icon type="iconupload" isIk/> Upload </ik-button>
      </ik-upload>
      </div>
  </codeBox>
</template>
<script>
import { uploadedFilesListCode } from '../demoCode.js'

function getBase64 (img, callback) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}

export default {
  name: 'uploadedFilesList',
  data () {
    return {
      uploadedFilesListCode,
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
      ]
    }
  },
  methods: {
    handleChange ({ file, fileList }) {
      if (file.status !== 'uploading') {
        console.log(file, fileList)
      }
    }
  }
}
</script>
