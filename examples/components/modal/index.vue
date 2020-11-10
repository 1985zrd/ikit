<template>
  <div class="modal">
    <asyncModal></asyncModal>
    <firstModal></firstModal>
    <confirmModal></confirmModal>
    <multipleModal></multipleModal>
    <customizedTitle></customizedTitle>
    <customizedModal></customizedModal>
    <titleCenterModal></titleCenterModal>
    <typeModal></typeModal>
    <internationalModal></internationalModal>
    <manualModal></manualModal>
    <customizedStyleModal></customizedStyleModal>
    <customizedButtonModal></customizedButtonModal>
    <destroyModal></destroyModal>
    <MarkdownRender mdFileName="modal" />
  </div>
</template>

<script>
import asyncModal from './component-collection/AsyncModal'
import firstModal from './component-collection/FirstModal'
import confirmModal from './component-collection/ConfirmModal'
import multipleModal from './component-collection/MultipleModal'
import customizedTitle from './component-collection/CustomTitle'
import customizedModal from './component-collection/CustomizedModal'
import titleCenterModal from './component-collection/ModalTitleCenter'
import typeModal from './component-collection/TypeModal'
import internationalModal from './component-collection/InternationalModal'
import manualModal from './component-collection/ManualModal'
import customizedStyleModal from './component-collection/CustomizedStyleModal'
import customizedButtonModal from './component-collection/CustomizedButtonModal'
import destroyModal from './component-collection/DestroyModal'

export default {
  components: {
    asyncModal,
    firstModal,
    confirmModal,
    multipleModal,
    customizedTitle,
    customizedModal,
    titleCenterModal,
    typeModal,
    internationalModal,
    manualModal,
    customizedStyleModal,
    customizedButtonModal,
    destroyModal
  }
}
</script>

<style lang="scss"></style>
