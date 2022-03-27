<template>
  <div class="project-card">
    <div class="thumbnail"></div>
    <div class="info-bar">
      <div class="wrapper">
        <h3>{{ title }}</h3>
        <div class="tags">
          <template v-for="(tag, index) in tags">
            <CategoryTag :key="index" :tag="tag" />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    title: {
      type: String,
      default: null,
    },
    tags: {
      type: Array,
      default: null,
    },
  },
}
</script>

<style lang="sass">
.project-card
    height: 296px
    width: 300px
    position: relative
    .thumbnail
        display: block
        width: 100%
        height: 100%
        background: #cacaca
    .info-bar
        background: #fff
        position: absolute
        bottom: 0
        left: 0
        width: 100%
        .wrapper
            padding: 10px
            h3
                font-size: 1.2rem
                font-weight: 800
                color: $black
                margin-bottom: 10px
            .tags
                display: flex
                flex-wrap: wrap
                gap: 5px
</style>