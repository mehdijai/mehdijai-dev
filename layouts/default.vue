<template>
  <div>
    <div v-if="$nuxt.isOffline">You are offline</div>
    <div class="v-timeline"></div>
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
export default {
  name: "DefaultLayout",
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
.v-timeline
  position: absolute
  width: 2px
  background: $gray-light
  height: calc(100% - 50px - 60px - 60px - 80px)
  top: 100px
  left: 40px

@media (max-width: 582px)
  .v-timeline
    left: 30px

@media (max-width: 464px)
  .v-timeline
    left: 20px
    width: 1px

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