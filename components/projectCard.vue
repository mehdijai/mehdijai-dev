<template>
  <div
    itemscope
    itemtype="https://schema.org/CreativeWork"
    class="project-card"
    @mouseenter="hover = project.id"
    @mouseleave="hover = null"
    @click="$router.push({ path: '/' + project.slug })"
  >
    <div class="thumbnail">
      <img :src="project.thumbnail" :alt="project.title" />
    </div>
    <Transition name="slide-info">
      <div v-if="hover === project.id" class="info-bar">
        <div class="wrapper">
          <h3 itemprop="about">{{ project.title }}</h3>
          <div class="tags">
            <template v-for="tag in project.tags">
              <CategoryTag :key="'tag-' + tag.id" :tag="tag" />
            </template>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    project: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      hover: null,
    }
  },
}
</script>

<style lang="sass">
.project-card
  height: 296px
  width: 280px
  position: relative
  cursor: pointer
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%)
  .thumbnail
    display: block
    width: 100%
    height: 100%
    background: $black-light
    img
      width: 100%
      height: 100%
      object-fit: cover
      transition: 0.2s ease-in-out
      &:hover
        opacity: 0.4
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

@media (max-width: 1052px)
  .project-card
    width: 235px

.slide-info-enter-active
  animation: info-out 0.2s ease-in-out

.slide-info-leave-active
  animation: info-out 0.2s ease-in-out reverse

@keyframes info-out
  from
    clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%)
  to
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%)
</style>