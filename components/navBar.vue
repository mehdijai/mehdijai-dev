<template>
  <nav>
    <div class="container">
      <nuxt-link to="/" class="logo">
        <svg viewBox="0 0 34 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_10_146)">
            <path d="M27.2837 0L16.8076 10.3365L6.33951 0H0V23.3959L6.33951 29.6557V8.84976L16.8076 19.1941L27.2837 8.84976V20.8059L16.8076 31.1424V27.4804L10.4681 21.2207V33.7402L16.8076 40L33.5439 23.4742L33.6232 23.3959V0H27.2837Z" fill="#FAFAFA"/>
            <path d="M33.6232 39.9922V27.8247L21.2928 39.9922H33.6232Z" fill="#FAFAFA"/>
          </g>
          <defs>
            <clipPath id="clip0_10_146">
              <rect width="33.6232" height="40" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </nuxt-link>
      <template v-for="(link, index) in links">
        <nuxt-link
          :key="index"
          class="link"
          :class="getClass[index]"
          :to="{
            path: link.link.includes('#') ? '/' : link.link,
            hash: link.link.includes('#') ? link.link.replace('/', '') : null,
          }"
          >{{ link.title }}</nuxt-link
        >
      </template>
      <button
        class="toggleMenu"
        :class="openMenu ? 'active' : ''"
        @click="openMenu = !openMenu"
      >
        <span class="material-icons">menu</span>
      </button>
    </div>
    <Transition name="slide-nav">
      <div v-if="openMenu" class="menu-list">
        <template v-for="(link, index) in links">
          <nuxt-link
            :key="index"
            class="link"
            :class="link.isCTA ? 'cta' : ''"
            :to="link.link"
            >{{ link.title }}</nuxt-link
          >
        </template>
      </div>
    </Transition>
  </nav>
</template>

<script>
import { gsap } from "gsap"
export default {
  name: "NavBar",
  data() {
    return {
      openMenu: false,
      links: [
        {
          title: "About",
          link: "/#about",
          isCTA: false,
        },
        {
          title: "Projects",
          link: "/#projects",
          isCTA: false,
        },
        {
          title: "Contact",
          link: "/#contact",
          isCTA: false,
        },
        {
          title: "Resume",
          link: "/resume.pdf",
          isCTA: true,
        },
      ],
      currentHash: null,
    }
  },
  computed: {
    getClass() {
      return this.links.map((link) => {
        let linkClass = ""
        if (link.isCTA) {
          linkClass += "cta "
        }

        if (this.currentHash !== null && link.link.includes(this.currentHash))
          linkClass += "active-link"

        return linkClass
      })
    },
  },
  watch: {
    $route(to) {
      this.currentHash = to.hash !== "" ? to.hash : null
    },
  },
  mounted() {
    const tl = gsap.timeline({
      defaults: { duration: 0.5, ease: "power4.inOut" },
    })
    tl.from("nav", {
      clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
      opacity: 0,
    })
    .from(".container > a", {
      x: -5,
      opacity: 0,
      stagger: 0.1
    }, "-=0.3")
  },
}
</script>

<style lang="sass">
nav
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%)
  width: 100%
  background-color: rgba($black-light, 0.8)
  backdrop-filter: blur(5px)
  box-shadow: 0 5px 10px 2px rgba($black, 0.5)
  position: fixed
  z-index: 1000

  .container
    max-width: 1000px
    margin: 0 auto
    padding: 10px 20px
    display: flex
    column-gap: 10px
    align-items: center
    position: relative

    .logo
      margin-right: auto
      svg
        width: 30px

    .link
      padding: 5px 10px
      border-radius: 5px
      font-weight: 500
      text-decoration: none
      font-size: 0.9rem
      color: $gray-light
      transition: 0.4s ease-in
      &:not(.cta)
        &:hover
          background: $black
          color: $gray-light
      &.cta
        background: $primary-light
        color: $black
        font-weight: 600
        &:hover
          background: $primary

    .toggleMenu
      display: none
      background: transparent
      color: $gray-light
      transition: 0.4s background ease-in-out
      &.active
        background: $black
      span
        display: flex
        align-items: center
        justify-content: center

  .menu-list
    position: absolute
    z-index: 999
    top: 100%
    right: 0
    width: 200px
    background: $gray-light
    height: calc(100vh - 54px)
    display: flex
    flex-direction: column
    row-gap: 20px
    .link
      position: relative
      display: block
      text-align: center
      padding: 20px 15px
      font-weight: 600
      text-decoration: none
      font-size: 0.9rem
      color: $black
      transition: 0.4s ease-in
      &:first-of-type
        margin-top: 10px
      &:not(.cta)
        &::after
          content: ""
          position: absolute
          bottom: 0
          left: 0
          height: 2px
          width: 30%
          background: $black
        &:hover
          background: $black
          color: $gray-light
      &.cta
        margin-top: auto
        background: $primary-light
        color: $black
        font-weight: 700
        &:hover
          background: $primary

.active-link
  color: $primary-light
  background: $black

.slide-nav-enter-active
  animation: menu-out 0.5s ease-in-out

.slide-nav-leave-active
  animation: menu-out 0.5s ease-in-out reverse

@media (max-width: 475px)
  .toggleMenu
    display: block !important
  .link
    display: none
  .logo>svg
    width: 25px !important

@keyframes menu-out
  from
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0)
  to
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%)
</style>