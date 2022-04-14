<template>
  <div>
    <div class="v-timeline"></div>
    <HeroSection />
    <AboutSection id="about" />
    <ProjectsSection id="projects" />
    <ContactSection id="contact" />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  head() {
    return {
      meta: [
        {
          property: "og:title",
          content: "Mehdi Jai - JavaScript Frontend developer.",
        },
        {
          property: "og:type",
          content: "article",
        },
        {
          property: "og:image",
          content: "/profile-picture.png",
        },
        {
          property: "og:image:alt",
          content: "Mehdi Jai - JavaScript Frontend developer.",
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
}
</script>

<style lang="sass">
.v-timeline
  position: absolute
  width: 2px
  background: $gray-light
  height: calc(100% - 50px - 60px - 60px - 100px)
  top: 100px
  left: 40px

@media (max-width: 582px)
  .v-timeline
    left: 30px

@media (max-width: 464px)
  .v-timeline
    left: 20px
    width: 1px
</style>