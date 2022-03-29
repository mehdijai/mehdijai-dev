<template>
  <section class="projects">
    <div class="container">
      <h2>Projects I built.</h2>
      <div class="grid">
        <template v-for="project in projects">
          <ProjectCard :key="project.id" :project="project" />
        </template>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  name: "ProjectsSection",
  computed: {
    ...mapGetters({ projects: "getProjects" }),
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
    h2
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
      .grid
        grid-template-columns: repeat(2, minmax(0, 1fr))

@media (max-width: 616px)
  .projects
    .container
      .grid
        grid-template-columns: repeat(1, minmax(0, 1fr))
</style>
