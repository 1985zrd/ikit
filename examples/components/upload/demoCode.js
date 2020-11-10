const basicUploadCode = `
<template>
  <ik-upload
    name="file"
    :multiple="true"
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    :headers="headers"
    @change="handleChange"
  >
    <ik-button> <ik-icon type="upload" /> Click to Upload </ik-button>
  </ik-upload>
</template>
<script>
  export default {
    data() {
      return {
        headers: {
          authorization: 'authorization-text',
        },
      };
    },
    methods: {
      handleChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          this.$message.success(\`\${info.file.name} file uploaded successfully\`);
        } else if (info.file.status === 'error') {
          this.$message.error(\`\${info.file.name} file upload failed.\`);
        }
      },
    },
  };
</script>

`
const userHeadCode = `
<template>
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
</template>
<script>
  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  export default {
    data() {
      return {
        loading: false,
        imageUrl: '',
      };
    },
    methods: {
      handleChange(info) {
        if (info.file.status === 'uploading') {
          this.loading = true;
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, imageUrl => {
            this.imageUrl = imageUrl;
            this.loading = false;
          });
        }
      },
      beforeUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        if (!isJPG) {
          this.$message.error('You can only upload JPG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          this.$message.error('Image must smaller than 2MB!');
        }
        return isJPG && isLt2M;
      },
    },
  };
</script>
<style>
  .avatar-uploader > .ant-upload {
    width: 128px;
    height: 128px;
  }
  .ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
  }

  .ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
  }
</style>

`
const uploadedFilesListCode = `
<template>
  <ik-upload
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    :defaultFileList="defaultFileList"
  >
    <ik-button> <ik-icon type="upload" /> Upload </ik-button>
  </ik-upload>
</template>
<script>
  export default {
    data() {
      return {
        defaultFileList: [
          {
            uid: '1',
            name: 'xxx.png',
            status: 'done',
            response: 'Server Error 500', // custom error message to show
            url: 'http://www.baidu.com/xxx.png',
          },
          {
            uid: '2',
            name: 'yyy.png',
            status: 'done',
            url: 'http://www.baidu.com/yyy.png',
          },
          {
            uid: '3',
            name: 'zzz.png',
            status: 'error',
            response: 'Server Error 500', // custom error message to show
            url: 'http://www.baidu.com/zzz.png',
          },
        ],
      };
    },
    methods: {
      handleChange({ file, fileList }) {
        if (file.status !== 'uploading') {
          console.log(file, fileList);
        }
      },
    },
  };
</script>

`
const photoWallCode = `
<template>
  <div class="clearfix">
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
</template>
<script>
  export default {
    data() {
      return {
        previewVisible: false,
        previewImage: '',
        fileList: [
          {
            uid: '-1',
            name: 'xxx.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          },
        ],
      };
    },
    methods: {
      handleCancel() {
        this.previewVisible = false;
      },
      handlePreview(file) {
        this.previewImage = file.url || file.thumbUrl;
        this.previewVisible = true;
      },
      handleChange({ fileList }) {
        this.fileList = fileList;
      },
    },
  };
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

`
const fullyControlledUploadListCode = `
<template>
  <ik-upload
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    :multiple="true"
    :fileList="fileList"
    @change="handleChange"
  >
    <ik-button> <ik-icon type="upload" /> Upload </ik-button>
  </ik-upload>
</template>
<script>
  export default {
    data() {
      return {
        fileList: [
          {
            uid: '-1',
            name: 'xxx.png',
            status: 'done',
            url: 'http://www.baidu.com/xxx.png',
          },
        ],
      };
    },
    methods: {
      handleChange(info) {
        let fileList = [...info.fileList];

        // 1. Limit the number of uploaded files
        //    Only to show two recent uploaded files, and old ones will be replaced by the new
        fileList = fileList.slice(-2);

        // 2. read from response and show file link
        fileList = fileList.map(file => {
          if (file.response) {
            // Component will show file.url as link
            file.url = file.response.url;
          }
          return file;
        });

        this.fileList = fileList;
      },
    },
  };
</script>

`

const dragAndDropUploadsCode = `
<template>
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
</template>
<script>
  export default {
    data() {
      return {};
    },
    methods: {
      handleChange(info) {
        const status = info.file.status;
        if (status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (status === 'done') {
          this.$message.success(\`\${info.file.name} file uploaded successfully.\`);
        } else if (status === 'error') {
          this.$message.error(\`\${info.file.name} file upload failed.\`);
        }
      },
    },
  };
</script>

`

const pictureListStyleCode = `
<template>
  <div>
    <ik-upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      listType="picture"
      :defaultFileList="fileList"
    >
      <ik-button> <ik-icon type="upload" /> upload </ik-button>
    </ik-upload>
    <br />
    <br />
    <ik-upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      listType="picture"
      :defaultFileList="fileList"
      class="upload-list-inline"
    >
      <ik-button> <ik-icon type="upload" /> upload </ik-button>
    </ik-upload>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        fileList: [
          {
            uid: '-1',
            name: 'xxx.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            thumbUrl:
              'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          },
          {
            uid: '-2',
            name: 'yyy.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            thumbUrl:
              'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          },
        ],
      };
    },
  };
</script>
<style scoped>
  /* tile uploaded pictures */
  .upload-list-inline >>> .ant-upload-list-item {
    float: left;
    width: 200px;
    margin-right: 8px;
  }
  .upload-list-inline >>> .ant-upload-animate-enter {
    animation-name: uploadAnimateInlineIn;
  }
  .upload-list-inline >>> .ant-upload-animate-leave {
    animation-name: uploadAnimateInlineOut;
  }
</style>

`

const manualUploadCode = `
<template>
  <div class="clearfix">
    <ik-upload :fileList="fileList" :remove="handleRemove" :beforeUpload="beforeUpload">
      <ik-button> <ik-icon type="upload" /> Select File </ik-button>
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
</template>
<script>
  import reqwest from 'reqwest';
  export default {
    data() {
      return {
        fileList: [],
        uploading: false,
      };
    },
    methods: {
      handleRemove(file) {
        const index = this.fileList.indexOf(file);
        const newFileList = this.fileList.slice();
        newFileList.splice(index, 1);
        this.fileList = newFileList;
      },
      beforeUpload(file) {
        this.fileList = [...this.fileList, file];
        return false;
      },
      handleUpload() {
        const { fileList } = this;
        const formData = new FormData();
        fileList.forEach(file => {
          formData.append('files[]', file);
        });
        this.uploading = true;

        // You can use any AJAX library you like
        reqwest({
          url: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
          method: 'post',
          processData: false,
          data: formData,
          success: () => {
            this.fileList = [];
            this.uploading = false;
            this.$message.success('upload successfully.');
          },
          error: () => {
            this.uploading = false;
            this.$message.error('upload failed.');
          },
        });
      },
    },
  };
</script>

`

const folderUploadCode = `
<template>
  <ik-upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" directory>
    <ik-button> <ik-icon type="upload" /> Upload Directory </ik-button>
  </ik-upload>
</template>

`
export {
  basicUploadCode,
  userHeadCode,
  uploadedFilesListCode,
  photoWallCode,
  fullyControlledUploadListCode,
  dragAndDropUploadsCode,
  pictureListStyleCode,
  manualUploadCode,
  folderUploadCode
}
