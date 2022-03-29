<template>
  <div>
    <NavBar />
    <div class="v-timeline"></div>
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <ContactSection />
    <footer>
      <span>Designed & Developed By Mehdi Jai</span>
    </footer>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
}
</script>
<style lang="sass">
.v-timeline
  position: absolute
  width: 2px
  background: $gray-light
  height: calc(3.5 * 100vh)
  top: calc(30vh - 50px)
  left: 40px

@media (max-width: 616px)
  .v-timeline
    height: calc(6 * 100vh)

@media (max-width: 582px)
  .v-timeline
    left: 30px

@media (max-width: 464px)
  .v-timeline
    left: 20px
    width: 1px
    top: calc(30vh - 60px)

footer
  background: $black-light
  text-align: center
  padding: 20px
  span
    font-weight: 500
</style>
