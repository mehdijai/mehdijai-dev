<template>
  <div>
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
          content: "Mehdi Jai - JavaScript Fullstack developer.",
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
          content: "Mehdi Jai - JavaScript Fullstack developer.",
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