<template>
  <div class="example-input">
    <basicInput></basicInput>
    <autosizeInput></autosizeInput>
    <iconInput></iconInput>
    <searchInput></searchInput>
    <sizeInput></sizeInput>
    <compactInput></compactInput>
    <textareaInput></textareaInput>
    <composeInput></composeInput>
    <formatInput></formatInput>
    <clearIconInput></clearIconInput>
    <passwordInput></passwordInput>
    <MarkdownRender mdFileName="input" />
  </div>
</template>

<script>
import basicInput from './component-collection/BasicInput'
import autosizeInput from './component-collection/AutosizeInput'
import iconInput from './component-collection/IconInput'
import searchInput from './component-collection/SearchInput'
import sizeInput from './component-collection/SizeInput'
import compactInput from './component-collection/CompactInput'
import textareaInput from './component-collection/TextareaInput'
import composeInput from './component-collection/ComposeInput'
import formatInput from './component-collection/FormatInput'
import clearIconInput from './component-collection/ClearIconInput'
import passwordInput from './component-collection/PasswordInput'

export default {
  components: { basicInput, autosizeInput, iconInput, searchInput, sizeInput, compactInput, textareaInput, composeInput, formatInput, clearIconInput, passwordInput }
}
</script>
