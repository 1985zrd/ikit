<template>
  <div>
    <basicUpload></basicUpload>
    <userHead></userHead>
    <uploadedFilesList></uploadedFilesList>
    <photoWall></photoWall>
    <fullyControlledUploadList></fullyControlledUploadList>
    <dragAndDropUploads></dragAndDropUploads>
    <pictureListStyle></pictureListStyle>
    <manualUpload></manualUpload>
    <folderUpload></folderUpload>
    <MarkdownRender mdFileName="upload" />

  </div>
</template>
<script>
import basicUpload from './componentCollection/basicUpload'
import userHead from './componentCollection/userHead'
import uploadedFilesList from './componentCollection/uploadedFilesList'
import photoWall from './componentCollection/photoWall'
import fullyControlledUploadList from './componentCollection/fullyControlledUploadList'
import dragAndDropUploads from './componentCollection/dragAndDropUploads'
import pictureListStyle from './componentCollection/pictureListStyle'
import manualUpload from './componentCollection/manualUpload'
import folderUpload from './componentCollection/folderUpload'
export default {
  name: 'uploadDemo',
  components: {
    basicUpload,
    userHead,
    uploadedFilesList,
    photoWall,
    fullyControlledUploadList,
    dragAndDropUploads,
    pictureListStyle,
    manualUpload,
    folderUpload
  }
}
</script>
