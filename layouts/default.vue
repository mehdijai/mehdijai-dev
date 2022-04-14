<template>
  <div>
    <NavBar />
    <Nuxt />
    <button id="fabButton" class="fab" @click="scrollUp">
      <span class="material-icons">arrow_upward</span>
    </button>
    <footer>
      <span>Designed & Developed By Mehdi Jai</span>
    </footer>
  </div>
</template>

<script>
import { gsap } from "gsap"
export default {
  name: "DefaultLayout",
  created() {
    this.$store.commit("setProjects")
  },
  mounted() {
    const fabButton = document.getElementById("fabButton")

    document.addEventListener("scroll", () => {
      const docScroll = document.documentElement.scrollTop
      if (document.body.scrollTop > 200 || docScroll > 200) {
        fabButton.style.display = "block"
      } else {
        fabButton.style.display = "none"
      }
    })

    gsap.from(".v-timeline", {
      duration: 0.7,
      ease: "power4.inOut",
      height: 0,
    })
  },
  methods: {
    scrollUp() {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    },
  },
}
</script>

<style lang="sass">
.fab
  display: none
  position: fixed
  bottom: 20px
  right: 20px
  background: $black-light
  padding: 10px
  z-index: 998
  box-shadow: 0 5px 10px 2px rgba($black, 0.5)
  transition: 0.3s ease-in-out
  span
    display: flex
    align-items: center
    justify-content: center
    color: $gray-light
    transition: 0.4s ease-in-out
  &:hover, &:active
    background: $primary-light
    span
      color: $black
      transform: translateY(-3px)

footer
  background: $black-light
  text-align: center
  padding: 20px
  span
    font-weight: 500
</style>