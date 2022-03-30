<template>
  <span
    class="tag"
    :style="`background-color: ${tag.bg}; color: ${tag.color}`"
    >{{ tag.name }}</span
  >
</template>

<script>
export default {
  name: "CategoryTag",
  props: {
    tag: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="sass">
.tag
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%)
    padding: 5px 8px
    border-radius: 2px
    font-weight: 600
    font-size: 0.8rem
    letter-spacing: 0.2px
</style>