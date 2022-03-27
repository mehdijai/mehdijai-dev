<template>
  <section id="projects" class="projects">
      <div class="container">
        <h2>Projects I built.</h2>
        <div class="grid">
          <ProjectCard
            v-for="p in 6"
            :key="p"
            title="Tabarro3.ma"
            :tags="[{ name: 'Larevel', bg: '#F05340', color: '#ffffff' }]"
          />
        </div>
      </div>
    </section>
</template>

<script>
export default {
name: "ProjectsSection"
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
    padding: 50px 0
    h2
      font-size: 2.5rem
      margin-bottom: 50px
    .grid
      display: grid
      grid-template-columns: repeat(3, minmax(0, 1fr))
      gap: 50px
</style>