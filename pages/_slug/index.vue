<template>
  <div>
    <!-- <div v-if="$fetchState.pending" class="alert pending">
      <h2>Fetching project...</h2>
    </div>-->
    <!-- <div v-if="$fetchState.error" class="alert error">
      <h2>An error occurred :(</h2>
      <button @click="$fetch">
        <span class="material-icons"> refresh </span>
      </button>
      <nuxt-link :to="{ path: '/' }" class="extLink">Home</nuxt-link>
    </div> -->
    <div
      itemscope
      itemtype="https://schema.org/Article"
      class="project-wrapper"
    >
      <header class="project-header">
        <h1 class="project-title" itemprop="headline">
          Project: {{ project.title }}
        </h1>
        <span itemprop="keywords" class="hidden">{{
          project.tags.map((t) => t.title).join(",")
        }}</span>
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
        <div
          itemprop="backstory"
          class="description"
          v-html="project.content"
        ></div>
      </article>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { CSSRulePlugin } from "gsap/CSSRulePlugin"

export default {
  name: "ProjectPage",
  asyncData({ redirect, params, store }) {
    const project = store.getters.getProjects.find(
      (p) => p.slug === params.slug
    )
    if (project === undefined) {
      redirect("/404")
    }
    return { project }
  },
  head() {
    if (this.project) {
      return {
        title: this.project.title + " - Mehdi Jai",
        meta: [
          {
            hid: "description",
            name: "description",
            content: this.project.content,
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
    } else {
      return {}
    }
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
      .from(
        ".tag",
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          stagger: 0.1,
        },
        "-=0.6"
      )
      .from(
        ".project-body > h2, .description",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          stagger: 0.1,
        },
        "-=0.7"
      )
  },
}
</script>

<style lang="sass">
.alert
  height: 100vh
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  row-gap: 20px
  text-align: center
  &.pending
    h2
      font-size: 2rem
      color: $gray-light
  &.error
    button
      background: $black-light
      transition: 0.2s ease
      span
        color: $gray-light
        display: flex
        align-items: center
        justify-content: center
      &:hover
        background: lighten($black-light, 5)
    h2
      font-size: 2rem
      color: $error
.project-wrapper
  position: relative
  padding: 20px
  min-height: calc(100vh - 57px)
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
      padding: 20px
      text-align: left
      h1
        font-size: 2rem
        line-height: 2
      h2
        font-size: 1.2rem
        margin-bottom: 5px
      a
        @extend .extLink
      p
        display: block
        line-height: 1.4
        font-weight: 300
        text-align: justify
        margin-bottom: 10px
      img
        width: 100%
        margin: 10px 0
      figure
        display: block
        margin: 20px 0
        width: 100%
      video
        display: block
        width: 100%
        margin: 0 auto

@media (max-width: 557px)
  .project-wrapper
    .project-header
      .project-title
        font-size: 2.5rem
    .project-body
      h2
        font-size: 1.5rem
</style>