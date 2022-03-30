<template>
  <section class="projects">
    <div class="container">
      <h2 class="projects-title">Projects I built.</h2>
      <div class="grid">
        <template v-for="project in projects">
          <ProjectCard :key="project.id" :project="project" />
        </template>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { CSSRulePlugin } from "gsap/CSSRulePlugin"
import { mapGetters } from "vuex"
export default {
  name: "ProjectsSection",
  computed: {
    ...mapGetters({ projects: "getProjects" }),
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger, CSSRulePlugin)
    const tl = gsap.timeline({
      defaults: { duration: 0.7, ease: "power4.inOut" },
      scrollTrigger: ".projects",
    })
    tl.from(".projects-title", {
      clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
    })
    .from(
      CSSRulePlugin.getRule(".projects:after"),
      {
        cssRule: {
          y: -50,
          clipPath: "circle(0.1% at 50% 50%)",
        },
      },
      "-=0.7"
    )
    .from(".project-card", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      stagger: 0.2
    }, "-=0.7")
  },
}
</script>

<style lang="sass">
.projects
  min-height: 100vh
  position: relative
  &::after
    @include timelineBulb(60px)
  .container
    max-width: 1000px
    margin: 0 auto
    padding: 50px !important
    .projects-title
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%)
      font-size: 2.5rem
      margin-bottom: 50px
    .grid
      display: grid
      justify-items: center
      grid-template-columns: repeat(3, minmax(0, 1fr))
      gap: 50px

@media (max-width: 1052px)
  .projects
    .container
      padding: 50px 70px !important
      .grid
        gap: 20px

@media (max-width: 816px)
  .projects
    .container
      .projects-title
        font-size: 2rem
      .grid
        grid-template-columns: repeat(2, minmax(0, 1fr))

@media (max-width: 616px)
  .projects
    .container
      .grid
        grid-template-columns: repeat(1, minmax(0, 1fr))
</style>
