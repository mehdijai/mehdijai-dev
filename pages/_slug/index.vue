<template>
  <div>
    <div itemscope itemtype="https://schema.org/Article" class="project-wrapper">
      <header class="project-header">
        <h1 class="project-title" itemprop="headline">Project: {{ project.title }}</h1>
        <span itemprop="keywords" class="hidden">{{project.tags.map((t) => t.name).join(',')}}</span>
        <span itemid="publisher" class="hidden">Mehdi Jai</span>
        <div class="tags">
          <template v-for="tag in project.tags">
            <CategoryTag :key="'tag-' + tag.id" :tag="tag" />
          </template>
        </div>
      </header>
      <article itemprop="articleSection" class="project-body">
        <h2>Description</h2>
        <!-- eslint-disable vue/no-v-html -->
        <div itemprop="backstory" class="description" v-html="description"></div>
        <div class="gallery">
          <template v-for="i in 6">
            <div :key="'image-' + i" class="image">
              <img itemprop="image" src="" alt="">
            </div>
          </template>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import DOMPurify from "dompurify"
import { marked } from "marked"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { CSSRulePlugin } from "gsap/CSSRulePlugin"

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
  head() {
    return {
      title: this.project.title + " - Mehdi Jai",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.render_plain(this.project.description),
        },
        {
          property: "og:title",
          content: this.project.title,
          template: (chunk) => `${chunk} - Mehdi Jai`,
          vmid: "og:title",
        },
        {
          property: "og:type",
          content: "article",
        },
        {
          property: "og:image",
          content: this.project.thumbnail,
        },
        {
          property: "og:image:alt",
          content: this.project.title,
        },
        {
          property: "og:url",
          content: this.$route.path,
        },
        {
          property: "article:author",
          content: "Mehdi Jai",
        },
        {
          property: "article:section",
          content: "Global",
        },
      ],
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
  mounted() {
    gsap.registerPlugin(ScrollTrigger, CSSRulePlugin)
    const tl = gsap.timeline({
      defaults: { duration: 0.7, ease: "power4.inOut" },
      scrollTrigger: ".project-wrapper",
    })
    tl.from(".project-title", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    })
    .from(
        CSSRulePlugin.getRule(".project-wrapper:after"),
        {
          cssRule: {
            y: -50,
            clipPath: "circle(0.1% at 50% 50%)",
          },
        },
        "-=0.7"
      )
    .from(".tag", {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      stagger: 0.1
    }, "-=0.6")
    .from(".project-body > h2, .description", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      stagger: 0.1
    }, "-=0.7")
    .from(".gallery > .image", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      stagger: 0.1
    }, "-=0.6")
  },
  methods: {
    getProjectData() {
      this.project = this.$store.getters.getProjects.find(
        (p) => p.slug === this.$route.params.slug
      )
    },
    htmlEscapeToText(text) {
      return text.replace(/&#[0-9]*;|&amp;/g, function (escapeCode) {
        if (escapeCode.match(/amp/)) {
          return "&"
        }

        return String.fromCharCode(escapeCode.match(/[0-9]+/))
      })
    },
    // return a custom renderer for marked.
    render_plain() {
      const render = new marked.Renderer()

      // render just the text of a link
      render.link = function (href, title, text) {
        return text
      }

      // render just the text of a paragraph
      render.paragraph = function (text) {
        return this.htmlEscapeToText(text) + "\r\n"
      }

      // render just the text of a heading element, but indicates level
      render.heading = function (text, level) {
        return level + " ) " + text
      }

      // render nothing for images
      render.image = function (href, title, text) {
        return ""
      }

      return render
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
    .project-title
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%)
      font-size: 3rem
    .hidden
      display: none
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
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%)
      font-size: 2rem
    .description
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%)
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
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%)
        display: block
        width: 80%
        height: 600px
        background: #cacaca
        margin: 10px auto

@media (max-width: 557px)
  .project-wrapper
    .project-header
      .project-title
        font-size: 2.5rem
    .project-body
      h2
        font-size: 1.5rem
</style>