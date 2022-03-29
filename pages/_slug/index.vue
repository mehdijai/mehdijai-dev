<template>
  <div>
    <div class="project-wrapper">
      <header class="project-header">
        <h1>Project: {{ project.title }}</h1>
        <div class="tags">
          <template v-for="tag in project.tags">
            <CategoryTag :key="'tag-' + tag.id" :tag="tag" />
          </template>
        </div>
      </header>
      <article class="project-body">
        <h2>Description</h2>
        <!-- eslint-disable vue/no-v-html -->
        <div class="description" v-html="description"></div>
        <div class="gallery">
          <template v-for="i in 6">
            <div :key="'image-' + i" class="image"></div>
          </template>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import DOMPurify from "dompurify"
import { marked } from "marked"

marked.setOptions({
  breaks: true,
})

export default {
  name: "ProjectPage",
  data() {
    return {
      project: null,
    }
  },
  computed: {
    description() {
      if (process.browser) {
        if (this.project.description) {
          return DOMPurify.sanitize(marked.parse(this.project.description), {
            USE_PROFILES: { html: true },
          })
        }
      }

      return ""
    },
  },
  created() {
    this.getProjectData()
  },
  methods: {
    getProjectData() {
      this.project = this.$store.getters.getProjects.find(
        (p) => p.slug === this.$route.params.slug
      )
    },
  },
}
</script>

<style lang="sass">
.project-wrapper
  position: relative
  padding: 20px
  &::after
    @include timelineBulb(130px)
  .project-header
    max-width: 1000px
    margin: 0 auto
    margin-top: 100px
    text-align: center
    h1
      font-size: 3rem
    .tags
      margin: 10px 0
      display: flex
      align-items: center
      justify-content: center
      column-gap: 10px
      row-gap: 10px
      flex-wrap: wrap
  .project-body
    max-width: 1000px
    margin: 50px auto
    text-align: center
    h2
      font-size: 2rem
    .description
      margin: 0 auto
      max-width: 500px
      padding: 20px
      a
        @extend .extLink
      p
        display: block
        line-height: 1.4
        font-weight: 300
        text-align: justify
        margin-bottom: 10px

    .gallery
      margin: 50px 0
      .image
        display: block
        width: 80%
        height: 600px
        background: #cacaca
        margin: 10px auto

@media (max-width: 557px)
  .project-wrapper
    .project-header
      h1
        font-size: 2.5rem
    .project-body
      h2
        font-size: 1.5rem
</style>