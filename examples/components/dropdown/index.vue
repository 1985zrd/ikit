<template>
  <div class="dropdown">
    <BasicDropdown />
    <RightClickDropdown />
    <ButtonDropdown />
    <EventDropdown />
    <DividerDropdown />
    <LinkDropdown />
    <PlaceDropdown />
    <SubDropdown />
    <ClickDropdown />
    <MarkdownRender mdFileName="dropdown"></MarkdownRender>
  </div>
</template>

<script>
import BasicDropdown from './demo/BasicDropdown'
import RightClickDropdown from './demo/RightClickDropdown'
import ButtonDropdown from './demo/ButtonDropdown'
import EventDropdown from './demo/EventDropdown'
import ClickDropdown from './demo/ClickDropdown'
import DividerDropdown from './demo/DividerDropdown'
import LinkDropdown from './demo/LinkDropdown'
import PlaceDropdown from './demo/PlaceDropdown'
import SubDropdown from './demo/SubDropdown'

export default {
  name: 'dropdown-demo',
  components: {
    BasicDropdown,
    RightClickDropdown,
    ButtonDropdown,
    EventDropdown,
    ClickDropdown,
    DividerDropdown,
    LinkDropdown,
    PlaceDropdown,
    SubDropdown
  }
}
</script>
